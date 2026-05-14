-- Polaroids for Mom — installer
-- One double-click: copies the screensaver into ~/Library/Screen Savers,
-- asks Brandi which tabletop she wants, opens System Settings.

on run
	-- Resolve the folder containing this installer
	set myPath to POSIX path of (path to me)
	set myFolder to do shell script "dirname " & quoted form of myPath
	set saverSrc to myFolder & "/PolaroidsForMom.saver"
	set destDir to (POSIX path of (path to home folder)) & "Library/Screen Savers"
	set saverDest to destDir & "/PolaroidsForMom.saver"

	-- Verify the .saver is next to this installer
	try
		do shell script "test -d " & quoted form of saverSrc
	on error
		display dialog "Couldn't find PolaroidsForMom.saver next to this installer." & return & return & "Make sure both files are in the SAME folder, then double-click me again." buttons {"OK"} default button "OK" with icon stop
		return
	end try

	-- Strip quarantine from the source so Gatekeeper never gates the install
	do shell script "xattr -dr com.apple.quarantine " & quoted form of saverSrc & " 2>/dev/null; true"

	-- Remove any prior install
	do shell script "rm -rf " & quoted form of saverDest & " " & quoted form of (destDir & "/PolaroidsSaver.saver") & "; true"

	-- Ensure ~/Library/Screen Savers exists
	do shell script "mkdir -p " & quoted form of destDir

	-- Copy the bundle in
	do shell script "cp -R " & quoted form of saverSrc & " " & quoted form of destDir

	-- Strip xattrs at destination
	do shell script "xattr -cr " & quoted form of saverDest & " 2>/dev/null; true"

	-- Ask Brandi which tabletop she wants
	set choiceList to {"Floral (recommended)", "Arch", "Straps", "Wallpaper", "Wood grain"}
	set tabletopPick to choose from list choiceList with title "Polaroids for Mom" with prompt "Pick a tabletop pattern:" default items {"Floral (recommended)"} OK button name "Set" cancel button name "Skip"

	if tabletopPick is not false then
		set pickedLabel to item 1 of tabletopPick
		if pickedLabel starts with "Floral" then
			set valLiteral to "'floral'"
		else if pickedLabel starts with "Arch" then
			set valLiteral to "'arch'"
		else if pickedLabel starts with "Straps" then
			set valLiteral to "'straps'"
		else if pickedLabel starts with "Wallpaper" then
			set valLiteral to "'wallpaper'"
		else
			-- Wood grain → null (procedural wood)
			set valLiteral to "null"
		end if

		set configJs to saverDest & "/Contents/Resources/web/js/config-overrides.js"
		-- macOS sed -i needs the empty backup extension
		do shell script "sed -i '' -E \"s|window.POLAROIDS_TABLETOP = [^;]+;|window.POLAROIDS_TABLETOP = " & valLiteral & ";|\" " & quoted form of configJs
		-- Re-sign the modified bundle (adhoc, no key required)
		do shell script "codesign --force --deep --sign - " & quoted form of saverDest & " 2>/dev/null; true"
	end if

	-- Refresh the screensaver agents so the new entry appears in System Settings
	do shell script "killall legacyScreenSaver 2>/dev/null; killall WallpaperAgent 2>/dev/null; killall ScreenSaverEngine 2>/dev/null; true"

	-- Open System Settings to the Screen Saver pane
	do shell script "open 'x-apple.systempreferences:com.apple.ScreenSaver-Settings.extension' 2>/dev/null; true"

	-- Done
	display dialog "✨ Polaroids for Mom is installed!" & return & return & "System Settings just opened. Pick:" & return & "   Lock Screen → Screen Saver → Show All → Polaroids for Mom" buttons {"Got it"} default button "Got it"
end run
