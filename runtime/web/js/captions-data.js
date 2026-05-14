// Phase 1 mock captions for the 12 Drive/ placeholder photos.
//
// Source: 01-07-PLAN.md <interfaces> + 01-UI-SPEC.md §"Phase 1 placeholder captions".
//
// Per UI-SPEC §"Phase 1 placeholder captions", the set must include:
//   - At least 4 in full "Month YYYY / Place" format (this file: 5)
//   - At least 4 in date-only "Month YYYY" format          (this file: 5)
//   - At least 2 empty "" captions                         (this file: 2)
//   - At least 1 caption approaching the 28-char limit    (this file: "May 2021 / Galveston, TX" = 24)
//
// Every caption obeys CAPTION-03/04/06 + UI-SPEC §"Copywriting Contract":
//   - ≤ 28 characters total (CAPTION-03)
//   - Format: "Month YYYY / Place" or "Month YYYY" or "" (CAPTION-04)
//   - Full English month names, four-digit years
//   - Place format: "City, ST" or "Landmark Name", ≤ 20 chars
//   - No names, no day-precision, no multi-line, no emojis (PROJECT.md key decisions)
//   - Plausible US-based places only (UI-SPEC §"Phase 1 placeholder captions")
//
// Keys mirror PHOTO_MANIFEST exactly (the 12 Drive/ paths). Phase 3
// `polaroids caption` will replace this file with EXIF/AI-derived captions.

export const CAPTIONS = {
  '../../Drive/021.JPG':                                    'July 2019 / Lake Travis',
  '../../Drive/03-26-06_1756.jpg':                          'March 2006',
  '../../Drive/04-02-06_0154.jpg':                          'April 2006 / Austin, TX',
  '../../Drive/058 - Copy - Copy - Copy.JPG':               'August 2022 / Big Bend',
  '../../Drive/06-13-06_2318.jpg':                          'June 2006',
  '../../Drive/23-09-06_1654.jpg':                          'September 2006',
  '../../Drive/DSC_0356.jpg':                               'March 2022',
  '../../Drive/IMG_0029.JPG':                               'December 2018 / Houston',
  '../../Drive/l_0cea8969b90b24dd50038a663dd99835.jpg.jpg': '',
  '../../Drive/Photo 130.jpg':                              '',
  '../../Drive/Photo 173.jpg':                              'November 2020',
  '../../Drive/Photo 73.jpg':                               'May 2021 / Galveston, TX',
};
