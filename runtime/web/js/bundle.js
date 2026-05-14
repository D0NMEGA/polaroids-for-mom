(() => {
  // runtime/web/vendor/three.core.min.js
  var t = "184";
  var s = 0;
  var r = 1;
  var n = 2;
  var h = 1;
  var l = 2;
  var c = 3;
  var u = 0;
  var d = 1;
  var p = 2;
  var m = 0;
  var y = 1;
  var g = 2;
  var f = 3;
  var x = 4;
  var b = 5;
  var w = 100;
  var M = 101;
  var S = 102;
  var _ = 103;
  var A = 104;
  var T = 200;
  var z = 201;
  var C = 202;
  var I = 203;
  var B = 204;
  var k = 205;
  var O = 206;
  var P = 207;
  var R = 208;
  var N = 209;
  var V = 210;
  var E = 211;
  var L = 212;
  var F = 213;
  var j = 214;
  var D = 0;
  var U = 1;
  var W = 2;
  var q = 3;
  var J = 4;
  var X = 5;
  var Y = 6;
  var H = 7;
  var Z = 0;
  var G = 1;
  var $ = 2;
  var Q = 0;
  var K = 1;
  var tt = 2;
  var et = 3;
  var it = 4;
  var st = 5;
  var rt = 6;
  var nt = 7;
  var ht = 300;
  var lt = 301;
  var ct = 302;
  var ut = 303;
  var dt = 304;
  var pt = 306;
  var mt = 1e3;
  var yt = 1001;
  var gt = 1002;
  var ft = 1003;
  var xt = 1004;
  var vt = 1005;
  var Mt = 1006;
  var St = 1007;
  var At = 1008;
  var zt = 1009;
  var Ct = 1010;
  var It = 1011;
  var Bt = 1012;
  var kt = 1013;
  var Ot = 1014;
  var Pt = 1015;
  var Rt = 1016;
  var Nt = 1017;
  var Vt = 1018;
  var Et = 1020;
  var Lt = 35902;
  var Ft = 35899;
  var jt = 1021;
  var Dt = 1022;
  var Ut = 1023;
  var Wt = 1026;
  var qt = 1027;
  var Jt = 1028;
  var Xt = 1029;
  var Yt = 1030;
  var Ht = 1031;
  var Gt = 1033;
  var $t = 33776;
  var Qt = 33777;
  var Kt = 33778;
  var te = 33779;
  var ee = 35840;
  var ie = 35841;
  var se = 35842;
  var re = 35843;
  var ne = 36196;
  var ae = 37492;
  var oe = 37496;
  var he = 37488;
  var le = 37489;
  var ce = 37490;
  var ue = 37491;
  var de = 37808;
  var pe = 37809;
  var me = 37810;
  var ye = 37811;
  var ge = 37812;
  var fe = 37813;
  var xe = 37814;
  var be = 37815;
  var ve = 37816;
  var we = 37817;
  var Me = 37818;
  var Se = 37819;
  var _e = 37820;
  var Ae = 37821;
  var Te = 36492;
  var ze = 36494;
  var Ce = 36495;
  var Ie = 36283;
  var Be = 36284;
  var ke = 36285;
  var Oe = 36286;
  var Ve = 2300;
  var Ee = 2301;
  var Le = 2302;
  var Fe = 2303;
  var je = 2400;
  var De = 2401;
  var Ue = 2402;
  var Qe = 0;
  var Ke = 1;
  var ti = "";
  var ei = "srgb";
  var ii = "srgb-linear";
  var si = "linear";
  var ri = "srgb";
  var li = 7680;
  var _i = 512;
  var Ai = 513;
  var Ti = 514;
  var zi = 515;
  var Ci = 516;
  var Ii = 517;
  var Bi = 518;
  var ki = 519;
  var Oi = 35044;
  var Ui = "300 es";
  var Wi = 2e3;
  var qi = 2001;
  function $i(t2) {
    return ArrayBuffer.isView(t2) && !(t2 instanceof DataView);
  }
  function Qi(t2) {
    return document.createElementNS("http://www.w3.org/1999/xhtml", t2);
  }
  function Ki() {
    const t2 = Qi("canvas");
    return t2.style.display = "block", t2;
  }
  var ts = {};
  var es = null;
  function rs(...t2) {
    const e2 = "THREE." + t2.shift();
    es ? es("log", e2, ...t2) : console.log(e2, ...t2);
  }
  function ns(t2) {
    const e2 = t2[0];
    if ("string" == typeof e2 && e2.startsWith("TSL:")) {
      const e3 = t2[1];
      e3 && e3.isStackTrace ? t2[0] += " " + e3.getLocation() : t2[1] = 'Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.';
    }
    return t2;
  }
  function as(...t2) {
    const e2 = "THREE." + (t2 = ns(t2)).shift();
    if (es) es("warn", e2, ...t2);
    else {
      const i2 = t2[0];
      i2 && i2.isStackTrace ? console.warn(i2.getError(e2)) : console.warn(e2, ...t2);
    }
  }
  function os(...t2) {
    const e2 = "THREE." + (t2 = ns(t2)).shift();
    if (es) es("error", e2, ...t2);
    else {
      const i2 = t2[0];
      i2 && i2.isStackTrace ? console.error(i2.getError(e2)) : console.error(e2, ...t2);
    }
  }
  function hs(...t2) {
    const e2 = t2.join(" ");
    e2 in ts || (ts[e2] = true, as(...t2));
  }
  function cs(t2, e2, i2) {
    return new Promise(function(s2, r2) {
      setTimeout(function n2() {
        switch (t2.clientWaitSync(e2, t2.SYNC_FLUSH_COMMANDS_BIT, 0)) {
          case t2.WAIT_FAILED:
            r2();
            break;
          case t2.TIMEOUT_EXPIRED:
            setTimeout(n2, i2);
            break;
          default:
            s2();
        }
      }, i2);
    });
  }
  var us = { [D]: 1, [W]: 6, [J]: 7, [q]: 5, [U]: 0, [Y]: 2, [H]: 4, [X]: 3 };
  var ds = class {
    addEventListener(t2, e2) {
      void 0 === this._listeners && (this._listeners = {});
      const i2 = this._listeners;
      void 0 === i2[t2] && (i2[t2] = []), -1 === i2[t2].indexOf(e2) && i2[t2].push(e2);
    }
    hasEventListener(t2, e2) {
      const i2 = this._listeners;
      return void 0 !== i2 && (void 0 !== i2[t2] && -1 !== i2[t2].indexOf(e2));
    }
    removeEventListener(t2, e2) {
      const i2 = this._listeners;
      if (void 0 === i2) return;
      const s2 = i2[t2];
      if (void 0 !== s2) {
        const t3 = s2.indexOf(e2);
        -1 !== t3 && s2.splice(t3, 1);
      }
    }
    dispatchEvent(t2) {
      const e2 = this._listeners;
      if (void 0 === e2) return;
      const i2 = e2[t2.type];
      if (void 0 !== i2) {
        t2.target = this;
        const e3 = i2.slice(0);
        for (let i3 = 0, s2 = e3.length; i3 < s2; i3++) e3[i3].call(this, t2);
        t2.target = null;
      }
    }
  };
  var ps = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
  var ys = Math.PI / 180;
  var gs = 180 / Math.PI;
  function fs() {
    const t2 = 4294967295 * Math.random() | 0, e2 = 4294967295 * Math.random() | 0, i2 = 4294967295 * Math.random() | 0, s2 = 4294967295 * Math.random() | 0;
    return (ps[255 & t2] + ps[t2 >> 8 & 255] + ps[t2 >> 16 & 255] + ps[t2 >> 24 & 255] + "-" + ps[255 & e2] + ps[e2 >> 8 & 255] + "-" + ps[e2 >> 16 & 15 | 64] + ps[e2 >> 24 & 255] + "-" + ps[63 & i2 | 128] + ps[i2 >> 8 & 255] + "-" + ps[i2 >> 16 & 255] + ps[i2 >> 24 & 255] + ps[255 & s2] + ps[s2 >> 8 & 255] + ps[s2 >> 16 & 255] + ps[s2 >> 24 & 255]).toLowerCase();
  }
  function xs(t2, e2, i2) {
    return Math.max(e2, Math.min(i2, t2));
  }
  function bs(t2, e2) {
    return (t2 % e2 + e2) % e2;
  }
  function vs(t2, e2, i2) {
    return (1 - i2) * t2 + i2 * e2;
  }
  function ws(t2, e2) {
    switch (e2.constructor) {
      case Float32Array:
        return t2;
      case Uint32Array:
        return t2 / 4294967295;
      case Uint16Array:
        return t2 / 65535;
      case Uint8Array:
        return t2 / 255;
      case Int32Array:
        return Math.max(t2 / 2147483647, -1);
      case Int16Array:
        return Math.max(t2 / 32767, -1);
      case Int8Array:
        return Math.max(t2 / 127, -1);
      default:
        throw new Error("Invalid component type.");
    }
  }
  function Ms(t2, e2) {
    switch (e2.constructor) {
      case Float32Array:
        return t2;
      case Uint32Array:
        return Math.round(4294967295 * t2);
      case Uint16Array:
        return Math.round(65535 * t2);
      case Uint8Array:
        return Math.round(255 * t2);
      case Int32Array:
        return Math.round(2147483647 * t2);
      case Int16Array:
        return Math.round(32767 * t2);
      case Int8Array:
        return Math.round(127 * t2);
      default:
        throw new Error("Invalid component type.");
    }
  }
  var __s = class __s {
    constructor(t2 = 0, e2 = 0) {
      this.x = t2, this.y = e2;
    }
    get width() {
      return this.x;
    }
    set width(t2) {
      this.x = t2;
    }
    get height() {
      return this.y;
    }
    set height(t2) {
      this.y = t2;
    }
    set(t2, e2) {
      return this.x = t2, this.y = e2, this;
    }
    setScalar(t2) {
      return this.x = t2, this.y = t2, this;
    }
    setX(t2) {
      return this.x = t2, this;
    }
    setY(t2) {
      return this.y = t2, this;
    }
    setComponent(t2, e2) {
      switch (t2) {
        case 0:
          this.x = e2;
          break;
        case 1:
          this.y = e2;
          break;
        default:
          throw new Error("index is out of range: " + t2);
      }
      return this;
    }
    getComponent(t2) {
      switch (t2) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        default:
          throw new Error("index is out of range: " + t2);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y);
    }
    copy(t2) {
      return this.x = t2.x, this.y = t2.y, this;
    }
    add(t2) {
      return this.x += t2.x, this.y += t2.y, this;
    }
    addScalar(t2) {
      return this.x += t2, this.y += t2, this;
    }
    addVectors(t2, e2) {
      return this.x = t2.x + e2.x, this.y = t2.y + e2.y, this;
    }
    addScaledVector(t2, e2) {
      return this.x += t2.x * e2, this.y += t2.y * e2, this;
    }
    sub(t2) {
      return this.x -= t2.x, this.y -= t2.y, this;
    }
    subScalar(t2) {
      return this.x -= t2, this.y -= t2, this;
    }
    subVectors(t2, e2) {
      return this.x = t2.x - e2.x, this.y = t2.y - e2.y, this;
    }
    multiply(t2) {
      return this.x *= t2.x, this.y *= t2.y, this;
    }
    multiplyScalar(t2) {
      return this.x *= t2, this.y *= t2, this;
    }
    divide(t2) {
      return this.x /= t2.x, this.y /= t2.y, this;
    }
    divideScalar(t2) {
      return this.multiplyScalar(1 / t2);
    }
    applyMatrix3(t2) {
      const e2 = this.x, i2 = this.y, s2 = t2.elements;
      return this.x = s2[0] * e2 + s2[3] * i2 + s2[6], this.y = s2[1] * e2 + s2[4] * i2 + s2[7], this;
    }
    min(t2) {
      return this.x = Math.min(this.x, t2.x), this.y = Math.min(this.y, t2.y), this;
    }
    max(t2) {
      return this.x = Math.max(this.x, t2.x), this.y = Math.max(this.y, t2.y), this;
    }
    clamp(t2, e2) {
      return this.x = xs(this.x, t2.x, e2.x), this.y = xs(this.y, t2.y, e2.y), this;
    }
    clampScalar(t2, e2) {
      return this.x = xs(this.x, t2, e2), this.y = xs(this.y, t2, e2), this;
    }
    clampLength(t2, e2) {
      const i2 = this.length();
      return this.divideScalar(i2 || 1).multiplyScalar(xs(i2, t2, e2));
    }
    floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
    }
    ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
    }
    round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
    }
    roundToZero() {
      return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
    }
    negate() {
      return this.x = -this.x, this.y = -this.y, this;
    }
    dot(t2) {
      return this.x * t2.x + this.y * t2.y;
    }
    cross(t2) {
      return this.x * t2.y - this.y * t2.x;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    angle() {
      return Math.atan2(-this.y, -this.x) + Math.PI;
    }
    angleTo(t2) {
      const e2 = Math.sqrt(this.lengthSq() * t2.lengthSq());
      if (0 === e2) return Math.PI / 2;
      const i2 = this.dot(t2) / e2;
      return Math.acos(xs(i2, -1, 1));
    }
    distanceTo(t2) {
      return Math.sqrt(this.distanceToSquared(t2));
    }
    distanceToSquared(t2) {
      const e2 = this.x - t2.x, i2 = this.y - t2.y;
      return e2 * e2 + i2 * i2;
    }
    manhattanDistanceTo(t2) {
      return Math.abs(this.x - t2.x) + Math.abs(this.y - t2.y);
    }
    setLength(t2) {
      return this.normalize().multiplyScalar(t2);
    }
    lerp(t2, e2) {
      return this.x += (t2.x - this.x) * e2, this.y += (t2.y - this.y) * e2, this;
    }
    lerpVectors(t2, e2, i2) {
      return this.x = t2.x + (e2.x - t2.x) * i2, this.y = t2.y + (e2.y - t2.y) * i2, this;
    }
    equals(t2) {
      return t2.x === this.x && t2.y === this.y;
    }
    fromArray(t2, e2 = 0) {
      return this.x = t2[e2], this.y = t2[e2 + 1], this;
    }
    toArray(t2 = [], e2 = 0) {
      return t2[e2] = this.x, t2[e2 + 1] = this.y, t2;
    }
    fromBufferAttribute(t2, e2) {
      return this.x = t2.getX(e2), this.y = t2.getY(e2), this;
    }
    rotateAround(t2, e2) {
      const i2 = Math.cos(e2), s2 = Math.sin(e2), r2 = this.x - t2.x, n2 = this.y - t2.y;
      return this.x = r2 * i2 - n2 * s2 + t2.x, this.y = r2 * s2 + n2 * i2 + t2.y, this;
    }
    random() {
      return this.x = Math.random(), this.y = Math.random(), this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y;
    }
  };
  __s.prototype.isVector2 = true;
  var _s = __s;
  var As = class {
    constructor(t2 = 0, e2 = 0, i2 = 0, s2 = 1) {
      this.isQuaternion = true, this._x = t2, this._y = e2, this._z = i2, this._w = s2;
    }
    static slerpFlat(t2, e2, i2, s2, r2, n2, a2) {
      let o2 = i2[s2 + 0], h2 = i2[s2 + 1], l2 = i2[s2 + 2], c2 = i2[s2 + 3], u2 = r2[n2 + 0], d2 = r2[n2 + 1], p2 = r2[n2 + 2], m2 = r2[n2 + 3];
      if (c2 !== m2 || o2 !== u2 || h2 !== d2 || l2 !== p2) {
        let t3 = o2 * u2 + h2 * d2 + l2 * p2 + c2 * m2;
        t3 < 0 && (u2 = -u2, d2 = -d2, p2 = -p2, m2 = -m2, t3 = -t3);
        let e3 = 1 - a2;
        if (t3 < 0.9995) {
          const i3 = Math.acos(t3), s3 = Math.sin(i3);
          e3 = Math.sin(e3 * i3) / s3, o2 = o2 * e3 + u2 * (a2 = Math.sin(a2 * i3) / s3), h2 = h2 * e3 + d2 * a2, l2 = l2 * e3 + p2 * a2, c2 = c2 * e3 + m2 * a2;
        } else {
          o2 = o2 * e3 + u2 * a2, h2 = h2 * e3 + d2 * a2, l2 = l2 * e3 + p2 * a2, c2 = c2 * e3 + m2 * a2;
          const t4 = 1 / Math.sqrt(o2 * o2 + h2 * h2 + l2 * l2 + c2 * c2);
          o2 *= t4, h2 *= t4, l2 *= t4, c2 *= t4;
        }
      }
      t2[e2] = o2, t2[e2 + 1] = h2, t2[e2 + 2] = l2, t2[e2 + 3] = c2;
    }
    static multiplyQuaternionsFlat(t2, e2, i2, s2, r2, n2) {
      const a2 = i2[s2], o2 = i2[s2 + 1], h2 = i2[s2 + 2], l2 = i2[s2 + 3], c2 = r2[n2], u2 = r2[n2 + 1], d2 = r2[n2 + 2], p2 = r2[n2 + 3];
      return t2[e2] = a2 * p2 + l2 * c2 + o2 * d2 - h2 * u2, t2[e2 + 1] = o2 * p2 + l2 * u2 + h2 * c2 - a2 * d2, t2[e2 + 2] = h2 * p2 + l2 * d2 + a2 * u2 - o2 * c2, t2[e2 + 3] = l2 * p2 - a2 * c2 - o2 * u2 - h2 * d2, t2;
    }
    get x() {
      return this._x;
    }
    set x(t2) {
      this._x = t2, this._onChangeCallback();
    }
    get y() {
      return this._y;
    }
    set y(t2) {
      this._y = t2, this._onChangeCallback();
    }
    get z() {
      return this._z;
    }
    set z(t2) {
      this._z = t2, this._onChangeCallback();
    }
    get w() {
      return this._w;
    }
    set w(t2) {
      this._w = t2, this._onChangeCallback();
    }
    set(t2, e2, i2, s2) {
      return this._x = t2, this._y = e2, this._z = i2, this._w = s2, this._onChangeCallback(), this;
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._w);
    }
    copy(t2) {
      return this._x = t2.x, this._y = t2.y, this._z = t2.z, this._w = t2.w, this._onChangeCallback(), this;
    }
    setFromEuler(t2, e2 = true) {
      const i2 = t2._x, s2 = t2._y, r2 = t2._z, n2 = t2._order, a2 = Math.cos, o2 = Math.sin, h2 = a2(i2 / 2), l2 = a2(s2 / 2), c2 = a2(r2 / 2), u2 = o2(i2 / 2), d2 = o2(s2 / 2), p2 = o2(r2 / 2);
      switch (n2) {
        case "XYZ":
          this._x = u2 * l2 * c2 + h2 * d2 * p2, this._y = h2 * d2 * c2 - u2 * l2 * p2, this._z = h2 * l2 * p2 + u2 * d2 * c2, this._w = h2 * l2 * c2 - u2 * d2 * p2;
          break;
        case "YXZ":
          this._x = u2 * l2 * c2 + h2 * d2 * p2, this._y = h2 * d2 * c2 - u2 * l2 * p2, this._z = h2 * l2 * p2 - u2 * d2 * c2, this._w = h2 * l2 * c2 + u2 * d2 * p2;
          break;
        case "ZXY":
          this._x = u2 * l2 * c2 - h2 * d2 * p2, this._y = h2 * d2 * c2 + u2 * l2 * p2, this._z = h2 * l2 * p2 + u2 * d2 * c2, this._w = h2 * l2 * c2 - u2 * d2 * p2;
          break;
        case "ZYX":
          this._x = u2 * l2 * c2 - h2 * d2 * p2, this._y = h2 * d2 * c2 + u2 * l2 * p2, this._z = h2 * l2 * p2 - u2 * d2 * c2, this._w = h2 * l2 * c2 + u2 * d2 * p2;
          break;
        case "YZX":
          this._x = u2 * l2 * c2 + h2 * d2 * p2, this._y = h2 * d2 * c2 + u2 * l2 * p2, this._z = h2 * l2 * p2 - u2 * d2 * c2, this._w = h2 * l2 * c2 - u2 * d2 * p2;
          break;
        case "XZY":
          this._x = u2 * l2 * c2 - h2 * d2 * p2, this._y = h2 * d2 * c2 - u2 * l2 * p2, this._z = h2 * l2 * p2 + u2 * d2 * c2, this._w = h2 * l2 * c2 + u2 * d2 * p2;
          break;
        default:
          as("Quaternion: .setFromEuler() encountered an unknown order: " + n2);
      }
      return true === e2 && this._onChangeCallback(), this;
    }
    setFromAxisAngle(t2, e2) {
      const i2 = e2 / 2, s2 = Math.sin(i2);
      return this._x = t2.x * s2, this._y = t2.y * s2, this._z = t2.z * s2, this._w = Math.cos(i2), this._onChangeCallback(), this;
    }
    setFromRotationMatrix(t2) {
      const e2 = t2.elements, i2 = e2[0], s2 = e2[4], r2 = e2[8], n2 = e2[1], a2 = e2[5], o2 = e2[9], h2 = e2[2], l2 = e2[6], c2 = e2[10], u2 = i2 + a2 + c2;
      if (u2 > 0) {
        const t3 = 0.5 / Math.sqrt(u2 + 1);
        this._w = 0.25 / t3, this._x = (l2 - o2) * t3, this._y = (r2 - h2) * t3, this._z = (n2 - s2) * t3;
      } else if (i2 > a2 && i2 > c2) {
        const t3 = 2 * Math.sqrt(1 + i2 - a2 - c2);
        this._w = (l2 - o2) / t3, this._x = 0.25 * t3, this._y = (s2 + n2) / t3, this._z = (r2 + h2) / t3;
      } else if (a2 > c2) {
        const t3 = 2 * Math.sqrt(1 + a2 - i2 - c2);
        this._w = (r2 - h2) / t3, this._x = (s2 + n2) / t3, this._y = 0.25 * t3, this._z = (o2 + l2) / t3;
      } else {
        const t3 = 2 * Math.sqrt(1 + c2 - i2 - a2);
        this._w = (n2 - s2) / t3, this._x = (r2 + h2) / t3, this._y = (o2 + l2) / t3, this._z = 0.25 * t3;
      }
      return this._onChangeCallback(), this;
    }
    setFromUnitVectors(t2, e2) {
      let i2 = t2.dot(e2) + 1;
      return i2 < 1e-8 ? (i2 = 0, Math.abs(t2.x) > Math.abs(t2.z) ? (this._x = -t2.y, this._y = t2.x, this._z = 0, this._w = i2) : (this._x = 0, this._y = -t2.z, this._z = t2.y, this._w = i2)) : (this._x = t2.y * e2.z - t2.z * e2.y, this._y = t2.z * e2.x - t2.x * e2.z, this._z = t2.x * e2.y - t2.y * e2.x, this._w = i2), this.normalize();
    }
    angleTo(t2) {
      return 2 * Math.acos(Math.abs(xs(this.dot(t2), -1, 1)));
    }
    rotateTowards(t2, e2) {
      const i2 = this.angleTo(t2);
      if (0 === i2) return this;
      const s2 = Math.min(1, e2 / i2);
      return this.slerp(t2, s2), this;
    }
    identity() {
      return this.set(0, 0, 0, 1);
    }
    invert() {
      return this.conjugate();
    }
    conjugate() {
      return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
    }
    dot(t2) {
      return this._x * t2._x + this._y * t2._y + this._z * t2._z + this._w * t2._w;
    }
    lengthSq() {
      return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
    }
    length() {
      return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
    }
    normalize() {
      let t2 = this.length();
      return 0 === t2 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t2 = 1 / t2, this._x = this._x * t2, this._y = this._y * t2, this._z = this._z * t2, this._w = this._w * t2), this._onChangeCallback(), this;
    }
    multiply(t2) {
      return this.multiplyQuaternions(this, t2);
    }
    premultiply(t2) {
      return this.multiplyQuaternions(t2, this);
    }
    multiplyQuaternions(t2, e2) {
      const i2 = t2._x, s2 = t2._y, r2 = t2._z, n2 = t2._w, a2 = e2._x, o2 = e2._y, h2 = e2._z, l2 = e2._w;
      return this._x = i2 * l2 + n2 * a2 + s2 * h2 - r2 * o2, this._y = s2 * l2 + n2 * o2 + r2 * a2 - i2 * h2, this._z = r2 * l2 + n2 * h2 + i2 * o2 - s2 * a2, this._w = n2 * l2 - i2 * a2 - s2 * o2 - r2 * h2, this._onChangeCallback(), this;
    }
    slerp(t2, e2) {
      let i2 = t2._x, s2 = t2._y, r2 = t2._z, n2 = t2._w, a2 = this.dot(t2);
      a2 < 0 && (i2 = -i2, s2 = -s2, r2 = -r2, n2 = -n2, a2 = -a2);
      let o2 = 1 - e2;
      if (a2 < 0.9995) {
        const t3 = Math.acos(a2), h2 = Math.sin(t3);
        o2 = Math.sin(o2 * t3) / h2, e2 = Math.sin(e2 * t3) / h2, this._x = this._x * o2 + i2 * e2, this._y = this._y * o2 + s2 * e2, this._z = this._z * o2 + r2 * e2, this._w = this._w * o2 + n2 * e2, this._onChangeCallback();
      } else this._x = this._x * o2 + i2 * e2, this._y = this._y * o2 + s2 * e2, this._z = this._z * o2 + r2 * e2, this._w = this._w * o2 + n2 * e2, this.normalize();
      return this;
    }
    slerpQuaternions(t2, e2, i2) {
      return this.copy(t2).slerp(e2, i2);
    }
    random() {
      const t2 = 2 * Math.PI * Math.random(), e2 = 2 * Math.PI * Math.random(), i2 = Math.random(), s2 = Math.sqrt(1 - i2), r2 = Math.sqrt(i2);
      return this.set(s2 * Math.sin(t2), s2 * Math.cos(t2), r2 * Math.sin(e2), r2 * Math.cos(e2));
    }
    equals(t2) {
      return t2._x === this._x && t2._y === this._y && t2._z === this._z && t2._w === this._w;
    }
    fromArray(t2, e2 = 0) {
      return this._x = t2[e2], this._y = t2[e2 + 1], this._z = t2[e2 + 2], this._w = t2[e2 + 3], this._onChangeCallback(), this;
    }
    toArray(t2 = [], e2 = 0) {
      return t2[e2] = this._x, t2[e2 + 1] = this._y, t2[e2 + 2] = this._z, t2[e2 + 3] = this._w, t2;
    }
    fromBufferAttribute(t2, e2) {
      return this._x = t2.getX(e2), this._y = t2.getY(e2), this._z = t2.getZ(e2), this._w = t2.getW(e2), this._onChangeCallback(), this;
    }
    toJSON() {
      return this.toArray();
    }
    _onChange(t2) {
      return this._onChangeCallback = t2, this;
    }
    _onChangeCallback() {
    }
    *[Symbol.iterator]() {
      yield this._x, yield this._y, yield this._z, yield this._w;
    }
  };
  var _Ts = class _Ts {
    constructor(t2 = 0, e2 = 0, i2 = 0) {
      this.x = t2, this.y = e2, this.z = i2;
    }
    set(t2, e2, i2) {
      return void 0 === i2 && (i2 = this.z), this.x = t2, this.y = e2, this.z = i2, this;
    }
    setScalar(t2) {
      return this.x = t2, this.y = t2, this.z = t2, this;
    }
    setX(t2) {
      return this.x = t2, this;
    }
    setY(t2) {
      return this.y = t2, this;
    }
    setZ(t2) {
      return this.z = t2, this;
    }
    setComponent(t2, e2) {
      switch (t2) {
        case 0:
          this.x = e2;
          break;
        case 1:
          this.y = e2;
          break;
        case 2:
          this.z = e2;
          break;
        default:
          throw new Error("index is out of range: " + t2);
      }
      return this;
    }
    getComponent(t2) {
      switch (t2) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        default:
          throw new Error("index is out of range: " + t2);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z);
    }
    copy(t2) {
      return this.x = t2.x, this.y = t2.y, this.z = t2.z, this;
    }
    add(t2) {
      return this.x += t2.x, this.y += t2.y, this.z += t2.z, this;
    }
    addScalar(t2) {
      return this.x += t2, this.y += t2, this.z += t2, this;
    }
    addVectors(t2, e2) {
      return this.x = t2.x + e2.x, this.y = t2.y + e2.y, this.z = t2.z + e2.z, this;
    }
    addScaledVector(t2, e2) {
      return this.x += t2.x * e2, this.y += t2.y * e2, this.z += t2.z * e2, this;
    }
    sub(t2) {
      return this.x -= t2.x, this.y -= t2.y, this.z -= t2.z, this;
    }
    subScalar(t2) {
      return this.x -= t2, this.y -= t2, this.z -= t2, this;
    }
    subVectors(t2, e2) {
      return this.x = t2.x - e2.x, this.y = t2.y - e2.y, this.z = t2.z - e2.z, this;
    }
    multiply(t2) {
      return this.x *= t2.x, this.y *= t2.y, this.z *= t2.z, this;
    }
    multiplyScalar(t2) {
      return this.x *= t2, this.y *= t2, this.z *= t2, this;
    }
    multiplyVectors(t2, e2) {
      return this.x = t2.x * e2.x, this.y = t2.y * e2.y, this.z = t2.z * e2.z, this;
    }
    applyEuler(t2) {
      return this.applyQuaternion(Cs.setFromEuler(t2));
    }
    applyAxisAngle(t2, e2) {
      return this.applyQuaternion(Cs.setFromAxisAngle(t2, e2));
    }
    applyMatrix3(t2) {
      const e2 = this.x, i2 = this.y, s2 = this.z, r2 = t2.elements;
      return this.x = r2[0] * e2 + r2[3] * i2 + r2[6] * s2, this.y = r2[1] * e2 + r2[4] * i2 + r2[7] * s2, this.z = r2[2] * e2 + r2[5] * i2 + r2[8] * s2, this;
    }
    applyNormalMatrix(t2) {
      return this.applyMatrix3(t2).normalize();
    }
    applyMatrix4(t2) {
      const e2 = this.x, i2 = this.y, s2 = this.z, r2 = t2.elements, n2 = 1 / (r2[3] * e2 + r2[7] * i2 + r2[11] * s2 + r2[15]);
      return this.x = (r2[0] * e2 + r2[4] * i2 + r2[8] * s2 + r2[12]) * n2, this.y = (r2[1] * e2 + r2[5] * i2 + r2[9] * s2 + r2[13]) * n2, this.z = (r2[2] * e2 + r2[6] * i2 + r2[10] * s2 + r2[14]) * n2, this;
    }
    applyQuaternion(t2) {
      const e2 = this.x, i2 = this.y, s2 = this.z, r2 = t2.x, n2 = t2.y, a2 = t2.z, o2 = t2.w, h2 = 2 * (n2 * s2 - a2 * i2), l2 = 2 * (a2 * e2 - r2 * s2), c2 = 2 * (r2 * i2 - n2 * e2);
      return this.x = e2 + o2 * h2 + n2 * c2 - a2 * l2, this.y = i2 + o2 * l2 + a2 * h2 - r2 * c2, this.z = s2 + o2 * c2 + r2 * l2 - n2 * h2, this;
    }
    project(t2) {
      return this.applyMatrix4(t2.matrixWorldInverse).applyMatrix4(t2.projectionMatrix);
    }
    unproject(t2) {
      return this.applyMatrix4(t2.projectionMatrixInverse).applyMatrix4(t2.matrixWorld);
    }
    transformDirection(t2) {
      const e2 = this.x, i2 = this.y, s2 = this.z, r2 = t2.elements;
      return this.x = r2[0] * e2 + r2[4] * i2 + r2[8] * s2, this.y = r2[1] * e2 + r2[5] * i2 + r2[9] * s2, this.z = r2[2] * e2 + r2[6] * i2 + r2[10] * s2, this.normalize();
    }
    divide(t2) {
      return this.x /= t2.x, this.y /= t2.y, this.z /= t2.z, this;
    }
    divideScalar(t2) {
      return this.multiplyScalar(1 / t2);
    }
    min(t2) {
      return this.x = Math.min(this.x, t2.x), this.y = Math.min(this.y, t2.y), this.z = Math.min(this.z, t2.z), this;
    }
    max(t2) {
      return this.x = Math.max(this.x, t2.x), this.y = Math.max(this.y, t2.y), this.z = Math.max(this.z, t2.z), this;
    }
    clamp(t2, e2) {
      return this.x = xs(this.x, t2.x, e2.x), this.y = xs(this.y, t2.y, e2.y), this.z = xs(this.z, t2.z, e2.z), this;
    }
    clampScalar(t2, e2) {
      return this.x = xs(this.x, t2, e2), this.y = xs(this.y, t2, e2), this.z = xs(this.z, t2, e2), this;
    }
    clampLength(t2, e2) {
      const i2 = this.length();
      return this.divideScalar(i2 || 1).multiplyScalar(xs(i2, t2, e2));
    }
    floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
    }
    ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
    }
    round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
    }
    roundToZero() {
      return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
    }
    negate() {
      return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
    }
    dot(t2) {
      return this.x * t2.x + this.y * t2.y + this.z * t2.z;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(t2) {
      return this.normalize().multiplyScalar(t2);
    }
    lerp(t2, e2) {
      return this.x += (t2.x - this.x) * e2, this.y += (t2.y - this.y) * e2, this.z += (t2.z - this.z) * e2, this;
    }
    lerpVectors(t2, e2, i2) {
      return this.x = t2.x + (e2.x - t2.x) * i2, this.y = t2.y + (e2.y - t2.y) * i2, this.z = t2.z + (e2.z - t2.z) * i2, this;
    }
    cross(t2) {
      return this.crossVectors(this, t2);
    }
    crossVectors(t2, e2) {
      const i2 = t2.x, s2 = t2.y, r2 = t2.z, n2 = e2.x, a2 = e2.y, o2 = e2.z;
      return this.x = s2 * o2 - r2 * a2, this.y = r2 * n2 - i2 * o2, this.z = i2 * a2 - s2 * n2, this;
    }
    projectOnVector(t2) {
      const e2 = t2.lengthSq();
      if (0 === e2) return this.set(0, 0, 0);
      const i2 = t2.dot(this) / e2;
      return this.copy(t2).multiplyScalar(i2);
    }
    projectOnPlane(t2) {
      return zs.copy(this).projectOnVector(t2), this.sub(zs);
    }
    reflect(t2) {
      return this.sub(zs.copy(t2).multiplyScalar(2 * this.dot(t2)));
    }
    angleTo(t2) {
      const e2 = Math.sqrt(this.lengthSq() * t2.lengthSq());
      if (0 === e2) return Math.PI / 2;
      const i2 = this.dot(t2) / e2;
      return Math.acos(xs(i2, -1, 1));
    }
    distanceTo(t2) {
      return Math.sqrt(this.distanceToSquared(t2));
    }
    distanceToSquared(t2) {
      const e2 = this.x - t2.x, i2 = this.y - t2.y, s2 = this.z - t2.z;
      return e2 * e2 + i2 * i2 + s2 * s2;
    }
    manhattanDistanceTo(t2) {
      return Math.abs(this.x - t2.x) + Math.abs(this.y - t2.y) + Math.abs(this.z - t2.z);
    }
    setFromSpherical(t2) {
      return this.setFromSphericalCoords(t2.radius, t2.phi, t2.theta);
    }
    setFromSphericalCoords(t2, e2, i2) {
      const s2 = Math.sin(e2) * t2;
      return this.x = s2 * Math.sin(i2), this.y = Math.cos(e2) * t2, this.z = s2 * Math.cos(i2), this;
    }
    setFromCylindrical(t2) {
      return this.setFromCylindricalCoords(t2.radius, t2.theta, t2.y);
    }
    setFromCylindricalCoords(t2, e2, i2) {
      return this.x = t2 * Math.sin(e2), this.y = i2, this.z = t2 * Math.cos(e2), this;
    }
    setFromMatrixPosition(t2) {
      const e2 = t2.elements;
      return this.x = e2[12], this.y = e2[13], this.z = e2[14], this;
    }
    setFromMatrixScale(t2) {
      const e2 = this.setFromMatrixColumn(t2, 0).length(), i2 = this.setFromMatrixColumn(t2, 1).length(), s2 = this.setFromMatrixColumn(t2, 2).length();
      return this.x = e2, this.y = i2, this.z = s2, this;
    }
    setFromMatrixColumn(t2, e2) {
      return this.fromArray(t2.elements, 4 * e2);
    }
    setFromMatrix3Column(t2, e2) {
      return this.fromArray(t2.elements, 3 * e2);
    }
    setFromEuler(t2) {
      return this.x = t2._x, this.y = t2._y, this.z = t2._z, this;
    }
    setFromColor(t2) {
      return this.x = t2.r, this.y = t2.g, this.z = t2.b, this;
    }
    equals(t2) {
      return t2.x === this.x && t2.y === this.y && t2.z === this.z;
    }
    fromArray(t2, e2 = 0) {
      return this.x = t2[e2], this.y = t2[e2 + 1], this.z = t2[e2 + 2], this;
    }
    toArray(t2 = [], e2 = 0) {
      return t2[e2] = this.x, t2[e2 + 1] = this.y, t2[e2 + 2] = this.z, t2;
    }
    fromBufferAttribute(t2, e2) {
      return this.x = t2.getX(e2), this.y = t2.getY(e2), this.z = t2.getZ(e2), this;
    }
    random() {
      return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
    }
    randomDirection() {
      const t2 = Math.random() * Math.PI * 2, e2 = 2 * Math.random() - 1, i2 = Math.sqrt(1 - e2 * e2);
      return this.x = i2 * Math.cos(t2), this.y = e2, this.z = i2 * Math.sin(t2), this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y, yield this.z;
    }
  };
  _Ts.prototype.isVector3 = true;
  var Ts = _Ts;
  var zs = new Ts();
  var Cs = new As();
  var _Is = class _Is {
    constructor(t2, e2, i2, s2, r2, n2, a2, o2, h2) {
      this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], void 0 !== t2 && this.set(t2, e2, i2, s2, r2, n2, a2, o2, h2);
    }
    set(t2, e2, i2, s2, r2, n2, a2, o2, h2) {
      const l2 = this.elements;
      return l2[0] = t2, l2[1] = s2, l2[2] = a2, l2[3] = e2, l2[4] = r2, l2[5] = o2, l2[6] = i2, l2[7] = n2, l2[8] = h2, this;
    }
    identity() {
      return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
    }
    copy(t2) {
      const e2 = this.elements, i2 = t2.elements;
      return e2[0] = i2[0], e2[1] = i2[1], e2[2] = i2[2], e2[3] = i2[3], e2[4] = i2[4], e2[5] = i2[5], e2[6] = i2[6], e2[7] = i2[7], e2[8] = i2[8], this;
    }
    extractBasis(t2, e2, i2) {
      return t2.setFromMatrix3Column(this, 0), e2.setFromMatrix3Column(this, 1), i2.setFromMatrix3Column(this, 2), this;
    }
    setFromMatrix4(t2) {
      const e2 = t2.elements;
      return this.set(e2[0], e2[4], e2[8], e2[1], e2[5], e2[9], e2[2], e2[6], e2[10]), this;
    }
    multiply(t2) {
      return this.multiplyMatrices(this, t2);
    }
    premultiply(t2) {
      return this.multiplyMatrices(t2, this);
    }
    multiplyMatrices(t2, e2) {
      const i2 = t2.elements, s2 = e2.elements, r2 = this.elements, n2 = i2[0], a2 = i2[3], o2 = i2[6], h2 = i2[1], l2 = i2[4], c2 = i2[7], u2 = i2[2], d2 = i2[5], p2 = i2[8], m2 = s2[0], y2 = s2[3], g2 = s2[6], f2 = s2[1], x2 = s2[4], b2 = s2[7], v2 = s2[2], w2 = s2[5], M2 = s2[8];
      return r2[0] = n2 * m2 + a2 * f2 + o2 * v2, r2[3] = n2 * y2 + a2 * x2 + o2 * w2, r2[6] = n2 * g2 + a2 * b2 + o2 * M2, r2[1] = h2 * m2 + l2 * f2 + c2 * v2, r2[4] = h2 * y2 + l2 * x2 + c2 * w2, r2[7] = h2 * g2 + l2 * b2 + c2 * M2, r2[2] = u2 * m2 + d2 * f2 + p2 * v2, r2[5] = u2 * y2 + d2 * x2 + p2 * w2, r2[8] = u2 * g2 + d2 * b2 + p2 * M2, this;
    }
    multiplyScalar(t2) {
      const e2 = this.elements;
      return e2[0] *= t2, e2[3] *= t2, e2[6] *= t2, e2[1] *= t2, e2[4] *= t2, e2[7] *= t2, e2[2] *= t2, e2[5] *= t2, e2[8] *= t2, this;
    }
    determinant() {
      const t2 = this.elements, e2 = t2[0], i2 = t2[1], s2 = t2[2], r2 = t2[3], n2 = t2[4], a2 = t2[5], o2 = t2[6], h2 = t2[7], l2 = t2[8];
      return e2 * n2 * l2 - e2 * a2 * h2 - i2 * r2 * l2 + i2 * a2 * o2 + s2 * r2 * h2 - s2 * n2 * o2;
    }
    invert() {
      const t2 = this.elements, e2 = t2[0], i2 = t2[1], s2 = t2[2], r2 = t2[3], n2 = t2[4], a2 = t2[5], o2 = t2[6], h2 = t2[7], l2 = t2[8], c2 = l2 * n2 - a2 * h2, u2 = a2 * o2 - l2 * r2, d2 = h2 * r2 - n2 * o2, p2 = e2 * c2 + i2 * u2 + s2 * d2;
      if (0 === p2) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
      const m2 = 1 / p2;
      return t2[0] = c2 * m2, t2[1] = (s2 * h2 - l2 * i2) * m2, t2[2] = (a2 * i2 - s2 * n2) * m2, t2[3] = u2 * m2, t2[4] = (l2 * e2 - s2 * o2) * m2, t2[5] = (s2 * r2 - a2 * e2) * m2, t2[6] = d2 * m2, t2[7] = (i2 * o2 - h2 * e2) * m2, t2[8] = (n2 * e2 - i2 * r2) * m2, this;
    }
    transpose() {
      let t2;
      const e2 = this.elements;
      return t2 = e2[1], e2[1] = e2[3], e2[3] = t2, t2 = e2[2], e2[2] = e2[6], e2[6] = t2, t2 = e2[5], e2[5] = e2[7], e2[7] = t2, this;
    }
    getNormalMatrix(t2) {
      return this.setFromMatrix4(t2).invert().transpose();
    }
    transposeIntoArray(t2) {
      const e2 = this.elements;
      return t2[0] = e2[0], t2[1] = e2[3], t2[2] = e2[6], t2[3] = e2[1], t2[4] = e2[4], t2[5] = e2[7], t2[6] = e2[2], t2[7] = e2[5], t2[8] = e2[8], this;
    }
    setUvTransform(t2, e2, i2, s2, r2, n2, a2) {
      const o2 = Math.cos(r2), h2 = Math.sin(r2);
      return this.set(i2 * o2, i2 * h2, -i2 * (o2 * n2 + h2 * a2) + n2 + t2, -s2 * h2, s2 * o2, -s2 * (-h2 * n2 + o2 * a2) + a2 + e2, 0, 0, 1), this;
    }
    scale(t2, e2) {
      return this.premultiply(Bs.makeScale(t2, e2)), this;
    }
    rotate(t2) {
      return this.premultiply(Bs.makeRotation(-t2)), this;
    }
    translate(t2, e2) {
      return this.premultiply(Bs.makeTranslation(t2, e2)), this;
    }
    makeTranslation(t2, e2) {
      return t2.isVector2 ? this.set(1, 0, t2.x, 0, 1, t2.y, 0, 0, 1) : this.set(1, 0, t2, 0, 1, e2, 0, 0, 1), this;
    }
    makeRotation(t2) {
      const e2 = Math.cos(t2), i2 = Math.sin(t2);
      return this.set(e2, -i2, 0, i2, e2, 0, 0, 0, 1), this;
    }
    makeScale(t2, e2) {
      return this.set(t2, 0, 0, 0, e2, 0, 0, 0, 1), this;
    }
    equals(t2) {
      const e2 = this.elements, i2 = t2.elements;
      for (let t3 = 0; t3 < 9; t3++) if (e2[t3] !== i2[t3]) return false;
      return true;
    }
    fromArray(t2, e2 = 0) {
      for (let i2 = 0; i2 < 9; i2++) this.elements[i2] = t2[i2 + e2];
      return this;
    }
    toArray(t2 = [], e2 = 0) {
      const i2 = this.elements;
      return t2[e2] = i2[0], t2[e2 + 1] = i2[1], t2[e2 + 2] = i2[2], t2[e2 + 3] = i2[3], t2[e2 + 4] = i2[4], t2[e2 + 5] = i2[5], t2[e2 + 6] = i2[6], t2[e2 + 7] = i2[7], t2[e2 + 8] = i2[8], t2;
    }
    clone() {
      return new this.constructor().fromArray(this.elements);
    }
  };
  _Is.prototype.isMatrix3 = true;
  var Is = _Is;
  var Bs = new Is();
  var ks = new Is().set(0.4123908, 0.3575843, 0.1804808, 0.212639, 0.7151687, 0.0721923, 0.0193308, 0.1191948, 0.9505322);
  var Os = new Is().set(3.2409699, -1.5373832, -0.4986108, -0.9692436, 1.8759675, 0.0415551, 0.0556301, -0.203977, 1.0569715);
  function Ps() {
    const t2 = { enabled: true, workingColorSpace: ii, spaces: {}, convert: function(t3, e3, i3) {
      return false !== this.enabled && e3 !== i3 && e3 && i3 ? (this.spaces[e3].transfer === ri && (t3.r = Ns(t3.r), t3.g = Ns(t3.g), t3.b = Ns(t3.b)), this.spaces[e3].primaries !== this.spaces[i3].primaries && (t3.applyMatrix3(this.spaces[e3].toXYZ), t3.applyMatrix3(this.spaces[i3].fromXYZ)), this.spaces[i3].transfer === ri && (t3.r = Vs(t3.r), t3.g = Vs(t3.g), t3.b = Vs(t3.b)), t3) : t3;
    }, workingToColorSpace: function(t3, e3) {
      return this.convert(t3, this.workingColorSpace, e3);
    }, colorSpaceToWorking: function(t3, e3) {
      return this.convert(t3, e3, this.workingColorSpace);
    }, getPrimaries: function(t3) {
      return this.spaces[t3].primaries;
    }, getTransfer: function(t3) {
      return "" === t3 ? si : this.spaces[t3].transfer;
    }, getToneMappingMode: function(t3) {
      return this.spaces[t3].outputColorSpaceConfig.toneMappingMode || "standard";
    }, getLuminanceCoefficients: function(t3, e3 = this.workingColorSpace) {
      return t3.fromArray(this.spaces[e3].luminanceCoefficients);
    }, define: function(t3) {
      Object.assign(this.spaces, t3);
    }, _getMatrix: function(t3, e3, i3) {
      return t3.copy(this.spaces[e3].toXYZ).multiply(this.spaces[i3].fromXYZ);
    }, _getDrawingBufferColorSpace: function(t3) {
      return this.spaces[t3].outputColorSpaceConfig.drawingBufferColorSpace;
    }, _getUnpackColorSpace: function(t3 = this.workingColorSpace) {
      return this.spaces[t3].workingColorSpaceConfig.unpackColorSpace;
    }, fromWorkingColorSpace: function(e3, i3) {
      return hs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), t2.workingToColorSpace(e3, i3);
    }, toWorkingColorSpace: function(e3, i3) {
      return hs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), t2.colorSpaceToWorking(e3, i3);
    } }, e2 = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], i2 = [0.2126, 0.7152, 0.0722], s2 = [0.3127, 0.329];
    return t2.define({ [ii]: { primaries: e2, whitePoint: s2, transfer: si, toXYZ: ks, fromXYZ: Os, luminanceCoefficients: i2, workingColorSpaceConfig: { unpackColorSpace: ei }, outputColorSpaceConfig: { drawingBufferColorSpace: ei } }, [ei]: { primaries: e2, whitePoint: s2, transfer: ri, toXYZ: ks, fromXYZ: Os, luminanceCoefficients: i2, outputColorSpaceConfig: { drawingBufferColorSpace: ei } } }), t2;
  }
  var Rs = Ps();
  function Ns(t2) {
    return t2 < 0.04045 ? 0.0773993808 * t2 : Math.pow(0.9478672986 * t2 + 0.0521327014, 2.4);
  }
  function Vs(t2) {
    return t2 < 31308e-7 ? 12.92 * t2 : 1.055 * Math.pow(t2, 0.41666) - 0.055;
  }
  var Es;
  var Ls = class {
    static getDataURL(t2, e2 = "image/png") {
      if (/^data:/i.test(t2.src)) return t2.src;
      if ("undefined" == typeof HTMLCanvasElement) return t2.src;
      let i2;
      if (t2 instanceof HTMLCanvasElement) i2 = t2;
      else {
        void 0 === Es && (Es = Qi("canvas")), Es.width = t2.width, Es.height = t2.height;
        const e3 = Es.getContext("2d");
        t2 instanceof ImageData ? e3.putImageData(t2, 0, 0) : e3.drawImage(t2, 0, 0, t2.width, t2.height), i2 = Es;
      }
      return i2.toDataURL(e2);
    }
    static sRGBToLinear(t2) {
      if ("undefined" != typeof HTMLImageElement && t2 instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t2 instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t2 instanceof ImageBitmap) {
        const e2 = Qi("canvas");
        e2.width = t2.width, e2.height = t2.height;
        const i2 = e2.getContext("2d");
        i2.drawImage(t2, 0, 0, t2.width, t2.height);
        const s2 = i2.getImageData(0, 0, t2.width, t2.height), r2 = s2.data;
        for (let t3 = 0; t3 < r2.length; t3++) r2[t3] = 255 * Ns(r2[t3] / 255);
        return i2.putImageData(s2, 0, 0), e2;
      }
      if (t2.data) {
        const e2 = t2.data.slice(0);
        for (let t3 = 0; t3 < e2.length; t3++) e2 instanceof Uint8Array || e2 instanceof Uint8ClampedArray ? e2[t3] = Math.floor(255 * Ns(e2[t3] / 255)) : e2[t3] = Ns(e2[t3]);
        return { data: e2, width: t2.width, height: t2.height };
      }
      return as("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t2;
    }
  };
  var Fs = 0;
  var js = class {
    constructor(t2 = null) {
      this.isSource = true, Object.defineProperty(this, "id", { value: Fs++ }), this.uuid = fs(), this.data = t2, this.dataReady = true, this.version = 0;
    }
    getSize(t2) {
      const e2 = this.data;
      return "undefined" != typeof HTMLVideoElement && e2 instanceof HTMLVideoElement ? t2.set(e2.videoWidth, e2.videoHeight, 0) : "undefined" != typeof VideoFrame && e2 instanceof VideoFrame ? t2.set(e2.displayWidth, e2.displayHeight, 0) : null !== e2 ? t2.set(e2.width, e2.height, e2.depth || 0) : t2.set(0, 0, 0), t2;
    }
    set needsUpdate(t2) {
      true === t2 && this.version++;
    }
    toJSON(t2) {
      const e2 = void 0 === t2 || "string" == typeof t2;
      if (!e2 && void 0 !== t2.images[this.uuid]) return t2.images[this.uuid];
      const i2 = { uuid: this.uuid, url: "" }, s2 = this.data;
      if (null !== s2) {
        let t3;
        if (Array.isArray(s2)) {
          t3 = [];
          for (let e3 = 0, i3 = s2.length; e3 < i3; e3++) s2[e3].isDataTexture ? t3.push(Ds(s2[e3].image)) : t3.push(Ds(s2[e3]));
        } else t3 = Ds(s2);
        i2.url = t3;
      }
      return e2 || (t2.images[this.uuid] = i2), i2;
    }
  };
  function Ds(t2) {
    return "undefined" != typeof HTMLImageElement && t2 instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t2 instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t2 instanceof ImageBitmap ? Ls.getDataURL(t2) : t2.data ? { data: Array.from(t2.data), width: t2.width, height: t2.height, type: t2.data.constructor.name } : (as("Texture: Unable to serialize Texture."), {});
  }
  var Us = 0;
  var Ws = new Ts();
  var qs = class _qs extends ds {
    constructor(t2 = _qs.DEFAULT_IMAGE, e2 = _qs.DEFAULT_MAPPING, i2 = 1001, s2 = 1001, r2 = 1006, n2 = 1008, a2 = 1023, o2 = 1009, h2 = _qs.DEFAULT_ANISOTROPY, l2 = "") {
      super(), this.isTexture = true, Object.defineProperty(this, "id", { value: Us++ }), this.uuid = fs(), this.name = "", this.source = new js(t2), this.mipmaps = [], this.mapping = e2, this.channel = 0, this.wrapS = i2, this.wrapT = s2, this.magFilter = r2, this.minFilter = n2, this.anisotropy = h2, this.format = a2, this.internalFormat = null, this.type = o2, this.offset = new _s(0, 0), this.repeat = new _s(1, 1), this.center = new _s(0, 0), this.rotation = 0, this.matrixAutoUpdate = true, this.matrix = new Is(), this.generateMipmaps = true, this.premultiplyAlpha = false, this.flipY = true, this.unpackAlignment = 4, this.colorSpace = l2, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = false, this.isArrayTexture = !!(t2 && t2.depth && t2.depth > 1), this.pmremVersion = 0, this.normalized = false;
    }
    get width() {
      return this.source.getSize(Ws).x;
    }
    get height() {
      return this.source.getSize(Ws).y;
    }
    get depth() {
      return this.source.getSize(Ws).z;
    }
    get image() {
      return this.source.data;
    }
    set image(t2) {
      this.source.data = t2;
    }
    updateMatrix() {
      this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
    }
    addUpdateRange(t2, e2) {
      this.updateRanges.push({ start: t2, count: e2 });
    }
    clearUpdateRanges() {
      this.updateRanges.length = 0;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t2) {
      return this.name = t2.name, this.source = t2.source, this.mipmaps = t2.mipmaps.slice(0), this.mapping = t2.mapping, this.channel = t2.channel, this.wrapS = t2.wrapS, this.wrapT = t2.wrapT, this.magFilter = t2.magFilter, this.minFilter = t2.minFilter, this.anisotropy = t2.anisotropy, this.format = t2.format, this.internalFormat = t2.internalFormat, this.type = t2.type, this.normalized = t2.normalized, this.offset.copy(t2.offset), this.repeat.copy(t2.repeat), this.center.copy(t2.center), this.rotation = t2.rotation, this.matrixAutoUpdate = t2.matrixAutoUpdate, this.matrix.copy(t2.matrix), this.generateMipmaps = t2.generateMipmaps, this.premultiplyAlpha = t2.premultiplyAlpha, this.flipY = t2.flipY, this.unpackAlignment = t2.unpackAlignment, this.colorSpace = t2.colorSpace, this.renderTarget = t2.renderTarget, this.isRenderTargetTexture = t2.isRenderTargetTexture, this.isArrayTexture = t2.isArrayTexture, this.userData = JSON.parse(JSON.stringify(t2.userData)), this.needsUpdate = true, this;
    }
    setValues(t2) {
      for (const e2 in t2) {
        const i2 = t2[e2];
        if (void 0 === i2) {
          as(`Texture.setValues(): parameter '${e2}' has value of undefined.`);
          continue;
        }
        const s2 = this[e2];
        void 0 !== s2 ? s2 && i2 && s2.isVector2 && i2.isVector2 || s2 && i2 && s2.isVector3 && i2.isVector3 || s2 && i2 && s2.isMatrix3 && i2.isMatrix3 ? s2.copy(i2) : this[e2] = i2 : as(`Texture.setValues(): property '${e2}' does not exist.`);
      }
    }
    toJSON(t2) {
      const e2 = void 0 === t2 || "string" == typeof t2;
      if (!e2 && void 0 !== t2.textures[this.uuid]) return t2.textures[this.uuid];
      const i2 = { metadata: { version: 4.7, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(t2).uuid, mapping: this.mapping, channel: this.channel, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, internalFormat: this.internalFormat, type: this.type, normalized: this.normalized, colorSpace: this.colorSpace, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, generateMipmaps: this.generateMipmaps, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment };
      return Object.keys(this.userData).length > 0 && (i2.userData = this.userData), e2 || (t2.textures[this.uuid] = i2), i2;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
    transformUv(t2) {
      if (this.mapping !== ht) return t2;
      if (t2.applyMatrix3(this.matrix), t2.x < 0 || t2.x > 1) switch (this.wrapS) {
        case mt:
          t2.x = t2.x - Math.floor(t2.x);
          break;
        case yt:
          t2.x = t2.x < 0 ? 0 : 1;
          break;
        case gt:
          1 === Math.abs(Math.floor(t2.x) % 2) ? t2.x = Math.ceil(t2.x) - t2.x : t2.x = t2.x - Math.floor(t2.x);
      }
      if (t2.y < 0 || t2.y > 1) switch (this.wrapT) {
        case mt:
          t2.y = t2.y - Math.floor(t2.y);
          break;
        case yt:
          t2.y = t2.y < 0 ? 0 : 1;
          break;
        case gt:
          1 === Math.abs(Math.floor(t2.y) % 2) ? t2.y = Math.ceil(t2.y) - t2.y : t2.y = t2.y - Math.floor(t2.y);
      }
      return this.flipY && (t2.y = 1 - t2.y), t2;
    }
    set needsUpdate(t2) {
      true === t2 && (this.version++, this.source.needsUpdate = true);
    }
    set needsPMREMUpdate(t2) {
      true === t2 && this.pmremVersion++;
    }
  };
  qs.DEFAULT_IMAGE = null, qs.DEFAULT_MAPPING = ht, qs.DEFAULT_ANISOTROPY = 1;
  var _Js = class _Js {
    constructor(t2 = 0, e2 = 0, i2 = 0, s2 = 1) {
      this.x = t2, this.y = e2, this.z = i2, this.w = s2;
    }
    get width() {
      return this.z;
    }
    set width(t2) {
      this.z = t2;
    }
    get height() {
      return this.w;
    }
    set height(t2) {
      this.w = t2;
    }
    set(t2, e2, i2, s2) {
      return this.x = t2, this.y = e2, this.z = i2, this.w = s2, this;
    }
    setScalar(t2) {
      return this.x = t2, this.y = t2, this.z = t2, this.w = t2, this;
    }
    setX(t2) {
      return this.x = t2, this;
    }
    setY(t2) {
      return this.y = t2, this;
    }
    setZ(t2) {
      return this.z = t2, this;
    }
    setW(t2) {
      return this.w = t2, this;
    }
    setComponent(t2, e2) {
      switch (t2) {
        case 0:
          this.x = e2;
          break;
        case 1:
          this.y = e2;
          break;
        case 2:
          this.z = e2;
          break;
        case 3:
          this.w = e2;
          break;
        default:
          throw new Error("index is out of range: " + t2);
      }
      return this;
    }
    getComponent(t2) {
      switch (t2) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        case 3:
          return this.w;
        default:
          throw new Error("index is out of range: " + t2);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z, this.w);
    }
    copy(t2) {
      return this.x = t2.x, this.y = t2.y, this.z = t2.z, this.w = void 0 !== t2.w ? t2.w : 1, this;
    }
    add(t2) {
      return this.x += t2.x, this.y += t2.y, this.z += t2.z, this.w += t2.w, this;
    }
    addScalar(t2) {
      return this.x += t2, this.y += t2, this.z += t2, this.w += t2, this;
    }
    addVectors(t2, e2) {
      return this.x = t2.x + e2.x, this.y = t2.y + e2.y, this.z = t2.z + e2.z, this.w = t2.w + e2.w, this;
    }
    addScaledVector(t2, e2) {
      return this.x += t2.x * e2, this.y += t2.y * e2, this.z += t2.z * e2, this.w += t2.w * e2, this;
    }
    sub(t2) {
      return this.x -= t2.x, this.y -= t2.y, this.z -= t2.z, this.w -= t2.w, this;
    }
    subScalar(t2) {
      return this.x -= t2, this.y -= t2, this.z -= t2, this.w -= t2, this;
    }
    subVectors(t2, e2) {
      return this.x = t2.x - e2.x, this.y = t2.y - e2.y, this.z = t2.z - e2.z, this.w = t2.w - e2.w, this;
    }
    multiply(t2) {
      return this.x *= t2.x, this.y *= t2.y, this.z *= t2.z, this.w *= t2.w, this;
    }
    multiplyScalar(t2) {
      return this.x *= t2, this.y *= t2, this.z *= t2, this.w *= t2, this;
    }
    applyMatrix4(t2) {
      const e2 = this.x, i2 = this.y, s2 = this.z, r2 = this.w, n2 = t2.elements;
      return this.x = n2[0] * e2 + n2[4] * i2 + n2[8] * s2 + n2[12] * r2, this.y = n2[1] * e2 + n2[5] * i2 + n2[9] * s2 + n2[13] * r2, this.z = n2[2] * e2 + n2[6] * i2 + n2[10] * s2 + n2[14] * r2, this.w = n2[3] * e2 + n2[7] * i2 + n2[11] * s2 + n2[15] * r2, this;
    }
    divide(t2) {
      return this.x /= t2.x, this.y /= t2.y, this.z /= t2.z, this.w /= t2.w, this;
    }
    divideScalar(t2) {
      return this.multiplyScalar(1 / t2);
    }
    setAxisAngleFromQuaternion(t2) {
      this.w = 2 * Math.acos(t2.w);
      const e2 = Math.sqrt(1 - t2.w * t2.w);
      return e2 < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t2.x / e2, this.y = t2.y / e2, this.z = t2.z / e2), this;
    }
    setAxisAngleFromRotationMatrix(t2) {
      let e2, i2, s2, r2;
      const n2 = 0.01, a2 = 0.1, o2 = t2.elements, h2 = o2[0], l2 = o2[4], c2 = o2[8], u2 = o2[1], d2 = o2[5], p2 = o2[9], m2 = o2[2], y2 = o2[6], g2 = o2[10];
      if (Math.abs(l2 - u2) < n2 && Math.abs(c2 - m2) < n2 && Math.abs(p2 - y2) < n2) {
        if (Math.abs(l2 + u2) < a2 && Math.abs(c2 + m2) < a2 && Math.abs(p2 + y2) < a2 && Math.abs(h2 + d2 + g2 - 3) < a2) return this.set(1, 0, 0, 0), this;
        e2 = Math.PI;
        const t3 = (h2 + 1) / 2, o3 = (d2 + 1) / 2, f3 = (g2 + 1) / 2, x2 = (l2 + u2) / 4, b2 = (c2 + m2) / 4, v2 = (p2 + y2) / 4;
        return t3 > o3 && t3 > f3 ? t3 < n2 ? (i2 = 0, s2 = 0.707106781, r2 = 0.707106781) : (i2 = Math.sqrt(t3), s2 = x2 / i2, r2 = b2 / i2) : o3 > f3 ? o3 < n2 ? (i2 = 0.707106781, s2 = 0, r2 = 0.707106781) : (s2 = Math.sqrt(o3), i2 = x2 / s2, r2 = v2 / s2) : f3 < n2 ? (i2 = 0.707106781, s2 = 0.707106781, r2 = 0) : (r2 = Math.sqrt(f3), i2 = b2 / r2, s2 = v2 / r2), this.set(i2, s2, r2, e2), this;
      }
      let f2 = Math.sqrt((y2 - p2) * (y2 - p2) + (c2 - m2) * (c2 - m2) + (u2 - l2) * (u2 - l2));
      return Math.abs(f2) < 1e-3 && (f2 = 1), this.x = (y2 - p2) / f2, this.y = (c2 - m2) / f2, this.z = (u2 - l2) / f2, this.w = Math.acos((h2 + d2 + g2 - 1) / 2), this;
    }
    setFromMatrixPosition(t2) {
      const e2 = t2.elements;
      return this.x = e2[12], this.y = e2[13], this.z = e2[14], this.w = e2[15], this;
    }
    min(t2) {
      return this.x = Math.min(this.x, t2.x), this.y = Math.min(this.y, t2.y), this.z = Math.min(this.z, t2.z), this.w = Math.min(this.w, t2.w), this;
    }
    max(t2) {
      return this.x = Math.max(this.x, t2.x), this.y = Math.max(this.y, t2.y), this.z = Math.max(this.z, t2.z), this.w = Math.max(this.w, t2.w), this;
    }
    clamp(t2, e2) {
      return this.x = xs(this.x, t2.x, e2.x), this.y = xs(this.y, t2.y, e2.y), this.z = xs(this.z, t2.z, e2.z), this.w = xs(this.w, t2.w, e2.w), this;
    }
    clampScalar(t2, e2) {
      return this.x = xs(this.x, t2, e2), this.y = xs(this.y, t2, e2), this.z = xs(this.z, t2, e2), this.w = xs(this.w, t2, e2), this;
    }
    clampLength(t2, e2) {
      const i2 = this.length();
      return this.divideScalar(i2 || 1).multiplyScalar(xs(i2, t2, e2));
    }
    floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
    }
    ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
    }
    round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
    }
    roundToZero() {
      return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
    }
    negate() {
      return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
    }
    dot(t2) {
      return this.x * t2.x + this.y * t2.y + this.z * t2.z + this.w * t2.w;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(t2) {
      return this.normalize().multiplyScalar(t2);
    }
    lerp(t2, e2) {
      return this.x += (t2.x - this.x) * e2, this.y += (t2.y - this.y) * e2, this.z += (t2.z - this.z) * e2, this.w += (t2.w - this.w) * e2, this;
    }
    lerpVectors(t2, e2, i2) {
      return this.x = t2.x + (e2.x - t2.x) * i2, this.y = t2.y + (e2.y - t2.y) * i2, this.z = t2.z + (e2.z - t2.z) * i2, this.w = t2.w + (e2.w - t2.w) * i2, this;
    }
    equals(t2) {
      return t2.x === this.x && t2.y === this.y && t2.z === this.z && t2.w === this.w;
    }
    fromArray(t2, e2 = 0) {
      return this.x = t2[e2], this.y = t2[e2 + 1], this.z = t2[e2 + 2], this.w = t2[e2 + 3], this;
    }
    toArray(t2 = [], e2 = 0) {
      return t2[e2] = this.x, t2[e2 + 1] = this.y, t2[e2 + 2] = this.z, t2[e2 + 3] = this.w, t2;
    }
    fromBufferAttribute(t2, e2) {
      return this.x = t2.getX(e2), this.y = t2.getY(e2), this.z = t2.getZ(e2), this.w = t2.getW(e2), this;
    }
    random() {
      return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y, yield this.z, yield this.w;
    }
  };
  _Js.prototype.isVector4 = true;
  var Js = _Js;
  var Xs = class extends ds {
    constructor(t2 = 1, e2 = 1, i2 = {}) {
      super(), i2 = Object.assign({ generateMipmaps: false, internalFormat: null, minFilter: Mt, depthBuffer: true, stencilBuffer: false, resolveDepthBuffer: true, resolveStencilBuffer: true, depthTexture: null, samples: 0, count: 1, depth: 1, multiview: false }, i2), this.isRenderTarget = true, this.width = t2, this.height = e2, this.depth = i2.depth, this.scissor = new Js(0, 0, t2, e2), this.scissorTest = false, this.viewport = new Js(0, 0, t2, e2), this.textures = [];
      const s2 = { width: t2, height: e2, depth: i2.depth }, r2 = new qs(s2), n2 = i2.count;
      for (let t3 = 0; t3 < n2; t3++) this.textures[t3] = r2.clone(), this.textures[t3].isRenderTargetTexture = true, this.textures[t3].renderTarget = this;
      this._setTextureOptions(i2), this.depthBuffer = i2.depthBuffer, this.stencilBuffer = i2.stencilBuffer, this.resolveDepthBuffer = i2.resolveDepthBuffer, this.resolveStencilBuffer = i2.resolveStencilBuffer, this._depthTexture = null, this.depthTexture = i2.depthTexture, this.samples = i2.samples, this.multiview = i2.multiview;
    }
    _setTextureOptions(t2 = {}) {
      const e2 = { minFilter: Mt, generateMipmaps: false, flipY: false, internalFormat: null };
      void 0 !== t2.mapping && (e2.mapping = t2.mapping), void 0 !== t2.wrapS && (e2.wrapS = t2.wrapS), void 0 !== t2.wrapT && (e2.wrapT = t2.wrapT), void 0 !== t2.wrapR && (e2.wrapR = t2.wrapR), void 0 !== t2.magFilter && (e2.magFilter = t2.magFilter), void 0 !== t2.minFilter && (e2.minFilter = t2.minFilter), void 0 !== t2.format && (e2.format = t2.format), void 0 !== t2.type && (e2.type = t2.type), void 0 !== t2.anisotropy && (e2.anisotropy = t2.anisotropy), void 0 !== t2.colorSpace && (e2.colorSpace = t2.colorSpace), void 0 !== t2.flipY && (e2.flipY = t2.flipY), void 0 !== t2.generateMipmaps && (e2.generateMipmaps = t2.generateMipmaps), void 0 !== t2.internalFormat && (e2.internalFormat = t2.internalFormat);
      for (let t3 = 0; t3 < this.textures.length; t3++) {
        this.textures[t3].setValues(e2);
      }
    }
    get texture() {
      return this.textures[0];
    }
    set texture(t2) {
      this.textures[0] = t2;
    }
    set depthTexture(t2) {
      null !== this._depthTexture && (this._depthTexture.renderTarget = null), null !== t2 && (t2.renderTarget = this), this._depthTexture = t2;
    }
    get depthTexture() {
      return this._depthTexture;
    }
    setSize(t2, e2, i2 = 1) {
      if (this.width !== t2 || this.height !== e2 || this.depth !== i2) {
        this.width = t2, this.height = e2, this.depth = i2;
        for (let s2 = 0, r2 = this.textures.length; s2 < r2; s2++) this.textures[s2].image.width = t2, this.textures[s2].image.height = e2, this.textures[s2].image.depth = i2, true !== this.textures[s2].isData3DTexture && (this.textures[s2].isArrayTexture = this.textures[s2].image.depth > 1);
        this.dispose();
      }
      this.viewport.set(0, 0, t2, e2), this.scissor.set(0, 0, t2, e2);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t2) {
      this.width = t2.width, this.height = t2.height, this.depth = t2.depth, this.scissor.copy(t2.scissor), this.scissorTest = t2.scissorTest, this.viewport.copy(t2.viewport), this.textures.length = 0;
      for (let e2 = 0, i2 = t2.textures.length; e2 < i2; e2++) {
        this.textures[e2] = t2.textures[e2].clone(), this.textures[e2].isRenderTargetTexture = true, this.textures[e2].renderTarget = this;
        const i3 = Object.assign({}, t2.textures[e2].image);
        this.textures[e2].source = new js(i3);
      }
      return this.depthBuffer = t2.depthBuffer, this.stencilBuffer = t2.stencilBuffer, this.resolveDepthBuffer = t2.resolveDepthBuffer, this.resolveStencilBuffer = t2.resolveStencilBuffer, null !== t2.depthTexture && (this.depthTexture = t2.depthTexture.clone()), this.samples = t2.samples, this.multiview = t2.multiview, this;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
  };
  var Ys = class extends Xs {
    constructor(t2 = 1, e2 = 1, i2 = {}) {
      super(t2, e2, i2), this.isWebGLRenderTarget = true;
    }
  };
  var Hs = class extends qs {
    constructor(t2 = null, e2 = 1, i2 = 1, s2 = 1) {
      super(null), this.isDataArrayTexture = true, this.image = { data: t2, width: e2, height: i2, depth: s2 }, this.magFilter = ft, this.minFilter = ft, this.wrapR = yt, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
    }
    addLayerUpdate(t2) {
      this.layerUpdates.add(t2);
    }
    clearLayerUpdates() {
      this.layerUpdates.clear();
    }
  };
  var Gs = class extends qs {
    constructor(t2 = null, e2 = 1, i2 = 1, s2 = 1) {
      super(null), this.isData3DTexture = true, this.image = { data: t2, width: e2, height: i2, depth: s2 }, this.magFilter = ft, this.minFilter = ft, this.wrapR = yt, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
    }
  };
  var _Qs = class _Qs {
    constructor(t2, e2, i2, s2, r2, n2, a2, o2, h2, l2, c2, u2, d2, p2, m2, y2) {
      this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], void 0 !== t2 && this.set(t2, e2, i2, s2, r2, n2, a2, o2, h2, l2, c2, u2, d2, p2, m2, y2);
    }
    set(t2, e2, i2, s2, r2, n2, a2, o2, h2, l2, c2, u2, d2, p2, m2, y2) {
      const g2 = this.elements;
      return g2[0] = t2, g2[4] = e2, g2[8] = i2, g2[12] = s2, g2[1] = r2, g2[5] = n2, g2[9] = a2, g2[13] = o2, g2[2] = h2, g2[6] = l2, g2[10] = c2, g2[14] = u2, g2[3] = d2, g2[7] = p2, g2[11] = m2, g2[15] = y2, this;
    }
    identity() {
      return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }
    clone() {
      return new _Qs().fromArray(this.elements);
    }
    copy(t2) {
      const e2 = this.elements, i2 = t2.elements;
      return e2[0] = i2[0], e2[1] = i2[1], e2[2] = i2[2], e2[3] = i2[3], e2[4] = i2[4], e2[5] = i2[5], e2[6] = i2[6], e2[7] = i2[7], e2[8] = i2[8], e2[9] = i2[9], e2[10] = i2[10], e2[11] = i2[11], e2[12] = i2[12], e2[13] = i2[13], e2[14] = i2[14], e2[15] = i2[15], this;
    }
    copyPosition(t2) {
      const e2 = this.elements, i2 = t2.elements;
      return e2[12] = i2[12], e2[13] = i2[13], e2[14] = i2[14], this;
    }
    setFromMatrix3(t2) {
      const e2 = t2.elements;
      return this.set(e2[0], e2[3], e2[6], 0, e2[1], e2[4], e2[7], 0, e2[2], e2[5], e2[8], 0, 0, 0, 0, 1), this;
    }
    extractBasis(t2, e2, i2) {
      return 0 === this.determinant() ? (t2.set(1, 0, 0), e2.set(0, 1, 0), i2.set(0, 0, 1), this) : (t2.setFromMatrixColumn(this, 0), e2.setFromMatrixColumn(this, 1), i2.setFromMatrixColumn(this, 2), this);
    }
    makeBasis(t2, e2, i2) {
      return this.set(t2.x, e2.x, i2.x, 0, t2.y, e2.y, i2.y, 0, t2.z, e2.z, i2.z, 0, 0, 0, 0, 1), this;
    }
    extractRotation(t2) {
      if (0 === t2.determinant()) return this.identity();
      const e2 = this.elements, i2 = t2.elements, s2 = 1 / Ks.setFromMatrixColumn(t2, 0).length(), r2 = 1 / Ks.setFromMatrixColumn(t2, 1).length(), n2 = 1 / Ks.setFromMatrixColumn(t2, 2).length();
      return e2[0] = i2[0] * s2, e2[1] = i2[1] * s2, e2[2] = i2[2] * s2, e2[3] = 0, e2[4] = i2[4] * r2, e2[5] = i2[5] * r2, e2[6] = i2[6] * r2, e2[7] = 0, e2[8] = i2[8] * n2, e2[9] = i2[9] * n2, e2[10] = i2[10] * n2, e2[11] = 0, e2[12] = 0, e2[13] = 0, e2[14] = 0, e2[15] = 1, this;
    }
    makeRotationFromEuler(t2) {
      const e2 = this.elements, i2 = t2.x, s2 = t2.y, r2 = t2.z, n2 = Math.cos(i2), a2 = Math.sin(i2), o2 = Math.cos(s2), h2 = Math.sin(s2), l2 = Math.cos(r2), c2 = Math.sin(r2);
      if ("XYZ" === t2.order) {
        const t3 = n2 * l2, i3 = n2 * c2, s3 = a2 * l2, r3 = a2 * c2;
        e2[0] = o2 * l2, e2[4] = -o2 * c2, e2[8] = h2, e2[1] = i3 + s3 * h2, e2[5] = t3 - r3 * h2, e2[9] = -a2 * o2, e2[2] = r3 - t3 * h2, e2[6] = s3 + i3 * h2, e2[10] = n2 * o2;
      } else if ("YXZ" === t2.order) {
        const t3 = o2 * l2, i3 = o2 * c2, s3 = h2 * l2, r3 = h2 * c2;
        e2[0] = t3 + r3 * a2, e2[4] = s3 * a2 - i3, e2[8] = n2 * h2, e2[1] = n2 * c2, e2[5] = n2 * l2, e2[9] = -a2, e2[2] = i3 * a2 - s3, e2[6] = r3 + t3 * a2, e2[10] = n2 * o2;
      } else if ("ZXY" === t2.order) {
        const t3 = o2 * l2, i3 = o2 * c2, s3 = h2 * l2, r3 = h2 * c2;
        e2[0] = t3 - r3 * a2, e2[4] = -n2 * c2, e2[8] = s3 + i3 * a2, e2[1] = i3 + s3 * a2, e2[5] = n2 * l2, e2[9] = r3 - t3 * a2, e2[2] = -n2 * h2, e2[6] = a2, e2[10] = n2 * o2;
      } else if ("ZYX" === t2.order) {
        const t3 = n2 * l2, i3 = n2 * c2, s3 = a2 * l2, r3 = a2 * c2;
        e2[0] = o2 * l2, e2[4] = s3 * h2 - i3, e2[8] = t3 * h2 + r3, e2[1] = o2 * c2, e2[5] = r3 * h2 + t3, e2[9] = i3 * h2 - s3, e2[2] = -h2, e2[6] = a2 * o2, e2[10] = n2 * o2;
      } else if ("YZX" === t2.order) {
        const t3 = n2 * o2, i3 = n2 * h2, s3 = a2 * o2, r3 = a2 * h2;
        e2[0] = o2 * l2, e2[4] = r3 - t3 * c2, e2[8] = s3 * c2 + i3, e2[1] = c2, e2[5] = n2 * l2, e2[9] = -a2 * l2, e2[2] = -h2 * l2, e2[6] = i3 * c2 + s3, e2[10] = t3 - r3 * c2;
      } else if ("XZY" === t2.order) {
        const t3 = n2 * o2, i3 = n2 * h2, s3 = a2 * o2, r3 = a2 * h2;
        e2[0] = o2 * l2, e2[4] = -c2, e2[8] = h2 * l2, e2[1] = t3 * c2 + r3, e2[5] = n2 * l2, e2[9] = i3 * c2 - s3, e2[2] = s3 * c2 - i3, e2[6] = a2 * l2, e2[10] = r3 * c2 + t3;
      }
      return e2[3] = 0, e2[7] = 0, e2[11] = 0, e2[12] = 0, e2[13] = 0, e2[14] = 0, e2[15] = 1, this;
    }
    makeRotationFromQuaternion(t2) {
      return this.compose(er, t2, ir);
    }
    lookAt(t2, e2, i2) {
      const s2 = this.elements;
      return nr.subVectors(t2, e2), 0 === nr.lengthSq() && (nr.z = 1), nr.normalize(), sr.crossVectors(i2, nr), 0 === sr.lengthSq() && (1 === Math.abs(i2.z) ? nr.x += 1e-4 : nr.z += 1e-4, nr.normalize(), sr.crossVectors(i2, nr)), sr.normalize(), rr.crossVectors(nr, sr), s2[0] = sr.x, s2[4] = rr.x, s2[8] = nr.x, s2[1] = sr.y, s2[5] = rr.y, s2[9] = nr.y, s2[2] = sr.z, s2[6] = rr.z, s2[10] = nr.z, this;
    }
    multiply(t2) {
      return this.multiplyMatrices(this, t2);
    }
    premultiply(t2) {
      return this.multiplyMatrices(t2, this);
    }
    multiplyMatrices(t2, e2) {
      const i2 = t2.elements, s2 = e2.elements, r2 = this.elements, n2 = i2[0], a2 = i2[4], o2 = i2[8], h2 = i2[12], l2 = i2[1], c2 = i2[5], u2 = i2[9], d2 = i2[13], p2 = i2[2], m2 = i2[6], y2 = i2[10], g2 = i2[14], f2 = i2[3], x2 = i2[7], b2 = i2[11], v2 = i2[15], w2 = s2[0], M2 = s2[4], S2 = s2[8], _2 = s2[12], A2 = s2[1], T2 = s2[5], z2 = s2[9], C2 = s2[13], I2 = s2[2], B2 = s2[6], k2 = s2[10], O2 = s2[14], P2 = s2[3], R2 = s2[7], N2 = s2[11], V2 = s2[15];
      return r2[0] = n2 * w2 + a2 * A2 + o2 * I2 + h2 * P2, r2[4] = n2 * M2 + a2 * T2 + o2 * B2 + h2 * R2, r2[8] = n2 * S2 + a2 * z2 + o2 * k2 + h2 * N2, r2[12] = n2 * _2 + a2 * C2 + o2 * O2 + h2 * V2, r2[1] = l2 * w2 + c2 * A2 + u2 * I2 + d2 * P2, r2[5] = l2 * M2 + c2 * T2 + u2 * B2 + d2 * R2, r2[9] = l2 * S2 + c2 * z2 + u2 * k2 + d2 * N2, r2[13] = l2 * _2 + c2 * C2 + u2 * O2 + d2 * V2, r2[2] = p2 * w2 + m2 * A2 + y2 * I2 + g2 * P2, r2[6] = p2 * M2 + m2 * T2 + y2 * B2 + g2 * R2, r2[10] = p2 * S2 + m2 * z2 + y2 * k2 + g2 * N2, r2[14] = p2 * _2 + m2 * C2 + y2 * O2 + g2 * V2, r2[3] = f2 * w2 + x2 * A2 + b2 * I2 + v2 * P2, r2[7] = f2 * M2 + x2 * T2 + b2 * B2 + v2 * R2, r2[11] = f2 * S2 + x2 * z2 + b2 * k2 + v2 * N2, r2[15] = f2 * _2 + x2 * C2 + b2 * O2 + v2 * V2, this;
    }
    multiplyScalar(t2) {
      const e2 = this.elements;
      return e2[0] *= t2, e2[4] *= t2, e2[8] *= t2, e2[12] *= t2, e2[1] *= t2, e2[5] *= t2, e2[9] *= t2, e2[13] *= t2, e2[2] *= t2, e2[6] *= t2, e2[10] *= t2, e2[14] *= t2, e2[3] *= t2, e2[7] *= t2, e2[11] *= t2, e2[15] *= t2, this;
    }
    determinant() {
      const t2 = this.elements, e2 = t2[0], i2 = t2[4], s2 = t2[8], r2 = t2[12], n2 = t2[1], a2 = t2[5], o2 = t2[9], h2 = t2[13], l2 = t2[2], c2 = t2[6], u2 = t2[10], d2 = t2[14], p2 = t2[3], m2 = t2[7], y2 = t2[11], g2 = t2[15], f2 = o2 * d2 - h2 * u2, x2 = a2 * d2 - h2 * c2, b2 = a2 * u2 - o2 * c2, v2 = n2 * d2 - h2 * l2, w2 = n2 * u2 - o2 * l2, M2 = n2 * c2 - a2 * l2;
      return e2 * (m2 * f2 - y2 * x2 + g2 * b2) - i2 * (p2 * f2 - y2 * v2 + g2 * w2) + s2 * (p2 * x2 - m2 * v2 + g2 * M2) - r2 * (p2 * b2 - m2 * w2 + y2 * M2);
    }
    transpose() {
      const t2 = this.elements;
      let e2;
      return e2 = t2[1], t2[1] = t2[4], t2[4] = e2, e2 = t2[2], t2[2] = t2[8], t2[8] = e2, e2 = t2[6], t2[6] = t2[9], t2[9] = e2, e2 = t2[3], t2[3] = t2[12], t2[12] = e2, e2 = t2[7], t2[7] = t2[13], t2[13] = e2, e2 = t2[11], t2[11] = t2[14], t2[14] = e2, this;
    }
    setPosition(t2, e2, i2) {
      const s2 = this.elements;
      return t2.isVector3 ? (s2[12] = t2.x, s2[13] = t2.y, s2[14] = t2.z) : (s2[12] = t2, s2[13] = e2, s2[14] = i2), this;
    }
    invert() {
      const t2 = this.elements, e2 = t2[0], i2 = t2[1], s2 = t2[2], r2 = t2[3], n2 = t2[4], a2 = t2[5], o2 = t2[6], h2 = t2[7], l2 = t2[8], c2 = t2[9], u2 = t2[10], d2 = t2[11], p2 = t2[12], m2 = t2[13], y2 = t2[14], g2 = t2[15], f2 = e2 * a2 - i2 * n2, x2 = e2 * o2 - s2 * n2, b2 = e2 * h2 - r2 * n2, v2 = i2 * o2 - s2 * a2, w2 = i2 * h2 - r2 * a2, M2 = s2 * h2 - r2 * o2, S2 = l2 * m2 - c2 * p2, _2 = l2 * y2 - u2 * p2, A2 = l2 * g2 - d2 * p2, T2 = c2 * y2 - u2 * m2, z2 = c2 * g2 - d2 * m2, C2 = u2 * g2 - d2 * y2, I2 = f2 * C2 - x2 * z2 + b2 * T2 + v2 * A2 - w2 * _2 + M2 * S2;
      if (0 === I2) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      const B2 = 1 / I2;
      return t2[0] = (a2 * C2 - o2 * z2 + h2 * T2) * B2, t2[1] = (s2 * z2 - i2 * C2 - r2 * T2) * B2, t2[2] = (m2 * M2 - y2 * w2 + g2 * v2) * B2, t2[3] = (u2 * w2 - c2 * M2 - d2 * v2) * B2, t2[4] = (o2 * A2 - n2 * C2 - h2 * _2) * B2, t2[5] = (e2 * C2 - s2 * A2 + r2 * _2) * B2, t2[6] = (y2 * b2 - p2 * M2 - g2 * x2) * B2, t2[7] = (l2 * M2 - u2 * b2 + d2 * x2) * B2, t2[8] = (n2 * z2 - a2 * A2 + h2 * S2) * B2, t2[9] = (i2 * A2 - e2 * z2 - r2 * S2) * B2, t2[10] = (p2 * w2 - m2 * b2 + g2 * f2) * B2, t2[11] = (c2 * b2 - l2 * w2 - d2 * f2) * B2, t2[12] = (a2 * _2 - n2 * T2 - o2 * S2) * B2, t2[13] = (e2 * T2 - i2 * _2 + s2 * S2) * B2, t2[14] = (m2 * x2 - p2 * v2 - y2 * f2) * B2, t2[15] = (l2 * v2 - c2 * x2 + u2 * f2) * B2, this;
    }
    scale(t2) {
      const e2 = this.elements, i2 = t2.x, s2 = t2.y, r2 = t2.z;
      return e2[0] *= i2, e2[4] *= s2, e2[8] *= r2, e2[1] *= i2, e2[5] *= s2, e2[9] *= r2, e2[2] *= i2, e2[6] *= s2, e2[10] *= r2, e2[3] *= i2, e2[7] *= s2, e2[11] *= r2, this;
    }
    getMaxScaleOnAxis() {
      const t2 = this.elements, e2 = t2[0] * t2[0] + t2[1] * t2[1] + t2[2] * t2[2], i2 = t2[4] * t2[4] + t2[5] * t2[5] + t2[6] * t2[6], s2 = t2[8] * t2[8] + t2[9] * t2[9] + t2[10] * t2[10];
      return Math.sqrt(Math.max(e2, i2, s2));
    }
    makeTranslation(t2, e2, i2) {
      return t2.isVector3 ? this.set(1, 0, 0, t2.x, 0, 1, 0, t2.y, 0, 0, 1, t2.z, 0, 0, 0, 1) : this.set(1, 0, 0, t2, 0, 1, 0, e2, 0, 0, 1, i2, 0, 0, 0, 1), this;
    }
    makeRotationX(t2) {
      const e2 = Math.cos(t2), i2 = Math.sin(t2);
      return this.set(1, 0, 0, 0, 0, e2, -i2, 0, 0, i2, e2, 0, 0, 0, 0, 1), this;
    }
    makeRotationY(t2) {
      const e2 = Math.cos(t2), i2 = Math.sin(t2);
      return this.set(e2, 0, i2, 0, 0, 1, 0, 0, -i2, 0, e2, 0, 0, 0, 0, 1), this;
    }
    makeRotationZ(t2) {
      const e2 = Math.cos(t2), i2 = Math.sin(t2);
      return this.set(e2, -i2, 0, 0, i2, e2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }
    makeRotationAxis(t2, e2) {
      const i2 = Math.cos(e2), s2 = Math.sin(e2), r2 = 1 - i2, n2 = t2.x, a2 = t2.y, o2 = t2.z, h2 = r2 * n2, l2 = r2 * a2;
      return this.set(h2 * n2 + i2, h2 * a2 - s2 * o2, h2 * o2 + s2 * a2, 0, h2 * a2 + s2 * o2, l2 * a2 + i2, l2 * o2 - s2 * n2, 0, h2 * o2 - s2 * a2, l2 * o2 + s2 * n2, r2 * o2 * o2 + i2, 0, 0, 0, 0, 1), this;
    }
    makeScale(t2, e2, i2) {
      return this.set(t2, 0, 0, 0, 0, e2, 0, 0, 0, 0, i2, 0, 0, 0, 0, 1), this;
    }
    makeShear(t2, e2, i2, s2, r2, n2) {
      return this.set(1, i2, r2, 0, t2, 1, n2, 0, e2, s2, 1, 0, 0, 0, 0, 1), this;
    }
    compose(t2, e2, i2) {
      const s2 = this.elements, r2 = e2._x, n2 = e2._y, a2 = e2._z, o2 = e2._w, h2 = r2 + r2, l2 = n2 + n2, c2 = a2 + a2, u2 = r2 * h2, d2 = r2 * l2, p2 = r2 * c2, m2 = n2 * l2, y2 = n2 * c2, g2 = a2 * c2, f2 = o2 * h2, x2 = o2 * l2, b2 = o2 * c2, v2 = i2.x, w2 = i2.y, M2 = i2.z;
      return s2[0] = (1 - (m2 + g2)) * v2, s2[1] = (d2 + b2) * v2, s2[2] = (p2 - x2) * v2, s2[3] = 0, s2[4] = (d2 - b2) * w2, s2[5] = (1 - (u2 + g2)) * w2, s2[6] = (y2 + f2) * w2, s2[7] = 0, s2[8] = (p2 + x2) * M2, s2[9] = (y2 - f2) * M2, s2[10] = (1 - (u2 + m2)) * M2, s2[11] = 0, s2[12] = t2.x, s2[13] = t2.y, s2[14] = t2.z, s2[15] = 1, this;
    }
    decompose(t2, e2, i2) {
      const s2 = this.elements;
      t2.x = s2[12], t2.y = s2[13], t2.z = s2[14];
      const r2 = this.determinant();
      if (0 === r2) return i2.set(1, 1, 1), e2.identity(), this;
      let n2 = Ks.set(s2[0], s2[1], s2[2]).length();
      const a2 = Ks.set(s2[4], s2[5], s2[6]).length(), o2 = Ks.set(s2[8], s2[9], s2[10]).length();
      r2 < 0 && (n2 = -n2), tr.copy(this);
      const h2 = 1 / n2, l2 = 1 / a2, c2 = 1 / o2;
      return tr.elements[0] *= h2, tr.elements[1] *= h2, tr.elements[2] *= h2, tr.elements[4] *= l2, tr.elements[5] *= l2, tr.elements[6] *= l2, tr.elements[8] *= c2, tr.elements[9] *= c2, tr.elements[10] *= c2, e2.setFromRotationMatrix(tr), i2.x = n2, i2.y = a2, i2.z = o2, this;
    }
    makePerspective(t2, e2, i2, s2, r2, n2, a2 = 2e3, o2 = false) {
      const h2 = this.elements, l2 = 2 * r2 / (e2 - t2), c2 = 2 * r2 / (i2 - s2), u2 = (e2 + t2) / (e2 - t2), d2 = (i2 + s2) / (i2 - s2);
      let p2, m2;
      if (o2) p2 = r2 / (n2 - r2), m2 = n2 * r2 / (n2 - r2);
      else if (a2 === Wi) p2 = -(n2 + r2) / (n2 - r2), m2 = -2 * n2 * r2 / (n2 - r2);
      else {
        if (a2 !== qi) throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a2);
        p2 = -n2 / (n2 - r2), m2 = -n2 * r2 / (n2 - r2);
      }
      return h2[0] = l2, h2[4] = 0, h2[8] = u2, h2[12] = 0, h2[1] = 0, h2[5] = c2, h2[9] = d2, h2[13] = 0, h2[2] = 0, h2[6] = 0, h2[10] = p2, h2[14] = m2, h2[3] = 0, h2[7] = 0, h2[11] = -1, h2[15] = 0, this;
    }
    makeOrthographic(t2, e2, i2, s2, r2, n2, a2 = 2e3, o2 = false) {
      const h2 = this.elements, l2 = 2 / (e2 - t2), c2 = 2 / (i2 - s2), u2 = -(e2 + t2) / (e2 - t2), d2 = -(i2 + s2) / (i2 - s2);
      let p2, m2;
      if (o2) p2 = 1 / (n2 - r2), m2 = n2 / (n2 - r2);
      else if (a2 === Wi) p2 = -2 / (n2 - r2), m2 = -(n2 + r2) / (n2 - r2);
      else {
        if (a2 !== qi) throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a2);
        p2 = -1 / (n2 - r2), m2 = -r2 / (n2 - r2);
      }
      return h2[0] = l2, h2[4] = 0, h2[8] = 0, h2[12] = u2, h2[1] = 0, h2[5] = c2, h2[9] = 0, h2[13] = d2, h2[2] = 0, h2[6] = 0, h2[10] = p2, h2[14] = m2, h2[3] = 0, h2[7] = 0, h2[11] = 0, h2[15] = 1, this;
    }
    equals(t2) {
      const e2 = this.elements, i2 = t2.elements;
      for (let t3 = 0; t3 < 16; t3++) if (e2[t3] !== i2[t3]) return false;
      return true;
    }
    fromArray(t2, e2 = 0) {
      for (let i2 = 0; i2 < 16; i2++) this.elements[i2] = t2[i2 + e2];
      return this;
    }
    toArray(t2 = [], e2 = 0) {
      const i2 = this.elements;
      return t2[e2] = i2[0], t2[e2 + 1] = i2[1], t2[e2 + 2] = i2[2], t2[e2 + 3] = i2[3], t2[e2 + 4] = i2[4], t2[e2 + 5] = i2[5], t2[e2 + 6] = i2[6], t2[e2 + 7] = i2[7], t2[e2 + 8] = i2[8], t2[e2 + 9] = i2[9], t2[e2 + 10] = i2[10], t2[e2 + 11] = i2[11], t2[e2 + 12] = i2[12], t2[e2 + 13] = i2[13], t2[e2 + 14] = i2[14], t2[e2 + 15] = i2[15], t2;
    }
  };
  _Qs.prototype.isMatrix4 = true;
  var Qs = _Qs;
  var Ks = new Ts();
  var tr = new Qs();
  var er = new Ts(0, 0, 0);
  var ir = new Ts(1, 1, 1);
  var sr = new Ts();
  var rr = new Ts();
  var nr = new Ts();
  var ar = new Qs();
  var or = new As();
  var hr = class _hr {
    constructor(t2 = 0, e2 = 0, i2 = 0, s2 = _hr.DEFAULT_ORDER) {
      this.isEuler = true, this._x = t2, this._y = e2, this._z = i2, this._order = s2;
    }
    get x() {
      return this._x;
    }
    set x(t2) {
      this._x = t2, this._onChangeCallback();
    }
    get y() {
      return this._y;
    }
    set y(t2) {
      this._y = t2, this._onChangeCallback();
    }
    get z() {
      return this._z;
    }
    set z(t2) {
      this._z = t2, this._onChangeCallback();
    }
    get order() {
      return this._order;
    }
    set order(t2) {
      this._order = t2, this._onChangeCallback();
    }
    set(t2, e2, i2, s2 = this._order) {
      return this._x = t2, this._y = e2, this._z = i2, this._order = s2, this._onChangeCallback(), this;
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._order);
    }
    copy(t2) {
      return this._x = t2._x, this._y = t2._y, this._z = t2._z, this._order = t2._order, this._onChangeCallback(), this;
    }
    setFromRotationMatrix(t2, e2 = this._order, i2 = true) {
      const s2 = t2.elements, r2 = s2[0], n2 = s2[4], a2 = s2[8], o2 = s2[1], h2 = s2[5], l2 = s2[9], c2 = s2[2], u2 = s2[6], d2 = s2[10];
      switch (e2) {
        case "XYZ":
          this._y = Math.asin(xs(a2, -1, 1)), Math.abs(a2) < 0.9999999 ? (this._x = Math.atan2(-l2, d2), this._z = Math.atan2(-n2, r2)) : (this._x = Math.atan2(u2, h2), this._z = 0);
          break;
        case "YXZ":
          this._x = Math.asin(-xs(l2, -1, 1)), Math.abs(l2) < 0.9999999 ? (this._y = Math.atan2(a2, d2), this._z = Math.atan2(o2, h2)) : (this._y = Math.atan2(-c2, r2), this._z = 0);
          break;
        case "ZXY":
          this._x = Math.asin(xs(u2, -1, 1)), Math.abs(u2) < 0.9999999 ? (this._y = Math.atan2(-c2, d2), this._z = Math.atan2(-n2, h2)) : (this._y = 0, this._z = Math.atan2(o2, r2));
          break;
        case "ZYX":
          this._y = Math.asin(-xs(c2, -1, 1)), Math.abs(c2) < 0.9999999 ? (this._x = Math.atan2(u2, d2), this._z = Math.atan2(o2, r2)) : (this._x = 0, this._z = Math.atan2(-n2, h2));
          break;
        case "YZX":
          this._z = Math.asin(xs(o2, -1, 1)), Math.abs(o2) < 0.9999999 ? (this._x = Math.atan2(-l2, h2), this._y = Math.atan2(-c2, r2)) : (this._x = 0, this._y = Math.atan2(a2, d2));
          break;
        case "XZY":
          this._z = Math.asin(-xs(n2, -1, 1)), Math.abs(n2) < 0.9999999 ? (this._x = Math.atan2(u2, h2), this._y = Math.atan2(a2, r2)) : (this._x = Math.atan2(-l2, d2), this._y = 0);
          break;
        default:
          as("Euler: .setFromRotationMatrix() encountered an unknown order: " + e2);
      }
      return this._order = e2, true === i2 && this._onChangeCallback(), this;
    }
    setFromQuaternion(t2, e2, i2) {
      return ar.makeRotationFromQuaternion(t2), this.setFromRotationMatrix(ar, e2, i2);
    }
    setFromVector3(t2, e2 = this._order) {
      return this.set(t2.x, t2.y, t2.z, e2);
    }
    reorder(t2) {
      return or.setFromEuler(this), this.setFromQuaternion(or, t2);
    }
    equals(t2) {
      return t2._x === this._x && t2._y === this._y && t2._z === this._z && t2._order === this._order;
    }
    fromArray(t2) {
      return this._x = t2[0], this._y = t2[1], this._z = t2[2], void 0 !== t2[3] && (this._order = t2[3]), this._onChangeCallback(), this;
    }
    toArray(t2 = [], e2 = 0) {
      return t2[e2] = this._x, t2[e2 + 1] = this._y, t2[e2 + 2] = this._z, t2[e2 + 3] = this._order, t2;
    }
    _onChange(t2) {
      return this._onChangeCallback = t2, this;
    }
    _onChangeCallback() {
    }
    *[Symbol.iterator]() {
      yield this._x, yield this._y, yield this._z, yield this._order;
    }
  };
  hr.DEFAULT_ORDER = "XYZ";
  var lr = class {
    constructor() {
      this.mask = 1;
    }
    set(t2) {
      this.mask = 1 << t2 >>> 0;
    }
    enable(t2) {
      this.mask |= 1 << t2;
    }
    enableAll() {
      this.mask = -1;
    }
    toggle(t2) {
      this.mask ^= 1 << t2;
    }
    disable(t2) {
      this.mask &= ~(1 << t2);
    }
    disableAll() {
      this.mask = 0;
    }
    test(t2) {
      return 0 !== (this.mask & t2.mask);
    }
    isEnabled(t2) {
      return !!(this.mask & 1 << t2);
    }
  };
  var cr = 0;
  var ur = new Ts();
  var dr = new As();
  var pr = new Qs();
  var mr = new Ts();
  var yr = new Ts();
  var gr = new Ts();
  var fr = new As();
  var xr = new Ts(1, 0, 0);
  var br = new Ts(0, 1, 0);
  var vr = new Ts(0, 0, 1);
  var wr = { type: "added" };
  var Mr = { type: "removed" };
  var Sr = { type: "childadded", child: null };
  var _r = { type: "childremoved", child: null };
  var Ar = class _Ar extends ds {
    constructor() {
      super(), this.isObject3D = true, Object.defineProperty(this, "id", { value: cr++ }), this.uuid = fs(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = _Ar.DEFAULT_UP.clone();
      const t2 = new Ts(), e2 = new hr(), i2 = new As(), s2 = new Ts(1, 1, 1);
      e2._onChange(function() {
        i2.setFromEuler(e2, false);
      }), i2._onChange(function() {
        e2.setFromQuaternion(i2, void 0, false);
      }), Object.defineProperties(this, { position: { configurable: true, enumerable: true, value: t2 }, rotation: { configurable: true, enumerable: true, value: e2 }, quaternion: { configurable: true, enumerable: true, value: i2 }, scale: { configurable: true, enumerable: true, value: s2 }, modelViewMatrix: { value: new Qs() }, normalMatrix: { value: new Is() } }), this.matrix = new Qs(), this.matrixWorld = new Qs(), this.matrixAutoUpdate = _Ar.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = _Ar.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = false, this.layers = new lr(), this.visible = true, this.castShadow = false, this.receiveShadow = false, this.frustumCulled = true, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.static = false, this.userData = {}, this.pivot = null;
    }
    onBeforeShadow() {
    }
    onAfterShadow() {
    }
    onBeforeRender() {
    }
    onAfterRender() {
    }
    applyMatrix4(t2) {
      this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t2), this.matrix.decompose(this.position, this.quaternion, this.scale);
    }
    applyQuaternion(t2) {
      return this.quaternion.premultiply(t2), this;
    }
    setRotationFromAxisAngle(t2, e2) {
      this.quaternion.setFromAxisAngle(t2, e2);
    }
    setRotationFromEuler(t2) {
      this.quaternion.setFromEuler(t2, true);
    }
    setRotationFromMatrix(t2) {
      this.quaternion.setFromRotationMatrix(t2);
    }
    setRotationFromQuaternion(t2) {
      this.quaternion.copy(t2);
    }
    rotateOnAxis(t2, e2) {
      return dr.setFromAxisAngle(t2, e2), this.quaternion.multiply(dr), this;
    }
    rotateOnWorldAxis(t2, e2) {
      return dr.setFromAxisAngle(t2, e2), this.quaternion.premultiply(dr), this;
    }
    rotateX(t2) {
      return this.rotateOnAxis(xr, t2);
    }
    rotateY(t2) {
      return this.rotateOnAxis(br, t2);
    }
    rotateZ(t2) {
      return this.rotateOnAxis(vr, t2);
    }
    translateOnAxis(t2, e2) {
      return ur.copy(t2).applyQuaternion(this.quaternion), this.position.add(ur.multiplyScalar(e2)), this;
    }
    translateX(t2) {
      return this.translateOnAxis(xr, t2);
    }
    translateY(t2) {
      return this.translateOnAxis(br, t2);
    }
    translateZ(t2) {
      return this.translateOnAxis(vr, t2);
    }
    localToWorld(t2) {
      return this.updateWorldMatrix(true, false), t2.applyMatrix4(this.matrixWorld);
    }
    worldToLocal(t2) {
      return this.updateWorldMatrix(true, false), t2.applyMatrix4(pr.copy(this.matrixWorld).invert());
    }
    lookAt(t2, e2, i2) {
      t2.isVector3 ? mr.copy(t2) : mr.set(t2, e2, i2);
      const s2 = this.parent;
      this.updateWorldMatrix(true, false), yr.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? pr.lookAt(yr, mr, this.up) : pr.lookAt(mr, yr, this.up), this.quaternion.setFromRotationMatrix(pr), s2 && (pr.extractRotation(s2.matrixWorld), dr.setFromRotationMatrix(pr), this.quaternion.premultiply(dr.invert()));
    }
    add(t2) {
      if (arguments.length > 1) {
        for (let t3 = 0; t3 < arguments.length; t3++) this.add(arguments[t3]);
        return this;
      }
      return t2 === this ? (os("Object3D.add: object can't be added as a child of itself.", t2), this) : (t2 && t2.isObject3D ? (t2.removeFromParent(), t2.parent = this, this.children.push(t2), t2.dispatchEvent(wr), Sr.child = t2, this.dispatchEvent(Sr), Sr.child = null) : os("Object3D.add: object not an instance of THREE.Object3D.", t2), this);
    }
    remove(t2) {
      if (arguments.length > 1) {
        for (let t3 = 0; t3 < arguments.length; t3++) this.remove(arguments[t3]);
        return this;
      }
      const e2 = this.children.indexOf(t2);
      return -1 !== e2 && (t2.parent = null, this.children.splice(e2, 1), t2.dispatchEvent(Mr), _r.child = t2, this.dispatchEvent(_r), _r.child = null), this;
    }
    removeFromParent() {
      const t2 = this.parent;
      return null !== t2 && t2.remove(this), this;
    }
    clear() {
      return this.remove(...this.children);
    }
    attach(t2) {
      return this.updateWorldMatrix(true, false), pr.copy(this.matrixWorld).invert(), null !== t2.parent && (t2.parent.updateWorldMatrix(true, false), pr.multiply(t2.parent.matrixWorld)), t2.applyMatrix4(pr), t2.removeFromParent(), t2.parent = this, this.children.push(t2), t2.updateWorldMatrix(false, true), t2.dispatchEvent(wr), Sr.child = t2, this.dispatchEvent(Sr), Sr.child = null, this;
    }
    getObjectById(t2) {
      return this.getObjectByProperty("id", t2);
    }
    getObjectByName(t2) {
      return this.getObjectByProperty("name", t2);
    }
    getObjectByProperty(t2, e2) {
      if (this[t2] === e2) return this;
      for (let i2 = 0, s2 = this.children.length; i2 < s2; i2++) {
        const s3 = this.children[i2].getObjectByProperty(t2, e2);
        if (void 0 !== s3) return s3;
      }
    }
    getObjectsByProperty(t2, e2, i2 = []) {
      this[t2] === e2 && i2.push(this);
      const s2 = this.children;
      for (let r2 = 0, n2 = s2.length; r2 < n2; r2++) s2[r2].getObjectsByProperty(t2, e2, i2);
      return i2;
    }
    getWorldPosition(t2) {
      return this.updateWorldMatrix(true, false), t2.setFromMatrixPosition(this.matrixWorld);
    }
    getWorldQuaternion(t2) {
      return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(yr, t2, gr), t2;
    }
    getWorldScale(t2) {
      return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(yr, fr, t2), t2;
    }
    getWorldDirection(t2) {
      this.updateWorldMatrix(true, false);
      const e2 = this.matrixWorld.elements;
      return t2.set(e2[8], e2[9], e2[10]).normalize();
    }
    raycast() {
    }
    traverse(t2) {
      t2(this);
      const e2 = this.children;
      for (let i2 = 0, s2 = e2.length; i2 < s2; i2++) e2[i2].traverse(t2);
    }
    traverseVisible(t2) {
      if (false === this.visible) return;
      t2(this);
      const e2 = this.children;
      for (let i2 = 0, s2 = e2.length; i2 < s2; i2++) e2[i2].traverseVisible(t2);
    }
    traverseAncestors(t2) {
      const e2 = this.parent;
      null !== e2 && (t2(e2), e2.traverseAncestors(t2));
    }
    updateMatrix() {
      this.matrix.compose(this.position, this.quaternion, this.scale);
      const t2 = this.pivot;
      if (null !== t2) {
        const e2 = t2.x, i2 = t2.y, s2 = t2.z, r2 = this.matrix.elements;
        r2[12] += e2 - r2[0] * e2 - r2[4] * i2 - r2[8] * s2, r2[13] += i2 - r2[1] * e2 - r2[5] * i2 - r2[9] * s2, r2[14] += s2 - r2[2] * e2 - r2[6] * i2 - r2[10] * s2;
      }
      this.matrixWorldNeedsUpdate = true;
    }
    updateMatrixWorld(t2) {
      this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t2) && (true === this.matrixWorldAutoUpdate && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = false, t2 = true);
      const e2 = this.children;
      for (let i2 = 0, s2 = e2.length; i2 < s2; i2++) {
        e2[i2].updateMatrixWorld(t2);
      }
    }
    updateWorldMatrix(t2, e2) {
      const i2 = this.parent;
      if (true === t2 && null !== i2 && i2.updateWorldMatrix(true, false), this.matrixAutoUpdate && this.updateMatrix(), true === this.matrixWorldAutoUpdate && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), true === e2) {
        const t3 = this.children;
        for (let e3 = 0, i3 = t3.length; e3 < i3; e3++) {
          t3[e3].updateWorldMatrix(false, true);
        }
      }
    }
    toJSON(t2) {
      const e2 = void 0 === t2 || "string" == typeof t2, i2 = {};
      e2 && (t2 = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, i2.metadata = { version: 4.7, type: "Object", generator: "Object3D.toJSON" });
      const s2 = {};
      function r2(e3, i3) {
        return void 0 === e3[i3.uuid] && (e3[i3.uuid] = i3.toJSON(t2)), i3.uuid;
      }
      if (s2.uuid = this.uuid, s2.type = this.type, "" !== this.name && (s2.name = this.name), true === this.castShadow && (s2.castShadow = true), true === this.receiveShadow && (s2.receiveShadow = true), false === this.visible && (s2.visible = false), false === this.frustumCulled && (s2.frustumCulled = false), 0 !== this.renderOrder && (s2.renderOrder = this.renderOrder), false !== this.static && (s2.static = this.static), Object.keys(this.userData).length > 0 && (s2.userData = this.userData), s2.layers = this.layers.mask, s2.matrix = this.matrix.toArray(), s2.up = this.up.toArray(), null !== this.pivot && (s2.pivot = this.pivot.toArray()), false === this.matrixAutoUpdate && (s2.matrixAutoUpdate = false), void 0 !== this.morphTargetDictionary && (s2.morphTargetDictionary = Object.assign({}, this.morphTargetDictionary)), void 0 !== this.morphTargetInfluences && (s2.morphTargetInfluences = this.morphTargetInfluences.slice()), this.isInstancedMesh && (s2.type = "InstancedMesh", s2.count = this.count, s2.instanceMatrix = this.instanceMatrix.toJSON(), null !== this.instanceColor && (s2.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (s2.type = "BatchedMesh", s2.perObjectFrustumCulled = this.perObjectFrustumCulled, s2.sortObjects = this.sortObjects, s2.drawRanges = this._drawRanges, s2.reservedRanges = this._reservedRanges, s2.geometryInfo = this._geometryInfo.map((t3) => ({ ...t3, boundingBox: t3.boundingBox ? t3.boundingBox.toJSON() : void 0, boundingSphere: t3.boundingSphere ? t3.boundingSphere.toJSON() : void 0 })), s2.instanceInfo = this._instanceInfo.map((t3) => ({ ...t3 })), s2.availableInstanceIds = this._availableInstanceIds.slice(), s2.availableGeometryIds = this._availableGeometryIds.slice(), s2.nextIndexStart = this._nextIndexStart, s2.nextVertexStart = this._nextVertexStart, s2.geometryCount = this._geometryCount, s2.maxInstanceCount = this._maxInstanceCount, s2.maxVertexCount = this._maxVertexCount, s2.maxIndexCount = this._maxIndexCount, s2.geometryInitialized = this._geometryInitialized, s2.matricesTexture = this._matricesTexture.toJSON(t2), s2.indirectTexture = this._indirectTexture.toJSON(t2), null !== this._colorsTexture && (s2.colorsTexture = this._colorsTexture.toJSON(t2)), null !== this.boundingSphere && (s2.boundingSphere = this.boundingSphere.toJSON()), null !== this.boundingBox && (s2.boundingBox = this.boundingBox.toJSON())), this.isScene) this.background && (this.background.isColor ? s2.background = this.background.toJSON() : this.background.isTexture && (s2.background = this.background.toJSON(t2).uuid)), this.environment && this.environment.isTexture && true !== this.environment.isRenderTargetTexture && (s2.environment = this.environment.toJSON(t2).uuid);
      else if (this.isMesh || this.isLine || this.isPoints) {
        s2.geometry = r2(t2.geometries, this.geometry);
        const e3 = this.geometry.parameters;
        if (void 0 !== e3 && void 0 !== e3.shapes) {
          const i3 = e3.shapes;
          if (Array.isArray(i3)) for (let e4 = 0, s3 = i3.length; e4 < s3; e4++) {
            const s4 = i3[e4];
            r2(t2.shapes, s4);
          }
          else r2(t2.shapes, i3);
        }
      }
      if (this.isSkinnedMesh && (s2.bindMode = this.bindMode, s2.bindMatrix = this.bindMatrix.toArray(), void 0 !== this.skeleton && (r2(t2.skeletons, this.skeleton), s2.skeleton = this.skeleton.uuid)), void 0 !== this.material) if (Array.isArray(this.material)) {
        const e3 = [];
        for (let i3 = 0, s3 = this.material.length; i3 < s3; i3++) e3.push(r2(t2.materials, this.material[i3]));
        s2.material = e3;
      } else s2.material = r2(t2.materials, this.material);
      if (this.children.length > 0) {
        s2.children = [];
        for (let e3 = 0; e3 < this.children.length; e3++) s2.children.push(this.children[e3].toJSON(t2).object);
      }
      if (this.animations.length > 0) {
        s2.animations = [];
        for (let e3 = 0; e3 < this.animations.length; e3++) {
          const i3 = this.animations[e3];
          s2.animations.push(r2(t2.animations, i3));
        }
      }
      if (e2) {
        const e3 = n2(t2.geometries), s3 = n2(t2.materials), r3 = n2(t2.textures), a2 = n2(t2.images), o2 = n2(t2.shapes), h2 = n2(t2.skeletons), l2 = n2(t2.animations), c2 = n2(t2.nodes);
        e3.length > 0 && (i2.geometries = e3), s3.length > 0 && (i2.materials = s3), r3.length > 0 && (i2.textures = r3), a2.length > 0 && (i2.images = a2), o2.length > 0 && (i2.shapes = o2), h2.length > 0 && (i2.skeletons = h2), l2.length > 0 && (i2.animations = l2), c2.length > 0 && (i2.nodes = c2);
      }
      return i2.object = s2, i2;
      function n2(t3) {
        const e3 = [];
        for (const i3 in t3) {
          const s3 = t3[i3];
          delete s3.metadata, e3.push(s3);
        }
        return e3;
      }
    }
    clone(t2) {
      return new this.constructor().copy(this, t2);
    }
    copy(t2, e2 = true) {
      if (this.name = t2.name, this.up.copy(t2.up), this.position.copy(t2.position), this.rotation.order = t2.rotation.order, this.quaternion.copy(t2.quaternion), this.scale.copy(t2.scale), this.pivot = null !== t2.pivot ? t2.pivot.clone() : null, this.matrix.copy(t2.matrix), this.matrixWorld.copy(t2.matrixWorld), this.matrixAutoUpdate = t2.matrixAutoUpdate, this.matrixWorldAutoUpdate = t2.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = t2.matrixWorldNeedsUpdate, this.layers.mask = t2.layers.mask, this.visible = t2.visible, this.castShadow = t2.castShadow, this.receiveShadow = t2.receiveShadow, this.frustumCulled = t2.frustumCulled, this.renderOrder = t2.renderOrder, this.static = t2.static, this.animations = t2.animations.slice(), this.userData = JSON.parse(JSON.stringify(t2.userData)), true === e2) for (let e3 = 0; e3 < t2.children.length; e3++) {
        const i2 = t2.children[e3];
        this.add(i2.clone());
      }
      return this;
    }
  };
  Ar.DEFAULT_UP = new Ts(0, 1, 0), Ar.DEFAULT_MATRIX_AUTO_UPDATE = true, Ar.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
  var Tr = class extends Ar {
    constructor() {
      super(), this.isGroup = true, this.type = "Group";
    }
  };
  var zr = { type: "move" };
  var Cr = class {
    constructor() {
      this._targetRay = null, this._grip = null, this._hand = null;
    }
    getHandSpace() {
      return null === this._hand && (this._hand = new Tr(), this._hand.matrixAutoUpdate = false, this._hand.visible = false, this._hand.joints = {}, this._hand.inputState = { pinching: false }), this._hand;
    }
    getTargetRaySpace() {
      return null === this._targetRay && (this._targetRay = new Tr(), this._targetRay.matrixAutoUpdate = false, this._targetRay.visible = false, this._targetRay.hasLinearVelocity = false, this._targetRay.linearVelocity = new Ts(), this._targetRay.hasAngularVelocity = false, this._targetRay.angularVelocity = new Ts()), this._targetRay;
    }
    getGripSpace() {
      return null === this._grip && (this._grip = new Tr(), this._grip.matrixAutoUpdate = false, this._grip.visible = false, this._grip.hasLinearVelocity = false, this._grip.linearVelocity = new Ts(), this._grip.hasAngularVelocity = false, this._grip.angularVelocity = new Ts(), this._grip.eventsEnabled = false), this._grip;
    }
    dispatchEvent(t2) {
      return null !== this._targetRay && this._targetRay.dispatchEvent(t2), null !== this._grip && this._grip.dispatchEvent(t2), null !== this._hand && this._hand.dispatchEvent(t2), this;
    }
    connect(t2) {
      if (t2 && t2.hand) {
        const e2 = this._hand;
        if (e2) for (const i2 of t2.hand.values()) this._getHandJoint(e2, i2);
      }
      return this.dispatchEvent({ type: "connected", data: t2 }), this;
    }
    disconnect(t2) {
      return this.dispatchEvent({ type: "disconnected", data: t2 }), null !== this._targetRay && (this._targetRay.visible = false), null !== this._grip && (this._grip.visible = false), null !== this._hand && (this._hand.visible = false), this;
    }
    update(t2, e2, i2) {
      let s2 = null, r2 = null, n2 = null;
      const a2 = this._targetRay, o2 = this._grip, h2 = this._hand;
      if (t2 && "visible-blurred" !== e2.session.visibilityState) {
        if (h2 && t2.hand) {
          n2 = true;
          for (const s4 of t2.hand.values()) {
            const t3 = e2.getJointPose(s4, i2), r4 = this._getHandJoint(h2, s4);
            null !== t3 && (r4.matrix.fromArray(t3.transform.matrix), r4.matrix.decompose(r4.position, r4.rotation, r4.scale), r4.matrixWorldNeedsUpdate = true, r4.jointRadius = t3.radius), r4.visible = null !== t3;
          }
          const s3 = h2.joints["index-finger-tip"], r3 = h2.joints["thumb-tip"], a3 = s3.position.distanceTo(r3.position), o3 = 0.02, l2 = 5e-3;
          h2.inputState.pinching && a3 > o3 + l2 ? (h2.inputState.pinching = false, this.dispatchEvent({ type: "pinchend", handedness: t2.handedness, target: this })) : !h2.inputState.pinching && a3 <= o3 - l2 && (h2.inputState.pinching = true, this.dispatchEvent({ type: "pinchstart", handedness: t2.handedness, target: this }));
        } else null !== o2 && t2.gripSpace && (r2 = e2.getPose(t2.gripSpace, i2), null !== r2 && (o2.matrix.fromArray(r2.transform.matrix), o2.matrix.decompose(o2.position, o2.rotation, o2.scale), o2.matrixWorldNeedsUpdate = true, r2.linearVelocity ? (o2.hasLinearVelocity = true, o2.linearVelocity.copy(r2.linearVelocity)) : o2.hasLinearVelocity = false, r2.angularVelocity ? (o2.hasAngularVelocity = true, o2.angularVelocity.copy(r2.angularVelocity)) : o2.hasAngularVelocity = false, o2.eventsEnabled && o2.dispatchEvent({ type: "gripUpdated", data: t2, target: this })));
        null !== a2 && (s2 = e2.getPose(t2.targetRaySpace, i2), null === s2 && null !== r2 && (s2 = r2), null !== s2 && (a2.matrix.fromArray(s2.transform.matrix), a2.matrix.decompose(a2.position, a2.rotation, a2.scale), a2.matrixWorldNeedsUpdate = true, s2.linearVelocity ? (a2.hasLinearVelocity = true, a2.linearVelocity.copy(s2.linearVelocity)) : a2.hasLinearVelocity = false, s2.angularVelocity ? (a2.hasAngularVelocity = true, a2.angularVelocity.copy(s2.angularVelocity)) : a2.hasAngularVelocity = false, this.dispatchEvent(zr)));
      }
      return null !== a2 && (a2.visible = null !== s2), null !== o2 && (o2.visible = null !== r2), null !== h2 && (h2.visible = null !== n2), this;
    }
    _getHandJoint(t2, e2) {
      if (void 0 === t2.joints[e2.jointName]) {
        const i2 = new Tr();
        i2.matrixAutoUpdate = false, i2.visible = false, t2.joints[e2.jointName] = i2, t2.add(i2);
      }
      return t2.joints[e2.jointName];
    }
  };
  var Ir = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
  var Br = { h: 0, s: 0, l: 0 };
  var kr = { h: 0, s: 0, l: 0 };
  function Or(t2, e2, i2) {
    return i2 < 0 && (i2 += 1), i2 > 1 && (i2 -= 1), i2 < 1 / 6 ? t2 + 6 * (e2 - t2) * i2 : i2 < 0.5 ? e2 : i2 < 2 / 3 ? t2 + 6 * (e2 - t2) * (2 / 3 - i2) : t2;
  }
  var Pr = class {
    constructor(t2, e2, i2) {
      return this.isColor = true, this.r = 1, this.g = 1, this.b = 1, this.set(t2, e2, i2);
    }
    set(t2, e2, i2) {
      if (void 0 === e2 && void 0 === i2) {
        const e3 = t2;
        e3 && e3.isColor ? this.copy(e3) : "number" == typeof e3 ? this.setHex(e3) : "string" == typeof e3 && this.setStyle(e3);
      } else this.setRGB(t2, e2, i2);
      return this;
    }
    setScalar(t2) {
      return this.r = t2, this.g = t2, this.b = t2, this;
    }
    setHex(t2, e2 = ei) {
      return t2 = Math.floor(t2), this.r = (t2 >> 16 & 255) / 255, this.g = (t2 >> 8 & 255) / 255, this.b = (255 & t2) / 255, Rs.colorSpaceToWorking(this, e2), this;
    }
    setRGB(t2, e2, i2, s2 = Rs.workingColorSpace) {
      return this.r = t2, this.g = e2, this.b = i2, Rs.colorSpaceToWorking(this, s2), this;
    }
    setHSL(t2, e2, i2, s2 = Rs.workingColorSpace) {
      if (t2 = bs(t2, 1), e2 = xs(e2, 0, 1), i2 = xs(i2, 0, 1), 0 === e2) this.r = this.g = this.b = i2;
      else {
        const s3 = i2 <= 0.5 ? i2 * (1 + e2) : i2 + e2 - i2 * e2, r2 = 2 * i2 - s3;
        this.r = Or(r2, s3, t2 + 1 / 3), this.g = Or(r2, s3, t2), this.b = Or(r2, s3, t2 - 1 / 3);
      }
      return Rs.colorSpaceToWorking(this, s2), this;
    }
    setStyle(t2, e2 = ei) {
      function i2(e3) {
        void 0 !== e3 && parseFloat(e3) < 1 && as("Color: Alpha component of " + t2 + " will be ignored.");
      }
      let s2;
      if (s2 = /^(\w+)\(([^\)]*)\)/.exec(t2)) {
        let r2;
        const n2 = s2[1], a2 = s2[2];
        switch (n2) {
          case "rgb":
          case "rgba":
            if (r2 = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a2)) return i2(r2[4]), this.setRGB(Math.min(255, parseInt(r2[1], 10)) / 255, Math.min(255, parseInt(r2[2], 10)) / 255, Math.min(255, parseInt(r2[3], 10)) / 255, e2);
            if (r2 = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a2)) return i2(r2[4]), this.setRGB(Math.min(100, parseInt(r2[1], 10)) / 100, Math.min(100, parseInt(r2[2], 10)) / 100, Math.min(100, parseInt(r2[3], 10)) / 100, e2);
            break;
          case "hsl":
          case "hsla":
            if (r2 = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a2)) return i2(r2[4]), this.setHSL(parseFloat(r2[1]) / 360, parseFloat(r2[2]) / 100, parseFloat(r2[3]) / 100, e2);
            break;
          default:
            as("Color: Unknown color model " + t2);
        }
      } else if (s2 = /^\#([A-Fa-f\d]+)$/.exec(t2)) {
        const i3 = s2[1], r2 = i3.length;
        if (3 === r2) return this.setRGB(parseInt(i3.charAt(0), 16) / 15, parseInt(i3.charAt(1), 16) / 15, parseInt(i3.charAt(2), 16) / 15, e2);
        if (6 === r2) return this.setHex(parseInt(i3, 16), e2);
        as("Color: Invalid hex color " + t2);
      } else if (t2 && t2.length > 0) return this.setColorName(t2, e2);
      return this;
    }
    setColorName(t2, e2 = ei) {
      const i2 = Ir[t2.toLowerCase()];
      return void 0 !== i2 ? this.setHex(i2, e2) : as("Color: Unknown color " + t2), this;
    }
    clone() {
      return new this.constructor(this.r, this.g, this.b);
    }
    copy(t2) {
      return this.r = t2.r, this.g = t2.g, this.b = t2.b, this;
    }
    copySRGBToLinear(t2) {
      return this.r = Ns(t2.r), this.g = Ns(t2.g), this.b = Ns(t2.b), this;
    }
    copyLinearToSRGB(t2) {
      return this.r = Vs(t2.r), this.g = Vs(t2.g), this.b = Vs(t2.b), this;
    }
    convertSRGBToLinear() {
      return this.copySRGBToLinear(this), this;
    }
    convertLinearToSRGB() {
      return this.copyLinearToSRGB(this), this;
    }
    getHex(t2 = ei) {
      return Rs.workingToColorSpace(Rr.copy(this), t2), 65536 * Math.round(xs(255 * Rr.r, 0, 255)) + 256 * Math.round(xs(255 * Rr.g, 0, 255)) + Math.round(xs(255 * Rr.b, 0, 255));
    }
    getHexString(t2 = ei) {
      return ("000000" + this.getHex(t2).toString(16)).slice(-6);
    }
    getHSL(t2, e2 = Rs.workingColorSpace) {
      Rs.workingToColorSpace(Rr.copy(this), e2);
      const i2 = Rr.r, s2 = Rr.g, r2 = Rr.b, n2 = Math.max(i2, s2, r2), a2 = Math.min(i2, s2, r2);
      let o2, h2;
      const l2 = (a2 + n2) / 2;
      if (a2 === n2) o2 = 0, h2 = 0;
      else {
        const t3 = n2 - a2;
        switch (h2 = l2 <= 0.5 ? t3 / (n2 + a2) : t3 / (2 - n2 - a2), n2) {
          case i2:
            o2 = (s2 - r2) / t3 + (s2 < r2 ? 6 : 0);
            break;
          case s2:
            o2 = (r2 - i2) / t3 + 2;
            break;
          case r2:
            o2 = (i2 - s2) / t3 + 4;
        }
        o2 /= 6;
      }
      return t2.h = o2, t2.s = h2, t2.l = l2, t2;
    }
    getRGB(t2, e2 = Rs.workingColorSpace) {
      return Rs.workingToColorSpace(Rr.copy(this), e2), t2.r = Rr.r, t2.g = Rr.g, t2.b = Rr.b, t2;
    }
    getStyle(t2 = ei) {
      Rs.workingToColorSpace(Rr.copy(this), t2);
      const e2 = Rr.r, i2 = Rr.g, s2 = Rr.b;
      return t2 !== ei ? `color(${t2} ${e2.toFixed(3)} ${i2.toFixed(3)} ${s2.toFixed(3)})` : `rgb(${Math.round(255 * e2)},${Math.round(255 * i2)},${Math.round(255 * s2)})`;
    }
    offsetHSL(t2, e2, i2) {
      return this.getHSL(Br), this.setHSL(Br.h + t2, Br.s + e2, Br.l + i2);
    }
    add(t2) {
      return this.r += t2.r, this.g += t2.g, this.b += t2.b, this;
    }
    addColors(t2, e2) {
      return this.r = t2.r + e2.r, this.g = t2.g + e2.g, this.b = t2.b + e2.b, this;
    }
    addScalar(t2) {
      return this.r += t2, this.g += t2, this.b += t2, this;
    }
    sub(t2) {
      return this.r = Math.max(0, this.r - t2.r), this.g = Math.max(0, this.g - t2.g), this.b = Math.max(0, this.b - t2.b), this;
    }
    multiply(t2) {
      return this.r *= t2.r, this.g *= t2.g, this.b *= t2.b, this;
    }
    multiplyScalar(t2) {
      return this.r *= t2, this.g *= t2, this.b *= t2, this;
    }
    lerp(t2, e2) {
      return this.r += (t2.r - this.r) * e2, this.g += (t2.g - this.g) * e2, this.b += (t2.b - this.b) * e2, this;
    }
    lerpColors(t2, e2, i2) {
      return this.r = t2.r + (e2.r - t2.r) * i2, this.g = t2.g + (e2.g - t2.g) * i2, this.b = t2.b + (e2.b - t2.b) * i2, this;
    }
    lerpHSL(t2, e2) {
      this.getHSL(Br), t2.getHSL(kr);
      const i2 = vs(Br.h, kr.h, e2), s2 = vs(Br.s, kr.s, e2), r2 = vs(Br.l, kr.l, e2);
      return this.setHSL(i2, s2, r2), this;
    }
    setFromVector3(t2) {
      return this.r = t2.x, this.g = t2.y, this.b = t2.z, this;
    }
    applyMatrix3(t2) {
      const e2 = this.r, i2 = this.g, s2 = this.b, r2 = t2.elements;
      return this.r = r2[0] * e2 + r2[3] * i2 + r2[6] * s2, this.g = r2[1] * e2 + r2[4] * i2 + r2[7] * s2, this.b = r2[2] * e2 + r2[5] * i2 + r2[8] * s2, this;
    }
    equals(t2) {
      return t2.r === this.r && t2.g === this.g && t2.b === this.b;
    }
    fromArray(t2, e2 = 0) {
      return this.r = t2[e2], this.g = t2[e2 + 1], this.b = t2[e2 + 2], this;
    }
    toArray(t2 = [], e2 = 0) {
      return t2[e2] = this.r, t2[e2 + 1] = this.g, t2[e2 + 2] = this.b, t2;
    }
    fromBufferAttribute(t2, e2) {
      return this.r = t2.getX(e2), this.g = t2.getY(e2), this.b = t2.getZ(e2), this;
    }
    toJSON() {
      return this.getHex();
    }
    *[Symbol.iterator]() {
      yield this.r, yield this.g, yield this.b;
    }
  };
  var Rr = new Pr();
  Pr.NAMES = Ir;
  var Er = class extends Ar {
    constructor() {
      super(), this.isScene = true, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new hr(), this.environmentIntensity = 1, this.environmentRotation = new hr(), this.overrideMaterial = null, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
    }
    copy(t2, e2) {
      return super.copy(t2, e2), null !== t2.background && (this.background = t2.background.clone()), null !== t2.environment && (this.environment = t2.environment.clone()), null !== t2.fog && (this.fog = t2.fog.clone()), this.backgroundBlurriness = t2.backgroundBlurriness, this.backgroundIntensity = t2.backgroundIntensity, this.backgroundRotation.copy(t2.backgroundRotation), this.environmentIntensity = t2.environmentIntensity, this.environmentRotation.copy(t2.environmentRotation), null !== t2.overrideMaterial && (this.overrideMaterial = t2.overrideMaterial.clone()), this.matrixAutoUpdate = t2.matrixAutoUpdate, this;
    }
    toJSON(t2) {
      const e2 = super.toJSON(t2);
      return null !== this.fog && (e2.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (e2.object.backgroundBlurriness = this.backgroundBlurriness), 1 !== this.backgroundIntensity && (e2.object.backgroundIntensity = this.backgroundIntensity), e2.object.backgroundRotation = this.backgroundRotation.toArray(), 1 !== this.environmentIntensity && (e2.object.environmentIntensity = this.environmentIntensity), e2.object.environmentRotation = this.environmentRotation.toArray(), e2;
    }
  };
  var Lr = new Ts();
  var Fr = new Ts();
  var jr = new Ts();
  var Dr = new Ts();
  var Ur = new Ts();
  var Wr = new Ts();
  var qr = new Ts();
  var Jr = new Ts();
  var Xr = new Ts();
  var Yr = new Ts();
  var Hr = new Js();
  var Zr = new Js();
  var Gr = new Js();
  var $r = class _$r {
    constructor(t2 = new Ts(), e2 = new Ts(), i2 = new Ts()) {
      this.a = t2, this.b = e2, this.c = i2;
    }
    static getNormal(t2, e2, i2, s2) {
      s2.subVectors(i2, e2), Lr.subVectors(t2, e2), s2.cross(Lr);
      const r2 = s2.lengthSq();
      return r2 > 0 ? s2.multiplyScalar(1 / Math.sqrt(r2)) : s2.set(0, 0, 0);
    }
    static getBarycoord(t2, e2, i2, s2, r2) {
      Lr.subVectors(s2, e2), Fr.subVectors(i2, e2), jr.subVectors(t2, e2);
      const n2 = Lr.dot(Lr), a2 = Lr.dot(Fr), o2 = Lr.dot(jr), h2 = Fr.dot(Fr), l2 = Fr.dot(jr), c2 = n2 * h2 - a2 * a2;
      if (0 === c2) return r2.set(0, 0, 0), null;
      const u2 = 1 / c2, d2 = (h2 * o2 - a2 * l2) * u2, p2 = (n2 * l2 - a2 * o2) * u2;
      return r2.set(1 - d2 - p2, p2, d2);
    }
    static containsPoint(t2, e2, i2, s2) {
      return null !== this.getBarycoord(t2, e2, i2, s2, Dr) && (Dr.x >= 0 && Dr.y >= 0 && Dr.x + Dr.y <= 1);
    }
    static getInterpolation(t2, e2, i2, s2, r2, n2, a2, o2) {
      return null === this.getBarycoord(t2, e2, i2, s2, Dr) ? (o2.x = 0, o2.y = 0, "z" in o2 && (o2.z = 0), "w" in o2 && (o2.w = 0), null) : (o2.setScalar(0), o2.addScaledVector(r2, Dr.x), o2.addScaledVector(n2, Dr.y), o2.addScaledVector(a2, Dr.z), o2);
    }
    static getInterpolatedAttribute(t2, e2, i2, s2, r2, n2) {
      return Hr.setScalar(0), Zr.setScalar(0), Gr.setScalar(0), Hr.fromBufferAttribute(t2, e2), Zr.fromBufferAttribute(t2, i2), Gr.fromBufferAttribute(t2, s2), n2.setScalar(0), n2.addScaledVector(Hr, r2.x), n2.addScaledVector(Zr, r2.y), n2.addScaledVector(Gr, r2.z), n2;
    }
    static isFrontFacing(t2, e2, i2, s2) {
      return Lr.subVectors(i2, e2), Fr.subVectors(t2, e2), Lr.cross(Fr).dot(s2) < 0;
    }
    set(t2, e2, i2) {
      return this.a.copy(t2), this.b.copy(e2), this.c.copy(i2), this;
    }
    setFromPointsAndIndices(t2, e2, i2, s2) {
      return this.a.copy(t2[e2]), this.b.copy(t2[i2]), this.c.copy(t2[s2]), this;
    }
    setFromAttributeAndIndices(t2, e2, i2, s2) {
      return this.a.fromBufferAttribute(t2, e2), this.b.fromBufferAttribute(t2, i2), this.c.fromBufferAttribute(t2, s2), this;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t2) {
      return this.a.copy(t2.a), this.b.copy(t2.b), this.c.copy(t2.c), this;
    }
    getArea() {
      return Lr.subVectors(this.c, this.b), Fr.subVectors(this.a, this.b), 0.5 * Lr.cross(Fr).length();
    }
    getMidpoint(t2) {
      return t2.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
    }
    getNormal(t2) {
      return _$r.getNormal(this.a, this.b, this.c, t2);
    }
    getPlane(t2) {
      return t2.setFromCoplanarPoints(this.a, this.b, this.c);
    }
    getBarycoord(t2, e2) {
      return _$r.getBarycoord(t2, this.a, this.b, this.c, e2);
    }
    getInterpolation(t2, e2, i2, s2, r2) {
      return _$r.getInterpolation(t2, this.a, this.b, this.c, e2, i2, s2, r2);
    }
    containsPoint(t2) {
      return _$r.containsPoint(t2, this.a, this.b, this.c);
    }
    isFrontFacing(t2) {
      return _$r.isFrontFacing(this.a, this.b, this.c, t2);
    }
    intersectsBox(t2) {
      return t2.intersectsTriangle(this);
    }
    closestPointToPoint(t2, e2) {
      const i2 = this.a, s2 = this.b, r2 = this.c;
      let n2, a2;
      Ur.subVectors(s2, i2), Wr.subVectors(r2, i2), Jr.subVectors(t2, i2);
      const o2 = Ur.dot(Jr), h2 = Wr.dot(Jr);
      if (o2 <= 0 && h2 <= 0) return e2.copy(i2);
      Xr.subVectors(t2, s2);
      const l2 = Ur.dot(Xr), c2 = Wr.dot(Xr);
      if (l2 >= 0 && c2 <= l2) return e2.copy(s2);
      const u2 = o2 * c2 - l2 * h2;
      if (u2 <= 0 && o2 >= 0 && l2 <= 0) return n2 = o2 / (o2 - l2), e2.copy(i2).addScaledVector(Ur, n2);
      Yr.subVectors(t2, r2);
      const d2 = Ur.dot(Yr), p2 = Wr.dot(Yr);
      if (p2 >= 0 && d2 <= p2) return e2.copy(r2);
      const m2 = d2 * h2 - o2 * p2;
      if (m2 <= 0 && h2 >= 0 && p2 <= 0) return a2 = h2 / (h2 - p2), e2.copy(i2).addScaledVector(Wr, a2);
      const y2 = l2 * p2 - d2 * c2;
      if (y2 <= 0 && c2 - l2 >= 0 && d2 - p2 >= 0) return qr.subVectors(r2, s2), a2 = (c2 - l2) / (c2 - l2 + (d2 - p2)), e2.copy(s2).addScaledVector(qr, a2);
      const g2 = 1 / (y2 + m2 + u2);
      return n2 = m2 * g2, a2 = u2 * g2, e2.copy(i2).addScaledVector(Ur, n2).addScaledVector(Wr, a2);
    }
    equals(t2) {
      return t2.a.equals(this.a) && t2.b.equals(this.b) && t2.c.equals(this.c);
    }
  };
  var Qr = class {
    constructor(t2 = new Ts(1 / 0, 1 / 0, 1 / 0), e2 = new Ts(-1 / 0, -1 / 0, -1 / 0)) {
      this.isBox3 = true, this.min = t2, this.max = e2;
    }
    set(t2, e2) {
      return this.min.copy(t2), this.max.copy(e2), this;
    }
    setFromArray(t2) {
      this.makeEmpty();
      for (let e2 = 0, i2 = t2.length; e2 < i2; e2 += 3) this.expandByPoint(tn.fromArray(t2, e2));
      return this;
    }
    setFromBufferAttribute(t2) {
      this.makeEmpty();
      for (let e2 = 0, i2 = t2.count; e2 < i2; e2++) this.expandByPoint(tn.fromBufferAttribute(t2, e2));
      return this;
    }
    setFromPoints(t2) {
      this.makeEmpty();
      for (let e2 = 0, i2 = t2.length; e2 < i2; e2++) this.expandByPoint(t2[e2]);
      return this;
    }
    setFromCenterAndSize(t2, e2) {
      const i2 = tn.copy(e2).multiplyScalar(0.5);
      return this.min.copy(t2).sub(i2), this.max.copy(t2).add(i2), this;
    }
    setFromObject(t2, e2 = false) {
      return this.makeEmpty(), this.expandByObject(t2, e2);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t2) {
      return this.min.copy(t2.min), this.max.copy(t2.max), this;
    }
    makeEmpty() {
      return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
    }
    isEmpty() {
      return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
    }
    getCenter(t2) {
      return this.isEmpty() ? t2.set(0, 0, 0) : t2.addVectors(this.min, this.max).multiplyScalar(0.5);
    }
    getSize(t2) {
      return this.isEmpty() ? t2.set(0, 0, 0) : t2.subVectors(this.max, this.min);
    }
    expandByPoint(t2) {
      return this.min.min(t2), this.max.max(t2), this;
    }
    expandByVector(t2) {
      return this.min.sub(t2), this.max.add(t2), this;
    }
    expandByScalar(t2) {
      return this.min.addScalar(-t2), this.max.addScalar(t2), this;
    }
    expandByObject(t2, e2 = false) {
      t2.updateWorldMatrix(false, false);
      const i2 = t2.geometry;
      if (void 0 !== i2) {
        const s3 = i2.getAttribute("position");
        if (true === e2 && void 0 !== s3 && true !== t2.isInstancedMesh) for (let e3 = 0, i3 = s3.count; e3 < i3; e3++) true === t2.isMesh ? t2.getVertexPosition(e3, tn) : tn.fromBufferAttribute(s3, e3), tn.applyMatrix4(t2.matrixWorld), this.expandByPoint(tn);
        else void 0 !== t2.boundingBox ? (null === t2.boundingBox && t2.computeBoundingBox(), en.copy(t2.boundingBox)) : (null === i2.boundingBox && i2.computeBoundingBox(), en.copy(i2.boundingBox)), en.applyMatrix4(t2.matrixWorld), this.union(en);
      }
      const s2 = t2.children;
      for (let t3 = 0, i3 = s2.length; t3 < i3; t3++) this.expandByObject(s2[t3], e2);
      return this;
    }
    containsPoint(t2) {
      return t2.x >= this.min.x && t2.x <= this.max.x && t2.y >= this.min.y && t2.y <= this.max.y && t2.z >= this.min.z && t2.z <= this.max.z;
    }
    containsBox(t2) {
      return this.min.x <= t2.min.x && t2.max.x <= this.max.x && this.min.y <= t2.min.y && t2.max.y <= this.max.y && this.min.z <= t2.min.z && t2.max.z <= this.max.z;
    }
    getParameter(t2, e2) {
      return e2.set((t2.x - this.min.x) / (this.max.x - this.min.x), (t2.y - this.min.y) / (this.max.y - this.min.y), (t2.z - this.min.z) / (this.max.z - this.min.z));
    }
    intersectsBox(t2) {
      return t2.max.x >= this.min.x && t2.min.x <= this.max.x && t2.max.y >= this.min.y && t2.min.y <= this.max.y && t2.max.z >= this.min.z && t2.min.z <= this.max.z;
    }
    intersectsSphere(t2) {
      return this.clampPoint(t2.center, tn), tn.distanceToSquared(t2.center) <= t2.radius * t2.radius;
    }
    intersectsPlane(t2) {
      let e2, i2;
      return t2.normal.x > 0 ? (e2 = t2.normal.x * this.min.x, i2 = t2.normal.x * this.max.x) : (e2 = t2.normal.x * this.max.x, i2 = t2.normal.x * this.min.x), t2.normal.y > 0 ? (e2 += t2.normal.y * this.min.y, i2 += t2.normal.y * this.max.y) : (e2 += t2.normal.y * this.max.y, i2 += t2.normal.y * this.min.y), t2.normal.z > 0 ? (e2 += t2.normal.z * this.min.z, i2 += t2.normal.z * this.max.z) : (e2 += t2.normal.z * this.max.z, i2 += t2.normal.z * this.min.z), e2 <= -t2.constant && i2 >= -t2.constant;
    }
    intersectsTriangle(t2) {
      if (this.isEmpty()) return false;
      this.getCenter(ln), cn.subVectors(this.max, ln), sn.subVectors(t2.a, ln), rn.subVectors(t2.b, ln), nn.subVectors(t2.c, ln), an.subVectors(rn, sn), on.subVectors(nn, rn), hn.subVectors(sn, nn);
      let e2 = [0, -an.z, an.y, 0, -on.z, on.y, 0, -hn.z, hn.y, an.z, 0, -an.x, on.z, 0, -on.x, hn.z, 0, -hn.x, -an.y, an.x, 0, -on.y, on.x, 0, -hn.y, hn.x, 0];
      return !!pn(e2, sn, rn, nn, cn) && (e2 = [1, 0, 0, 0, 1, 0, 0, 0, 1], !!pn(e2, sn, rn, nn, cn) && (un.crossVectors(an, on), e2 = [un.x, un.y, un.z], pn(e2, sn, rn, nn, cn)));
    }
    clampPoint(t2, e2) {
      return e2.copy(t2).clamp(this.min, this.max);
    }
    distanceToPoint(t2) {
      return this.clampPoint(t2, tn).distanceTo(t2);
    }
    getBoundingSphere(t2) {
      return this.isEmpty() ? t2.makeEmpty() : (this.getCenter(t2.center), t2.radius = 0.5 * this.getSize(tn).length()), t2;
    }
    intersect(t2) {
      return this.min.max(t2.min), this.max.min(t2.max), this.isEmpty() && this.makeEmpty(), this;
    }
    union(t2) {
      return this.min.min(t2.min), this.max.max(t2.max), this;
    }
    applyMatrix4(t2) {
      return this.isEmpty() || (Kr[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t2), Kr[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t2), Kr[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t2), Kr[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t2), Kr[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t2), Kr[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t2), Kr[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t2), Kr[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t2), this.setFromPoints(Kr)), this;
    }
    translate(t2) {
      return this.min.add(t2), this.max.add(t2), this;
    }
    equals(t2) {
      return t2.min.equals(this.min) && t2.max.equals(this.max);
    }
    toJSON() {
      return { min: this.min.toArray(), max: this.max.toArray() };
    }
    fromJSON(t2) {
      return this.min.fromArray(t2.min), this.max.fromArray(t2.max), this;
    }
  };
  var Kr = [new Ts(), new Ts(), new Ts(), new Ts(), new Ts(), new Ts(), new Ts(), new Ts()];
  var tn = new Ts();
  var en = new Qr();
  var sn = new Ts();
  var rn = new Ts();
  var nn = new Ts();
  var an = new Ts();
  var on = new Ts();
  var hn = new Ts();
  var ln = new Ts();
  var cn = new Ts();
  var un = new Ts();
  var dn = new Ts();
  function pn(t2, e2, i2, s2, r2) {
    for (let n2 = 0, a2 = t2.length - 3; n2 <= a2; n2 += 3) {
      dn.fromArray(t2, n2);
      const a3 = r2.x * Math.abs(dn.x) + r2.y * Math.abs(dn.y) + r2.z * Math.abs(dn.z), o2 = e2.dot(dn), h2 = i2.dot(dn), l2 = s2.dot(dn);
      if (Math.max(-Math.max(o2, h2, l2), Math.min(o2, h2, l2)) > a3) return false;
    }
    return true;
  }
  var mn = yn();
  function yn() {
    const t2 = new ArrayBuffer(4), e2 = new Float32Array(t2), i2 = new Uint32Array(t2), s2 = new Uint32Array(512), r2 = new Uint32Array(512);
    for (let t3 = 0; t3 < 256; ++t3) {
      const e3 = t3 - 127;
      e3 < -27 ? (s2[t3] = 0, s2[256 | t3] = 32768, r2[t3] = 24, r2[256 | t3] = 24) : e3 < -14 ? (s2[t3] = 1024 >> -e3 - 14, s2[256 | t3] = 1024 >> -e3 - 14 | 32768, r2[t3] = -e3 - 1, r2[256 | t3] = -e3 - 1) : e3 <= 15 ? (s2[t3] = e3 + 15 << 10, s2[256 | t3] = e3 + 15 << 10 | 32768, r2[t3] = 13, r2[256 | t3] = 13) : e3 < 128 ? (s2[t3] = 31744, s2[256 | t3] = 64512, r2[t3] = 24, r2[256 | t3] = 24) : (s2[t3] = 31744, s2[256 | t3] = 64512, r2[t3] = 13, r2[256 | t3] = 13);
    }
    const n2 = new Uint32Array(2048), a2 = new Uint32Array(64), o2 = new Uint32Array(64);
    for (let t3 = 1; t3 < 1024; ++t3) {
      let e3 = t3 << 13, i3 = 0;
      for (; !(8388608 & e3); ) e3 <<= 1, i3 -= 8388608;
      e3 &= -8388609, i3 += 947912704, n2[t3] = e3 | i3;
    }
    for (let t3 = 1024; t3 < 2048; ++t3) n2[t3] = 939524096 + (t3 - 1024 << 13);
    for (let t3 = 1; t3 < 31; ++t3) a2[t3] = t3 << 23;
    a2[31] = 1199570944, a2[32] = 2147483648;
    for (let t3 = 33; t3 < 63; ++t3) a2[t3] = 2147483648 + (t3 - 32 << 23);
    a2[63] = 3347054592;
    for (let t3 = 1; t3 < 64; ++t3) 32 !== t3 && (o2[t3] = 1024);
    return { floatView: e2, uint32View: i2, baseTable: s2, shiftTable: r2, mantissaTable: n2, exponentTable: a2, offsetTable: o2 };
  }
  var bn = new Ts();
  var vn = new _s();
  var wn = 0;
  var Mn = class extends ds {
    constructor(t2, e2, i2 = false) {
      if (super(), Array.isArray(t2)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
      this.isBufferAttribute = true, Object.defineProperty(this, "id", { value: wn++ }), this.name = "", this.array = t2, this.itemSize = e2, this.count = void 0 !== t2 ? t2.length / e2 : 0, this.normalized = i2, this.usage = Oi, this.updateRanges = [], this.gpuType = Pt, this.version = 0;
    }
    onUploadCallback() {
    }
    set needsUpdate(t2) {
      true === t2 && this.version++;
    }
    setUsage(t2) {
      return this.usage = t2, this;
    }
    addUpdateRange(t2, e2) {
      this.updateRanges.push({ start: t2, count: e2 });
    }
    clearUpdateRanges() {
      this.updateRanges.length = 0;
    }
    copy(t2) {
      return this.name = t2.name, this.array = new t2.array.constructor(t2.array), this.itemSize = t2.itemSize, this.count = t2.count, this.normalized = t2.normalized, this.usage = t2.usage, this.gpuType = t2.gpuType, this;
    }
    copyAt(t2, e2, i2) {
      t2 *= this.itemSize, i2 *= e2.itemSize;
      for (let s2 = 0, r2 = this.itemSize; s2 < r2; s2++) this.array[t2 + s2] = e2.array[i2 + s2];
      return this;
    }
    copyArray(t2) {
      return this.array.set(t2), this;
    }
    applyMatrix3(t2) {
      if (2 === this.itemSize) for (let e2 = 0, i2 = this.count; e2 < i2; e2++) vn.fromBufferAttribute(this, e2), vn.applyMatrix3(t2), this.setXY(e2, vn.x, vn.y);
      else if (3 === this.itemSize) for (let e2 = 0, i2 = this.count; e2 < i2; e2++) bn.fromBufferAttribute(this, e2), bn.applyMatrix3(t2), this.setXYZ(e2, bn.x, bn.y, bn.z);
      return this;
    }
    applyMatrix4(t2) {
      for (let e2 = 0, i2 = this.count; e2 < i2; e2++) bn.fromBufferAttribute(this, e2), bn.applyMatrix4(t2), this.setXYZ(e2, bn.x, bn.y, bn.z);
      return this;
    }
    applyNormalMatrix(t2) {
      for (let e2 = 0, i2 = this.count; e2 < i2; e2++) bn.fromBufferAttribute(this, e2), bn.applyNormalMatrix(t2), this.setXYZ(e2, bn.x, bn.y, bn.z);
      return this;
    }
    transformDirection(t2) {
      for (let e2 = 0, i2 = this.count; e2 < i2; e2++) bn.fromBufferAttribute(this, e2), bn.transformDirection(t2), this.setXYZ(e2, bn.x, bn.y, bn.z);
      return this;
    }
    set(t2, e2 = 0) {
      return this.array.set(t2, e2), this;
    }
    getComponent(t2, e2) {
      let i2 = this.array[t2 * this.itemSize + e2];
      return this.normalized && (i2 = ws(i2, this.array)), i2;
    }
    setComponent(t2, e2, i2) {
      return this.normalized && (i2 = Ms(i2, this.array)), this.array[t2 * this.itemSize + e2] = i2, this;
    }
    getX(t2) {
      let e2 = this.array[t2 * this.itemSize];
      return this.normalized && (e2 = ws(e2, this.array)), e2;
    }
    setX(t2, e2) {
      return this.normalized && (e2 = Ms(e2, this.array)), this.array[t2 * this.itemSize] = e2, this;
    }
    getY(t2) {
      let e2 = this.array[t2 * this.itemSize + 1];
      return this.normalized && (e2 = ws(e2, this.array)), e2;
    }
    setY(t2, e2) {
      return this.normalized && (e2 = Ms(e2, this.array)), this.array[t2 * this.itemSize + 1] = e2, this;
    }
    getZ(t2) {
      let e2 = this.array[t2 * this.itemSize + 2];
      return this.normalized && (e2 = ws(e2, this.array)), e2;
    }
    setZ(t2, e2) {
      return this.normalized && (e2 = Ms(e2, this.array)), this.array[t2 * this.itemSize + 2] = e2, this;
    }
    getW(t2) {
      let e2 = this.array[t2 * this.itemSize + 3];
      return this.normalized && (e2 = ws(e2, this.array)), e2;
    }
    setW(t2, e2) {
      return this.normalized && (e2 = Ms(e2, this.array)), this.array[t2 * this.itemSize + 3] = e2, this;
    }
    setXY(t2, e2, i2) {
      return t2 *= this.itemSize, this.normalized && (e2 = Ms(e2, this.array), i2 = Ms(i2, this.array)), this.array[t2 + 0] = e2, this.array[t2 + 1] = i2, this;
    }
    setXYZ(t2, e2, i2, s2) {
      return t2 *= this.itemSize, this.normalized && (e2 = Ms(e2, this.array), i2 = Ms(i2, this.array), s2 = Ms(s2, this.array)), this.array[t2 + 0] = e2, this.array[t2 + 1] = i2, this.array[t2 + 2] = s2, this;
    }
    setXYZW(t2, e2, i2, s2, r2) {
      return t2 *= this.itemSize, this.normalized && (e2 = Ms(e2, this.array), i2 = Ms(i2, this.array), s2 = Ms(s2, this.array), r2 = Ms(r2, this.array)), this.array[t2 + 0] = e2, this.array[t2 + 1] = i2, this.array[t2 + 2] = s2, this.array[t2 + 3] = r2, this;
    }
    onUpload(t2) {
      return this.onUploadCallback = t2, this;
    }
    clone() {
      return new this.constructor(this.array, this.itemSize).copy(this);
    }
    toJSON() {
      const t2 = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized };
      return "" !== this.name && (t2.name = this.name), this.usage !== Oi && (t2.usage = this.usage), t2;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
  };
  var zn = class extends Mn {
    constructor(t2, e2, i2) {
      super(new Uint16Array(t2), e2, i2);
    }
  };
  var In = class extends Mn {
    constructor(t2, e2, i2) {
      super(new Uint32Array(t2), e2, i2);
    }
  };
  var kn = class extends Mn {
    constructor(t2, e2, i2) {
      super(new Float32Array(t2), e2, i2);
    }
  };
  var On = new Qr();
  var Pn = new Ts();
  var Rn = new Ts();
  var Nn = class {
    constructor(t2 = new Ts(), e2 = -1) {
      this.isSphere = true, this.center = t2, this.radius = e2;
    }
    set(t2, e2) {
      return this.center.copy(t2), this.radius = e2, this;
    }
    setFromPoints(t2, e2) {
      const i2 = this.center;
      void 0 !== e2 ? i2.copy(e2) : On.setFromPoints(t2).getCenter(i2);
      let s2 = 0;
      for (let e3 = 0, r2 = t2.length; e3 < r2; e3++) s2 = Math.max(s2, i2.distanceToSquared(t2[e3]));
      return this.radius = Math.sqrt(s2), this;
    }
    copy(t2) {
      return this.center.copy(t2.center), this.radius = t2.radius, this;
    }
    isEmpty() {
      return this.radius < 0;
    }
    makeEmpty() {
      return this.center.set(0, 0, 0), this.radius = -1, this;
    }
    containsPoint(t2) {
      return t2.distanceToSquared(this.center) <= this.radius * this.radius;
    }
    distanceToPoint(t2) {
      return t2.distanceTo(this.center) - this.radius;
    }
    intersectsSphere(t2) {
      const e2 = this.radius + t2.radius;
      return t2.center.distanceToSquared(this.center) <= e2 * e2;
    }
    intersectsBox(t2) {
      return t2.intersectsSphere(this);
    }
    intersectsPlane(t2) {
      return Math.abs(t2.distanceToPoint(this.center)) <= this.radius;
    }
    clampPoint(t2, e2) {
      const i2 = this.center.distanceToSquared(t2);
      return e2.copy(t2), i2 > this.radius * this.radius && (e2.sub(this.center).normalize(), e2.multiplyScalar(this.radius).add(this.center)), e2;
    }
    getBoundingBox(t2) {
      return this.isEmpty() ? (t2.makeEmpty(), t2) : (t2.set(this.center, this.center), t2.expandByScalar(this.radius), t2);
    }
    applyMatrix4(t2) {
      return this.center.applyMatrix4(t2), this.radius = this.radius * t2.getMaxScaleOnAxis(), this;
    }
    translate(t2) {
      return this.center.add(t2), this;
    }
    expandByPoint(t2) {
      if (this.isEmpty()) return this.center.copy(t2), this.radius = 0, this;
      Pn.subVectors(t2, this.center);
      const e2 = Pn.lengthSq();
      if (e2 > this.radius * this.radius) {
        const t3 = Math.sqrt(e2), i2 = 0.5 * (t3 - this.radius);
        this.center.addScaledVector(Pn, i2 / t3), this.radius += i2;
      }
      return this;
    }
    union(t2) {
      return t2.isEmpty() ? this : this.isEmpty() ? (this.copy(t2), this) : (true === this.center.equals(t2.center) ? this.radius = Math.max(this.radius, t2.radius) : (Rn.subVectors(t2.center, this.center).setLength(t2.radius), this.expandByPoint(Pn.copy(t2.center).add(Rn)), this.expandByPoint(Pn.copy(t2.center).sub(Rn))), this);
    }
    equals(t2) {
      return t2.center.equals(this.center) && t2.radius === this.radius;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    toJSON() {
      return { radius: this.radius, center: this.center.toArray() };
    }
    fromJSON(t2) {
      return this.radius = t2.radius, this.center.fromArray(t2.center), this;
    }
  };
  var Vn = 0;
  var En = new Qs();
  var Ln = new Ar();
  var Fn = new Ts();
  var jn = new Qr();
  var Dn = new Qr();
  var Un = new Ts();
  var Wn = class _Wn extends ds {
    constructor() {
      super(), this.isBufferGeometry = true, Object.defineProperty(this, "id", { value: Vn++ }), this.uuid = fs(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.indirectOffset = 0, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = false, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
    }
    getIndex() {
      return this.index;
    }
    setIndex(t2) {
      return Array.isArray(t2) ? this.index = new (function(t3) {
        for (let e2 = t3.length - 1; e2 >= 0; --e2) if (t3[e2] >= 65535) return true;
        return false;
      }(t2) ? In : zn)(t2, 1) : this.index = t2, this;
    }
    setIndirect(t2, e2 = 0) {
      return this.indirect = t2, this.indirectOffset = e2, this;
    }
    getIndirect() {
      return this.indirect;
    }
    getAttribute(t2) {
      return this.attributes[t2];
    }
    setAttribute(t2, e2) {
      return this.attributes[t2] = e2, this;
    }
    deleteAttribute(t2) {
      return delete this.attributes[t2], this;
    }
    hasAttribute(t2) {
      return void 0 !== this.attributes[t2];
    }
    addGroup(t2, e2, i2 = 0) {
      this.groups.push({ start: t2, count: e2, materialIndex: i2 });
    }
    clearGroups() {
      this.groups = [];
    }
    setDrawRange(t2, e2) {
      this.drawRange.start = t2, this.drawRange.count = e2;
    }
    applyMatrix4(t2) {
      const e2 = this.attributes.position;
      void 0 !== e2 && (e2.applyMatrix4(t2), e2.needsUpdate = true);
      const i2 = this.attributes.normal;
      if (void 0 !== i2) {
        const e3 = new Is().getNormalMatrix(t2);
        i2.applyNormalMatrix(e3), i2.needsUpdate = true;
      }
      const s2 = this.attributes.tangent;
      return void 0 !== s2 && (s2.transformDirection(t2), s2.needsUpdate = true), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this;
    }
    applyQuaternion(t2) {
      return En.makeRotationFromQuaternion(t2), this.applyMatrix4(En), this;
    }
    rotateX(t2) {
      return En.makeRotationX(t2), this.applyMatrix4(En), this;
    }
    rotateY(t2) {
      return En.makeRotationY(t2), this.applyMatrix4(En), this;
    }
    rotateZ(t2) {
      return En.makeRotationZ(t2), this.applyMatrix4(En), this;
    }
    translate(t2, e2, i2) {
      return En.makeTranslation(t2, e2, i2), this.applyMatrix4(En), this;
    }
    scale(t2, e2, i2) {
      return En.makeScale(t2, e2, i2), this.applyMatrix4(En), this;
    }
    lookAt(t2) {
      return Ln.lookAt(t2), Ln.updateMatrix(), this.applyMatrix4(Ln.matrix), this;
    }
    center() {
      return this.computeBoundingBox(), this.boundingBox.getCenter(Fn).negate(), this.translate(Fn.x, Fn.y, Fn.z), this;
    }
    setFromPoints(t2) {
      const e2 = this.getAttribute("position");
      if (void 0 === e2) {
        const e3 = [];
        for (let i2 = 0, s2 = t2.length; i2 < s2; i2++) {
          const s3 = t2[i2];
          e3.push(s3.x, s3.y, s3.z || 0);
        }
        this.setAttribute("position", new kn(e3, 3));
      } else {
        const i2 = Math.min(t2.length, e2.count);
        for (let s2 = 0; s2 < i2; s2++) {
          const i3 = t2[s2];
          e2.setXYZ(s2, i3.x, i3.y, i3.z || 0);
        }
        t2.length > e2.count && as("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), e2.needsUpdate = true;
      }
      return this;
    }
    computeBoundingBox() {
      null === this.boundingBox && (this.boundingBox = new Qr());
      const t2 = this.attributes.position, e2 = this.morphAttributes.position;
      if (t2 && t2.isGLBufferAttribute) return os("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), void this.boundingBox.set(new Ts(-1 / 0, -1 / 0, -1 / 0), new Ts(1 / 0, 1 / 0, 1 / 0));
      if (void 0 !== t2) {
        if (this.boundingBox.setFromBufferAttribute(t2), e2) for (let t3 = 0, i2 = e2.length; t3 < i2; t3++) {
          const i3 = e2[t3];
          jn.setFromBufferAttribute(i3), this.morphTargetsRelative ? (Un.addVectors(this.boundingBox.min, jn.min), this.boundingBox.expandByPoint(Un), Un.addVectors(this.boundingBox.max, jn.max), this.boundingBox.expandByPoint(Un)) : (this.boundingBox.expandByPoint(jn.min), this.boundingBox.expandByPoint(jn.max));
        }
      } else this.boundingBox.makeEmpty();
      (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && os('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
    }
    computeBoundingSphere() {
      null === this.boundingSphere && (this.boundingSphere = new Nn());
      const t2 = this.attributes.position, e2 = this.morphAttributes.position;
      if (t2 && t2.isGLBufferAttribute) return os("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), void this.boundingSphere.set(new Ts(), 1 / 0);
      if (t2) {
        const i2 = this.boundingSphere.center;
        if (jn.setFromBufferAttribute(t2), e2) for (let t3 = 0, i3 = e2.length; t3 < i3; t3++) {
          const i4 = e2[t3];
          Dn.setFromBufferAttribute(i4), this.morphTargetsRelative ? (Un.addVectors(jn.min, Dn.min), jn.expandByPoint(Un), Un.addVectors(jn.max, Dn.max), jn.expandByPoint(Un)) : (jn.expandByPoint(Dn.min), jn.expandByPoint(Dn.max));
        }
        jn.getCenter(i2);
        let s2 = 0;
        for (let e3 = 0, r2 = t2.count; e3 < r2; e3++) Un.fromBufferAttribute(t2, e3), s2 = Math.max(s2, i2.distanceToSquared(Un));
        if (e2) for (let r2 = 0, n2 = e2.length; r2 < n2; r2++) {
          const n3 = e2[r2], a2 = this.morphTargetsRelative;
          for (let e3 = 0, r3 = n3.count; e3 < r3; e3++) Un.fromBufferAttribute(n3, e3), a2 && (Fn.fromBufferAttribute(t2, e3), Un.add(Fn)), s2 = Math.max(s2, i2.distanceToSquared(Un));
        }
        this.boundingSphere.radius = Math.sqrt(s2), isNaN(this.boundingSphere.radius) && os('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
      }
    }
    computeTangents() {
      const t2 = this.index, e2 = this.attributes;
      if (null === t2 || void 0 === e2.position || void 0 === e2.normal || void 0 === e2.uv) return void os("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      const i2 = e2.position, s2 = e2.normal, r2 = e2.uv;
      false === this.hasAttribute("tangent") && this.setAttribute("tangent", new Mn(new Float32Array(4 * i2.count), 4));
      const n2 = this.getAttribute("tangent"), a2 = [], o2 = [];
      for (let t3 = 0; t3 < i2.count; t3++) a2[t3] = new Ts(), o2[t3] = new Ts();
      const h2 = new Ts(), l2 = new Ts(), c2 = new Ts(), u2 = new _s(), d2 = new _s(), p2 = new _s(), m2 = new Ts(), y2 = new Ts();
      function g2(t3, e3, s3) {
        h2.fromBufferAttribute(i2, t3), l2.fromBufferAttribute(i2, e3), c2.fromBufferAttribute(i2, s3), u2.fromBufferAttribute(r2, t3), d2.fromBufferAttribute(r2, e3), p2.fromBufferAttribute(r2, s3), l2.sub(h2), c2.sub(h2), d2.sub(u2), p2.sub(u2);
        const n3 = 1 / (d2.x * p2.y - p2.x * d2.y);
        isFinite(n3) && (m2.copy(l2).multiplyScalar(p2.y).addScaledVector(c2, -d2.y).multiplyScalar(n3), y2.copy(c2).multiplyScalar(d2.x).addScaledVector(l2, -p2.x).multiplyScalar(n3), a2[t3].add(m2), a2[e3].add(m2), a2[s3].add(m2), o2[t3].add(y2), o2[e3].add(y2), o2[s3].add(y2));
      }
      let f2 = this.groups;
      0 === f2.length && (f2 = [{ start: 0, count: t2.count }]);
      for (let e3 = 0, i3 = f2.length; e3 < i3; ++e3) {
        const i4 = f2[e3], s3 = i4.start;
        for (let e4 = s3, r3 = s3 + i4.count; e4 < r3; e4 += 3) g2(t2.getX(e4 + 0), t2.getX(e4 + 1), t2.getX(e4 + 2));
      }
      const x2 = new Ts(), b2 = new Ts(), v2 = new Ts(), w2 = new Ts();
      function M2(t3) {
        v2.fromBufferAttribute(s2, t3), w2.copy(v2);
        const e3 = a2[t3];
        x2.copy(e3), x2.sub(v2.multiplyScalar(v2.dot(e3))).normalize(), b2.crossVectors(w2, e3);
        const i3 = b2.dot(o2[t3]) < 0 ? -1 : 1;
        n2.setXYZW(t3, x2.x, x2.y, x2.z, i3);
      }
      for (let e3 = 0, i3 = f2.length; e3 < i3; ++e3) {
        const i4 = f2[e3], s3 = i4.start;
        for (let e4 = s3, r3 = s3 + i4.count; e4 < r3; e4 += 3) M2(t2.getX(e4 + 0)), M2(t2.getX(e4 + 1)), M2(t2.getX(e4 + 2));
      }
    }
    computeVertexNormals() {
      const t2 = this.index, e2 = this.getAttribute("position");
      if (void 0 !== e2) {
        let i2 = this.getAttribute("normal");
        if (void 0 === i2) i2 = new Mn(new Float32Array(3 * e2.count), 3), this.setAttribute("normal", i2);
        else for (let t3 = 0, e3 = i2.count; t3 < e3; t3++) i2.setXYZ(t3, 0, 0, 0);
        const s2 = new Ts(), r2 = new Ts(), n2 = new Ts(), a2 = new Ts(), o2 = new Ts(), h2 = new Ts(), l2 = new Ts(), c2 = new Ts();
        if (t2) for (let u2 = 0, d2 = t2.count; u2 < d2; u2 += 3) {
          const d3 = t2.getX(u2 + 0), p2 = t2.getX(u2 + 1), m2 = t2.getX(u2 + 2);
          s2.fromBufferAttribute(e2, d3), r2.fromBufferAttribute(e2, p2), n2.fromBufferAttribute(e2, m2), l2.subVectors(n2, r2), c2.subVectors(s2, r2), l2.cross(c2), a2.fromBufferAttribute(i2, d3), o2.fromBufferAttribute(i2, p2), h2.fromBufferAttribute(i2, m2), a2.add(l2), o2.add(l2), h2.add(l2), i2.setXYZ(d3, a2.x, a2.y, a2.z), i2.setXYZ(p2, o2.x, o2.y, o2.z), i2.setXYZ(m2, h2.x, h2.y, h2.z);
        }
        else for (let t3 = 0, a3 = e2.count; t3 < a3; t3 += 3) s2.fromBufferAttribute(e2, t3 + 0), r2.fromBufferAttribute(e2, t3 + 1), n2.fromBufferAttribute(e2, t3 + 2), l2.subVectors(n2, r2), c2.subVectors(s2, r2), l2.cross(c2), i2.setXYZ(t3 + 0, l2.x, l2.y, l2.z), i2.setXYZ(t3 + 1, l2.x, l2.y, l2.z), i2.setXYZ(t3 + 2, l2.x, l2.y, l2.z);
        this.normalizeNormals(), i2.needsUpdate = true;
      }
    }
    normalizeNormals() {
      const t2 = this.attributes.normal;
      for (let e2 = 0, i2 = t2.count; e2 < i2; e2++) Un.fromBufferAttribute(t2, e2), Un.normalize(), t2.setXYZ(e2, Un.x, Un.y, Un.z);
    }
    toNonIndexed() {
      function t2(t3, e3) {
        const i3 = t3.array, s3 = t3.itemSize, r3 = t3.normalized, n3 = new i3.constructor(e3.length * s3);
        let a2 = 0, o2 = 0;
        for (let r4 = 0, h2 = e3.length; r4 < h2; r4++) {
          a2 = t3.isInterleavedBufferAttribute ? e3[r4] * t3.data.stride + t3.offset : e3[r4] * s3;
          for (let t4 = 0; t4 < s3; t4++) n3[o2++] = i3[a2++];
        }
        return new Mn(n3, s3, r3);
      }
      if (null === this.index) return as("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
      const e2 = new _Wn(), i2 = this.index.array, s2 = this.attributes;
      for (const r3 in s2) {
        const n3 = t2(s2[r3], i2);
        e2.setAttribute(r3, n3);
      }
      const r2 = this.morphAttributes;
      for (const s3 in r2) {
        const n3 = [], a2 = r2[s3];
        for (let e3 = 0, s4 = a2.length; e3 < s4; e3++) {
          const s5 = t2(a2[e3], i2);
          n3.push(s5);
        }
        e2.morphAttributes[s3] = n3;
      }
      e2.morphTargetsRelative = this.morphTargetsRelative;
      const n2 = this.groups;
      for (let t3 = 0, i3 = n2.length; t3 < i3; t3++) {
        const i4 = n2[t3];
        e2.addGroup(i4.start, i4.count, i4.materialIndex);
      }
      return e2;
    }
    toJSON() {
      const t2 = { metadata: { version: 4.7, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } };
      if (t2.uuid = this.uuid, t2.type = this.type, "" !== this.name && (t2.name = this.name), Object.keys(this.userData).length > 0 && (t2.userData = this.userData), void 0 !== this.parameters) {
        const e3 = this.parameters;
        for (const i3 in e3) void 0 !== e3[i3] && (t2[i3] = e3[i3]);
        return t2;
      }
      t2.data = { attributes: {} };
      const e2 = this.index;
      null !== e2 && (t2.data.index = { type: e2.array.constructor.name, array: Array.prototype.slice.call(e2.array) });
      const i2 = this.attributes;
      for (const e3 in i2) {
        const s3 = i2[e3];
        t2.data.attributes[e3] = s3.toJSON(t2.data);
      }
      const s2 = {};
      let r2 = false;
      for (const e3 in this.morphAttributes) {
        const i3 = this.morphAttributes[e3], n3 = [];
        for (let e4 = 0, s3 = i3.length; e4 < s3; e4++) {
          const s4 = i3[e4];
          n3.push(s4.toJSON(t2.data));
        }
        n3.length > 0 && (s2[e3] = n3, r2 = true);
      }
      r2 && (t2.data.morphAttributes = s2, t2.data.morphTargetsRelative = this.morphTargetsRelative);
      const n2 = this.groups;
      n2.length > 0 && (t2.data.groups = JSON.parse(JSON.stringify(n2)));
      const a2 = this.boundingSphere;
      return null !== a2 && (t2.data.boundingSphere = a2.toJSON()), t2;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t2) {
      this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
      const e2 = {};
      this.name = t2.name;
      const i2 = t2.index;
      null !== i2 && this.setIndex(i2.clone());
      const s2 = t2.attributes;
      for (const t3 in s2) {
        const i3 = s2[t3];
        this.setAttribute(t3, i3.clone(e2));
      }
      const r2 = t2.morphAttributes;
      for (const t3 in r2) {
        const i3 = [], s3 = r2[t3];
        for (let t4 = 0, r3 = s3.length; t4 < r3; t4++) i3.push(s3[t4].clone(e2));
        this.morphAttributes[t3] = i3;
      }
      this.morphTargetsRelative = t2.morphTargetsRelative;
      const n2 = t2.groups;
      for (let t3 = 0, e3 = n2.length; t3 < e3; t3++) {
        const e4 = n2[t3];
        this.addGroup(e4.start, e4.count, e4.materialIndex);
      }
      const a2 = t2.boundingBox;
      null !== a2 && (this.boundingBox = a2.clone());
      const o2 = t2.boundingSphere;
      return null !== o2 && (this.boundingSphere = o2.clone()), this.drawRange.start = t2.drawRange.start, this.drawRange.count = t2.drawRange.count, this.userData = t2.userData, this;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
  };
  var Jn = new Ts();
  var Hn = 0;
  var Zn = class extends ds {
    constructor() {
      super(), this.isMaterial = true, Object.defineProperty(this, "id", { value: Hn++ }), this.uuid = fs(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = false, this.opacity = 1, this.transparent = false, this.alphaHash = false, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Pr(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = true, this.depthWrite = true, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = li, this.stencilZFail = li, this.stencilZPass = li, this.stencilWrite = false, this.clippingPlanes = null, this.clipIntersection = false, this.clipShadows = false, this.shadowSide = null, this.colorWrite = true, this.precision = null, this.polygonOffset = false, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = false, this.alphaToCoverage = false, this.premultipliedAlpha = false, this.forceSinglePass = false, this.allowOverride = true, this.visible = true, this.toneMapped = true, this.userData = {}, this.version = 0, this._alphaTest = 0;
    }
    get alphaTest() {
      return this._alphaTest;
    }
    set alphaTest(t2) {
      this._alphaTest > 0 != t2 > 0 && this.version++, this._alphaTest = t2;
    }
    onBeforeRender() {
    }
    onBeforeCompile() {
    }
    customProgramCacheKey() {
      return this.onBeforeCompile.toString();
    }
    setValues(t2) {
      if (void 0 !== t2) for (const e2 in t2) {
        const i2 = t2[e2];
        if (void 0 === i2) {
          as(`Material: parameter '${e2}' has value of undefined.`);
          continue;
        }
        const s2 = this[e2];
        void 0 !== s2 ? s2 && s2.isColor ? s2.set(i2) : s2 && s2.isVector3 && i2 && i2.isVector3 ? s2.copy(i2) : this[e2] = i2 : as(`Material: '${e2}' is not a property of THREE.${this.type}.`);
      }
    }
    toJSON(t2) {
      const e2 = void 0 === t2 || "string" == typeof t2;
      e2 && (t2 = { textures: {}, images: {} });
      const i2 = { metadata: { version: 4.7, type: "Material", generator: "Material.toJSON" } };
      function s2(t3) {
        const e3 = [];
        for (const i3 in t3) {
          const s3 = t3[i3];
          delete s3.metadata, e3.push(s3);
        }
        return e3;
      }
      if (i2.uuid = this.uuid, i2.type = this.type, "" !== this.name && (i2.name = this.name), this.color && this.color.isColor && (i2.color = this.color.getHex()), void 0 !== this.roughness && (i2.roughness = this.roughness), void 0 !== this.metalness && (i2.metalness = this.metalness), void 0 !== this.sheen && (i2.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (i2.sheenColor = this.sheenColor.getHex()), void 0 !== this.sheenRoughness && (i2.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (i2.emissive = this.emissive.getHex()), void 0 !== this.emissiveIntensity && 1 !== this.emissiveIntensity && (i2.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (i2.specular = this.specular.getHex()), void 0 !== this.specularIntensity && (i2.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (i2.specularColor = this.specularColor.getHex()), void 0 !== this.shininess && (i2.shininess = this.shininess), void 0 !== this.clearcoat && (i2.clearcoat = this.clearcoat), void 0 !== this.clearcoatRoughness && (i2.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (i2.clearcoatMap = this.clearcoatMap.toJSON(t2).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (i2.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t2).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (i2.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t2).uuid, i2.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (i2.sheenColorMap = this.sheenColorMap.toJSON(t2).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (i2.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(t2).uuid), void 0 !== this.dispersion && (i2.dispersion = this.dispersion), void 0 !== this.iridescence && (i2.iridescence = this.iridescence), void 0 !== this.iridescenceIOR && (i2.iridescenceIOR = this.iridescenceIOR), void 0 !== this.iridescenceThicknessRange && (i2.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (i2.iridescenceMap = this.iridescenceMap.toJSON(t2).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (i2.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t2).uuid), void 0 !== this.anisotropy && (i2.anisotropy = this.anisotropy), void 0 !== this.anisotropyRotation && (i2.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (i2.anisotropyMap = this.anisotropyMap.toJSON(t2).uuid), this.map && this.map.isTexture && (i2.map = this.map.toJSON(t2).uuid), this.matcap && this.matcap.isTexture && (i2.matcap = this.matcap.toJSON(t2).uuid), this.alphaMap && this.alphaMap.isTexture && (i2.alphaMap = this.alphaMap.toJSON(t2).uuid), this.lightMap && this.lightMap.isTexture && (i2.lightMap = this.lightMap.toJSON(t2).uuid, i2.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (i2.aoMap = this.aoMap.toJSON(t2).uuid, i2.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (i2.bumpMap = this.bumpMap.toJSON(t2).uuid, i2.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (i2.normalMap = this.normalMap.toJSON(t2).uuid, i2.normalMapType = this.normalMapType, i2.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (i2.displacementMap = this.displacementMap.toJSON(t2).uuid, i2.displacementScale = this.displacementScale, i2.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (i2.roughnessMap = this.roughnessMap.toJSON(t2).uuid), this.metalnessMap && this.metalnessMap.isTexture && (i2.metalnessMap = this.metalnessMap.toJSON(t2).uuid), this.emissiveMap && this.emissiveMap.isTexture && (i2.emissiveMap = this.emissiveMap.toJSON(t2).uuid), this.specularMap && this.specularMap.isTexture && (i2.specularMap = this.specularMap.toJSON(t2).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (i2.specularIntensityMap = this.specularIntensityMap.toJSON(t2).uuid), this.specularColorMap && this.specularColorMap.isTexture && (i2.specularColorMap = this.specularColorMap.toJSON(t2).uuid), this.envMap && this.envMap.isTexture && (i2.envMap = this.envMap.toJSON(t2).uuid, void 0 !== this.combine && (i2.combine = this.combine)), void 0 !== this.envMapRotation && (i2.envMapRotation = this.envMapRotation.toArray()), void 0 !== this.envMapIntensity && (i2.envMapIntensity = this.envMapIntensity), void 0 !== this.reflectivity && (i2.reflectivity = this.reflectivity), void 0 !== this.refractionRatio && (i2.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (i2.gradientMap = this.gradientMap.toJSON(t2).uuid), void 0 !== this.transmission && (i2.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (i2.transmissionMap = this.transmissionMap.toJSON(t2).uuid), void 0 !== this.thickness && (i2.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (i2.thicknessMap = this.thicknessMap.toJSON(t2).uuid), void 0 !== this.attenuationDistance && this.attenuationDistance !== 1 / 0 && (i2.attenuationDistance = this.attenuationDistance), void 0 !== this.attenuationColor && (i2.attenuationColor = this.attenuationColor.getHex()), void 0 !== this.size && (i2.size = this.size), null !== this.shadowSide && (i2.shadowSide = this.shadowSide), void 0 !== this.sizeAttenuation && (i2.sizeAttenuation = this.sizeAttenuation), 1 !== this.blending && (i2.blending = this.blending), 0 !== this.side && (i2.side = this.side), true === this.vertexColors && (i2.vertexColors = true), this.opacity < 1 && (i2.opacity = this.opacity), true === this.transparent && (i2.transparent = true), 204 !== this.blendSrc && (i2.blendSrc = this.blendSrc), 205 !== this.blendDst && (i2.blendDst = this.blendDst), 100 !== this.blendEquation && (i2.blendEquation = this.blendEquation), null !== this.blendSrcAlpha && (i2.blendSrcAlpha = this.blendSrcAlpha), null !== this.blendDstAlpha && (i2.blendDstAlpha = this.blendDstAlpha), null !== this.blendEquationAlpha && (i2.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (i2.blendColor = this.blendColor.getHex()), 0 !== this.blendAlpha && (i2.blendAlpha = this.blendAlpha), 3 !== this.depthFunc && (i2.depthFunc = this.depthFunc), false === this.depthTest && (i2.depthTest = this.depthTest), false === this.depthWrite && (i2.depthWrite = this.depthWrite), false === this.colorWrite && (i2.colorWrite = this.colorWrite), 255 !== this.stencilWriteMask && (i2.stencilWriteMask = this.stencilWriteMask), 519 !== this.stencilFunc && (i2.stencilFunc = this.stencilFunc), 0 !== this.stencilRef && (i2.stencilRef = this.stencilRef), 255 !== this.stencilFuncMask && (i2.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== li && (i2.stencilFail = this.stencilFail), this.stencilZFail !== li && (i2.stencilZFail = this.stencilZFail), this.stencilZPass !== li && (i2.stencilZPass = this.stencilZPass), true === this.stencilWrite && (i2.stencilWrite = this.stencilWrite), void 0 !== this.rotation && 0 !== this.rotation && (i2.rotation = this.rotation), true === this.polygonOffset && (i2.polygonOffset = true), 0 !== this.polygonOffsetFactor && (i2.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (i2.polygonOffsetUnits = this.polygonOffsetUnits), void 0 !== this.linewidth && 1 !== this.linewidth && (i2.linewidth = this.linewidth), void 0 !== this.dashSize && (i2.dashSize = this.dashSize), void 0 !== this.gapSize && (i2.gapSize = this.gapSize), void 0 !== this.scale && (i2.scale = this.scale), true === this.dithering && (i2.dithering = true), this.alphaTest > 0 && (i2.alphaTest = this.alphaTest), true === this.alphaHash && (i2.alphaHash = true), true === this.alphaToCoverage && (i2.alphaToCoverage = true), true === this.premultipliedAlpha && (i2.premultipliedAlpha = true), true === this.forceSinglePass && (i2.forceSinglePass = true), false === this.allowOverride && (i2.allowOverride = false), true === this.wireframe && (i2.wireframe = true), this.wireframeLinewidth > 1 && (i2.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (i2.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (i2.wireframeLinejoin = this.wireframeLinejoin), true === this.flatShading && (i2.flatShading = true), false === this.visible && (i2.visible = false), false === this.toneMapped && (i2.toneMapped = false), false === this.fog && (i2.fog = false), Object.keys(this.userData).length > 0 && (i2.userData = this.userData), e2) {
        const e3 = s2(t2.textures), r2 = s2(t2.images);
        e3.length > 0 && (i2.textures = e3), r2.length > 0 && (i2.images = r2);
      }
      return i2;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t2) {
      this.name = t2.name, this.blending = t2.blending, this.side = t2.side, this.vertexColors = t2.vertexColors, this.opacity = t2.opacity, this.transparent = t2.transparent, this.blendSrc = t2.blendSrc, this.blendDst = t2.blendDst, this.blendEquation = t2.blendEquation, this.blendSrcAlpha = t2.blendSrcAlpha, this.blendDstAlpha = t2.blendDstAlpha, this.blendEquationAlpha = t2.blendEquationAlpha, this.blendColor.copy(t2.blendColor), this.blendAlpha = t2.blendAlpha, this.depthFunc = t2.depthFunc, this.depthTest = t2.depthTest, this.depthWrite = t2.depthWrite, this.stencilWriteMask = t2.stencilWriteMask, this.stencilFunc = t2.stencilFunc, this.stencilRef = t2.stencilRef, this.stencilFuncMask = t2.stencilFuncMask, this.stencilFail = t2.stencilFail, this.stencilZFail = t2.stencilZFail, this.stencilZPass = t2.stencilZPass, this.stencilWrite = t2.stencilWrite;
      const e2 = t2.clippingPlanes;
      let i2 = null;
      if (null !== e2) {
        const t3 = e2.length;
        i2 = new Array(t3);
        for (let s2 = 0; s2 !== t3; ++s2) i2[s2] = e2[s2].clone();
      }
      return this.clippingPlanes = i2, this.clipIntersection = t2.clipIntersection, this.clipShadows = t2.clipShadows, this.shadowSide = t2.shadowSide, this.colorWrite = t2.colorWrite, this.precision = t2.precision, this.polygonOffset = t2.polygonOffset, this.polygonOffsetFactor = t2.polygonOffsetFactor, this.polygonOffsetUnits = t2.polygonOffsetUnits, this.dithering = t2.dithering, this.alphaTest = t2.alphaTest, this.alphaHash = t2.alphaHash, this.alphaToCoverage = t2.alphaToCoverage, this.premultipliedAlpha = t2.premultipliedAlpha, this.forceSinglePass = t2.forceSinglePass, this.allowOverride = t2.allowOverride, this.visible = t2.visible, this.toneMapped = t2.toneMapped, this.userData = JSON.parse(JSON.stringify(t2.userData)), this;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
    set needsUpdate(t2) {
      true === t2 && this.version++;
    }
  };
  var $n = new Ts();
  var Qn = new Ts();
  var Kn = new Ts();
  var ta = new _s();
  var ea = new _s();
  var ia = new Qs();
  var sa = new Ts();
  var ra = new Ts();
  var na = new Ts();
  var aa = new _s();
  var oa = new _s();
  var ha = new _s();
  var ua = new Ts();
  var da = new Ts();
  var ma = new Ts();
  var ya = new Ts();
  var ga = new Ts();
  var fa = new Ts();
  var xa = new Ts();
  var ba = new Ts();
  var va = new Ts();
  var wa = class {
    constructor(t2 = new Ts(), e2 = new Ts(0, 0, -1)) {
      this.origin = t2, this.direction = e2;
    }
    set(t2, e2) {
      return this.origin.copy(t2), this.direction.copy(e2), this;
    }
    copy(t2) {
      return this.origin.copy(t2.origin), this.direction.copy(t2.direction), this;
    }
    at(t2, e2) {
      return e2.copy(this.origin).addScaledVector(this.direction, t2);
    }
    lookAt(t2) {
      return this.direction.copy(t2).sub(this.origin).normalize(), this;
    }
    recast(t2) {
      return this.origin.copy(this.at(t2, ma)), this;
    }
    closestPointToPoint(t2, e2) {
      e2.subVectors(t2, this.origin);
      const i2 = e2.dot(this.direction);
      return i2 < 0 ? e2.copy(this.origin) : e2.copy(this.origin).addScaledVector(this.direction, i2);
    }
    distanceToPoint(t2) {
      return Math.sqrt(this.distanceSqToPoint(t2));
    }
    distanceSqToPoint(t2) {
      const e2 = ma.subVectors(t2, this.origin).dot(this.direction);
      return e2 < 0 ? this.origin.distanceToSquared(t2) : (ma.copy(this.origin).addScaledVector(this.direction, e2), ma.distanceToSquared(t2));
    }
    distanceSqToSegment(t2, e2, i2, s2) {
      ya.copy(t2).add(e2).multiplyScalar(0.5), ga.copy(e2).sub(t2).normalize(), fa.copy(this.origin).sub(ya);
      const r2 = 0.5 * t2.distanceTo(e2), n2 = -this.direction.dot(ga), a2 = fa.dot(this.direction), o2 = -fa.dot(ga), h2 = fa.lengthSq(), l2 = Math.abs(1 - n2 * n2);
      let c2, u2, d2, p2;
      if (l2 > 0) if (c2 = n2 * o2 - a2, u2 = n2 * a2 - o2, p2 = r2 * l2, c2 >= 0) if (u2 >= -p2) if (u2 <= p2) {
        const t3 = 1 / l2;
        c2 *= t3, u2 *= t3, d2 = c2 * (c2 + n2 * u2 + 2 * a2) + u2 * (n2 * c2 + u2 + 2 * o2) + h2;
      } else u2 = r2, c2 = Math.max(0, -(n2 * u2 + a2)), d2 = -c2 * c2 + u2 * (u2 + 2 * o2) + h2;
      else u2 = -r2, c2 = Math.max(0, -(n2 * u2 + a2)), d2 = -c2 * c2 + u2 * (u2 + 2 * o2) + h2;
      else u2 <= -p2 ? (c2 = Math.max(0, -(-n2 * r2 + a2)), u2 = c2 > 0 ? -r2 : Math.min(Math.max(-r2, -o2), r2), d2 = -c2 * c2 + u2 * (u2 + 2 * o2) + h2) : u2 <= p2 ? (c2 = 0, u2 = Math.min(Math.max(-r2, -o2), r2), d2 = u2 * (u2 + 2 * o2) + h2) : (c2 = Math.max(0, -(n2 * r2 + a2)), u2 = c2 > 0 ? r2 : Math.min(Math.max(-r2, -o2), r2), d2 = -c2 * c2 + u2 * (u2 + 2 * o2) + h2);
      else u2 = n2 > 0 ? -r2 : r2, c2 = Math.max(0, -(n2 * u2 + a2)), d2 = -c2 * c2 + u2 * (u2 + 2 * o2) + h2;
      return i2 && i2.copy(this.origin).addScaledVector(this.direction, c2), s2 && s2.copy(ya).addScaledVector(ga, u2), d2;
    }
    intersectSphere(t2, e2) {
      ma.subVectors(t2.center, this.origin);
      const i2 = ma.dot(this.direction), s2 = ma.dot(ma) - i2 * i2, r2 = t2.radius * t2.radius;
      if (s2 > r2) return null;
      const n2 = Math.sqrt(r2 - s2), a2 = i2 - n2, o2 = i2 + n2;
      return o2 < 0 ? null : a2 < 0 ? this.at(o2, e2) : this.at(a2, e2);
    }
    intersectsSphere(t2) {
      return !(t2.radius < 0) && this.distanceSqToPoint(t2.center) <= t2.radius * t2.radius;
    }
    distanceToPlane(t2) {
      const e2 = t2.normal.dot(this.direction);
      if (0 === e2) return 0 === t2.distanceToPoint(this.origin) ? 0 : null;
      const i2 = -(this.origin.dot(t2.normal) + t2.constant) / e2;
      return i2 >= 0 ? i2 : null;
    }
    intersectPlane(t2, e2) {
      const i2 = this.distanceToPlane(t2);
      return null === i2 ? null : this.at(i2, e2);
    }
    intersectsPlane(t2) {
      const e2 = t2.distanceToPoint(this.origin);
      if (0 === e2) return true;
      return t2.normal.dot(this.direction) * e2 < 0;
    }
    intersectBox(t2, e2) {
      let i2, s2, r2, n2, a2, o2;
      const h2 = 1 / this.direction.x, l2 = 1 / this.direction.y, c2 = 1 / this.direction.z, u2 = this.origin;
      return h2 >= 0 ? (i2 = (t2.min.x - u2.x) * h2, s2 = (t2.max.x - u2.x) * h2) : (i2 = (t2.max.x - u2.x) * h2, s2 = (t2.min.x - u2.x) * h2), l2 >= 0 ? (r2 = (t2.min.y - u2.y) * l2, n2 = (t2.max.y - u2.y) * l2) : (r2 = (t2.max.y - u2.y) * l2, n2 = (t2.min.y - u2.y) * l2), i2 > n2 || r2 > s2 ? null : ((r2 > i2 || isNaN(i2)) && (i2 = r2), (n2 < s2 || isNaN(s2)) && (s2 = n2), c2 >= 0 ? (a2 = (t2.min.z - u2.z) * c2, o2 = (t2.max.z - u2.z) * c2) : (a2 = (t2.max.z - u2.z) * c2, o2 = (t2.min.z - u2.z) * c2), i2 > o2 || a2 > s2 ? null : ((a2 > i2 || i2 != i2) && (i2 = a2), (o2 < s2 || s2 != s2) && (s2 = o2), s2 < 0 ? null : this.at(i2 >= 0 ? i2 : s2, e2)));
    }
    intersectsBox(t2) {
      return null !== this.intersectBox(t2, ma);
    }
    intersectTriangle(t2, e2, i2, s2, r2) {
      xa.subVectors(e2, t2), ba.subVectors(i2, t2), va.crossVectors(xa, ba);
      let n2, a2 = this.direction.dot(va);
      if (a2 > 0) {
        if (s2) return null;
        n2 = 1;
      } else {
        if (!(a2 < 0)) return null;
        n2 = -1, a2 = -a2;
      }
      fa.subVectors(this.origin, t2);
      const o2 = n2 * this.direction.dot(ba.crossVectors(fa, ba));
      if (o2 < 0) return null;
      const h2 = n2 * this.direction.dot(xa.cross(fa));
      if (h2 < 0) return null;
      if (o2 + h2 > a2) return null;
      const l2 = -n2 * fa.dot(va);
      return l2 < 0 ? null : this.at(l2 / a2, r2);
    }
    applyMatrix4(t2) {
      return this.origin.applyMatrix4(t2), this.direction.transformDirection(t2), this;
    }
    equals(t2) {
      return t2.origin.equals(this.origin) && t2.direction.equals(this.direction);
    }
    clone() {
      return new this.constructor().copy(this);
    }
  };
  var Ma = class extends Zn {
    constructor(t2) {
      super(), this.isMeshBasicMaterial = true, this.type = "MeshBasicMaterial", this.color = new Pr(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new hr(), this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = true, this.setValues(t2);
    }
    copy(t2) {
      return super.copy(t2), this.color.copy(t2.color), this.map = t2.map, this.lightMap = t2.lightMap, this.lightMapIntensity = t2.lightMapIntensity, this.aoMap = t2.aoMap, this.aoMapIntensity = t2.aoMapIntensity, this.specularMap = t2.specularMap, this.alphaMap = t2.alphaMap, this.envMap = t2.envMap, this.envMapRotation.copy(t2.envMapRotation), this.combine = t2.combine, this.reflectivity = t2.reflectivity, this.refractionRatio = t2.refractionRatio, this.wireframe = t2.wireframe, this.wireframeLinewidth = t2.wireframeLinewidth, this.wireframeLinecap = t2.wireframeLinecap, this.wireframeLinejoin = t2.wireframeLinejoin, this.fog = t2.fog, this;
    }
  };
  var Sa = new Qs();
  var _a = new wa();
  var Aa = new Nn();
  var Ta = new Ts();
  var za = new Ts();
  var Ca = new Ts();
  var Ia = new Ts();
  var Ba = new Ts();
  var ka = new Ts();
  var Oa = new Ts();
  var Pa = new Ts();
  var Ra = class extends Ar {
    constructor(t2 = new Wn(), e2 = new Ma()) {
      super(), this.isMesh = true, this.type = "Mesh", this.geometry = t2, this.material = e2, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.count = 1, this.updateMorphTargets();
    }
    copy(t2, e2) {
      return super.copy(t2, e2), void 0 !== t2.morphTargetInfluences && (this.morphTargetInfluences = t2.morphTargetInfluences.slice()), void 0 !== t2.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t2.morphTargetDictionary)), this.material = Array.isArray(t2.material) ? t2.material.slice() : t2.material, this.geometry = t2.geometry, this;
    }
    updateMorphTargets() {
      const t2 = this.geometry.morphAttributes, e2 = Object.keys(t2);
      if (e2.length > 0) {
        const i2 = t2[e2[0]];
        if (void 0 !== i2) {
          this.morphTargetInfluences = [], this.morphTargetDictionary = {};
          for (let t3 = 0, e3 = i2.length; t3 < e3; t3++) {
            const e4 = i2[t3].name || String(t3);
            this.morphTargetInfluences.push(0), this.morphTargetDictionary[e4] = t3;
          }
        }
      }
    }
    getVertexPosition(t2, e2) {
      const i2 = this.geometry, s2 = i2.attributes.position, r2 = i2.morphAttributes.position, n2 = i2.morphTargetsRelative;
      e2.fromBufferAttribute(s2, t2);
      const a2 = this.morphTargetInfluences;
      if (r2 && a2) {
        ka.set(0, 0, 0);
        for (let i3 = 0, s3 = r2.length; i3 < s3; i3++) {
          const s4 = a2[i3], o2 = r2[i3];
          0 !== s4 && (Ba.fromBufferAttribute(o2, t2), n2 ? ka.addScaledVector(Ba, s4) : ka.addScaledVector(Ba.sub(e2), s4));
        }
        e2.add(ka);
      }
      return e2;
    }
    raycast(t2, e2) {
      const i2 = this.geometry, s2 = this.material, r2 = this.matrixWorld;
      if (void 0 !== s2) {
        if (null === i2.boundingSphere && i2.computeBoundingSphere(), Aa.copy(i2.boundingSphere), Aa.applyMatrix4(r2), _a.copy(t2.ray).recast(t2.near), false === Aa.containsPoint(_a.origin)) {
          if (null === _a.intersectSphere(Aa, Ta)) return;
          if (_a.origin.distanceToSquared(Ta) > (t2.far - t2.near) ** 2) return;
        }
        Sa.copy(r2).invert(), _a.copy(t2.ray).applyMatrix4(Sa), null !== i2.boundingBox && false === _a.intersectsBox(i2.boundingBox) || this._computeIntersections(t2, e2, _a);
      }
    }
    _computeIntersections(t2, e2, i2) {
      let s2;
      const r2 = this.geometry, n2 = this.material, a2 = r2.index, o2 = r2.attributes.position, h2 = r2.attributes.uv, l2 = r2.attributes.uv1, c2 = r2.attributes.normal, u2 = r2.groups, d2 = r2.drawRange;
      if (null !== a2) if (Array.isArray(n2)) for (let r3 = 0, o3 = u2.length; r3 < o3; r3++) {
        const o4 = u2[r3], p2 = n2[o4.materialIndex];
        for (let r4 = Math.max(o4.start, d2.start), n3 = Math.min(a2.count, Math.min(o4.start + o4.count, d2.start + d2.count)); r4 < n3; r4 += 3) {
          s2 = Na(this, p2, t2, i2, h2, l2, c2, a2.getX(r4), a2.getX(r4 + 1), a2.getX(r4 + 2)), s2 && (s2.faceIndex = Math.floor(r4 / 3), s2.face.materialIndex = o4.materialIndex, e2.push(s2));
        }
      }
      else {
        for (let r3 = Math.max(0, d2.start), o3 = Math.min(a2.count, d2.start + d2.count); r3 < o3; r3 += 3) {
          s2 = Na(this, n2, t2, i2, h2, l2, c2, a2.getX(r3), a2.getX(r3 + 1), a2.getX(r3 + 2)), s2 && (s2.faceIndex = Math.floor(r3 / 3), e2.push(s2));
        }
      }
      else if (void 0 !== o2) if (Array.isArray(n2)) for (let r3 = 0, a3 = u2.length; r3 < a3; r3++) {
        const a4 = u2[r3], p2 = n2[a4.materialIndex];
        for (let r4 = Math.max(a4.start, d2.start), n3 = Math.min(o2.count, Math.min(a4.start + a4.count, d2.start + d2.count)); r4 < n3; r4 += 3) {
          s2 = Na(this, p2, t2, i2, h2, l2, c2, r4, r4 + 1, r4 + 2), s2 && (s2.faceIndex = Math.floor(r4 / 3), s2.face.materialIndex = a4.materialIndex, e2.push(s2));
        }
      }
      else {
        for (let r3 = Math.max(0, d2.start), a3 = Math.min(o2.count, d2.start + d2.count); r3 < a3; r3 += 3) {
          s2 = Na(this, n2, t2, i2, h2, l2, c2, r3, r3 + 1, r3 + 2), s2 && (s2.faceIndex = Math.floor(r3 / 3), e2.push(s2));
        }
      }
    }
  };
  function Na(t2, e2, i2, s2, r2, n2, a2, o2, h2, l2) {
    t2.getVertexPosition(o2, za), t2.getVertexPosition(h2, Ca), t2.getVertexPosition(l2, Ia);
    const c2 = function(t3, e3, i3, s3, r3, n3, a3, o3) {
      let h3;
      if (h3 = 1 === e3.side ? s3.intersectTriangle(a3, n3, r3, true, o3) : s3.intersectTriangle(r3, n3, a3, 0 === e3.side, o3), null === h3) return null;
      Pa.copy(o3), Pa.applyMatrix4(t3.matrixWorld);
      const l3 = i3.ray.origin.distanceTo(Pa);
      return l3 < i3.near || l3 > i3.far ? null : { distance: l3, point: Pa.clone(), object: t3 };
    }(t2, e2, i2, s2, za, Ca, Ia, Oa);
    if (c2) {
      const t3 = new Ts();
      $r.getBarycoord(Oa, za, Ca, Ia, t3), r2 && (c2.uv = $r.getInterpolatedAttribute(r2, o2, h2, l2, t3, new _s())), n2 && (c2.uv1 = $r.getInterpolatedAttribute(n2, o2, h2, l2, t3, new _s())), a2 && (c2.normal = $r.getInterpolatedAttribute(a2, o2, h2, l2, t3, new Ts()), c2.normal.dot(s2.direction) > 0 && c2.normal.multiplyScalar(-1));
      const e3 = { a: o2, b: h2, c: l2, normal: new Ts(), materialIndex: 0 };
      $r.getNormal(za, Ca, Ia, e3.normal), c2.face = e3, c2.barycoord = t3;
    }
    return c2;
  }
  var Va = new Js();
  var Ea = new Js();
  var La = new Js();
  var Fa = new Js();
  var ja = new Qs();
  var Da = new Ts();
  var Ua = new Nn();
  var Wa = new Qs();
  var qa = new wa();
  var Ya = class extends qs {
    constructor(t2 = null, e2 = 1, i2 = 1, s2, r2, n2, a2, o2, h2 = 1003, l2 = 1003, c2, u2) {
      super(null, n2, a2, o2, h2, l2, s2, r2, c2, u2), this.isDataTexture = true, this.image = { data: t2, width: e2, height: i2 }, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
    }
  };
  var Ha = new Qs();
  var Za = new Qs();
  var Qa = new Qs();
  var Ka = new Qs();
  var eo = new Qr();
  var io = new Qs();
  var so = new Ra();
  var ro = new Nn();
  var ao = new Ts();
  var oo = new Ts();
  var ho = new Is();
  var lo = class {
    constructor(t2 = new Ts(1, 0, 0), e2 = 0) {
      this.isPlane = true, this.normal = t2, this.constant = e2;
    }
    set(t2, e2) {
      return this.normal.copy(t2), this.constant = e2, this;
    }
    setComponents(t2, e2, i2, s2) {
      return this.normal.set(t2, e2, i2), this.constant = s2, this;
    }
    setFromNormalAndCoplanarPoint(t2, e2) {
      return this.normal.copy(t2), this.constant = -e2.dot(this.normal), this;
    }
    setFromCoplanarPoints(t2, e2, i2) {
      const s2 = ao.subVectors(i2, e2).cross(oo.subVectors(t2, e2)).normalize();
      return this.setFromNormalAndCoplanarPoint(s2, t2), this;
    }
    copy(t2) {
      return this.normal.copy(t2.normal), this.constant = t2.constant, this;
    }
    normalize() {
      const t2 = 1 / this.normal.length();
      return this.normal.multiplyScalar(t2), this.constant *= t2, this;
    }
    negate() {
      return this.constant *= -1, this.normal.negate(), this;
    }
    distanceToPoint(t2) {
      return this.normal.dot(t2) + this.constant;
    }
    distanceToSphere(t2) {
      return this.distanceToPoint(t2.center) - t2.radius;
    }
    projectPoint(t2, e2) {
      return e2.copy(t2).addScaledVector(this.normal, -this.distanceToPoint(t2));
    }
    intersectLine(t2, e2, i2 = true) {
      const s2 = t2.delta(ao), r2 = this.normal.dot(s2);
      if (0 === r2) return 0 === this.distanceToPoint(t2.start) ? e2.copy(t2.start) : null;
      const n2 = -(t2.start.dot(this.normal) + this.constant) / r2;
      return true === i2 && (n2 < 0 || n2 > 1) ? null : e2.copy(t2.start).addScaledVector(s2, n2);
    }
    intersectsLine(t2) {
      const e2 = this.distanceToPoint(t2.start), i2 = this.distanceToPoint(t2.end);
      return e2 < 0 && i2 > 0 || i2 < 0 && e2 > 0;
    }
    intersectsBox(t2) {
      return t2.intersectsPlane(this);
    }
    intersectsSphere(t2) {
      return t2.intersectsPlane(this);
    }
    coplanarPoint(t2) {
      return t2.copy(this.normal).multiplyScalar(-this.constant);
    }
    applyMatrix4(t2, e2) {
      const i2 = e2 || ho.getNormalMatrix(t2), s2 = this.coplanarPoint(ao).applyMatrix4(t2), r2 = this.normal.applyMatrix3(i2).normalize();
      return this.constant = -s2.dot(r2), this;
    }
    translate(t2) {
      return this.constant -= t2.dot(this.normal), this;
    }
    equals(t2) {
      return t2.normal.equals(this.normal) && t2.constant === this.constant;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  };
  var co = new Nn();
  var uo = new _s(0.5, 0.5);
  var po = new Ts();
  var mo = class {
    constructor(t2 = new lo(), e2 = new lo(), i2 = new lo(), s2 = new lo(), r2 = new lo(), n2 = new lo()) {
      this.planes = [t2, e2, i2, s2, r2, n2];
    }
    set(t2, e2, i2, s2, r2, n2) {
      const a2 = this.planes;
      return a2[0].copy(t2), a2[1].copy(e2), a2[2].copy(i2), a2[3].copy(s2), a2[4].copy(r2), a2[5].copy(n2), this;
    }
    copy(t2) {
      const e2 = this.planes;
      for (let i2 = 0; i2 < 6; i2++) e2[i2].copy(t2.planes[i2]);
      return this;
    }
    setFromProjectionMatrix(t2, e2 = 2e3, i2 = false) {
      const s2 = this.planes, r2 = t2.elements, n2 = r2[0], a2 = r2[1], o2 = r2[2], h2 = r2[3], l2 = r2[4], c2 = r2[5], u2 = r2[6], d2 = r2[7], p2 = r2[8], m2 = r2[9], y2 = r2[10], g2 = r2[11], f2 = r2[12], x2 = r2[13], b2 = r2[14], v2 = r2[15];
      if (s2[0].setComponents(h2 - n2, d2 - l2, g2 - p2, v2 - f2).normalize(), s2[1].setComponents(h2 + n2, d2 + l2, g2 + p2, v2 + f2).normalize(), s2[2].setComponents(h2 + a2, d2 + c2, g2 + m2, v2 + x2).normalize(), s2[3].setComponents(h2 - a2, d2 - c2, g2 - m2, v2 - x2).normalize(), i2) s2[4].setComponents(o2, u2, y2, b2).normalize(), s2[5].setComponents(h2 - o2, d2 - u2, g2 - y2, v2 - b2).normalize();
      else if (s2[4].setComponents(h2 - o2, d2 - u2, g2 - y2, v2 - b2).normalize(), e2 === Wi) s2[5].setComponents(h2 + o2, d2 + u2, g2 + y2, v2 + b2).normalize();
      else {
        if (e2 !== qi) throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + e2);
        s2[5].setComponents(o2, u2, y2, b2).normalize();
      }
      return this;
    }
    intersectsObject(t2) {
      if (void 0 !== t2.boundingSphere) null === t2.boundingSphere && t2.computeBoundingSphere(), co.copy(t2.boundingSphere).applyMatrix4(t2.matrixWorld);
      else {
        const e2 = t2.geometry;
        null === e2.boundingSphere && e2.computeBoundingSphere(), co.copy(e2.boundingSphere).applyMatrix4(t2.matrixWorld);
      }
      return this.intersectsSphere(co);
    }
    intersectsSprite(t2) {
      co.center.set(0, 0, 0);
      const e2 = uo.distanceTo(t2.center);
      return co.radius = 0.7071067811865476 + e2, co.applyMatrix4(t2.matrixWorld), this.intersectsSphere(co);
    }
    intersectsSphere(t2) {
      const e2 = this.planes, i2 = t2.center, s2 = -t2.radius;
      for (let t3 = 0; t3 < 6; t3++) {
        if (e2[t3].distanceToPoint(i2) < s2) return false;
      }
      return true;
    }
    intersectsBox(t2) {
      const e2 = this.planes;
      for (let i2 = 0; i2 < 6; i2++) {
        const s2 = e2[i2];
        if (po.x = s2.normal.x > 0 ? t2.max.x : t2.min.x, po.y = s2.normal.y > 0 ? t2.max.y : t2.min.y, po.z = s2.normal.z > 0 ? t2.max.z : t2.min.z, s2.distanceToPoint(po) < 0) return false;
      }
      return true;
    }
    containsPoint(t2) {
      const e2 = this.planes;
      for (let i2 = 0; i2 < 6; i2++) if (e2[i2].distanceToPoint(t2) < 0) return false;
      return true;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  };
  var yo = new Qs();
  var go = new mo();
  var fo = class _fo {
    constructor() {
      this.coordinateSystem = Wi;
    }
    intersectsObject(t2, e2) {
      if (!e2.isArrayCamera || 0 === e2.cameras.length) return false;
      for (let i2 = 0; i2 < e2.cameras.length; i2++) {
        const s2 = e2.cameras[i2];
        if (yo.multiplyMatrices(s2.projectionMatrix, s2.matrixWorldInverse), go.setFromProjectionMatrix(yo, s2.coordinateSystem, s2.reversedDepth), go.intersectsObject(t2)) return true;
      }
      return false;
    }
    intersectsSprite(t2, e2) {
      if (!e2 || !e2.cameras || 0 === e2.cameras.length) return false;
      for (let i2 = 0; i2 < e2.cameras.length; i2++) {
        const s2 = e2.cameras[i2];
        if (yo.multiplyMatrices(s2.projectionMatrix, s2.matrixWorldInverse), go.setFromProjectionMatrix(yo, s2.coordinateSystem, s2.reversedDepth), go.intersectsSprite(t2)) return true;
      }
      return false;
    }
    intersectsSphere(t2, e2) {
      if (!e2 || !e2.cameras || 0 === e2.cameras.length) return false;
      for (let i2 = 0; i2 < e2.cameras.length; i2++) {
        const s2 = e2.cameras[i2];
        if (yo.multiplyMatrices(s2.projectionMatrix, s2.matrixWorldInverse), go.setFromProjectionMatrix(yo, s2.coordinateSystem, s2.reversedDepth), go.intersectsSphere(t2)) return true;
      }
      return false;
    }
    intersectsBox(t2, e2) {
      if (!e2 || !e2.cameras || 0 === e2.cameras.length) return false;
      for (let i2 = 0; i2 < e2.cameras.length; i2++) {
        const s2 = e2.cameras[i2];
        if (yo.multiplyMatrices(s2.projectionMatrix, s2.matrixWorldInverse), go.setFromProjectionMatrix(yo, s2.coordinateSystem, s2.reversedDepth), go.intersectsBox(t2)) return true;
      }
      return false;
    }
    containsPoint(t2, e2) {
      if (!e2 || !e2.cameras || 0 === e2.cameras.length) return false;
      for (let i2 = 0; i2 < e2.cameras.length; i2++) {
        const s2 = e2.cameras[i2];
        if (yo.multiplyMatrices(s2.projectionMatrix, s2.matrixWorldInverse), go.setFromProjectionMatrix(yo, s2.coordinateSystem, s2.reversedDepth), go.containsPoint(t2)) return true;
      }
      return false;
    }
    clone() {
      return new _fo();
    }
  };
  var wo = class {
    constructor() {
      this.index = 0, this.pool = [], this.list = [];
    }
    push(t2, e2, i2, s2) {
      const r2 = this.pool, n2 = this.list;
      this.index >= r2.length && r2.push({ start: -1, count: -1, z: -1, index: -1 });
      const a2 = r2[this.index];
      n2.push(a2), this.index++, a2.start = t2, a2.count = e2, a2.z = i2, a2.index = s2;
    }
    reset() {
      this.list.length = 0, this.index = 0;
    }
  };
  var Mo = new Qs();
  var So = new Pr(1, 1, 1);
  var _o = new mo();
  var Ao = new fo();
  var To = new Qr();
  var zo = new Nn();
  var Co = new Ts();
  var Io = new Ts();
  var Bo = new Ts();
  var ko = new wo();
  var Oo = new Ra();
  var Lo = new Ts();
  var Fo = new Ts();
  var jo = new Qs();
  var Do = new wa();
  var Uo = new Nn();
  var Wo = new Ts();
  var qo = new Ts();
  var Yo = new Ts();
  var Ho = new Ts();
  var Qo = new Qs();
  var Ko = new wa();
  var th = new Nn();
  var eh = new Ts();
  var ch = class extends qs {
    constructor(t2 = [], e2 = 301, i2, s2, r2, n2, a2, o2, h2, l2) {
      super(t2, e2, i2, s2, r2, n2, a2, o2, h2, l2), this.isCubeTexture = true, this.flipY = false;
    }
    get images() {
      return this.image;
    }
    set images(t2) {
      this.image = t2;
    }
  };
  var uh = class extends qs {
    constructor(t2, e2, i2, s2, r2, n2, a2, o2, h2) {
      super(t2, e2, i2, s2, r2, n2, a2, o2, h2), this.isCanvasTexture = true, this.needsUpdate = true;
    }
  };
  var ph = class extends qs {
    constructor(t2, e2, i2 = 1014, s2, r2, n2, a2 = 1003, o2 = 1003, h2, l2 = 1026, c2 = 1) {
      if (l2 !== Wt && 1027 !== l2) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
      super({ width: t2, height: e2, depth: c2 }, s2, r2, n2, a2, o2, l2, i2, h2), this.isDepthTexture = true, this.flipY = false, this.generateMipmaps = false, this.compareFunction = null;
    }
    copy(t2) {
      return super.copy(t2), this.source = new js(Object.assign({}, t2.image)), this.compareFunction = t2.compareFunction, this;
    }
    toJSON(t2) {
      const e2 = super.toJSON(t2);
      return null !== this.compareFunction && (e2.compareFunction = this.compareFunction), e2;
    }
  };
  var mh = class extends ph {
    constructor(t2, e2 = 1014, i2 = 301, s2, r2, n2 = 1003, a2 = 1003, o2, h2 = 1026) {
      const l2 = { width: t2, height: t2, depth: 1 }, c2 = [l2, l2, l2, l2, l2, l2];
      super(t2, t2, e2, i2, s2, r2, n2, a2, o2, h2), this.image = c2, this.isCubeDepthTexture = true, this.isCubeTexture = true;
    }
    get images() {
      return this.image;
    }
    set images(t2) {
      this.image = t2;
    }
  };
  var yh = class extends qs {
    constructor(t2 = null) {
      super(), this.sourceTexture = t2, this.isExternalTexture = true;
    }
    copy(t2) {
      return super.copy(t2), this.sourceTexture = t2.sourceTexture, this;
    }
  };
  var gh = class _gh extends Wn {
    constructor(t2 = 1, e2 = 1, i2 = 1, s2 = 1, r2 = 1, n2 = 1) {
      super(), this.type = "BoxGeometry", this.parameters = { width: t2, height: e2, depth: i2, widthSegments: s2, heightSegments: r2, depthSegments: n2 };
      const a2 = this;
      s2 = Math.floor(s2), r2 = Math.floor(r2), n2 = Math.floor(n2);
      const o2 = [], h2 = [], l2 = [], c2 = [];
      let u2 = 0, d2 = 0;
      function p2(t3, e3, i3, s3, r3, n3, p3, m2, y2, g2, f2) {
        const x2 = n3 / y2, b2 = p3 / g2, v2 = n3 / 2, w2 = p3 / 2, M2 = m2 / 2, S2 = y2 + 1, _2 = g2 + 1;
        let A2 = 0, T2 = 0;
        const z2 = new Ts();
        for (let n4 = 0; n4 < _2; n4++) {
          const a3 = n4 * b2 - w2;
          for (let o3 = 0; o3 < S2; o3++) {
            const u3 = o3 * x2 - v2;
            z2[t3] = u3 * s3, z2[e3] = a3 * r3, z2[i3] = M2, h2.push(z2.x, z2.y, z2.z), z2[t3] = 0, z2[e3] = 0, z2[i3] = m2 > 0 ? 1 : -1, l2.push(z2.x, z2.y, z2.z), c2.push(o3 / y2), c2.push(1 - n4 / g2), A2 += 1;
          }
        }
        for (let t4 = 0; t4 < g2; t4++) for (let e4 = 0; e4 < y2; e4++) {
          const i4 = u2 + e4 + S2 * t4, s4 = u2 + e4 + S2 * (t4 + 1), r4 = u2 + (e4 + 1) + S2 * (t4 + 1), n4 = u2 + (e4 + 1) + S2 * t4;
          o2.push(i4, s4, n4), o2.push(s4, r4, n4), T2 += 6;
        }
        a2.addGroup(d2, T2, f2), d2 += T2, u2 += A2;
      }
      p2("z", "y", "x", -1, -1, i2, e2, t2, n2, r2, 0), p2("z", "y", "x", 1, -1, i2, e2, -t2, n2, r2, 1), p2("x", "z", "y", 1, 1, t2, i2, e2, s2, n2, 2), p2("x", "z", "y", 1, -1, t2, i2, -e2, s2, n2, 3), p2("x", "y", "z", 1, -1, t2, e2, i2, s2, r2, 4), p2("x", "y", "z", -1, -1, t2, e2, -i2, s2, r2, 5), this.setIndex(o2), this.setAttribute("position", new kn(h2, 3)), this.setAttribute("normal", new kn(l2, 3)), this.setAttribute("uv", new kn(c2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _gh(t2.width, t2.height, t2.depth, t2.widthSegments, t2.heightSegments, t2.depthSegments);
    }
  };
  var fh = class _fh extends Wn {
    constructor(t2 = 1, e2 = 1, i2 = 4, s2 = 8, r2 = 1) {
      super(), this.type = "CapsuleGeometry", this.parameters = { radius: t2, height: e2, capSegments: i2, radialSegments: s2, heightSegments: r2 }, e2 = Math.max(0, e2), i2 = Math.max(1, Math.floor(i2)), s2 = Math.max(3, Math.floor(s2)), r2 = Math.max(1, Math.floor(r2));
      const n2 = [], a2 = [], o2 = [], h2 = [], l2 = e2 / 2, c2 = Math.PI / 2 * t2, u2 = e2, d2 = 2 * c2 + u2, p2 = 2 * i2 + r2, m2 = s2 + 1, y2 = new Ts(), g2 = new Ts();
      for (let f2 = 0; f2 <= p2; f2++) {
        let x2 = 0, b2 = 0, v2 = 0, w2 = 0;
        if (f2 <= i2) {
          const e3 = f2 / i2, s3 = e3 * Math.PI / 2;
          b2 = -l2 - t2 * Math.cos(s3), v2 = t2 * Math.sin(s3), w2 = -t2 * Math.cos(s3), x2 = e3 * c2;
        } else if (f2 <= i2 + r2) {
          const s3 = (f2 - i2) / r2;
          b2 = s3 * e2 - l2, v2 = t2, w2 = 0, x2 = c2 + s3 * u2;
        } else {
          const e3 = (f2 - i2 - r2) / i2, s3 = e3 * Math.PI / 2;
          b2 = l2 + t2 * Math.sin(s3), v2 = t2 * Math.cos(s3), w2 = t2 * Math.sin(s3), x2 = c2 + u2 + e3 * c2;
        }
        const M2 = Math.max(0, Math.min(1, x2 / d2));
        let S2 = 0;
        0 === f2 ? S2 = 0.5 / s2 : f2 === p2 && (S2 = -0.5 / s2);
        for (let t3 = 0; t3 <= s2; t3++) {
          const e3 = t3 / s2, i3 = e3 * Math.PI * 2, r3 = Math.sin(i3), n3 = Math.cos(i3);
          g2.x = -v2 * n3, g2.y = b2, g2.z = v2 * r3, a2.push(g2.x, g2.y, g2.z), y2.set(-v2 * n3, w2, v2 * r3), y2.normalize(), o2.push(y2.x, y2.y, y2.z), h2.push(e3 + S2, M2);
        }
        if (f2 > 0) {
          const t3 = (f2 - 1) * m2;
          for (let e3 = 0; e3 < s2; e3++) {
            const i3 = t3 + e3, s3 = t3 + e3 + 1, r3 = f2 * m2 + e3, a3 = f2 * m2 + e3 + 1;
            n2.push(i3, s3, r3), n2.push(s3, a3, r3);
          }
        }
      }
      this.setIndex(n2), this.setAttribute("position", new kn(a2, 3)), this.setAttribute("normal", new kn(o2, 3)), this.setAttribute("uv", new kn(h2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _fh(t2.radius, t2.height, t2.capSegments, t2.radialSegments, t2.heightSegments);
    }
  };
  var xh = class _xh extends Wn {
    constructor(t2 = 1, e2 = 32, i2 = 0, s2 = 2 * Math.PI) {
      super(), this.type = "CircleGeometry", this.parameters = { radius: t2, segments: e2, thetaStart: i2, thetaLength: s2 }, e2 = Math.max(3, e2);
      const r2 = [], n2 = [], a2 = [], o2 = [], h2 = new Ts(), l2 = new _s();
      n2.push(0, 0, 0), a2.push(0, 0, 1), o2.push(0.5, 0.5);
      for (let r3 = 0, c2 = 3; r3 <= e2; r3++, c2 += 3) {
        const u2 = i2 + r3 / e2 * s2;
        h2.x = t2 * Math.cos(u2), h2.y = t2 * Math.sin(u2), n2.push(h2.x, h2.y, h2.z), a2.push(0, 0, 1), l2.x = (n2[c2] / t2 + 1) / 2, l2.y = (n2[c2 + 1] / t2 + 1) / 2, o2.push(l2.x, l2.y);
      }
      for (let t3 = 1; t3 <= e2; t3++) r2.push(t3, t3 + 1, 0);
      this.setIndex(r2), this.setAttribute("position", new kn(n2, 3)), this.setAttribute("normal", new kn(a2, 3)), this.setAttribute("uv", new kn(o2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _xh(t2.radius, t2.segments, t2.thetaStart, t2.thetaLength);
    }
  };
  var bh = class _bh extends Wn {
    constructor(t2 = 1, e2 = 1, i2 = 1, s2 = 32, r2 = 1, n2 = false, a2 = 0, o2 = 2 * Math.PI) {
      super(), this.type = "CylinderGeometry", this.parameters = { radiusTop: t2, radiusBottom: e2, height: i2, radialSegments: s2, heightSegments: r2, openEnded: n2, thetaStart: a2, thetaLength: o2 };
      const h2 = this;
      s2 = Math.floor(s2), r2 = Math.floor(r2);
      const l2 = [], c2 = [], u2 = [], d2 = [];
      let p2 = 0;
      const m2 = [], y2 = i2 / 2;
      let g2 = 0;
      function f2(i3) {
        const r3 = p2, n3 = new _s(), m3 = new Ts();
        let f3 = 0;
        const x2 = true === i3 ? t2 : e2, b2 = true === i3 ? 1 : -1;
        for (let t3 = 1; t3 <= s2; t3++) c2.push(0, y2 * b2, 0), u2.push(0, b2, 0), d2.push(0.5, 0.5), p2++;
        const v2 = p2;
        for (let t3 = 0; t3 <= s2; t3++) {
          const e3 = t3 / s2 * o2 + a2, i4 = Math.cos(e3), r4 = Math.sin(e3);
          m3.x = x2 * r4, m3.y = y2 * b2, m3.z = x2 * i4, c2.push(m3.x, m3.y, m3.z), u2.push(0, b2, 0), n3.x = 0.5 * i4 + 0.5, n3.y = 0.5 * r4 * b2 + 0.5, d2.push(n3.x, n3.y), p2++;
        }
        for (let t3 = 0; t3 < s2; t3++) {
          const e3 = r3 + t3, s3 = v2 + t3;
          true === i3 ? l2.push(s3, s3 + 1, e3) : l2.push(s3 + 1, s3, e3), f3 += 3;
        }
        h2.addGroup(g2, f3, true === i3 ? 1 : 2), g2 += f3;
      }
      !function() {
        const n3 = new Ts(), f3 = new Ts();
        let x2 = 0;
        const b2 = (e2 - t2) / i2;
        for (let h3 = 0; h3 <= r2; h3++) {
          const l3 = [], g3 = h3 / r2, x3 = g3 * (e2 - t2) + t2;
          for (let t3 = 0; t3 <= s2; t3++) {
            const e3 = t3 / s2, r3 = e3 * o2 + a2, h4 = Math.sin(r3), m3 = Math.cos(r3);
            f3.x = x3 * h4, f3.y = -g3 * i2 + y2, f3.z = x3 * m3, c2.push(f3.x, f3.y, f3.z), n3.set(h4, b2, m3).normalize(), u2.push(n3.x, n3.y, n3.z), d2.push(e3, 1 - g3), l3.push(p2++);
          }
          m2.push(l3);
        }
        for (let i3 = 0; i3 < s2; i3++) for (let s3 = 0; s3 < r2; s3++) {
          const n4 = m2[s3][i3], a3 = m2[s3 + 1][i3], o3 = m2[s3 + 1][i3 + 1], h3 = m2[s3][i3 + 1];
          (t2 > 0 || 0 !== s3) && (l2.push(n4, a3, h3), x2 += 3), (e2 > 0 || s3 !== r2 - 1) && (l2.push(a3, o3, h3), x2 += 3);
        }
        h2.addGroup(g2, x2, 0), g2 += x2;
      }(), false === n2 && (t2 > 0 && f2(true), e2 > 0 && f2(false)), this.setIndex(l2), this.setAttribute("position", new kn(c2, 3)), this.setAttribute("normal", new kn(u2, 3)), this.setAttribute("uv", new kn(d2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _bh(t2.radiusTop, t2.radiusBottom, t2.height, t2.radialSegments, t2.heightSegments, t2.openEnded, t2.thetaStart, t2.thetaLength);
    }
  };
  var vh = class _vh extends bh {
    constructor(t2 = 1, e2 = 1, i2 = 32, s2 = 1, r2 = false, n2 = 0, a2 = 2 * Math.PI) {
      super(0, t2, e2, i2, s2, r2, n2, a2), this.type = "ConeGeometry", this.parameters = { radius: t2, height: e2, radialSegments: i2, heightSegments: s2, openEnded: r2, thetaStart: n2, thetaLength: a2 };
    }
    static fromJSON(t2) {
      return new _vh(t2.radius, t2.height, t2.radialSegments, t2.heightSegments, t2.openEnded, t2.thetaStart, t2.thetaLength);
    }
  };
  var wh = class _wh extends Wn {
    constructor(t2 = [], e2 = [], i2 = 1, s2 = 0) {
      super(), this.type = "PolyhedronGeometry", this.parameters = { vertices: t2, indices: e2, radius: i2, detail: s2 };
      const r2 = [], n2 = [];
      function a2(t3, e3, i3, s3) {
        const r3 = s3 + 1, n3 = [];
        for (let s4 = 0; s4 <= r3; s4++) {
          n3[s4] = [];
          const a3 = t3.clone().lerp(i3, s4 / r3), o3 = e3.clone().lerp(i3, s4 / r3), h3 = r3 - s4;
          for (let t4 = 0; t4 <= h3; t4++) n3[s4][t4] = 0 === t4 && s4 === r3 ? a3 : a3.clone().lerp(o3, t4 / h3);
        }
        for (let t4 = 0; t4 < r3; t4++) for (let e4 = 0; e4 < 2 * (r3 - t4) - 1; e4++) {
          const i4 = Math.floor(e4 / 2);
          e4 % 2 == 0 ? (o2(n3[t4][i4 + 1]), o2(n3[t4 + 1][i4]), o2(n3[t4][i4])) : (o2(n3[t4][i4 + 1]), o2(n3[t4 + 1][i4 + 1]), o2(n3[t4 + 1][i4]));
        }
      }
      function o2(t3) {
        r2.push(t3.x, t3.y, t3.z);
      }
      function h2(e3, i3) {
        const s3 = 3 * e3;
        i3.x = t2[s3 + 0], i3.y = t2[s3 + 1], i3.z = t2[s3 + 2];
      }
      function l2(t3, e3, i3, s3) {
        s3 < 0 && 1 === t3.x && (n2[e3] = t3.x - 1), 0 === i3.x && 0 === i3.z && (n2[e3] = s3 / 2 / Math.PI + 0.5);
      }
      function c2(t3) {
        return Math.atan2(t3.z, -t3.x);
      }
      function u2(t3) {
        return Math.atan2(-t3.y, Math.sqrt(t3.x * t3.x + t3.z * t3.z));
      }
      !function(t3) {
        const i3 = new Ts(), s3 = new Ts(), r3 = new Ts();
        for (let n3 = 0; n3 < e2.length; n3 += 3) h2(e2[n3 + 0], i3), h2(e2[n3 + 1], s3), h2(e2[n3 + 2], r3), a2(i3, s3, r3, t3);
      }(s2), function(t3) {
        const e3 = new Ts();
        for (let i3 = 0; i3 < r2.length; i3 += 3) e3.x = r2[i3 + 0], e3.y = r2[i3 + 1], e3.z = r2[i3 + 2], e3.normalize().multiplyScalar(t3), r2[i3 + 0] = e3.x, r2[i3 + 1] = e3.y, r2[i3 + 2] = e3.z;
      }(i2), function() {
        const t3 = new Ts();
        for (let e3 = 0; e3 < r2.length; e3 += 3) {
          t3.x = r2[e3 + 0], t3.y = r2[e3 + 1], t3.z = r2[e3 + 2];
          const i3 = c2(t3) / 2 / Math.PI + 0.5, s3 = u2(t3) / Math.PI + 0.5;
          n2.push(i3, 1 - s3);
        }
        (function() {
          const t4 = new Ts(), e3 = new Ts(), i3 = new Ts(), s3 = new Ts(), a3 = new _s(), o3 = new _s(), h3 = new _s();
          for (let u3 = 0, d2 = 0; u3 < r2.length; u3 += 9, d2 += 6) {
            t4.set(r2[u3 + 0], r2[u3 + 1], r2[u3 + 2]), e3.set(r2[u3 + 3], r2[u3 + 4], r2[u3 + 5]), i3.set(r2[u3 + 6], r2[u3 + 7], r2[u3 + 8]), a3.set(n2[d2 + 0], n2[d2 + 1]), o3.set(n2[d2 + 2], n2[d2 + 3]), h3.set(n2[d2 + 4], n2[d2 + 5]), s3.copy(t4).add(e3).add(i3).divideScalar(3);
            const p2 = c2(s3);
            l2(a3, d2 + 0, t4, p2), l2(o3, d2 + 2, e3, p2), l2(h3, d2 + 4, i3, p2);
          }
        })(), function() {
          for (let t4 = 0; t4 < n2.length; t4 += 6) {
            const e3 = n2[t4 + 0], i3 = n2[t4 + 2], s3 = n2[t4 + 4], r3 = Math.max(e3, i3, s3), a3 = Math.min(e3, i3, s3);
            r3 > 0.9 && a3 < 0.1 && (e3 < 0.2 && (n2[t4 + 0] += 1), i3 < 0.2 && (n2[t4 + 2] += 1), s3 < 0.2 && (n2[t4 + 4] += 1));
          }
        }();
      }(), this.setAttribute("position", new kn(r2, 3)), this.setAttribute("normal", new kn(r2.slice(), 3)), this.setAttribute("uv", new kn(n2, 2)), 0 === s2 ? this.computeVertexNormals() : this.normalizeNormals();
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _wh(t2.vertices, t2.indices, t2.radius, t2.detail);
    }
  };
  var Mh = class _Mh extends wh {
    constructor(t2 = 1, e2 = 0) {
      const i2 = (1 + Math.sqrt(5)) / 2, s2 = 1 / i2;
      super([-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -s2, -i2, 0, -s2, i2, 0, s2, -i2, 0, s2, i2, -s2, -i2, 0, -s2, i2, 0, s2, -i2, 0, s2, i2, 0, -i2, 0, -s2, i2, 0, -s2, -i2, 0, s2, i2, 0, s2], [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], t2, e2), this.type = "DodecahedronGeometry", this.parameters = { radius: t2, detail: e2 };
    }
    static fromJSON(t2) {
      return new _Mh(t2.radius, t2.detail);
    }
  };
  var Sh = new Ts();
  var _h = new Ts();
  var Ah = new Ts();
  var Th = new $r();
  var zh = class extends Wn {
    constructor(t2 = null, e2 = 1) {
      if (super(), this.type = "EdgesGeometry", this.parameters = { geometry: t2, thresholdAngle: e2 }, null !== t2) {
        const i2 = 4, s2 = Math.pow(10, i2), r2 = Math.cos(ys * e2), n2 = t2.getIndex(), a2 = t2.getAttribute("position"), o2 = n2 ? n2.count : a2.count, h2 = [0, 0, 0], l2 = ["a", "b", "c"], c2 = new Array(3), u2 = {}, d2 = [];
        for (let t3 = 0; t3 < o2; t3 += 3) {
          n2 ? (h2[0] = n2.getX(t3), h2[1] = n2.getX(t3 + 1), h2[2] = n2.getX(t3 + 2)) : (h2[0] = t3, h2[1] = t3 + 1, h2[2] = t3 + 2);
          const { a: e3, b: i3, c: o3 } = Th;
          if (e3.fromBufferAttribute(a2, h2[0]), i3.fromBufferAttribute(a2, h2[1]), o3.fromBufferAttribute(a2, h2[2]), Th.getNormal(Ah), c2[0] = `${Math.round(e3.x * s2)},${Math.round(e3.y * s2)},${Math.round(e3.z * s2)}`, c2[1] = `${Math.round(i3.x * s2)},${Math.round(i3.y * s2)},${Math.round(i3.z * s2)}`, c2[2] = `${Math.round(o3.x * s2)},${Math.round(o3.y * s2)},${Math.round(o3.z * s2)}`, c2[0] !== c2[1] && c2[1] !== c2[2] && c2[2] !== c2[0]) for (let t4 = 0; t4 < 3; t4++) {
            const e4 = (t4 + 1) % 3, i4 = c2[t4], s3 = c2[e4], n3 = Th[l2[t4]], a3 = Th[l2[e4]], o4 = `${i4}_${s3}`, p2 = `${s3}_${i4}`;
            p2 in u2 && u2[p2] ? (Ah.dot(u2[p2].normal) <= r2 && (d2.push(n3.x, n3.y, n3.z), d2.push(a3.x, a3.y, a3.z)), u2[p2] = null) : o4 in u2 || (u2[o4] = { index0: h2[t4], index1: h2[e4], normal: Ah.clone() });
          }
        }
        for (const t3 in u2) if (u2[t3]) {
          const { index0: e3, index1: i3 } = u2[t3];
          Sh.fromBufferAttribute(a2, e3), _h.fromBufferAttribute(a2, i3), d2.push(Sh.x, Sh.y, Sh.z), d2.push(_h.x, _h.y, _h.z);
        }
        this.setAttribute("position", new kn(d2, 3));
      }
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
  };
  var Ch = class {
    constructor() {
      this.type = "Curve", this.arcLengthDivisions = 200, this.needsUpdate = false, this.cacheArcLengths = null;
    }
    getPoint() {
      as("Curve: .getPoint() not implemented.");
    }
    getPointAt(t2, e2) {
      const i2 = this.getUtoTmapping(t2);
      return this.getPoint(i2, e2);
    }
    getPoints(t2 = 5) {
      const e2 = [];
      for (let i2 = 0; i2 <= t2; i2++) e2.push(this.getPoint(i2 / t2));
      return e2;
    }
    getSpacedPoints(t2 = 5) {
      const e2 = [];
      for (let i2 = 0; i2 <= t2; i2++) e2.push(this.getPointAt(i2 / t2));
      return e2;
    }
    getLength() {
      const t2 = this.getLengths();
      return t2[t2.length - 1];
    }
    getLengths(t2 = this.arcLengthDivisions) {
      if (this.cacheArcLengths && this.cacheArcLengths.length === t2 + 1 && !this.needsUpdate) return this.cacheArcLengths;
      this.needsUpdate = false;
      const e2 = [];
      let i2, s2 = this.getPoint(0), r2 = 0;
      e2.push(0);
      for (let n2 = 1; n2 <= t2; n2++) i2 = this.getPoint(n2 / t2), r2 += i2.distanceTo(s2), e2.push(r2), s2 = i2;
      return this.cacheArcLengths = e2, e2;
    }
    updateArcLengths() {
      this.needsUpdate = true, this.getLengths();
    }
    getUtoTmapping(t2, e2 = null) {
      const i2 = this.getLengths();
      let s2 = 0;
      const r2 = i2.length;
      let n2;
      n2 = e2 || t2 * i2[r2 - 1];
      let a2, o2 = 0, h2 = r2 - 1;
      for (; o2 <= h2; ) if (s2 = Math.floor(o2 + (h2 - o2) / 2), a2 = i2[s2] - n2, a2 < 0) o2 = s2 + 1;
      else {
        if (!(a2 > 0)) {
          h2 = s2;
          break;
        }
        h2 = s2 - 1;
      }
      if (s2 = h2, i2[s2] === n2) return s2 / (r2 - 1);
      const l2 = i2[s2];
      return (s2 + (n2 - l2) / (i2[s2 + 1] - l2)) / (r2 - 1);
    }
    getTangent(t2, e2) {
      const i2 = 1e-4;
      let s2 = t2 - i2, r2 = t2 + i2;
      s2 < 0 && (s2 = 0), r2 > 1 && (r2 = 1);
      const n2 = this.getPoint(s2), a2 = this.getPoint(r2), o2 = e2 || (n2.isVector2 ? new _s() : new Ts());
      return o2.copy(a2).sub(n2).normalize(), o2;
    }
    getTangentAt(t2, e2) {
      const i2 = this.getUtoTmapping(t2);
      return this.getTangent(i2, e2);
    }
    computeFrenetFrames(t2, e2 = false) {
      const i2 = new Ts(), s2 = [], r2 = [], n2 = [], a2 = new Ts(), o2 = new Qs();
      for (let e3 = 0; e3 <= t2; e3++) {
        const i3 = e3 / t2;
        s2[e3] = this.getTangentAt(i3, new Ts());
      }
      r2[0] = new Ts(), n2[0] = new Ts();
      let h2 = Number.MAX_VALUE;
      const l2 = Math.abs(s2[0].x), c2 = Math.abs(s2[0].y), u2 = Math.abs(s2[0].z);
      l2 <= h2 && (h2 = l2, i2.set(1, 0, 0)), c2 <= h2 && (h2 = c2, i2.set(0, 1, 0)), u2 <= h2 && i2.set(0, 0, 1), a2.crossVectors(s2[0], i2).normalize(), r2[0].crossVectors(s2[0], a2), n2[0].crossVectors(s2[0], r2[0]);
      for (let e3 = 1; e3 <= t2; e3++) {
        if (r2[e3] = r2[e3 - 1].clone(), n2[e3] = n2[e3 - 1].clone(), a2.crossVectors(s2[e3 - 1], s2[e3]), a2.length() > Number.EPSILON) {
          a2.normalize();
          const t3 = Math.acos(xs(s2[e3 - 1].dot(s2[e3]), -1, 1));
          r2[e3].applyMatrix4(o2.makeRotationAxis(a2, t3));
        }
        n2[e3].crossVectors(s2[e3], r2[e3]);
      }
      if (true === e2) {
        let e3 = Math.acos(xs(r2[0].dot(r2[t2]), -1, 1));
        e3 /= t2, s2[0].dot(a2.crossVectors(r2[0], r2[t2])) > 0 && (e3 = -e3);
        for (let i3 = 1; i3 <= t2; i3++) r2[i3].applyMatrix4(o2.makeRotationAxis(s2[i3], e3 * i3)), n2[i3].crossVectors(s2[i3], r2[i3]);
      }
      return { tangents: s2, normals: r2, binormals: n2 };
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t2) {
      return this.arcLengthDivisions = t2.arcLengthDivisions, this;
    }
    toJSON() {
      const t2 = { metadata: { version: 4.7, type: "Curve", generator: "Curve.toJSON" } };
      return t2.arcLengthDivisions = this.arcLengthDivisions, t2.type = this.type, t2;
    }
    fromJSON(t2) {
      return this.arcLengthDivisions = t2.arcLengthDivisions, this;
    }
  };
  var Ih = class extends Ch {
    constructor(t2 = 0, e2 = 0, i2 = 1, s2 = 1, r2 = 0, n2 = 2 * Math.PI, a2 = false, o2 = 0) {
      super(), this.isEllipseCurve = true, this.type = "EllipseCurve", this.aX = t2, this.aY = e2, this.xRadius = i2, this.yRadius = s2, this.aStartAngle = r2, this.aEndAngle = n2, this.aClockwise = a2, this.aRotation = o2;
    }
    getPoint(t2, e2 = new _s()) {
      const i2 = e2, s2 = 2 * Math.PI;
      let r2 = this.aEndAngle - this.aStartAngle;
      const n2 = Math.abs(r2) < Number.EPSILON;
      for (; r2 < 0; ) r2 += s2;
      for (; r2 > s2; ) r2 -= s2;
      r2 < Number.EPSILON && (r2 = n2 ? 0 : s2), true !== this.aClockwise || n2 || (r2 === s2 ? r2 = -s2 : r2 -= s2);
      const a2 = this.aStartAngle + t2 * r2;
      let o2 = this.aX + this.xRadius * Math.cos(a2), h2 = this.aY + this.yRadius * Math.sin(a2);
      if (0 !== this.aRotation) {
        const t3 = Math.cos(this.aRotation), e3 = Math.sin(this.aRotation), i3 = o2 - this.aX, s3 = h2 - this.aY;
        o2 = i3 * t3 - s3 * e3 + this.aX, h2 = i3 * e3 + s3 * t3 + this.aY;
      }
      return i2.set(o2, h2);
    }
    copy(t2) {
      return super.copy(t2), this.aX = t2.aX, this.aY = t2.aY, this.xRadius = t2.xRadius, this.yRadius = t2.yRadius, this.aStartAngle = t2.aStartAngle, this.aEndAngle = t2.aEndAngle, this.aClockwise = t2.aClockwise, this.aRotation = t2.aRotation, this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.aX = this.aX, t2.aY = this.aY, t2.xRadius = this.xRadius, t2.yRadius = this.yRadius, t2.aStartAngle = this.aStartAngle, t2.aEndAngle = this.aEndAngle, t2.aClockwise = this.aClockwise, t2.aRotation = this.aRotation, t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.aX = t2.aX, this.aY = t2.aY, this.xRadius = t2.xRadius, this.yRadius = t2.yRadius, this.aStartAngle = t2.aStartAngle, this.aEndAngle = t2.aEndAngle, this.aClockwise = t2.aClockwise, this.aRotation = t2.aRotation, this;
    }
  };
  var Bh = class extends Ih {
    constructor(t2, e2, i2, s2, r2, n2) {
      super(t2, e2, i2, i2, s2, r2, n2), this.isArcCurve = true, this.type = "ArcCurve";
    }
  };
  function kh() {
    let t2 = 0, e2 = 0, i2 = 0, s2 = 0;
    function r2(r3, n2, a2, o2) {
      t2 = r3, e2 = a2, i2 = -3 * r3 + 3 * n2 - 2 * a2 - o2, s2 = 2 * r3 - 2 * n2 + a2 + o2;
    }
    return { initCatmullRom: function(t3, e3, i3, s3, n2) {
      r2(e3, i3, n2 * (i3 - t3), n2 * (s3 - e3));
    }, initNonuniformCatmullRom: function(t3, e3, i3, s3, n2, a2, o2) {
      let h2 = (e3 - t3) / n2 - (i3 - t3) / (n2 + a2) + (i3 - e3) / a2, l2 = (i3 - e3) / a2 - (s3 - e3) / (a2 + o2) + (s3 - i3) / o2;
      h2 *= a2, l2 *= a2, r2(e3, i3, h2, l2);
    }, calc: function(r3) {
      const n2 = r3 * r3;
      return t2 + e2 * r3 + i2 * n2 + s2 * (n2 * r3);
    } };
  }
  var Oh = new Ts();
  var Ph = new Ts();
  var Rh = new kh();
  var Nh = new kh();
  var Vh = new kh();
  var Eh = class extends Ch {
    constructor(t2 = [], e2 = false, i2 = "centripetal", s2 = 0.5) {
      super(), this.isCatmullRomCurve3 = true, this.type = "CatmullRomCurve3", this.points = t2, this.closed = e2, this.curveType = i2, this.tension = s2;
    }
    getPoint(t2, e2 = new Ts()) {
      const i2 = e2, s2 = this.points, r2 = s2.length, n2 = (r2 - (this.closed ? 0 : 1)) * t2;
      let a2, o2, h2 = Math.floor(n2), l2 = n2 - h2;
      this.closed ? h2 += h2 > 0 ? 0 : (Math.floor(Math.abs(h2) / r2) + 1) * r2 : 0 === l2 && h2 === r2 - 1 && (h2 = r2 - 2, l2 = 1), this.closed || h2 > 0 ? a2 = s2[(h2 - 1) % r2] : (Ph.subVectors(s2[0], s2[1]).add(s2[0]), a2 = Ph);
      const c2 = s2[h2 % r2], u2 = s2[(h2 + 1) % r2];
      if (this.closed || h2 + 2 < r2 ? o2 = s2[(h2 + 2) % r2] : (Oh.subVectors(s2[r2 - 1], s2[r2 - 2]).add(s2[r2 - 1]), o2 = Oh), "centripetal" === this.curveType || "chordal" === this.curveType) {
        const t3 = "chordal" === this.curveType ? 0.5 : 0.25;
        let e3 = Math.pow(a2.distanceToSquared(c2), t3), i3 = Math.pow(c2.distanceToSquared(u2), t3), s3 = Math.pow(u2.distanceToSquared(o2), t3);
        i3 < 1e-4 && (i3 = 1), e3 < 1e-4 && (e3 = i3), s3 < 1e-4 && (s3 = i3), Rh.initNonuniformCatmullRom(a2.x, c2.x, u2.x, o2.x, e3, i3, s3), Nh.initNonuniformCatmullRom(a2.y, c2.y, u2.y, o2.y, e3, i3, s3), Vh.initNonuniformCatmullRom(a2.z, c2.z, u2.z, o2.z, e3, i3, s3);
      } else "catmullrom" === this.curveType && (Rh.initCatmullRom(a2.x, c2.x, u2.x, o2.x, this.tension), Nh.initCatmullRom(a2.y, c2.y, u2.y, o2.y, this.tension), Vh.initCatmullRom(a2.z, c2.z, u2.z, o2.z, this.tension));
      return i2.set(Rh.calc(l2), Nh.calc(l2), Vh.calc(l2)), i2;
    }
    copy(t2) {
      super.copy(t2), this.points = [];
      for (let e2 = 0, i2 = t2.points.length; e2 < i2; e2++) {
        const i3 = t2.points[e2];
        this.points.push(i3.clone());
      }
      return this.closed = t2.closed, this.curveType = t2.curveType, this.tension = t2.tension, this;
    }
    toJSON() {
      const t2 = super.toJSON();
      t2.points = [];
      for (let e2 = 0, i2 = this.points.length; e2 < i2; e2++) {
        const i3 = this.points[e2];
        t2.points.push(i3.toArray());
      }
      return t2.closed = this.closed, t2.curveType = this.curveType, t2.tension = this.tension, t2;
    }
    fromJSON(t2) {
      super.fromJSON(t2), this.points = [];
      for (let e2 = 0, i2 = t2.points.length; e2 < i2; e2++) {
        const i3 = t2.points[e2];
        this.points.push(new Ts().fromArray(i3));
      }
      return this.closed = t2.closed, this.curveType = t2.curveType, this.tension = t2.tension, this;
    }
  };
  function Lh(t2, e2, i2, s2, r2) {
    const n2 = 0.5 * (s2 - e2), a2 = 0.5 * (r2 - i2), o2 = t2 * t2;
    return (2 * i2 - 2 * s2 + n2 + a2) * (t2 * o2) + (-3 * i2 + 3 * s2 - 2 * n2 - a2) * o2 + n2 * t2 + i2;
  }
  function Fh(t2, e2, i2, s2) {
    return function(t3, e3) {
      const i3 = 1 - t3;
      return i3 * i3 * e3;
    }(t2, e2) + function(t3, e3) {
      return 2 * (1 - t3) * t3 * e3;
    }(t2, i2) + function(t3, e3) {
      return t3 * t3 * e3;
    }(t2, s2);
  }
  function jh(t2, e2, i2, s2, r2) {
    return function(t3, e3) {
      const i3 = 1 - t3;
      return i3 * i3 * i3 * e3;
    }(t2, e2) + function(t3, e3) {
      const i3 = 1 - t3;
      return 3 * i3 * i3 * t3 * e3;
    }(t2, i2) + function(t3, e3) {
      return 3 * (1 - t3) * t3 * t3 * e3;
    }(t2, s2) + function(t3, e3) {
      return t3 * t3 * t3 * e3;
    }(t2, r2);
  }
  var Dh = class extends Ch {
    constructor(t2 = new _s(), e2 = new _s(), i2 = new _s(), s2 = new _s()) {
      super(), this.isCubicBezierCurve = true, this.type = "CubicBezierCurve", this.v0 = t2, this.v1 = e2, this.v2 = i2, this.v3 = s2;
    }
    getPoint(t2, e2 = new _s()) {
      const i2 = e2, s2 = this.v0, r2 = this.v1, n2 = this.v2, a2 = this.v3;
      return i2.set(jh(t2, s2.x, r2.x, n2.x, a2.x), jh(t2, s2.y, r2.y, n2.y, a2.y)), i2;
    }
    copy(t2) {
      return super.copy(t2), this.v0.copy(t2.v0), this.v1.copy(t2.v1), this.v2.copy(t2.v2), this.v3.copy(t2.v3), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.v0 = this.v0.toArray(), t2.v1 = this.v1.toArray(), t2.v2 = this.v2.toArray(), t2.v3 = this.v3.toArray(), t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.v0.fromArray(t2.v0), this.v1.fromArray(t2.v1), this.v2.fromArray(t2.v2), this.v3.fromArray(t2.v3), this;
    }
  };
  var Uh = class extends Ch {
    constructor(t2 = new Ts(), e2 = new Ts(), i2 = new Ts(), s2 = new Ts()) {
      super(), this.isCubicBezierCurve3 = true, this.type = "CubicBezierCurve3", this.v0 = t2, this.v1 = e2, this.v2 = i2, this.v3 = s2;
    }
    getPoint(t2, e2 = new Ts()) {
      const i2 = e2, s2 = this.v0, r2 = this.v1, n2 = this.v2, a2 = this.v3;
      return i2.set(jh(t2, s2.x, r2.x, n2.x, a2.x), jh(t2, s2.y, r2.y, n2.y, a2.y), jh(t2, s2.z, r2.z, n2.z, a2.z)), i2;
    }
    copy(t2) {
      return super.copy(t2), this.v0.copy(t2.v0), this.v1.copy(t2.v1), this.v2.copy(t2.v2), this.v3.copy(t2.v3), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.v0 = this.v0.toArray(), t2.v1 = this.v1.toArray(), t2.v2 = this.v2.toArray(), t2.v3 = this.v3.toArray(), t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.v0.fromArray(t2.v0), this.v1.fromArray(t2.v1), this.v2.fromArray(t2.v2), this.v3.fromArray(t2.v3), this;
    }
  };
  var Wh = class extends Ch {
    constructor(t2 = new _s(), e2 = new _s()) {
      super(), this.isLineCurve = true, this.type = "LineCurve", this.v1 = t2, this.v2 = e2;
    }
    getPoint(t2, e2 = new _s()) {
      const i2 = e2;
      return 1 === t2 ? i2.copy(this.v2) : (i2.copy(this.v2).sub(this.v1), i2.multiplyScalar(t2).add(this.v1)), i2;
    }
    getPointAt(t2, e2) {
      return this.getPoint(t2, e2);
    }
    getTangent(t2, e2 = new _s()) {
      return e2.subVectors(this.v2, this.v1).normalize();
    }
    getTangentAt(t2, e2) {
      return this.getTangent(t2, e2);
    }
    copy(t2) {
      return super.copy(t2), this.v1.copy(t2.v1), this.v2.copy(t2.v2), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.v1 = this.v1.toArray(), t2.v2 = this.v2.toArray(), t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.v1.fromArray(t2.v1), this.v2.fromArray(t2.v2), this;
    }
  };
  var qh = class extends Ch {
    constructor(t2 = new Ts(), e2 = new Ts()) {
      super(), this.isLineCurve3 = true, this.type = "LineCurve3", this.v1 = t2, this.v2 = e2;
    }
    getPoint(t2, e2 = new Ts()) {
      const i2 = e2;
      return 1 === t2 ? i2.copy(this.v2) : (i2.copy(this.v2).sub(this.v1), i2.multiplyScalar(t2).add(this.v1)), i2;
    }
    getPointAt(t2, e2) {
      return this.getPoint(t2, e2);
    }
    getTangent(t2, e2 = new Ts()) {
      return e2.subVectors(this.v2, this.v1).normalize();
    }
    getTangentAt(t2, e2) {
      return this.getTangent(t2, e2);
    }
    copy(t2) {
      return super.copy(t2), this.v1.copy(t2.v1), this.v2.copy(t2.v2), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.v1 = this.v1.toArray(), t2.v2 = this.v2.toArray(), t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.v1.fromArray(t2.v1), this.v2.fromArray(t2.v2), this;
    }
  };
  var Jh = class extends Ch {
    constructor(t2 = new _s(), e2 = new _s(), i2 = new _s()) {
      super(), this.isQuadraticBezierCurve = true, this.type = "QuadraticBezierCurve", this.v0 = t2, this.v1 = e2, this.v2 = i2;
    }
    getPoint(t2, e2 = new _s()) {
      const i2 = e2, s2 = this.v0, r2 = this.v1, n2 = this.v2;
      return i2.set(Fh(t2, s2.x, r2.x, n2.x), Fh(t2, s2.y, r2.y, n2.y)), i2;
    }
    copy(t2) {
      return super.copy(t2), this.v0.copy(t2.v0), this.v1.copy(t2.v1), this.v2.copy(t2.v2), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.v0 = this.v0.toArray(), t2.v1 = this.v1.toArray(), t2.v2 = this.v2.toArray(), t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.v0.fromArray(t2.v0), this.v1.fromArray(t2.v1), this.v2.fromArray(t2.v2), this;
    }
  };
  var Xh = class extends Ch {
    constructor(t2 = new Ts(), e2 = new Ts(), i2 = new Ts()) {
      super(), this.isQuadraticBezierCurve3 = true, this.type = "QuadraticBezierCurve3", this.v0 = t2, this.v1 = e2, this.v2 = i2;
    }
    getPoint(t2, e2 = new Ts()) {
      const i2 = e2, s2 = this.v0, r2 = this.v1, n2 = this.v2;
      return i2.set(Fh(t2, s2.x, r2.x, n2.x), Fh(t2, s2.y, r2.y, n2.y), Fh(t2, s2.z, r2.z, n2.z)), i2;
    }
    copy(t2) {
      return super.copy(t2), this.v0.copy(t2.v0), this.v1.copy(t2.v1), this.v2.copy(t2.v2), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.v0 = this.v0.toArray(), t2.v1 = this.v1.toArray(), t2.v2 = this.v2.toArray(), t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.v0.fromArray(t2.v0), this.v1.fromArray(t2.v1), this.v2.fromArray(t2.v2), this;
    }
  };
  var Yh = class extends Ch {
    constructor(t2 = []) {
      super(), this.isSplineCurve = true, this.type = "SplineCurve", this.points = t2;
    }
    getPoint(t2, e2 = new _s()) {
      const i2 = e2, s2 = this.points, r2 = (s2.length - 1) * t2, n2 = Math.floor(r2), a2 = r2 - n2, o2 = s2[0 === n2 ? n2 : n2 - 1], h2 = s2[n2], l2 = s2[n2 > s2.length - 2 ? s2.length - 1 : n2 + 1], c2 = s2[n2 > s2.length - 3 ? s2.length - 1 : n2 + 2];
      return i2.set(Lh(a2, o2.x, h2.x, l2.x, c2.x), Lh(a2, o2.y, h2.y, l2.y, c2.y)), i2;
    }
    copy(t2) {
      super.copy(t2), this.points = [];
      for (let e2 = 0, i2 = t2.points.length; e2 < i2; e2++) {
        const i3 = t2.points[e2];
        this.points.push(i3.clone());
      }
      return this;
    }
    toJSON() {
      const t2 = super.toJSON();
      t2.points = [];
      for (let e2 = 0, i2 = this.points.length; e2 < i2; e2++) {
        const i3 = this.points[e2];
        t2.points.push(i3.toArray());
      }
      return t2;
    }
    fromJSON(t2) {
      super.fromJSON(t2), this.points = [];
      for (let e2 = 0, i2 = t2.points.length; e2 < i2; e2++) {
        const i3 = t2.points[e2];
        this.points.push(new _s().fromArray(i3));
      }
      return this;
    }
  };
  var Hh = Object.freeze({ __proto__: null, ArcCurve: Bh, CatmullRomCurve3: Eh, CubicBezierCurve: Dh, CubicBezierCurve3: Uh, EllipseCurve: Ih, LineCurve: Wh, LineCurve3: qh, QuadraticBezierCurve: Jh, QuadraticBezierCurve3: Xh, SplineCurve: Yh });
  var Zh = class extends Ch {
    constructor() {
      super(), this.type = "CurvePath", this.curves = [], this.autoClose = false;
    }
    add(t2) {
      this.curves.push(t2);
    }
    closePath() {
      const t2 = this.curves[0].getPoint(0), e2 = this.curves[this.curves.length - 1].getPoint(1);
      if (!t2.equals(e2)) {
        const i2 = true === t2.isVector2 ? "LineCurve" : "LineCurve3";
        this.curves.push(new Hh[i2](e2, t2));
      }
      return this;
    }
    getPoint(t2, e2) {
      const i2 = t2 * this.getLength(), s2 = this.getCurveLengths();
      let r2 = 0;
      for (; r2 < s2.length; ) {
        if (s2[r2] >= i2) {
          const t3 = s2[r2] - i2, n2 = this.curves[r2], a2 = n2.getLength(), o2 = 0 === a2 ? 0 : 1 - t3 / a2;
          return n2.getPointAt(o2, e2);
        }
        r2++;
      }
      return null;
    }
    getLength() {
      const t2 = this.getCurveLengths();
      return t2[t2.length - 1];
    }
    updateArcLengths() {
      this.needsUpdate = true, this.cacheLengths = null, this.getCurveLengths();
    }
    getCurveLengths() {
      if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
      const t2 = [];
      let e2 = 0;
      for (let i2 = 0, s2 = this.curves.length; i2 < s2; i2++) e2 += this.curves[i2].getLength(), t2.push(e2);
      return this.cacheLengths = t2, t2;
    }
    getSpacedPoints(t2 = 40) {
      const e2 = [];
      for (let i2 = 0; i2 <= t2; i2++) e2.push(this.getPoint(i2 / t2));
      return this.autoClose && e2.push(e2[0]), e2;
    }
    getPoints(t2 = 12) {
      const e2 = [];
      let i2;
      for (let s2 = 0, r2 = this.curves; s2 < r2.length; s2++) {
        const n2 = r2[s2], a2 = n2.isEllipseCurve ? 2 * t2 : n2.isLineCurve || n2.isLineCurve3 ? 1 : n2.isSplineCurve ? t2 * n2.points.length : t2, o2 = n2.getPoints(a2);
        for (let t3 = 0; t3 < o2.length; t3++) {
          const s3 = o2[t3];
          i2 && i2.equals(s3) || (e2.push(s3), i2 = s3);
        }
      }
      return this.autoClose && e2.length > 1 && !e2[e2.length - 1].equals(e2[0]) && e2.push(e2[0]), e2;
    }
    copy(t2) {
      super.copy(t2), this.curves = [];
      for (let e2 = 0, i2 = t2.curves.length; e2 < i2; e2++) {
        const i3 = t2.curves[e2];
        this.curves.push(i3.clone());
      }
      return this.autoClose = t2.autoClose, this;
    }
    toJSON() {
      const t2 = super.toJSON();
      t2.autoClose = this.autoClose, t2.curves = [];
      for (let e2 = 0, i2 = this.curves.length; e2 < i2; e2++) {
        const i3 = this.curves[e2];
        t2.curves.push(i3.toJSON());
      }
      return t2;
    }
    fromJSON(t2) {
      super.fromJSON(t2), this.autoClose = t2.autoClose, this.curves = [];
      for (let e2 = 0, i2 = t2.curves.length; e2 < i2; e2++) {
        const i3 = t2.curves[e2];
        this.curves.push(new Hh[i3.type]().fromJSON(i3));
      }
      return this;
    }
  };
  var Gh = class extends Zh {
    constructor(t2) {
      super(), this.type = "Path", this.currentPoint = new _s(), t2 && this.setFromPoints(t2);
    }
    setFromPoints(t2) {
      this.moveTo(t2[0].x, t2[0].y);
      for (let e2 = 1, i2 = t2.length; e2 < i2; e2++) this.lineTo(t2[e2].x, t2[e2].y);
      return this;
    }
    moveTo(t2, e2) {
      return this.currentPoint.set(t2, e2), this;
    }
    lineTo(t2, e2) {
      const i2 = new Wh(this.currentPoint.clone(), new _s(t2, e2));
      return this.curves.push(i2), this.currentPoint.set(t2, e2), this;
    }
    quadraticCurveTo(t2, e2, i2, s2) {
      const r2 = new Jh(this.currentPoint.clone(), new _s(t2, e2), new _s(i2, s2));
      return this.curves.push(r2), this.currentPoint.set(i2, s2), this;
    }
    bezierCurveTo(t2, e2, i2, s2, r2, n2) {
      const a2 = new Dh(this.currentPoint.clone(), new _s(t2, e2), new _s(i2, s2), new _s(r2, n2));
      return this.curves.push(a2), this.currentPoint.set(r2, n2), this;
    }
    splineThru(t2) {
      const e2 = [this.currentPoint.clone()].concat(t2), i2 = new Yh(e2);
      return this.curves.push(i2), this.currentPoint.copy(t2[t2.length - 1]), this;
    }
    arc(t2, e2, i2, s2, r2, n2) {
      const a2 = this.currentPoint.x, o2 = this.currentPoint.y;
      return this.absarc(t2 + a2, e2 + o2, i2, s2, r2, n2), this;
    }
    absarc(t2, e2, i2, s2, r2, n2) {
      return this.absellipse(t2, e2, i2, i2, s2, r2, n2), this;
    }
    ellipse(t2, e2, i2, s2, r2, n2, a2, o2) {
      const h2 = this.currentPoint.x, l2 = this.currentPoint.y;
      return this.absellipse(t2 + h2, e2 + l2, i2, s2, r2, n2, a2, o2), this;
    }
    absellipse(t2, e2, i2, s2, r2, n2, a2, o2) {
      const h2 = new Ih(t2, e2, i2, s2, r2, n2, a2, o2);
      if (this.curves.length > 0) {
        const t3 = h2.getPoint(0);
        t3.equals(this.currentPoint) || this.lineTo(t3.x, t3.y);
      }
      this.curves.push(h2);
      const l2 = h2.getPoint(1);
      return this.currentPoint.copy(l2), this;
    }
    copy(t2) {
      return super.copy(t2), this.currentPoint.copy(t2.currentPoint), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.currentPoint = this.currentPoint.toArray(), t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.currentPoint.fromArray(t2.currentPoint), this;
    }
  };
  var $h = class extends Gh {
    constructor(t2) {
      super(t2), this.uuid = fs(), this.type = "Shape", this.holes = [];
    }
    getPointsHoles(t2) {
      const e2 = [];
      for (let i2 = 0, s2 = this.holes.length; i2 < s2; i2++) e2[i2] = this.holes[i2].getPoints(t2);
      return e2;
    }
    extractPoints(t2) {
      return { shape: this.getPoints(t2), holes: this.getPointsHoles(t2) };
    }
    copy(t2) {
      super.copy(t2), this.holes = [];
      for (let e2 = 0, i2 = t2.holes.length; e2 < i2; e2++) {
        const i3 = t2.holes[e2];
        this.holes.push(i3.clone());
      }
      return this;
    }
    toJSON() {
      const t2 = super.toJSON();
      t2.uuid = this.uuid, t2.holes = [];
      for (let e2 = 0, i2 = this.holes.length; e2 < i2; e2++) {
        const i3 = this.holes[e2];
        t2.holes.push(i3.toJSON());
      }
      return t2;
    }
    fromJSON(t2) {
      super.fromJSON(t2), this.uuid = t2.uuid, this.holes = [];
      for (let e2 = 0, i2 = t2.holes.length; e2 < i2; e2++) {
        const i3 = t2.holes[e2];
        this.holes.push(new Gh().fromJSON(i3));
      }
      return this;
    }
  };
  function Qh(t2, e2, i2 = 2) {
    const s2 = e2 && e2.length, r2 = s2 ? e2[0] * i2 : t2.length;
    let n2 = Kh(t2, 0, r2, i2, true);
    const a2 = [];
    if (!n2 || n2.next === n2.prev) return a2;
    let o2, h2, l2;
    if (s2 && (n2 = function(t3, e3, i3, s3) {
      const r3 = [];
      for (let i4 = 0, n3 = e3.length; i4 < n3; i4++) {
        const a3 = Kh(t3, e3[i4] * s3, i4 < n3 - 1 ? e3[i4 + 1] * s3 : t3.length, s3, false);
        a3 === a3.next && (a3.steiner = true), r3.push(cl(a3));
      }
      r3.sort(al);
      for (let t4 = 0; t4 < r3.length; t4++) i3 = ol(r3[t4], i3);
      return i3;
    }(t2, e2, n2, i2)), t2.length > 80 * i2) {
      o2 = t2[0], h2 = t2[1];
      let e3 = o2, s3 = h2;
      for (let n3 = i2; n3 < r2; n3 += i2) {
        const i3 = t2[n3], r3 = t2[n3 + 1];
        i3 < o2 && (o2 = i3), r3 < h2 && (h2 = r3), i3 > e3 && (e3 = i3), r3 > s3 && (s3 = r3);
      }
      l2 = Math.max(e3 - o2, s3 - h2), l2 = 0 !== l2 ? 32767 / l2 : 0;
    }
    return el(n2, a2, i2, o2, h2, l2, 0), a2;
  }
  function Kh(t2, e2, i2, s2, r2) {
    let n2;
    if (r2 === function(t3, e3, i3, s3) {
      let r3 = 0;
      for (let n3 = e3, a2 = i3 - s3; n3 < i3; n3 += s3) r3 += (t3[a2] - t3[n3]) * (t3[n3 + 1] + t3[a2 + 1]), a2 = n3;
      return r3;
    }(t2, e2, i2, s2) > 0) for (let r3 = e2; r3 < i2; r3 += s2) n2 = wl(r3 / s2 | 0, t2[r3], t2[r3 + 1], n2);
    else for (let r3 = i2 - s2; r3 >= e2; r3 -= s2) n2 = wl(r3 / s2 | 0, t2[r3], t2[r3 + 1], n2);
    return n2 && yl(n2, n2.next) && (Ml(n2), n2 = n2.next), n2;
  }
  function tl(t2, e2) {
    if (!t2) return t2;
    e2 || (e2 = t2);
    let i2, s2 = t2;
    do {
      if (i2 = false, s2.steiner || !yl(s2, s2.next) && 0 !== ml(s2.prev, s2, s2.next)) s2 = s2.next;
      else {
        if (Ml(s2), s2 = e2 = s2.prev, s2 === s2.next) break;
        i2 = true;
      }
    } while (i2 || s2 !== e2);
    return e2;
  }
  function el(t2, e2, i2, s2, r2, n2, a2) {
    if (!t2) return;
    !a2 && n2 && function(t3, e3, i3, s3) {
      let r3 = t3;
      do {
        0 === r3.z && (r3.z = ll(r3.x, r3.y, e3, i3, s3)), r3.prevZ = r3.prev, r3.nextZ = r3.next, r3 = r3.next;
      } while (r3 !== t3);
      r3.prevZ.nextZ = null, r3.prevZ = null, function(t4) {
        let e4, i4 = 1;
        do {
          let s4, r4 = t4;
          t4 = null;
          let n3 = null;
          for (e4 = 0; r4; ) {
            e4++;
            let a3 = r4, o3 = 0;
            for (let t5 = 0; t5 < i4 && (o3++, a3 = a3.nextZ, a3); t5++) ;
            let h2 = i4;
            for (; o3 > 0 || h2 > 0 && a3; ) 0 !== o3 && (0 === h2 || !a3 || r4.z <= a3.z) ? (s4 = r4, r4 = r4.nextZ, o3--) : (s4 = a3, a3 = a3.nextZ, h2--), n3 ? n3.nextZ = s4 : t4 = s4, s4.prevZ = n3, n3 = s4;
            r4 = a3;
          }
          n3.nextZ = null, i4 *= 2;
        } while (e4 > 1);
      }(r3);
    }(t2, s2, r2, n2);
    let o2 = t2;
    for (; t2.prev !== t2.next; ) {
      const h2 = t2.prev, l2 = t2.next;
      if (n2 ? sl(t2, s2, r2, n2) : il(t2)) e2.push(h2.i, t2.i, l2.i), Ml(t2), t2 = l2.next, o2 = l2.next;
      else if ((t2 = l2) === o2) {
        a2 ? 1 === a2 ? el(t2 = rl(tl(t2), e2), e2, i2, s2, r2, n2, 2) : 2 === a2 && nl(t2, e2, i2, s2, r2, n2) : el(tl(t2), e2, i2, s2, r2, n2, 1);
        break;
      }
    }
  }
  function il(t2) {
    const e2 = t2.prev, i2 = t2, s2 = t2.next;
    if (ml(e2, i2, s2) >= 0) return false;
    const r2 = e2.x, n2 = i2.x, a2 = s2.x, o2 = e2.y, h2 = i2.y, l2 = s2.y, c2 = Math.min(r2, n2, a2), u2 = Math.min(o2, h2, l2), d2 = Math.max(r2, n2, a2), p2 = Math.max(o2, h2, l2);
    let m2 = s2.next;
    for (; m2 !== e2; ) {
      if (m2.x >= c2 && m2.x <= d2 && m2.y >= u2 && m2.y <= p2 && dl(r2, o2, n2, h2, a2, l2, m2.x, m2.y) && ml(m2.prev, m2, m2.next) >= 0) return false;
      m2 = m2.next;
    }
    return true;
  }
  function sl(t2, e2, i2, s2) {
    const r2 = t2.prev, n2 = t2, a2 = t2.next;
    if (ml(r2, n2, a2) >= 0) return false;
    const o2 = r2.x, h2 = n2.x, l2 = a2.x, c2 = r2.y, u2 = n2.y, d2 = a2.y, p2 = Math.min(o2, h2, l2), m2 = Math.min(c2, u2, d2), y2 = Math.max(o2, h2, l2), g2 = Math.max(c2, u2, d2), f2 = ll(p2, m2, e2, i2, s2), x2 = ll(y2, g2, e2, i2, s2);
    let b2 = t2.prevZ, v2 = t2.nextZ;
    for (; b2 && b2.z >= f2 && v2 && v2.z <= x2; ) {
      if (b2.x >= p2 && b2.x <= y2 && b2.y >= m2 && b2.y <= g2 && b2 !== r2 && b2 !== a2 && dl(o2, c2, h2, u2, l2, d2, b2.x, b2.y) && ml(b2.prev, b2, b2.next) >= 0) return false;
      if (b2 = b2.prevZ, v2.x >= p2 && v2.x <= y2 && v2.y >= m2 && v2.y <= g2 && v2 !== r2 && v2 !== a2 && dl(o2, c2, h2, u2, l2, d2, v2.x, v2.y) && ml(v2.prev, v2, v2.next) >= 0) return false;
      v2 = v2.nextZ;
    }
    for (; b2 && b2.z >= f2; ) {
      if (b2.x >= p2 && b2.x <= y2 && b2.y >= m2 && b2.y <= g2 && b2 !== r2 && b2 !== a2 && dl(o2, c2, h2, u2, l2, d2, b2.x, b2.y) && ml(b2.prev, b2, b2.next) >= 0) return false;
      b2 = b2.prevZ;
    }
    for (; v2 && v2.z <= x2; ) {
      if (v2.x >= p2 && v2.x <= y2 && v2.y >= m2 && v2.y <= g2 && v2 !== r2 && v2 !== a2 && dl(o2, c2, h2, u2, l2, d2, v2.x, v2.y) && ml(v2.prev, v2, v2.next) >= 0) return false;
      v2 = v2.nextZ;
    }
    return true;
  }
  function rl(t2, e2) {
    let i2 = t2;
    do {
      const s2 = i2.prev, r2 = i2.next.next;
      !yl(s2, r2) && gl(s2, i2, i2.next, r2) && bl(s2, r2) && bl(r2, s2) && (e2.push(s2.i, i2.i, r2.i), Ml(i2), Ml(i2.next), i2 = t2 = r2), i2 = i2.next;
    } while (i2 !== t2);
    return tl(i2);
  }
  function nl(t2, e2, i2, s2, r2, n2) {
    let a2 = t2;
    do {
      let t3 = a2.next.next;
      for (; t3 !== a2.prev; ) {
        if (a2.i !== t3.i && pl(a2, t3)) {
          let o2 = vl(a2, t3);
          return a2 = tl(a2, a2.next), o2 = tl(o2, o2.next), el(a2, e2, i2, s2, r2, n2, 0), void el(o2, e2, i2, s2, r2, n2, 0);
        }
        t3 = t3.next;
      }
      a2 = a2.next;
    } while (a2 !== t2);
  }
  function al(t2, e2) {
    let i2 = t2.x - e2.x;
    if (0 === i2 && (i2 = t2.y - e2.y, 0 === i2)) {
      i2 = (t2.next.y - t2.y) / (t2.next.x - t2.x) - (e2.next.y - e2.y) / (e2.next.x - e2.x);
    }
    return i2;
  }
  function ol(t2, e2) {
    const i2 = function(t3, e3) {
      let i3 = e3;
      const s3 = t3.x, r2 = t3.y;
      let n2, a2 = -1 / 0;
      if (yl(t3, i3)) return i3;
      do {
        if (yl(t3, i3.next)) return i3.next;
        if (r2 <= i3.y && r2 >= i3.next.y && i3.next.y !== i3.y) {
          const t4 = i3.x + (r2 - i3.y) * (i3.next.x - i3.x) / (i3.next.y - i3.y);
          if (t4 <= s3 && t4 > a2 && (a2 = t4, n2 = i3.x < i3.next.x ? i3 : i3.next, t4 === s3)) return n2;
        }
        i3 = i3.next;
      } while (i3 !== e3);
      if (!n2) return null;
      const o2 = n2, h2 = n2.x, l2 = n2.y;
      let c2 = 1 / 0;
      i3 = n2;
      do {
        if (s3 >= i3.x && i3.x >= h2 && s3 !== i3.x && ul(r2 < l2 ? s3 : a2, r2, h2, l2, r2 < l2 ? a2 : s3, r2, i3.x, i3.y)) {
          const e4 = Math.abs(r2 - i3.y) / (s3 - i3.x);
          bl(i3, t3) && (e4 < c2 || e4 === c2 && (i3.x > n2.x || i3.x === n2.x && hl(n2, i3))) && (n2 = i3, c2 = e4);
        }
        i3 = i3.next;
      } while (i3 !== o2);
      return n2;
    }(t2, e2);
    if (!i2) return e2;
    const s2 = vl(i2, t2);
    return tl(s2, s2.next), tl(i2, i2.next);
  }
  function hl(t2, e2) {
    return ml(t2.prev, t2, e2.prev) < 0 && ml(e2.next, t2, t2.next) < 0;
  }
  function ll(t2, e2, i2, s2, r2) {
    return (t2 = 1431655765 & ((t2 = 858993459 & ((t2 = 252645135 & ((t2 = 16711935 & ((t2 = (t2 - i2) * r2 | 0) | t2 << 8)) | t2 << 4)) | t2 << 2)) | t2 << 1)) | (e2 = 1431655765 & ((e2 = 858993459 & ((e2 = 252645135 & ((e2 = 16711935 & ((e2 = (e2 - s2) * r2 | 0) | e2 << 8)) | e2 << 4)) | e2 << 2)) | e2 << 1)) << 1;
  }
  function cl(t2) {
    let e2 = t2, i2 = t2;
    do {
      (e2.x < i2.x || e2.x === i2.x && e2.y < i2.y) && (i2 = e2), e2 = e2.next;
    } while (e2 !== t2);
    return i2;
  }
  function ul(t2, e2, i2, s2, r2, n2, a2, o2) {
    return (r2 - a2) * (e2 - o2) >= (t2 - a2) * (n2 - o2) && (t2 - a2) * (s2 - o2) >= (i2 - a2) * (e2 - o2) && (i2 - a2) * (n2 - o2) >= (r2 - a2) * (s2 - o2);
  }
  function dl(t2, e2, i2, s2, r2, n2, a2, o2) {
    return !(t2 === a2 && e2 === o2) && ul(t2, e2, i2, s2, r2, n2, a2, o2);
  }
  function pl(t2, e2) {
    return t2.next.i !== e2.i && t2.prev.i !== e2.i && !function(t3, e3) {
      let i2 = t3;
      do {
        if (i2.i !== t3.i && i2.next.i !== t3.i && i2.i !== e3.i && i2.next.i !== e3.i && gl(i2, i2.next, t3, e3)) return true;
        i2 = i2.next;
      } while (i2 !== t3);
      return false;
    }(t2, e2) && (bl(t2, e2) && bl(e2, t2) && function(t3, e3) {
      let i2 = t3, s2 = false;
      const r2 = (t3.x + e3.x) / 2, n2 = (t3.y + e3.y) / 2;
      do {
        i2.y > n2 != i2.next.y > n2 && i2.next.y !== i2.y && r2 < (i2.next.x - i2.x) * (n2 - i2.y) / (i2.next.y - i2.y) + i2.x && (s2 = !s2), i2 = i2.next;
      } while (i2 !== t3);
      return s2;
    }(t2, e2) && (ml(t2.prev, t2, e2.prev) || ml(t2, e2.prev, e2)) || yl(t2, e2) && ml(t2.prev, t2, t2.next) > 0 && ml(e2.prev, e2, e2.next) > 0);
  }
  function ml(t2, e2, i2) {
    return (e2.y - t2.y) * (i2.x - e2.x) - (e2.x - t2.x) * (i2.y - e2.y);
  }
  function yl(t2, e2) {
    return t2.x === e2.x && t2.y === e2.y;
  }
  function gl(t2, e2, i2, s2) {
    const r2 = xl(ml(t2, e2, i2)), n2 = xl(ml(t2, e2, s2)), a2 = xl(ml(i2, s2, t2)), o2 = xl(ml(i2, s2, e2));
    return r2 !== n2 && a2 !== o2 || (!(0 !== r2 || !fl(t2, i2, e2)) || (!(0 !== n2 || !fl(t2, s2, e2)) || (!(0 !== a2 || !fl(i2, t2, s2)) || !(0 !== o2 || !fl(i2, e2, s2)))));
  }
  function fl(t2, e2, i2) {
    return e2.x <= Math.max(t2.x, i2.x) && e2.x >= Math.min(t2.x, i2.x) && e2.y <= Math.max(t2.y, i2.y) && e2.y >= Math.min(t2.y, i2.y);
  }
  function xl(t2) {
    return t2 > 0 ? 1 : t2 < 0 ? -1 : 0;
  }
  function bl(t2, e2) {
    return ml(t2.prev, t2, t2.next) < 0 ? ml(t2, e2, t2.next) >= 0 && ml(t2, t2.prev, e2) >= 0 : ml(t2, e2, t2.prev) < 0 || ml(t2, t2.next, e2) < 0;
  }
  function vl(t2, e2) {
    const i2 = Sl(t2.i, t2.x, t2.y), s2 = Sl(e2.i, e2.x, e2.y), r2 = t2.next, n2 = e2.prev;
    return t2.next = e2, e2.prev = t2, i2.next = r2, r2.prev = i2, s2.next = i2, i2.prev = s2, n2.next = s2, s2.prev = n2, s2;
  }
  function wl(t2, e2, i2, s2) {
    const r2 = Sl(t2, e2, i2);
    return s2 ? (r2.next = s2.next, r2.prev = s2, s2.next.prev = r2, s2.next = r2) : (r2.prev = r2, r2.next = r2), r2;
  }
  function Ml(t2) {
    t2.next.prev = t2.prev, t2.prev.next = t2.next, t2.prevZ && (t2.prevZ.nextZ = t2.nextZ), t2.nextZ && (t2.nextZ.prevZ = t2.prevZ);
  }
  function Sl(t2, e2, i2) {
    return { i: t2, x: e2, y: i2, prev: null, next: null, z: 0, prevZ: null, nextZ: null, steiner: false };
  }
  var _l = class {
    static triangulate(t2, e2, i2 = 2) {
      return Qh(t2, e2, i2);
    }
  };
  var Al = class _Al {
    static area(t2) {
      const e2 = t2.length;
      let i2 = 0;
      for (let s2 = e2 - 1, r2 = 0; r2 < e2; s2 = r2++) i2 += t2[s2].x * t2[r2].y - t2[r2].x * t2[s2].y;
      return 0.5 * i2;
    }
    static isClockWise(t2) {
      return _Al.area(t2) < 0;
    }
    static triangulateShape(t2, e2) {
      const i2 = [], s2 = [], r2 = [];
      Tl(t2), zl(i2, t2);
      let n2 = t2.length;
      e2.forEach(Tl);
      for (let t3 = 0; t3 < e2.length; t3++) s2.push(n2), n2 += e2[t3].length, zl(i2, e2[t3]);
      const a2 = _l.triangulate(i2, s2);
      for (let t3 = 0; t3 < a2.length; t3 += 3) r2.push(a2.slice(t3, t3 + 3));
      return r2;
    }
  };
  function Tl(t2) {
    const e2 = t2.length;
    e2 > 2 && t2[e2 - 1].equals(t2[0]) && t2.pop();
  }
  function zl(t2, e2) {
    for (let i2 = 0; i2 < e2.length; i2++) t2.push(e2[i2].x), t2.push(e2[i2].y);
  }
  var Cl = class _Cl extends Wn {
    constructor(t2 = new $h([new _s(0.5, 0.5), new _s(-0.5, 0.5), new _s(-0.5, -0.5), new _s(0.5, -0.5)]), e2 = {}) {
      super(), this.type = "ExtrudeGeometry", this.parameters = { shapes: t2, options: e2 }, t2 = Array.isArray(t2) ? t2 : [t2];
      const i2 = this, s2 = [], r2 = [];
      for (let e3 = 0, i3 = t2.length; e3 < i3; e3++) {
        n2(t2[e3]);
      }
      function n2(t3) {
        const n3 = [], a2 = void 0 !== e2.curveSegments ? e2.curveSegments : 12, o2 = void 0 !== e2.steps ? e2.steps : 1, h2 = void 0 !== e2.depth ? e2.depth : 1;
        let l2 = void 0 === e2.bevelEnabled || e2.bevelEnabled, c2 = void 0 !== e2.bevelThickness ? e2.bevelThickness : 0.2, u2 = void 0 !== e2.bevelSize ? e2.bevelSize : c2 - 0.1, d2 = void 0 !== e2.bevelOffset ? e2.bevelOffset : 0, p2 = void 0 !== e2.bevelSegments ? e2.bevelSegments : 3;
        const m2 = e2.extrudePath, y2 = void 0 !== e2.UVGenerator ? e2.UVGenerator : Il;
        let g2, f2, x2, b2, v2, w2 = false;
        if (m2) {
          g2 = m2.getSpacedPoints(o2), w2 = true, l2 = false;
          const t4 = !!m2.isCatmullRomCurve3 && m2.closed;
          f2 = m2.computeFrenetFrames(o2, t4), x2 = new Ts(), b2 = new Ts(), v2 = new Ts();
        }
        l2 || (p2 = 0, c2 = 0, u2 = 0, d2 = 0);
        const M2 = t3.extractPoints(a2);
        let S2 = M2.shape;
        const _2 = M2.holes;
        if (!Al.isClockWise(S2)) {
          S2 = S2.reverse();
          for (let t4 = 0, e3 = _2.length; t4 < e3; t4++) {
            const e4 = _2[t4];
            Al.isClockWise(e4) && (_2[t4] = e4.reverse());
          }
        }
        function A2(t4) {
          const e3 = 1e-10 * 1e-10;
          let i3 = t4[0];
          for (let s3 = 1; s3 <= t4.length; s3++) {
            const r3 = s3 % t4.length, n4 = t4[r3], a3 = n4.x - i3.x, o3 = n4.y - i3.y, h3 = a3 * a3 + o3 * o3, l3 = Math.max(Math.abs(n4.x), Math.abs(n4.y), Math.abs(i3.x), Math.abs(i3.y));
            h3 <= e3 * l3 * l3 ? (t4.splice(r3, 1), s3--) : i3 = n4;
          }
        }
        A2(S2), _2.forEach(A2);
        const T2 = _2.length, z2 = S2;
        for (let t4 = 0; t4 < T2; t4++) {
          const e3 = _2[t4];
          S2 = S2.concat(e3);
        }
        function C2(t4, e3, i3) {
          return e3 || os("ExtrudeGeometry: vec does not exist"), t4.clone().addScaledVector(e3, i3);
        }
        const I2 = S2.length;
        function B2(t4, e3, i3) {
          let s3, r3, n4;
          const a3 = t4.x - e3.x, o3 = t4.y - e3.y, h3 = i3.x - t4.x, l3 = i3.y - t4.y, c3 = a3 * a3 + o3 * o3, u3 = a3 * l3 - o3 * h3;
          if (Math.abs(u3) > Number.EPSILON) {
            const u4 = Math.sqrt(c3), d3 = Math.sqrt(h3 * h3 + l3 * l3), p3 = e3.x - o3 / u4, m3 = e3.y + a3 / u4, y3 = ((i3.x - l3 / d3 - p3) * l3 - (i3.y + h3 / d3 - m3) * h3) / (a3 * l3 - o3 * h3);
            s3 = p3 + a3 * y3 - t4.x, r3 = m3 + o3 * y3 - t4.y;
            const g3 = s3 * s3 + r3 * r3;
            if (g3 <= 2) return new _s(s3, r3);
            n4 = Math.sqrt(g3 / 2);
          } else {
            let t5 = false;
            a3 > Number.EPSILON ? h3 > Number.EPSILON && (t5 = true) : a3 < -Number.EPSILON ? h3 < -Number.EPSILON && (t5 = true) : Math.sign(o3) === Math.sign(l3) && (t5 = true), t5 ? (s3 = -o3, r3 = a3, n4 = Math.sqrt(c3)) : (s3 = a3, r3 = o3, n4 = Math.sqrt(c3 / 2));
          }
          return new _s(s3 / n4, r3 / n4);
        }
        const k2 = [];
        for (let t4 = 0, e3 = z2.length, i3 = e3 - 1, s3 = t4 + 1; t4 < e3; t4++, i3++, s3++) i3 === e3 && (i3 = 0), s3 === e3 && (s3 = 0), k2[t4] = B2(z2[t4], z2[i3], z2[s3]);
        const O2 = [];
        let P2, R2, N2 = k2.concat();
        for (let t4 = 0, e3 = T2; t4 < e3; t4++) {
          const e4 = _2[t4];
          P2 = [];
          for (let t5 = 0, i3 = e4.length, s3 = i3 - 1, r3 = t5 + 1; t5 < i3; t5++, s3++, r3++) s3 === i3 && (s3 = 0), r3 === i3 && (r3 = 0), P2[t5] = B2(e4[t5], e4[s3], e4[r3]);
          O2.push(P2), N2 = N2.concat(P2);
        }
        if (0 === p2) R2 = Al.triangulateShape(z2, _2);
        else {
          const t4 = [], e3 = [];
          for (let i3 = 0; i3 < p2; i3++) {
            const s3 = i3 / p2, r3 = c2 * Math.cos(s3 * Math.PI / 2), n4 = u2 * Math.sin(s3 * Math.PI / 2) + d2;
            for (let e4 = 0, i4 = z2.length; e4 < i4; e4++) {
              const i5 = C2(z2[e4], k2[e4], n4);
              F2(i5.x, i5.y, -r3), 0 === s3 && t4.push(i5);
            }
            for (let t5 = 0, i4 = T2; t5 < i4; t5++) {
              const i5 = _2[t5];
              P2 = O2[t5];
              const a3 = [];
              for (let t6 = 0, e4 = i5.length; t6 < e4; t6++) {
                const e5 = C2(i5[t6], P2[t6], n4);
                F2(e5.x, e5.y, -r3), 0 === s3 && a3.push(e5);
              }
              0 === s3 && e3.push(a3);
            }
          }
          R2 = Al.triangulateShape(t4, e3);
        }
        const V2 = R2.length, E2 = u2 + d2;
        for (let t4 = 0; t4 < I2; t4++) {
          const e3 = l2 ? C2(S2[t4], N2[t4], E2) : S2[t4];
          w2 ? (b2.copy(f2.normals[0]).multiplyScalar(e3.x), x2.copy(f2.binormals[0]).multiplyScalar(e3.y), v2.copy(g2[0]).add(b2).add(x2), F2(v2.x, v2.y, v2.z)) : F2(e3.x, e3.y, 0);
        }
        for (let t4 = 1; t4 <= o2; t4++) for (let e3 = 0; e3 < I2; e3++) {
          const i3 = l2 ? C2(S2[e3], N2[e3], E2) : S2[e3];
          w2 ? (b2.copy(f2.normals[t4]).multiplyScalar(i3.x), x2.copy(f2.binormals[t4]).multiplyScalar(i3.y), v2.copy(g2[t4]).add(b2).add(x2), F2(v2.x, v2.y, v2.z)) : F2(i3.x, i3.y, h2 / o2 * t4);
        }
        for (let t4 = p2 - 1; t4 >= 0; t4--) {
          const e3 = t4 / p2, i3 = c2 * Math.cos(e3 * Math.PI / 2), s3 = u2 * Math.sin(e3 * Math.PI / 2) + d2;
          for (let t5 = 0, e4 = z2.length; t5 < e4; t5++) {
            const e5 = C2(z2[t5], k2[t5], s3);
            F2(e5.x, e5.y, h2 + i3);
          }
          for (let t5 = 0, e4 = _2.length; t5 < e4; t5++) {
            const e5 = _2[t5];
            P2 = O2[t5];
            for (let t6 = 0, r3 = e5.length; t6 < r3; t6++) {
              const r4 = C2(e5[t6], P2[t6], s3);
              w2 ? F2(r4.x, r4.y + g2[o2 - 1].y, g2[o2 - 1].x + i3) : F2(r4.x, r4.y, h2 + i3);
            }
          }
        }
        function L2(t4, e3) {
          let i3 = t4.length;
          for (; --i3 >= 0; ) {
            const s3 = i3;
            let r3 = i3 - 1;
            r3 < 0 && (r3 = t4.length - 1);
            for (let t5 = 0, i4 = o2 + 2 * p2; t5 < i4; t5++) {
              const i5 = I2 * t5, n4 = I2 * (t5 + 1);
              D2(e3 + s3 + i5, e3 + r3 + i5, e3 + r3 + n4, e3 + s3 + n4);
            }
          }
        }
        function F2(t4, e3, i3) {
          n3.push(t4), n3.push(e3), n3.push(i3);
        }
        function j2(t4, e3, r3) {
          U2(t4), U2(e3), U2(r3);
          const n4 = s2.length / 3, a3 = y2.generateTopUV(i2, s2, n4 - 3, n4 - 2, n4 - 1);
          W2(a3[0]), W2(a3[1]), W2(a3[2]);
        }
        function D2(t4, e3, r3, n4) {
          U2(t4), U2(e3), U2(n4), U2(e3), U2(r3), U2(n4);
          const a3 = s2.length / 3, o3 = y2.generateSideWallUV(i2, s2, a3 - 6, a3 - 3, a3 - 2, a3 - 1);
          W2(o3[0]), W2(o3[1]), W2(o3[3]), W2(o3[1]), W2(o3[2]), W2(o3[3]);
        }
        function U2(t4) {
          s2.push(n3[3 * t4 + 0]), s2.push(n3[3 * t4 + 1]), s2.push(n3[3 * t4 + 2]);
        }
        function W2(t4) {
          r2.push(t4.x), r2.push(t4.y);
        }
        !function() {
          const t4 = s2.length / 3;
          if (l2) {
            let t5 = 0, e3 = I2 * t5;
            for (let t6 = 0; t6 < V2; t6++) {
              const i3 = R2[t6];
              j2(i3[2] + e3, i3[1] + e3, i3[0] + e3);
            }
            t5 = o2 + 2 * p2, e3 = I2 * t5;
            for (let t6 = 0; t6 < V2; t6++) {
              const i3 = R2[t6];
              j2(i3[0] + e3, i3[1] + e3, i3[2] + e3);
            }
          } else {
            for (let t5 = 0; t5 < V2; t5++) {
              const e3 = R2[t5];
              j2(e3[2], e3[1], e3[0]);
            }
            for (let t5 = 0; t5 < V2; t5++) {
              const e3 = R2[t5];
              j2(e3[0] + I2 * o2, e3[1] + I2 * o2, e3[2] + I2 * o2);
            }
          }
          i2.addGroup(t4, s2.length / 3 - t4, 0);
        }(), function() {
          const t4 = s2.length / 3;
          let e3 = 0;
          L2(z2, e3), e3 += z2.length;
          for (let t5 = 0, i3 = _2.length; t5 < i3; t5++) {
            const i4 = _2[t5];
            L2(i4, e3), e3 += i4.length;
          }
          i2.addGroup(t4, s2.length / 3 - t4, 1);
        }();
      }
      this.setAttribute("position", new kn(s2, 3)), this.setAttribute("uv", new kn(r2, 2)), this.computeVertexNormals();
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return function(t3, e2, i2) {
        if (i2.shapes = [], Array.isArray(t3)) for (let e3 = 0, s2 = t3.length; e3 < s2; e3++) {
          const s3 = t3[e3];
          i2.shapes.push(s3.uuid);
        }
        else i2.shapes.push(t3.uuid);
        i2.options = Object.assign({}, e2), void 0 !== e2.extrudePath && (i2.options.extrudePath = e2.extrudePath.toJSON());
        return i2;
      }(this.parameters.shapes, this.parameters.options, t2);
    }
    static fromJSON(t2, e2) {
      const i2 = [];
      for (let s3 = 0, r2 = t2.shapes.length; s3 < r2; s3++) {
        const r3 = e2[t2.shapes[s3]];
        i2.push(r3);
      }
      const s2 = t2.options.extrudePath;
      return void 0 !== s2 && (t2.options.extrudePath = new Hh[s2.type]().fromJSON(s2)), new _Cl(i2, t2.options);
    }
  };
  var Il = { generateTopUV: function(t2, e2, i2, s2, r2) {
    const n2 = e2[3 * i2], a2 = e2[3 * i2 + 1], o2 = e2[3 * s2], h2 = e2[3 * s2 + 1], l2 = e2[3 * r2], c2 = e2[3 * r2 + 1];
    return [new _s(n2, a2), new _s(o2, h2), new _s(l2, c2)];
  }, generateSideWallUV: function(t2, e2, i2, s2, r2, n2) {
    const a2 = e2[3 * i2], o2 = e2[3 * i2 + 1], h2 = e2[3 * i2 + 2], l2 = e2[3 * s2], c2 = e2[3 * s2 + 1], u2 = e2[3 * s2 + 2], d2 = e2[3 * r2], p2 = e2[3 * r2 + 1], m2 = e2[3 * r2 + 2], y2 = e2[3 * n2], g2 = e2[3 * n2 + 1], f2 = e2[3 * n2 + 2];
    return Math.abs(o2 - c2) < Math.abs(a2 - l2) ? [new _s(a2, 1 - h2), new _s(l2, 1 - u2), new _s(d2, 1 - m2), new _s(y2, 1 - f2)] : [new _s(o2, 1 - h2), new _s(c2, 1 - u2), new _s(p2, 1 - m2), new _s(g2, 1 - f2)];
  } };
  var Bl = class _Bl extends wh {
    constructor(t2 = 1, e2 = 0) {
      const i2 = (1 + Math.sqrt(5)) / 2;
      super([-1, i2, 0, 1, i2, 0, -1, -i2, 0, 1, -i2, 0, 0, -1, i2, 0, 1, i2, 0, -1, -i2, 0, 1, -i2, i2, 0, -1, i2, 0, 1, -i2, 0, -1, -i2, 0, 1], [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], t2, e2), this.type = "IcosahedronGeometry", this.parameters = { radius: t2, detail: e2 };
    }
    static fromJSON(t2) {
      return new _Bl(t2.radius, t2.detail);
    }
  };
  var kl = class _kl extends Wn {
    constructor(t2 = [new _s(0, -0.5), new _s(0.5, 0), new _s(0, 0.5)], e2 = 12, i2 = 0, s2 = 2 * Math.PI) {
      super(), this.type = "LatheGeometry", this.parameters = { points: t2, segments: e2, phiStart: i2, phiLength: s2 }, e2 = Math.floor(e2), s2 = xs(s2, 0, 2 * Math.PI);
      const r2 = [], n2 = [], a2 = [], o2 = [], h2 = [], l2 = 1 / e2, c2 = new Ts(), u2 = new _s(), d2 = new Ts(), p2 = new Ts(), m2 = new Ts();
      let y2 = 0, g2 = 0;
      for (let e3 = 0; e3 <= t2.length - 1; e3++) switch (e3) {
        case 0:
          y2 = t2[e3 + 1].x - t2[e3].x, g2 = t2[e3 + 1].y - t2[e3].y, d2.x = 1 * g2, d2.y = -y2, d2.z = 0 * g2, m2.copy(d2), d2.normalize(), o2.push(d2.x, d2.y, d2.z);
          break;
        case t2.length - 1:
          o2.push(m2.x, m2.y, m2.z);
          break;
        default:
          y2 = t2[e3 + 1].x - t2[e3].x, g2 = t2[e3 + 1].y - t2[e3].y, d2.x = 1 * g2, d2.y = -y2, d2.z = 0 * g2, p2.copy(d2), d2.x += m2.x, d2.y += m2.y, d2.z += m2.z, d2.normalize(), o2.push(d2.x, d2.y, d2.z), m2.copy(p2);
      }
      for (let r3 = 0; r3 <= e2; r3++) {
        const d3 = i2 + r3 * l2 * s2, p3 = Math.sin(d3), m3 = Math.cos(d3);
        for (let i3 = 0; i3 <= t2.length - 1; i3++) {
          c2.x = t2[i3].x * p3, c2.y = t2[i3].y, c2.z = t2[i3].x * m3, n2.push(c2.x, c2.y, c2.z), u2.x = r3 / e2, u2.y = i3 / (t2.length - 1), a2.push(u2.x, u2.y);
          const s3 = o2[3 * i3 + 0] * p3, l3 = o2[3 * i3 + 1], d4 = o2[3 * i3 + 0] * m3;
          h2.push(s3, l3, d4);
        }
      }
      for (let i3 = 0; i3 < e2; i3++) for (let e3 = 0; e3 < t2.length - 1; e3++) {
        const s3 = e3 + i3 * t2.length, n3 = s3, a3 = s3 + t2.length, o3 = s3 + t2.length + 1, h3 = s3 + 1;
        r2.push(n3, a3, h3), r2.push(o3, h3, a3);
      }
      this.setIndex(r2), this.setAttribute("position", new kn(n2, 3)), this.setAttribute("uv", new kn(a2, 2)), this.setAttribute("normal", new kn(h2, 3));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _kl(t2.points, t2.segments, t2.phiStart, t2.phiLength);
    }
  };
  var Ol = class _Ol extends wh {
    constructor(t2 = 1, e2 = 0) {
      super([1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], t2, e2), this.type = "OctahedronGeometry", this.parameters = { radius: t2, detail: e2 };
    }
    static fromJSON(t2) {
      return new _Ol(t2.radius, t2.detail);
    }
  };
  var Pl = class _Pl extends Wn {
    constructor(t2 = 1, e2 = 1, i2 = 1, s2 = 1) {
      super(), this.type = "PlaneGeometry", this.parameters = { width: t2, height: e2, widthSegments: i2, heightSegments: s2 };
      const r2 = t2 / 2, n2 = e2 / 2, a2 = Math.floor(i2), o2 = Math.floor(s2), h2 = a2 + 1, l2 = o2 + 1, c2 = t2 / a2, u2 = e2 / o2, d2 = [], p2 = [], m2 = [], y2 = [];
      for (let t3 = 0; t3 < l2; t3++) {
        const e3 = t3 * u2 - n2;
        for (let i3 = 0; i3 < h2; i3++) {
          const s3 = i3 * c2 - r2;
          p2.push(s3, -e3, 0), m2.push(0, 0, 1), y2.push(i3 / a2), y2.push(1 - t3 / o2);
        }
      }
      for (let t3 = 0; t3 < o2; t3++) for (let e3 = 0; e3 < a2; e3++) {
        const i3 = e3 + h2 * t3, s3 = e3 + h2 * (t3 + 1), r3 = e3 + 1 + h2 * (t3 + 1), n3 = e3 + 1 + h2 * t3;
        d2.push(i3, s3, n3), d2.push(s3, r3, n3);
      }
      this.setIndex(d2), this.setAttribute("position", new kn(p2, 3)), this.setAttribute("normal", new kn(m2, 3)), this.setAttribute("uv", new kn(y2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _Pl(t2.width, t2.height, t2.widthSegments, t2.heightSegments);
    }
  };
  var Rl = class _Rl extends Wn {
    constructor(t2 = 0.5, e2 = 1, i2 = 32, s2 = 1, r2 = 0, n2 = 2 * Math.PI) {
      super(), this.type = "RingGeometry", this.parameters = { innerRadius: t2, outerRadius: e2, thetaSegments: i2, phiSegments: s2, thetaStart: r2, thetaLength: n2 }, i2 = Math.max(3, i2);
      const a2 = [], o2 = [], h2 = [], l2 = [];
      let c2 = t2;
      const u2 = (e2 - t2) / (s2 = Math.max(1, s2)), d2 = new Ts(), p2 = new _s();
      for (let t3 = 0; t3 <= s2; t3++) {
        for (let t4 = 0; t4 <= i2; t4++) {
          const s3 = r2 + t4 / i2 * n2;
          d2.x = c2 * Math.cos(s3), d2.y = c2 * Math.sin(s3), o2.push(d2.x, d2.y, d2.z), h2.push(0, 0, 1), p2.x = (d2.x / e2 + 1) / 2, p2.y = (d2.y / e2 + 1) / 2, l2.push(p2.x, p2.y);
        }
        c2 += u2;
      }
      for (let t3 = 0; t3 < s2; t3++) {
        const e3 = t3 * (i2 + 1);
        for (let t4 = 0; t4 < i2; t4++) {
          const s3 = t4 + e3, r3 = s3, n3 = s3 + i2 + 1, o3 = s3 + i2 + 2, h3 = s3 + 1;
          a2.push(r3, n3, h3), a2.push(n3, o3, h3);
        }
      }
      this.setIndex(a2), this.setAttribute("position", new kn(o2, 3)), this.setAttribute("normal", new kn(h2, 3)), this.setAttribute("uv", new kn(l2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _Rl(t2.innerRadius, t2.outerRadius, t2.thetaSegments, t2.phiSegments, t2.thetaStart, t2.thetaLength);
    }
  };
  var Nl = class _Nl extends Wn {
    constructor(t2 = new $h([new _s(0, 0.5), new _s(-0.5, -0.5), new _s(0.5, -0.5)]), e2 = 12) {
      super(), this.type = "ShapeGeometry", this.parameters = { shapes: t2, curveSegments: e2 };
      const i2 = [], s2 = [], r2 = [], n2 = [];
      let a2 = 0, o2 = 0;
      if (false === Array.isArray(t2)) h2(t2);
      else for (let e3 = 0; e3 < t2.length; e3++) h2(t2[e3]), this.addGroup(a2, o2, e3), a2 += o2, o2 = 0;
      function h2(t3) {
        const a3 = s2.length / 3, h3 = t3.extractPoints(e2);
        let l2 = h3.shape;
        const c2 = h3.holes;
        false === Al.isClockWise(l2) && (l2 = l2.reverse());
        for (let t4 = 0, e3 = c2.length; t4 < e3; t4++) {
          const e4 = c2[t4];
          true === Al.isClockWise(e4) && (c2[t4] = e4.reverse());
        }
        const u2 = Al.triangulateShape(l2, c2);
        for (let t4 = 0, e3 = c2.length; t4 < e3; t4++) {
          const e4 = c2[t4];
          l2 = l2.concat(e4);
        }
        for (let t4 = 0, e3 = l2.length; t4 < e3; t4++) {
          const e4 = l2[t4];
          s2.push(e4.x, e4.y, 0), r2.push(0, 0, 1), n2.push(e4.x, e4.y);
        }
        for (let t4 = 0, e3 = u2.length; t4 < e3; t4++) {
          const e4 = u2[t4], s3 = e4[0] + a3, r3 = e4[1] + a3, n3 = e4[2] + a3;
          i2.push(s3, r3, n3), o2 += 3;
        }
      }
      this.setIndex(i2), this.setAttribute("position", new kn(s2, 3)), this.setAttribute("normal", new kn(r2, 3)), this.setAttribute("uv", new kn(n2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return function(t3, e2) {
        if (e2.shapes = [], Array.isArray(t3)) for (let i2 = 0, s2 = t3.length; i2 < s2; i2++) {
          const s3 = t3[i2];
          e2.shapes.push(s3.uuid);
        }
        else e2.shapes.push(t3.uuid);
        return e2;
      }(this.parameters.shapes, t2);
    }
    static fromJSON(t2, e2) {
      const i2 = [];
      for (let s2 = 0, r2 = t2.shapes.length; s2 < r2; s2++) {
        const r3 = e2[t2.shapes[s2]];
        i2.push(r3);
      }
      return new _Nl(i2, t2.curveSegments);
    }
  };
  var Vl = class _Vl extends Wn {
    constructor(t2 = 1, e2 = 32, i2 = 16, s2 = 0, r2 = 2 * Math.PI, n2 = 0, a2 = Math.PI) {
      super(), this.type = "SphereGeometry", this.parameters = { radius: t2, widthSegments: e2, heightSegments: i2, phiStart: s2, phiLength: r2, thetaStart: n2, thetaLength: a2 }, e2 = Math.max(3, Math.floor(e2)), i2 = Math.max(2, Math.floor(i2));
      const o2 = Math.min(n2 + a2, Math.PI);
      let h2 = 0;
      const l2 = [], c2 = new Ts(), u2 = new Ts(), d2 = [], p2 = [], m2 = [], y2 = [];
      for (let d3 = 0; d3 <= i2; d3++) {
        const g2 = [], f2 = d3 / i2;
        let x2 = 0;
        0 === d3 && 0 === n2 ? x2 = 0.5 / e2 : d3 === i2 && o2 === Math.PI && (x2 = -0.5 / e2);
        for (let i3 = 0; i3 <= e2; i3++) {
          const o3 = i3 / e2;
          c2.x = -t2 * Math.cos(s2 + o3 * r2) * Math.sin(n2 + f2 * a2), c2.y = t2 * Math.cos(n2 + f2 * a2), c2.z = t2 * Math.sin(s2 + o3 * r2) * Math.sin(n2 + f2 * a2), p2.push(c2.x, c2.y, c2.z), u2.copy(c2).normalize(), m2.push(u2.x, u2.y, u2.z), y2.push(o3 + x2, 1 - f2), g2.push(h2++);
        }
        l2.push(g2);
      }
      for (let t3 = 0; t3 < i2; t3++) for (let s3 = 0; s3 < e2; s3++) {
        const e3 = l2[t3][s3 + 1], r3 = l2[t3][s3], a3 = l2[t3 + 1][s3], h3 = l2[t3 + 1][s3 + 1];
        (0 !== t3 || n2 > 0) && d2.push(e3, r3, h3), (t3 !== i2 - 1 || o2 < Math.PI) && d2.push(r3, a3, h3);
      }
      this.setIndex(d2), this.setAttribute("position", new kn(p2, 3)), this.setAttribute("normal", new kn(m2, 3)), this.setAttribute("uv", new kn(y2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _Vl(t2.radius, t2.widthSegments, t2.heightSegments, t2.phiStart, t2.phiLength, t2.thetaStart, t2.thetaLength);
    }
  };
  var El = class _El extends wh {
    constructor(t2 = 1, e2 = 0) {
      super([1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], t2, e2), this.type = "TetrahedronGeometry", this.parameters = { radius: t2, detail: e2 };
    }
    static fromJSON(t2) {
      return new _El(t2.radius, t2.detail);
    }
  };
  var Ll = class _Ll extends Wn {
    constructor(t2 = 1, e2 = 0.4, i2 = 12, s2 = 48, r2 = 2 * Math.PI, n2 = 0, a2 = 2 * Math.PI) {
      super(), this.type = "TorusGeometry", this.parameters = { radius: t2, tube: e2, radialSegments: i2, tubularSegments: s2, arc: r2, thetaStart: n2, thetaLength: a2 }, i2 = Math.floor(i2), s2 = Math.floor(s2);
      const o2 = [], h2 = [], l2 = [], c2 = [], u2 = new Ts(), d2 = new Ts(), p2 = new Ts();
      for (let o3 = 0; o3 <= i2; o3++) {
        const m2 = n2 + o3 / i2 * a2;
        for (let n3 = 0; n3 <= s2; n3++) {
          const a3 = n3 / s2 * r2;
          d2.x = (t2 + e2 * Math.cos(m2)) * Math.cos(a3), d2.y = (t2 + e2 * Math.cos(m2)) * Math.sin(a3), d2.z = e2 * Math.sin(m2), h2.push(d2.x, d2.y, d2.z), u2.x = t2 * Math.cos(a3), u2.y = t2 * Math.sin(a3), p2.subVectors(d2, u2).normalize(), l2.push(p2.x, p2.y, p2.z), c2.push(n3 / s2), c2.push(o3 / i2);
        }
      }
      for (let t3 = 1; t3 <= i2; t3++) for (let e3 = 1; e3 <= s2; e3++) {
        const i3 = (s2 + 1) * t3 + e3 - 1, r3 = (s2 + 1) * (t3 - 1) + e3 - 1, n3 = (s2 + 1) * (t3 - 1) + e3, a3 = (s2 + 1) * t3 + e3;
        o2.push(i3, r3, a3), o2.push(r3, n3, a3);
      }
      this.setIndex(o2), this.setAttribute("position", new kn(h2, 3)), this.setAttribute("normal", new kn(l2, 3)), this.setAttribute("uv", new kn(c2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _Ll(t2.radius, t2.tube, t2.radialSegments, t2.tubularSegments, t2.arc);
    }
  };
  var Fl = class _Fl extends Wn {
    constructor(t2 = 1, e2 = 0.4, i2 = 64, s2 = 8, r2 = 2, n2 = 3) {
      super(), this.type = "TorusKnotGeometry", this.parameters = { radius: t2, tube: e2, tubularSegments: i2, radialSegments: s2, p: r2, q: n2 }, i2 = Math.floor(i2), s2 = Math.floor(s2);
      const a2 = [], o2 = [], h2 = [], l2 = [], c2 = new Ts(), u2 = new Ts(), d2 = new Ts(), p2 = new Ts(), m2 = new Ts(), y2 = new Ts(), g2 = new Ts();
      for (let a3 = 0; a3 <= i2; ++a3) {
        const x2 = a3 / i2 * r2 * Math.PI * 2;
        f2(x2, r2, n2, t2, d2), f2(x2 + 0.01, r2, n2, t2, p2), y2.subVectors(p2, d2), g2.addVectors(p2, d2), m2.crossVectors(y2, g2), g2.crossVectors(m2, y2), m2.normalize(), g2.normalize();
        for (let t3 = 0; t3 <= s2; ++t3) {
          const r3 = t3 / s2 * Math.PI * 2, n3 = -e2 * Math.cos(r3), p3 = e2 * Math.sin(r3);
          c2.x = d2.x + (n3 * g2.x + p3 * m2.x), c2.y = d2.y + (n3 * g2.y + p3 * m2.y), c2.z = d2.z + (n3 * g2.z + p3 * m2.z), o2.push(c2.x, c2.y, c2.z), u2.subVectors(c2, d2).normalize(), h2.push(u2.x, u2.y, u2.z), l2.push(a3 / i2), l2.push(t3 / s2);
        }
      }
      for (let t3 = 1; t3 <= i2; t3++) for (let e3 = 1; e3 <= s2; e3++) {
        const i3 = (s2 + 1) * (t3 - 1) + (e3 - 1), r3 = (s2 + 1) * t3 + (e3 - 1), n3 = (s2 + 1) * t3 + e3, o3 = (s2 + 1) * (t3 - 1) + e3;
        a2.push(i3, r3, o3), a2.push(r3, n3, o3);
      }
      function f2(t3, e3, i3, s3, r3) {
        const n3 = Math.cos(t3), a3 = Math.sin(t3), o3 = i3 / e3 * t3, h3 = Math.cos(o3);
        r3.x = s3 * (2 + h3) * 0.5 * n3, r3.y = s3 * (2 + h3) * a3 * 0.5, r3.z = s3 * Math.sin(o3) * 0.5;
      }
      this.setIndex(a2), this.setAttribute("position", new kn(o2, 3)), this.setAttribute("normal", new kn(h2, 3)), this.setAttribute("uv", new kn(l2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _Fl(t2.radius, t2.tube, t2.tubularSegments, t2.radialSegments, t2.p, t2.q);
    }
  };
  var jl = class _jl extends Wn {
    constructor(t2 = new Xh(new Ts(-1, -1, 0), new Ts(-1, 1, 0), new Ts(1, 1, 0)), e2 = 64, i2 = 1, s2 = 8, r2 = false) {
      super(), this.type = "TubeGeometry", this.parameters = { path: t2, tubularSegments: e2, radius: i2, radialSegments: s2, closed: r2 };
      const n2 = t2.computeFrenetFrames(e2, r2);
      this.tangents = n2.tangents, this.normals = n2.normals, this.binormals = n2.binormals;
      const a2 = new Ts(), o2 = new Ts(), h2 = new _s();
      let l2 = new Ts();
      const c2 = [], u2 = [], d2 = [], p2 = [];
      function m2(r3) {
        l2 = t2.getPointAt(r3 / e2, l2);
        const h3 = n2.normals[r3], d3 = n2.binormals[r3];
        for (let t3 = 0; t3 <= s2; t3++) {
          const e3 = t3 / s2 * Math.PI * 2, r4 = Math.sin(e3), n3 = -Math.cos(e3);
          o2.x = n3 * h3.x + r4 * d3.x, o2.y = n3 * h3.y + r4 * d3.y, o2.z = n3 * h3.z + r4 * d3.z, o2.normalize(), u2.push(o2.x, o2.y, o2.z), a2.x = l2.x + i2 * o2.x, a2.y = l2.y + i2 * o2.y, a2.z = l2.z + i2 * o2.z, c2.push(a2.x, a2.y, a2.z);
        }
      }
      !function() {
        for (let t3 = 0; t3 < e2; t3++) m2(t3);
        m2(false === r2 ? e2 : 0), function() {
          for (let t3 = 0; t3 <= e2; t3++) for (let i3 = 0; i3 <= s2; i3++) h2.x = t3 / e2, h2.y = i3 / s2, d2.push(h2.x, h2.y);
        }(), function() {
          for (let t3 = 1; t3 <= e2; t3++) for (let e3 = 1; e3 <= s2; e3++) {
            const i3 = (s2 + 1) * (t3 - 1) + (e3 - 1), r3 = (s2 + 1) * t3 + (e3 - 1), n3 = (s2 + 1) * t3 + e3, a3 = (s2 + 1) * (t3 - 1) + e3;
            p2.push(i3, r3, a3), p2.push(r3, n3, a3);
          }
        }();
      }(), this.setIndex(p2), this.setAttribute("position", new kn(c2, 3)), this.setAttribute("normal", new kn(u2, 3)), this.setAttribute("uv", new kn(d2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.path = this.parameters.path.toJSON(), t2;
    }
    static fromJSON(t2) {
      return new _jl(new Hh[t2.path.type]().fromJSON(t2.path), t2.tubularSegments, t2.radius, t2.radialSegments, t2.closed);
    }
  };
  var Dl = class extends Wn {
    constructor(t2 = null) {
      if (super(), this.type = "WireframeGeometry", this.parameters = { geometry: t2 }, null !== t2) {
        const e2 = [], i2 = /* @__PURE__ */ new Set(), s2 = new Ts(), r2 = new Ts();
        if (null !== t2.index) {
          const n2 = t2.attributes.position, a2 = t2.index;
          let o2 = t2.groups;
          0 === o2.length && (o2 = [{ start: 0, count: a2.count, materialIndex: 0 }]);
          for (let t3 = 0, h2 = o2.length; t3 < h2; ++t3) {
            const h3 = o2[t3], l2 = h3.start;
            for (let t4 = l2, o3 = l2 + h3.count; t4 < o3; t4 += 3) for (let o4 = 0; o4 < 3; o4++) {
              const h4 = a2.getX(t4 + o4), l3 = a2.getX(t4 + (o4 + 1) % 3);
              s2.fromBufferAttribute(n2, h4), r2.fromBufferAttribute(n2, l3), true === Ul(s2, r2, i2) && (e2.push(s2.x, s2.y, s2.z), e2.push(r2.x, r2.y, r2.z));
            }
          }
        } else {
          const n2 = t2.attributes.position;
          for (let t3 = 0, a2 = n2.count / 3; t3 < a2; t3++) for (let a3 = 0; a3 < 3; a3++) {
            const o2 = 3 * t3 + a3, h2 = 3 * t3 + (a3 + 1) % 3;
            s2.fromBufferAttribute(n2, o2), r2.fromBufferAttribute(n2, h2), true === Ul(s2, r2, i2) && (e2.push(s2.x, s2.y, s2.z), e2.push(r2.x, r2.y, r2.z));
          }
        }
        this.setAttribute("position", new kn(e2, 3));
      }
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
  };
  function Ul(t2, e2, i2) {
    const s2 = `${t2.x},${t2.y},${t2.z}-${e2.x},${e2.y},${e2.z}`, r2 = `${e2.x},${e2.y},${e2.z}-${t2.x},${t2.y},${t2.z}`;
    return true !== i2.has(s2) && true !== i2.has(r2) && (i2.add(s2), i2.add(r2), true);
  }
  var Wl = Object.freeze({ __proto__: null, BoxGeometry: gh, CapsuleGeometry: fh, CircleGeometry: xh, ConeGeometry: vh, CylinderGeometry: bh, DodecahedronGeometry: Mh, EdgesGeometry: zh, ExtrudeGeometry: Cl, IcosahedronGeometry: Bl, LatheGeometry: kl, OctahedronGeometry: Ol, PlaneGeometry: Pl, PolyhedronGeometry: wh, RingGeometry: Rl, ShapeGeometry: Nl, SphereGeometry: Vl, TetrahedronGeometry: El, TorusGeometry: Ll, TorusKnotGeometry: Fl, TubeGeometry: jl, WireframeGeometry: Dl });
  function Jl(t2) {
    const e2 = {};
    for (const i2 in t2) {
      e2[i2] = {};
      for (const s2 in t2[i2]) {
        const r2 = t2[i2][s2];
        if (Yl(r2)) r2.isRenderTargetTexture ? (as("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e2[i2][s2] = null) : e2[i2][s2] = r2.clone();
        else if (Array.isArray(r2)) if (Yl(r2[0])) {
          const t3 = [];
          for (let e3 = 0, i3 = r2.length; e3 < i3; e3++) t3[e3] = r2[e3].clone();
          e2[i2][s2] = t3;
        } else e2[i2][s2] = r2.slice();
        else e2[i2][s2] = r2;
      }
    }
    return e2;
  }
  function Xl(t2) {
    const e2 = {};
    for (let i2 = 0; i2 < t2.length; i2++) {
      const s2 = Jl(t2[i2]);
      for (const t3 in s2) e2[t3] = s2[t3];
    }
    return e2;
  }
  function Yl(t2) {
    return t2 && (t2.isColor || t2.isMatrix3 || t2.isMatrix4 || t2.isVector2 || t2.isVector3 || t2.isVector4 || t2.isTexture || t2.isQuaternion);
  }
  function Hl(t2) {
    const e2 = t2.getRenderTarget();
    return null === e2 ? t2.outputColorSpace : true === e2.isXRRenderTarget ? e2.texture.colorSpace : Rs.workingColorSpace;
  }
  var Zl = { clone: Jl, merge: Xl };
  var Gl = class extends Zn {
    constructor(t2) {
      super(), this.isShaderMaterial = true, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.fog = false, this.lights = false, this.clipping = false, this.forceSinglePass = true, this.extensions = { clipCullDistance: false, multiDraw: false }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = false, this.glslVersion = null, void 0 !== t2 && this.setValues(t2);
    }
    copy(t2) {
      return super.copy(t2), this.fragmentShader = t2.fragmentShader, this.vertexShader = t2.vertexShader, this.uniforms = Jl(t2.uniforms), this.uniformsGroups = function(t3) {
        const e2 = [];
        for (let i2 = 0; i2 < t3.length; i2++) e2.push(t3[i2].clone());
        return e2;
      }(t2.uniformsGroups), this.defines = Object.assign({}, t2.defines), this.wireframe = t2.wireframe, this.wireframeLinewidth = t2.wireframeLinewidth, this.fog = t2.fog, this.lights = t2.lights, this.clipping = t2.clipping, this.extensions = Object.assign({}, t2.extensions), this.glslVersion = t2.glslVersion, this.defaultAttributeValues = Object.assign({}, t2.defaultAttributeValues), this.index0AttributeName = t2.index0AttributeName, this.uniformsNeedUpdate = t2.uniformsNeedUpdate, this;
    }
    toJSON(t2) {
      const e2 = super.toJSON(t2);
      e2.glslVersion = this.glslVersion, e2.uniforms = {};
      for (const i3 in this.uniforms) {
        const s2 = this.uniforms[i3].value;
        s2 && s2.isTexture ? e2.uniforms[i3] = { type: "t", value: s2.toJSON(t2).uuid } : s2 && s2.isColor ? e2.uniforms[i3] = { type: "c", value: s2.getHex() } : s2 && s2.isVector2 ? e2.uniforms[i3] = { type: "v2", value: s2.toArray() } : s2 && s2.isVector3 ? e2.uniforms[i3] = { type: "v3", value: s2.toArray() } : s2 && s2.isVector4 ? e2.uniforms[i3] = { type: "v4", value: s2.toArray() } : s2 && s2.isMatrix3 ? e2.uniforms[i3] = { type: "m3", value: s2.toArray() } : s2 && s2.isMatrix4 ? e2.uniforms[i3] = { type: "m4", value: s2.toArray() } : e2.uniforms[i3] = { value: s2 };
      }
      Object.keys(this.defines).length > 0 && (e2.defines = this.defines), e2.vertexShader = this.vertexShader, e2.fragmentShader = this.fragmentShader, e2.lights = this.lights, e2.clipping = this.clipping;
      const i2 = {};
      for (const t3 in this.extensions) true === this.extensions[t3] && (i2[t3] = true);
      return Object.keys(i2).length > 0 && (e2.extensions = i2), e2;
    }
  };
  var $l = class extends Gl {
    constructor(t2) {
      super(t2), this.isRawShaderMaterial = true, this.type = "RawShaderMaterial";
    }
  };
  var Ql = class extends Zn {
    constructor(t2) {
      super(), this.isMeshStandardMaterial = true, this.type = "MeshStandardMaterial", this.defines = { STANDARD: "" }, this.color = new Pr(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Pr(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new _s(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new hr(), this.envMapIntensity = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = false, this.fog = true, this.setValues(t2);
    }
    copy(t2) {
      return super.copy(t2), this.defines = { STANDARD: "" }, this.color.copy(t2.color), this.roughness = t2.roughness, this.metalness = t2.metalness, this.map = t2.map, this.lightMap = t2.lightMap, this.lightMapIntensity = t2.lightMapIntensity, this.aoMap = t2.aoMap, this.aoMapIntensity = t2.aoMapIntensity, this.emissive.copy(t2.emissive), this.emissiveMap = t2.emissiveMap, this.emissiveIntensity = t2.emissiveIntensity, this.bumpMap = t2.bumpMap, this.bumpScale = t2.bumpScale, this.normalMap = t2.normalMap, this.normalMapType = t2.normalMapType, this.normalScale.copy(t2.normalScale), this.displacementMap = t2.displacementMap, this.displacementScale = t2.displacementScale, this.displacementBias = t2.displacementBias, this.roughnessMap = t2.roughnessMap, this.metalnessMap = t2.metalnessMap, this.alphaMap = t2.alphaMap, this.envMap = t2.envMap, this.envMapRotation.copy(t2.envMapRotation), this.envMapIntensity = t2.envMapIntensity, this.wireframe = t2.wireframe, this.wireframeLinewidth = t2.wireframeLinewidth, this.wireframeLinecap = t2.wireframeLinecap, this.wireframeLinejoin = t2.wireframeLinejoin, this.flatShading = t2.flatShading, this.fog = t2.fog, this;
    }
  };
  var rc = class extends Zn {
    constructor(t2) {
      super(), this.isMeshDepthMaterial = true, this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.setValues(t2);
    }
    copy(t2) {
      return super.copy(t2), this.depthPacking = t2.depthPacking, this.map = t2.map, this.alphaMap = t2.alphaMap, this.displacementMap = t2.displacementMap, this.displacementScale = t2.displacementScale, this.displacementBias = t2.displacementBias, this.wireframe = t2.wireframe, this.wireframeLinewidth = t2.wireframeLinewidth, this;
    }
  };
  var nc = class extends Zn {
    constructor(t2) {
      super(), this.isMeshDistanceMaterial = true, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(t2);
    }
    copy(t2) {
      return super.copy(t2), this.map = t2.map, this.alphaMap = t2.alphaMap, this.displacementMap = t2.displacementMap, this.displacementScale = t2.displacementScale, this.displacementBias = t2.displacementBias, this;
    }
  };
  function hc(t2, e2) {
    return t2 && t2.constructor !== e2 ? "number" == typeof e2.BYTES_PER_ELEMENT ? new e2(t2) : Array.prototype.slice.call(t2) : t2;
  }
  var pc = class {
    constructor(t2, e2, i2, s2) {
      this.parameterPositions = t2, this._cachedIndex = 0, this.resultBuffer = void 0 !== s2 ? s2 : new e2.constructor(i2), this.sampleValues = e2, this.valueSize = i2, this.settings = null, this.DefaultSettings_ = {};
    }
    evaluate(t2) {
      const e2 = this.parameterPositions;
      let i2 = this._cachedIndex, s2 = e2[i2], r2 = e2[i2 - 1];
      t: {
        e: {
          let n2;
          i: {
            s: if (!(t2 < s2)) {
              for (let n3 = i2 + 2; ; ) {
                if (void 0 === s2) {
                  if (t2 < r2) break s;
                  return i2 = e2.length, this._cachedIndex = i2, this.copySampleValue_(i2 - 1);
                }
                if (i2 === n3) break;
                if (r2 = s2, s2 = e2[++i2], t2 < s2) break e;
              }
              n2 = e2.length;
              break i;
            }
            if (!(t2 >= r2)) {
              const a2 = e2[1];
              t2 < a2 && (i2 = 2, r2 = a2);
              for (let n3 = i2 - 2; ; ) {
                if (void 0 === r2) return this._cachedIndex = 0, this.copySampleValue_(0);
                if (i2 === n3) break;
                if (s2 = r2, r2 = e2[--i2 - 1], t2 >= r2) break e;
              }
              n2 = i2, i2 = 0;
              break i;
            }
            break t;
          }
          for (; i2 < n2; ) {
            const s3 = i2 + n2 >>> 1;
            t2 < e2[s3] ? n2 = s3 : i2 = s3 + 1;
          }
          if (s2 = e2[i2], r2 = e2[i2 - 1], void 0 === r2) return this._cachedIndex = 0, this.copySampleValue_(0);
          if (void 0 === s2) return i2 = e2.length, this._cachedIndex = i2, this.copySampleValue_(i2 - 1);
        }
        this._cachedIndex = i2, this.intervalChanged_(i2, r2, s2);
      }
      return this.interpolate_(i2, r2, t2, s2);
    }
    getSettings_() {
      return this.settings || this.DefaultSettings_;
    }
    copySampleValue_(t2) {
      const e2 = this.resultBuffer, i2 = this.sampleValues, s2 = this.valueSize, r2 = t2 * s2;
      for (let t3 = 0; t3 !== s2; ++t3) e2[t3] = i2[r2 + t3];
      return e2;
    }
    interpolate_() {
      throw new Error("call to abstract method");
    }
    intervalChanged_() {
    }
  };
  var mc = class extends pc {
    constructor(t2, e2, i2, s2) {
      super(t2, e2, i2, s2), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = { endingStart: je, endingEnd: je };
    }
    intervalChanged_(t2, e2, i2) {
      const s2 = this.parameterPositions;
      let r2 = t2 - 2, n2 = t2 + 1, a2 = s2[r2], o2 = s2[n2];
      if (void 0 === a2) switch (this.getSettings_().endingStart) {
        case De:
          r2 = t2, a2 = 2 * e2 - i2;
          break;
        case Ue:
          r2 = s2.length - 2, a2 = e2 + s2[r2] - s2[r2 + 1];
          break;
        default:
          r2 = t2, a2 = i2;
      }
      if (void 0 === o2) switch (this.getSettings_().endingEnd) {
        case De:
          n2 = t2, o2 = 2 * i2 - e2;
          break;
        case Ue:
          n2 = 1, o2 = i2 + s2[1] - s2[0];
          break;
        default:
          n2 = t2 - 1, o2 = e2;
      }
      const h2 = 0.5 * (i2 - e2), l2 = this.valueSize;
      this._weightPrev = h2 / (e2 - a2), this._weightNext = h2 / (o2 - i2), this._offsetPrev = r2 * l2, this._offsetNext = n2 * l2;
    }
    interpolate_(t2, e2, i2, s2) {
      const r2 = this.resultBuffer, n2 = this.sampleValues, a2 = this.valueSize, o2 = t2 * a2, h2 = o2 - a2, l2 = this._offsetPrev, c2 = this._offsetNext, u2 = this._weightPrev, d2 = this._weightNext, p2 = (i2 - e2) / (s2 - e2), m2 = p2 * p2, y2 = m2 * p2, g2 = -u2 * y2 + 2 * u2 * m2 - u2 * p2, f2 = (1 + u2) * y2 + (-1.5 - 2 * u2) * m2 + (-0.5 + u2) * p2 + 1, x2 = (-1 - d2) * y2 + (1.5 + d2) * m2 + 0.5 * p2, b2 = d2 * y2 - d2 * m2;
      for (let t3 = 0; t3 !== a2; ++t3) r2[t3] = g2 * n2[l2 + t3] + f2 * n2[h2 + t3] + x2 * n2[o2 + t3] + b2 * n2[c2 + t3];
      return r2;
    }
  };
  var yc = class extends pc {
    constructor(t2, e2, i2, s2) {
      super(t2, e2, i2, s2);
    }
    interpolate_(t2, e2, i2, s2) {
      const r2 = this.resultBuffer, n2 = this.sampleValues, a2 = this.valueSize, o2 = t2 * a2, h2 = o2 - a2, l2 = (i2 - e2) / (s2 - e2), c2 = 1 - l2;
      for (let t3 = 0; t3 !== a2; ++t3) r2[t3] = n2[h2 + t3] * c2 + n2[o2 + t3] * l2;
      return r2;
    }
  };
  var gc = class extends pc {
    constructor(t2, e2, i2, s2) {
      super(t2, e2, i2, s2);
    }
    interpolate_(t2) {
      return this.copySampleValue_(t2 - 1);
    }
  };
  var fc = class extends pc {
    interpolate_(t2, e2, i2, s2) {
      const r2 = this.resultBuffer, n2 = this.sampleValues, a2 = this.valueSize, o2 = t2 * a2, h2 = o2 - a2, l2 = this.settings || this.DefaultSettings_, c2 = l2.inTangents, u2 = l2.outTangents;
      if (!c2 || !u2) {
        const t3 = (i2 - e2) / (s2 - e2), l3 = 1 - t3;
        for (let e3 = 0; e3 !== a2; ++e3) r2[e3] = n2[h2 + e3] * l3 + n2[o2 + e3] * t3;
        return r2;
      }
      const d2 = 2 * a2, p2 = t2 - 1;
      for (let l3 = 0; l3 !== a2; ++l3) {
        const a3 = n2[h2 + l3], m2 = n2[o2 + l3], y2 = p2 * d2 + 2 * l3, g2 = u2[y2], f2 = u2[y2 + 1], x2 = t2 * d2 + 2 * l3, b2 = c2[x2], v2 = c2[x2 + 1];
        let w2, M2, S2, _2, A2, T2 = (i2 - e2) / (s2 - e2);
        for (let t3 = 0; t3 < 8; t3++) {
          w2 = T2 * T2, M2 = w2 * T2, S2 = 1 - T2, _2 = S2 * S2, A2 = _2 * S2;
          const t4 = A2 * e2 + 3 * _2 * T2 * g2 + 3 * S2 * w2 * b2 + M2 * s2 - i2;
          if (Math.abs(t4) < 1e-10) break;
          const r3 = 3 * _2 * (g2 - e2) + 6 * S2 * T2 * (b2 - g2) + 3 * w2 * (s2 - b2);
          if (Math.abs(r3) < 1e-10) break;
          T2 -= t4 / r3, T2 = Math.max(0, Math.min(1, T2));
        }
        r2[l3] = A2 * a3 + 3 * _2 * T2 * f2 + 3 * S2 * w2 * v2 + M2 * m2;
      }
      return r2;
    }
  };
  var xc = class {
    constructor(t2, e2, i2, s2) {
      if (void 0 === t2) throw new Error("THREE.KeyframeTrack: track name is undefined");
      if (void 0 === e2 || 0 === e2.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t2);
      this.name = t2, this.times = hc(e2, this.TimeBufferType), this.values = hc(i2, this.ValueBufferType), this.setInterpolation(s2 || this.DefaultInterpolation);
    }
    static toJSON(t2) {
      const e2 = t2.constructor;
      let i2;
      if (e2.toJSON !== this.toJSON) i2 = e2.toJSON(t2);
      else {
        i2 = { name: t2.name, times: hc(t2.times, Array), values: hc(t2.values, Array) };
        const e3 = t2.getInterpolation();
        e3 !== t2.DefaultInterpolation && (i2.interpolation = e3);
      }
      return i2.type = t2.ValueTypeName, i2;
    }
    InterpolantFactoryMethodDiscrete(t2) {
      return new gc(this.times, this.values, this.getValueSize(), t2);
    }
    InterpolantFactoryMethodLinear(t2) {
      return new yc(this.times, this.values, this.getValueSize(), t2);
    }
    InterpolantFactoryMethodSmooth(t2) {
      return new mc(this.times, this.values, this.getValueSize(), t2);
    }
    InterpolantFactoryMethodBezier(t2) {
      const e2 = new fc(this.times, this.values, this.getValueSize(), t2);
      return this.settings && (e2.settings = this.settings), e2;
    }
    setInterpolation(t2) {
      let e2;
      switch (t2) {
        case Ve:
          e2 = this.InterpolantFactoryMethodDiscrete;
          break;
        case Ee:
          e2 = this.InterpolantFactoryMethodLinear;
          break;
        case Le:
          e2 = this.InterpolantFactoryMethodSmooth;
          break;
        case Fe:
          e2 = this.InterpolantFactoryMethodBezier;
      }
      if (void 0 === e2) {
        const e3 = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
        if (void 0 === this.createInterpolant) {
          if (t2 === this.DefaultInterpolation) throw new Error(e3);
          this.setInterpolation(this.DefaultInterpolation);
        }
        return as("KeyframeTrack:", e3), this;
      }
      return this.createInterpolant = e2, this;
    }
    getInterpolation() {
      switch (this.createInterpolant) {
        case this.InterpolantFactoryMethodDiscrete:
          return Ve;
        case this.InterpolantFactoryMethodLinear:
          return Ee;
        case this.InterpolantFactoryMethodSmooth:
          return Le;
        case this.InterpolantFactoryMethodBezier:
          return Fe;
      }
    }
    getValueSize() {
      return this.values.length / this.times.length;
    }
    shift(t2) {
      if (0 !== t2) {
        const e2 = this.times;
        for (let i2 = 0, s2 = e2.length; i2 !== s2; ++i2) e2[i2] += t2;
      }
      return this;
    }
    scale(t2) {
      if (1 !== t2) {
        const e2 = this.times;
        for (let i2 = 0, s2 = e2.length; i2 !== s2; ++i2) e2[i2] *= t2;
      }
      return this;
    }
    trim(t2, e2) {
      const i2 = this.times, s2 = i2.length;
      let r2 = 0, n2 = s2 - 1;
      for (; r2 !== s2 && i2[r2] < t2; ) ++r2;
      for (; -1 !== n2 && i2[n2] > e2; ) --n2;
      if (++n2, 0 !== r2 || n2 !== s2) {
        r2 >= n2 && (n2 = Math.max(n2, 1), r2 = n2 - 1);
        const t3 = this.getValueSize();
        this.times = i2.slice(r2, n2), this.values = this.values.slice(r2 * t3, n2 * t3);
      }
      return this;
    }
    validate() {
      let t2 = true;
      const e2 = this.getValueSize();
      e2 - Math.floor(e2) !== 0 && (os("KeyframeTrack: Invalid value size in track.", this), t2 = false);
      const i2 = this.times, s2 = this.values, r2 = i2.length;
      0 === r2 && (os("KeyframeTrack: Track is empty.", this), t2 = false);
      let n2 = null;
      for (let e3 = 0; e3 !== r2; e3++) {
        const s3 = i2[e3];
        if ("number" == typeof s3 && isNaN(s3)) {
          os("KeyframeTrack: Time is not a valid number.", this, e3, s3), t2 = false;
          break;
        }
        if (null !== n2 && n2 > s3) {
          os("KeyframeTrack: Out of order keys.", this, e3, s3, n2), t2 = false;
          break;
        }
        n2 = s3;
      }
      if (void 0 !== s2 && $i(s2)) for (let e3 = 0, i3 = s2.length; e3 !== i3; ++e3) {
        const i4 = s2[e3];
        if (isNaN(i4)) {
          os("KeyframeTrack: Value is not a valid number.", this, e3, i4), t2 = false;
          break;
        }
      }
      return t2;
    }
    optimize() {
      const t2 = this.times.slice(), e2 = this.values.slice(), i2 = this.getValueSize(), s2 = this.getInterpolation() === Le, r2 = t2.length - 1;
      let n2 = 1;
      for (let a2 = 1; a2 < r2; ++a2) {
        let r3 = false;
        const o2 = t2[a2];
        if (o2 !== t2[a2 + 1] && (1 !== a2 || o2 !== t2[0])) if (s2) r3 = true;
        else {
          const t3 = a2 * i2, s3 = t3 - i2, n3 = t3 + i2;
          for (let a3 = 0; a3 !== i2; ++a3) {
            const i3 = e2[t3 + a3];
            if (i3 !== e2[s3 + a3] || i3 !== e2[n3 + a3]) {
              r3 = true;
              break;
            }
          }
        }
        if (r3) {
          if (a2 !== n2) {
            t2[n2] = t2[a2];
            const s3 = a2 * i2, r4 = n2 * i2;
            for (let t3 = 0; t3 !== i2; ++t3) e2[r4 + t3] = e2[s3 + t3];
          }
          ++n2;
        }
      }
      if (r2 > 0) {
        t2[n2] = t2[r2];
        for (let t3 = r2 * i2, s3 = n2 * i2, a2 = 0; a2 !== i2; ++a2) e2[s3 + a2] = e2[t3 + a2];
        ++n2;
      }
      return n2 !== t2.length ? (this.times = t2.slice(0, n2), this.values = e2.slice(0, n2 * i2)) : (this.times = t2, this.values = e2), this;
    }
    clone() {
      const t2 = this.times.slice(), e2 = this.values.slice(), i2 = new (0, this.constructor)(this.name, t2, e2);
      return i2.createInterpolant = this.createInterpolant, i2;
    }
  };
  xc.prototype.ValueTypeName = "", xc.prototype.TimeBufferType = Float32Array, xc.prototype.ValueBufferType = Float32Array, xc.prototype.DefaultInterpolation = Ee;
  var bc = class extends xc {
    constructor(t2, e2, i2) {
      super(t2, e2, i2);
    }
  };
  bc.prototype.ValueTypeName = "bool", bc.prototype.ValueBufferType = Array, bc.prototype.DefaultInterpolation = Ve, bc.prototype.InterpolantFactoryMethodLinear = void 0, bc.prototype.InterpolantFactoryMethodSmooth = void 0;
  var vc = class extends xc {
    constructor(t2, e2, i2, s2) {
      super(t2, e2, i2, s2);
    }
  };
  vc.prototype.ValueTypeName = "color";
  var wc = class extends xc {
    constructor(t2, e2, i2, s2) {
      super(t2, e2, i2, s2);
    }
  };
  wc.prototype.ValueTypeName = "number";
  var Mc = class extends pc {
    constructor(t2, e2, i2, s2) {
      super(t2, e2, i2, s2);
    }
    interpolate_(t2, e2, i2, s2) {
      const r2 = this.resultBuffer, n2 = this.sampleValues, a2 = this.valueSize, o2 = (i2 - e2) / (s2 - e2);
      let h2 = t2 * a2;
      for (let t3 = h2 + a2; h2 !== t3; h2 += 4) As.slerpFlat(r2, 0, n2, h2 - a2, n2, h2, o2);
      return r2;
    }
  };
  var Sc = class extends xc {
    constructor(t2, e2, i2, s2) {
      super(t2, e2, i2, s2);
    }
    InterpolantFactoryMethodLinear(t2) {
      return new Mc(this.times, this.values, this.getValueSize(), t2);
    }
  };
  Sc.prototype.ValueTypeName = "quaternion", Sc.prototype.InterpolantFactoryMethodSmooth = void 0;
  var _c = class extends xc {
    constructor(t2, e2, i2) {
      super(t2, e2, i2);
    }
  };
  _c.prototype.ValueTypeName = "string", _c.prototype.ValueBufferType = Array, _c.prototype.DefaultInterpolation = Ve, _c.prototype.InterpolantFactoryMethodLinear = void 0, _c.prototype.InterpolantFactoryMethodSmooth = void 0;
  var Ac = class extends xc {
    constructor(t2, e2, i2, s2) {
      super(t2, e2, i2, s2);
    }
  };
  Ac.prototype.ValueTypeName = "vector";
  var Bc = class {
    constructor(t2, e2, i2) {
      const s2 = this;
      let r2, n2 = false, a2 = 0, o2 = 0;
      const h2 = [];
      this.onStart = void 0, this.onLoad = t2, this.onProgress = e2, this.onError = i2, this._abortController = null, this.itemStart = function(t3) {
        o2++, false === n2 && void 0 !== s2.onStart && s2.onStart(t3, a2, o2), n2 = true;
      }, this.itemEnd = function(t3) {
        a2++, void 0 !== s2.onProgress && s2.onProgress(t3, a2, o2), a2 === o2 && (n2 = false, void 0 !== s2.onLoad && s2.onLoad());
      }, this.itemError = function(t3) {
        void 0 !== s2.onError && s2.onError(t3);
      }, this.resolveURL = function(t3) {
        return r2 ? r2(t3) : t3;
      }, this.setURLModifier = function(t3) {
        return r2 = t3, this;
      }, this.addHandler = function(t3, e3) {
        return h2.push(t3, e3), this;
      }, this.removeHandler = function(t3) {
        const e3 = h2.indexOf(t3);
        return -1 !== e3 && h2.splice(e3, 2), this;
      }, this.getHandler = function(t3) {
        for (let e3 = 0, i3 = h2.length; e3 < i3; e3 += 2) {
          const i4 = h2[e3], s3 = h2[e3 + 1];
          if (i4.global && (i4.lastIndex = 0), i4.test(t3)) return s3;
        }
        return null;
      }, this.abort = function() {
        return this.abortController.abort(), this._abortController = null, this;
      };
    }
    get abortController() {
      return this._abortController || (this._abortController = new AbortController()), this._abortController;
    }
  };
  var kc = new Bc();
  var Oc = class {
    constructor(t2) {
      this.manager = void 0 !== t2 ? t2 : kc, this.crossOrigin = "anonymous", this.withCredentials = false, this.path = "", this.resourcePath = "", this.requestHeader = {}, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
    }
    load() {
    }
    loadAsync(t2, e2) {
      const i2 = this;
      return new Promise(function(s2, r2) {
        i2.load(t2, s2, e2, r2);
      });
    }
    parse() {
    }
    setCrossOrigin(t2) {
      return this.crossOrigin = t2, this;
    }
    setWithCredentials(t2) {
      return this.withCredentials = t2, this;
    }
    setPath(t2) {
      return this.path = t2, this;
    }
    setResourcePath(t2) {
      return this.resourcePath = t2, this;
    }
    setRequestHeader(t2) {
      return this.requestHeader = t2, this;
    }
    abort() {
      return this;
    }
  };
  Oc.DEFAULT_MATERIAL_NAME = "__DEFAULT";
  var Wc = class extends Ar {
    constructor(t2, e2 = 1) {
      super(), this.isLight = true, this.type = "Light", this.color = new Pr(t2), this.intensity = e2;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
    copy(t2, e2) {
      return super.copy(t2, e2), this.color.copy(t2.color), this.intensity = t2.intensity, this;
    }
    toJSON(t2) {
      const e2 = super.toJSON(t2);
      return e2.object.color = this.color.getHex(), e2.object.intensity = this.intensity, e2;
    }
  };
  var qc = class extends Wc {
    constructor(t2, e2, i2) {
      super(t2, i2), this.isHemisphereLight = true, this.type = "HemisphereLight", this.position.copy(Ar.DEFAULT_UP), this.updateMatrix(), this.groundColor = new Pr(e2);
    }
    copy(t2, e2) {
      return super.copy(t2, e2), this.groundColor.copy(t2.groundColor), this;
    }
    toJSON(t2) {
      const e2 = super.toJSON(t2);
      return e2.object.groundColor = this.groundColor.getHex(), e2;
    }
  };
  var Jc = new Qs();
  var Xc = new Ts();
  var Yc = new Ts();
  var Hc = class {
    constructor(t2) {
      this.camera = t2, this.intensity = 1, this.bias = 0, this.biasNode = null, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new _s(512, 512), this.mapType = zt, this.map = null, this.mapPass = null, this.matrix = new Qs(), this.autoUpdate = true, this.needsUpdate = false, this._frustum = new mo(), this._frameExtents = new _s(1, 1), this._viewportCount = 1, this._viewports = [new Js(0, 0, 1, 1)];
    }
    getViewportCount() {
      return this._viewportCount;
    }
    getFrustum() {
      return this._frustum;
    }
    updateMatrices(t2) {
      const e2 = this.camera, i2 = this.matrix;
      Xc.setFromMatrixPosition(t2.matrixWorld), e2.position.copy(Xc), Yc.setFromMatrixPosition(t2.target.matrixWorld), e2.lookAt(Yc), e2.updateMatrixWorld(), Jc.multiplyMatrices(e2.projectionMatrix, e2.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Jc, e2.coordinateSystem, e2.reversedDepth), e2.coordinateSystem === qi || e2.reversedDepth ? i2.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 1, 0, 0, 0, 0, 1) : i2.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), i2.multiply(Jc);
    }
    getViewport(t2) {
      return this._viewports[t2];
    }
    getFrameExtents() {
      return this._frameExtents;
    }
    dispose() {
      this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
    }
    copy(t2) {
      return this.camera = t2.camera.clone(), this.intensity = t2.intensity, this.bias = t2.bias, this.radius = t2.radius, this.autoUpdate = t2.autoUpdate, this.needsUpdate = t2.needsUpdate, this.normalBias = t2.normalBias, this.blurSamples = t2.blurSamples, this.mapSize.copy(t2.mapSize), this.biasNode = t2.biasNode, this;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    toJSON() {
      const t2 = {};
      return 1 !== this.intensity && (t2.intensity = this.intensity), 0 !== this.bias && (t2.bias = this.bias), 0 !== this.normalBias && (t2.normalBias = this.normalBias), 1 !== this.radius && (t2.radius = this.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (t2.mapSize = this.mapSize.toArray()), t2.camera = this.camera.toJSON(false).object, delete t2.camera.matrix, t2;
    }
  };
  var Zc = new Ts();
  var Gc = new As();
  var $c = new Ts();
  var Qc = class extends Ar {
    constructor() {
      super(), this.isCamera = true, this.type = "Camera", this.matrixWorldInverse = new Qs(), this.projectionMatrix = new Qs(), this.projectionMatrixInverse = new Qs(), this.coordinateSystem = Wi, this._reversedDepth = false;
    }
    get reversedDepth() {
      return this._reversedDepth;
    }
    copy(t2, e2) {
      return super.copy(t2, e2), this.matrixWorldInverse.copy(t2.matrixWorldInverse), this.projectionMatrix.copy(t2.projectionMatrix), this.projectionMatrixInverse.copy(t2.projectionMatrixInverse), this.coordinateSystem = t2.coordinateSystem, this;
    }
    getWorldDirection(t2) {
      return super.getWorldDirection(t2).negate();
    }
    updateMatrixWorld(t2) {
      super.updateMatrixWorld(t2), this.matrixWorld.decompose(Zc, Gc, $c), 1 === $c.x && 1 === $c.y && 1 === $c.z ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(Zc, Gc, $c.set(1, 1, 1)).invert();
    }
    updateWorldMatrix(t2, e2) {
      super.updateWorldMatrix(t2, e2), this.matrixWorld.decompose(Zc, Gc, $c), 1 === $c.x && 1 === $c.y && 1 === $c.z ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(Zc, Gc, $c.set(1, 1, 1)).invert();
    }
    clone() {
      return new this.constructor().copy(this);
    }
  };
  var Kc = new Ts();
  var tu = new _s();
  var eu = new _s();
  var iu = class extends Qc {
    constructor(t2 = 50, e2 = 1, i2 = 0.1, s2 = 2e3) {
      super(), this.isPerspectiveCamera = true, this.type = "PerspectiveCamera", this.fov = t2, this.zoom = 1, this.near = i2, this.far = s2, this.focus = 10, this.aspect = e2, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
    }
    copy(t2, e2) {
      return super.copy(t2, e2), this.fov = t2.fov, this.zoom = t2.zoom, this.near = t2.near, this.far = t2.far, this.focus = t2.focus, this.aspect = t2.aspect, this.view = null === t2.view ? null : Object.assign({}, t2.view), this.filmGauge = t2.filmGauge, this.filmOffset = t2.filmOffset, this;
    }
    setFocalLength(t2) {
      const e2 = 0.5 * this.getFilmHeight() / t2;
      this.fov = 2 * gs * Math.atan(e2), this.updateProjectionMatrix();
    }
    getFocalLength() {
      const t2 = Math.tan(0.5 * ys * this.fov);
      return 0.5 * this.getFilmHeight() / t2;
    }
    getEffectiveFOV() {
      return 2 * gs * Math.atan(Math.tan(0.5 * ys * this.fov) / this.zoom);
    }
    getFilmWidth() {
      return this.filmGauge * Math.min(this.aspect, 1);
    }
    getFilmHeight() {
      return this.filmGauge / Math.max(this.aspect, 1);
    }
    getViewBounds(t2, e2, i2) {
      Kc.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), e2.set(Kc.x, Kc.y).multiplyScalar(-t2 / Kc.z), Kc.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), i2.set(Kc.x, Kc.y).multiplyScalar(-t2 / Kc.z);
    }
    getViewSize(t2, e2) {
      return this.getViewBounds(t2, tu, eu), e2.subVectors(eu, tu);
    }
    setViewOffset(t2, e2, i2, s2, r2, n2) {
      this.aspect = t2 / e2, null === this.view && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = t2, this.view.fullHeight = e2, this.view.offsetX = i2, this.view.offsetY = s2, this.view.width = r2, this.view.height = n2, this.updateProjectionMatrix();
    }
    clearViewOffset() {
      null !== this.view && (this.view.enabled = false), this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
      const t2 = this.near;
      let e2 = t2 * Math.tan(0.5 * ys * this.fov) / this.zoom, i2 = 2 * e2, s2 = this.aspect * i2, r2 = -0.5 * s2;
      const n2 = this.view;
      if (null !== this.view && this.view.enabled) {
        const t3 = n2.fullWidth, a3 = n2.fullHeight;
        r2 += n2.offsetX * s2 / t3, e2 -= n2.offsetY * i2 / a3, s2 *= n2.width / t3, i2 *= n2.height / a3;
      }
      const a2 = this.filmOffset;
      0 !== a2 && (r2 += t2 * a2 / this.getFilmWidth()), this.projectionMatrix.makePerspective(r2, r2 + s2, e2, e2 - i2, t2, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(t2) {
      const e2 = super.toJSON(t2);
      return e2.object.fov = this.fov, e2.object.zoom = this.zoom, e2.object.near = this.near, e2.object.far = this.far, e2.object.focus = this.focus, e2.object.aspect = this.aspect, null !== this.view && (e2.object.view = Object.assign({}, this.view)), e2.object.filmGauge = this.filmGauge, e2.object.filmOffset = this.filmOffset, e2;
    }
  };
  var ou = class extends Qc {
    constructor(t2 = -1, e2 = 1, i2 = 1, s2 = -1, r2 = 0.1, n2 = 2e3) {
      super(), this.isOrthographicCamera = true, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t2, this.right = e2, this.top = i2, this.bottom = s2, this.near = r2, this.far = n2, this.updateProjectionMatrix();
    }
    copy(t2, e2) {
      return super.copy(t2, e2), this.left = t2.left, this.right = t2.right, this.top = t2.top, this.bottom = t2.bottom, this.near = t2.near, this.far = t2.far, this.zoom = t2.zoom, this.view = null === t2.view ? null : Object.assign({}, t2.view), this;
    }
    setViewOffset(t2, e2, i2, s2, r2, n2) {
      null === this.view && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = t2, this.view.fullHeight = e2, this.view.offsetX = i2, this.view.offsetY = s2, this.view.width = r2, this.view.height = n2, this.updateProjectionMatrix();
    }
    clearViewOffset() {
      null !== this.view && (this.view.enabled = false), this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
      const t2 = (this.right - this.left) / (2 * this.zoom), e2 = (this.top - this.bottom) / (2 * this.zoom), i2 = (this.right + this.left) / 2, s2 = (this.top + this.bottom) / 2;
      let r2 = i2 - t2, n2 = i2 + t2, a2 = s2 + e2, o2 = s2 - e2;
      if (null !== this.view && this.view.enabled) {
        const t3 = (this.right - this.left) / this.view.fullWidth / this.zoom, e3 = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
        r2 += t3 * this.view.offsetX, n2 = r2 + t3 * this.view.width, a2 -= e3 * this.view.offsetY, o2 = a2 - e3 * this.view.height;
      }
      this.projectionMatrix.makeOrthographic(r2, n2, a2, o2, this.near, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(t2) {
      const e2 = super.toJSON(t2);
      return e2.object.zoom = this.zoom, e2.object.left = this.left, e2.object.right = this.right, e2.object.top = this.top, e2.object.bottom = this.bottom, e2.object.near = this.near, e2.object.far = this.far, null !== this.view && (e2.object.view = Object.assign({}, this.view)), e2;
    }
  };
  var hu = class extends Hc {
    constructor() {
      super(new ou(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = true;
    }
  };
  var lu = class extends Wc {
    constructor(t2, e2) {
      super(t2, e2), this.isDirectionalLight = true, this.type = "DirectionalLight", this.position.copy(Ar.DEFAULT_UP), this.updateMatrix(), this.target = new Ar(), this.shadow = new hu();
    }
    dispose() {
      super.dispose(), this.shadow.dispose();
    }
    copy(t2) {
      return super.copy(t2), this.target = t2.target.clone(), this.shadow = t2.shadow.clone(), this;
    }
    toJSON(t2) {
      const e2 = super.toJSON(t2);
      return e2.object.shadow = this.shadow.toJSON(), e2.object.target = this.target.uuid, e2;
    }
  };
  var Cu = new Qs();
  var Iu = new Qs();
  var Bu = new Qs();
  var Ou = -90;
  var Pu = class extends Ar {
    constructor(t2, e2, i2) {
      super(), this.type = "CubeCamera", this.renderTarget = i2, this.coordinateSystem = null, this.activeMipmapLevel = 0;
      const s2 = new iu(Ou, 1, t2, e2);
      s2.layers = this.layers, this.add(s2);
      const r2 = new iu(Ou, 1, t2, e2);
      r2.layers = this.layers, this.add(r2);
      const n2 = new iu(Ou, 1, t2, e2);
      n2.layers = this.layers, this.add(n2);
      const a2 = new iu(Ou, 1, t2, e2);
      a2.layers = this.layers, this.add(a2);
      const o2 = new iu(Ou, 1, t2, e2);
      o2.layers = this.layers, this.add(o2);
      const h2 = new iu(Ou, 1, t2, e2);
      h2.layers = this.layers, this.add(h2);
    }
    updateCoordinateSystem() {
      const t2 = this.coordinateSystem, e2 = this.children.concat(), [i2, s2, r2, n2, a2, o2] = e2;
      for (const t3 of e2) this.remove(t3);
      if (t2 === Wi) i2.up.set(0, 1, 0), i2.lookAt(1, 0, 0), s2.up.set(0, 1, 0), s2.lookAt(-1, 0, 0), r2.up.set(0, 0, -1), r2.lookAt(0, 1, 0), n2.up.set(0, 0, 1), n2.lookAt(0, -1, 0), a2.up.set(0, 1, 0), a2.lookAt(0, 0, 1), o2.up.set(0, 1, 0), o2.lookAt(0, 0, -1);
      else {
        if (t2 !== qi) throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + t2);
        i2.up.set(0, -1, 0), i2.lookAt(-1, 0, 0), s2.up.set(0, -1, 0), s2.lookAt(1, 0, 0), r2.up.set(0, 0, 1), r2.lookAt(0, 1, 0), n2.up.set(0, 0, -1), n2.lookAt(0, -1, 0), a2.up.set(0, -1, 0), a2.lookAt(0, 0, 1), o2.up.set(0, -1, 0), o2.lookAt(0, 0, -1);
      }
      for (const t3 of e2) this.add(t3), t3.updateMatrixWorld();
    }
    update(t2, e2) {
      null === this.parent && this.updateMatrixWorld();
      const { renderTarget: i2, activeMipmapLevel: s2 } = this;
      this.coordinateSystem !== t2.coordinateSystem && (this.coordinateSystem = t2.coordinateSystem, this.updateCoordinateSystem());
      const [r2, n2, a2, o2, h2, l2] = this.children, c2 = t2.getRenderTarget(), u2 = t2.getActiveCubeFace(), d2 = t2.getActiveMipmapLevel(), p2 = t2.xr.enabled;
      t2.xr.enabled = false;
      const m2 = i2.texture.generateMipmaps;
      i2.texture.generateMipmaps = false;
      let y2 = false;
      y2 = true === t2.isWebGLRenderer ? t2.state.buffers.depth.getReversed() : t2.reversedDepthBuffer, t2.setRenderTarget(i2, 0, s2), y2 && false === t2.autoClear && t2.clearDepth(), t2.render(e2, r2), t2.setRenderTarget(i2, 1, s2), y2 && false === t2.autoClear && t2.clearDepth(), t2.render(e2, n2), t2.setRenderTarget(i2, 2, s2), y2 && false === t2.autoClear && t2.clearDepth(), t2.render(e2, a2), t2.setRenderTarget(i2, 3, s2), y2 && false === t2.autoClear && t2.clearDepth(), t2.render(e2, o2), t2.setRenderTarget(i2, 4, s2), y2 && false === t2.autoClear && t2.clearDepth(), t2.render(e2, h2), i2.texture.generateMipmaps = m2, t2.setRenderTarget(i2, 5, s2), y2 && false === t2.autoClear && t2.clearDepth(), t2.render(e2, l2), t2.setRenderTarget(c2, u2, d2), t2.xr.enabled = p2, i2.texture.needsPMREMUpdate = true;
    }
  };
  var Ru = class extends iu {
    constructor(t2 = []) {
      super(), this.isArrayCamera = true, this.isMultiViewCamera = false, this.cameras = t2;
    }
  };
  var Eu = new Ts();
  var Lu = new As();
  var Fu = new Ts();
  var ju = new Ts();
  var Du = new Ts();
  var qu = new Ts();
  var Ju = new As();
  var Xu = new Ts();
  var Yu = new Ts();
  var $u = "\\[\\]\\.:\\/";
  var Qu = new RegExp("[" + $u + "]", "g");
  var Ku = "[^" + $u + "]";
  var td = "[^" + $u.replace("\\.", "") + "]";
  var ed = new RegExp("^" + /((?:WC+[\/:])*)/.source.replace("WC", Ku) + /(WCOD+)?/.source.replace("WCOD", td) + /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Ku) + /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Ku) + "$");
  var id = ["material", "materials", "bones", "map"];
  var sd = class _sd {
    constructor(t2, e2, i2) {
      this.path = e2, this.parsedPath = i2 || _sd.parseTrackName(e2), this.node = _sd.findNode(t2, this.parsedPath.nodeName), this.rootNode = t2, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
    }
    static create(t2, e2, i2) {
      return t2 && t2.isAnimationObjectGroup ? new _sd.Composite(t2, e2, i2) : new _sd(t2, e2, i2);
    }
    static sanitizeNodeName(t2) {
      return t2.replace(/\s/g, "_").replace(Qu, "");
    }
    static parseTrackName(t2) {
      const e2 = ed.exec(t2);
      if (null === e2) throw new Error("PropertyBinding: Cannot parse trackName: " + t2);
      const i2 = { nodeName: e2[2], objectName: e2[3], objectIndex: e2[4], propertyName: e2[5], propertyIndex: e2[6] }, s2 = i2.nodeName && i2.nodeName.lastIndexOf(".");
      if (void 0 !== s2 && -1 !== s2) {
        const t3 = i2.nodeName.substring(s2 + 1);
        -1 !== id.indexOf(t3) && (i2.nodeName = i2.nodeName.substring(0, s2), i2.objectName = t3);
      }
      if (null === i2.propertyName || 0 === i2.propertyName.length) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t2);
      return i2;
    }
    static findNode(t2, e2) {
      if (void 0 === e2 || "" === e2 || "." === e2 || -1 === e2 || e2 === t2.name || e2 === t2.uuid) return t2;
      if (t2.skeleton) {
        const i2 = t2.skeleton.getBoneByName(e2);
        if (void 0 !== i2) return i2;
      }
      if (t2.children) {
        const i2 = function(t3) {
          for (let s3 = 0; s3 < t3.length; s3++) {
            const r2 = t3[s3];
            if (r2.name === e2 || r2.uuid === e2) return r2;
            const n2 = i2(r2.children);
            if (n2) return n2;
          }
          return null;
        }, s2 = i2(t2.children);
        if (s2) return s2;
      }
      return null;
    }
    _getValue_unavailable() {
    }
    _setValue_unavailable() {
    }
    _getValue_direct(t2, e2) {
      t2[e2] = this.targetObject[this.propertyName];
    }
    _getValue_array(t2, e2) {
      const i2 = this.resolvedProperty;
      for (let s2 = 0, r2 = i2.length; s2 !== r2; ++s2) t2[e2++] = i2[s2];
    }
    _getValue_arrayElement(t2, e2) {
      t2[e2] = this.resolvedProperty[this.propertyIndex];
    }
    _getValue_toArray(t2, e2) {
      this.resolvedProperty.toArray(t2, e2);
    }
    _setValue_direct(t2, e2) {
      this.targetObject[this.propertyName] = t2[e2];
    }
    _setValue_direct_setNeedsUpdate(t2, e2) {
      this.targetObject[this.propertyName] = t2[e2], this.targetObject.needsUpdate = true;
    }
    _setValue_direct_setMatrixWorldNeedsUpdate(t2, e2) {
      this.targetObject[this.propertyName] = t2[e2], this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _setValue_array(t2, e2) {
      const i2 = this.resolvedProperty;
      for (let s2 = 0, r2 = i2.length; s2 !== r2; ++s2) i2[s2] = t2[e2++];
    }
    _setValue_array_setNeedsUpdate(t2, e2) {
      const i2 = this.resolvedProperty;
      for (let s2 = 0, r2 = i2.length; s2 !== r2; ++s2) i2[s2] = t2[e2++];
      this.targetObject.needsUpdate = true;
    }
    _setValue_array_setMatrixWorldNeedsUpdate(t2, e2) {
      const i2 = this.resolvedProperty;
      for (let s2 = 0, r2 = i2.length; s2 !== r2; ++s2) i2[s2] = t2[e2++];
      this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _setValue_arrayElement(t2, e2) {
      this.resolvedProperty[this.propertyIndex] = t2[e2];
    }
    _setValue_arrayElement_setNeedsUpdate(t2, e2) {
      this.resolvedProperty[this.propertyIndex] = t2[e2], this.targetObject.needsUpdate = true;
    }
    _setValue_arrayElement_setMatrixWorldNeedsUpdate(t2, e2) {
      this.resolvedProperty[this.propertyIndex] = t2[e2], this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _setValue_fromArray(t2, e2) {
      this.resolvedProperty.fromArray(t2, e2);
    }
    _setValue_fromArray_setNeedsUpdate(t2, e2) {
      this.resolvedProperty.fromArray(t2, e2), this.targetObject.needsUpdate = true;
    }
    _setValue_fromArray_setMatrixWorldNeedsUpdate(t2, e2) {
      this.resolvedProperty.fromArray(t2, e2), this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _getValue_unbound(t2, e2) {
      this.bind(), this.getValue(t2, e2);
    }
    _setValue_unbound(t2, e2) {
      this.bind(), this.setValue(t2, e2);
    }
    bind() {
      let t2 = this.node;
      const e2 = this.parsedPath, i2 = e2.objectName, s2 = e2.propertyName;
      let r2 = e2.propertyIndex;
      if (t2 || (t2 = _sd.findNode(this.rootNode, e2.nodeName), this.node = t2), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t2) return void as("PropertyBinding: No target node found for track: " + this.path + ".");
      if (i2) {
        let s3 = e2.objectIndex;
        switch (i2) {
          case "materials":
            if (!t2.material) return void os("PropertyBinding: Can not bind to material as node does not have a material.", this);
            if (!t2.material.materials) return void os("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            t2 = t2.material.materials;
            break;
          case "bones":
            if (!t2.skeleton) return void os("PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            t2 = t2.skeleton.bones;
            for (let e3 = 0; e3 < t2.length; e3++) if (t2[e3].name === s3) {
              s3 = e3;
              break;
            }
            break;
          case "map":
            if ("map" in t2) {
              t2 = t2.map;
              break;
            }
            if (!t2.material) return void os("PropertyBinding: Can not bind to material as node does not have a material.", this);
            if (!t2.material.map) return void os("PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
            t2 = t2.material.map;
            break;
          default:
            if (void 0 === t2[i2]) return void os("PropertyBinding: Can not bind to objectName of node undefined.", this);
            t2 = t2[i2];
        }
        if (void 0 !== s3) {
          if (void 0 === t2[s3]) return void os("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t2);
          t2 = t2[s3];
        }
      }
      const n2 = t2[s2];
      if (void 0 === n2) {
        return void os("PropertyBinding: Trying to update property for track: " + e2.nodeName + "." + s2 + " but it wasn't found.", t2);
      }
      let a2 = this.Versioning.None;
      this.targetObject = t2, true === t2.isMaterial ? a2 = this.Versioning.NeedsUpdate : true === t2.isObject3D && (a2 = this.Versioning.MatrixWorldNeedsUpdate);
      let o2 = this.BindingType.Direct;
      if (void 0 !== r2) {
        if ("morphTargetInfluences" === s2) {
          if (!t2.geometry) return void os("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          if (!t2.geometry.morphAttributes) return void os("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
          void 0 !== t2.morphTargetDictionary[r2] && (r2 = t2.morphTargetDictionary[r2]);
        }
        o2 = this.BindingType.ArrayElement, this.resolvedProperty = n2, this.propertyIndex = r2;
      } else void 0 !== n2.fromArray && void 0 !== n2.toArray ? (o2 = this.BindingType.HasFromToArray, this.resolvedProperty = n2) : Array.isArray(n2) ? (o2 = this.BindingType.EntireArray, this.resolvedProperty = n2) : this.propertyName = s2;
      this.getValue = this.GetterByBindingType[o2], this.setValue = this.SetterByBindingTypeAndVersioning[o2][a2];
    }
    unbind() {
      this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
    }
  };
  sd.Composite = class {
    constructor(t2, e2, i2) {
      const s2 = i2 || sd.parseTrackName(e2);
      this._targetGroup = t2, this._bindings = t2.subscribe_(e2, s2);
    }
    getValue(t2, e2) {
      this.bind();
      const i2 = this._targetGroup.nCachedObjects_, s2 = this._bindings[i2];
      void 0 !== s2 && s2.getValue(t2, e2);
    }
    setValue(t2, e2) {
      const i2 = this._bindings;
      for (let s2 = this._targetGroup.nCachedObjects_, r2 = i2.length; s2 !== r2; ++s2) i2[s2].setValue(t2, e2);
    }
    bind() {
      const t2 = this._bindings;
      for (let e2 = this._targetGroup.nCachedObjects_, i2 = t2.length; e2 !== i2; ++e2) t2[e2].bind();
    }
    unbind() {
      const t2 = this._bindings;
      for (let e2 = this._targetGroup.nCachedObjects_, i2 = t2.length; e2 !== i2; ++e2) t2[e2].unbind();
    }
  }, sd.prototype.BindingType = { Direct: 0, EntireArray: 1, ArrayElement: 2, HasFromToArray: 3 }, sd.prototype.Versioning = { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 }, sd.prototype.GetterByBindingType = [sd.prototype._getValue_direct, sd.prototype._getValue_array, sd.prototype._getValue_arrayElement, sd.prototype._getValue_toArray], sd.prototype.SetterByBindingTypeAndVersioning = [[sd.prototype._setValue_direct, sd.prototype._setValue_direct_setNeedsUpdate, sd.prototype._setValue_direct_setMatrixWorldNeedsUpdate], [sd.prototype._setValue_array, sd.prototype._setValue_array_setNeedsUpdate, sd.prototype._setValue_array_setMatrixWorldNeedsUpdate], [sd.prototype._setValue_arrayElement, sd.prototype._setValue_arrayElement_setNeedsUpdate, sd.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate], [sd.prototype._setValue_fromArray, sd.prototype._setValue_fromArray_setNeedsUpdate, sd.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];
  var ad = new Float32Array(1);
  var md = new Qs();
  var _wd = class _wd {
    constructor(t2, e2, i2, s2) {
      this.elements = [1, 0, 0, 1], void 0 !== t2 && this.set(t2, e2, i2, s2);
    }
    identity() {
      return this.set(1, 0, 0, 1), this;
    }
    fromArray(t2, e2 = 0) {
      for (let i2 = 0; i2 < 4; i2++) this.elements[i2] = t2[i2 + e2];
      return this;
    }
    set(t2, e2, i2, s2) {
      const r2 = this.elements;
      return r2[0] = t2, r2[2] = e2, r2[1] = i2, r2[3] = s2, this;
    }
  };
  _wd.prototype.isMatrix2 = true;
  var wd = _wd;
  var Md = new _s();
  var _d = new Ts();
  var Ad = new Ts();
  var Td = new Ts();
  var zd = new Ts();
  var Cd = new Ts();
  var Id = new Ts();
  var Bd = new Ts();
  var Od = new Ts();
  var Rd = new Ts();
  var Nd = new Qs();
  var Vd = new Qs();
  var jd = new Ts();
  var Dd = new Pr();
  var Ud = new Pr();
  var Xd = new Ts();
  var Yd = new Ts();
  var Hd = new Ts();
  var Gd = new Ts();
  var $d = new Qc();
  var tp = new Qr();
  var rp = new Ts();
  function up(t2, e2, i2, s2) {
    const r2 = function(t3) {
      switch (t3) {
        case zt:
        case Ct:
          return { byteLength: 1, components: 1 };
        case Bt:
        case It:
        case Rt:
          return { byteLength: 2, components: 1 };
        case Nt:
        case Vt:
          return { byteLength: 2, components: 4 };
        case Ot:
        case kt:
        case Pt:
          return { byteLength: 4, components: 1 };
        case Lt:
        case Ft:
          return { byteLength: 4, components: 3 };
      }
      throw new Error(`Unknown texture type ${t3}.`);
    }(s2);
    switch (i2) {
      case 1021:
        return t2 * e2;
      case Jt:
      case Xt:
        return t2 * e2 / r2.components * r2.byteLength;
      case 1030:
      case 1031:
        return t2 * e2 * 2 / r2.components * r2.byteLength;
      case 1022:
        return t2 * e2 * 3 / r2.components * r2.byteLength;
      case Ut:
      case 1033:
        return t2 * e2 * 4 / r2.components * r2.byteLength;
      case 33776:
      case 33777:
        return Math.floor((t2 + 3) / 4) * Math.floor((e2 + 3) / 4) * 8;
      case 33778:
      case 33779:
        return Math.floor((t2 + 3) / 4) * Math.floor((e2 + 3) / 4) * 16;
      case 35841:
      case 35843:
        return Math.max(t2, 16) * Math.max(e2, 8) / 4;
      case 35840:
      case 35842:
        return Math.max(t2, 8) * Math.max(e2, 8) / 2;
      case 36196:
      case 37492:
      case 37488:
      case 37489:
        return Math.floor((t2 + 3) / 4) * Math.floor((e2 + 3) / 4) * 8;
      case 37496:
      case 37490:
      case 37491:
      case 37808:
        return Math.floor((t2 + 3) / 4) * Math.floor((e2 + 3) / 4) * 16;
      case 37809:
        return Math.floor((t2 + 4) / 5) * Math.floor((e2 + 3) / 4) * 16;
      case 37810:
        return Math.floor((t2 + 4) / 5) * Math.floor((e2 + 4) / 5) * 16;
      case 37811:
        return Math.floor((t2 + 5) / 6) * Math.floor((e2 + 4) / 5) * 16;
      case 37812:
        return Math.floor((t2 + 5) / 6) * Math.floor((e2 + 5) / 6) * 16;
      case 37813:
        return Math.floor((t2 + 7) / 8) * Math.floor((e2 + 4) / 5) * 16;
      case 37814:
        return Math.floor((t2 + 7) / 8) * Math.floor((e2 + 5) / 6) * 16;
      case 37815:
        return Math.floor((t2 + 7) / 8) * Math.floor((e2 + 7) / 8) * 16;
      case 37816:
        return Math.floor((t2 + 9) / 10) * Math.floor((e2 + 4) / 5) * 16;
      case 37817:
        return Math.floor((t2 + 9) / 10) * Math.floor((e2 + 5) / 6) * 16;
      case 37818:
        return Math.floor((t2 + 9) / 10) * Math.floor((e2 + 7) / 8) * 16;
      case 37819:
        return Math.floor((t2 + 9) / 10) * Math.floor((e2 + 9) / 10) * 16;
      case 37820:
        return Math.floor((t2 + 11) / 12) * Math.floor((e2 + 9) / 10) * 16;
      case 37821:
        return Math.floor((t2 + 11) / 12) * Math.floor((e2 + 11) / 12) * 16;
      case 36492:
      case 36494:
      case 36495:
        return Math.ceil(t2 / 4) * Math.ceil(e2 / 4) * 16;
      case 36283:
      case 36284:
        return Math.ceil(t2 / 4) * Math.ceil(e2 / 4) * 8;
      case 36285:
      case 36286:
        return Math.ceil(t2 / 4) * Math.ceil(e2 / 4) * 16;
    }
    throw new Error(`Unable to determine texture byte length for ${i2} format.`);
  }
  "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: t } })), "undefined" != typeof window && (window.__THREE__ ? as("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = t);

  // runtime/web/vendor/three.module.min.js
  function On2() {
    let e2 = null, t2 = false, n2 = null, i2 = null;
    function r2(t3, a2) {
      n2(t3, a2), i2 = e2.requestAnimationFrame(r2);
    }
    return { start: function() {
      true !== t2 && null !== n2 && null !== e2 && (i2 = e2.requestAnimationFrame(r2), t2 = true);
    }, stop: function() {
      null !== e2 && e2.cancelAnimationFrame(i2), t2 = false;
    }, setAnimationLoop: function(e3) {
      n2 = e3;
    }, setContext: function(t3) {
      e2 = t3;
    } };
  }
  function Fn2(e2) {
    const t2 = /* @__PURE__ */ new WeakMap();
    return { get: function(e3) {
      return e3.isInterleavedBufferAttribute && (e3 = e3.data), t2.get(e3);
    }, remove: function(n2) {
      n2.isInterleavedBufferAttribute && (n2 = n2.data);
      const i2 = t2.get(n2);
      i2 && (e2.deleteBuffer(i2.buffer), t2.delete(n2));
    }, update: function(n2, i2) {
      if (n2.isInterleavedBufferAttribute && (n2 = n2.data), n2.isGLBufferAttribute) {
        const e3 = t2.get(n2);
        return void ((!e3 || e3.version < n2.version) && t2.set(n2, { buffer: n2.buffer, type: n2.type, bytesPerElement: n2.elementSize, version: n2.version }));
      }
      const r2 = t2.get(n2);
      if (void 0 === r2) t2.set(n2, function(t3, n3) {
        const i3 = t3.array, r3 = t3.usage, a2 = i3.byteLength, o2 = e2.createBuffer();
        let s2;
        if (e2.bindBuffer(n3, o2), e2.bufferData(n3, i3, r3), t3.onUploadCallback(), i3 instanceof Float32Array) s2 = e2.FLOAT;
        else if ("undefined" != typeof Float16Array && i3 instanceof Float16Array) s2 = e2.HALF_FLOAT;
        else if (i3 instanceof Uint16Array) s2 = t3.isFloat16BufferAttribute ? e2.HALF_FLOAT : e2.UNSIGNED_SHORT;
        else if (i3 instanceof Int16Array) s2 = e2.SHORT;
        else if (i3 instanceof Uint32Array) s2 = e2.UNSIGNED_INT;
        else if (i3 instanceof Int32Array) s2 = e2.INT;
        else if (i3 instanceof Int8Array) s2 = e2.BYTE;
        else if (i3 instanceof Uint8Array) s2 = e2.UNSIGNED_BYTE;
        else {
          if (!(i3 instanceof Uint8ClampedArray)) throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + i3);
          s2 = e2.UNSIGNED_BYTE;
        }
        return { buffer: o2, type: s2, bytesPerElement: i3.BYTES_PER_ELEMENT, version: t3.version, size: a2 };
      }(n2, i2));
      else if (r2.version < n2.version) {
        if (r2.size !== n2.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
        !function(t3, n3, i3) {
          const r3 = n3.array, a2 = n3.updateRanges;
          if (e2.bindBuffer(i3, t3), 0 === a2.length) e2.bufferSubData(i3, 0, r3);
          else {
            a2.sort((e3, t5) => e3.start - t5.start);
            let t4 = 0;
            for (let e3 = 1; e3 < a2.length; e3++) {
              const n4 = a2[t4], i4 = a2[e3];
              i4.start <= n4.start + n4.count + 1 ? n4.count = Math.max(n4.count, i4.start + i4.count - n4.start) : (++t4, a2[t4] = i4);
            }
            a2.length = t4 + 1;
            for (let t5 = 0, n4 = a2.length; t5 < n4; t5++) {
              const n5 = a2[t5];
              e2.bufferSubData(i3, n5.start * r3.BYTES_PER_ELEMENT, r3, n5.start, n5.count);
            }
            n3.clearUpdateRanges();
          }
          n3.onUploadCallback();
        }(r2.buffer, n2, i2), r2.version = n2.version;
      }
    } };
  }
  var Bn2 = { alphahash_fragment: "#ifdef USE_ALPHAHASH\n	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;\n#endif", alphahash_pars_fragment: "#ifdef USE_ALPHAHASH\n	const float ALPHA_HASH_SCALE = 0.05;\n	float hash2D( vec2 value ) {\n		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );\n	}\n	float hash3D( vec3 value ) {\n		return hash2D( vec2( hash2D( value.xy ), value.z ) );\n	}\n	float getAlphaHashThreshold( vec3 position ) {\n		float maxDeriv = max(\n			length( dFdx( position.xyz ) ),\n			length( dFdy( position.xyz ) )\n		);\n		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );\n		vec2 pixScales = vec2(\n			exp2( floor( log2( pixScale ) ) ),\n			exp2( ceil( log2( pixScale ) ) )\n		);\n		vec2 alpha = vec2(\n			hash3D( floor( pixScales.x * position.xyz ) ),\n			hash3D( floor( pixScales.y * position.xyz ) )\n		);\n		float lerpFactor = fract( log2( pixScale ) );\n		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;\n		float a = min( lerpFactor, 1.0 - lerpFactor );\n		vec3 cases = vec3(\n			x * x / ( 2.0 * a * ( 1.0 - a ) ),\n			( x - 0.5 * a ) / ( 1.0 - a ),\n			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )\n		);\n		float threshold = ( x < ( 1.0 - a ) )\n			? ( ( x < a ) ? cases.x : cases.y )\n			: cases.z;\n		return clamp( threshold , 1.0e-6, 1.0 );\n	}\n#endif", alphamap_fragment: "#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;\n#endif", alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif", alphatest_fragment: "#ifdef USE_ALPHATEST\n	#ifdef ALPHA_TO_COVERAGE\n	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );\n	if ( diffuseColor.a == 0.0 ) discard;\n	#else\n	if ( diffuseColor.a < alphaTest ) discard;\n	#endif\n#endif", alphatest_pars_fragment: "#ifdef USE_ALPHATEST\n	uniform float alphaTest;\n#endif", aomap_fragment: "#ifdef USE_AOMAP\n	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;\n	reflectedLight.indirectDiffuse *= ambientOcclusion;\n	#if defined( USE_CLEARCOAT ) \n		clearcoatSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_SHEEN ) \n		sheenSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD )\n		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );\n		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n	#endif\n#endif", aomap_pars_fragment: "#ifdef USE_AOMAP\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n#endif", batching_pars_vertex: "#ifdef USE_BATCHING\n	#if ! defined( GL_ANGLE_multi_draw )\n	#define gl_DrawID _gl_DrawID\n	uniform int _gl_DrawID;\n	#endif\n	uniform highp sampler2D batchingTexture;\n	uniform highp usampler2D batchingIdTexture;\n	mat4 getBatchingMatrix( const in float i ) {\n		int size = textureSize( batchingTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n	float getIndirectIndex( const in int i ) {\n		int size = textureSize( batchingIdTexture, 0 ).x;\n		int x = i % size;\n		int y = i / size;\n		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );\n	}\n#endif\n#ifdef USE_BATCHING_COLOR\n	uniform sampler2D batchingColorTexture;\n	vec4 getBatchingColor( const in float i ) {\n		int size = textureSize( batchingColorTexture, 0 ).x;\n		int j = int( i );\n		int x = j % size;\n		int y = j / size;\n		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );\n	}\n#endif", batching_vertex: "#ifdef USE_BATCHING\n	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );\n#endif", begin_vertex: "vec3 transformed = vec3( position );\n#ifdef USE_ALPHAHASH\n	vPosition = vec3( position );\n#endif", beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n	vec3 objectTangent = vec3( tangent.xyz );\n#endif", bsdfs: "float G_BlinnPhong_Implicit( ) {\n	return 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( specularColor, 1.0, dotVH );\n	float G = G_BlinnPhong_Implicit( );\n	float D = D_BlinnPhong( shininess, dotNH );\n	return F * ( G * D );\n} // validated", iridescence_fragment: "#ifdef USE_IRIDESCENCE\n	const mat3 XYZ_TO_REC709 = mat3(\n		 3.2404542, -0.9692660,  0.0556434,\n		-1.5371385,  1.8760108, -0.2040259,\n		-0.4985314,  0.0415560,  1.0572252\n	);\n	vec3 Fresnel0ToIor( vec3 fresnel0 ) {\n		vec3 sqrtF0 = sqrt( fresnel0 );\n		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n	}\n	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n	}\n	float IorToFresnel0( float transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n	}\n	vec3 evalSensitivity( float OPD, vec3 shift ) {\n		float phase = 2.0 * PI * OPD * 1.0e-9;\n		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n		xyz /= 1.0685e-7;\n		vec3 rgb = XYZ_TO_REC709 * xyz;\n		return rgb;\n	}\n	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n		vec3 I;\n		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n		float cosTheta2Sq = 1.0 - sinTheta2Sq;\n		if ( cosTheta2Sq < 0.0 ) {\n			return vec3( 1.0 );\n		}\n		float cosTheta2 = sqrt( cosTheta2Sq );\n		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n		float R12 = F_Schlick( R0, 1.0, cosTheta1 );\n		float T121 = 1.0 - R12;\n		float phi12 = 0.0;\n		if ( iridescenceIOR < outsideIOR ) phi12 = PI;\n		float phi21 = PI - phi12;\n		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n		vec3 phi23 = vec3( 0.0 );\n		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n		vec3 phi = vec3( phi21 ) + phi23;\n		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n		vec3 r123 = sqrt( R123 );\n		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n		vec3 C0 = R12 + Rs;\n		I = C0;\n		vec3 Cm = Rs - T121;\n		for ( int m = 1; m <= 2; ++ m ) {\n			Cm *= r123;\n			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n			I += Cm * Sm;\n		}\n		return max( I, vec3( 0.0 ) );\n	}\n#endif", bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n	vec2 dHdxy_fwd() {\n		vec2 dSTdx = dFdx( vBumpMapUv );\n		vec2 dSTdy = dFdy( vBumpMapUv );\n		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;\n		return vec2( dBx, dBy );\n	}\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );\n		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );\n		vec3 vN = surf_norm;\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n		float fDet = dot( vSigmaX, R1 ) * faceDirection;\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n	}\n#endif", clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n	vec4 plane;\n	#ifdef ALPHA_TO_COVERAGE\n		float distanceToPlane, distanceGradient;\n		float clipOpacity = 1.0;\n		#pragma unroll_loop_start\n		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n			distanceGradient = fwidth( distanceToPlane ) / 2.0;\n			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n			if ( clipOpacity == 0.0 ) discard;\n		}\n		#pragma unroll_loop_end\n		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n			float unionClipOpacity = 1.0;\n			#pragma unroll_loop_start\n			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n				plane = clippingPlanes[ i ];\n				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n				distanceGradient = fwidth( distanceToPlane ) / 2.0;\n				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n			}\n			#pragma unroll_loop_end\n			clipOpacity *= 1.0 - unionClipOpacity;\n		#endif\n		diffuseColor.a *= clipOpacity;\n		if ( diffuseColor.a == 0.0 ) discard;\n	#else\n		#pragma unroll_loop_start\n		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n		}\n		#pragma unroll_loop_end\n		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n			bool clipped = true;\n			#pragma unroll_loop_start\n			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n				plane = clippingPlanes[ i ];\n				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n			}\n			#pragma unroll_loop_end\n			if ( clipped ) discard;\n		#endif\n	#endif\n#endif", clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif", clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n#endif", clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n	vClipPosition = - mvPosition.xyz;\n#endif", color_fragment: "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )\n	diffuseColor *= vColor;\n#endif", color_pars_fragment: "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#endif", color_pars_vertex: "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n	varying vec4 vColor;\n#endif", color_vertex: "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n	vColor = vec4( 1.0 );\n#endif\n#ifdef USE_COLOR_ALPHA\n	vColor *= color;\n#elif defined( USE_COLOR )\n	vColor.rgb *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n	vColor.rgb *= instanceColor.rgb;\n#endif\n#ifdef USE_BATCHING_COLOR\n	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );\n#endif", common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n	const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n	return fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n	float precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n	float precisionSafeLength( vec3 v ) {\n		float maxComponent = max3( abs( v ) );\n		return length( v / maxComponent ) * maxComponent;\n	}\n#endif\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n	bool visible;\n};\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\n#ifdef USE_ALPHAHASH\n	varying vec3 vPosition;\n#endif\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n	return m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n	return vec2( u, v );\n}\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n	return RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n} // validated", cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n	#define cubeUV_minMipLevel 4.0\n	#define cubeUV_minTileSize 16.0\n	float getFace( vec3 direction ) {\n		vec3 absDirection = abs( direction );\n		float face = - 1.0;\n		if ( absDirection.x > absDirection.z ) {\n			if ( absDirection.x > absDirection.y )\n				face = direction.x > 0.0 ? 0.0 : 3.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		} else {\n			if ( absDirection.z > absDirection.y )\n				face = direction.z > 0.0 ? 2.0 : 5.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		}\n		return face;\n	}\n	vec2 getUV( vec3 direction, float face ) {\n		vec2 uv;\n		if ( face == 0.0 ) {\n			uv = vec2( direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 1.0 ) {\n			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n		} else if ( face == 2.0 ) {\n			uv = vec2( - direction.x, direction.y ) / abs( direction.z );\n		} else if ( face == 3.0 ) {\n			uv = vec2( - direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 4.0 ) {\n			uv = vec2( - direction.x, direction.z ) / abs( direction.y );\n		} else {\n			uv = vec2( direction.x, direction.y ) / abs( direction.z );\n		}\n		return 0.5 * ( uv + 1.0 );\n	}\n	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n		float face = getFace( direction );\n		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n		mipInt = max( mipInt, cubeUV_minMipLevel );\n		float faceSize = exp2( mipInt );\n		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n		if ( face > 2.0 ) {\n			uv.y += faceSize;\n			face -= 3.0;\n		}\n		uv.x += face * faceSize;\n		uv.x += filterInt * 3.0 * cubeUV_minTileSize;\n		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n		uv.x *= CUBEUV_TEXEL_WIDTH;\n		uv.y *= CUBEUV_TEXEL_HEIGHT;\n		#ifdef texture2DGradEXT\n			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n		#else\n			return texture2D( envMap, uv ).rgb;\n		#endif\n	}\n	#define cubeUV_r0 1.0\n	#define cubeUV_m0 - 2.0\n	#define cubeUV_r1 0.8\n	#define cubeUV_m1 - 1.0\n	#define cubeUV_r4 0.4\n	#define cubeUV_m4 2.0\n	#define cubeUV_r5 0.305\n	#define cubeUV_m5 3.0\n	#define cubeUV_r6 0.21\n	#define cubeUV_m6 4.0\n	float roughnessToMip( float roughness ) {\n		float mip = 0.0;\n		if ( roughness >= cubeUV_r1 ) {\n			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n		} else if ( roughness >= cubeUV_r4 ) {\n			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n		} else if ( roughness >= cubeUV_r5 ) {\n			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n		} else if ( roughness >= cubeUV_r6 ) {\n			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n		} else {\n			mip = - 2.0 * log2( 1.16 * roughness );		}\n		return mip;\n	}\n	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n		float mipF = fract( mip );\n		float mipInt = floor( mip );\n		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n		if ( mipF == 0.0 ) {\n			return vec4( color0, 1.0 );\n		} else {\n			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n			return vec4( mix( color0, color1, mipF ), 1.0 );\n		}\n	}\n#endif", defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_TANGENT\n	vec3 transformedTangent = objectTangent;\n#endif\n#ifdef USE_BATCHING\n	mat3 bm = mat3( batchingMatrix );\n	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );\n	transformedNormal = bm * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = bm * transformedTangent;\n	#endif\n#endif\n#ifdef USE_INSTANCING\n	mat3 im = mat3( instanceMatrix );\n	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );\n	transformedNormal = im * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = im * transformedTangent;\n	#endif\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n	transformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;\n	#ifdef FLIP_SIDED\n		transformedTangent = - transformedTangent;\n	#endif\n#endif", displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n#endif", displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );\n#endif", emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );\n	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE\n		emissiveColor = sRGBTransferEOTF( emissiveColor );\n	#endif\n	totalEmissiveRadiance *= emissiveColor.rgb;\n#endif", emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n	uniform sampler2D emissiveMap;\n#endif", colorspace_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );", colorspace_pars_fragment: "vec4 LinearTransferOETF( in vec4 value ) {\n	return value;\n}\nvec4 sRGBTransferEOTF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 sRGBTransferOETF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}", envmap_fragment: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vec3 cameraToFrag;\n		if ( isOrthographic ) {\n			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToFrag = normalize( vWorldPosition - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( cameraToFrag, worldNormal );\n		#else\n			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n		#endif\n	#else\n		vec3 reflectVec = vReflect;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );\n		#ifdef ENVMAP_BLENDING_MULTIPLY\n			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n		#elif defined( ENVMAP_BLENDING_MIX )\n			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n		#elif defined( ENVMAP_BLENDING_ADD )\n			outgoingLight += envColor.xyz * specularStrength * reflectivity;\n		#endif\n	#endif\n#endif", envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float envMapIntensity;\n	uniform mat3 envMapRotation;\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n#endif", envmap_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float reflectivity;\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		varying vec3 vWorldPosition;\n		uniform float refractionRatio;\n	#else\n		varying vec3 vReflect;\n	#endif\n#endif", envmap_pars_vertex: "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		\n		varying vec3 vWorldPosition;\n	#else\n		varying vec3 vReflect;\n		uniform float refractionRatio;\n	#endif\n#endif", envmap_physical_pars_fragment: "#ifdef USE_ENVMAP\n	vec3 getIBLIrradiance( const in vec3 normal ) {\n		#ifdef ENVMAP_TYPE_CUBE_UV\n			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );\n			return PI * envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n		#ifdef ENVMAP_TYPE_CUBE_UV\n			vec3 reflectVec = reflect( - viewDir, normal );\n			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );\n			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );\n			return envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	#ifdef USE_ANISOTROPY\n		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {\n			#ifdef ENVMAP_TYPE_CUBE_UV\n				vec3 bentNormal = cross( bitangent, viewDir );\n				bentNormal = normalize( cross( bentNormal, bitangent ) );\n				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );\n				return getIBLRadiance( viewDir, bentNormal, roughness );\n			#else\n				return vec3( 0.0 );\n			#endif\n		}\n	#endif\n#endif", envmap_vertex: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vWorldPosition = worldPosition.xyz;\n	#else\n		vec3 cameraToVertex;\n		if ( isOrthographic ) {\n			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vReflect = reflect( cameraToVertex, worldNormal );\n		#else\n			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#endif\n#endif", fog_vertex: "#ifdef USE_FOG\n	vFogDepth = - mvPosition.z;\n#endif", fog_pars_vertex: "#ifdef USE_FOG\n	varying float vFogDepth;\n#endif", fog_fragment: "#ifdef USE_FOG\n	#ifdef FOG_EXP2\n		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n	#else\n		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n	#endif\n	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif", fog_pars_fragment: "#ifdef USE_FOG\n	uniform vec3 fogColor;\n	varying float vFogDepth;\n	#ifdef FOG_EXP2\n		uniform float fogDensity;\n	#else\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n#endif", gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n	uniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n	float dotNL = dot( normal, lightDirection );\n	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n	#ifdef USE_GRADIENTMAP\n		return vec3( texture2D( gradientMap, coord ).r );\n	#else\n		vec2 fw = fwidth( coord ) * 0.5;\n		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n	#endif\n}", lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n#endif", lights_lambert_fragment: "LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;", lights_lambert_pars_fragment: "varying vec3 vViewPosition;\nstruct LambertMaterial {\n	vec3 diffuseColor;\n	float specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Lambert\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert", lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\n#if defined( USE_LIGHT_PROBES )\n	uniform vec3 lightProbe[ 9 ];\n#endif\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n	float x = normal.x, y = normal.y, z = normal.z;\n	vec3 result = shCoefficients[ 0 ] * 0.886227;\n	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n	return result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n	return irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n	vec3 irradiance = ambientLightColor;\n	return irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n	if ( cutoffDistance > 0.0 ) {\n		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n	}\n	return distanceFalloff;\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n	return smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n	struct DirectionalLight {\n		vec3 direction;\n		vec3 color;\n	};\n	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {\n		light.color = directionalLight.color;\n		light.direction = directionalLight.direction;\n		light.visible = true;\n	}\n#endif\n#if NUM_POINT_LIGHTS > 0\n	struct PointLight {\n		vec3 position;\n		vec3 color;\n		float distance;\n		float decay;\n	};\n	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = pointLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		light.color = pointLight.color;\n		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n		light.visible = ( light.color != vec3( 0.0 ) );\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	struct SpotLight {\n		vec3 position;\n		vec3 direction;\n		vec3 color;\n		float distance;\n		float decay;\n		float coneCos;\n		float penumbraCos;\n	};\n	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = spotLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float angleCos = dot( light.direction, spotLight.direction );\n		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n		if ( spotAttenuation > 0.0 ) {\n			float lightDistance = length( lVector );\n			light.color = spotLight.color * spotAttenuation;\n			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n			light.visible = ( light.color != vec3( 0.0 ) );\n		} else {\n			light.color = vec3( 0.0 );\n			light.visible = false;\n		}\n	}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n	struct RectAreaLight {\n		vec3 color;\n		vec3 position;\n		vec3 halfWidth;\n		vec3 halfHeight;\n	};\n	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;\n	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	struct HemisphereLight {\n		vec3 direction;\n		vec3 skyColor;\n		vec3 groundColor;\n	};\n	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n		float dotNL = dot( normal, hemiLight.direction );\n		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n		return irradiance;\n	}\n#endif\n#include <lightprobes_pars_fragment>", lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;", lights_toon_pars_fragment: "varying vec3 vViewPosition;\nstruct ToonMaterial {\n	vec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Toon\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon", lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;", lights_phong_pars_fragment: "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n	vec3 diffuseColor;\n	vec3 specularColor;\n	float specularShininess;\n	float specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong", lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.metalness = metalnessFactor;\nvec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n	material.ior = ior;\n	#ifdef USE_SPECULAR\n		float specularIntensityFactor = specularIntensity;\n		vec3 specularColorFactor = specularColor;\n		#ifdef USE_SPECULAR_COLORMAP\n			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;\n		#endif\n		#ifdef USE_SPECULAR_INTENSITYMAP\n			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;\n		#endif\n		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n	#else\n		float specularIntensityFactor = 1.0;\n		vec3 specularColorFactor = vec3( 1.0 );\n		material.specularF90 = 1.0;\n	#endif\n	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;\n	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );\n#else\n	material.specularColor = vec3( 0.04 );\n	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );\n	material.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n	material.clearcoat = clearcoat;\n	material.clearcoatRoughness = clearcoatRoughness;\n	material.clearcoatF0 = vec3( 0.04 );\n	material.clearcoatF90 = 1.0;\n	#ifdef USE_CLEARCOATMAP\n		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;\n	#endif\n	#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;\n	#endif\n	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n	material.clearcoatRoughness += geometryRoughness;\n	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_DISPERSION\n	material.dispersion = dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n	material.iridescence = iridescence;\n	material.iridescenceIOR = iridescenceIOR;\n	#ifdef USE_IRIDESCENCEMAP\n		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;\n	#endif\n	#ifdef USE_IRIDESCENCE_THICKNESSMAP\n		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;\n	#else\n		material.iridescenceThickness = iridescenceThicknessMaximum;\n	#endif\n#endif\n#ifdef USE_SHEEN\n	material.sheenColor = sheenColor;\n	#ifdef USE_SHEEN_COLORMAP\n		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;\n	#endif\n	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	#ifdef USE_ANISOTROPYMAP\n		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );\n		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;\n		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;\n	#else\n		vec2 anisotropyV = anisotropyVector;\n	#endif\n	material.anisotropy = length( anisotropyV );\n	if( material.anisotropy == 0.0 ) {\n		anisotropyV = vec2( 1.0, 0.0 );\n	} else {\n		anisotropyV /= material.anisotropy;\n		material.anisotropy = saturate( material.anisotropy );\n	}\n	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );\n	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;\n	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;\n#endif", lights_physical_pars_fragment: "uniform sampler2D dfgLUT;\nstruct PhysicalMaterial {\n	vec3 diffuseColor;\n	vec3 diffuseContribution;\n	vec3 specularColor;\n	vec3 specularColorBlended;\n	float roughness;\n	float metalness;\n	float specularF90;\n	float dispersion;\n	#ifdef USE_CLEARCOAT\n		float clearcoat;\n		float clearcoatRoughness;\n		vec3 clearcoatF0;\n		float clearcoatF90;\n	#endif\n	#ifdef USE_IRIDESCENCE\n		float iridescence;\n		float iridescenceIOR;\n		float iridescenceThickness;\n		vec3 iridescenceFresnel;\n		vec3 iridescenceF0;\n		vec3 iridescenceFresnelDielectric;\n		vec3 iridescenceFresnelMetallic;\n	#endif\n	#ifdef USE_SHEEN\n		vec3 sheenColor;\n		float sheenRoughness;\n	#endif\n	#ifdef IOR\n		float ior;\n	#endif\n	#ifdef USE_TRANSMISSION\n		float transmission;\n		float transmissionAlpha;\n		float thickness;\n		float attenuationDistance;\n		vec3 attenuationColor;\n	#endif\n	#ifdef USE_ANISOTROPY\n		float anisotropy;\n		float alphaT;\n		vec3 anisotropyT;\n		vec3 anisotropyB;\n	#endif\n};\nvec3 clearcoatSpecularDirect = vec3( 0.0 );\nvec3 clearcoatSpecularIndirect = vec3( 0.0 );\nvec3 sheenSpecularDirect = vec3( 0.0 );\nvec3 sheenSpecularIndirect = vec3(0.0 );\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	return 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n	float a2 = pow2( alpha );\n	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n	return RECIPROCAL_PI * a2 / pow2( denom );\n}\n#ifdef USE_ANISOTROPY\n	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {\n		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );\n		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );\n		return 0.5 / max( gv + gl, EPSILON );\n	}\n	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {\n		float a2 = alphaT * alphaB;\n		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );\n		highp float v2 = dot( v, v );\n		float w2 = a2 / v2;\n		return RECIPROCAL_PI * a2 * pow2 ( w2 );\n	}\n#endif\n#ifdef USE_CLEARCOAT\n	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {\n		vec3 f0 = material.clearcoatF0;\n		float f90 = material.clearcoatF90;\n		float roughness = material.clearcoatRoughness;\n		float alpha = pow2( roughness );\n		vec3 halfDir = normalize( lightDir + viewDir );\n		float dotNL = saturate( dot( normal, lightDir ) );\n		float dotNV = saturate( dot( normal, viewDir ) );\n		float dotNH = saturate( dot( normal, halfDir ) );\n		float dotVH = saturate( dot( viewDir, halfDir ) );\n		vec3 F = F_Schlick( f0, f90, dotVH );\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n		return F * ( V * D );\n	}\n#endif\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n	vec3 f0 = material.specularColorBlended;\n	float f90 = material.specularF90;\n	float roughness = material.roughness;\n	float alpha = pow2( roughness );\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( f0, f90, dotVH );\n	#ifdef USE_IRIDESCENCE\n		F = mix( F, material.iridescenceFresnel, material.iridescence );\n	#endif\n	#ifdef USE_ANISOTROPY\n		float dotTL = dot( material.anisotropyT, lightDir );\n		float dotTV = dot( material.anisotropyT, viewDir );\n		float dotTH = dot( material.anisotropyT, halfDir );\n		float dotBL = dot( material.anisotropyB, lightDir );\n		float dotBV = dot( material.anisotropyB, viewDir );\n		float dotBH = dot( material.anisotropyB, halfDir );\n		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );\n		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );\n	#else\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n	#endif\n	return F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n	const float LUT_SIZE = 64.0;\n	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n	const float LUT_BIAS = 0.5 / LUT_SIZE;\n	float dotNV = saturate( dot( N, V ) );\n	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n	uv = uv * LUT_SCALE + LUT_BIAS;\n	return uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n	float l = length( f );\n	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n	float x = dot( v1, v2 );\n	float y = abs( x );\n	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n	float b = 3.4175940 + ( 4.1616724 + y ) * y;\n	float v = a / b;\n	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n	return cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n	vec3 lightNormal = cross( v1, v2 );\n	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n	vec3 T1, T2;\n	T1 = normalize( V - N * dot( V, N ) );\n	T2 = - cross( N, T1 );\n	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );\n	vec3 coords[ 4 ];\n	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n	coords[ 0 ] = normalize( coords[ 0 ] );\n	coords[ 1 ] = normalize( coords[ 1 ] );\n	coords[ 2 ] = normalize( coords[ 2 ] );\n	coords[ 3 ] = normalize( coords[ 3 ] );\n	vec3 vectorFormFactor = vec3( 0.0 );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n	return vec3( result );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n	float alpha = pow2( roughness );\n	float invAlpha = 1.0 / alpha;\n	float cos2h = dotNH * dotNH;\n	float sin2h = max( 1.0 - cos2h, 0.0078125 );\n	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float D = D_Charlie( sheenRoughness, dotNH );\n	float V = V_Neubelt( dotNV, dotNL );\n	return sheenColor * ( D * V );\n}\n#endif\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float r2 = roughness * roughness;\n	float rInv = 1.0 / ( roughness + 0.1 );\n	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;\n	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;\n	float DG = exp( a * dotNV + b );\n	return saturate( DG );\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;\n	return specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n	float dotNV = saturate( dot( normal, viewDir ) );\n	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;\n	#ifdef USE_IRIDESCENCE\n		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n	#else\n		vec3 Fr = specularColor;\n	#endif\n	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n	float Ess = fab.x + fab.y;\n	float Ems = 1.0 - Ess;\n	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n	singleScatter += FssEss;\n	multiScatter += Fms * Ems;\n}\nvec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;\n	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;\n	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;\n	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;\n	float Ess_V = dfgV.x + dfgV.y;\n	float Ess_L = dfgL.x + dfgL.y;\n	float Ems_V = 1.0 - Ess_V;\n	float Ems_L = 1.0 - Ess_L;\n	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;\n	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );\n	float compensationFactor = Ems_V * Ems_L;\n	vec3 multiScatter = Fms * compensationFactor;\n	return singleScatter + multiScatter;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n		vec3 normal = geometryNormal;\n		vec3 viewDir = geometryViewDir;\n		vec3 position = geometryPosition;\n		vec3 lightPos = rectAreaLight.position;\n		vec3 halfWidth = rectAreaLight.halfWidth;\n		vec3 halfHeight = rectAreaLight.halfHeight;\n		vec3 lightColor = rectAreaLight.color;\n		float roughness = material.roughness;\n		vec3 rectCoords[ 4 ];\n		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n		vec2 uv = LTC_Uv( normal, viewDir, roughness );\n		vec4 t1 = texture2D( ltc_1, uv );\n		vec4 t2 = texture2D( ltc_2, uv );\n		mat3 mInv = mat3(\n			vec3( t1.x, 0, t1.y ),\n			vec3(    0, 1,    0 ),\n			vec3( t1.z, 0, t1.w )\n		);\n		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );\n		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n		#ifdef USE_CLEARCOAT\n			vec3 Ncc = geometryClearcoatNormal;\n			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );\n			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );\n			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );\n			mat3 mInvClearcoat = mat3(\n				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),\n				vec3(             0, 1,             0 ),\n				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )\n			);\n			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;\n			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );\n		#endif\n	}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifdef USE_CLEARCOAT\n		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );\n		vec3 ccIrradiance = dotNLcc * directLight.color;\n		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );\n	#endif\n	#ifdef USE_SHEEN\n \n 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );\n \n 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );\n \n 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );\n \n 		irradiance *= sheenEnergyComp;\n \n 	#endif\n	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );\n	#ifdef USE_SHEEN\n		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;\n		diffuse *= sheenEnergyComp;\n	#endif\n	reflectedLight.indirectDiffuse += diffuse;\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n	#ifdef USE_CLEARCOAT\n		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;\n 	#endif\n	vec3 singleScatteringDielectric = vec3( 0.0 );\n	vec3 multiScatteringDielectric = vec3( 0.0 );\n	vec3 singleScatteringMetallic = vec3( 0.0 );\n	vec3 multiScatteringMetallic = vec3( 0.0 );\n	#ifdef USE_IRIDESCENCE\n		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );\n		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );\n	#else\n		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );\n		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );\n	#endif\n	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );\n	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );\n	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;\n	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );\n	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n	vec3 indirectSpecular = radiance * singleScattering;\n	indirectSpecular += multiScattering * cosineWeightedIrradiance;\n	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;\n	#ifdef USE_SHEEN\n		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;\n		indirectSpecular *= sheenEnergyComp;\n		indirectDiffuse *= sheenEnergyComp;\n	#endif\n	reflectedLight.indirectSpecular += indirectSpecular;\n	reflectedLight.indirectDiffuse += indirectDiffuse;\n}\n#define RE_Direct				RE_Direct_Physical\n#define RE_Direct_RectArea		RE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular		RE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}", lights_fragment_begin: "\nvec3 geometryPosition = - vViewPosition;\nvec3 geometryNormal = normal;\nvec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\nvec3 geometryClearcoatNormal = vec3( 0.0 );\n#ifdef USE_CLEARCOAT\n	geometryClearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n	float dotNVi = saturate( dot( normal, geometryViewDir ) );\n	if ( material.iridescenceThickness == 0.0 ) {\n		material.iridescence = 0.0;\n	} else {\n		material.iridescence = saturate( material.iridescence );\n	}\n	if ( material.iridescence > 0.0 ) {\n		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );\n		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );\n		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n	}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n	PointLight pointLight;\n	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		getPointLightInfo( pointLight, geometryPosition, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )\n		pointLightShadow = pointLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n	SpotLight spotLight;\n	vec4 spotColor;\n	vec3 spotLightCoord;\n	bool inSpotLightMap;\n	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		getSpotLightInfo( spotLight, geometryPosition, directLight );\n		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n		#else\n		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#endif\n		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n		#endif\n		#undef SPOT_LIGHT_MAP_INDEX\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		spotLightShadow = spotLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n	DirectionalLight directionalLight;\n	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		getDirectionalLightInfo( directionalLight, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n		directionalLightShadow = directionalLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n	RectAreaLight rectAreaLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n		rectAreaLight = rectAreaLights[ i ];\n		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n	vec3 iblIrradiance = vec3( 0.0 );\n	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n	#if defined( USE_LIGHT_PROBES )\n		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );\n	#endif\n	#if ( NUM_HEMI_LIGHTS > 0 )\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );\n		}\n		#pragma unroll_loop_end\n	#endif\n	#ifdef USE_LIGHT_PROBES_GRID\n		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;\n		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );\n		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );\n	#endif\n#endif\n#if defined( RE_IndirectSpecular )\n	vec3 radiance = vec3( 0.0 );\n	vec3 clearcoatRadiance = vec3( 0.0 );\n#endif", lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n		irradiance += lightMapIrradiance;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )\n		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )\n			iblIrradiance += getIBLIrradiance( geometryNormal );\n		#endif\n	#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n	#ifdef USE_ANISOTROPY\n		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );\n	#else\n		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );\n	#endif\n	#ifdef USE_CLEARCOAT\n		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );\n	#endif\n#endif", lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n	#if defined( LAMBERT ) || defined( PHONG )\n		irradiance += iblIrradiance;\n	#endif\n	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif", lightprobes_pars_fragment: "#ifdef USE_LIGHT_PROBES_GRID\nuniform highp sampler3D probesSH;\nuniform vec3 probesMin;\nuniform vec3 probesMax;\nuniform vec3 probesResolution;\nvec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {\n	vec3 res = probesResolution;\n	vec3 gridRange = probesMax - probesMin;\n	vec3 resMinusOne = res - 1.0;\n	vec3 probeSpacing = gridRange / resMinusOne;\n	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;\n	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );\n	uvw = uvw * resMinusOne / res + 0.5 / res;\n	float nz          = res.z;\n	float paddedSlices = nz + 2.0;\n	float atlasDepth  = 7.0 * paddedSlices;\n	float uvZBase     = uvw.z * nz + 1.0;\n	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );\n	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );\n	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );\n	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );\n	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );\n	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );\n	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );\n	vec3 c0 = s0.xyz;\n	vec3 c1 = vec3( s0.w, s1.xy );\n	vec3 c2 = vec3( s1.zw, s2.x );\n	vec3 c3 = s2.yzw;\n	vec3 c4 = s3.xyz;\n	vec3 c5 = vec3( s3.w, s4.xy );\n	vec3 c6 = vec3( s4.zw, s5.x );\n	vec3 c7 = s5.yzw;\n	vec3 c8 = s6.xyz;\n	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;\n	vec3 result = c0 * 0.886227;\n	result += c1 * 2.0 * 0.511664 * y;\n	result += c2 * 2.0 * 0.511664 * z;\n	result += c3 * 2.0 * 0.511664 * x;\n	result += c4 * 2.0 * 0.429043 * x * y;\n	result += c5 * 2.0 * 0.429043 * y * z;\n	result += c6 * ( 0.743125 * z * z - 0.247708 );\n	result += c7 * 2.0 * 0.429043 * x * z;\n	result += c8 * 0.429043 * ( x * x - y * y );\n	return max( result, vec3( 0.0 ) );\n}\n#endif", logdepthbuf_fragment: "#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )\n	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif", logdepthbuf_pars_fragment: "#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )\n	uniform float logDepthBufFC;\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif", logdepthbuf_pars_vertex: "#ifdef USE_LOGARITHMIC_DEPTH_BUFFER\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif", logdepthbuf_vertex: "#ifdef USE_LOGARITHMIC_DEPTH_BUFFER\n	vFragDepth = 1.0 + gl_Position.w;\n	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n#endif", map_fragment: "#ifdef USE_MAP\n	vec4 sampledDiffuseColor = texture2D( map, vMapUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );\n	#endif\n	diffuseColor *= sampledDiffuseColor;\n#endif", map_pars_fragment: "#ifdef USE_MAP\n	uniform sampler2D map;\n#endif", map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	#if defined( USE_POINTS_UV )\n		vec2 uv = vUv;\n	#else\n		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n	#endif\n#endif\n#ifdef USE_MAP\n	diffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif", map_particle_pars_fragment: "#if defined( USE_POINTS_UV )\n	varying vec2 vUv;\n#else\n	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n		uniform mat3 uvTransform;\n	#endif\n#endif\n#ifdef USE_MAP\n	uniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif", metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );\n	metalnessFactor *= texelMetalness.b;\n#endif", metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n	uniform sampler2D metalnessMap;\n#endif", morphinstance_vertex: "#ifdef USE_INSTANCING_MORPH\n	float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;\n	}\n#endif", morphcolor_vertex: "#if defined( USE_MORPHCOLORS )\n	vColor *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		#if defined( USE_COLOR_ALPHA )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n		#elif defined( USE_COLOR )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n		#endif\n	}\n#endif", morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n	objectNormal *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n	}\n#endif", morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n	#ifndef USE_INSTANCING_MORPH\n		uniform float morphTargetBaseInfluence;\n		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n	#endif\n	uniform sampler2DArray morphTargetsTexture;\n	uniform ivec2 morphTargetsTextureSize;\n	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n		int y = texelIndex / morphTargetsTextureSize.x;\n		int x = texelIndex - y * morphTargetsTextureSize.x;\n		ivec3 morphUV = ivec3( x, y, morphTargetIndex );\n		return texelFetch( morphTargetsTexture, morphUV, 0 );\n	}\n#endif", morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n	transformed *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n	}\n#endif", normal_fragment_begin: "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n	vec3 fdx = dFdx( vViewPosition );\n	vec3 fdy = dFdy( vViewPosition );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n#else\n	vec3 normal = normalize( vNormal );\n	#ifdef DOUBLE_SIDED\n		normal *= faceDirection;\n	#endif\n#endif\n#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )\n	#ifdef USE_TANGENT\n		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn = getTangentFrame( - vViewPosition, normal,\n		#if defined( USE_NORMALMAP )\n			vNormalMapUv\n		#elif defined( USE_CLEARCOAT_NORMALMAP )\n			vClearcoatNormalMapUv\n		#else\n			vUv\n		#endif\n		);\n	#endif\n	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n		tbn[0] *= faceDirection;\n		tbn[1] *= faceDirection;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	#ifdef USE_TANGENT\n		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );\n	#endif\n	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n		tbn2[0] *= faceDirection;\n		tbn2[1] *= faceDirection;\n	#endif\n#endif\nvec3 nonPerturbedNormal = normal;", normal_fragment_maps: "#ifdef USE_NORMALMAP_OBJECTSPACE\n	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	#ifdef FLIP_SIDED\n		normal = - normal;\n	#endif\n	#ifdef DOUBLE_SIDED\n		normal = normal * faceDirection;\n	#endif\n	normal = normalize( normalMatrix * normal );\n#elif defined( USE_NORMALMAP_TANGENTSPACE )\n	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	#if defined( USE_PACKED_NORMALMAP )\n		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );\n	#endif\n	mapN.xy *= normalScale;\n	normal = normalize( tbn * mapN );\n#elif defined( USE_BUMPMAP )\n	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif", normal_pars_fragment: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif", normal_pars_vertex: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif", normal_vertex: "#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n	#ifdef USE_TANGENT\n		vTangent = normalize( transformedTangent );\n		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n	#endif\n#endif", normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n#endif\n#ifdef USE_NORMALMAP_OBJECTSPACE\n	uniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )\n	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {\n		vec3 q0 = dFdx( eye_pos.xyz );\n		vec3 q1 = dFdy( eye_pos.xyz );\n		vec2 st0 = dFdx( uv.st );\n		vec2 st1 = dFdy( uv.st );\n		vec3 N = surf_norm;\n		vec3 q1perp = cross( q1, N );\n		vec3 q0perp = cross( N, q0 );\n		vec3 T = q1perp * st0.x + q0perp * st1.x;\n		vec3 B = q1perp * st0.y + q0perp * st1.y;\n		float det = max( dot( T, T ), dot( B, B ) );\n		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );\n		return mat3( T * scale, B * scale, N );\n	}\n#endif", clearcoat_normal_fragment_begin: "#ifdef USE_CLEARCOAT\n	vec3 clearcoatNormal = nonPerturbedNormal;\n#endif", clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;\n	clearcoatMapN.xy *= clearcoatNormalScale;\n	clearcoatNormal = normalize( tbn2 * clearcoatMapN );\n#endif", clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n	uniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform sampler2D clearcoatNormalMap;\n	uniform vec2 clearcoatNormalScale;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform sampler2D clearcoatRoughnessMap;\n#endif", iridescence_pars_fragment: "#ifdef USE_IRIDESCENCEMAP\n	uniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform sampler2D iridescenceThicknessMap;\n#endif", opaque_fragment: "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );", packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n	return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n	return 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;\nconst float Inv255 = 1. / 255.;\nconst vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );\nconst vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );\nconst vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );\nconst vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );\nvec4 packDepthToRGBA( const in float v ) {\n	if( v <= 0.0 )\n		return vec4( 0., 0., 0., 0. );\n	if( v >= 1.0 )\n		return vec4( 1., 1., 1., 1. );\n	float vuf;\n	float af = modf( v * PackFactors.a, vuf );\n	float bf = modf( vuf * ShiftRight8, vuf );\n	float gf = modf( vuf * ShiftRight8, vuf );\n	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );\n}\nvec3 packDepthToRGB( const in float v ) {\n	if( v <= 0.0 )\n		return vec3( 0., 0., 0. );\n	if( v >= 1.0 )\n		return vec3( 1., 1., 1. );\n	float vuf;\n	float bf = modf( v * PackFactors.b, vuf );\n	float gf = modf( vuf * ShiftRight8, vuf );\n	return vec3( vuf * Inv255, gf * PackUpscale, bf );\n}\nvec2 packDepthToRG( const in float v ) {\n	if( v <= 0.0 )\n		return vec2( 0., 0. );\n	if( v >= 1.0 )\n		return vec2( 1., 1. );\n	float vuf;\n	float gf = modf( v * 256., vuf );\n	return vec2( vuf * Inv255, gf );\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n	return dot( v, UnpackFactors4 );\n}\nfloat unpackRGBToDepth( const in vec3 v ) {\n	return dot( v, UnpackFactors3 );\n}\nfloat unpackRGToDepth( const in vec2 v ) {\n	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;\n}\nvec4 pack2HalfToRGBA( const in vec2 v ) {\n	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( const in vec4 v ) {\n	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	#ifdef USE_REVERSED_DEPTH_BUFFER\n	\n		return depth * ( far - near ) - far;\n	#else\n		return depth * ( near - far ) - near;\n	#endif\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	\n	#ifdef USE_REVERSED_DEPTH_BUFFER\n		return ( near * far ) / ( ( near - far ) * depth - near );\n	#else\n		return ( near * far ) / ( ( far - near ) * depth - far );\n	#endif\n}", premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n	gl_FragColor.rgb *= gl_FragColor.a;\n#endif", project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_BATCHING\n	mvPosition = batchingMatrix * mvPosition;\n#endif\n#ifdef USE_INSTANCING\n	mvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;", dithering_fragment: "#ifdef DITHERING\n	gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif", dithering_pars_fragment: "#ifdef DITHERING\n	vec3 dithering( vec3 color ) {\n		float grid_position = rand( gl_FragCoord.xy );\n		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n		return color + dither_shift_RGB;\n	}\n#endif", roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );\n	roughnessFactor *= texelRoughness.g;\n#endif", roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n	uniform sampler2D roughnessMap;\n#endif", shadowmap_pars_fragment: "#if NUM_SPOT_LIGHT_COORDS > 0\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		#if defined( SHADOWMAP_TYPE_PCF )\n			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		#else\n			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		#endif\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		#if defined( SHADOWMAP_TYPE_PCF )\n			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		#else\n			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		#endif\n		struct SpotLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		#if defined( SHADOWMAP_TYPE_PCF )\n			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		#elif defined( SHADOWMAP_TYPE_BASIC )\n			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		#endif\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n	#if defined( SHADOWMAP_TYPE_PCF )\n		float interleavedGradientNoise( vec2 position ) {\n			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );\n		}\n		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {\n			const float goldenAngle = 2.399963229728653;\n			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );\n			float theta = float( sampleIndex ) * goldenAngle + phi;\n			return vec2( cos( theta ), sin( theta ) ) * r;\n		}\n	#endif\n	#if defined( SHADOWMAP_TYPE_PCF )\n		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n			float shadow = 1.0;\n			shadowCoord.xyz /= shadowCoord.w;\n			shadowCoord.z += shadowBias;\n			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n			if ( frustumTest ) {\n				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n				float radius = shadowRadius * texelSize.x;\n				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;\n				shadow = (\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )\n				) * 0.2;\n			}\n			return mix( 1.0, shadow, shadowIntensity );\n		}\n	#elif defined( SHADOWMAP_TYPE_VSM )\n		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n			float shadow = 1.0;\n			shadowCoord.xyz /= shadowCoord.w;\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				shadowCoord.z -= shadowBias;\n			#else\n				shadowCoord.z += shadowBias;\n			#endif\n			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n			if ( frustumTest ) {\n				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;\n				float mean = distribution.x;\n				float variance = distribution.y * distribution.y;\n				#ifdef USE_REVERSED_DEPTH_BUFFER\n					float hard_shadow = step( mean, shadowCoord.z );\n				#else\n					float hard_shadow = step( shadowCoord.z, mean );\n				#endif\n				\n				if ( hard_shadow == 1.0 ) {\n					shadow = 1.0;\n				} else {\n					variance = max( variance, 0.0000001 );\n					float d = shadowCoord.z - mean;\n					float p_max = variance / ( variance + d * d );\n					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );\n					shadow = max( hard_shadow, p_max );\n				}\n			}\n			return mix( 1.0, shadow, shadowIntensity );\n		}\n	#else\n		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n			float shadow = 1.0;\n			shadowCoord.xyz /= shadowCoord.w;\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				shadowCoord.z -= shadowBias;\n			#else\n				shadowCoord.z += shadowBias;\n			#endif\n			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n			if ( frustumTest ) {\n				float depth = texture2D( shadowMap, shadowCoord.xy ).r;\n				#ifdef USE_REVERSED_DEPTH_BUFFER\n					shadow = step( depth, shadowCoord.z );\n				#else\n					shadow = step( shadowCoord.z, depth );\n				#endif\n			}\n			return mix( 1.0, shadow, shadowIntensity );\n		}\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	#if defined( SHADOWMAP_TYPE_PCF )\n	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		float shadow = 1.0;\n		vec3 lightToPosition = shadowCoord.xyz;\n		vec3 bd3D = normalize( lightToPosition );\n		vec3 absVec = abs( lightToPosition );\n		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );\n		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );\n				dp -= shadowBias;\n			#else\n				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );\n				dp += shadowBias;\n			#endif\n			float texelSize = shadowRadius / shadowMapSize.x;\n			vec3 absDir = abs( bd3D );\n			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );\n			tangent = normalize( cross( bd3D, tangent ) );\n			vec3 bitangent = cross( bd3D, tangent );\n			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;\n			vec2 sample0 = vogelDiskSample( 0, 5, phi );\n			vec2 sample1 = vogelDiskSample( 1, 5, phi );\n			vec2 sample2 = vogelDiskSample( 2, 5, phi );\n			vec2 sample3 = vogelDiskSample( 3, 5, phi );\n			vec2 sample4 = vogelDiskSample( 4, 5, phi );\n			shadow = (\n				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +\n				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +\n				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +\n				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +\n				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )\n			) * 0.2;\n		}\n		return mix( 1.0, shadow, shadowIntensity );\n	}\n	#elif defined( SHADOWMAP_TYPE_BASIC )\n	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		float shadow = 1.0;\n		vec3 lightToPosition = shadowCoord.xyz;\n		vec3 absVec = abs( lightToPosition );\n		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );\n		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {\n			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );\n			dp += shadowBias;\n			vec3 bd3D = normalize( lightToPosition );\n			float depth = textureCube( shadowMap, bd3D ).r;\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				depth = 1.0 - depth;\n			#endif\n			shadow = step( dp, depth );\n		}\n		return mix( 1.0, shadow, shadowIntensity );\n	}\n	#endif\n	#endif\n#endif", shadowmap_pars_vertex: "#if NUM_SPOT_LIGHT_COORDS > 0\n	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		struct SpotLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n#endif", shadowmap_vertex: "#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n	#ifdef HAS_NORMAL\n		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n	#else\n		vec3 shadowWorldNormal = vec3( 0.0 );\n	#endif\n	vec4 shadowWorldPosition;\n#endif\n#if defined( USE_SHADOWMAP )\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if NUM_SPOT_LIGHT_COORDS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n		shadowWorldPosition = worldPosition;\n		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n		#endif\n		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n#endif", shadowmask_pars_fragment: "float getShadowMask() {\n	float shadow = 1.0;\n	#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		directionalLight = directionalLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n		spotLight = spotLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )\n	PointLightShadow pointLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		pointLight = pointLightShadows[ i ];\n		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#endif\n	return shadow;\n}", skinbase_vertex: "#ifdef USE_SKINNING\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif", skinning_pars_vertex: "#ifdef USE_SKINNING\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n	uniform highp sampler2D boneTexture;\n	mat4 getBoneMatrix( const in float i ) {\n		int size = textureSize( boneTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n#endif", skinning_vertex: "#ifdef USE_SKINNING\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	transformed = ( bindMatrixInverse * skinned ).xyz;\n#endif", skinnormal_vertex: "#ifdef USE_SKINNING\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n	#ifdef USE_TANGENT\n		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#endif\n#endif", specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );\n	specularStrength = texelSpecular.r;\n#else\n	specularStrength = 1.0;\n#endif", specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif", tonemapping_fragment: "#if defined( TONE_MAPPING )\n	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif", tonemapping_pars_fragment: "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n	return saturate( toneMappingExposure * color );\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	return saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 CineonToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	color = max( vec3( 0.0 ), color - 0.004 );\n	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n	return a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n	const mat3 ACESInputMat = mat3(\n		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),\n		vec3( 0.04823, 0.01566, 0.83777 )\n	);\n	const mat3 ACESOutputMat = mat3(\n		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),\n		vec3( -0.07367, -0.00605,  1.07602 )\n	);\n	color *= toneMappingExposure / 0.6;\n	color = ACESInputMat * color;\n	color = RRTAndODTFit( color );\n	color = ACESOutputMat * color;\n	return saturate( color );\n}\nconst mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(\n	vec3( 1.6605, - 0.1246, - 0.0182 ),\n	vec3( - 0.5876, 1.1329, - 0.1006 ),\n	vec3( - 0.0728, - 0.0083, 1.1187 )\n);\nconst mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(\n	vec3( 0.6274, 0.0691, 0.0164 ),\n	vec3( 0.3293, 0.9195, 0.0880 ),\n	vec3( 0.0433, 0.0113, 0.8956 )\n);\nvec3 agxDefaultContrastApprox( vec3 x ) {\n	vec3 x2 = x * x;\n	vec3 x4 = x2 * x2;\n	return + 15.5 * x4 * x2\n		- 40.14 * x4 * x\n		+ 31.96 * x4\n		- 6.868 * x2 * x\n		+ 0.4298 * x2\n		+ 0.1191 * x\n		- 0.00232;\n}\nvec3 AgXToneMapping( vec3 color ) {\n	const mat3 AgXInsetMatrix = mat3(\n		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),\n		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),\n		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )\n	);\n	const mat3 AgXOutsetMatrix = mat3(\n		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),\n		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),\n		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )\n	);\n	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;\n	color *= toneMappingExposure;\n	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;\n	color = AgXInsetMatrix * color;\n	color = max( color, 1e-10 );	color = log2( color );\n	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );\n	color = clamp( color, 0.0, 1.0 );\n	color = agxDefaultContrastApprox( color );\n	color = AgXOutsetMatrix * color;\n	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );\n	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;\n	color = clamp( color, 0.0, 1.0 );\n	return color;\n}\nvec3 NeutralToneMapping( vec3 color ) {\n	const float StartCompression = 0.8 - 0.04;\n	const float Desaturation = 0.15;\n	color *= toneMappingExposure;\n	float x = min( color.r, min( color.g, color.b ) );\n	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;\n	color -= offset;\n	float peak = max( color.r, max( color.g, color.b ) );\n	if ( peak < StartCompression ) return color;\n	float d = 1. - StartCompression;\n	float newPeak = 1. - d * d / ( peak + d - StartCompression );\n	color *= newPeak / peak;\n	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );\n	return mix( color, vec3( newPeak ), g );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }", transmission_fragment: "#ifdef USE_TRANSMISSION\n	material.transmission = transmission;\n	material.transmissionAlpha = 1.0;\n	material.thickness = thickness;\n	material.attenuationDistance = attenuationDistance;\n	material.attenuationColor = attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;\n	#endif\n	vec3 pos = vWorldPosition;\n	vec3 v = normalize( cameraPosition - pos );\n	vec3 n = inverseTransformDirection( normal, viewMatrix );\n	vec4 transmitted = getIBLVolumeRefraction(\n		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,\n		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,\n		material.attenuationColor, material.attenuationDistance );\n	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );\n	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );\n#endif", transmission_pars_fragment: "#ifdef USE_TRANSMISSION\n	uniform float transmission;\n	uniform float thickness;\n	uniform float attenuationDistance;\n	uniform vec3 attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		uniform sampler2D transmissionMap;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		uniform sampler2D thicknessMap;\n	#endif\n	uniform vec2 transmissionSamplerSize;\n	uniform sampler2D transmissionSamplerMap;\n	uniform mat4 modelMatrix;\n	uniform mat4 projectionMatrix;\n	varying vec3 vWorldPosition;\n	float w0( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );\n	}\n	float w1( float a ) {\n		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );\n	}\n	float w2( float a ){\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );\n	}\n	float w3( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * a * a );\n	}\n	float g0( float a ) {\n		return w0( a ) + w1( a );\n	}\n	float g1( float a ) {\n		return w2( a ) + w3( a );\n	}\n	float h0( float a ) {\n		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );\n	}\n	float h1( float a ) {\n		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );\n	}\n	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {\n		uv = uv * texelSize.zw + 0.5;\n		vec2 iuv = floor( uv );\n		vec2 fuv = fract( uv );\n		float g0x = g0( fuv.x );\n		float g1x = g1( fuv.x );\n		float h0x = h0( fuv.x );\n		float h1x = h1( fuv.x );\n		float h0y = h0( fuv.y );\n		float h1y = h1( fuv.y );\n		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +\n			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );\n	}\n	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {\n		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );\n		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );\n		vec2 fLodSizeInv = 1.0 / fLodSize;\n		vec2 cLodSizeInv = 1.0 / cLodSize;\n		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );\n		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );\n		return mix( fSample, cSample, fract( lod ) );\n	}\n	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n		vec3 modelScale;\n		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n		return normalize( refractionVector ) * thickness * modelScale;\n	}\n	float applyIorToRoughness( const in float roughness, const in float ior ) {\n		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n	}\n	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );\n	}\n	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n		if ( isinf( attenuationDistance ) ) {\n			return vec3( 1.0 );\n		} else {\n			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;\n		}\n	}\n	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,\n		const in vec3 attenuationColor, const in float attenuationDistance ) {\n		vec4 transmittedLight;\n		vec3 transmittance;\n		#ifdef USE_DISPERSION\n			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;\n			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );\n			for ( int i = 0; i < 3; i ++ ) {\n				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );\n				vec3 refractedRayExit = position + transmissionRay;\n				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n				vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n				refractionCoords += 1.0;\n				refractionCoords /= 2.0;\n				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );\n				transmittedLight[ i ] = transmissionSample[ i ];\n				transmittedLight.a += transmissionSample.a;\n				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];\n			}\n			transmittedLight.a /= 3.0;\n		#else\n			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n			vec3 refractedRayExit = position + transmissionRay;\n			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n			vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n			refractionCoords += 1.0;\n			refractionCoords /= 2.0;\n			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );\n		#endif\n		vec3 attenuatedColor = transmittance * transmittedLight.rgb;\n		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;\n		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );\n	}\n#endif", uv_pars_fragment: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif", uv_pars_vertex: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	uniform mat3 mapTransform;\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform mat3 alphaMapTransform;\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	uniform mat3 lightMapTransform;\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	uniform mat3 aoMapTransform;\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	uniform mat3 bumpMapTransform;\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	uniform mat3 normalMapTransform;\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	uniform mat3 displacementMapTransform;\n	varying vec2 vDisplacementMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	uniform mat3 emissiveMapTransform;\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	uniform mat3 metalnessMapTransform;\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	uniform mat3 roughnessMapTransform;\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	uniform mat3 anisotropyMapTransform;\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	uniform mat3 clearcoatMapTransform;\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform mat3 clearcoatNormalMapTransform;\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform mat3 clearcoatRoughnessMapTransform;\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	uniform mat3 sheenColorMapTransform;\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	uniform mat3 sheenRoughnessMapTransform;\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	uniform mat3 iridescenceMapTransform;\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform mat3 iridescenceThicknessMapTransform;\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	uniform mat3 specularMapTransform;\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	uniform mat3 specularColorMapTransform;\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	uniform mat3 specularIntensityMapTransform;\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif", uv_vertex: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	vUv = vec3( uv, 1 ).xy;\n#endif\n#ifdef USE_MAP\n	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ALPHAMAP\n	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_LIGHTMAP\n	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_AOMAP\n	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_BUMPMAP\n	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_NORMALMAP\n	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_EMISSIVEMAP\n	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_METALNESSMAP\n	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOATMAP\n	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULARMAP\n	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_THICKNESSMAP\n	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;\n#endif", worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n	vec4 worldPosition = vec4( transformed, 1.0 );\n	#ifdef USE_BATCHING\n		worldPosition = batchingMatrix * worldPosition;\n	#endif\n	#ifdef USE_INSTANCING\n		worldPosition = instanceMatrix * worldPosition;\n	#endif\n	worldPosition = modelMatrix * worldPosition;\n#endif", background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	gl_Position = vec4( position.xy, 1.0, 1.0 );\n}", background_frag: "uniform sampler2D t2D;\nuniform float backgroundIntensity;\nvarying vec2 vUv;\nvoid main() {\n	vec4 texColor = texture2D( t2D, vUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}", backgroundCube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}", backgroundCube_frag: "#ifdef ENVMAP_TYPE_CUBE\n	uniform samplerCube envMap;\n#elif defined( ENVMAP_TYPE_CUBE_UV )\n	uniform sampler2D envMap;\n#endif\nuniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nuniform mat3 backgroundRotation;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );\n	#elif defined( ENVMAP_TYPE_CUBE_UV )\n		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );\n	#else\n		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}", cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}", cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n	gl_FragColor = texColor;\n	gl_FragColor.a *= opacity;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}", depth_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#include <morphinstance_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vHighPrecisionZW = gl_Position.zw;\n}", depth_frag: "#if DEPTH_PACKING == 3200\n	uniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <clipping_planes_fragment>\n	#if DEPTH_PACKING == 3200\n		diffuseColor.a = opacity;\n	#endif\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <logdepthbuf_fragment>\n	#ifdef USE_REVERSED_DEPTH_BUFFER\n		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];\n	#else\n		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;\n	#endif\n	#if DEPTH_PACKING == 3200\n		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n	#elif DEPTH_PACKING == 3201\n		gl_FragColor = packDepthToRGBA( fragCoordZ );\n	#elif DEPTH_PACKING == 3202\n		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );\n	#elif DEPTH_PACKING == 3203\n		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );\n	#endif\n}", distance_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#include <morphinstance_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	vWorldPosition = worldPosition.xyz;\n}", distance_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <clipping_planes_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	float dist = length( vWorldPosition - referencePosition );\n	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n	dist = saturate( dist );\n	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );\n}", equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}", equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vec3 direction = normalize( vWorldDirection );\n	vec2 sampleUV = equirectUv( direction );\n	gl_FragColor = texture2D( tEquirect, sampleUV );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}", linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	vLineDistance = scale * lineDistance;\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}", linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}", meshbasic_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinbase_vertex>\n		#include <skinnormal_vertex>\n		#include <defaultnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <fog_vertex>\n}", meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n	#else\n		reflectedLight.indirectDiffuse += vec3( 1.0 );\n	#endif\n	#include <aomap_fragment>\n	reflectedLight.indirectDiffuse *= diffuseColor.rgb;\n	vec3 outgoingLight = reflectedLight.indirectDiffuse;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", meshlambert_vert: "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}", meshlambert_frag: "#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_lambert_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n	vViewPosition = - mvPosition.xyz;\n}", meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	vec3 viewDir = normalize( vViewPosition );\n	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n	vec3 y = cross( viewDir, x );\n	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n	#ifdef USE_MATCAP\n		vec4 matcapColor = texture2D( matcap, uv );\n	#else\n		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n	#endif\n	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", meshnormal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	vViewPosition = - mvPosition.xyz;\n#endif\n}", meshnormal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );\n	#ifdef OPAQUE\n		gl_FragColor.a = 1.0;\n	#endif\n}", meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}", meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_phong_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n	varying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n	vWorldPosition = worldPosition.xyz;\n#endif\n}", meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n	#define IOR\n	#define USE_SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n	uniform float ior;\n#endif\n#ifdef USE_SPECULAR\n	uniform float specularIntensity;\n	uniform vec3 specularColor;\n	#ifdef USE_SPECULAR_COLORMAP\n		uniform sampler2D specularColorMap;\n	#endif\n	#ifdef USE_SPECULAR_INTENSITYMAP\n		uniform sampler2D specularIntensityMap;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT\n	uniform float clearcoat;\n	uniform float clearcoatRoughness;\n#endif\n#ifdef USE_DISPERSION\n	uniform float dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n	uniform float iridescence;\n	uniform float iridescenceIOR;\n	uniform float iridescenceThicknessMinimum;\n	uniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n	uniform vec3 sheenColor;\n	uniform float sheenRoughness;\n	#ifdef USE_SHEEN_COLORMAP\n		uniform sampler2D sheenColorMap;\n	#endif\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		uniform sampler2D sheenRoughnessMap;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	uniform vec2 anisotropyVector;\n	#ifdef USE_ANISOTROPYMAP\n		uniform sampler2D anisotropyMap;\n	#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <roughnessmap_fragment>\n	#include <metalnessmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <clearcoat_normal_fragment_begin>\n	#include <clearcoat_normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_physical_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n	#include <transmission_fragment>\n	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n	#ifdef USE_SHEEN\n \n		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;\n \n 	#endif\n	#ifdef USE_CLEARCOAT\n		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );\n		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;\n	#endif\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}", meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_toon_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n#ifdef USE_POINTS_UV\n	varying vec2 vUv;\n	uniform mat3 uvTransform;\n#endif\nvoid main() {\n	#ifdef USE_POINTS_UV\n		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	#endif\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	gl_PointSize = size;\n	#ifdef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n	#endif\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <fog_vertex>\n}", points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_particle_fragment>\n	#include <color_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}", shadow_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}", shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <logdepthbuf_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n	#include <logdepthbuf_fragment>\n	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}", sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	vec4 mvPosition = modelViewMatrix[ 3 ];\n	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );\n	#ifndef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) scale *= - mvPosition.z;\n	#endif\n	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n	vec2 rotatedPosition;\n	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n	mvPosition.xy += rotatedPosition;\n	gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}", sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n}" };
  var Gn2 = { common: { diffuse: { value: new Pr(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new Is() }, alphaMap: { value: null }, alphaMapTransform: { value: new Is() }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new Is() } }, envmap: { envMap: { value: null }, envMapRotation: { value: new Is() }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: 0.98 }, dfgLUT: { value: null } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new Is() } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new Is() } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new Is() }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new Is() }, normalScale: { value: new _s(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new Is() }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new Is() } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new Is() } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new Is() } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new Pr(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null }, probesSH: { value: null }, probesMin: { value: new Ts() }, probesMax: { value: new Ts() }, probesResolution: { value: new Ts() } }, points: { diffuse: { value: new Pr(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new Is() }, alphaTest: { value: 0 }, uvTransform: { value: new Is() } }, sprite: { diffuse: { value: new Pr(16777215) }, opacity: { value: 1 }, center: { value: new _s(0.5, 0.5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new Is() }, alphaMap: { value: null }, alphaMapTransform: { value: new Is() }, alphaTest: { value: 0 } } };
  var Hn2 = { basic: { uniforms: Xl([Gn2.common, Gn2.specularmap, Gn2.envmap, Gn2.aomap, Gn2.lightmap, Gn2.fog]), vertexShader: Bn2.meshbasic_vert, fragmentShader: Bn2.meshbasic_frag }, lambert: { uniforms: Xl([Gn2.common, Gn2.specularmap, Gn2.envmap, Gn2.aomap, Gn2.lightmap, Gn2.emissivemap, Gn2.bumpmap, Gn2.normalmap, Gn2.displacementmap, Gn2.fog, Gn2.lights, { emissive: { value: new Pr(0) }, envMapIntensity: { value: 1 } }]), vertexShader: Bn2.meshlambert_vert, fragmentShader: Bn2.meshlambert_frag }, phong: { uniforms: Xl([Gn2.common, Gn2.specularmap, Gn2.envmap, Gn2.aomap, Gn2.lightmap, Gn2.emissivemap, Gn2.bumpmap, Gn2.normalmap, Gn2.displacementmap, Gn2.fog, Gn2.lights, { emissive: { value: new Pr(0) }, specular: { value: new Pr(1118481) }, shininess: { value: 30 }, envMapIntensity: { value: 1 } }]), vertexShader: Bn2.meshphong_vert, fragmentShader: Bn2.meshphong_frag }, standard: { uniforms: Xl([Gn2.common, Gn2.envmap, Gn2.aomap, Gn2.lightmap, Gn2.emissivemap, Gn2.bumpmap, Gn2.normalmap, Gn2.displacementmap, Gn2.roughnessmap, Gn2.metalnessmap, Gn2.fog, Gn2.lights, { emissive: { value: new Pr(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: Bn2.meshphysical_vert, fragmentShader: Bn2.meshphysical_frag }, toon: { uniforms: Xl([Gn2.common, Gn2.aomap, Gn2.lightmap, Gn2.emissivemap, Gn2.bumpmap, Gn2.normalmap, Gn2.displacementmap, Gn2.gradientmap, Gn2.fog, Gn2.lights, { emissive: { value: new Pr(0) } }]), vertexShader: Bn2.meshtoon_vert, fragmentShader: Bn2.meshtoon_frag }, matcap: { uniforms: Xl([Gn2.common, Gn2.bumpmap, Gn2.normalmap, Gn2.displacementmap, Gn2.fog, { matcap: { value: null } }]), vertexShader: Bn2.meshmatcap_vert, fragmentShader: Bn2.meshmatcap_frag }, points: { uniforms: Xl([Gn2.points, Gn2.fog]), vertexShader: Bn2.points_vert, fragmentShader: Bn2.points_frag }, dashed: { uniforms: Xl([Gn2.common, Gn2.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: Bn2.linedashed_vert, fragmentShader: Bn2.linedashed_frag }, depth: { uniforms: Xl([Gn2.common, Gn2.displacementmap]), vertexShader: Bn2.depth_vert, fragmentShader: Bn2.depth_frag }, normal: { uniforms: Xl([Gn2.common, Gn2.bumpmap, Gn2.normalmap, Gn2.displacementmap, { opacity: { value: 1 } }]), vertexShader: Bn2.meshnormal_vert, fragmentShader: Bn2.meshnormal_frag }, sprite: { uniforms: Xl([Gn2.sprite, Gn2.fog]), vertexShader: Bn2.sprite_vert, fragmentShader: Bn2.sprite_frag }, background: { uniforms: { uvTransform: { value: new Is() }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: Bn2.background_vert, fragmentShader: Bn2.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 }, backgroundRotation: { value: new Is() } }, vertexShader: Bn2.backgroundCube_vert, fragmentShader: Bn2.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: Bn2.cube_vert, fragmentShader: Bn2.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: Bn2.equirect_vert, fragmentShader: Bn2.equirect_frag }, distance: { uniforms: Xl([Gn2.common, Gn2.displacementmap, { referencePosition: { value: new Ts() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: Bn2.distance_vert, fragmentShader: Bn2.distance_frag }, shadow: { uniforms: Xl([Gn2.lights, Gn2.fog, { color: { value: new Pr(0) }, opacity: { value: 1 } }]), vertexShader: Bn2.shadow_vert, fragmentShader: Bn2.shadow_frag } };
  Hn2.physical = { uniforms: Xl([Hn2.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new Is() }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new Is() }, clearcoatNormalScale: { value: new _s(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new Is() }, dispersion: { value: 0 }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new Is() }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new Is() }, sheen: { value: 0 }, sheenColor: { value: new Pr(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new Is() }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new Is() }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new Is() }, transmissionSamplerSize: { value: new _s() }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new Is() }, attenuationDistance: { value: 0 }, attenuationColor: { value: new Pr(0) }, specularColor: { value: new Pr(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new Is() }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new Is() }, anisotropyVector: { value: new _s() }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new Is() } }]), vertexShader: Bn2.meshphysical_vert, fragmentShader: Bn2.meshphysical_frag };
  var Vn2 = { r: 0, b: 0, g: 0 };
  var Wn2 = new Qs();
  var zn2 = new Is();
  function kn2(e2, t2, i2, r2, u2, g2) {
    const v2 = new Pr(0);
    let E2, S2, T2 = true === u2 ? 0 : 1, M2 = null, x2 = 0, A2 = null;
    function R2(e3) {
      let n2 = true === e3.isScene ? e3.background : null;
      if (n2 && n2.isTexture) {
        const i3 = e3.backgroundBlurriness > 0;
        n2 = t2.get(n2, i3);
      }
      return n2;
    }
    function b2(t3, n2) {
      t3.getRGB(Vn2, Hl(e2)), i2.buffers.color.setClear(Vn2.r, Vn2.g, Vn2.b, n2, g2);
    }
    return { getClearColor: function() {
      return v2;
    }, setClearColor: function(e3, t3 = 1) {
      v2.set(e3), T2 = t3, b2(v2, T2);
    }, getClearAlpha: function() {
      return T2;
    }, setClearAlpha: function(e3) {
      T2 = e3, b2(v2, T2);
    }, render: function(t3) {
      let n2 = false;
      const r3 = R2(t3);
      null === r3 ? b2(v2, T2) : r3 && r3.isColor && (b2(r3, 1), n2 = true);
      const a2 = e2.xr.getEnvironmentBlendMode();
      "additive" === a2 ? i2.buffers.color.setClear(0, 0, 0, 1, g2) : "alpha-blend" === a2 && i2.buffers.color.setClear(0, 0, 0, 0, g2), (e2.autoClear || n2) && (i2.buffers.depth.setTest(true), i2.buffers.depth.setMask(true), i2.buffers.color.setMask(true), e2.clear(e2.autoClearColor, e2.autoClearDepth, e2.autoClearStencil));
    }, addToRenderList: function(t3, n2) {
      const i3 = R2(n2);
      i3 && (i3.isCubeTexture || i3.mapping === pt) ? (void 0 === S2 && (S2 = new Ra(new gh(1, 1, 1), new Gl({ name: "BackgroundCubeMaterial", uniforms: Jl(Hn2.backgroundCube.uniforms), vertexShader: Hn2.backgroundCube.vertexShader, fragmentShader: Hn2.backgroundCube.fragmentShader, side: d, depthTest: false, depthWrite: false, fog: false, allowOverride: false })), S2.geometry.deleteAttribute("normal"), S2.geometry.deleteAttribute("uv"), S2.onBeforeRender = function(e3, t4, n3) {
        this.matrixWorld.copyPosition(n3.matrixWorld);
      }, Object.defineProperty(S2.material, "envMap", { get: function() {
        return this.uniforms.envMap.value;
      } }), r2.update(S2)), S2.material.uniforms.envMap.value = i3, S2.material.uniforms.backgroundBlurriness.value = n2.backgroundBlurriness, S2.material.uniforms.backgroundIntensity.value = n2.backgroundIntensity, S2.material.uniforms.backgroundRotation.value.setFromMatrix4(Wn2.makeRotationFromEuler(n2.backgroundRotation)).transpose(), i3.isCubeTexture && false === i3.isRenderTargetTexture && S2.material.uniforms.backgroundRotation.value.premultiply(zn2), S2.material.toneMapped = Rs.getTransfer(i3.colorSpace) !== ri, M2 === i3 && x2 === i3.version && A2 === e2.toneMapping || (S2.material.needsUpdate = true, M2 = i3, x2 = i3.version, A2 = e2.toneMapping), S2.layers.enableAll(), t3.unshift(S2, S2.geometry, S2.material, 0, 0, null)) : i3 && i3.isTexture && (void 0 === E2 && (E2 = new Ra(new Pl(2, 2), new Gl({ name: "BackgroundMaterial", uniforms: Jl(Hn2.background.uniforms), vertexShader: Hn2.background.vertexShader, fragmentShader: Hn2.background.fragmentShader, side: u, depthTest: false, depthWrite: false, fog: false, allowOverride: false })), E2.geometry.deleteAttribute("normal"), Object.defineProperty(E2.material, "map", { get: function() {
        return this.uniforms.t2D.value;
      } }), r2.update(E2)), E2.material.uniforms.t2D.value = i3, E2.material.uniforms.backgroundIntensity.value = n2.backgroundIntensity, E2.material.toneMapped = Rs.getTransfer(i3.colorSpace) !== ri, true === i3.matrixAutoUpdate && i3.updateMatrix(), E2.material.uniforms.uvTransform.value.copy(i3.matrix), M2 === i3 && x2 === i3.version && A2 === e2.toneMapping || (E2.material.needsUpdate = true, M2 = i3, x2 = i3.version, A2 = e2.toneMapping), E2.layers.enableAll(), t3.unshift(E2, E2.geometry, E2.material, 0, 0, null));
    }, dispose: function() {
      void 0 !== S2 && (S2.geometry.dispose(), S2.material.dispose(), S2 = void 0), void 0 !== E2 && (E2.geometry.dispose(), E2.material.dispose(), E2 = void 0);
    } };
  }
  function Xn2(e2, t2) {
    const n2 = e2.getParameter(e2.MAX_VERTEX_ATTRIBS), i2 = {}, r2 = c2(null);
    let a2 = r2, o2 = false;
    function s2(t3) {
      return e2.bindVertexArray(t3);
    }
    function l2(t3) {
      return e2.deleteVertexArray(t3);
    }
    function c2(e3) {
      const t3 = [], i3 = [], r3 = [];
      for (let e4 = 0; e4 < n2; e4++) t3[e4] = 0, i3[e4] = 0, r3[e4] = 0;
      return { geometry: null, program: null, wireframe: false, newAttributes: t3, enabledAttributes: i3, attributeDivisors: r3, object: e3, attributes: {}, index: null };
    }
    function d2() {
      const e3 = a2.newAttributes;
      for (let t3 = 0, n3 = e3.length; t3 < n3; t3++) e3[t3] = 0;
    }
    function u2(e3) {
      f2(e3, 0);
    }
    function f2(t3, n3) {
      const i3 = a2.newAttributes, r3 = a2.enabledAttributes, o3 = a2.attributeDivisors;
      i3[t3] = 1, 0 === r3[t3] && (e2.enableVertexAttribArray(t3), r3[t3] = 1), o3[t3] !== n3 && (e2.vertexAttribDivisor(t3, n3), o3[t3] = n3);
    }
    function p2() {
      const t3 = a2.newAttributes, n3 = a2.enabledAttributes;
      for (let i3 = 0, r3 = n3.length; i3 < r3; i3++) n3[i3] !== t3[i3] && (e2.disableVertexAttribArray(i3), n3[i3] = 0);
    }
    function m2(t3, n3, i3, r3, a3, o3, s3) {
      true === s3 ? e2.vertexAttribIPointer(t3, n3, i3, a3, o3) : e2.vertexAttribPointer(t3, n3, i3, r3, a3, o3);
    }
    function h2() {
      _2(), o2 = true, a2 !== r2 && (a2 = r2, s2(a2.object));
    }
    function _2() {
      r2.geometry = null, r2.program = null, r2.wireframe = false;
    }
    return { setup: function(n3, r3, l3, h3, _3) {
      let v2 = false;
      const E2 = function(t3, n4, r4, a3) {
        const o3 = true === a3.wireframe;
        let s3 = i2[n4.id];
        void 0 === s3 && (s3 = {}, i2[n4.id] = s3);
        const l4 = true === t3.isInstancedMesh ? t3.id : 0;
        let d3 = s3[l4];
        void 0 === d3 && (d3 = {}, s3[l4] = d3);
        let u3 = d3[r4.id];
        void 0 === u3 && (u3 = {}, d3[r4.id] = u3);
        let f3 = u3[o3];
        void 0 === f3 && (f3 = c2(e2.createVertexArray()), u3[o3] = f3);
        return f3;
      }(n3, h3, l3, r3);
      a2 !== E2 && (a2 = E2, s2(a2.object)), v2 = function(e3, t3, n4, i3) {
        const r4 = a2.attributes, o3 = t3.attributes;
        let s3 = 0;
        const l4 = n4.getAttributes();
        for (const t4 in l4) {
          if (l4[t4].location >= 0) {
            const n5 = r4[t4];
            let i4 = o3[t4];
            if (void 0 === i4 && ("instanceMatrix" === t4 && e3.instanceMatrix && (i4 = e3.instanceMatrix), "instanceColor" === t4 && e3.instanceColor && (i4 = e3.instanceColor)), void 0 === n5) return true;
            if (n5.attribute !== i4) return true;
            if (i4 && n5.data !== i4.data) return true;
            s3++;
          }
        }
        return a2.attributesNum !== s3 || a2.index !== i3;
      }(n3, h3, l3, _3), v2 && function(e3, t3, n4, i3) {
        const r4 = {}, o3 = t3.attributes;
        let s3 = 0;
        const l4 = n4.getAttributes();
        for (const t4 in l4) {
          if (l4[t4].location >= 0) {
            let n5 = o3[t4];
            void 0 === n5 && ("instanceMatrix" === t4 && e3.instanceMatrix && (n5 = e3.instanceMatrix), "instanceColor" === t4 && e3.instanceColor && (n5 = e3.instanceColor));
            const i4 = {};
            i4.attribute = n5, n5 && n5.data && (i4.data = n5.data), r4[t4] = i4, s3++;
          }
        }
        a2.attributes = r4, a2.attributesNum = s3, a2.index = i3;
      }(n3, h3, l3, _3), null !== _3 && t2.update(_3, e2.ELEMENT_ARRAY_BUFFER), (v2 || o2) && (o2 = false, function(n4, i3, r4, a3) {
        d2();
        const o3 = a3.attributes, s3 = r4.getAttributes(), l4 = i3.defaultAttributeValues;
        for (const i4 in s3) {
          const r5 = s3[i4];
          if (r5.location >= 0) {
            let s4 = o3[i4];
            if (void 0 === s4 && ("instanceMatrix" === i4 && n4.instanceMatrix && (s4 = n4.instanceMatrix), "instanceColor" === i4 && n4.instanceColor && (s4 = n4.instanceColor)), void 0 !== s4) {
              const i5 = s4.normalized, o4 = s4.itemSize, l5 = t2.get(s4);
              if (void 0 === l5) continue;
              const c3 = l5.buffer, d3 = l5.type, p3 = l5.bytesPerElement, h4 = d3 === e2.INT || d3 === e2.UNSIGNED_INT || s4.gpuType === kt;
              if (s4.isInterleavedBufferAttribute) {
                const t3 = s4.data, l6 = t3.stride, _4 = s4.offset;
                if (t3.isInstancedInterleavedBuffer) {
                  for (let e3 = 0; e3 < r5.locationSize; e3++) f2(r5.location + e3, t3.meshPerAttribute);
                  true !== n4.isInstancedMesh && void 0 === a3._maxInstanceCount && (a3._maxInstanceCount = t3.meshPerAttribute * t3.count);
                } else for (let e3 = 0; e3 < r5.locationSize; e3++) u2(r5.location + e3);
                e2.bindBuffer(e2.ARRAY_BUFFER, c3);
                for (let e3 = 0; e3 < r5.locationSize; e3++) m2(r5.location + e3, o4 / r5.locationSize, d3, i5, l6 * p3, (_4 + o4 / r5.locationSize * e3) * p3, h4);
              } else {
                if (s4.isInstancedBufferAttribute) {
                  for (let e3 = 0; e3 < r5.locationSize; e3++) f2(r5.location + e3, s4.meshPerAttribute);
                  true !== n4.isInstancedMesh && void 0 === a3._maxInstanceCount && (a3._maxInstanceCount = s4.meshPerAttribute * s4.count);
                } else for (let e3 = 0; e3 < r5.locationSize; e3++) u2(r5.location + e3);
                e2.bindBuffer(e2.ARRAY_BUFFER, c3);
                for (let e3 = 0; e3 < r5.locationSize; e3++) m2(r5.location + e3, o4 / r5.locationSize, d3, i5, o4 * p3, o4 / r5.locationSize * e3 * p3, h4);
              }
            } else if (void 0 !== l4) {
              const t3 = l4[i4];
              if (void 0 !== t3) switch (t3.length) {
                case 2:
                  e2.vertexAttrib2fv(r5.location, t3);
                  break;
                case 3:
                  e2.vertexAttrib3fv(r5.location, t3);
                  break;
                case 4:
                  e2.vertexAttrib4fv(r5.location, t3);
                  break;
                default:
                  e2.vertexAttrib1fv(r5.location, t3);
              }
            }
          }
        }
        p2();
      }(n3, r3, l3, h3), null !== _3 && e2.bindBuffer(e2.ELEMENT_ARRAY_BUFFER, t2.get(_3).buffer));
    }, reset: h2, resetDefaultState: _2, dispose: function() {
      h2();
      for (const e3 in i2) {
        const t3 = i2[e3];
        for (const e4 in t3) {
          const n3 = t3[e4];
          for (const e5 in n3) {
            const t4 = n3[e5];
            for (const e6 in t4) l2(t4[e6].object), delete t4[e6];
            delete n3[e5];
          }
        }
        delete i2[e3];
      }
    }, releaseStatesOfGeometry: function(e3) {
      if (void 0 === i2[e3.id]) return;
      const t3 = i2[e3.id];
      for (const e4 in t3) {
        const n3 = t3[e4];
        for (const e5 in n3) {
          const t4 = n3[e5];
          for (const e6 in t4) l2(t4[e6].object), delete t4[e6];
          delete n3[e5];
        }
      }
      delete i2[e3.id];
    }, releaseStatesOfObject: function(e3) {
      for (const t3 in i2) {
        const n3 = i2[t3], r3 = true === e3.isInstancedMesh ? e3.id : 0, a3 = n3[r3];
        if (void 0 !== a3) {
          for (const e4 in a3) {
            const t4 = a3[e4];
            for (const e5 in t4) l2(t4[e5].object), delete t4[e5];
            delete a3[e4];
          }
          delete n3[r3], 0 === Object.keys(n3).length && delete i2[t3];
        }
      }
    }, releaseStatesOfProgram: function(e3) {
      for (const t3 in i2) {
        const n3 = i2[t3];
        for (const t4 in n3) {
          const i3 = n3[t4];
          if (void 0 === i3[e3.id]) continue;
          const r3 = i3[e3.id];
          for (const e4 in r3) l2(r3[e4].object), delete r3[e4];
          delete i3[e3.id];
        }
      }
    }, initAttributes: d2, enableAttribute: u2, disableUnusedAttributes: p2 };
  }
  function Kn2(e2, t2, n2) {
    let i2;
    this.setMode = function(e3) {
      i2 = e3;
    }, this.render = function(t3, r2) {
      e2.drawArrays(i2, t3, r2), n2.update(r2, i2, 1);
    }, this.renderInstances = function(t3, r2, a2) {
      0 !== a2 && (e2.drawArraysInstanced(i2, t3, r2, a2), n2.update(r2, i2, a2));
    }, this.renderMultiDraw = function(e3, r2, a2) {
      if (0 === a2) return;
      t2.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i2, e3, 0, r2, 0, a2);
      let o2 = 0;
      for (let e4 = 0; e4 < a2; e4++) o2 += r2[e4];
      n2.update(o2, i2, 1);
    };
  }
  function Yn(e2, t2, n2, i2) {
    let r2;
    function a2(t3) {
      if ("highp" === t3) {
        if (e2.getShaderPrecisionFormat(e2.VERTEX_SHADER, e2.HIGH_FLOAT).precision > 0 && e2.getShaderPrecisionFormat(e2.FRAGMENT_SHADER, e2.HIGH_FLOAT).precision > 0) return "highp";
        t3 = "mediump";
      }
      return "mediump" === t3 && e2.getShaderPrecisionFormat(e2.VERTEX_SHADER, e2.MEDIUM_FLOAT).precision > 0 && e2.getShaderPrecisionFormat(e2.FRAGMENT_SHADER, e2.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
    }
    let o2 = void 0 !== n2.precision ? n2.precision : "highp";
    const s2 = a2(o2);
    s2 !== o2 && (as("WebGLRenderer:", o2, "not supported, using", s2, "instead."), o2 = s2);
    const l2 = true === n2.logarithmicDepthBuffer, c2 = true === n2.reversedDepthBuffer && t2.has("EXT_clip_control");
    true === n2.reversedDepthBuffer && false === c2 && as("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");
    return { isWebGL2: true, getMaxAnisotropy: function() {
      if (void 0 !== r2) return r2;
      if (true === t2.has("EXT_texture_filter_anisotropic")) {
        const n3 = t2.get("EXT_texture_filter_anisotropic");
        r2 = e2.getParameter(n3.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
      } else r2 = 0;
      return r2;
    }, getMaxPrecision: a2, textureFormatReadable: function(t3) {
      return t3 === Ut || i2.convert(t3) === e2.getParameter(e2.IMPLEMENTATION_COLOR_READ_FORMAT);
    }, textureTypeReadable: function(n3) {
      const r3 = n3 === Rt && (t2.has("EXT_color_buffer_half_float") || t2.has("EXT_color_buffer_float"));
      return !(n3 !== zt && i2.convert(n3) !== e2.getParameter(e2.IMPLEMENTATION_COLOR_READ_TYPE) && n3 !== Pt && !r3);
    }, precision: o2, logarithmicDepthBuffer: l2, reversedDepthBuffer: c2, maxTextures: e2.getParameter(e2.MAX_TEXTURE_IMAGE_UNITS), maxVertexTextures: e2.getParameter(e2.MAX_VERTEX_TEXTURE_IMAGE_UNITS), maxTextureSize: e2.getParameter(e2.MAX_TEXTURE_SIZE), maxCubemapSize: e2.getParameter(e2.MAX_CUBE_MAP_TEXTURE_SIZE), maxAttributes: e2.getParameter(e2.MAX_VERTEX_ATTRIBS), maxVertexUniforms: e2.getParameter(e2.MAX_VERTEX_UNIFORM_VECTORS), maxVaryings: e2.getParameter(e2.MAX_VARYING_VECTORS), maxFragmentUniforms: e2.getParameter(e2.MAX_FRAGMENT_UNIFORM_VECTORS), maxSamples: e2.getParameter(e2.MAX_SAMPLES), samples: e2.getParameter(e2.SAMPLES) };
  }
  function qn2(t2) {
    const n2 = this;
    let i2 = null, r2 = 0, a2 = false, o2 = false;
    const s2 = new lo(), l2 = new Is(), c2 = { value: null, needsUpdate: false };
    function d2(e2, t3, i3, r3) {
      const a3 = null !== e2 ? e2.length : 0;
      let o3 = null;
      if (0 !== a3) {
        if (o3 = c2.value, true !== r3 || null === o3) {
          const n3 = i3 + 4 * a3, r4 = t3.matrixWorldInverse;
          l2.getNormalMatrix(r4), (null === o3 || o3.length < n3) && (o3 = new Float32Array(n3));
          for (let t4 = 0, n4 = i3; t4 !== a3; ++t4, n4 += 4) s2.copy(e2[t4]).applyMatrix4(r4, l2), s2.normal.toArray(o3, n4), o3[n4 + 3] = s2.constant;
        }
        c2.value = o3, c2.needsUpdate = true;
      }
      return n2.numPlanes = a3, n2.numIntersection = 0, o3;
    }
    this.uniform = c2, this.numPlanes = 0, this.numIntersection = 0, this.init = function(e2, t3) {
      const n3 = 0 !== e2.length || t3 || 0 !== r2 || a2;
      return a2 = t3, r2 = e2.length, n3;
    }, this.beginShadows = function() {
      o2 = true, d2(null);
    }, this.endShadows = function() {
      o2 = false;
    }, this.setGlobalState = function(e2, t3) {
      i2 = d2(e2, t3, 0);
    }, this.setState = function(e2, s3, l3) {
      const u2 = e2.clippingPlanes, f2 = e2.clipIntersection, p2 = e2.clipShadows, m2 = t2.get(e2);
      if (!a2 || null === u2 || 0 === u2.length || o2 && !p2) o2 ? d2(null) : function() {
        c2.value !== i2 && (c2.value = i2, c2.needsUpdate = r2 > 0);
        n2.numPlanes = r2, n2.numIntersection = 0;
      }();
      else {
        const e3 = o2 ? 0 : r2, t3 = 4 * e3;
        let n3 = m2.clippingState || null;
        c2.value = n3, n3 = d2(u2, s3, t3, l3);
        for (let e4 = 0; e4 !== t3; ++e4) n3[e4] = i2[e4];
        m2.clippingState = n3, this.numIntersection = f2 ? this.numPlanes : 0, this.numPlanes += e3;
      }
    };
  }
  zn2.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
  var jn2 = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582];
  var Zn2 = 20;
  var $n2 = new ou();
  var Qn2 = new Pr();
  var Jn2 = null;
  var ei2 = 0;
  var ti2 = 0;
  var ni2 = false;
  var ii2 = new Ts();
  var ri2 = class {
    constructor(e2) {
      this._renderer = e2, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._sizeLods = [], this._sigmas = [], this._lodMeshes = [], this._backgroundBox = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._blurMaterial = null, this._ggxMaterial = null;
    }
    fromScene(e2, t2 = 0, n2 = 0.1, i2 = 100, r2 = {}) {
      const { size: a2 = 256, position: o2 = ii2 } = r2;
      Jn2 = this._renderer.getRenderTarget(), ei2 = this._renderer.getActiveCubeFace(), ti2 = this._renderer.getActiveMipmapLevel(), ni2 = this._renderer.xr.enabled, this._renderer.xr.enabled = false, this._setSize(a2);
      const s2 = this._allocateTargets();
      return s2.depthBuffer = true, this._sceneToCubeUV(e2, n2, i2, s2, o2), t2 > 0 && this._blur(s2, 0, 0, t2), this._applyPMREM(s2), this._cleanup(s2), s2;
    }
    fromEquirectangular(e2, t2 = null) {
      return this._fromTexture(e2, t2);
    }
    fromCubemap(e2, t2 = null) {
      return this._fromTexture(e2, t2);
    }
    compileCubemapShader() {
      null === this._cubemapMaterial && (this._cubemapMaterial = li2(), this._compileMaterial(this._cubemapMaterial));
    }
    compileEquirectangularShader() {
      null === this._equirectMaterial && (this._equirectMaterial = si2(), this._compileMaterial(this._equirectMaterial));
    }
    dispose() {
      this._dispose(), null !== this._cubemapMaterial && this._cubemapMaterial.dispose(), null !== this._equirectMaterial && this._equirectMaterial.dispose(), null !== this._backgroundBox && (this._backgroundBox.geometry.dispose(), this._backgroundBox.material.dispose());
    }
    _setSize(e2) {
      this._lodMax = Math.floor(Math.log2(e2)), this._cubeSize = Math.pow(2, this._lodMax);
    }
    _dispose() {
      null !== this._blurMaterial && this._blurMaterial.dispose(), null !== this._ggxMaterial && this._ggxMaterial.dispose(), null !== this._pingPongRenderTarget && this._pingPongRenderTarget.dispose();
      for (let e2 = 0; e2 < this._lodMeshes.length; e2++) this._lodMeshes[e2].geometry.dispose();
    }
    _cleanup(e2) {
      this._renderer.setRenderTarget(Jn2, ei2, ti2), this._renderer.xr.enabled = ni2, e2.scissorTest = false, oi2(e2, 0, 0, e2.width, e2.height);
    }
    _fromTexture(e2, t2) {
      e2.mapping === lt || e2.mapping === ct ? this._setSize(0 === e2.image.length ? 16 : e2.image[0].width || e2.image[0].image.width) : this._setSize(e2.image.width / 4), Jn2 = this._renderer.getRenderTarget(), ei2 = this._renderer.getActiveCubeFace(), ti2 = this._renderer.getActiveMipmapLevel(), ni2 = this._renderer.xr.enabled, this._renderer.xr.enabled = false;
      const n2 = t2 || this._allocateTargets();
      return this._textureToCubeUV(e2, n2), this._applyPMREM(n2), this._cleanup(n2), n2;
    }
    _allocateTargets() {
      const e2 = 3 * Math.max(this._cubeSize, 112), t2 = 4 * this._cubeSize, n2 = { magFilter: Mt, minFilter: Mt, generateMipmaps: false, type: Rt, format: Ut, colorSpace: ii, depthBuffer: false }, r2 = ai2(e2, t2, n2);
      if (null === this._pingPongRenderTarget || this._pingPongRenderTarget.width !== e2 || this._pingPongRenderTarget.height !== t2) {
        null !== this._pingPongRenderTarget && this._dispose(), this._pingPongRenderTarget = ai2(e2, t2, n2);
        const { _lodMax: r3 } = this;
        ({ lodMeshes: this._lodMeshes, sizeLods: this._sizeLods, sigmas: this._sigmas } = function(e3) {
          const t3 = [], n3 = [], i2 = [];
          let r4 = e3;
          const a2 = e3 - 4 + 1 + jn2.length;
          for (let s2 = 0; s2 < a2; s2++) {
            const a3 = Math.pow(2, r4);
            t3.push(a3);
            let l2 = 1 / a3;
            s2 > e3 - 4 ? l2 = jn2[s2 - e3 + 4 - 1] : 0 === s2 && (l2 = 0), n3.push(l2);
            const c2 = 1 / (a3 - 2), d2 = -c2, u2 = 1 + c2, f2 = [d2, d2, u2, d2, u2, u2, d2, d2, u2, u2, d2, u2], p2 = 6, m2 = 6, h2 = 3, _2 = 2, g2 = 1, v2 = new Float32Array(h2 * m2 * p2), E2 = new Float32Array(_2 * m2 * p2), S2 = new Float32Array(g2 * m2 * p2);
            for (let e4 = 0; e4 < p2; e4++) {
              const t4 = e4 % 3 * 2 / 3 - 1, n4 = e4 > 2 ? 0 : -1, i3 = [t4, n4, 0, t4 + 2 / 3, n4, 0, t4 + 2 / 3, n4 + 1, 0, t4, n4, 0, t4 + 2 / 3, n4 + 1, 0, t4, n4 + 1, 0];
              v2.set(i3, h2 * m2 * e4), E2.set(f2, _2 * m2 * e4);
              const r5 = [e4, e4, e4, e4, e4, e4];
              S2.set(r5, g2 * m2 * e4);
            }
            const T2 = new Wn();
            T2.setAttribute("position", new Mn(v2, h2)), T2.setAttribute("uv", new Mn(E2, _2)), T2.setAttribute("faceIndex", new Mn(S2, g2)), i2.push(new Ra(T2, null)), r4 > 4 && r4--;
          }
          return { lodMeshes: i2, sizeLods: t3, sigmas: n3 };
        }(r3)), this._blurMaterial = function(e3, t3, n3) {
          const r4 = new Float32Array(Zn2), a2 = new Ts(0, 1, 0), o2 = new Gl({ name: "SphericalGaussianBlur", defines: { n: Zn2, CUBEUV_TEXEL_WIDTH: 1 / t3, CUBEUV_TEXEL_HEIGHT: 1 / n3, CUBEUV_MAX_MIP: `${e3}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: r4 }, latitudinal: { value: false }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: a2 } }, vertexShader: ci2(), fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n			uniform int samples;\n			uniform float weights[ n ];\n			uniform bool latitudinal;\n			uniform float dTheta;\n			uniform float mipInt;\n			uniform vec3 poleAxis;\n\n			#define ENVMAP_TYPE_CUBE_UV\n			#include <cube_uv_reflection_fragment>\n\n			vec3 getSample( float theta, vec3 axis ) {\n\n				float cosTheta = cos( theta );\n				// Rodrigues' axis-angle rotation\n				vec3 sampleDirection = vOutputDirection * cosTheta\n					+ cross( axis, vOutputDirection ) * sin( theta )\n					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n				return bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n			}\n\n			void main() {\n\n				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n				}\n\n				axis = normalize( axis );\n\n				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n				for ( int i = 1; i < n; i++ ) {\n\n					if ( i >= samples ) {\n\n						break;\n\n					}\n\n					float theta = dTheta * float( i );\n					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n				}\n\n			}\n		", blending: m, depthTest: false, depthWrite: false });
          return o2;
        }(r3, e2, t2), this._ggxMaterial = function(e3, t3, n3) {
          const i2 = new Gl({ name: "PMREMGGXConvolution", defines: { GGX_SAMPLES: 256, CUBEUV_TEXEL_WIDTH: 1 / t3, CUBEUV_TEXEL_HEIGHT: 1 / n3, CUBEUV_MAX_MIP: `${e3}.0` }, uniforms: { envMap: { value: null }, roughness: { value: 0 }, mipInt: { value: 0 } }, vertexShader: ci2(), fragmentShader: '\n\n			precision highp float;\n			precision highp int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n			uniform float roughness;\n			uniform float mipInt;\n\n			#define ENVMAP_TYPE_CUBE_UV\n			#include <cube_uv_reflection_fragment>\n\n			#define PI 3.14159265359\n\n			// Van der Corput radical inverse\n			float radicalInverse_VdC(uint bits) {\n				bits = (bits << 16u) | (bits >> 16u);\n				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);\n				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);\n				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);\n				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);\n				return float(bits) * 2.3283064365386963e-10; // / 0x100000000\n			}\n\n			// Hammersley sequence\n			vec2 hammersley(uint i, uint N) {\n				return vec2(float(i) / float(N), radicalInverse_VdC(i));\n			}\n\n			// GGX VNDF importance sampling (Eric Heitz 2018)\n			// "Sampling the GGX Distribution of Visible Normals"\n			// https://jcgt.org/published/0007/04/01/\n			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {\n				float alpha = roughness * roughness;\n\n				// Section 4.1: Orthonormal basis\n				vec3 T1 = vec3(1.0, 0.0, 0.0);\n				vec3 T2 = cross(V, T1);\n\n				// Section 4.2: Parameterization of projected area\n				float r = sqrt(Xi.x);\n				float phi = 2.0 * PI * Xi.y;\n				float t1 = r * cos(phi);\n				float t2 = r * sin(phi);\n				float s = 0.5 * (1.0 + V.z);\n				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;\n\n				// Section 4.3: Reprojection onto hemisphere\n				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;\n\n				// Section 3.4: Transform back to ellipsoid configuration\n				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));\n			}\n\n			void main() {\n				vec3 N = normalize(vOutputDirection);\n				vec3 V = N; // Assume view direction equals normal for pre-filtering\n\n				vec3 prefilteredColor = vec3(0.0);\n				float totalWeight = 0.0;\n\n				// For very low roughness, just sample the environment directly\n				if (roughness < 0.001) {\n					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);\n					return;\n				}\n\n				// Tangent space basis for VNDF sampling\n				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);\n				vec3 tangent = normalize(cross(up, N));\n				vec3 bitangent = cross(N, tangent);\n\n				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {\n					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));\n\n					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)\n					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);\n\n					// Transform H back to world space\n					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);\n					vec3 L = normalize(2.0 * dot(V, H) * H - V);\n\n					float NdotL = max(dot(N, L), 0.0);\n\n					if(NdotL > 0.0) {\n						// Sample environment at fixed mip level\n						// VNDF importance sampling handles the distribution filtering\n						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);\n\n						// Weight by NdotL for the split-sum approximation\n						// VNDF PDF naturally accounts for the visible microfacet distribution\n						prefilteredColor += sampleColor * NdotL;\n						totalWeight += NdotL;\n					}\n				}\n\n				if (totalWeight > 0.0) {\n					prefilteredColor = prefilteredColor / totalWeight;\n				}\n\n				gl_FragColor = vec4(prefilteredColor, 1.0);\n			}\n		', blending: m, depthTest: false, depthWrite: false });
          return i2;
        }(r3, e2, t2);
      }
      return r2;
    }
    _compileMaterial(e2) {
      const t2 = new Ra(new Wn(), e2);
      this._renderer.compile(t2, $n2);
    }
    _sceneToCubeUV(e2, t2, n2, i2, r2) {
      const a2 = new iu(90, 1, t2, n2), l2 = [1, -1, 1, 1, 1, 1], d2 = [1, 1, 1, -1, -1, -1], u2 = this._renderer, f2 = u2.autoClear, p2 = u2.toneMapping;
      u2.getClearColor(Qn2), u2.toneMapping = Q, u2.autoClear = false;
      u2.state.buffers.depth.getReversed() && (u2.setRenderTarget(i2), u2.clearDepth(), u2.setRenderTarget(null)), null === this._backgroundBox && (this._backgroundBox = new Ra(new gh(), new Ma({ name: "PMREM.Background", side: d, depthWrite: false, depthTest: false })));
      const m2 = this._backgroundBox, h2 = m2.material;
      let _2 = false;
      const g2 = e2.background;
      g2 ? g2.isColor && (h2.color.copy(g2), e2.background = null, _2 = true) : (h2.color.copy(Qn2), _2 = true);
      for (let t3 = 0; t3 < 6; t3++) {
        const n3 = t3 % 3;
        0 === n3 ? (a2.up.set(0, l2[t3], 0), a2.position.set(r2.x, r2.y, r2.z), a2.lookAt(r2.x + d2[t3], r2.y, r2.z)) : 1 === n3 ? (a2.up.set(0, 0, l2[t3]), a2.position.set(r2.x, r2.y, r2.z), a2.lookAt(r2.x, r2.y + d2[t3], r2.z)) : (a2.up.set(0, l2[t3], 0), a2.position.set(r2.x, r2.y, r2.z), a2.lookAt(r2.x, r2.y, r2.z + d2[t3]));
        const o2 = this._cubeSize;
        oi2(i2, n3 * o2, t3 > 2 ? o2 : 0, o2, o2), u2.setRenderTarget(i2), _2 && u2.render(m2, a2), u2.render(e2, a2);
      }
      u2.toneMapping = p2, u2.autoClear = f2, e2.background = g2;
    }
    _textureToCubeUV(e2, t2) {
      const n2 = this._renderer, i2 = e2.mapping === lt || e2.mapping === ct;
      i2 ? (null === this._cubemapMaterial && (this._cubemapMaterial = li2()), this._cubemapMaterial.uniforms.flipEnvMap.value = false === e2.isRenderTargetTexture ? -1 : 1) : null === this._equirectMaterial && (this._equirectMaterial = si2());
      const r2 = i2 ? this._cubemapMaterial : this._equirectMaterial, a2 = this._lodMeshes[0];
      a2.material = r2;
      r2.uniforms.envMap.value = e2;
      const o2 = this._cubeSize;
      oi2(t2, 0, 0, 3 * o2, 2 * o2), n2.setRenderTarget(t2), n2.render(a2, $n2);
    }
    _applyPMREM(e2) {
      const t2 = this._renderer, n2 = t2.autoClear;
      t2.autoClear = false;
      const i2 = this._lodMeshes.length;
      for (let t3 = 1; t3 < i2; t3++) this._applyGGXFilter(e2, t3 - 1, t3);
      t2.autoClear = n2;
    }
    _applyGGXFilter(e2, t2, n2) {
      const i2 = this._renderer, r2 = this._pingPongRenderTarget, a2 = this._ggxMaterial, o2 = this._lodMeshes[n2];
      o2.material = a2;
      const s2 = a2.uniforms, l2 = n2 / (this._lodMeshes.length - 1), c2 = t2 / (this._lodMeshes.length - 1), d2 = Math.sqrt(l2 * l2 - c2 * c2) * (0 + 1.25 * l2), { _lodMax: u2 } = this, f2 = this._sizeLods[n2], p2 = 3 * f2 * (n2 > u2 - 4 ? n2 - u2 + 4 : 0), m2 = 4 * (this._cubeSize - f2);
      s2.envMap.value = e2.texture, s2.roughness.value = d2, s2.mipInt.value = u2 - t2, oi2(r2, p2, m2, 3 * f2, 2 * f2), i2.setRenderTarget(r2), i2.render(o2, $n2), s2.envMap.value = r2.texture, s2.roughness.value = 0, s2.mipInt.value = u2 - n2, oi2(e2, p2, m2, 3 * f2, 2 * f2), i2.setRenderTarget(e2), i2.render(o2, $n2);
    }
    _blur(e2, t2, n2, i2, r2) {
      const a2 = this._pingPongRenderTarget;
      this._halfBlur(e2, a2, t2, n2, i2, "latitudinal", r2), this._halfBlur(a2, e2, n2, n2, i2, "longitudinal", r2);
    }
    _halfBlur(e2, t2, n2, i2, r2, a2, o2) {
      const s2 = this._renderer, l2 = this._blurMaterial;
      "latitudinal" !== a2 && "longitudinal" !== a2 && os("blur direction must be either latitudinal or longitudinal!");
      const c2 = this._lodMeshes[i2];
      c2.material = l2;
      const d2 = l2.uniforms, u2 = this._sizeLods[n2] - 1, f2 = isFinite(r2) ? Math.PI / (2 * u2) : 2 * Math.PI / 39, p2 = r2 / f2, m2 = isFinite(r2) ? 1 + Math.floor(3 * p2) : Zn2;
      m2 > Zn2 && as(`sigmaRadians, ${r2}, is too large and will clip, as it requested ${m2} samples when the maximum is set to 20`);
      const h2 = [];
      let _2 = 0;
      for (let e3 = 0; e3 < Zn2; ++e3) {
        const t3 = e3 / p2, n3 = Math.exp(-t3 * t3 / 2);
        h2.push(n3), 0 === e3 ? _2 += n3 : e3 < m2 && (_2 += 2 * n3);
      }
      for (let e3 = 0; e3 < h2.length; e3++) h2[e3] = h2[e3] / _2;
      d2.envMap.value = e2.texture, d2.samples.value = m2, d2.weights.value = h2, d2.latitudinal.value = "latitudinal" === a2, o2 && (d2.poleAxis.value = o2);
      const { _lodMax: g2 } = this;
      d2.dTheta.value = f2, d2.mipInt.value = g2 - n2;
      const E2 = this._sizeLods[i2];
      oi2(t2, 3 * E2 * (i2 > g2 - 4 ? i2 - g2 + 4 : 0), 4 * (this._cubeSize - E2), 3 * E2, 2 * E2), s2.setRenderTarget(t2), s2.render(c2, $n2);
    }
  };
  function ai2(e2, t2, n2) {
    const i2 = new Ys(e2, t2, n2);
    return i2.texture.mapping = pt, i2.texture.name = "PMREM.cubeUv", i2.scissorTest = true, i2;
  }
  function oi2(e2, t2, n2, i2, r2) {
    e2.viewport.set(t2, n2, i2, r2), e2.scissor.set(t2, n2, i2, r2);
  }
  function si2() {
    return new Gl({ name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: ci2(), fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n\n			#include <common>\n\n			void main() {\n\n				vec3 outputDirection = normalize( vOutputDirection );\n				vec2 uv = equirectUv( outputDirection );\n\n				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n			}\n		", blending: m, depthTest: false, depthWrite: false });
  }
  function li2() {
    return new Gl({ name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: ci2(), fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			uniform float flipEnvMap;\n\n			varying vec3 vOutputDirection;\n\n			uniform samplerCube envMap;\n\n			void main() {\n\n				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n			}\n		", blending: m, depthTest: false, depthWrite: false });
  }
  function ci2() {
    return "\n\n		precision mediump float;\n		precision mediump int;\n\n		attribute float faceIndex;\n\n		varying vec3 vOutputDirection;\n\n		// RH coordinate system; PMREM face-indexing convention\n		vec3 getDirection( vec2 uv, float face ) {\n\n			uv = 2.0 * uv - 1.0;\n\n			vec3 direction = vec3( uv, 1.0 );\n\n			if ( face == 0.0 ) {\n\n				direction = direction.zyx; // ( 1, v, u ) pos x\n\n			} else if ( face == 1.0 ) {\n\n				direction = direction.xzy;\n				direction.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n			} else if ( face == 2.0 ) {\n\n				direction.x *= -1.0; // ( -u, v, 1 ) pos z\n\n			} else if ( face == 3.0 ) {\n\n				direction = direction.zyx;\n				direction.xz *= -1.0; // ( -1, v, -u ) neg x\n\n			} else if ( face == 4.0 ) {\n\n				direction = direction.xzy;\n				direction.xy *= -1.0; // ( -u, -1, v ) neg y\n\n			} else if ( face == 5.0 ) {\n\n				direction.z *= -1.0; // ( u, v, -1 ) neg z\n\n			}\n\n			return direction;\n\n		}\n\n		void main() {\n\n			vOutputDirection = getDirection( uv, faceIndex );\n			gl_Position = vec4( position, 1.0 );\n\n		}\n	";
  }
  var di2 = class extends Ys {
    constructor(e2 = 1, t2 = {}) {
      super(e2, e2, t2), this.isWebGLCubeRenderTarget = true;
      const n2 = { width: e2, height: e2, depth: 1 }, i2 = [n2, n2, n2, n2, n2, n2];
      this.texture = new ch(i2), this._setTextureOptions(t2), this.texture.isRenderTargetTexture = true;
    }
    fromEquirectangularTexture(e2, t2) {
      this.texture.type = t2.type, this.texture.colorSpace = t2.colorSpace, this.texture.generateMipmaps = t2.generateMipmaps, this.texture.minFilter = t2.minFilter, this.texture.magFilter = t2.magFilter;
      const n2 = { uniforms: { tEquirect: { value: null } }, vertexShader: "\n\n				varying vec3 vWorldDirection;\n\n				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n				}\n\n				void main() {\n\n					vWorldDirection = transformDirection( position, modelMatrix );\n\n					#include <begin_vertex>\n					#include <project_vertex>\n\n				}\n			", fragmentShader: "\n\n				uniform sampler2D tEquirect;\n\n				varying vec3 vWorldDirection;\n\n				#include <common>\n\n				void main() {\n\n					vec3 direction = normalize( vWorldDirection );\n\n					vec2 sampleUV = equirectUv( direction );\n\n					gl_FragColor = texture2D( tEquirect, sampleUV );\n\n				}\n			" }, i2 = new gh(5, 5, 5), r2 = new Gl({ name: "CubemapFromEquirect", uniforms: Jl(n2.uniforms), vertexShader: n2.vertexShader, fragmentShader: n2.fragmentShader, side: d, blending: m });
      r2.uniforms.tEquirect.value = t2;
      const a2 = new Ra(i2, r2), u2 = t2.minFilter;
      t2.minFilter === At && (t2.minFilter = Mt);
      return new Pu(1, 10, this).update(e2, a2), t2.minFilter = u2, a2.geometry.dispose(), a2.material.dispose(), this;
    }
    clear(e2, t2 = true, n2 = true, i2 = true) {
      const r2 = e2.getRenderTarget();
      for (let r3 = 0; r3 < 6; r3++) e2.setRenderTarget(this, r3), e2.clear(t2, n2, i2);
      e2.setRenderTarget(r2);
    }
  };
  function ui2(e2) {
    let t2 = /* @__PURE__ */ new WeakMap(), n2 = /* @__PURE__ */ new WeakMap(), i2 = null;
    function r2(e3, t3) {
      return t3 === ut ? e3.mapping = lt : t3 === dt && (e3.mapping = ct), e3;
    }
    function a2(e3) {
      const n3 = e3.target;
      n3.removeEventListener("dispose", a2);
      const i3 = t2.get(n3);
      void 0 !== i3 && (t2.delete(n3), i3.dispose());
    }
    function o2(e3) {
      const t3 = e3.target;
      t3.removeEventListener("dispose", o2);
      const i3 = n2.get(t3);
      void 0 !== i3 && (n2.delete(t3), i3.dispose());
    }
    return { get: function(s2, l2 = false) {
      return null == s2 ? null : l2 ? function(t3) {
        if (t3 && t3.isTexture) {
          const r3 = t3.mapping, a3 = r3 === ut || r3 === dt, s3 = r3 === lt || r3 === ct;
          if (a3 || s3) {
            let r4 = n2.get(t3);
            const l3 = void 0 !== r4 ? r4.texture.pmremVersion : 0;
            if (t3.isRenderTargetTexture && t3.pmremVersion !== l3) return null === i2 && (i2 = new ri2(e2)), r4 = a3 ? i2.fromEquirectangular(t3, r4) : i2.fromCubemap(t3, r4), r4.texture.pmremVersion = t3.pmremVersion, n2.set(t3, r4), r4.texture;
            if (void 0 !== r4) return r4.texture;
            {
              const l4 = t3.image;
              return a3 && l4 && l4.height > 0 || s3 && l4 && function(e3) {
                let t4 = 0;
                const n3 = 6;
                for (let i3 = 0; i3 < n3; i3++) void 0 !== e3[i3] && t4++;
                return t4 === n3;
              }(l4) ? (null === i2 && (i2 = new ri2(e2)), r4 = a3 ? i2.fromEquirectangular(t3) : i2.fromCubemap(t3), r4.texture.pmremVersion = t3.pmremVersion, n2.set(t3, r4), t3.addEventListener("dispose", o2), r4.texture) : null;
            }
          }
        }
        return t3;
      }(s2) : function(n3) {
        if (n3 && n3.isTexture) {
          const i3 = n3.mapping;
          if (i3 === ut || i3 === dt) {
            if (t2.has(n3)) {
              return r2(t2.get(n3).texture, n3.mapping);
            }
            {
              const i4 = n3.image;
              if (i4 && i4.height > 0) {
                const o3 = new di2(i4.height);
                return o3.fromEquirectangularTexture(e2, n3), t2.set(n3, o3), n3.addEventListener("dispose", a2), r2(o3.texture, n3.mapping);
              }
              return null;
            }
          }
        }
        return n3;
      }(s2);
    }, dispose: function() {
      t2 = /* @__PURE__ */ new WeakMap(), n2 = /* @__PURE__ */ new WeakMap(), null !== i2 && (i2.dispose(), i2 = null);
    } };
  }
  function fi2(e2) {
    const t2 = {};
    function n2(n3) {
      if (void 0 !== t2[n3]) return t2[n3];
      const i2 = e2.getExtension(n3);
      return t2[n3] = i2, i2;
    }
    return { has: function(e3) {
      return null !== n2(e3);
    }, init: function() {
      n2("EXT_color_buffer_float"), n2("WEBGL_clip_cull_distance"), n2("OES_texture_float_linear"), n2("EXT_color_buffer_half_float"), n2("WEBGL_multisampled_render_to_texture"), n2("WEBGL_render_shared_exponent");
    }, get: function(e3) {
      const t3 = n2(e3);
      return null === t3 && hs("WebGLRenderer: " + e3 + " extension not supported."), t3;
    } };
  }
  function pi2(e2, t2, n2, i2) {
    const r2 = {}, a2 = /* @__PURE__ */ new WeakMap();
    function o2(e3) {
      const s3 = e3.target;
      null !== s3.index && t2.remove(s3.index);
      for (const e4 in s3.attributes) t2.remove(s3.attributes[e4]);
      s3.removeEventListener("dispose", o2), delete r2[s3.id];
      const l2 = a2.get(s3);
      l2 && (t2.remove(l2), a2.delete(s3)), i2.releaseStatesOfGeometry(s3), true === s3.isInstancedBufferGeometry && delete s3._maxInstanceCount, n2.memory.geometries--;
    }
    function s2(e3) {
      const n3 = [], i3 = e3.index, r3 = e3.attributes.position;
      let o3 = 0;
      if (void 0 === r3) return;
      if (null !== i3) {
        const e4 = i3.array;
        o3 = i3.version;
        for (let t3 = 0, i4 = e4.length; t3 < i4; t3 += 3) {
          const i5 = e4[t3 + 0], r4 = e4[t3 + 1], a3 = e4[t3 + 2];
          n3.push(i5, r4, r4, a3, a3, i5);
        }
      } else {
        const e4 = r3.array;
        o3 = r3.version;
        for (let t3 = 0, i4 = e4.length / 3 - 1; t3 < i4; t3 += 3) {
          const e5 = t3 + 0, i5 = t3 + 1, r4 = t3 + 2;
          n3.push(e5, i5, i5, r4, r4, e5);
        }
      }
      const s3 = new (r3.count >= 65535 ? In : zn)(n3, 1);
      s3.version = o3;
      const l2 = a2.get(e3);
      l2 && t2.remove(l2), a2.set(e3, s3);
    }
    return { get: function(e3, t3) {
      return true === r2[t3.id] || (t3.addEventListener("dispose", o2), r2[t3.id] = true, n2.memory.geometries++), t3;
    }, update: function(n3) {
      const i3 = n3.attributes;
      for (const n4 in i3) t2.update(i3[n4], e2.ARRAY_BUFFER);
    }, getWireframeAttribute: function(e3) {
      const t3 = a2.get(e3);
      if (t3) {
        const n3 = e3.index;
        null !== n3 && t3.version < n3.version && s2(e3);
      } else s2(e3);
      return a2.get(e3);
    } };
  }
  function mi2(e2, t2, n2) {
    let i2, r2, a2;
    this.setMode = function(e3) {
      i2 = e3;
    }, this.setIndex = function(e3) {
      r2 = e3.type, a2 = e3.bytesPerElement;
    }, this.render = function(t3, o2) {
      e2.drawElements(i2, o2, r2, t3 * a2), n2.update(o2, i2, 1);
    }, this.renderInstances = function(t3, o2, s2) {
      0 !== s2 && (e2.drawElementsInstanced(i2, o2, r2, t3 * a2, s2), n2.update(o2, i2, s2));
    }, this.renderMultiDraw = function(e3, a3, o2) {
      if (0 === o2) return;
      t2.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i2, a3, 0, r2, e3, 0, o2);
      let s2 = 0;
      for (let e4 = 0; e4 < o2; e4++) s2 += a3[e4];
      n2.update(s2, i2, 1);
    };
  }
  function hi2(e2) {
    const t2 = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
    return { memory: { geometries: 0, textures: 0 }, render: t2, programs: null, autoReset: true, reset: function() {
      t2.calls = 0, t2.triangles = 0, t2.points = 0, t2.lines = 0;
    }, update: function(n2, i2, r2) {
      switch (t2.calls++, i2) {
        case e2.TRIANGLES:
          t2.triangles += r2 * (n2 / 3);
          break;
        case e2.LINES:
          t2.lines += r2 * (n2 / 2);
          break;
        case e2.LINE_STRIP:
          t2.lines += r2 * (n2 - 1);
          break;
        case e2.LINE_LOOP:
          t2.lines += r2 * n2;
          break;
        case e2.POINTS:
          t2.points += r2 * n2;
          break;
        default:
          os("WebGLInfo: Unknown draw mode:", i2);
      }
    } };
  }
  function _i2(e2, n2, i2) {
    const r2 = /* @__PURE__ */ new WeakMap(), a2 = new Js();
    return { update: function(o2, s2, l2) {
      const c2 = o2.morphTargetInfluences, d2 = s2.morphAttributes.position || s2.morphAttributes.normal || s2.morphAttributes.color, u2 = void 0 !== d2 ? d2.length : 0;
      let f2 = r2.get(s2);
      if (void 0 === f2 || f2.count !== u2) {
        let b2 = function() {
          A2.dispose(), r2.delete(s2), s2.removeEventListener("dispose", b2);
        };
        void 0 !== f2 && f2.texture.dispose();
        const p2 = void 0 !== s2.morphAttributes.position, m2 = void 0 !== s2.morphAttributes.normal, h2 = void 0 !== s2.morphAttributes.color, _2 = s2.morphAttributes.position || [], g2 = s2.morphAttributes.normal || [], v2 = s2.morphAttributes.color || [];
        let E2 = 0;
        true === p2 && (E2 = 1), true === m2 && (E2 = 2), true === h2 && (E2 = 3);
        let S2 = s2.attributes.position.count * E2, M2 = 1;
        S2 > n2.maxTextureSize && (M2 = Math.ceil(S2 / n2.maxTextureSize), S2 = n2.maxTextureSize);
        const x2 = new Float32Array(S2 * M2 * 4 * u2), A2 = new Hs(x2, S2, M2, u2);
        A2.type = Pt, A2.needsUpdate = true;
        const R2 = 4 * E2;
        for (let C2 = 0; C2 < u2; C2++) {
          const P2 = _2[C2], L2 = g2[C2], U2 = v2[C2], D2 = S2 * M2 * 4 * C2;
          for (let w2 = 0; w2 < P2.count; w2++) {
            const I2 = w2 * R2;
            true === p2 && (a2.fromBufferAttribute(P2, w2), x2[D2 + I2 + 0] = a2.x, x2[D2 + I2 + 1] = a2.y, x2[D2 + I2 + 2] = a2.z, x2[D2 + I2 + 3] = 0), true === m2 && (a2.fromBufferAttribute(L2, w2), x2[D2 + I2 + 4] = a2.x, x2[D2 + I2 + 5] = a2.y, x2[D2 + I2 + 6] = a2.z, x2[D2 + I2 + 7] = 0), true === h2 && (a2.fromBufferAttribute(U2, w2), x2[D2 + I2 + 8] = a2.x, x2[D2 + I2 + 9] = a2.y, x2[D2 + I2 + 10] = a2.z, x2[D2 + I2 + 11] = 4 === U2.itemSize ? a2.w : 1);
          }
        }
        f2 = { count: u2, texture: A2, size: new _s(S2, M2) }, r2.set(s2, f2), s2.addEventListener("dispose", b2);
      }
      if (true === o2.isInstancedMesh && null !== o2.morphTexture) l2.getUniforms().setValue(e2, "morphTexture", o2.morphTexture, i2);
      else {
        let N2 = 0;
        for (let O2 = 0; O2 < c2.length; O2++) N2 += c2[O2];
        const y2 = s2.morphTargetsRelative ? 1 : 1 - N2;
        l2.getUniforms().setValue(e2, "morphTargetBaseInfluence", y2), l2.getUniforms().setValue(e2, "morphTargetInfluences", c2);
      }
      l2.getUniforms().setValue(e2, "morphTargetsTexture", f2.texture, i2), l2.getUniforms().setValue(e2, "morphTargetsTextureSize", f2.size);
    } };
  }
  function gi2(e2, t2, n2, i2, r2) {
    let a2 = /* @__PURE__ */ new WeakMap();
    function o2(e3) {
      const t3 = e3.target;
      t3.removeEventListener("dispose", o2), i2.releaseStatesOfObject(t3), n2.remove(t3.instanceMatrix), null !== t3.instanceColor && n2.remove(t3.instanceColor);
    }
    return { update: function(i3) {
      const s2 = r2.render.frame, l2 = i3.geometry, c2 = t2.get(i3, l2);
      if (a2.get(c2) !== s2 && (t2.update(c2), a2.set(c2, s2)), i3.isInstancedMesh && (false === i3.hasEventListener("dispose", o2) && i3.addEventListener("dispose", o2), a2.get(i3) !== s2 && (n2.update(i3.instanceMatrix, e2.ARRAY_BUFFER), null !== i3.instanceColor && n2.update(i3.instanceColor, e2.ARRAY_BUFFER), a2.set(i3, s2))), i3.isSkinnedMesh) {
        const e3 = i3.skeleton;
        a2.get(e3) !== s2 && (e3.update(), a2.set(e3, s2));
      }
      return c2;
    }, dispose: function() {
      a2 = /* @__PURE__ */ new WeakMap();
    } };
  }
  var vi2 = { [K]: "LINEAR_TONE_MAPPING", [tt]: "REINHARD_TONE_MAPPING", [et]: "CINEON_TONE_MAPPING", [it]: "ACES_FILMIC_TONE_MAPPING", [rt]: "AGX_TONE_MAPPING", [nt]: "NEUTRAL_TONE_MAPPING", [st]: "CUSTOM_TONE_MAPPING" };
  function Ei2(e2, t2, n2, i2, r2) {
    const a2 = new Ys(t2, n2, { type: e2, depthBuffer: i2, stencilBuffer: r2, depthTexture: i2 ? new ph(t2, n2) : void 0 }), s2 = new Ys(t2, n2, { type: Rt, depthBuffer: false, stencilBuffer: false }), l2 = new Wn();
    l2.setAttribute("position", new kn([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)), l2.setAttribute("uv", new kn([0, 2, 0, 0, 2, 0], 2));
    const c2 = new $l({ uniforms: { tDiffuse: { value: null } }, vertexShader: "\n			precision highp float;\n\n			uniform mat4 modelViewMatrix;\n			uniform mat4 projectionMatrix;\n\n			attribute vec3 position;\n			attribute vec2 uv;\n\n			varying vec2 vUv;\n\n			void main() {\n				vUv = uv;\n				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n			}", fragmentShader: "\n			precision highp float;\n\n			uniform sampler2D tDiffuse;\n\n			varying vec2 vUv;\n\n			#include <tonemapping_pars_fragment>\n			#include <colorspace_pars_fragment>\n\n			void main() {\n				gl_FragColor = texture2D( tDiffuse, vUv );\n\n				#ifdef LINEAR_TONE_MAPPING\n					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );\n				#elif defined( REINHARD_TONE_MAPPING )\n					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );\n				#elif defined( CINEON_TONE_MAPPING )\n					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );\n				#elif defined( ACES_FILMIC_TONE_MAPPING )\n					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );\n				#elif defined( AGX_TONE_MAPPING )\n					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );\n				#elif defined( NEUTRAL_TONE_MAPPING )\n					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );\n				#elif defined( CUSTOM_TONE_MAPPING )\n					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );\n				#endif\n\n				#ifdef SRGB_TRANSFER\n					gl_FragColor = sRGBTransferOETF( gl_FragColor );\n				#endif\n			}", depthTest: false, depthWrite: false }), d2 = new Ra(l2, c2), u2 = new ou(-1, 1, 1, -1, 0, 1);
    let m2, h2 = null, _2 = null, g2 = false, v2 = null, S2 = [], T2 = false;
    this.setSize = function(e3, t3) {
      a2.setSize(e3, t3), s2.setSize(e3, t3);
      for (let n3 = 0; n3 < S2.length; n3++) {
        const i3 = S2[n3];
        i3.setSize && i3.setSize(e3, t3);
      }
    }, this.setEffects = function(e3) {
      S2 = e3, T2 = S2.length > 0 && true === S2[0].isRenderPass;
      const t3 = a2.width, n3 = a2.height;
      for (let e4 = 0; e4 < S2.length; e4++) {
        const i3 = S2[e4];
        i3.setSize && i3.setSize(t3, n3);
      }
    }, this.begin = function(e3, t3) {
      if (g2) return false;
      if (e3.toneMapping === Q && 0 === S2.length) return false;
      if (v2 = t3, null !== t3) {
        const e4 = t3.width, n3 = t3.height;
        a2.width === e4 && a2.height === n3 || this.setSize(e4, n3);
      }
      return false === T2 && e3.setRenderTarget(a2), m2 = e3.toneMapping, e3.toneMapping = Q, true;
    }, this.hasRenderPass = function() {
      return T2;
    }, this.end = function(e3, t3) {
      e3.toneMapping = m2, g2 = true;
      let n3 = a2, i3 = s2;
      for (let r3 = 0; r3 < S2.length; r3++) {
        const a3 = S2[r3];
        if (false !== a3.enabled && (a3.render(e3, i3, n3, t3), false !== a3.needsSwap)) {
          const e4 = n3;
          n3 = i3, i3 = e4;
        }
      }
      if (h2 !== e3.outputColorSpace || _2 !== e3.toneMapping) {
        h2 = e3.outputColorSpace, _2 = e3.toneMapping, c2.defines = {}, Rs.getTransfer(h2) === ri && (c2.defines.SRGB_TRANSFER = "");
        const t4 = vi2[_2];
        t4 && (c2.defines[t4] = ""), c2.needsUpdate = true;
      }
      c2.uniforms.tDiffuse.value = n3.texture, e3.setRenderTarget(v2), e3.render(d2, u2), v2 = null, g2 = false;
    }, this.isCompositing = function() {
      return g2;
    }, this.dispose = function() {
      a2.depthTexture && a2.depthTexture.dispose(), a2.dispose(), s2.dispose(), l2.dispose(), c2.dispose();
    };
  }
  var Si2 = new qs();
  var Ti2 = new ph(1, 1);
  var Mi2 = new Hs();
  var xi2 = new Gs();
  var Ai2 = new ch();
  var Ri2 = [];
  var bi2 = [];
  var Ci2 = new Float32Array(16);
  var Pi2 = new Float32Array(9);
  var Li2 = new Float32Array(4);
  function Ui2(e2, t2, n2) {
    const i2 = e2[0];
    if (i2 <= 0 || i2 > 0) return e2;
    const r2 = t2 * n2;
    let a2 = Ri2[r2];
    if (void 0 === a2 && (a2 = new Float32Array(r2), Ri2[r2] = a2), 0 !== t2) {
      i2.toArray(a2, 0);
      for (let i3 = 1, r3 = 0; i3 !== t2; ++i3) r3 += n2, e2[i3].toArray(a2, r3);
    }
    return a2;
  }
  function Di2(e2, t2) {
    if (e2.length !== t2.length) return false;
    for (let n2 = 0, i2 = e2.length; n2 < i2; n2++) if (e2[n2] !== t2[n2]) return false;
    return true;
  }
  function wi2(e2, t2) {
    for (let n2 = 0, i2 = t2.length; n2 < i2; n2++) e2[n2] = t2[n2];
  }
  function Ii2(e2, t2) {
    let n2 = bi2[t2];
    void 0 === n2 && (n2 = new Int32Array(t2), bi2[t2] = n2);
    for (let i2 = 0; i2 !== t2; ++i2) n2[i2] = e2.allocateTextureUnit();
    return n2;
  }
  function Ni2(e2, t2) {
    const n2 = this.cache;
    n2[0] !== t2 && (e2.uniform1f(this.addr, t2), n2[0] = t2);
  }
  function yi2(e2, t2) {
    const n2 = this.cache;
    if (void 0 !== t2.x) n2[0] === t2.x && n2[1] === t2.y || (e2.uniform2f(this.addr, t2.x, t2.y), n2[0] = t2.x, n2[1] = t2.y);
    else {
      if (Di2(n2, t2)) return;
      e2.uniform2fv(this.addr, t2), wi2(n2, t2);
    }
  }
  function Oi2(e2, t2) {
    const n2 = this.cache;
    if (void 0 !== t2.x) n2[0] === t2.x && n2[1] === t2.y && n2[2] === t2.z || (e2.uniform3f(this.addr, t2.x, t2.y, t2.z), n2[0] = t2.x, n2[1] = t2.y, n2[2] = t2.z);
    else if (void 0 !== t2.r) n2[0] === t2.r && n2[1] === t2.g && n2[2] === t2.b || (e2.uniform3f(this.addr, t2.r, t2.g, t2.b), n2[0] = t2.r, n2[1] = t2.g, n2[2] = t2.b);
    else {
      if (Di2(n2, t2)) return;
      e2.uniform3fv(this.addr, t2), wi2(n2, t2);
    }
  }
  function Fi2(e2, t2) {
    const n2 = this.cache;
    if (void 0 !== t2.x) n2[0] === t2.x && n2[1] === t2.y && n2[2] === t2.z && n2[3] === t2.w || (e2.uniform4f(this.addr, t2.x, t2.y, t2.z, t2.w), n2[0] = t2.x, n2[1] = t2.y, n2[2] = t2.z, n2[3] = t2.w);
    else {
      if (Di2(n2, t2)) return;
      e2.uniform4fv(this.addr, t2), wi2(n2, t2);
    }
  }
  function Bi2(e2, t2) {
    const n2 = this.cache, i2 = t2.elements;
    if (void 0 === i2) {
      if (Di2(n2, t2)) return;
      e2.uniformMatrix2fv(this.addr, false, t2), wi2(n2, t2);
    } else {
      if (Di2(n2, i2)) return;
      Li2.set(i2), e2.uniformMatrix2fv(this.addr, false, Li2), wi2(n2, i2);
    }
  }
  function Gi(e2, t2) {
    const n2 = this.cache, i2 = t2.elements;
    if (void 0 === i2) {
      if (Di2(n2, t2)) return;
      e2.uniformMatrix3fv(this.addr, false, t2), wi2(n2, t2);
    } else {
      if (Di2(n2, i2)) return;
      Pi2.set(i2), e2.uniformMatrix3fv(this.addr, false, Pi2), wi2(n2, i2);
    }
  }
  function Hi2(e2, t2) {
    const n2 = this.cache, i2 = t2.elements;
    if (void 0 === i2) {
      if (Di2(n2, t2)) return;
      e2.uniformMatrix4fv(this.addr, false, t2), wi2(n2, t2);
    } else {
      if (Di2(n2, i2)) return;
      Ci2.set(i2), e2.uniformMatrix4fv(this.addr, false, Ci2), wi2(n2, i2);
    }
  }
  function Vi2(e2, t2) {
    const n2 = this.cache;
    n2[0] !== t2 && (e2.uniform1i(this.addr, t2), n2[0] = t2);
  }
  function Wi2(e2, t2) {
    const n2 = this.cache;
    if (void 0 !== t2.x) n2[0] === t2.x && n2[1] === t2.y || (e2.uniform2i(this.addr, t2.x, t2.y), n2[0] = t2.x, n2[1] = t2.y);
    else {
      if (Di2(n2, t2)) return;
      e2.uniform2iv(this.addr, t2), wi2(n2, t2);
    }
  }
  function zi2(e2, t2) {
    const n2 = this.cache;
    if (void 0 !== t2.x) n2[0] === t2.x && n2[1] === t2.y && n2[2] === t2.z || (e2.uniform3i(this.addr, t2.x, t2.y, t2.z), n2[0] = t2.x, n2[1] = t2.y, n2[2] = t2.z);
    else {
      if (Di2(n2, t2)) return;
      e2.uniform3iv(this.addr, t2), wi2(n2, t2);
    }
  }
  function ki2(e2, t2) {
    const n2 = this.cache;
    if (void 0 !== t2.x) n2[0] === t2.x && n2[1] === t2.y && n2[2] === t2.z && n2[3] === t2.w || (e2.uniform4i(this.addr, t2.x, t2.y, t2.z, t2.w), n2[0] = t2.x, n2[1] = t2.y, n2[2] = t2.z, n2[3] = t2.w);
    else {
      if (Di2(n2, t2)) return;
      e2.uniform4iv(this.addr, t2), wi2(n2, t2);
    }
  }
  function Xi2(e2, t2) {
    const n2 = this.cache;
    n2[0] !== t2 && (e2.uniform1ui(this.addr, t2), n2[0] = t2);
  }
  function Ki2(e2, t2) {
    const n2 = this.cache;
    if (void 0 !== t2.x) n2[0] === t2.x && n2[1] === t2.y || (e2.uniform2ui(this.addr, t2.x, t2.y), n2[0] = t2.x, n2[1] = t2.y);
    else {
      if (Di2(n2, t2)) return;
      e2.uniform2uiv(this.addr, t2), wi2(n2, t2);
    }
  }
  function Yi2(e2, t2) {
    const n2 = this.cache;
    if (void 0 !== t2.x) n2[0] === t2.x && n2[1] === t2.y && n2[2] === t2.z || (e2.uniform3ui(this.addr, t2.x, t2.y, t2.z), n2[0] = t2.x, n2[1] = t2.y, n2[2] = t2.z);
    else {
      if (Di2(n2, t2)) return;
      e2.uniform3uiv(this.addr, t2), wi2(n2, t2);
    }
  }
  function qi2(e2, t2) {
    const n2 = this.cache;
    if (void 0 !== t2.x) n2[0] === t2.x && n2[1] === t2.y && n2[2] === t2.z && n2[3] === t2.w || (e2.uniform4ui(this.addr, t2.x, t2.y, t2.z, t2.w), n2[0] = t2.x, n2[1] = t2.y, n2[2] = t2.z, n2[3] = t2.w);
    else {
      if (Di2(n2, t2)) return;
      e2.uniform4uiv(this.addr, t2), wi2(n2, t2);
    }
  }
  function ji2(e2, t2, n2) {
    const i2 = this.cache, r2 = n2.allocateTextureUnit();
    let a2;
    i2[0] !== r2 && (e2.uniform1i(this.addr, r2), i2[0] = r2), this.type === e2.SAMPLER_2D_SHADOW ? (Ti2.compareFunction = n2.isReversedDepthBuffer() ? Bi : zi, a2 = Ti2) : a2 = Si2, n2.setTexture2D(t2 || a2, r2);
  }
  function Zi(e2, t2, n2) {
    const i2 = this.cache, r2 = n2.allocateTextureUnit();
    i2[0] !== r2 && (e2.uniform1i(this.addr, r2), i2[0] = r2), n2.setTexture3D(t2 || xi2, r2);
  }
  function $i2(e2, t2, n2) {
    const i2 = this.cache, r2 = n2.allocateTextureUnit();
    i2[0] !== r2 && (e2.uniform1i(this.addr, r2), i2[0] = r2), n2.setTextureCube(t2 || Ai2, r2);
  }
  function Qi2(e2, t2, n2) {
    const i2 = this.cache, r2 = n2.allocateTextureUnit();
    i2[0] !== r2 && (e2.uniform1i(this.addr, r2), i2[0] = r2), n2.setTexture2DArray(t2 || Mi2, r2);
  }
  function Ji2(e2, t2) {
    e2.uniform1fv(this.addr, t2);
  }
  function er2(e2, t2) {
    const n2 = Ui2(t2, this.size, 2);
    e2.uniform2fv(this.addr, n2);
  }
  function tr2(e2, t2) {
    const n2 = Ui2(t2, this.size, 3);
    e2.uniform3fv(this.addr, n2);
  }
  function nr2(e2, t2) {
    const n2 = Ui2(t2, this.size, 4);
    e2.uniform4fv(this.addr, n2);
  }
  function ir2(e2, t2) {
    const n2 = Ui2(t2, this.size, 4);
    e2.uniformMatrix2fv(this.addr, false, n2);
  }
  function rr2(e2, t2) {
    const n2 = Ui2(t2, this.size, 9);
    e2.uniformMatrix3fv(this.addr, false, n2);
  }
  function ar2(e2, t2) {
    const n2 = Ui2(t2, this.size, 16);
    e2.uniformMatrix4fv(this.addr, false, n2);
  }
  function or2(e2, t2) {
    e2.uniform1iv(this.addr, t2);
  }
  function sr2(e2, t2) {
    e2.uniform2iv(this.addr, t2);
  }
  function lr2(e2, t2) {
    e2.uniform3iv(this.addr, t2);
  }
  function cr2(e2, t2) {
    e2.uniform4iv(this.addr, t2);
  }
  function dr2(e2, t2) {
    e2.uniform1uiv(this.addr, t2);
  }
  function ur2(e2, t2) {
    e2.uniform2uiv(this.addr, t2);
  }
  function fr2(e2, t2) {
    e2.uniform3uiv(this.addr, t2);
  }
  function pr2(e2, t2) {
    e2.uniform4uiv(this.addr, t2);
  }
  function mr2(e2, t2, n2) {
    const i2 = this.cache, r2 = t2.length, a2 = Ii2(n2, r2);
    let o2;
    Di2(i2, a2) || (e2.uniform1iv(this.addr, a2), wi2(i2, a2)), o2 = this.type === e2.SAMPLER_2D_SHADOW ? Ti2 : Si2;
    for (let e3 = 0; e3 !== r2; ++e3) n2.setTexture2D(t2[e3] || o2, a2[e3]);
  }
  function hr2(e2, t2, n2) {
    const i2 = this.cache, r2 = t2.length, a2 = Ii2(n2, r2);
    Di2(i2, a2) || (e2.uniform1iv(this.addr, a2), wi2(i2, a2));
    for (let e3 = 0; e3 !== r2; ++e3) n2.setTexture3D(t2[e3] || xi2, a2[e3]);
  }
  function _r2(e2, t2, n2) {
    const i2 = this.cache, r2 = t2.length, a2 = Ii2(n2, r2);
    Di2(i2, a2) || (e2.uniform1iv(this.addr, a2), wi2(i2, a2));
    for (let e3 = 0; e3 !== r2; ++e3) n2.setTextureCube(t2[e3] || Ai2, a2[e3]);
  }
  function gr2(e2, t2, n2) {
    const i2 = this.cache, r2 = t2.length, a2 = Ii2(n2, r2);
    Di2(i2, a2) || (e2.uniform1iv(this.addr, a2), wi2(i2, a2));
    for (let e3 = 0; e3 !== r2; ++e3) n2.setTexture2DArray(t2[e3] || Mi2, a2[e3]);
  }
  var vr2 = class {
    constructor(e2, t2, n2) {
      this.id = e2, this.addr = n2, this.cache = [], this.type = t2.type, this.setValue = function(e3) {
        switch (e3) {
          case 5126:
            return Ni2;
          case 35664:
            return yi2;
          case 35665:
            return Oi2;
          case 35666:
            return Fi2;
          case 35674:
            return Bi2;
          case 35675:
            return Gi;
          case 35676:
            return Hi2;
          case 5124:
          case 35670:
            return Vi2;
          case 35667:
          case 35671:
            return Wi2;
          case 35668:
          case 35672:
            return zi2;
          case 35669:
          case 35673:
            return ki2;
          case 5125:
            return Xi2;
          case 36294:
            return Ki2;
          case 36295:
            return Yi2;
          case 36296:
            return qi2;
          case 35678:
          case 36198:
          case 36298:
          case 36306:
          case 35682:
            return ji2;
          case 35679:
          case 36299:
          case 36307:
            return Zi;
          case 35680:
          case 36300:
          case 36308:
          case 36293:
            return $i2;
          case 36289:
          case 36303:
          case 36311:
          case 36292:
            return Qi2;
        }
      }(t2.type);
    }
  };
  var Er2 = class {
    constructor(e2, t2, n2) {
      this.id = e2, this.addr = n2, this.cache = [], this.type = t2.type, this.size = t2.size, this.setValue = function(e3) {
        switch (e3) {
          case 5126:
            return Ji2;
          case 35664:
            return er2;
          case 35665:
            return tr2;
          case 35666:
            return nr2;
          case 35674:
            return ir2;
          case 35675:
            return rr2;
          case 35676:
            return ar2;
          case 5124:
          case 35670:
            return or2;
          case 35667:
          case 35671:
            return sr2;
          case 35668:
          case 35672:
            return lr2;
          case 35669:
          case 35673:
            return cr2;
          case 5125:
            return dr2;
          case 36294:
            return ur2;
          case 36295:
            return fr2;
          case 36296:
            return pr2;
          case 35678:
          case 36198:
          case 36298:
          case 36306:
          case 35682:
            return mr2;
          case 35679:
          case 36299:
          case 36307:
            return hr2;
          case 35680:
          case 36300:
          case 36308:
          case 36293:
            return _r2;
          case 36289:
          case 36303:
          case 36311:
          case 36292:
            return gr2;
        }
      }(t2.type);
    }
  };
  var Sr2 = class {
    constructor(e2) {
      this.id = e2, this.seq = [], this.map = {};
    }
    setValue(e2, t2, n2) {
      const i2 = this.seq;
      for (let r2 = 0, a2 = i2.length; r2 !== a2; ++r2) {
        const a3 = i2[r2];
        a3.setValue(e2, t2[a3.id], n2);
      }
    }
  };
  var Tr2 = /(\w+)(\])?(\[|\.)?/g;
  function Mr2(e2, t2) {
    e2.seq.push(t2), e2.map[t2.id] = t2;
  }
  function xr2(e2, t2, n2) {
    const i2 = e2.name, r2 = i2.length;
    for (Tr2.lastIndex = 0; ; ) {
      const a2 = Tr2.exec(i2), o2 = Tr2.lastIndex;
      let s2 = a2[1];
      const l2 = "]" === a2[2], c2 = a2[3];
      if (l2 && (s2 |= 0), void 0 === c2 || "[" === c2 && o2 + 2 === r2) {
        Mr2(n2, void 0 === c2 ? new vr2(s2, e2, t2) : new Er2(s2, e2, t2));
        break;
      }
      {
        let e3 = n2.map[s2];
        void 0 === e3 && (e3 = new Sr2(s2), Mr2(n2, e3)), n2 = e3;
      }
    }
  }
  var Ar2 = class {
    constructor(e2, t2) {
      this.seq = [], this.map = {};
      const n2 = e2.getProgramParameter(t2, e2.ACTIVE_UNIFORMS);
      for (let i3 = 0; i3 < n2; ++i3) {
        const n3 = e2.getActiveUniform(t2, i3);
        xr2(n3, e2.getUniformLocation(t2, n3.name), this);
      }
      const i2 = [], r2 = [];
      for (const t3 of this.seq) t3.type === e2.SAMPLER_2D_SHADOW || t3.type === e2.SAMPLER_CUBE_SHADOW || t3.type === e2.SAMPLER_2D_ARRAY_SHADOW ? i2.push(t3) : r2.push(t3);
      i2.length > 0 && (this.seq = i2.concat(r2));
    }
    setValue(e2, t2, n2, i2) {
      const r2 = this.map[t2];
      void 0 !== r2 && r2.setValue(e2, n2, i2);
    }
    setOptional(e2, t2, n2) {
      const i2 = t2[n2];
      void 0 !== i2 && this.setValue(e2, n2, i2);
    }
    static upload(e2, t2, n2, i2) {
      for (let r2 = 0, a2 = t2.length; r2 !== a2; ++r2) {
        const a3 = t2[r2], o2 = n2[a3.id];
        false !== o2.needsUpdate && a3.setValue(e2, o2.value, i2);
      }
    }
    static seqWithValue(e2, t2) {
      const n2 = [];
      for (let i2 = 0, r2 = e2.length; i2 !== r2; ++i2) {
        const r3 = e2[i2];
        r3.id in t2 && n2.push(r3);
      }
      return n2;
    }
  };
  function Rr2(e2, t2, n2) {
    const i2 = e2.createShader(t2);
    return e2.shaderSource(i2, n2), e2.compileShader(i2), i2;
  }
  var br2 = 0;
  var Cr2 = new Is();
  function Pr2(e2, t2, n2) {
    const i2 = e2.getShaderParameter(t2, e2.COMPILE_STATUS), r2 = (e2.getShaderInfoLog(t2) || "").trim();
    if (i2 && "" === r2) return "";
    const a2 = /ERROR: 0:(\d+)/.exec(r2);
    if (a2) {
      const i3 = parseInt(a2[1]);
      return n2.toUpperCase() + "\n\n" + r2 + "\n\n" + function(e3, t3) {
        const n3 = e3.split("\n"), i4 = [], r3 = Math.max(t3 - 6, 0), a3 = Math.min(t3 + 6, n3.length);
        for (let e4 = r3; e4 < a3; e4++) {
          const r4 = e4 + 1;
          i4.push(`${r4 === t3 ? ">" : " "} ${r4}: ${n3[e4]}`);
        }
        return i4.join("\n");
      }(e2.getShaderSource(t2), i3);
    }
    return r2;
  }
  function Lr2(e2, t2) {
    const n2 = function(e3) {
      Rs._getMatrix(Cr2, Rs.workingColorSpace, e3);
      const t3 = `mat3( ${Cr2.elements.map((e4) => e4.toFixed(4))} )`;
      switch (Rs.getTransfer(e3)) {
        case si:
          return [t3, "LinearTransferOETF"];
        case ri:
          return [t3, "sRGBTransferOETF"];
        default:
          return as("WebGLProgram: Unsupported color space: ", e3), [t3, "LinearTransferOETF"];
      }
    }(t2);
    return [`vec4 ${e2}( vec4 value ) {`, `	return ${n2[1]}( vec4( value.rgb * ${n2[0]}, value.a ) );`, "}"].join("\n");
  }
  var Ur2 = { [K]: "Linear", [tt]: "Reinhard", [et]: "Cineon", [it]: "ACESFilmic", [rt]: "AgX", [nt]: "Neutral", [st]: "Custom" };
  function Dr2(e2, t2) {
    const n2 = Ur2[t2];
    return void 0 === n2 ? (as("WebGLProgram: Unsupported toneMapping:", t2), "vec3 " + e2 + "( vec3 color ) { return LinearToneMapping( color ); }") : "vec3 " + e2 + "( vec3 color ) { return " + n2 + "ToneMapping( color ); }";
  }
  var wr2 = new Ts();
  function Ir2() {
    Rs.getLuminanceCoefficients(wr2);
    return ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${wr2.x.toFixed(4)}, ${wr2.y.toFixed(4)}, ${wr2.z.toFixed(4)} );`, "	return dot( weights, rgb );", "}"].join("\n");
  }
  function Nr2(e2) {
    return "" !== e2;
  }
  function yr2(e2, t2) {
    const n2 = t2.numSpotLightShadows + t2.numSpotLightMaps - t2.numSpotLightShadowsWithMaps;
    return e2.replace(/NUM_DIR_LIGHTS/g, t2.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t2.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t2.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, n2).replace(/NUM_RECT_AREA_LIGHTS/g, t2.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t2.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t2.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t2.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t2.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t2.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t2.numPointLightShadows);
  }
  function Or2(e2, t2) {
    return e2.replace(/NUM_CLIPPING_PLANES/g, t2.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t2.numClippingPlanes - t2.numClipIntersection);
  }
  var Fr2 = /^[ \t]*#include +<([\w\d./]+)>/gm;
  function Br2(e2) {
    return e2.replace(Fr2, Hr2);
  }
  var Gr2 = /* @__PURE__ */ new Map();
  function Hr2(e2, t2) {
    let n2 = Bn2[t2];
    if (void 0 === n2) {
      const e3 = Gr2.get(t2);
      if (void 0 === e3) throw new Error("Can not resolve #include <" + t2 + ">");
      n2 = Bn2[e3], as('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', t2, e3);
    }
    return Br2(n2);
  }
  var Vr2 = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
  function Wr2(e2) {
    return e2.replace(Vr2, zr2);
  }
  function zr2(e2, t2, n2, i2) {
    let r2 = "";
    for (let e3 = parseInt(t2); e3 < parseInt(n2); e3++) r2 += i2.replace(/\[\s*i\s*\]/g, "[ " + e3 + " ]").replace(/UNROLLED_LOOP_INDEX/g, e3);
    return r2;
  }
  function kr2(e2) {
    let t2 = `precision ${e2.precision} float;
	precision ${e2.precision} int;
	precision ${e2.precision} sampler2D;
	precision ${e2.precision} samplerCube;
	precision ${e2.precision} sampler3D;
	precision ${e2.precision} sampler2DArray;
	precision ${e2.precision} sampler2DShadow;
	precision ${e2.precision} samplerCubeShadow;
	precision ${e2.precision} sampler2DArrayShadow;
	precision ${e2.precision} isampler2D;
	precision ${e2.precision} isampler3D;
	precision ${e2.precision} isamplerCube;
	precision ${e2.precision} isampler2DArray;
	precision ${e2.precision} usampler2D;
	precision ${e2.precision} usampler3D;
	precision ${e2.precision} usamplerCube;
	precision ${e2.precision} usampler2DArray;
	`;
    return "highp" === e2.precision ? t2 += "\n#define HIGH_PRECISION" : "mediump" === e2.precision ? t2 += "\n#define MEDIUM_PRECISION" : "lowp" === e2.precision && (t2 += "\n#define LOW_PRECISION"), t2;
  }
  var Xr2 = { [h]: "SHADOWMAP_TYPE_PCF", [c]: "SHADOWMAP_TYPE_VSM" };
  var Kr2 = { [lt]: "ENVMAP_TYPE_CUBE", [ct]: "ENVMAP_TYPE_CUBE", [pt]: "ENVMAP_TYPE_CUBE_UV" };
  var Yr2 = { [ct]: "ENVMAP_MODE_REFRACTION" };
  var qr2 = { [Z]: "ENVMAP_BLENDING_MULTIPLY", [G]: "ENVMAP_BLENDING_MIX", [$]: "ENVMAP_BLENDING_ADD" };
  function jr2(e2, t2, n2, i2) {
    const r2 = e2.getContext(), a2 = n2.defines;
    let o2 = n2.vertexShader, s2 = n2.fragmentShader;
    const l2 = function(e3) {
      return Xr2[e3.shadowMapType] || "SHADOWMAP_TYPE_BASIC";
    }(n2), c2 = function(e3) {
      return false === e3.envMap ? "ENVMAP_TYPE_CUBE" : Kr2[e3.envMapMode] || "ENVMAP_TYPE_CUBE";
    }(n2), d2 = function(e3) {
      return false === e3.envMap ? "ENVMAP_MODE_REFLECTION" : Yr2[e3.envMapMode] || "ENVMAP_MODE_REFLECTION";
    }(n2), u2 = function(e3) {
      return false === e3.envMap ? "ENVMAP_BLENDING_NONE" : qr2[e3.combine] || "ENVMAP_BLENDING_NONE";
    }(n2), f2 = function(e3) {
      const t3 = e3.envMapCubeUVHeight;
      if (null === t3) return null;
      const n3 = Math.log2(t3) - 2, i3 = 1 / t3;
      return { texelWidth: 1 / (3 * Math.max(Math.pow(2, n3), 112)), texelHeight: i3, maxMip: n3 };
    }(n2), p2 = function(e3) {
      return [e3.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", e3.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(Nr2).join("\n");
    }(n2), m2 = function(e3) {
      const t3 = [];
      for (const n3 in e3) {
        const i3 = e3[n3];
        false !== i3 && t3.push("#define " + n3 + " " + i3);
      }
      return t3.join("\n");
    }(a2), h2 = r2.createProgram();
    let _2, g2, E2 = n2.glslVersion ? "#version " + n2.glslVersion + "\n" : "";
    n2.isRawShaderMaterial ? (_2 = ["#define SHADER_TYPE " + n2.shaderType, "#define SHADER_NAME " + n2.shaderName, m2].filter(Nr2).join("\n"), _2.length > 0 && (_2 += "\n"), g2 = ["#define SHADER_TYPE " + n2.shaderType, "#define SHADER_NAME " + n2.shaderName, m2].filter(Nr2).join("\n"), g2.length > 0 && (g2 += "\n")) : (_2 = [kr2(n2), "#define SHADER_TYPE " + n2.shaderType, "#define SHADER_NAME " + n2.shaderName, m2, n2.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", n2.batching ? "#define USE_BATCHING" : "", n2.batchingColor ? "#define USE_BATCHING_COLOR" : "", n2.instancing ? "#define USE_INSTANCING" : "", n2.instancingColor ? "#define USE_INSTANCING_COLOR" : "", n2.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", n2.useFog && n2.fog ? "#define USE_FOG" : "", n2.useFog && n2.fogExp2 ? "#define FOG_EXP2" : "", n2.map ? "#define USE_MAP" : "", n2.envMap ? "#define USE_ENVMAP" : "", n2.envMap ? "#define " + d2 : "", n2.lightMap ? "#define USE_LIGHTMAP" : "", n2.aoMap ? "#define USE_AOMAP" : "", n2.bumpMap ? "#define USE_BUMPMAP" : "", n2.normalMap ? "#define USE_NORMALMAP" : "", n2.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", n2.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", n2.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", n2.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n2.anisotropy ? "#define USE_ANISOTROPY" : "", n2.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", n2.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n2.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n2.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n2.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", n2.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", n2.specularMap ? "#define USE_SPECULARMAP" : "", n2.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", n2.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", n2.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n2.metalnessMap ? "#define USE_METALNESSMAP" : "", n2.alphaMap ? "#define USE_ALPHAMAP" : "", n2.alphaHash ? "#define USE_ALPHAHASH" : "", n2.transmission ? "#define USE_TRANSMISSION" : "", n2.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n2.thicknessMap ? "#define USE_THICKNESSMAP" : "", n2.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", n2.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", n2.mapUv ? "#define MAP_UV " + n2.mapUv : "", n2.alphaMapUv ? "#define ALPHAMAP_UV " + n2.alphaMapUv : "", n2.lightMapUv ? "#define LIGHTMAP_UV " + n2.lightMapUv : "", n2.aoMapUv ? "#define AOMAP_UV " + n2.aoMapUv : "", n2.emissiveMapUv ? "#define EMISSIVEMAP_UV " + n2.emissiveMapUv : "", n2.bumpMapUv ? "#define BUMPMAP_UV " + n2.bumpMapUv : "", n2.normalMapUv ? "#define NORMALMAP_UV " + n2.normalMapUv : "", n2.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + n2.displacementMapUv : "", n2.metalnessMapUv ? "#define METALNESSMAP_UV " + n2.metalnessMapUv : "", n2.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + n2.roughnessMapUv : "", n2.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + n2.anisotropyMapUv : "", n2.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + n2.clearcoatMapUv : "", n2.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + n2.clearcoatNormalMapUv : "", n2.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + n2.clearcoatRoughnessMapUv : "", n2.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + n2.iridescenceMapUv : "", n2.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + n2.iridescenceThicknessMapUv : "", n2.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + n2.sheenColorMapUv : "", n2.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + n2.sheenRoughnessMapUv : "", n2.specularMapUv ? "#define SPECULARMAP_UV " + n2.specularMapUv : "", n2.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + n2.specularColorMapUv : "", n2.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + n2.specularIntensityMapUv : "", n2.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + n2.transmissionMapUv : "", n2.thicknessMapUv ? "#define THICKNESSMAP_UV " + n2.thicknessMapUv : "", n2.vertexTangents && false === n2.flatShading ? "#define USE_TANGENT" : "", n2.vertexNormals ? "#define HAS_NORMAL" : "", n2.vertexColors ? "#define USE_COLOR" : "", n2.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n2.vertexUv1s ? "#define USE_UV1" : "", n2.vertexUv2s ? "#define USE_UV2" : "", n2.vertexUv3s ? "#define USE_UV3" : "", n2.pointsUvs ? "#define USE_POINTS_UV" : "", n2.flatShading ? "#define FLAT_SHADED" : "", n2.skinning ? "#define USE_SKINNING" : "", n2.morphTargets ? "#define USE_MORPHTARGETS" : "", n2.morphNormals && false === n2.flatShading ? "#define USE_MORPHNORMALS" : "", n2.morphColors ? "#define USE_MORPHCOLORS" : "", n2.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + n2.morphTextureStride : "", n2.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + n2.morphTargetsCount : "", n2.doubleSided ? "#define DOUBLE_SIDED" : "", n2.flipSided ? "#define FLIP_SIDED" : "", n2.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n2.shadowMapEnabled ? "#define " + l2 : "", n2.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", n2.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", n2.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", n2.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", "\n"].filter(Nr2).join("\n"), g2 = [kr2(n2), "#define SHADER_TYPE " + n2.shaderType, "#define SHADER_NAME " + n2.shaderName, m2, n2.useFog && n2.fog ? "#define USE_FOG" : "", n2.useFog && n2.fogExp2 ? "#define FOG_EXP2" : "", n2.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", n2.map ? "#define USE_MAP" : "", n2.matcap ? "#define USE_MATCAP" : "", n2.envMap ? "#define USE_ENVMAP" : "", n2.envMap ? "#define " + c2 : "", n2.envMap ? "#define " + d2 : "", n2.envMap ? "#define " + u2 : "", f2 ? "#define CUBEUV_TEXEL_WIDTH " + f2.texelWidth : "", f2 ? "#define CUBEUV_TEXEL_HEIGHT " + f2.texelHeight : "", f2 ? "#define CUBEUV_MAX_MIP " + f2.maxMip + ".0" : "", n2.lightMap ? "#define USE_LIGHTMAP" : "", n2.aoMap ? "#define USE_AOMAP" : "", n2.bumpMap ? "#define USE_BUMPMAP" : "", n2.normalMap ? "#define USE_NORMALMAP" : "", n2.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", n2.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", n2.packedNormalMap ? "#define USE_PACKED_NORMALMAP" : "", n2.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n2.anisotropy ? "#define USE_ANISOTROPY" : "", n2.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", n2.clearcoat ? "#define USE_CLEARCOAT" : "", n2.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n2.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n2.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n2.dispersion ? "#define USE_DISPERSION" : "", n2.iridescence ? "#define USE_IRIDESCENCE" : "", n2.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", n2.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", n2.specularMap ? "#define USE_SPECULARMAP" : "", n2.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", n2.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", n2.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n2.metalnessMap ? "#define USE_METALNESSMAP" : "", n2.alphaMap ? "#define USE_ALPHAMAP" : "", n2.alphaTest ? "#define USE_ALPHATEST" : "", n2.alphaHash ? "#define USE_ALPHAHASH" : "", n2.sheen ? "#define USE_SHEEN" : "", n2.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", n2.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", n2.transmission ? "#define USE_TRANSMISSION" : "", n2.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n2.thicknessMap ? "#define USE_THICKNESSMAP" : "", n2.vertexTangents && false === n2.flatShading ? "#define USE_TANGENT" : "", n2.vertexColors || n2.instancingColor ? "#define USE_COLOR" : "", n2.vertexAlphas || n2.batchingColor ? "#define USE_COLOR_ALPHA" : "", n2.vertexUv1s ? "#define USE_UV1" : "", n2.vertexUv2s ? "#define USE_UV2" : "", n2.vertexUv3s ? "#define USE_UV3" : "", n2.pointsUvs ? "#define USE_POINTS_UV" : "", n2.gradientMap ? "#define USE_GRADIENTMAP" : "", n2.flatShading ? "#define FLAT_SHADED" : "", n2.doubleSided ? "#define DOUBLE_SIDED" : "", n2.flipSided ? "#define FLIP_SIDED" : "", n2.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n2.shadowMapEnabled ? "#define " + l2 : "", n2.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", n2.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", n2.numLightProbeGrids > 0 ? "#define USE_LIGHT_PROBES_GRID" : "", n2.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", n2.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "", n2.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", n2.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", n2.toneMapping !== Q ? "#define TONE_MAPPING" : "", n2.toneMapping !== Q ? Bn2.tonemapping_pars_fragment : "", n2.toneMapping !== Q ? Dr2("toneMapping", n2.toneMapping) : "", n2.dithering ? "#define DITHERING" : "", n2.opaque ? "#define OPAQUE" : "", Bn2.colorspace_pars_fragment, Lr2("linearToOutputTexel", n2.outputColorSpace), Ir2(), n2.useDepthPacking ? "#define DEPTH_PACKING " + n2.depthPacking : "", "\n"].filter(Nr2).join("\n")), o2 = Br2(o2), o2 = yr2(o2, n2), o2 = Or2(o2, n2), s2 = Br2(s2), s2 = yr2(s2, n2), s2 = Or2(s2, n2), o2 = Wr2(o2), s2 = Wr2(s2), true !== n2.isRawShaderMaterial && (E2 = "#version 300 es\n", _2 = [p2, "#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + _2, g2 = ["#define varying in", n2.glslVersion === Ui ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", n2.glslVersion === Ui ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + g2);
    const S2 = E2 + _2 + o2, T2 = E2 + g2 + s2, M2 = Rr2(r2, r2.VERTEX_SHADER, S2), x2 = Rr2(r2, r2.FRAGMENT_SHADER, T2);
    function A2(t3) {
      if (e2.debug.checkShaderErrors) {
        const n3 = r2.getProgramInfoLog(h2) || "", i3 = r2.getShaderInfoLog(M2) || "", a3 = r2.getShaderInfoLog(x2) || "", o3 = n3.trim(), s3 = i3.trim(), l3 = a3.trim();
        let c3 = true, d3 = true;
        if (false === r2.getProgramParameter(h2, r2.LINK_STATUS)) if (c3 = false, "function" == typeof e2.debug.onShaderError) e2.debug.onShaderError(r2, h2, M2, x2);
        else {
          const e3 = Pr2(r2, M2, "vertex"), n4 = Pr2(r2, x2, "fragment");
          os("THREE.WebGLProgram: Shader Error " + r2.getError() + " - VALIDATE_STATUS " + r2.getProgramParameter(h2, r2.VALIDATE_STATUS) + "\n\nMaterial Name: " + t3.name + "\nMaterial Type: " + t3.type + "\n\nProgram Info Log: " + o3 + "\n" + e3 + "\n" + n4);
        }
        else "" !== o3 ? as("WebGLProgram: Program Info Log:", o3) : "" !== s3 && "" !== l3 || (d3 = false);
        d3 && (t3.diagnostics = { runnable: c3, programLog: o3, vertexShader: { log: s3, prefix: _2 }, fragmentShader: { log: l3, prefix: g2 } });
      }
      r2.deleteShader(M2), r2.deleteShader(x2), R2 = new Ar2(r2, h2), b2 = function(e3, t4) {
        const n3 = {}, i3 = e3.getProgramParameter(t4, e3.ACTIVE_ATTRIBUTES);
        for (let r3 = 0; r3 < i3; r3++) {
          const i4 = e3.getActiveAttrib(t4, r3), a3 = i4.name;
          let o3 = 1;
          i4.type === e3.FLOAT_MAT2 && (o3 = 2), i4.type === e3.FLOAT_MAT3 && (o3 = 3), i4.type === e3.FLOAT_MAT4 && (o3 = 4), n3[a3] = { type: i4.type, location: e3.getAttribLocation(t4, a3), locationSize: o3 };
        }
        return n3;
      }(r2, h2);
    }
    let R2, b2;
    r2.attachShader(h2, M2), r2.attachShader(h2, x2), void 0 !== n2.index0AttributeName ? r2.bindAttribLocation(h2, 0, n2.index0AttributeName) : true === n2.morphTargets && r2.bindAttribLocation(h2, 0, "position"), r2.linkProgram(h2), this.getUniforms = function() {
      return void 0 === R2 && A2(this), R2;
    }, this.getAttributes = function() {
      return void 0 === b2 && A2(this), b2;
    };
    let C2 = false === n2.rendererExtensionParallelShaderCompile;
    return this.isReady = function() {
      return false === C2 && (C2 = r2.getProgramParameter(h2, 37297)), C2;
    }, this.destroy = function() {
      i2.releaseStatesOfProgram(this), r2.deleteProgram(h2), this.program = void 0;
    }, this.type = n2.shaderType, this.name = n2.shaderName, this.id = br2++, this.cacheKey = t2, this.usedTimes = 1, this.program = h2, this.vertexShader = M2, this.fragmentShader = x2, this;
  }
  var Zr2 = 0;
  var $r2 = class {
    constructor() {
      this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
    }
    update(e2) {
      const t2 = e2.vertexShader, n2 = e2.fragmentShader, i2 = this._getShaderStage(t2), r2 = this._getShaderStage(n2), a2 = this._getShaderCacheForMaterial(e2);
      return false === a2.has(i2) && (a2.add(i2), i2.usedTimes++), false === a2.has(r2) && (a2.add(r2), r2.usedTimes++), this;
    }
    remove(e2) {
      const t2 = this.materialCache.get(e2);
      for (const e3 of t2) e3.usedTimes--, 0 === e3.usedTimes && this.shaderCache.delete(e3.code);
      return this.materialCache.delete(e2), this;
    }
    getVertexShaderID(e2) {
      return this._getShaderStage(e2.vertexShader).id;
    }
    getFragmentShaderID(e2) {
      return this._getShaderStage(e2.fragmentShader).id;
    }
    dispose() {
      this.shaderCache.clear(), this.materialCache.clear();
    }
    _getShaderCacheForMaterial(e2) {
      const t2 = this.materialCache;
      let n2 = t2.get(e2);
      return void 0 === n2 && (n2 = /* @__PURE__ */ new Set(), t2.set(e2, n2)), n2;
    }
    _getShaderStage(e2) {
      const t2 = this.shaderCache;
      let n2 = t2.get(e2);
      return void 0 === n2 && (n2 = new Qr2(e2), t2.set(e2, n2)), n2;
    }
  };
  var Qr2 = class {
    constructor(e2) {
      this.id = Zr2++, this.code = e2, this.usedTimes = 0;
    }
  };
  function Jr2(e2, t2, n2, i2, r2, o2) {
    const s2 = new lr(), l2 = new $r2(), d2 = /* @__PURE__ */ new Set(), u2 = [], m2 = /* @__PURE__ */ new Map(), h2 = i2.logarithmicDepthBuffer;
    let _2 = i2.precision;
    const g2 = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distance", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" };
    function E2(e3) {
      return d2.add(e3), 0 === e3 ? "uv" : `uv${e3}`;
    }
    return { getParameters: function(r3, s3, u3, m3, S2, T2) {
      const M2 = m3.fog, x2 = S2.geometry, A2 = r3.isMeshStandardMaterial || r3.isMeshLambertMaterial || r3.isMeshPhongMaterial ? m3.environment : null, R2 = r3.isMeshStandardMaterial || r3.isMeshLambertMaterial && !r3.envMap || r3.isMeshPhongMaterial && !r3.envMap, b2 = t2.get(r3.envMap || A2, R2), C2 = b2 && b2.mapping === pt ? b2.image.height : null, P2 = g2[r3.type];
      null !== r3.precision && (_2 = i2.getMaxPrecision(r3.precision), _2 !== r3.precision && as("WebGLProgram.getParameters:", r3.precision, "not supported, using", _2, "instead."));
      const U2 = x2.morphAttributes.position || x2.morphAttributes.normal || x2.morphAttributes.color, D2 = void 0 !== U2 ? U2.length : 0;
      let w2, I2, N2, y2, O2 = 0;
      if (void 0 !== x2.morphAttributes.position && (O2 = 1), void 0 !== x2.morphAttributes.normal && (O2 = 2), void 0 !== x2.morphAttributes.color && (O2 = 3), P2) {
        const e3 = Hn2[P2];
        w2 = e3.vertexShader, I2 = e3.fragmentShader;
      } else w2 = r3.vertexShader, I2 = r3.fragmentShader, l2.update(r3), N2 = l2.getVertexShaderID(r3), y2 = l2.getFragmentShaderID(r3);
      const F2 = e2.getRenderTarget(), B2 = e2.state.buffers.depth.getReversed(), G2 = true === S2.isInstancedMesh, H2 = true === S2.isBatchedMesh, V2 = !!r3.map, W2 = !!r3.matcap, z2 = !!b2, k2 = !!r3.aoMap, X2 = !!r3.lightMap, K2 = !!r3.bumpMap, Y2 = !!r3.normalMap, q2 = !!r3.displacementMap, j2 = !!r3.emissiveMap, Z2 = !!r3.metalnessMap, $2 = !!r3.roughnessMap, Q2 = r3.anisotropy > 0, J2 = r3.clearcoat > 0, ee2 = r3.dispersion > 0, te2 = r3.iridescence > 0, ne2 = r3.sheen > 0, ie2 = r3.transmission > 0, re2 = Q2 && !!r3.anisotropyMap, ae2 = J2 && !!r3.clearcoatMap, oe2 = J2 && !!r3.clearcoatNormalMap, se2 = J2 && !!r3.clearcoatRoughnessMap, le2 = te2 && !!r3.iridescenceMap, ce2 = te2 && !!r3.iridescenceThicknessMap, de2 = ne2 && !!r3.sheenColorMap, ue2 = ne2 && !!r3.sheenRoughnessMap, fe2 = !!r3.specularMap, pe2 = !!r3.specularColorMap, me2 = !!r3.specularIntensityMap, Ee2 = ie2 && !!r3.transmissionMap, xe2 = ie2 && !!r3.thicknessMap, Ae2 = !!r3.gradientMap, Re2 = !!r3.alphaMap, be2 = r3.alphaTest > 0, Ce2 = !!r3.alphaHash, Pe2 = !!r3.extensions;
      let Le2 = Q;
      r3.toneMapped && (null !== F2 && true !== F2.isXRRenderTarget || (Le2 = e2.toneMapping));
      const Ue2 = { shaderID: P2, shaderType: r3.type, shaderName: r3.name, vertexShader: w2, fragmentShader: I2, defines: r3.defines, customVertexShaderID: N2, customFragmentShaderID: y2, isRawShaderMaterial: true === r3.isRawShaderMaterial, glslVersion: r3.glslVersion, precision: _2, batching: H2, batchingColor: H2 && null !== S2._colorsTexture, instancing: G2, instancingColor: G2 && null !== S2.instanceColor, instancingMorph: G2 && null !== S2.morphTexture, outputColorSpace: null === F2 ? e2.outputColorSpace : true === F2.isXRRenderTarget ? F2.texture.colorSpace : Rs.workingColorSpace, alphaToCoverage: !!r3.alphaToCoverage, map: V2, matcap: W2, envMap: z2, envMapMode: z2 && b2.mapping, envMapCubeUVHeight: C2, aoMap: k2, lightMap: X2, bumpMap: K2, normalMap: Y2, displacementMap: q2, emissiveMap: j2, normalMapObjectSpace: Y2 && r3.normalMapType === Ke, normalMapTangentSpace: Y2 && r3.normalMapType === Qe, packedNormalMap: Y2 && r3.normalMapType === Qe && (De2 = r3.normalMap.format, De2 === Yt || De2 === ce || De2 === ke), metalnessMap: Z2, roughnessMap: $2, anisotropy: Q2, anisotropyMap: re2, clearcoat: J2, clearcoatMap: ae2, clearcoatNormalMap: oe2, clearcoatRoughnessMap: se2, dispersion: ee2, iridescence: te2, iridescenceMap: le2, iridescenceThicknessMap: ce2, sheen: ne2, sheenColorMap: de2, sheenRoughnessMap: ue2, specularMap: fe2, specularColorMap: pe2, specularIntensityMap: me2, transmission: ie2, transmissionMap: Ee2, thicknessMap: xe2, gradientMap: Ae2, opaque: false === r3.transparent && r3.blending === y && false === r3.alphaToCoverage, alphaMap: Re2, alphaTest: be2, alphaHash: Ce2, combine: r3.combine, mapUv: V2 && E2(r3.map.channel), aoMapUv: k2 && E2(r3.aoMap.channel), lightMapUv: X2 && E2(r3.lightMap.channel), bumpMapUv: K2 && E2(r3.bumpMap.channel), normalMapUv: Y2 && E2(r3.normalMap.channel), displacementMapUv: q2 && E2(r3.displacementMap.channel), emissiveMapUv: j2 && E2(r3.emissiveMap.channel), metalnessMapUv: Z2 && E2(r3.metalnessMap.channel), roughnessMapUv: $2 && E2(r3.roughnessMap.channel), anisotropyMapUv: re2 && E2(r3.anisotropyMap.channel), clearcoatMapUv: ae2 && E2(r3.clearcoatMap.channel), clearcoatNormalMapUv: oe2 && E2(r3.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: se2 && E2(r3.clearcoatRoughnessMap.channel), iridescenceMapUv: le2 && E2(r3.iridescenceMap.channel), iridescenceThicknessMapUv: ce2 && E2(r3.iridescenceThicknessMap.channel), sheenColorMapUv: de2 && E2(r3.sheenColorMap.channel), sheenRoughnessMapUv: ue2 && E2(r3.sheenRoughnessMap.channel), specularMapUv: fe2 && E2(r3.specularMap.channel), specularColorMapUv: pe2 && E2(r3.specularColorMap.channel), specularIntensityMapUv: me2 && E2(r3.specularIntensityMap.channel), transmissionMapUv: Ee2 && E2(r3.transmissionMap.channel), thicknessMapUv: xe2 && E2(r3.thicknessMap.channel), alphaMapUv: Re2 && E2(r3.alphaMap.channel), vertexTangents: !!x2.attributes.tangent && (Y2 || Q2), vertexNormals: !!x2.attributes.normal, vertexColors: r3.vertexColors, vertexAlphas: true === r3.vertexColors && !!x2.attributes.color && 4 === x2.attributes.color.itemSize, pointsUvs: true === S2.isPoints && !!x2.attributes.uv && (V2 || Re2), fog: !!M2, useFog: true === r3.fog, fogExp2: !!M2 && M2.isFogExp2, flatShading: false === r3.wireframe && (true === r3.flatShading || void 0 === x2.attributes.normal && false === Y2 && (r3.isMeshLambertMaterial || r3.isMeshPhongMaterial || r3.isMeshStandardMaterial || r3.isMeshPhysicalMaterial)), sizeAttenuation: true === r3.sizeAttenuation, logarithmicDepthBuffer: h2, reversedDepthBuffer: B2, skinning: true === S2.isSkinnedMesh, morphTargets: void 0 !== x2.morphAttributes.position, morphNormals: void 0 !== x2.morphAttributes.normal, morphColors: void 0 !== x2.morphAttributes.color, morphTargetsCount: D2, morphTextureStride: O2, numDirLights: s3.directional.length, numPointLights: s3.point.length, numSpotLights: s3.spot.length, numSpotLightMaps: s3.spotLightMap.length, numRectAreaLights: s3.rectArea.length, numHemiLights: s3.hemi.length, numDirLightShadows: s3.directionalShadowMap.length, numPointLightShadows: s3.pointShadowMap.length, numSpotLightShadows: s3.spotShadowMap.length, numSpotLightShadowsWithMaps: s3.numSpotLightShadowsWithMaps, numLightProbes: s3.numLightProbes, numLightProbeGrids: T2.length, numClippingPlanes: o2.numPlanes, numClipIntersection: o2.numIntersection, dithering: r3.dithering, shadowMapEnabled: e2.shadowMap.enabled && u3.length > 0, shadowMapType: e2.shadowMap.type, toneMapping: Le2, decodeVideoTexture: V2 && true === r3.map.isVideoTexture && Rs.getTransfer(r3.map.colorSpace) === ri, decodeVideoTextureEmissive: j2 && true === r3.emissiveMap.isVideoTexture && Rs.getTransfer(r3.emissiveMap.colorSpace) === ri, premultipliedAlpha: r3.premultipliedAlpha, doubleSided: r3.side === p, flipSided: r3.side === d, useDepthPacking: r3.depthPacking >= 0, depthPacking: r3.depthPacking || 0, index0AttributeName: r3.index0AttributeName, extensionClipCullDistance: Pe2 && true === r3.extensions.clipCullDistance && n2.has("WEBGL_clip_cull_distance"), extensionMultiDraw: (Pe2 && true === r3.extensions.multiDraw || H2) && n2.has("WEBGL_multi_draw"), rendererExtensionParallelShaderCompile: n2.has("KHR_parallel_shader_compile"), customProgramCacheKey: r3.customProgramCacheKey() };
      var De2;
      return Ue2.vertexUv1s = d2.has(1), Ue2.vertexUv2s = d2.has(2), Ue2.vertexUv3s = d2.has(3), d2.clear(), Ue2;
    }, getProgramCacheKey: function(t3) {
      const n3 = [];
      if (t3.shaderID ? n3.push(t3.shaderID) : (n3.push(t3.customVertexShaderID), n3.push(t3.customFragmentShaderID)), void 0 !== t3.defines) for (const e3 in t3.defines) n3.push(e3), n3.push(t3.defines[e3]);
      return false === t3.isRawShaderMaterial && (!function(e3, t4) {
        e3.push(t4.precision), e3.push(t4.outputColorSpace), e3.push(t4.envMapMode), e3.push(t4.envMapCubeUVHeight), e3.push(t4.mapUv), e3.push(t4.alphaMapUv), e3.push(t4.lightMapUv), e3.push(t4.aoMapUv), e3.push(t4.bumpMapUv), e3.push(t4.normalMapUv), e3.push(t4.displacementMapUv), e3.push(t4.emissiveMapUv), e3.push(t4.metalnessMapUv), e3.push(t4.roughnessMapUv), e3.push(t4.anisotropyMapUv), e3.push(t4.clearcoatMapUv), e3.push(t4.clearcoatNormalMapUv), e3.push(t4.clearcoatRoughnessMapUv), e3.push(t4.iridescenceMapUv), e3.push(t4.iridescenceThicknessMapUv), e3.push(t4.sheenColorMapUv), e3.push(t4.sheenRoughnessMapUv), e3.push(t4.specularMapUv), e3.push(t4.specularColorMapUv), e3.push(t4.specularIntensityMapUv), e3.push(t4.transmissionMapUv), e3.push(t4.thicknessMapUv), e3.push(t4.combine), e3.push(t4.fogExp2), e3.push(t4.sizeAttenuation), e3.push(t4.morphTargetsCount), e3.push(t4.morphAttributeCount), e3.push(t4.numDirLights), e3.push(t4.numPointLights), e3.push(t4.numSpotLights), e3.push(t4.numSpotLightMaps), e3.push(t4.numHemiLights), e3.push(t4.numRectAreaLights), e3.push(t4.numDirLightShadows), e3.push(t4.numPointLightShadows), e3.push(t4.numSpotLightShadows), e3.push(t4.numSpotLightShadowsWithMaps), e3.push(t4.numLightProbes), e3.push(t4.shadowMapType), e3.push(t4.toneMapping), e3.push(t4.numClippingPlanes), e3.push(t4.numClipIntersection), e3.push(t4.depthPacking);
      }(n3, t3), function(e3, t4) {
        s2.disableAll(), t4.instancing && s2.enable(0);
        t4.instancingColor && s2.enable(1);
        t4.instancingMorph && s2.enable(2);
        t4.matcap && s2.enable(3);
        t4.envMap && s2.enable(4);
        t4.normalMapObjectSpace && s2.enable(5);
        t4.normalMapTangentSpace && s2.enable(6);
        t4.clearcoat && s2.enable(7);
        t4.iridescence && s2.enable(8);
        t4.alphaTest && s2.enable(9);
        t4.vertexColors && s2.enable(10);
        t4.vertexAlphas && s2.enable(11);
        t4.vertexUv1s && s2.enable(12);
        t4.vertexUv2s && s2.enable(13);
        t4.vertexUv3s && s2.enable(14);
        t4.vertexTangents && s2.enable(15);
        t4.anisotropy && s2.enable(16);
        t4.alphaHash && s2.enable(17);
        t4.batching && s2.enable(18);
        t4.dispersion && s2.enable(19);
        t4.batchingColor && s2.enable(20);
        t4.gradientMap && s2.enable(21);
        t4.packedNormalMap && s2.enable(22);
        t4.vertexNormals && s2.enable(23);
        e3.push(s2.mask), s2.disableAll(), t4.fog && s2.enable(0);
        t4.useFog && s2.enable(1);
        t4.flatShading && s2.enable(2);
        t4.logarithmicDepthBuffer && s2.enable(3);
        t4.reversedDepthBuffer && s2.enable(4);
        t4.skinning && s2.enable(5);
        t4.morphTargets && s2.enable(6);
        t4.morphNormals && s2.enable(7);
        t4.morphColors && s2.enable(8);
        t4.premultipliedAlpha && s2.enable(9);
        t4.shadowMapEnabled && s2.enable(10);
        t4.doubleSided && s2.enable(11);
        t4.flipSided && s2.enable(12);
        t4.useDepthPacking && s2.enable(13);
        t4.dithering && s2.enable(14);
        t4.transmission && s2.enable(15);
        t4.sheen && s2.enable(16);
        t4.opaque && s2.enable(17);
        t4.pointsUvs && s2.enable(18);
        t4.decodeVideoTexture && s2.enable(19);
        t4.decodeVideoTextureEmissive && s2.enable(20);
        t4.alphaToCoverage && s2.enable(21);
        t4.numLightProbeGrids > 0 && s2.enable(22);
        e3.push(s2.mask);
      }(n3, t3), n3.push(e2.outputColorSpace)), n3.push(t3.customProgramCacheKey), n3.join();
    }, getUniforms: function(e3) {
      const t3 = g2[e3.type];
      let n3;
      if (t3) {
        const e4 = Hn2[t3];
        n3 = Zl.clone(e4.uniforms);
      } else n3 = e3.uniforms;
      return n3;
    }, acquireProgram: function(t3, n3) {
      let i3 = m2.get(n3);
      return void 0 !== i3 ? ++i3.usedTimes : (i3 = new jr2(e2, n3, t3, r2), u2.push(i3), m2.set(n3, i3)), i3;
    }, releaseProgram: function(e3) {
      if (0 === --e3.usedTimes) {
        const t3 = u2.indexOf(e3);
        u2[t3] = u2[u2.length - 1], u2.pop(), m2.delete(e3.cacheKey), e3.destroy();
      }
    }, releaseShaderCache: function(e3) {
      l2.remove(e3);
    }, programs: u2, dispose: function() {
      l2.dispose();
    } };
  }
  function ea2() {
    let e2 = /* @__PURE__ */ new WeakMap();
    return { has: function(t2) {
      return e2.has(t2);
    }, get: function(t2) {
      let n2 = e2.get(t2);
      return void 0 === n2 && (n2 = {}, e2.set(t2, n2)), n2;
    }, remove: function(t2) {
      e2.delete(t2);
    }, update: function(t2, n2, i2) {
      e2.get(t2)[n2] = i2;
    }, dispose: function() {
      e2 = /* @__PURE__ */ new WeakMap();
    } };
  }
  function ta2(e2, t2) {
    return e2.groupOrder !== t2.groupOrder ? e2.groupOrder - t2.groupOrder : e2.renderOrder !== t2.renderOrder ? e2.renderOrder - t2.renderOrder : e2.material.id !== t2.material.id ? e2.material.id - t2.material.id : e2.materialVariant !== t2.materialVariant ? e2.materialVariant - t2.materialVariant : e2.z !== t2.z ? e2.z - t2.z : e2.id - t2.id;
  }
  function na2(e2, t2) {
    return e2.groupOrder !== t2.groupOrder ? e2.groupOrder - t2.groupOrder : e2.renderOrder !== t2.renderOrder ? e2.renderOrder - t2.renderOrder : e2.z !== t2.z ? t2.z - e2.z : e2.id - t2.id;
  }
  function ia2() {
    const e2 = [];
    let t2 = 0;
    const n2 = [], i2 = [], r2 = [];
    function a2(e3) {
      let t3 = 0;
      return e3.isInstancedMesh && (t3 += 2), e3.isSkinnedMesh && (t3 += 1), t3;
    }
    function o2(n3, i3, r3, o3, s2, l2) {
      let c2 = e2[t2];
      return void 0 === c2 ? (c2 = { id: n3.id, object: n3, geometry: i3, material: r3, materialVariant: a2(n3), groupOrder: o3, renderOrder: n3.renderOrder, z: s2, group: l2 }, e2[t2] = c2) : (c2.id = n3.id, c2.object = n3, c2.geometry = i3, c2.material = r3, c2.materialVariant = a2(n3), c2.groupOrder = o3, c2.renderOrder = n3.renderOrder, c2.z = s2, c2.group = l2), t2++, c2;
    }
    return { opaque: n2, transmissive: i2, transparent: r2, init: function() {
      t2 = 0, n2.length = 0, i2.length = 0, r2.length = 0;
    }, push: function(e3, t3, a3, s2, l2, c2) {
      const d2 = o2(e3, t3, a3, s2, l2, c2);
      a3.transmission > 0 ? i2.push(d2) : true === a3.transparent ? r2.push(d2) : n2.push(d2);
    }, unshift: function(e3, t3, a3, s2, l2, c2) {
      const d2 = o2(e3, t3, a3, s2, l2, c2);
      a3.transmission > 0 ? i2.unshift(d2) : true === a3.transparent ? r2.unshift(d2) : n2.unshift(d2);
    }, finish: function() {
      for (let n3 = t2, i3 = e2.length; n3 < i3; n3++) {
        const t3 = e2[n3];
        if (null === t3.id) break;
        t3.id = null, t3.object = null, t3.geometry = null, t3.material = null, t3.group = null;
      }
    }, sort: function(e3, t3) {
      n2.length > 1 && n2.sort(e3 || ta2), i2.length > 1 && i2.sort(t3 || na2), r2.length > 1 && r2.sort(t3 || na2);
    } };
  }
  function ra2() {
    let e2 = /* @__PURE__ */ new WeakMap();
    return { get: function(t2, n2) {
      const i2 = e2.get(t2);
      let r2;
      return void 0 === i2 ? (r2 = new ia2(), e2.set(t2, [r2])) : n2 >= i2.length ? (r2 = new ia2(), i2.push(r2)) : r2 = i2[n2], r2;
    }, dispose: function() {
      e2 = /* @__PURE__ */ new WeakMap();
    } };
  }
  function aa2() {
    const e2 = {};
    return { get: function(t2) {
      if (void 0 !== e2[t2.id]) return e2[t2.id];
      let r2;
      switch (t2.type) {
        case "DirectionalLight":
          r2 = { direction: new Ts(), color: new Pr() };
          break;
        case "SpotLight":
          r2 = { position: new Ts(), direction: new Ts(), color: new Pr(), distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 };
          break;
        case "PointLight":
          r2 = { position: new Ts(), color: new Pr(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          r2 = { direction: new Ts(), skyColor: new Pr(), groundColor: new Pr() };
          break;
        case "RectAreaLight":
          r2 = { color: new Pr(), position: new Ts(), halfWidth: new Ts(), halfHeight: new Ts() };
      }
      return e2[t2.id] = r2, r2;
    } };
  }
  var oa2 = 0;
  function sa2(e2, t2) {
    return (t2.castShadow ? 2 : 0) - (e2.castShadow ? 2 : 0) + (t2.map ? 1 : 0) - (e2.map ? 1 : 0);
  }
  function la2(e2) {
    const n2 = new aa2(), r2 = /* @__PURE__ */ function() {
      const e3 = {};
      return { get: function(n3) {
        if (void 0 !== e3[n3.id]) return e3[n3.id];
        let i2;
        switch (n3.type) {
          case "DirectionalLight":
          case "SpotLight":
            i2 = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new _s() };
            break;
          case "PointLight":
            i2 = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new _s(), shadowCameraNear: 1, shadowCameraFar: 1e3 };
        }
        return e3[n3.id] = i2, i2;
      } };
    }(), a2 = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0, numLightProbes: 0 };
    for (let e3 = 0; e3 < 9; e3++) a2.probe.push(new Ts());
    const o2 = new Ts(), s2 = new Qs(), l2 = new Qs();
    return { setup: function(t2) {
      let i2 = 0, o3 = 0, s3 = 0;
      for (let e3 = 0; e3 < 9; e3++) a2.probe[e3].set(0, 0, 0);
      let l3 = 0, c2 = 0, d2 = 0, u2 = 0, f2 = 0, p2 = 0, m2 = 0, h2 = 0, _2 = 0, g2 = 0, v2 = 0;
      t2.sort(sa2);
      for (let e3 = 0, E3 = t2.length; e3 < E3; e3++) {
        const E4 = t2[e3], S2 = E4.color, T2 = E4.intensity, M2 = E4.distance;
        let x2 = null;
        if (E4.shadow && E4.shadow.map && (x2 = E4.shadow.map.texture.format === Yt ? E4.shadow.map.texture : E4.shadow.map.depthTexture || E4.shadow.map.texture), E4.isAmbientLight) i2 += S2.r * T2, o3 += S2.g * T2, s3 += S2.b * T2;
        else if (E4.isLightProbe) {
          for (let e4 = 0; e4 < 9; e4++) a2.probe[e4].addScaledVector(E4.sh.coefficients[e4], T2);
          v2++;
        } else if (E4.isDirectionalLight) {
          const e4 = n2.get(E4);
          if (e4.color.copy(E4.color).multiplyScalar(E4.intensity), E4.castShadow) {
            const e5 = E4.shadow, t3 = r2.get(E4);
            t3.shadowIntensity = e5.intensity, t3.shadowBias = e5.bias, t3.shadowNormalBias = e5.normalBias, t3.shadowRadius = e5.radius, t3.shadowMapSize = e5.mapSize, a2.directionalShadow[l3] = t3, a2.directionalShadowMap[l3] = x2, a2.directionalShadowMatrix[l3] = E4.shadow.matrix, p2++;
          }
          a2.directional[l3] = e4, l3++;
        } else if (E4.isSpotLight) {
          const e4 = n2.get(E4);
          e4.position.setFromMatrixPosition(E4.matrixWorld), e4.color.copy(S2).multiplyScalar(T2), e4.distance = M2, e4.coneCos = Math.cos(E4.angle), e4.penumbraCos = Math.cos(E4.angle * (1 - E4.penumbra)), e4.decay = E4.decay, a2.spot[d2] = e4;
          const t3 = E4.shadow;
          if (E4.map && (a2.spotLightMap[_2] = E4.map, _2++, t3.updateMatrices(E4), E4.castShadow && g2++), a2.spotLightMatrix[d2] = t3.matrix, E4.castShadow) {
            const e5 = r2.get(E4);
            e5.shadowIntensity = t3.intensity, e5.shadowBias = t3.bias, e5.shadowNormalBias = t3.normalBias, e5.shadowRadius = t3.radius, e5.shadowMapSize = t3.mapSize, a2.spotShadow[d2] = e5, a2.spotShadowMap[d2] = x2, h2++;
          }
          d2++;
        } else if (E4.isRectAreaLight) {
          const e4 = n2.get(E4);
          e4.color.copy(S2).multiplyScalar(T2), e4.halfWidth.set(0.5 * E4.width, 0, 0), e4.halfHeight.set(0, 0.5 * E4.height, 0), a2.rectArea[u2] = e4, u2++;
        } else if (E4.isPointLight) {
          const e4 = n2.get(E4);
          if (e4.color.copy(E4.color).multiplyScalar(E4.intensity), e4.distance = E4.distance, e4.decay = E4.decay, E4.castShadow) {
            const e5 = E4.shadow, t3 = r2.get(E4);
            t3.shadowIntensity = e5.intensity, t3.shadowBias = e5.bias, t3.shadowNormalBias = e5.normalBias, t3.shadowRadius = e5.radius, t3.shadowMapSize = e5.mapSize, t3.shadowCameraNear = e5.camera.near, t3.shadowCameraFar = e5.camera.far, a2.pointShadow[c2] = t3, a2.pointShadowMap[c2] = x2, a2.pointShadowMatrix[c2] = E4.shadow.matrix, m2++;
          }
          a2.point[c2] = e4, c2++;
        } else if (E4.isHemisphereLight) {
          const e4 = n2.get(E4);
          e4.skyColor.copy(E4.color).multiplyScalar(T2), e4.groundColor.copy(E4.groundColor).multiplyScalar(T2), a2.hemi[f2] = e4, f2++;
        }
      }
      u2 > 0 && (true === e2.has("OES_texture_float_linear") ? (a2.rectAreaLTC1 = Gn2.LTC_FLOAT_1, a2.rectAreaLTC2 = Gn2.LTC_FLOAT_2) : (a2.rectAreaLTC1 = Gn2.LTC_HALF_1, a2.rectAreaLTC2 = Gn2.LTC_HALF_2)), a2.ambient[0] = i2, a2.ambient[1] = o3, a2.ambient[2] = s3;
      const E2 = a2.hash;
      E2.directionalLength === l3 && E2.pointLength === c2 && E2.spotLength === d2 && E2.rectAreaLength === u2 && E2.hemiLength === f2 && E2.numDirectionalShadows === p2 && E2.numPointShadows === m2 && E2.numSpotShadows === h2 && E2.numSpotMaps === _2 && E2.numLightProbes === v2 || (a2.directional.length = l3, a2.spot.length = d2, a2.rectArea.length = u2, a2.point.length = c2, a2.hemi.length = f2, a2.directionalShadow.length = p2, a2.directionalShadowMap.length = p2, a2.pointShadow.length = m2, a2.pointShadowMap.length = m2, a2.spotShadow.length = h2, a2.spotShadowMap.length = h2, a2.directionalShadowMatrix.length = p2, a2.pointShadowMatrix.length = m2, a2.spotLightMatrix.length = h2 + _2 - g2, a2.spotLightMap.length = _2, a2.numSpotLightShadowsWithMaps = g2, a2.numLightProbes = v2, E2.directionalLength = l3, E2.pointLength = c2, E2.spotLength = d2, E2.rectAreaLength = u2, E2.hemiLength = f2, E2.numDirectionalShadows = p2, E2.numPointShadows = m2, E2.numSpotShadows = h2, E2.numSpotMaps = _2, E2.numLightProbes = v2, a2.version = oa2++);
    }, setupView: function(e3, t2) {
      let n3 = 0, i2 = 0, r3 = 0, c2 = 0, d2 = 0;
      const u2 = t2.matrixWorldInverse;
      for (let t3 = 0, f2 = e3.length; t3 < f2; t3++) {
        const f3 = e3[t3];
        if (f3.isDirectionalLight) {
          const e4 = a2.directional[n3];
          e4.direction.setFromMatrixPosition(f3.matrixWorld), o2.setFromMatrixPosition(f3.target.matrixWorld), e4.direction.sub(o2), e4.direction.transformDirection(u2), n3++;
        } else if (f3.isSpotLight) {
          const e4 = a2.spot[r3];
          e4.position.setFromMatrixPosition(f3.matrixWorld), e4.position.applyMatrix4(u2), e4.direction.setFromMatrixPosition(f3.matrixWorld), o2.setFromMatrixPosition(f3.target.matrixWorld), e4.direction.sub(o2), e4.direction.transformDirection(u2), r3++;
        } else if (f3.isRectAreaLight) {
          const e4 = a2.rectArea[c2];
          e4.position.setFromMatrixPosition(f3.matrixWorld), e4.position.applyMatrix4(u2), l2.identity(), s2.copy(f3.matrixWorld), s2.premultiply(u2), l2.extractRotation(s2), e4.halfWidth.set(0.5 * f3.width, 0, 0), e4.halfHeight.set(0, 0.5 * f3.height, 0), e4.halfWidth.applyMatrix4(l2), e4.halfHeight.applyMatrix4(l2), c2++;
        } else if (f3.isPointLight) {
          const e4 = a2.point[i2];
          e4.position.setFromMatrixPosition(f3.matrixWorld), e4.position.applyMatrix4(u2), i2++;
        } else if (f3.isHemisphereLight) {
          const e4 = a2.hemi[d2];
          e4.direction.setFromMatrixPosition(f3.matrixWorld), e4.direction.transformDirection(u2), d2++;
        }
      }
    }, state: a2 };
  }
  function ca(e2) {
    const t2 = new la2(e2), n2 = [], i2 = [], r2 = [];
    const a2 = { lightsArray: n2, shadowsArray: i2, lightProbeGridArray: r2, camera: null, lights: t2, transmissionRenderTarget: {}, textureUnits: 0 };
    return { init: function(e3) {
      a2.camera = e3, n2.length = 0, i2.length = 0, r2.length = 0;
    }, state: a2, setupLights: function() {
      t2.setup(n2);
    }, setupLightsView: function(e3) {
      t2.setupView(n2, e3);
    }, pushLight: function(e3) {
      n2.push(e3);
    }, pushShadow: function(e3) {
      i2.push(e3);
    }, pushLightProbeGrid: function(e3) {
      r2.push(e3);
    } };
  }
  function da2(e2) {
    let t2 = /* @__PURE__ */ new WeakMap();
    return { get: function(n2, i2 = 0) {
      const r2 = t2.get(n2);
      let a2;
      return void 0 === r2 ? (a2 = new ca(e2), t2.set(n2, [a2])) : i2 >= r2.length ? (a2 = new ca(e2), r2.push(a2)) : a2 = r2[i2], a2;
    }, dispose: function() {
      t2 = /* @__PURE__ */ new WeakMap();
    } };
  }
  var ua2 = [new Ts(1, 0, 0), new Ts(-1, 0, 0), new Ts(0, 1, 0), new Ts(0, -1, 0), new Ts(0, 0, 1), new Ts(0, 0, -1)];
  var fa2 = [new Ts(0, -1, 0), new Ts(0, -1, 0), new Ts(0, 0, 1), new Ts(0, 0, -1), new Ts(0, -1, 0), new Ts(0, -1, 0)];
  var pa2 = new Qs();
  var ma2 = new Ts();
  var ha2 = new Ts();
  function _a2(e2, n2, i2) {
    let r2 = new mo();
    const a2 = new _s(), s2 = new _s(), d2 = new Js(), u2 = new rc(), f2 = new nc(), p2 = {}, m2 = i2.maxTextureSize, _2 = { [u]: d, [d]: u, [p]: p }, g2 = new Gl({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new _s() }, radius: { value: 4 } }, vertexShader: "void main() {\n	gl_Position = vec4( position, 1.0 );\n}", fragmentShader: "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\nvoid main() {\n	const float samples = float( VSM_SAMPLES );\n	float mean = 0.0;\n	float squared_mean = 0.0;\n	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n	for ( float i = 0.0; i < samples; i ++ ) {\n		float uvOffset = uvStart + i * uvStride;\n		#ifdef HORIZONTAL_PASS\n			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;\n			mean += distribution.x;\n			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n		#else\n			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;\n			mean += depth;\n			squared_mean += depth * depth;\n		#endif\n	}\n	mean = mean / samples;\n	squared_mean = squared_mean / samples;\n	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );\n	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );\n}" }), S2 = g2.clone();
    S2.defines.HORIZONTAL_PASS = 1;
    const M2 = new Wn();
    M2.setAttribute("position", new Mn(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
    const x2 = new Ra(M2, g2), A2 = this;
    this.enabled = false, this.autoUpdate = true, this.needsUpdate = false, this.type = h;
    let R2 = this.type;
    function C2(t2, i3) {
      const r3 = n2.update(x2);
      g2.defines.VSM_SAMPLES !== t2.blurSamples && (g2.defines.VSM_SAMPLES = t2.blurSamples, S2.defines.VSM_SAMPLES = t2.blurSamples, g2.needsUpdate = true, S2.needsUpdate = true), null === t2.mapPass && (t2.mapPass = new Ys(a2.x, a2.y, { format: Yt, type: Rt })), g2.uniforms.shadow_pass.value = t2.map.depthTexture, g2.uniforms.resolution.value = t2.mapSize, g2.uniforms.radius.value = t2.radius, e2.setRenderTarget(t2.mapPass), e2.clear(), e2.renderBufferDirect(i3, null, r3, g2, x2, null), S2.uniforms.shadow_pass.value = t2.mapPass.texture, S2.uniforms.resolution.value = t2.mapSize, S2.uniforms.radius.value = t2.radius, e2.setRenderTarget(t2.map), e2.clear(), e2.renderBufferDirect(i3, null, r3, S2, x2, null);
    }
    function P2(t2, n3, i3, r3) {
      let a3 = null;
      const o2 = true === i3.isPointLight ? t2.customDistanceMaterial : t2.customDepthMaterial;
      if (void 0 !== o2) a3 = o2;
      else if (a3 = true === i3.isPointLight ? f2 : u2, e2.localClippingEnabled && true === n3.clipShadows && Array.isArray(n3.clippingPlanes) && 0 !== n3.clippingPlanes.length || n3.displacementMap && 0 !== n3.displacementScale || n3.alphaMap && n3.alphaTest > 0 || n3.map && n3.alphaTest > 0 || true === n3.alphaToCoverage) {
        const e3 = a3.uuid, t3 = n3.uuid;
        let i4 = p2[e3];
        void 0 === i4 && (i4 = {}, p2[e3] = i4);
        let r4 = i4[t3];
        void 0 === r4 && (r4 = a3.clone(), i4[t3] = r4, n3.addEventListener("dispose", U2)), a3 = r4;
      }
      if (a3.visible = n3.visible, a3.wireframe = n3.wireframe, a3.side = r3 === c ? null !== n3.shadowSide ? n3.shadowSide : n3.side : null !== n3.shadowSide ? n3.shadowSide : _2[n3.side], a3.alphaMap = n3.alphaMap, a3.alphaTest = true === n3.alphaToCoverage ? 0.5 : n3.alphaTest, a3.map = n3.map, a3.clipShadows = n3.clipShadows, a3.clippingPlanes = n3.clippingPlanes, a3.clipIntersection = n3.clipIntersection, a3.displacementMap = n3.displacementMap, a3.displacementScale = n3.displacementScale, a3.displacementBias = n3.displacementBias, a3.wireframeLinewidth = n3.wireframeLinewidth, a3.linewidth = n3.linewidth, true === i3.isPointLight && true === a3.isMeshDistanceMaterial) {
        e2.properties.get(a3).light = i3;
      }
      return a3;
    }
    function L2(t2, i3, a3, o2, s3) {
      if (false === t2.visible) return;
      if (t2.layers.test(i3.layers) && (t2.isMesh || t2.isLine || t2.isPoints) && (t2.castShadow || t2.receiveShadow && s3 === c) && (!t2.frustumCulled || r2.intersectsObject(t2))) {
        t2.modelViewMatrix.multiplyMatrices(a3.matrixWorldInverse, t2.matrixWorld);
        const r3 = n2.update(t2), l3 = t2.material;
        if (Array.isArray(l3)) {
          const n3 = r3.groups;
          for (let c2 = 0, d3 = n3.length; c2 < d3; c2++) {
            const d4 = n3[c2], u3 = l3[d4.materialIndex];
            if (u3 && u3.visible) {
              const n4 = P2(t2, u3, o2, s3);
              t2.onBeforeShadow(e2, t2, i3, a3, r3, n4, d4), e2.renderBufferDirect(a3, null, r3, n4, t2, d4), t2.onAfterShadow(e2, t2, i3, a3, r3, n4, d4);
            }
          }
        } else if (l3.visible) {
          const n3 = P2(t2, l3, o2, s3);
          t2.onBeforeShadow(e2, t2, i3, a3, r3, n3, null), e2.renderBufferDirect(a3, null, r3, n3, t2, null), t2.onAfterShadow(e2, t2, i3, a3, r3, n3, null);
        }
      }
      const l2 = t2.children;
      for (let e3 = 0, t3 = l2.length; e3 < t3; e3++) L2(l2[e3], i3, a3, o2, s3);
    }
    function U2(e3) {
      e3.target.removeEventListener("dispose", U2);
      for (const t2 in p2) {
        const n3 = p2[t2], i3 = e3.target.uuid;
        if (i3 in n3) {
          n3[i3].dispose(), delete n3[i3];
        }
      }
    }
    this.render = function(t2, n3, i3) {
      if (false === A2.enabled) return;
      if (false === A2.autoUpdate && false === A2.needsUpdate) return;
      if (0 === t2.length) return;
      this.type === l && (as("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."), this.type = h);
      const o2 = e2.getRenderTarget(), l2 = e2.getActiveCubeFace(), c2 = e2.getActiveMipmapLevel(), u3 = e2.state;
      u3.setBlending(m), true === u3.buffers.depth.getReversed() ? u3.buffers.color.setClear(0, 0, 0, 0) : u3.buffers.color.setClear(1, 1, 1, 1), u3.buffers.depth.setTest(true), u3.setScissorTest(false);
      const f3 = R2 !== this.type;
      f3 && n3.traverse(function(e3) {
        e3.material && (Array.isArray(e3.material) ? e3.material.forEach((e4) => e4.needsUpdate = true) : e3.material.needsUpdate = true);
      });
      for (let o3 = 0, l3 = t2.length; o3 < l3; o3++) {
        const l4 = t2[o3], c3 = l4.shadow;
        if (void 0 === c3) {
          as("WebGLShadowMap:", l4, "has no shadow.");
          continue;
        }
        if (false === c3.autoUpdate && false === c3.needsUpdate) continue;
        a2.copy(c3.mapSize);
        const p3 = c3.getFrameExtents();
        a2.multiply(p3), s2.copy(c3.mapSize), (a2.x > m2 || a2.y > m2) && (a2.x > m2 && (s2.x = Math.floor(m2 / p3.x), a2.x = s2.x * p3.x, c3.mapSize.x = s2.x), a2.y > m2 && (s2.y = Math.floor(m2 / p3.y), a2.y = s2.y * p3.y, c3.mapSize.y = s2.y));
        const h2 = e2.state.buffers.depth.getReversed();
        if (c3.camera._reversedDepth = h2, null === c3.map || true === f3) {
          if (null !== c3.map && (null !== c3.map.depthTexture && (c3.map.depthTexture.dispose(), c3.map.depthTexture = null), c3.map.dispose()), this.type === c) {
            if (l4.isPointLight) {
              as("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");
              continue;
            }
            c3.map = new Ys(a2.x, a2.y, { format: Yt, type: Rt, minFilter: Mt, magFilter: Mt, generateMipmaps: false }), c3.map.texture.name = l4.name + ".shadowMap", c3.map.depthTexture = new ph(a2.x, a2.y, Pt), c3.map.depthTexture.name = l4.name + ".shadowMapDepth", c3.map.depthTexture.format = Wt, c3.map.depthTexture.compareFunction = null, c3.map.depthTexture.minFilter = ft, c3.map.depthTexture.magFilter = ft;
          } else l4.isPointLight ? (c3.map = new di2(a2.x), c3.map.depthTexture = new mh(a2.x, Ot)) : (c3.map = new Ys(a2.x, a2.y), c3.map.depthTexture = new ph(a2.x, a2.y, Ot)), c3.map.depthTexture.name = l4.name + ".shadowMap", c3.map.depthTexture.format = Wt, this.type === h ? (c3.map.depthTexture.compareFunction = h2 ? Bi : zi, c3.map.depthTexture.minFilter = Mt, c3.map.depthTexture.magFilter = Mt) : (c3.map.depthTexture.compareFunction = null, c3.map.depthTexture.minFilter = ft, c3.map.depthTexture.magFilter = ft);
          c3.camera.updateProjectionMatrix();
        }
        const _3 = c3.map.isWebGLCubeRenderTarget ? 6 : 1;
        for (let t3 = 0; t3 < _3; t3++) {
          if (c3.map.isWebGLCubeRenderTarget) e2.setRenderTarget(c3.map, t3), e2.clear();
          else {
            0 === t3 && (e2.setRenderTarget(c3.map), e2.clear());
            const n4 = c3.getViewport(t3);
            d2.set(s2.x * n4.x, s2.y * n4.y, s2.x * n4.z, s2.y * n4.w), u3.viewport(d2);
          }
          if (l4.isPointLight) {
            const e3 = c3.camera, n4 = c3.matrix, i4 = l4.distance || e3.far;
            i4 !== e3.far && (e3.far = i4, e3.updateProjectionMatrix()), ma2.setFromMatrixPosition(l4.matrixWorld), e3.position.copy(ma2), ha2.copy(e3.position), ha2.add(ua2[t3]), e3.up.copy(fa2[t3]), e3.lookAt(ha2), e3.updateMatrixWorld(), n4.makeTranslation(-ma2.x, -ma2.y, -ma2.z), pa2.multiplyMatrices(e3.projectionMatrix, e3.matrixWorldInverse), c3._frustum.setFromProjectionMatrix(pa2, e3.coordinateSystem, e3.reversedDepth);
          } else c3.updateMatrices(l4);
          r2 = c3.getFrustum(), L2(n3, i3, c3.camera, l4, this.type);
        }
        true !== c3.isPointLightShadow && this.type === c && C2(c3, i3), c3.needsUpdate = false;
      }
      R2 = this.type, A2.needsUpdate = false, e2.setRenderTarget(o2, l2, c2);
    };
  }
  function ga2(e2, t2) {
    const i2 = new function() {
      let t3 = false;
      const n2 = new Js();
      let i3 = null;
      const r3 = new Js(0, 0, 0, 0);
      return { setMask: function(n3) {
        i3 === n3 || t3 || (e2.colorMask(n3, n3, n3, n3), i3 = n3);
      }, setLocked: function(e3) {
        t3 = e3;
      }, setClear: function(t4, i4, a3, o3, s3) {
        true === s3 && (t4 *= o3, i4 *= o3, a3 *= o3), n2.set(t4, i4, a3, o3), false === r3.equals(n2) && (e2.clearColor(t4, i4, a3, o3), r3.copy(n2));
      }, reset: function() {
        t3 = false, i3 = null, r3.set(-1, 0, 0, 0);
      } };
    }(), r2 = new function() {
      let n2 = false, i3 = false, r3 = null, a3 = null, o3 = null;
      return { setReversed: function(e3) {
        if (i3 !== e3) {
          const n3 = t2.get("EXT_clip_control");
          e3 ? n3.clipControlEXT(n3.LOWER_LEFT_EXT, n3.ZERO_TO_ONE_EXT) : n3.clipControlEXT(n3.LOWER_LEFT_EXT, n3.NEGATIVE_ONE_TO_ONE_EXT), i3 = e3;
          const r4 = o3;
          o3 = null, this.setClear(r4);
        }
      }, getReversed: function() {
        return i3;
      }, setTest: function(t3) {
        t3 ? X2(e2.DEPTH_TEST) : Y2(e2.DEPTH_TEST);
      }, setMask: function(t3) {
        r3 === t3 || n2 || (e2.depthMask(t3), r3 = t3);
      }, setFunc: function(t3) {
        if (i3 && (t3 = us[t3]), a3 !== t3) {
          switch (t3) {
            case D:
              e2.depthFunc(e2.NEVER);
              break;
            case U:
              e2.depthFunc(e2.ALWAYS);
              break;
            case W:
              e2.depthFunc(e2.LESS);
              break;
            case q:
              e2.depthFunc(e2.LEQUAL);
              break;
            case J:
              e2.depthFunc(e2.EQUAL);
              break;
            case X:
              e2.depthFunc(e2.GEQUAL);
              break;
            case Y:
              e2.depthFunc(e2.GREATER);
              break;
            case H:
              e2.depthFunc(e2.NOTEQUAL);
              break;
            default:
              e2.depthFunc(e2.LEQUAL);
          }
          a3 = t3;
        }
      }, setLocked: function(e3) {
        n2 = e3;
      }, setClear: function(t3) {
        o3 !== t3 && (o3 = t3, i3 && (t3 = 1 - t3), e2.clearDepth(t3));
      }, reset: function() {
        n2 = false, r3 = null, a3 = null, o3 = null, i3 = false;
      } };
    }(), a2 = new function() {
      let t3 = false, n2 = null, i3 = null, r3 = null, a3 = null, o3 = null, s3 = null, l3 = null, c2 = null;
      return { setTest: function(n3) {
        t3 || (n3 ? X2(e2.STENCIL_TEST) : Y2(e2.STENCIL_TEST));
      }, setMask: function(i4) {
        n2 === i4 || t3 || (e2.stencilMask(i4), n2 = i4);
      }, setFunc: function(t4, n3, o4) {
        i3 === t4 && r3 === n3 && a3 === o4 || (e2.stencilFunc(t4, n3, o4), i3 = t4, r3 = n3, a3 = o4);
      }, setOp: function(t4, n3, i4) {
        o3 === t4 && s3 === n3 && l3 === i4 || (e2.stencilOp(t4, n3, i4), o3 = t4, s3 = n3, l3 = i4);
      }, setLocked: function(e3) {
        t3 = e3;
      }, setClear: function(t4) {
        c2 !== t4 && (e2.clearStencil(t4), c2 = t4);
      }, reset: function() {
        t3 = false, n2 = null, i3 = null, r3 = null, a3 = null, o3 = null, s3 = null, l3 = null, c2 = null;
      } };
    }(), o2 = /* @__PURE__ */ new WeakMap(), s2 = /* @__PURE__ */ new WeakMap();
    let l2 = {}, d2 = {}, u2 = {}, f2 = /* @__PURE__ */ new WeakMap(), p2 = [], m2 = null, h2 = false, _2 = null, g2 = null, v2 = null, E2 = null, S2 = null, T2 = null, M2 = null, x2 = new Pr(0, 0, 0), A2 = 0, R2 = false, b2 = null, C2 = null, P2 = null, L2 = null, U2 = null;
    const I2 = e2.getParameter(e2.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
    let N2 = false, y2 = 0;
    const O2 = e2.getParameter(e2.VERSION);
    -1 !== O2.indexOf("WebGL") ? (y2 = parseFloat(/^WebGL (\d)/.exec(O2)[1]), N2 = y2 >= 1) : -1 !== O2.indexOf("OpenGL ES") && (y2 = parseFloat(/^OpenGL ES (\d)/.exec(O2)[1]), N2 = y2 >= 2);
    let F2 = null, B2 = {};
    const G2 = e2.getParameter(e2.SCISSOR_BOX), H2 = e2.getParameter(e2.VIEWPORT), V2 = new Js().fromArray(G2), W2 = new Js().fromArray(H2);
    function z2(t3, n2, i3, r3) {
      const a3 = new Uint8Array(4), o3 = e2.createTexture();
      e2.bindTexture(t3, o3), e2.texParameteri(t3, e2.TEXTURE_MIN_FILTER, e2.NEAREST), e2.texParameteri(t3, e2.TEXTURE_MAG_FILTER, e2.NEAREST);
      for (let o4 = 0; o4 < i3; o4++) t3 === e2.TEXTURE_3D || t3 === e2.TEXTURE_2D_ARRAY ? e2.texImage3D(n2, 0, e2.RGBA, 1, 1, r3, 0, e2.RGBA, e2.UNSIGNED_BYTE, a3) : e2.texImage2D(n2 + o4, 0, e2.RGBA, 1, 1, 0, e2.RGBA, e2.UNSIGNED_BYTE, a3);
      return o3;
    }
    const k2 = {};
    function X2(t3) {
      true !== l2[t3] && (e2.enable(t3), l2[t3] = true);
    }
    function Y2(t3) {
      false !== l2[t3] && (e2.disable(t3), l2[t3] = false);
    }
    k2[e2.TEXTURE_2D] = z2(e2.TEXTURE_2D, e2.TEXTURE_2D, 1), k2[e2.TEXTURE_CUBE_MAP] = z2(e2.TEXTURE_CUBE_MAP, e2.TEXTURE_CUBE_MAP_POSITIVE_X, 6), k2[e2.TEXTURE_2D_ARRAY] = z2(e2.TEXTURE_2D_ARRAY, e2.TEXTURE_2D_ARRAY, 1, 1), k2[e2.TEXTURE_3D] = z2(e2.TEXTURE_3D, e2.TEXTURE_3D, 1, 1), i2.setClear(0, 0, 0, 1), r2.setClear(1), a2.setClear(0), X2(e2.DEPTH_TEST), r2.setFunc(q), $2(false), Q2(r), X2(e2.CULL_FACE), Z2(m);
    const q2 = { [w]: e2.FUNC_ADD, [M]: e2.FUNC_SUBTRACT, [S]: e2.FUNC_REVERSE_SUBTRACT };
    q2[_] = e2.MIN, q2[A] = e2.MAX;
    const j2 = { [T]: e2.ZERO, [z]: e2.ONE, [C]: e2.SRC_COLOR, [B]: e2.SRC_ALPHA, [V]: e2.SRC_ALPHA_SATURATE, [R]: e2.DST_COLOR, [O]: e2.DST_ALPHA, [I]: e2.ONE_MINUS_SRC_COLOR, [k]: e2.ONE_MINUS_SRC_ALPHA, [N]: e2.ONE_MINUS_DST_COLOR, [P]: e2.ONE_MINUS_DST_ALPHA, [E]: e2.CONSTANT_COLOR, [L]: e2.ONE_MINUS_CONSTANT_COLOR, [F]: e2.CONSTANT_ALPHA, [j]: e2.ONE_MINUS_CONSTANT_ALPHA };
    function Z2(t3, n2, i3, r3, a3, o3, s3, l3, c2, d3) {
      if (t3 !== m) {
        if (false === h2 && (X2(e2.BLEND), h2 = true), t3 === b) a3 = a3 || n2, o3 = o3 || i3, s3 = s3 || r3, n2 === g2 && a3 === S2 || (e2.blendEquationSeparate(q2[n2], q2[a3]), g2 = n2, S2 = a3), i3 === v2 && r3 === E2 && o3 === T2 && s3 === M2 || (e2.blendFuncSeparate(j2[i3], j2[r3], j2[o3], j2[s3]), v2 = i3, E2 = r3, T2 = o3, M2 = s3), false !== l3.equals(x2) && c2 === A2 || (e2.blendColor(l3.r, l3.g, l3.b, c2), x2.copy(l3), A2 = c2), _2 = t3, R2 = false;
        else if (t3 !== _2 || d3 !== R2) {
          if (g2 === w && S2 === w || (e2.blendEquation(e2.FUNC_ADD), g2 = w, S2 = w), d3) switch (t3) {
            case y:
              e2.blendFuncSeparate(e2.ONE, e2.ONE_MINUS_SRC_ALPHA, e2.ONE, e2.ONE_MINUS_SRC_ALPHA);
              break;
            case g:
              e2.blendFunc(e2.ONE, e2.ONE);
              break;
            case f:
              e2.blendFuncSeparate(e2.ZERO, e2.ONE_MINUS_SRC_COLOR, e2.ZERO, e2.ONE);
              break;
            case x:
              e2.blendFuncSeparate(e2.DST_COLOR, e2.ONE_MINUS_SRC_ALPHA, e2.ZERO, e2.ONE);
              break;
            default:
              os("WebGLState: Invalid blending: ", t3);
          }
          else switch (t3) {
            case y:
              e2.blendFuncSeparate(e2.SRC_ALPHA, e2.ONE_MINUS_SRC_ALPHA, e2.ONE, e2.ONE_MINUS_SRC_ALPHA);
              break;
            case g:
              e2.blendFuncSeparate(e2.SRC_ALPHA, e2.ONE, e2.ONE, e2.ONE);
              break;
            case f:
              os("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
              break;
            case x:
              os("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
              break;
            default:
              os("WebGLState: Invalid blending: ", t3);
          }
          v2 = null, E2 = null, T2 = null, M2 = null, x2.set(0, 0, 0), A2 = 0, _2 = t3, R2 = d3;
        }
      } else true === h2 && (Y2(e2.BLEND), h2 = false);
    }
    function $2(t3) {
      b2 !== t3 && (t3 ? e2.frontFace(e2.CW) : e2.frontFace(e2.CCW), b2 = t3);
    }
    function Q2(t3) {
      t3 !== s ? (X2(e2.CULL_FACE), t3 !== C2 && (t3 === r ? e2.cullFace(e2.BACK) : t3 === n ? e2.cullFace(e2.FRONT) : e2.cullFace(e2.FRONT_AND_BACK))) : Y2(e2.CULL_FACE), C2 = t3;
    }
    function J2(t3, n2, i3) {
      t3 ? (X2(e2.POLYGON_OFFSET_FILL), L2 === n2 && U2 === i3 || (L2 = n2, U2 = i3, r2.getReversed() && (n2 = -n2), e2.polygonOffset(n2, i3))) : Y2(e2.POLYGON_OFFSET_FILL);
    }
    return { buffers: { color: i2, depth: r2, stencil: a2 }, enable: X2, disable: Y2, bindFramebuffer: function(t3, n2) {
      return u2[t3] !== n2 && (e2.bindFramebuffer(t3, n2), u2[t3] = n2, t3 === e2.DRAW_FRAMEBUFFER && (u2[e2.FRAMEBUFFER] = n2), t3 === e2.FRAMEBUFFER && (u2[e2.DRAW_FRAMEBUFFER] = n2), true);
    }, drawBuffers: function(t3, n2) {
      let i3 = p2, r3 = false;
      if (t3) {
        i3 = f2.get(n2), void 0 === i3 && (i3 = [], f2.set(n2, i3));
        const a3 = t3.textures;
        if (i3.length !== a3.length || i3[0] !== e2.COLOR_ATTACHMENT0) {
          for (let t4 = 0, n3 = a3.length; t4 < n3; t4++) i3[t4] = e2.COLOR_ATTACHMENT0 + t4;
          i3.length = a3.length, r3 = true;
        }
      } else i3[0] !== e2.BACK && (i3[0] = e2.BACK, r3 = true);
      r3 && e2.drawBuffers(i3);
    }, useProgram: function(t3) {
      return m2 !== t3 && (e2.useProgram(t3), m2 = t3, true);
    }, setBlending: Z2, setMaterial: function(t3, n2) {
      t3.side === p ? Y2(e2.CULL_FACE) : X2(e2.CULL_FACE);
      let o3 = t3.side === d;
      n2 && (o3 = !o3), $2(o3), t3.blending === y && false === t3.transparent ? Z2(m) : Z2(t3.blending, t3.blendEquation, t3.blendSrc, t3.blendDst, t3.blendEquationAlpha, t3.blendSrcAlpha, t3.blendDstAlpha, t3.blendColor, t3.blendAlpha, t3.premultipliedAlpha), r2.setFunc(t3.depthFunc), r2.setTest(t3.depthTest), r2.setMask(t3.depthWrite), i2.setMask(t3.colorWrite);
      const s3 = t3.stencilWrite;
      a2.setTest(s3), s3 && (a2.setMask(t3.stencilWriteMask), a2.setFunc(t3.stencilFunc, t3.stencilRef, t3.stencilFuncMask), a2.setOp(t3.stencilFail, t3.stencilZFail, t3.stencilZPass)), J2(t3.polygonOffset, t3.polygonOffsetFactor, t3.polygonOffsetUnits), true === t3.alphaToCoverage ? X2(e2.SAMPLE_ALPHA_TO_COVERAGE) : Y2(e2.SAMPLE_ALPHA_TO_COVERAGE);
    }, setFlipSided: $2, setCullFace: Q2, setLineWidth: function(t3) {
      t3 !== P2 && (N2 && e2.lineWidth(t3), P2 = t3);
    }, setPolygonOffset: J2, setScissorTest: function(t3) {
      t3 ? X2(e2.SCISSOR_TEST) : Y2(e2.SCISSOR_TEST);
    }, activeTexture: function(t3) {
      void 0 === t3 && (t3 = e2.TEXTURE0 + I2 - 1), F2 !== t3 && (e2.activeTexture(t3), F2 = t3);
    }, bindTexture: function(t3, n2, i3) {
      void 0 === i3 && (i3 = null === F2 ? e2.TEXTURE0 + I2 - 1 : F2);
      let r3 = B2[i3];
      void 0 === r3 && (r3 = { type: void 0, texture: void 0 }, B2[i3] = r3), r3.type === t3 && r3.texture === n2 || (F2 !== i3 && (e2.activeTexture(i3), F2 = i3), e2.bindTexture(t3, n2 || k2[t3]), r3.type = t3, r3.texture = n2);
    }, unbindTexture: function() {
      const t3 = B2[F2];
      void 0 !== t3 && void 0 !== t3.type && (e2.bindTexture(t3.type, null), t3.type = void 0, t3.texture = void 0);
    }, compressedTexImage2D: function() {
      try {
        e2.compressedTexImage2D(...arguments);
      } catch (e3) {
        os("WebGLState:", e3);
      }
    }, compressedTexImage3D: function() {
      try {
        e2.compressedTexImage3D(...arguments);
      } catch (e3) {
        os("WebGLState:", e3);
      }
    }, texImage2D: function() {
      try {
        e2.texImage2D(...arguments);
      } catch (e3) {
        os("WebGLState:", e3);
      }
    }, texImage3D: function() {
      try {
        e2.texImage3D(...arguments);
      } catch (e3) {
        os("WebGLState:", e3);
      }
    }, pixelStorei: function(t3, n2) {
      d2[t3] !== n2 && (e2.pixelStorei(t3, n2), d2[t3] = n2);
    }, getParameter: function(t3) {
      return void 0 !== d2[t3] ? d2[t3] : e2.getParameter(t3);
    }, updateUBOMapping: function(t3, n2) {
      let i3 = s2.get(n2);
      void 0 === i3 && (i3 = /* @__PURE__ */ new WeakMap(), s2.set(n2, i3));
      let r3 = i3.get(t3);
      void 0 === r3 && (r3 = e2.getUniformBlockIndex(n2, t3.name), i3.set(t3, r3));
    }, uniformBlockBinding: function(t3, n2) {
      const i3 = s2.get(n2).get(t3);
      o2.get(n2) !== i3 && (e2.uniformBlockBinding(n2, i3, t3.__bindingPointIndex), o2.set(n2, i3));
    }, texStorage2D: function() {
      try {
        e2.texStorage2D(...arguments);
      } catch (e3) {
        os("WebGLState:", e3);
      }
    }, texStorage3D: function() {
      try {
        e2.texStorage3D(...arguments);
      } catch (e3) {
        os("WebGLState:", e3);
      }
    }, texSubImage2D: function() {
      try {
        e2.texSubImage2D(...arguments);
      } catch (e3) {
        os("WebGLState:", e3);
      }
    }, texSubImage3D: function() {
      try {
        e2.texSubImage3D(...arguments);
      } catch (e3) {
        os("WebGLState:", e3);
      }
    }, compressedTexSubImage2D: function() {
      try {
        e2.compressedTexSubImage2D(...arguments);
      } catch (e3) {
        os("WebGLState:", e3);
      }
    }, compressedTexSubImage3D: function() {
      try {
        e2.compressedTexSubImage3D(...arguments);
      } catch (e3) {
        os("WebGLState:", e3);
      }
    }, scissor: function(t3) {
      false === V2.equals(t3) && (e2.scissor(t3.x, t3.y, t3.z, t3.w), V2.copy(t3));
    }, viewport: function(t3) {
      false === W2.equals(t3) && (e2.viewport(t3.x, t3.y, t3.z, t3.w), W2.copy(t3));
    }, reset: function() {
      e2.disable(e2.BLEND), e2.disable(e2.CULL_FACE), e2.disable(e2.DEPTH_TEST), e2.disable(e2.POLYGON_OFFSET_FILL), e2.disable(e2.SCISSOR_TEST), e2.disable(e2.STENCIL_TEST), e2.disable(e2.SAMPLE_ALPHA_TO_COVERAGE), e2.blendEquation(e2.FUNC_ADD), e2.blendFunc(e2.ONE, e2.ZERO), e2.blendFuncSeparate(e2.ONE, e2.ZERO, e2.ONE, e2.ZERO), e2.blendColor(0, 0, 0, 0), e2.colorMask(true, true, true, true), e2.clearColor(0, 0, 0, 0), e2.depthMask(true), e2.depthFunc(e2.LESS), r2.setReversed(false), e2.clearDepth(1), e2.stencilMask(4294967295), e2.stencilFunc(e2.ALWAYS, 0, 4294967295), e2.stencilOp(e2.KEEP, e2.KEEP, e2.KEEP), e2.clearStencil(0), e2.cullFace(e2.BACK), e2.frontFace(e2.CCW), e2.polygonOffset(0, 0), e2.activeTexture(e2.TEXTURE0), e2.bindFramebuffer(e2.FRAMEBUFFER, null), e2.bindFramebuffer(e2.DRAW_FRAMEBUFFER, null), e2.bindFramebuffer(e2.READ_FRAMEBUFFER, null), e2.useProgram(null), e2.lineWidth(1), e2.scissor(0, 0, e2.canvas.width, e2.canvas.height), e2.viewport(0, 0, e2.canvas.width, e2.canvas.height), e2.pixelStorei(e2.PACK_ALIGNMENT, 4), e2.pixelStorei(e2.UNPACK_ALIGNMENT, 4), e2.pixelStorei(e2.UNPACK_FLIP_Y_WEBGL, false), e2.pixelStorei(e2.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false), e2.pixelStorei(e2.UNPACK_COLORSPACE_CONVERSION_WEBGL, e2.BROWSER_DEFAULT_WEBGL), e2.pixelStorei(e2.PACK_ROW_LENGTH, 0), e2.pixelStorei(e2.PACK_SKIP_PIXELS, 0), e2.pixelStorei(e2.PACK_SKIP_ROWS, 0), e2.pixelStorei(e2.UNPACK_ROW_LENGTH, 0), e2.pixelStorei(e2.UNPACK_IMAGE_HEIGHT, 0), e2.pixelStorei(e2.UNPACK_SKIP_PIXELS, 0), e2.pixelStorei(e2.UNPACK_SKIP_ROWS, 0), e2.pixelStorei(e2.UNPACK_SKIP_IMAGES, 0), l2 = {}, d2 = {}, F2 = null, B2 = {}, u2 = {}, f2 = /* @__PURE__ */ new WeakMap(), p2 = [], m2 = null, h2 = false, _2 = null, g2 = null, v2 = null, E2 = null, S2 = null, T2 = null, M2 = null, x2 = new Pr(0, 0, 0), A2 = 0, R2 = false, b2 = null, C2 = null, P2 = null, L2 = null, U2 = null, V2.set(0, 0, e2.canvas.width, e2.canvas.height), W2.set(0, 0, e2.canvas.width, e2.canvas.height), i2.reset(), r2.reset(), a2.reset();
    } };
  }
  function va2(e2, n2, i2, r2, a2, o2, s2) {
    const l2 = n2.has("WEBGL_multisampled_render_to_texture") ? n2.get("WEBGL_multisampled_render_to_texture") : null, c2 = "undefined" != typeof navigator && /OculusBrowser/g.test(navigator.userAgent), d2 = new _s(), u2 = /* @__PURE__ */ new WeakMap(), m2 = /* @__PURE__ */ new Set();
    let h2;
    const _2 = /* @__PURE__ */ new WeakMap();
    let g2 = false;
    try {
      g2 = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1).getContext("2d");
    } catch (e3) {
    }
    function E2(e3, t2) {
      return g2 ? new OffscreenCanvas(e3, t2) : Qi("canvas");
    }
    function x2(e3, t2, n3) {
      let i3 = 1;
      const r3 = te2(e3);
      if ((r3.width > n3 || r3.height > n3) && (i3 = n3 / Math.max(r3.width, r3.height)), i3 < 1) {
        if ("undefined" != typeof HTMLImageElement && e3 instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && e3 instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && e3 instanceof ImageBitmap || "undefined" != typeof VideoFrame && e3 instanceof VideoFrame) {
          const n4 = Math.floor(i3 * r3.width), a3 = Math.floor(i3 * r3.height);
          void 0 === h2 && (h2 = E2(n4, a3));
          const o3 = t2 ? E2(n4, a3) : h2;
          o3.width = n4, o3.height = a3;
          return o3.getContext("2d").drawImage(e3, 0, 0, n4, a3), as("WebGLRenderer: Texture has been resized from (" + r3.width + "x" + r3.height + ") to (" + n4 + "x" + a3 + ")."), o3;
        }
        return "data" in e3 && as("WebGLRenderer: Image in DataTexture is too big (" + r3.width + "x" + r3.height + ")."), e3;
      }
      return e3;
    }
    function A2(e3) {
      return e3.generateMipmaps;
    }
    function R2(t2) {
      e2.generateMipmap(t2);
    }
    function b2(t2) {
      return t2.isWebGLCubeRenderTarget ? e2.TEXTURE_CUBE_MAP : t2.isWebGL3DRenderTarget ? e2.TEXTURE_3D : t2.isWebGLArrayRenderTarget || t2.isCompressedArrayTexture ? e2.TEXTURE_2D_ARRAY : e2.TEXTURE_2D;
    }
    function C2(t2, i3, r3, a3, o3, s3 = false) {
      if (null !== t2) {
        if (void 0 !== e2[t2]) return e2[t2];
        as("WebGLRenderer: Attempt to use non-existing WebGL internal format '" + t2 + "'");
      }
      let l3;
      a3 && (l3 = n2.get("EXT_texture_norm16"), l3 || as("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));
      let c3 = i3;
      if (i3 === e2.RED && (r3 === e2.FLOAT && (c3 = e2.R32F), r3 === e2.HALF_FLOAT && (c3 = e2.R16F), r3 === e2.UNSIGNED_BYTE && (c3 = e2.R8), r3 === e2.UNSIGNED_SHORT && l3 && (c3 = l3.R16_EXT), r3 === e2.SHORT && l3 && (c3 = l3.R16_SNORM_EXT)), i3 === e2.RED_INTEGER && (r3 === e2.UNSIGNED_BYTE && (c3 = e2.R8UI), r3 === e2.UNSIGNED_SHORT && (c3 = e2.R16UI), r3 === e2.UNSIGNED_INT && (c3 = e2.R32UI), r3 === e2.BYTE && (c3 = e2.R8I), r3 === e2.SHORT && (c3 = e2.R16I), r3 === e2.INT && (c3 = e2.R32I)), i3 === e2.RG && (r3 === e2.FLOAT && (c3 = e2.RG32F), r3 === e2.HALF_FLOAT && (c3 = e2.RG16F), r3 === e2.UNSIGNED_BYTE && (c3 = e2.RG8), r3 === e2.UNSIGNED_SHORT && l3 && (c3 = l3.RG16_EXT), r3 === e2.SHORT && l3 && (c3 = l3.RG16_SNORM_EXT)), i3 === e2.RG_INTEGER && (r3 === e2.UNSIGNED_BYTE && (c3 = e2.RG8UI), r3 === e2.UNSIGNED_SHORT && (c3 = e2.RG16UI), r3 === e2.UNSIGNED_INT && (c3 = e2.RG32UI), r3 === e2.BYTE && (c3 = e2.RG8I), r3 === e2.SHORT && (c3 = e2.RG16I), r3 === e2.INT && (c3 = e2.RG32I)), i3 === e2.RGB_INTEGER && (r3 === e2.UNSIGNED_BYTE && (c3 = e2.RGB8UI), r3 === e2.UNSIGNED_SHORT && (c3 = e2.RGB16UI), r3 === e2.UNSIGNED_INT && (c3 = e2.RGB32UI), r3 === e2.BYTE && (c3 = e2.RGB8I), r3 === e2.SHORT && (c3 = e2.RGB16I), r3 === e2.INT && (c3 = e2.RGB32I)), i3 === e2.RGBA_INTEGER && (r3 === e2.UNSIGNED_BYTE && (c3 = e2.RGBA8UI), r3 === e2.UNSIGNED_SHORT && (c3 = e2.RGBA16UI), r3 === e2.UNSIGNED_INT && (c3 = e2.RGBA32UI), r3 === e2.BYTE && (c3 = e2.RGBA8I), r3 === e2.SHORT && (c3 = e2.RGBA16I), r3 === e2.INT && (c3 = e2.RGBA32I)), i3 === e2.RGB && (r3 === e2.UNSIGNED_SHORT && l3 && (c3 = l3.RGB16_EXT), r3 === e2.SHORT && l3 && (c3 = l3.RGB16_SNORM_EXT), r3 === e2.UNSIGNED_INT_5_9_9_9_REV && (c3 = e2.RGB9_E5), r3 === e2.UNSIGNED_INT_10F_11F_11F_REV && (c3 = e2.R11F_G11F_B10F)), i3 === e2.RGBA) {
        const t3 = s3 ? si : Rs.getTransfer(o3);
        r3 === e2.FLOAT && (c3 = e2.RGBA32F), r3 === e2.HALF_FLOAT && (c3 = e2.RGBA16F), r3 === e2.UNSIGNED_BYTE && (c3 = t3 === ri ? e2.SRGB8_ALPHA8 : e2.RGBA8), r3 === e2.UNSIGNED_SHORT && l3 && (c3 = l3.RGBA16_EXT), r3 === e2.SHORT && l3 && (c3 = l3.RGBA16_SNORM_EXT), r3 === e2.UNSIGNED_SHORT_4_4_4_4 && (c3 = e2.RGBA4), r3 === e2.UNSIGNED_SHORT_5_5_5_1 && (c3 = e2.RGB5_A1);
      }
      return c3 !== e2.R16F && c3 !== e2.R32F && c3 !== e2.RG16F && c3 !== e2.RG32F && c3 !== e2.RGBA16F && c3 !== e2.RGBA32F || n2.get("EXT_color_buffer_float"), c3;
    }
    function P2(t2, n3) {
      let i3;
      return t2 ? null === n3 || n3 === Ot || n3 === Et ? i3 = e2.DEPTH24_STENCIL8 : n3 === Pt ? i3 = e2.DEPTH32F_STENCIL8 : n3 === Bt && (i3 = e2.DEPTH24_STENCIL8, as("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : null === n3 || n3 === Ot || n3 === Et ? i3 = e2.DEPTH_COMPONENT24 : n3 === Pt ? i3 = e2.DEPTH_COMPONENT32F : n3 === Bt && (i3 = e2.DEPTH_COMPONENT16), i3;
    }
    function L2(e3, t2) {
      return true === A2(e3) || e3.isFramebufferTexture && e3.minFilter !== ft && e3.minFilter !== Mt ? Math.log2(Math.max(t2.width, t2.height)) + 1 : void 0 !== e3.mipmaps && e3.mipmaps.length > 0 ? e3.mipmaps.length : e3.isCompressedTexture && Array.isArray(e3.image) ? t2.mipmaps.length : 1;
    }
    function U2(e3) {
      const t2 = e3.target;
      t2.removeEventListener("dispose", U2), function(e4) {
        const t3 = r2.get(e4);
        if (void 0 === t3.__webglInit) return;
        const n3 = e4.source, i3 = _2.get(n3);
        if (i3) {
          const r3 = i3[t3.__cacheKey];
          r3.usedTimes--, 0 === r3.usedTimes && I2(e4), 0 === Object.keys(i3).length && _2.delete(n3);
        }
        r2.remove(e4);
      }(t2), t2.isVideoTexture && u2.delete(t2), t2.isHTMLTexture && m2.delete(t2);
    }
    function w2(t2) {
      const n3 = t2.target;
      n3.removeEventListener("dispose", w2), function(t3) {
        const n4 = r2.get(t3);
        t3.depthTexture && (t3.depthTexture.dispose(), r2.remove(t3.depthTexture));
        if (t3.isWebGLCubeRenderTarget) for (let t4 = 0; t4 < 6; t4++) {
          if (Array.isArray(n4.__webglFramebuffer[t4])) for (let i4 = 0; i4 < n4.__webglFramebuffer[t4].length; i4++) e2.deleteFramebuffer(n4.__webglFramebuffer[t4][i4]);
          else e2.deleteFramebuffer(n4.__webglFramebuffer[t4]);
          n4.__webglDepthbuffer && e2.deleteRenderbuffer(n4.__webglDepthbuffer[t4]);
        }
        else {
          if (Array.isArray(n4.__webglFramebuffer)) for (let t4 = 0; t4 < n4.__webglFramebuffer.length; t4++) e2.deleteFramebuffer(n4.__webglFramebuffer[t4]);
          else e2.deleteFramebuffer(n4.__webglFramebuffer);
          if (n4.__webglDepthbuffer && e2.deleteRenderbuffer(n4.__webglDepthbuffer), n4.__webglMultisampledFramebuffer && e2.deleteFramebuffer(n4.__webglMultisampledFramebuffer), n4.__webglColorRenderbuffer) for (let t4 = 0; t4 < n4.__webglColorRenderbuffer.length; t4++) n4.__webglColorRenderbuffer[t4] && e2.deleteRenderbuffer(n4.__webglColorRenderbuffer[t4]);
          n4.__webglDepthRenderbuffer && e2.deleteRenderbuffer(n4.__webglDepthRenderbuffer);
        }
        const i3 = t3.textures;
        for (let t4 = 0, n5 = i3.length; t4 < n5; t4++) {
          const n6 = r2.get(i3[t4]);
          n6.__webglTexture && (e2.deleteTexture(n6.__webglTexture), s2.memory.textures--), r2.remove(i3[t4]);
        }
        r2.remove(t3);
      }(n3);
    }
    function I2(t2) {
      const n3 = r2.get(t2);
      e2.deleteTexture(n3.__webglTexture);
      const i3 = t2.source;
      delete _2.get(i3)[n3.__cacheKey], s2.memory.textures--;
    }
    let N2 = 0;
    function F2(t2, n3) {
      const a3 = r2.get(t2);
      if (t2.isVideoTexture && function(e3) {
        const t3 = s2.render.frame;
        u2.get(e3) !== t3 && (u2.set(e3, t3), e3.update());
      }(t2), false === t2.isRenderTargetTexture && true !== t2.isExternalTexture && t2.version > 0 && a3.__version !== t2.version) {
        const e3 = t2.image;
        if (null === e3) as("WebGLRenderer: Texture marked for update but no image data found.");
        else {
          if (false !== e3.complete) return void X2(a3, t2, n3);
          as("WebGLRenderer: Texture marked for update but image is incomplete");
        }
      } else t2.isExternalTexture && (a3.__webglTexture = t2.sourceTexture ? t2.sourceTexture : null);
      i2.bindTexture(e2.TEXTURE_2D, a3.__webglTexture, e2.TEXTURE0 + n3);
    }
    const G2 = { [mt]: e2.REPEAT, [yt]: e2.CLAMP_TO_EDGE, [gt]: e2.MIRRORED_REPEAT }, H2 = { [ft]: e2.NEAREST, [xt]: e2.NEAREST_MIPMAP_NEAREST, [vt]: e2.NEAREST_MIPMAP_LINEAR, [Mt]: e2.LINEAR, [St]: e2.LINEAR_MIPMAP_NEAREST, [At]: e2.LINEAR_MIPMAP_LINEAR }, V2 = { [_i]: e2.NEVER, [ki]: e2.ALWAYS, [Ai]: e2.LESS, [zi]: e2.LEQUAL, [Ti]: e2.EQUAL, [Bi]: e2.GEQUAL, [Ci]: e2.GREATER, [Ii]: e2.NOTEQUAL };
    function W2(t2, i3) {
      if (i3.type !== Pt || false !== n2.has("OES_texture_float_linear") || i3.magFilter !== Mt && i3.magFilter !== St && i3.magFilter !== vt && i3.magFilter !== At && i3.minFilter !== Mt && i3.minFilter !== St && i3.minFilter !== vt && i3.minFilter !== At || as("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), e2.texParameteri(t2, e2.TEXTURE_WRAP_S, G2[i3.wrapS]), e2.texParameteri(t2, e2.TEXTURE_WRAP_T, G2[i3.wrapT]), t2 !== e2.TEXTURE_3D && t2 !== e2.TEXTURE_2D_ARRAY || e2.texParameteri(t2, e2.TEXTURE_WRAP_R, G2[i3.wrapR]), e2.texParameteri(t2, e2.TEXTURE_MAG_FILTER, H2[i3.magFilter]), e2.texParameteri(t2, e2.TEXTURE_MIN_FILTER, H2[i3.minFilter]), i3.compareFunction && (e2.texParameteri(t2, e2.TEXTURE_COMPARE_MODE, e2.COMPARE_REF_TO_TEXTURE), e2.texParameteri(t2, e2.TEXTURE_COMPARE_FUNC, V2[i3.compareFunction])), true === n2.has("EXT_texture_filter_anisotropic")) {
        if (i3.magFilter === ft) return;
        if (i3.minFilter !== vt && i3.minFilter !== At) return;
        if (i3.type === Pt && false === n2.has("OES_texture_float_linear")) return;
        if (i3.anisotropy > 1 || r2.get(i3).__currentAnisotropy) {
          const o3 = n2.get("EXT_texture_filter_anisotropic");
          e2.texParameterf(t2, o3.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(i3.anisotropy, a2.getMaxAnisotropy())), r2.get(i3).__currentAnisotropy = i3.anisotropy;
        }
      }
    }
    function z2(t2, n3) {
      let i3 = false;
      void 0 === t2.__webglInit && (t2.__webglInit = true, n3.addEventListener("dispose", U2));
      const r3 = n3.source;
      let a3 = _2.get(r3);
      void 0 === a3 && (a3 = {}, _2.set(r3, a3));
      const o3 = function(e3) {
        const t3 = [];
        return t3.push(e3.wrapS), t3.push(e3.wrapT), t3.push(e3.wrapR || 0), t3.push(e3.magFilter), t3.push(e3.minFilter), t3.push(e3.anisotropy), t3.push(e3.internalFormat), t3.push(e3.format), t3.push(e3.type), t3.push(e3.generateMipmaps), t3.push(e3.premultiplyAlpha), t3.push(e3.flipY), t3.push(e3.unpackAlignment), t3.push(e3.colorSpace), t3.join();
      }(n3);
      if (o3 !== t2.__cacheKey) {
        void 0 === a3[o3] && (a3[o3] = { texture: e2.createTexture(), usedTimes: 0 }, s2.memory.textures++, i3 = true), a3[o3].usedTimes++;
        const r4 = a3[t2.__cacheKey];
        void 0 !== r4 && (a3[t2.__cacheKey].usedTimes--, 0 === r4.usedTimes && I2(n3)), t2.__cacheKey = o3, t2.__webglTexture = a3[o3].texture;
      }
      return i3;
    }
    function k2(e3, t2, n3) {
      return Math.floor(Math.floor(e3 / n3) / t2);
    }
    function X2(t2, n3, s3) {
      let l3 = e2.TEXTURE_2D;
      (n3.isDataArrayTexture || n3.isCompressedArrayTexture) && (l3 = e2.TEXTURE_2D_ARRAY), n3.isData3DTexture && (l3 = e2.TEXTURE_3D);
      const c3 = z2(t2, n3), d3 = n3.source;
      i2.bindTexture(l3, t2.__webglTexture, e2.TEXTURE0 + s3);
      const u3 = r2.get(d3);
      if (d3.version !== u3.__version || true === c3) {
        i2.activeTexture(e2.TEXTURE0 + s3);
        if (false === ("undefined" != typeof ImageBitmap && n3.image instanceof ImageBitmap)) {
          const t4 = Rs.getPrimaries(Rs.workingColorSpace), r4 = n3.colorSpace === ti ? null : Rs.getPrimaries(n3.colorSpace), a3 = n3.colorSpace === ti || t4 === r4 ? e2.NONE : e2.BROWSER_DEFAULT_WEBGL;
          i2.pixelStorei(e2.UNPACK_FLIP_Y_WEBGL, n3.flipY), i2.pixelStorei(e2.UNPACK_PREMULTIPLY_ALPHA_WEBGL, n3.premultiplyAlpha), i2.pixelStorei(e2.UNPACK_COLORSPACE_CONVERSION_WEBGL, a3);
        }
        i2.pixelStorei(e2.UNPACK_ALIGNMENT, n3.unpackAlignment);
        let t3 = x2(n3.image, false, a2.maxTextureSize);
        t3 = ee2(n3, t3);
        const r3 = o2.convert(n3.format, n3.colorSpace), p2 = o2.convert(n3.type);
        let h3, _3 = C2(n3.internalFormat, r3, p2, n3.normalized, n3.colorSpace, n3.isVideoTexture);
        W2(l3, n3);
        const g3 = n3.mipmaps, E3 = true !== n3.isVideoTexture, S2 = void 0 === u3.__version || true === c3, T2 = d3.dataReady, b3 = L2(n3, t3);
        if (n3.isDepthTexture) _3 = P2(n3.format === qt, n3.type), S2 && (E3 ? i2.texStorage2D(e2.TEXTURE_2D, 1, _3, t3.width, t3.height) : i2.texImage2D(e2.TEXTURE_2D, 0, _3, t3.width, t3.height, 0, r3, p2, null));
        else if (n3.isDataTexture) if (g3.length > 0) {
          E3 && S2 && i2.texStorage2D(e2.TEXTURE_2D, b3, _3, g3[0].width, g3[0].height);
          for (let t4 = 0, n4 = g3.length; t4 < n4; t4++) h3 = g3[t4], E3 ? T2 && i2.texSubImage2D(e2.TEXTURE_2D, t4, 0, 0, h3.width, h3.height, r3, p2, h3.data) : i2.texImage2D(e2.TEXTURE_2D, t4, _3, h3.width, h3.height, 0, r3, p2, h3.data);
          n3.generateMipmaps = false;
        } else E3 ? (S2 && i2.texStorage2D(e2.TEXTURE_2D, b3, _3, t3.width, t3.height), T2 && function(t4, n4, r4, a3) {
          const o3 = t4.updateRanges;
          if (0 === o3.length) i2.texSubImage2D(e2.TEXTURE_2D, 0, 0, 0, n4.width, n4.height, r4, a3, n4.data);
          else {
            o3.sort((e3, t5) => e3.start - t5.start);
            let s4 = 0;
            for (let e3 = 1; e3 < o3.length; e3++) {
              const t5 = o3[s4], i3 = o3[e3], r5 = t5.start + t5.count, a4 = k2(i3.start, n4.width, 4), l5 = k2(t5.start, n4.width, 4);
              i3.start <= r5 + 1 && a4 === l5 && k2(i3.start + i3.count - 1, n4.width, 4) === a4 ? t5.count = Math.max(t5.count, i3.start + i3.count - t5.start) : (++s4, o3[s4] = i3);
            }
            o3.length = s4 + 1;
            const l4 = i2.getParameter(e2.UNPACK_ROW_LENGTH), c4 = i2.getParameter(e2.UNPACK_SKIP_PIXELS), d4 = i2.getParameter(e2.UNPACK_SKIP_ROWS);
            i2.pixelStorei(e2.UNPACK_ROW_LENGTH, n4.width);
            for (let t5 = 0, s5 = o3.length; t5 < s5; t5++) {
              const s6 = o3[t5], l5 = Math.floor(s6.start / 4), c5 = Math.ceil(s6.count / 4), d5 = l5 % n4.width, u4 = Math.floor(l5 / n4.width), f2 = c5, p3 = 1;
              i2.pixelStorei(e2.UNPACK_SKIP_PIXELS, d5), i2.pixelStorei(e2.UNPACK_SKIP_ROWS, u4), i2.texSubImage2D(e2.TEXTURE_2D, 0, d5, u4, f2, p3, r4, a3, n4.data);
            }
            t4.clearUpdateRanges(), i2.pixelStorei(e2.UNPACK_ROW_LENGTH, l4), i2.pixelStorei(e2.UNPACK_SKIP_PIXELS, c4), i2.pixelStorei(e2.UNPACK_SKIP_ROWS, d4);
          }
        }(n3, t3, r3, p2)) : i2.texImage2D(e2.TEXTURE_2D, 0, _3, t3.width, t3.height, 0, r3, p2, t3.data);
        else if (n3.isCompressedTexture) if (n3.isCompressedArrayTexture) {
          E3 && S2 && i2.texStorage3D(e2.TEXTURE_2D_ARRAY, b3, _3, g3[0].width, g3[0].height, t3.depth);
          for (let a3 = 0, o3 = g3.length; a3 < o3; a3++) if (h3 = g3[a3], n3.format !== Ut) if (null !== r3) if (E3) {
            if (T2) if (n3.layerUpdates.size > 0) {
              const t4 = up(h3.width, h3.height, n3.format, n3.type);
              for (const o4 of n3.layerUpdates) {
                const n4 = h3.data.subarray(o4 * t4 / h3.data.BYTES_PER_ELEMENT, (o4 + 1) * t4 / h3.data.BYTES_PER_ELEMENT);
                i2.compressedTexSubImage3D(e2.TEXTURE_2D_ARRAY, a3, 0, 0, o4, h3.width, h3.height, 1, r3, n4);
              }
              n3.clearLayerUpdates();
            } else i2.compressedTexSubImage3D(e2.TEXTURE_2D_ARRAY, a3, 0, 0, 0, h3.width, h3.height, t3.depth, r3, h3.data);
          } else i2.compressedTexImage3D(e2.TEXTURE_2D_ARRAY, a3, _3, h3.width, h3.height, t3.depth, 0, h3.data, 0, 0);
          else as("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
          else E3 ? T2 && i2.texSubImage3D(e2.TEXTURE_2D_ARRAY, a3, 0, 0, 0, h3.width, h3.height, t3.depth, r3, p2, h3.data) : i2.texImage3D(e2.TEXTURE_2D_ARRAY, a3, _3, h3.width, h3.height, t3.depth, 0, r3, p2, h3.data);
        } else {
          E3 && S2 && i2.texStorage2D(e2.TEXTURE_2D, b3, _3, g3[0].width, g3[0].height);
          for (let t4 = 0, a3 = g3.length; t4 < a3; t4++) h3 = g3[t4], n3.format !== Ut ? null !== r3 ? E3 ? T2 && i2.compressedTexSubImage2D(e2.TEXTURE_2D, t4, 0, 0, h3.width, h3.height, r3, h3.data) : i2.compressedTexImage2D(e2.TEXTURE_2D, t4, _3, h3.width, h3.height, 0, h3.data) : as("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : E3 ? T2 && i2.texSubImage2D(e2.TEXTURE_2D, t4, 0, 0, h3.width, h3.height, r3, p2, h3.data) : i2.texImage2D(e2.TEXTURE_2D, t4, _3, h3.width, h3.height, 0, r3, p2, h3.data);
        }
        else if (n3.isDataArrayTexture) if (E3) {
          if (S2 && i2.texStorage3D(e2.TEXTURE_2D_ARRAY, b3, _3, t3.width, t3.height, t3.depth), T2) if (n3.layerUpdates.size > 0) {
            const a3 = up(t3.width, t3.height, n3.format, n3.type);
            for (const o3 of n3.layerUpdates) {
              const n4 = t3.data.subarray(o3 * a3 / t3.data.BYTES_PER_ELEMENT, (o3 + 1) * a3 / t3.data.BYTES_PER_ELEMENT);
              i2.texSubImage3D(e2.TEXTURE_2D_ARRAY, 0, 0, 0, o3, t3.width, t3.height, 1, r3, p2, n4);
            }
            n3.clearLayerUpdates();
          } else i2.texSubImage3D(e2.TEXTURE_2D_ARRAY, 0, 0, 0, 0, t3.width, t3.height, t3.depth, r3, p2, t3.data);
        } else i2.texImage3D(e2.TEXTURE_2D_ARRAY, 0, _3, t3.width, t3.height, t3.depth, 0, r3, p2, t3.data);
        else if (n3.isData3DTexture) E3 ? (S2 && i2.texStorage3D(e2.TEXTURE_3D, b3, _3, t3.width, t3.height, t3.depth), T2 && i2.texSubImage3D(e2.TEXTURE_3D, 0, 0, 0, 0, t3.width, t3.height, t3.depth, r3, p2, t3.data)) : i2.texImage3D(e2.TEXTURE_3D, 0, _3, t3.width, t3.height, t3.depth, 0, r3, p2, t3.data);
        else if (n3.isFramebufferTexture) {
          if (S2) if (E3) i2.texStorage2D(e2.TEXTURE_2D, b3, _3, t3.width, t3.height);
          else {
            let n4 = t3.width, a3 = t3.height;
            for (let t4 = 0; t4 < b3; t4++) i2.texImage2D(e2.TEXTURE_2D, t4, _3, n4, a3, 0, r3, p2, null), n4 >>= 1, a3 >>= 1;
          }
        } else if (n3.isHTMLTexture) {
          if ("texElementImage2D" in e2) {
            const i3 = e2.canvas;
            if (i3.hasAttribute("layoutsubtree") || i3.setAttribute("layoutsubtree", "true"), t3.parentNode !== i3) return i3.appendChild(t3), m2.add(n3), i3.onpaint = (e3) => {
              const t4 = e3.changedElements;
              for (const e4 of m2) t4.includes(e4.image) && (e4.needsUpdate = true);
            }, void i3.requestPaint();
            const r4 = 0, a3 = e2.RGBA, o3 = e2.RGBA, s4 = e2.UNSIGNED_BYTE;
            e2.texElementImage2D(e2.TEXTURE_2D, r4, a3, o3, s4, t3), e2.texParameteri(e2.TEXTURE_2D, e2.TEXTURE_MIN_FILTER, e2.LINEAR), e2.texParameteri(e2.TEXTURE_2D, e2.TEXTURE_WRAP_S, e2.CLAMP_TO_EDGE), e2.texParameteri(e2.TEXTURE_2D, e2.TEXTURE_WRAP_T, e2.CLAMP_TO_EDGE);
          }
        } else if (g3.length > 0) {
          if (E3 && S2) {
            const t4 = te2(g3[0]);
            i2.texStorage2D(e2.TEXTURE_2D, b3, _3, t4.width, t4.height);
          }
          for (let t4 = 0, n4 = g3.length; t4 < n4; t4++) h3 = g3[t4], E3 ? T2 && i2.texSubImage2D(e2.TEXTURE_2D, t4, 0, 0, r3, p2, h3) : i2.texImage2D(e2.TEXTURE_2D, t4, _3, r3, p2, h3);
          n3.generateMipmaps = false;
        } else if (E3) {
          if (S2) {
            const n4 = te2(t3);
            i2.texStorage2D(e2.TEXTURE_2D, b3, _3, n4.width, n4.height);
          }
          T2 && i2.texSubImage2D(e2.TEXTURE_2D, 0, 0, 0, r3, p2, t3);
        } else i2.texImage2D(e2.TEXTURE_2D, 0, _3, r3, p2, t3);
        A2(n3) && R2(l3), u3.__version = d3.version, n3.onUpdate && n3.onUpdate(n3);
      }
      t2.__version = n3.version;
    }
    function K2(t2, n3, a3, s3, c3, d3) {
      const u3 = o2.convert(a3.format, a3.colorSpace), f2 = o2.convert(a3.type), p2 = C2(a3.internalFormat, u3, f2, a3.normalized, a3.colorSpace), m3 = r2.get(n3), h3 = r2.get(a3);
      if (h3.__renderTarget = n3, !m3.__hasExternalTextures) {
        const t3 = Math.max(1, n3.width >> d3), r3 = Math.max(1, n3.height >> d3);
        c3 === e2.TEXTURE_3D || c3 === e2.TEXTURE_2D_ARRAY ? i2.texImage3D(c3, d3, p2, t3, r3, n3.depth, 0, u3, f2, null) : i2.texImage2D(c3, d3, p2, t3, r3, 0, u3, f2, null);
      }
      i2.bindFramebuffer(e2.FRAMEBUFFER, t2), J2(n3) ? l2.framebufferTexture2DMultisampleEXT(e2.FRAMEBUFFER, s3, c3, h3.__webglTexture, 0, Q2(n3)) : (c3 === e2.TEXTURE_2D || c3 >= e2.TEXTURE_CUBE_MAP_POSITIVE_X && c3 <= e2.TEXTURE_CUBE_MAP_NEGATIVE_Z) && e2.framebufferTexture2D(e2.FRAMEBUFFER, s3, c3, h3.__webglTexture, d3), i2.bindFramebuffer(e2.FRAMEBUFFER, null);
    }
    function Y2(t2, n3, i3) {
      if (e2.bindRenderbuffer(e2.RENDERBUFFER, t2), n3.depthBuffer) {
        const r3 = n3.depthTexture, a3 = r3 && r3.isDepthTexture ? r3.type : null, o3 = P2(n3.stencilBuffer, a3), s3 = n3.stencilBuffer ? e2.DEPTH_STENCIL_ATTACHMENT : e2.DEPTH_ATTACHMENT;
        J2(n3) ? l2.renderbufferStorageMultisampleEXT(e2.RENDERBUFFER, Q2(n3), o3, n3.width, n3.height) : i3 ? e2.renderbufferStorageMultisample(e2.RENDERBUFFER, Q2(n3), o3, n3.width, n3.height) : e2.renderbufferStorage(e2.RENDERBUFFER, o3, n3.width, n3.height), e2.framebufferRenderbuffer(e2.FRAMEBUFFER, s3, e2.RENDERBUFFER, t2);
      } else {
        const t3 = n3.textures;
        for (let r3 = 0; r3 < t3.length; r3++) {
          const a3 = t3[r3], s3 = o2.convert(a3.format, a3.colorSpace), c3 = o2.convert(a3.type), d3 = C2(a3.internalFormat, s3, c3, a3.normalized, a3.colorSpace);
          J2(n3) ? l2.renderbufferStorageMultisampleEXT(e2.RENDERBUFFER, Q2(n3), d3, n3.width, n3.height) : i3 ? e2.renderbufferStorageMultisample(e2.RENDERBUFFER, Q2(n3), d3, n3.width, n3.height) : e2.renderbufferStorage(e2.RENDERBUFFER, d3, n3.width, n3.height);
        }
      }
      e2.bindRenderbuffer(e2.RENDERBUFFER, null);
    }
    function q2(t2, n3, a3) {
      const s3 = true === n3.isWebGLCubeRenderTarget;
      if (i2.bindFramebuffer(e2.FRAMEBUFFER, t2), !n3.depthTexture || !n3.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
      const c3 = r2.get(n3.depthTexture);
      if (c3.__renderTarget = n3, c3.__webglTexture && n3.depthTexture.image.width === n3.width && n3.depthTexture.image.height === n3.height || (n3.depthTexture.image.width = n3.width, n3.depthTexture.image.height = n3.height, n3.depthTexture.needsUpdate = true), s3) {
        if (void 0 === c3.__webglInit && (c3.__webglInit = true, n3.depthTexture.addEventListener("dispose", U2)), void 0 === c3.__webglTexture) {
          c3.__webglTexture = e2.createTexture(), i2.bindTexture(e2.TEXTURE_CUBE_MAP, c3.__webglTexture), W2(e2.TEXTURE_CUBE_MAP, n3.depthTexture);
          const t3 = o2.convert(n3.depthTexture.format), r3 = o2.convert(n3.depthTexture.type);
          let a4;
          n3.depthTexture.format === Wt ? a4 = e2.DEPTH_COMPONENT24 : n3.depthTexture.format === qt && (a4 = e2.DEPTH24_STENCIL8);
          for (let i3 = 0; i3 < 6; i3++) e2.texImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + i3, 0, a4, n3.width, n3.height, 0, t3, r3, null);
        }
      } else F2(n3.depthTexture, 0);
      const d3 = c3.__webglTexture, u3 = Q2(n3), f2 = s3 ? e2.TEXTURE_CUBE_MAP_POSITIVE_X + a3 : e2.TEXTURE_2D, p2 = n3.depthTexture.format === qt ? e2.DEPTH_STENCIL_ATTACHMENT : e2.DEPTH_ATTACHMENT;
      if (n3.depthTexture.format === Wt) J2(n3) ? l2.framebufferTexture2DMultisampleEXT(e2.FRAMEBUFFER, p2, f2, d3, 0, u3) : e2.framebufferTexture2D(e2.FRAMEBUFFER, p2, f2, d3, 0);
      else {
        if (n3.depthTexture.format !== qt) throw new Error("Unknown depthTexture format");
        J2(n3) ? l2.framebufferTexture2DMultisampleEXT(e2.FRAMEBUFFER, p2, f2, d3, 0, u3) : e2.framebufferTexture2D(e2.FRAMEBUFFER, p2, f2, d3, 0);
      }
    }
    function j2(t2) {
      const n3 = r2.get(t2), a3 = true === t2.isWebGLCubeRenderTarget;
      if (n3.__boundDepthTexture !== t2.depthTexture) {
        const e3 = t2.depthTexture;
        if (n3.__depthDisposeCallback && n3.__depthDisposeCallback(), e3) {
          const t3 = () => {
            delete n3.__boundDepthTexture, delete n3.__depthDisposeCallback, e3.removeEventListener("dispose", t3);
          };
          e3.addEventListener("dispose", t3), n3.__depthDisposeCallback = t3;
        }
        n3.__boundDepthTexture = e3;
      }
      if (t2.depthTexture && !n3.__autoAllocateDepthBuffer) if (a3) for (let e3 = 0; e3 < 6; e3++) q2(n3.__webglFramebuffer[e3], t2, e3);
      else {
        const e3 = t2.texture.mipmaps;
        e3 && e3.length > 0 ? q2(n3.__webglFramebuffer[0], t2, 0) : q2(n3.__webglFramebuffer, t2, 0);
      }
      else if (a3) {
        n3.__webglDepthbuffer = [];
        for (let r3 = 0; r3 < 6; r3++) if (i2.bindFramebuffer(e2.FRAMEBUFFER, n3.__webglFramebuffer[r3]), void 0 === n3.__webglDepthbuffer[r3]) n3.__webglDepthbuffer[r3] = e2.createRenderbuffer(), Y2(n3.__webglDepthbuffer[r3], t2, false);
        else {
          const i3 = t2.stencilBuffer ? e2.DEPTH_STENCIL_ATTACHMENT : e2.DEPTH_ATTACHMENT, a4 = n3.__webglDepthbuffer[r3];
          e2.bindRenderbuffer(e2.RENDERBUFFER, a4), e2.framebufferRenderbuffer(e2.FRAMEBUFFER, i3, e2.RENDERBUFFER, a4);
        }
      } else {
        const r3 = t2.texture.mipmaps;
        if (r3 && r3.length > 0 ? i2.bindFramebuffer(e2.FRAMEBUFFER, n3.__webglFramebuffer[0]) : i2.bindFramebuffer(e2.FRAMEBUFFER, n3.__webglFramebuffer), void 0 === n3.__webglDepthbuffer) n3.__webglDepthbuffer = e2.createRenderbuffer(), Y2(n3.__webglDepthbuffer, t2, false);
        else {
          const i3 = t2.stencilBuffer ? e2.DEPTH_STENCIL_ATTACHMENT : e2.DEPTH_ATTACHMENT, r4 = n3.__webglDepthbuffer;
          e2.bindRenderbuffer(e2.RENDERBUFFER, r4), e2.framebufferRenderbuffer(e2.FRAMEBUFFER, i3, e2.RENDERBUFFER, r4);
        }
      }
      i2.bindFramebuffer(e2.FRAMEBUFFER, null);
    }
    const Z2 = [], $2 = [];
    function Q2(e3) {
      return Math.min(a2.maxSamples, e3.samples);
    }
    function J2(e3) {
      const t2 = r2.get(e3);
      return e3.samples > 0 && true === n2.has("WEBGL_multisampled_render_to_texture") && false !== t2.__useRenderToTexture;
    }
    function ee2(e3, t2) {
      const n3 = e3.colorSpace, i3 = e3.format, r3 = e3.type;
      return true === e3.isCompressedTexture || true === e3.isVideoTexture || n3 !== ii && n3 !== ti && (Rs.getTransfer(n3) === ri ? i3 === Ut && r3 === zt || as("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : os("WebGLTextures: Unsupported texture color space:", n3)), t2;
    }
    function te2(e3) {
      return "undefined" != typeof HTMLImageElement && e3 instanceof HTMLImageElement ? (d2.width = e3.naturalWidth || e3.width, d2.height = e3.naturalHeight || e3.height) : "undefined" != typeof VideoFrame && e3 instanceof VideoFrame ? (d2.width = e3.displayWidth, d2.height = e3.displayHeight) : (d2.width = e3.width, d2.height = e3.height), d2;
    }
    this.allocateTextureUnit = function() {
      const e3 = N2;
      return e3 >= a2.maxTextures && as("WebGLTextures: Trying to use " + e3 + " texture units while this GPU supports only " + a2.maxTextures), N2 += 1, e3;
    }, this.resetTextureUnits = function() {
      N2 = 0;
    }, this.getTextureUnits = function() {
      return N2;
    }, this.setTextureUnits = function(e3) {
      N2 = e3;
    }, this.setTexture2D = F2, this.setTexture2DArray = function(t2, n3) {
      const a3 = r2.get(t2);
      false === t2.isRenderTargetTexture && t2.version > 0 && a3.__version !== t2.version ? X2(a3, t2, n3) : (t2.isExternalTexture && (a3.__webglTexture = t2.sourceTexture ? t2.sourceTexture : null), i2.bindTexture(e2.TEXTURE_2D_ARRAY, a3.__webglTexture, e2.TEXTURE0 + n3));
    }, this.setTexture3D = function(t2, n3) {
      const a3 = r2.get(t2);
      false === t2.isRenderTargetTexture && t2.version > 0 && a3.__version !== t2.version ? X2(a3, t2, n3) : i2.bindTexture(e2.TEXTURE_3D, a3.__webglTexture, e2.TEXTURE0 + n3);
    }, this.setTextureCube = function(t2, n3) {
      const s3 = r2.get(t2);
      true !== t2.isCubeDepthTexture && t2.version > 0 && s3.__version !== t2.version ? function(t3, n4, s4) {
        if (6 !== n4.image.length) return;
        const l3 = z2(t3, n4), c3 = n4.source;
        i2.bindTexture(e2.TEXTURE_CUBE_MAP, t3.__webglTexture, e2.TEXTURE0 + s4);
        const d3 = r2.get(c3);
        if (c3.version !== d3.__version || true === l3) {
          i2.activeTexture(e2.TEXTURE0 + s4);
          const t4 = Rs.getPrimaries(Rs.workingColorSpace), r3 = n4.colorSpace === ti ? null : Rs.getPrimaries(n4.colorSpace), u3 = n4.colorSpace === ti || t4 === r3 ? e2.NONE : e2.BROWSER_DEFAULT_WEBGL;
          i2.pixelStorei(e2.UNPACK_FLIP_Y_WEBGL, n4.flipY), i2.pixelStorei(e2.UNPACK_PREMULTIPLY_ALPHA_WEBGL, n4.premultiplyAlpha), i2.pixelStorei(e2.UNPACK_ALIGNMENT, n4.unpackAlignment), i2.pixelStorei(e2.UNPACK_COLORSPACE_CONVERSION_WEBGL, u3);
          const p2 = n4.isCompressedTexture || n4.image[0].isCompressedTexture, m3 = n4.image[0] && n4.image[0].isDataTexture, h3 = [];
          for (let e3 = 0; e3 < 6; e3++) h3[e3] = p2 || m3 ? m3 ? n4.image[e3].image : n4.image[e3] : x2(n4.image[e3], true, a2.maxCubemapSize), h3[e3] = ee2(n4, h3[e3]);
          const _3 = h3[0], g3 = o2.convert(n4.format, n4.colorSpace), E3 = o2.convert(n4.type), S2 = C2(n4.internalFormat, g3, E3, n4.normalized, n4.colorSpace), T2 = true !== n4.isVideoTexture, b3 = void 0 === d3.__version || true === l3, P3 = c3.dataReady;
          let U3, D2 = L2(n4, _3);
          if (W2(e2.TEXTURE_CUBE_MAP, n4), p2) {
            T2 && b3 && i2.texStorage2D(e2.TEXTURE_CUBE_MAP, D2, S2, _3.width, _3.height);
            for (let t5 = 0; t5 < 6; t5++) {
              U3 = h3[t5].mipmaps;
              for (let r4 = 0; r4 < U3.length; r4++) {
                const a3 = U3[r4];
                n4.format !== Ut ? null !== g3 ? T2 ? P3 && i2.compressedTexSubImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, r4, 0, 0, a3.width, a3.height, g3, a3.data) : i2.compressedTexImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, r4, S2, a3.width, a3.height, 0, a3.data) : as("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : T2 ? P3 && i2.texSubImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, r4, 0, 0, a3.width, a3.height, g3, E3, a3.data) : i2.texImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, r4, S2, a3.width, a3.height, 0, g3, E3, a3.data);
              }
            }
          } else {
            if (U3 = n4.mipmaps, T2 && b3) {
              U3.length > 0 && D2++;
              const t5 = te2(h3[0]);
              i2.texStorage2D(e2.TEXTURE_CUBE_MAP, D2, S2, t5.width, t5.height);
            }
            for (let t5 = 0; t5 < 6; t5++) if (m3) {
              T2 ? P3 && i2.texSubImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, 0, 0, 0, h3[t5].width, h3[t5].height, g3, E3, h3[t5].data) : i2.texImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, 0, S2, h3[t5].width, h3[t5].height, 0, g3, E3, h3[t5].data);
              for (let n5 = 0; n5 < U3.length; n5++) {
                const r4 = U3[n5].image[t5].image;
                T2 ? P3 && i2.texSubImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, n5 + 1, 0, 0, r4.width, r4.height, g3, E3, r4.data) : i2.texImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, n5 + 1, S2, r4.width, r4.height, 0, g3, E3, r4.data);
              }
            } else {
              T2 ? P3 && i2.texSubImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, 0, 0, 0, g3, E3, h3[t5]) : i2.texImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, 0, S2, g3, E3, h3[t5]);
              for (let n5 = 0; n5 < U3.length; n5++) {
                const r4 = U3[n5];
                T2 ? P3 && i2.texSubImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, n5 + 1, 0, 0, g3, E3, r4.image[t5]) : i2.texImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, n5 + 1, S2, g3, E3, r4.image[t5]);
              }
            }
          }
          A2(n4) && R2(e2.TEXTURE_CUBE_MAP), d3.__version = c3.version, n4.onUpdate && n4.onUpdate(n4);
        }
        t3.__version = n4.version;
      }(s3, t2, n3) : i2.bindTexture(e2.TEXTURE_CUBE_MAP, s3.__webglTexture, e2.TEXTURE0 + n3);
    }, this.rebindTextures = function(t2, n3, i3) {
      const a3 = r2.get(t2);
      void 0 !== n3 && K2(a3.__webglFramebuffer, t2, t2.texture, e2.COLOR_ATTACHMENT0, e2.TEXTURE_2D, 0), void 0 !== i3 && j2(t2);
    }, this.setupRenderTarget = function(t2) {
      const n3 = t2.texture, a3 = r2.get(t2), l3 = r2.get(n3);
      t2.addEventListener("dispose", w2);
      const c3 = t2.textures, d3 = true === t2.isWebGLCubeRenderTarget, u3 = c3.length > 1;
      if (u3 || (void 0 === l3.__webglTexture && (l3.__webglTexture = e2.createTexture()), l3.__version = n3.version, s2.memory.textures++), d3) {
        a3.__webglFramebuffer = [];
        for (let t3 = 0; t3 < 6; t3++) if (n3.mipmaps && n3.mipmaps.length > 0) {
          a3.__webglFramebuffer[t3] = [];
          for (let i3 = 0; i3 < n3.mipmaps.length; i3++) a3.__webglFramebuffer[t3][i3] = e2.createFramebuffer();
        } else a3.__webglFramebuffer[t3] = e2.createFramebuffer();
      } else {
        if (n3.mipmaps && n3.mipmaps.length > 0) {
          a3.__webglFramebuffer = [];
          for (let t3 = 0; t3 < n3.mipmaps.length; t3++) a3.__webglFramebuffer[t3] = e2.createFramebuffer();
        } else a3.__webglFramebuffer = e2.createFramebuffer();
        if (u3) for (let t3 = 0, n4 = c3.length; t3 < n4; t3++) {
          const n5 = r2.get(c3[t3]);
          void 0 === n5.__webglTexture && (n5.__webglTexture = e2.createTexture(), s2.memory.textures++);
        }
        if (t2.samples > 0 && false === J2(t2)) {
          a3.__webglMultisampledFramebuffer = e2.createFramebuffer(), a3.__webglColorRenderbuffer = [], i2.bindFramebuffer(e2.FRAMEBUFFER, a3.__webglMultisampledFramebuffer);
          for (let n4 = 0; n4 < c3.length; n4++) {
            const i3 = c3[n4];
            a3.__webglColorRenderbuffer[n4] = e2.createRenderbuffer(), e2.bindRenderbuffer(e2.RENDERBUFFER, a3.__webglColorRenderbuffer[n4]);
            const r3 = o2.convert(i3.format, i3.colorSpace), s3 = o2.convert(i3.type), l4 = C2(i3.internalFormat, r3, s3, i3.normalized, i3.colorSpace, true === t2.isXRRenderTarget), d4 = Q2(t2);
            e2.renderbufferStorageMultisample(e2.RENDERBUFFER, d4, l4, t2.width, t2.height), e2.framebufferRenderbuffer(e2.FRAMEBUFFER, e2.COLOR_ATTACHMENT0 + n4, e2.RENDERBUFFER, a3.__webglColorRenderbuffer[n4]);
          }
          e2.bindRenderbuffer(e2.RENDERBUFFER, null), t2.depthBuffer && (a3.__webglDepthRenderbuffer = e2.createRenderbuffer(), Y2(a3.__webglDepthRenderbuffer, t2, true)), i2.bindFramebuffer(e2.FRAMEBUFFER, null);
        }
      }
      if (d3) {
        i2.bindTexture(e2.TEXTURE_CUBE_MAP, l3.__webglTexture), W2(e2.TEXTURE_CUBE_MAP, n3);
        for (let i3 = 0; i3 < 6; i3++) if (n3.mipmaps && n3.mipmaps.length > 0) for (let r3 = 0; r3 < n3.mipmaps.length; r3++) K2(a3.__webglFramebuffer[i3][r3], t2, n3, e2.COLOR_ATTACHMENT0, e2.TEXTURE_CUBE_MAP_POSITIVE_X + i3, r3);
        else K2(a3.__webglFramebuffer[i3], t2, n3, e2.COLOR_ATTACHMENT0, e2.TEXTURE_CUBE_MAP_POSITIVE_X + i3, 0);
        A2(n3) && R2(e2.TEXTURE_CUBE_MAP), i2.unbindTexture();
      } else if (u3) {
        for (let n4 = 0, o3 = c3.length; n4 < o3; n4++) {
          const o4 = c3[n4], s3 = r2.get(o4);
          let l4 = e2.TEXTURE_2D;
          (t2.isWebGL3DRenderTarget || t2.isWebGLArrayRenderTarget) && (l4 = t2.isWebGL3DRenderTarget ? e2.TEXTURE_3D : e2.TEXTURE_2D_ARRAY), i2.bindTexture(l4, s3.__webglTexture), W2(l4, o4), K2(a3.__webglFramebuffer, t2, o4, e2.COLOR_ATTACHMENT0 + n4, l4, 0), A2(o4) && R2(l4);
        }
        i2.unbindTexture();
      } else {
        let r3 = e2.TEXTURE_2D;
        if ((t2.isWebGL3DRenderTarget || t2.isWebGLArrayRenderTarget) && (r3 = t2.isWebGL3DRenderTarget ? e2.TEXTURE_3D : e2.TEXTURE_2D_ARRAY), i2.bindTexture(r3, l3.__webglTexture), W2(r3, n3), n3.mipmaps && n3.mipmaps.length > 0) for (let i3 = 0; i3 < n3.mipmaps.length; i3++) K2(a3.__webglFramebuffer[i3], t2, n3, e2.COLOR_ATTACHMENT0, r3, i3);
        else K2(a3.__webglFramebuffer, t2, n3, e2.COLOR_ATTACHMENT0, r3, 0);
        A2(n3) && R2(r3), i2.unbindTexture();
      }
      t2.depthBuffer && j2(t2);
    }, this.updateRenderTargetMipmap = function(e3) {
      const t2 = e3.textures;
      for (let n3 = 0, a3 = t2.length; n3 < a3; n3++) {
        const a4 = t2[n3];
        if (A2(a4)) {
          const t3 = b2(e3), n4 = r2.get(a4).__webglTexture;
          i2.bindTexture(t3, n4), R2(t3), i2.unbindTexture();
        }
      }
    }, this.updateMultisampleRenderTarget = function(t2) {
      if (t2.samples > 0) {
        if (false === J2(t2)) {
          const n3 = t2.textures, a3 = t2.width, o3 = t2.height;
          let s3 = e2.COLOR_BUFFER_BIT;
          const l3 = t2.stencilBuffer ? e2.DEPTH_STENCIL_ATTACHMENT : e2.DEPTH_ATTACHMENT, d3 = r2.get(t2), u3 = n3.length > 1;
          if (u3) for (let t3 = 0; t3 < n3.length; t3++) i2.bindFramebuffer(e2.FRAMEBUFFER, d3.__webglMultisampledFramebuffer), e2.framebufferRenderbuffer(e2.FRAMEBUFFER, e2.COLOR_ATTACHMENT0 + t3, e2.RENDERBUFFER, null), i2.bindFramebuffer(e2.FRAMEBUFFER, d3.__webglFramebuffer), e2.framebufferTexture2D(e2.DRAW_FRAMEBUFFER, e2.COLOR_ATTACHMENT0 + t3, e2.TEXTURE_2D, null, 0);
          i2.bindFramebuffer(e2.READ_FRAMEBUFFER, d3.__webglMultisampledFramebuffer);
          const f2 = t2.texture.mipmaps;
          f2 && f2.length > 0 ? i2.bindFramebuffer(e2.DRAW_FRAMEBUFFER, d3.__webglFramebuffer[0]) : i2.bindFramebuffer(e2.DRAW_FRAMEBUFFER, d3.__webglFramebuffer);
          for (let i3 = 0; i3 < n3.length; i3++) {
            if (t2.resolveDepthBuffer && (t2.depthBuffer && (s3 |= e2.DEPTH_BUFFER_BIT), t2.stencilBuffer && t2.resolveStencilBuffer && (s3 |= e2.STENCIL_BUFFER_BIT)), u3) {
              e2.framebufferRenderbuffer(e2.READ_FRAMEBUFFER, e2.COLOR_ATTACHMENT0, e2.RENDERBUFFER, d3.__webglColorRenderbuffer[i3]);
              const t3 = r2.get(n3[i3]).__webglTexture;
              e2.framebufferTexture2D(e2.DRAW_FRAMEBUFFER, e2.COLOR_ATTACHMENT0, e2.TEXTURE_2D, t3, 0);
            }
            e2.blitFramebuffer(0, 0, a3, o3, 0, 0, a3, o3, s3, e2.NEAREST), true === c2 && (Z2.length = 0, $2.length = 0, Z2.push(e2.COLOR_ATTACHMENT0 + i3), t2.depthBuffer && false === t2.resolveDepthBuffer && (Z2.push(l3), $2.push(l3), e2.invalidateFramebuffer(e2.DRAW_FRAMEBUFFER, $2)), e2.invalidateFramebuffer(e2.READ_FRAMEBUFFER, Z2));
          }
          if (i2.bindFramebuffer(e2.READ_FRAMEBUFFER, null), i2.bindFramebuffer(e2.DRAW_FRAMEBUFFER, null), u3) for (let t3 = 0; t3 < n3.length; t3++) {
            i2.bindFramebuffer(e2.FRAMEBUFFER, d3.__webglMultisampledFramebuffer), e2.framebufferRenderbuffer(e2.FRAMEBUFFER, e2.COLOR_ATTACHMENT0 + t3, e2.RENDERBUFFER, d3.__webglColorRenderbuffer[t3]);
            const a4 = r2.get(n3[t3]).__webglTexture;
            i2.bindFramebuffer(e2.FRAMEBUFFER, d3.__webglFramebuffer), e2.framebufferTexture2D(e2.DRAW_FRAMEBUFFER, e2.COLOR_ATTACHMENT0 + t3, e2.TEXTURE_2D, a4, 0);
          }
          i2.bindFramebuffer(e2.DRAW_FRAMEBUFFER, d3.__webglMultisampledFramebuffer);
        } else if (t2.depthBuffer && false === t2.resolveDepthBuffer && c2) {
          const n3 = t2.stencilBuffer ? e2.DEPTH_STENCIL_ATTACHMENT : e2.DEPTH_ATTACHMENT;
          e2.invalidateFramebuffer(e2.DRAW_FRAMEBUFFER, [n3]);
        }
      }
    }, this.setupDepthRenderbuffer = j2, this.setupFrameBufferTexture = K2, this.useMultisampledRTT = J2, this.isReversedDepthBuffer = function() {
      return i2.buffers.depth.getReversed();
    };
  }
  function Ea2(e2, t2) {
    return { convert: function(n2, i2 = ti) {
      let r2;
      const a2 = Rs.getTransfer(i2);
      if (n2 === zt) return e2.UNSIGNED_BYTE;
      if (n2 === Nt) return e2.UNSIGNED_SHORT_4_4_4_4;
      if (n2 === Vt) return e2.UNSIGNED_SHORT_5_5_5_1;
      if (n2 === Lt) return e2.UNSIGNED_INT_5_9_9_9_REV;
      if (n2 === Ft) return e2.UNSIGNED_INT_10F_11F_11F_REV;
      if (n2 === Ct) return e2.BYTE;
      if (n2 === It) return e2.SHORT;
      if (n2 === Bt) return e2.UNSIGNED_SHORT;
      if (n2 === kt) return e2.INT;
      if (n2 === Ot) return e2.UNSIGNED_INT;
      if (n2 === Pt) return e2.FLOAT;
      if (n2 === Rt) return e2.HALF_FLOAT;
      if (n2 === jt) return e2.ALPHA;
      if (n2 === Dt) return e2.RGB;
      if (n2 === Ut) return e2.RGBA;
      if (n2 === Wt) return e2.DEPTH_COMPONENT;
      if (n2 === qt) return e2.DEPTH_STENCIL;
      if (n2 === Jt) return e2.RED;
      if (n2 === Xt) return e2.RED_INTEGER;
      if (n2 === Yt) return e2.RG;
      if (n2 === Ht) return e2.RG_INTEGER;
      if (n2 === Gt) return e2.RGBA_INTEGER;
      if (n2 === $t || n2 === Qt || n2 === Kt || n2 === te) if (a2 === ri) {
        if (r2 = t2.get("WEBGL_compressed_texture_s3tc_srgb"), null === r2) return null;
        if (n2 === $t) return r2.COMPRESSED_SRGB_S3TC_DXT1_EXT;
        if (n2 === Qt) return r2.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
        if (n2 === Kt) return r2.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
        if (n2 === te) return r2.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
      } else {
        if (r2 = t2.get("WEBGL_compressed_texture_s3tc"), null === r2) return null;
        if (n2 === $t) return r2.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n2 === Qt) return r2.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n2 === Kt) return r2.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n2 === te) return r2.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      }
      if (n2 === ee || n2 === ie || n2 === se || n2 === re) {
        if (r2 = t2.get("WEBGL_compressed_texture_pvrtc"), null === r2) return null;
        if (n2 === ee) return r2.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n2 === ie) return r2.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n2 === se) return r2.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n2 === re) return r2.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      }
      if (n2 === ne || n2 === ae || n2 === oe || n2 === he || n2 === le || n2 === ce || n2 === ue) {
        if (r2 = t2.get("WEBGL_compressed_texture_etc"), null === r2) return null;
        if (n2 === ne || n2 === ae) return a2 === ri ? r2.COMPRESSED_SRGB8_ETC2 : r2.COMPRESSED_RGB8_ETC2;
        if (n2 === oe) return a2 === ri ? r2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r2.COMPRESSED_RGBA8_ETC2_EAC;
        if (n2 === he) return r2.COMPRESSED_R11_EAC;
        if (n2 === le) return r2.COMPRESSED_SIGNED_R11_EAC;
        if (n2 === ce) return r2.COMPRESSED_RG11_EAC;
        if (n2 === ue) return r2.COMPRESSED_SIGNED_RG11_EAC;
      }
      if (n2 === de || n2 === pe || n2 === me || n2 === ye || n2 === ge || n2 === fe || n2 === xe || n2 === be || n2 === ve || n2 === we || n2 === Me || n2 === Se || n2 === _e || n2 === Ae) {
        if (r2 = t2.get("WEBGL_compressed_texture_astc"), null === r2) return null;
        if (n2 === de) return a2 === ri ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r2.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n2 === pe) return a2 === ri ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r2.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n2 === me) return a2 === ri ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r2.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n2 === ye) return a2 === ri ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r2.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n2 === ge) return a2 === ri ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r2.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n2 === fe) return a2 === ri ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r2.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n2 === xe) return a2 === ri ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r2.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n2 === be) return a2 === ri ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r2.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n2 === ve) return a2 === ri ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r2.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n2 === we) return a2 === ri ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r2.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n2 === Me) return a2 === ri ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r2.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n2 === Se) return a2 === ri ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r2.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n2 === _e) return a2 === ri ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r2.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n2 === Ae) return a2 === ri ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r2.COMPRESSED_RGBA_ASTC_12x12_KHR;
      }
      if (n2 === Te || n2 === ze || n2 === Ce) {
        if (r2 = t2.get("EXT_texture_compression_bptc"), null === r2) return null;
        if (n2 === Te) return a2 === ri ? r2.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r2.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n2 === ze) return r2.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n2 === Ce) return r2.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      }
      if (n2 === Ie || n2 === Be || n2 === ke || n2 === Oe) {
        if (r2 = t2.get("EXT_texture_compression_rgtc"), null === r2) return null;
        if (n2 === Ie) return r2.COMPRESSED_RED_RGTC1_EXT;
        if (n2 === Be) return r2.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n2 === ke) return r2.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n2 === Oe) return r2.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      }
      return n2 === Et ? e2.UNSIGNED_INT_24_8 : void 0 !== e2[n2] ? e2[n2] : null;
    } };
  }
  var Sa2 = class {
    constructor() {
      this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
    }
    init(e2, t2) {
      if (null === this.texture) {
        const n2 = new yh(e2.texture);
        e2.depthNear === t2.depthNear && e2.depthFar === t2.depthFar || (this.depthNear = e2.depthNear, this.depthFar = e2.depthFar), this.texture = n2;
      }
    }
    getMesh(e2) {
      if (null !== this.texture && null === this.mesh) {
        const t2 = e2.cameras[0].viewport, n2 = new Gl({ vertexShader: "\nvoid main() {\n\n	gl_Position = vec4( position, 1.0 );\n\n}", fragmentShader: "\nuniform sampler2DArray depthColor;\nuniform float depthWidth;\nuniform float depthHeight;\n\nvoid main() {\n\n	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );\n\n	if ( coord.x >= 1.0 ) {\n\n		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;\n\n	} else {\n\n		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;\n\n	}\n\n}", uniforms: { depthColor: { value: this.texture }, depthWidth: { value: t2.z }, depthHeight: { value: t2.w } } });
        this.mesh = new Ra(new Pl(20, 20), n2);
      }
      return this.mesh;
    }
    reset() {
      this.texture = null, this.mesh = null;
    }
    getDepthTexture() {
      return this.texture;
    }
  };
  var Ta2 = class extends ds {
    constructor(e2, n2) {
      super();
      const r2 = this;
      let a2 = null, o2 = 1, s2 = null, l2 = "local-floor", c2 = 1, d2 = null, u2 = null, f2 = null, p2 = null, m2 = null, h2 = null;
      const _2 = "undefined" != typeof XRWebGLBinding, g2 = new Sa2(), E2 = {}, T2 = n2.getContextAttributes();
      let x2 = null, A2 = null;
      const R2 = [], b2 = [], C2 = new _s();
      let L2 = null;
      const U2 = new iu();
      U2.viewport = new Js();
      const D2 = new iu();
      D2.viewport = new Js();
      const w2 = [U2, D2], N2 = new Ru();
      let y2 = null, O2 = null;
      function F2(e3) {
        const t2 = b2.indexOf(e3.inputSource);
        if (-1 === t2) return;
        const n3 = R2[t2];
        void 0 !== n3 && (n3.update(e3.inputSource, e3.frame, d2 || s2), n3.dispatchEvent({ type: e3.type, data: e3.inputSource }));
      }
      function B2() {
        a2.removeEventListener("select", F2), a2.removeEventListener("selectstart", F2), a2.removeEventListener("selectend", F2), a2.removeEventListener("squeeze", F2), a2.removeEventListener("squeezestart", F2), a2.removeEventListener("squeezeend", F2), a2.removeEventListener("end", B2), a2.removeEventListener("inputsourceschange", G2);
        for (let e3 = 0; e3 < R2.length; e3++) {
          const t2 = b2[e3];
          null !== t2 && (b2[e3] = null, R2[e3].disconnect(t2));
        }
        y2 = null, O2 = null, g2.reset();
        for (const e3 in E2) delete E2[e3];
        e2.setRenderTarget(x2), m2 = null, p2 = null, f2 = null, a2 = null, A2 = null, k2.stop(), r2.isPresenting = false, e2.setPixelRatio(L2), e2.setSize(C2.width, C2.height, false), r2.dispatchEvent({ type: "sessionend" });
      }
      function G2(e3) {
        for (let t2 = 0; t2 < e3.removed.length; t2++) {
          const n3 = e3.removed[t2], i2 = b2.indexOf(n3);
          i2 >= 0 && (b2[i2] = null, R2[i2].disconnect(n3));
        }
        for (let t2 = 0; t2 < e3.added.length; t2++) {
          const n3 = e3.added[t2];
          let i2 = b2.indexOf(n3);
          if (-1 === i2) {
            for (let e4 = 0; e4 < R2.length; e4++) {
              if (e4 >= b2.length) {
                b2.push(n3), i2 = e4;
                break;
              }
              if (null === b2[e4]) {
                b2[e4] = n3, i2 = e4;
                break;
              }
            }
            if (-1 === i2) break;
          }
          const r3 = R2[i2];
          r3 && r3.connect(n3);
        }
      }
      this.cameraAutoUpdate = true, this.enabled = false, this.isPresenting = false, this.getController = function(e3) {
        let t2 = R2[e3];
        return void 0 === t2 && (t2 = new Cr(), R2[e3] = t2), t2.getTargetRaySpace();
      }, this.getControllerGrip = function(e3) {
        let t2 = R2[e3];
        return void 0 === t2 && (t2 = new Cr(), R2[e3] = t2), t2.getGripSpace();
      }, this.getHand = function(e3) {
        let t2 = R2[e3];
        return void 0 === t2 && (t2 = new Cr(), R2[e3] = t2), t2.getHandSpace();
      }, this.setFramebufferScaleFactor = function(e3) {
        o2 = e3, true === r2.isPresenting && as("WebXRManager: Cannot change framebuffer scale while presenting.");
      }, this.setReferenceSpaceType = function(e3) {
        l2 = e3, true === r2.isPresenting && as("WebXRManager: Cannot change reference space type while presenting.");
      }, this.getReferenceSpace = function() {
        return d2 || s2;
      }, this.setReferenceSpace = function(e3) {
        d2 = e3;
      }, this.getBaseLayer = function() {
        return null !== p2 ? p2 : m2;
      }, this.getBinding = function() {
        return null === f2 && _2 && (f2 = new XRWebGLBinding(a2, n2)), f2;
      }, this.getFrame = function() {
        return h2;
      }, this.getSession = function() {
        return a2;
      }, this.setSession = async function(t2) {
        if (a2 = t2, null !== a2) {
          x2 = e2.getRenderTarget(), a2.addEventListener("select", F2), a2.addEventListener("selectstart", F2), a2.addEventListener("selectend", F2), a2.addEventListener("squeeze", F2), a2.addEventListener("squeezestart", F2), a2.addEventListener("squeezeend", F2), a2.addEventListener("end", B2), a2.addEventListener("inputsourceschange", G2), true !== T2.xrCompatible && await n2.makeXRCompatible(), L2 = e2.getPixelRatio(), e2.getSize(C2);
          if (_2 && "createProjectionLayer" in XRWebGLBinding.prototype) {
            let t3 = null, i2 = null, r3 = null;
            T2.depth && (r3 = T2.stencil ? n2.DEPTH24_STENCIL8 : n2.DEPTH_COMPONENT24, t3 = T2.stencil ? qt : Wt, i2 = T2.stencil ? Et : Ot);
            const s3 = { colorFormat: n2.RGBA8, depthFormat: r3, scaleFactor: o2 };
            f2 = this.getBinding(), p2 = f2.createProjectionLayer(s3), a2.updateRenderState({ layers: [p2] }), e2.setPixelRatio(1), e2.setSize(p2.textureWidth, p2.textureHeight, false), A2 = new Ys(p2.textureWidth, p2.textureHeight, { format: Ut, type: zt, depthTexture: new ph(p2.textureWidth, p2.textureHeight, i2, void 0, void 0, void 0, void 0, void 0, void 0, t3), stencilBuffer: T2.stencil, colorSpace: e2.outputColorSpace, samples: T2.antialias ? 4 : 0, resolveDepthBuffer: false === p2.ignoreDepthValues, resolveStencilBuffer: false === p2.ignoreDepthValues });
          } else {
            const t3 = { antialias: T2.antialias, alpha: true, depth: T2.depth, stencil: T2.stencil, framebufferScaleFactor: o2 };
            m2 = new XRWebGLLayer(a2, n2, t3), a2.updateRenderState({ baseLayer: m2 }), e2.setPixelRatio(1), e2.setSize(m2.framebufferWidth, m2.framebufferHeight, false), A2 = new Ys(m2.framebufferWidth, m2.framebufferHeight, { format: Ut, type: zt, colorSpace: e2.outputColorSpace, stencilBuffer: T2.stencil, resolveDepthBuffer: false === m2.ignoreDepthValues, resolveStencilBuffer: false === m2.ignoreDepthValues });
          }
          A2.isXRRenderTarget = true, this.setFoveation(c2), d2 = null, s2 = await a2.requestReferenceSpace(l2), k2.setContext(a2), k2.start(), r2.isPresenting = true, r2.dispatchEvent({ type: "sessionstart" });
        }
      }, this.getEnvironmentBlendMode = function() {
        if (null !== a2) return a2.environmentBlendMode;
      }, this.getDepthTexture = function() {
        return g2.getDepthTexture();
      };
      const H2 = new Ts(), V2 = new Ts();
      function W2(e3, t2) {
        null === t2 ? e3.matrixWorld.copy(e3.matrix) : e3.matrixWorld.multiplyMatrices(t2.matrixWorld, e3.matrix), e3.matrixWorldInverse.copy(e3.matrixWorld).invert();
      }
      this.updateCamera = function(e3) {
        if (null === a2) return;
        let t2 = e3.near, n3 = e3.far;
        null !== g2.texture && (g2.depthNear > 0 && (t2 = g2.depthNear), g2.depthFar > 0 && (n3 = g2.depthFar)), N2.near = D2.near = U2.near = t2, N2.far = D2.far = U2.far = n3, y2 === N2.near && O2 === N2.far || (a2.updateRenderState({ depthNear: N2.near, depthFar: N2.far }), y2 = N2.near, O2 = N2.far), N2.layers.mask = 6 | e3.layers.mask, U2.layers.mask = -5 & N2.layers.mask, D2.layers.mask = -3 & N2.layers.mask;
        const i2 = e3.parent, r3 = N2.cameras;
        W2(N2, i2);
        for (let e4 = 0; e4 < r3.length; e4++) W2(r3[e4], i2);
        2 === r3.length ? function(e4, t3, n4) {
          H2.setFromMatrixPosition(t3.matrixWorld), V2.setFromMatrixPosition(n4.matrixWorld);
          const i3 = H2.distanceTo(V2), r4 = t3.projectionMatrix.elements, a3 = n4.projectionMatrix.elements, o3 = r4[14] / (r4[10] - 1), s3 = r4[14] / (r4[10] + 1), l3 = (r4[9] + 1) / r4[5], c3 = (r4[9] - 1) / r4[5], d3 = (r4[8] - 1) / r4[0], u3 = (a3[8] + 1) / a3[0], f3 = o3 * d3, p3 = o3 * u3, m3 = i3 / (-d3 + u3), h3 = m3 * -d3;
          if (t3.matrixWorld.decompose(e4.position, e4.quaternion, e4.scale), e4.translateX(h3), e4.translateZ(m3), e4.matrixWorld.compose(e4.position, e4.quaternion, e4.scale), e4.matrixWorldInverse.copy(e4.matrixWorld).invert(), -1 === r4[10]) e4.projectionMatrix.copy(t3.projectionMatrix), e4.projectionMatrixInverse.copy(t3.projectionMatrixInverse);
          else {
            const t4 = o3 + m3, n5 = s3 + m3, r5 = f3 - h3, a4 = p3 + (i3 - h3), d4 = l3 * s3 / n5 * t4, u4 = c3 * s3 / n5 * t4;
            e4.projectionMatrix.makePerspective(r5, a4, d4, u4, t4, n5), e4.projectionMatrixInverse.copy(e4.projectionMatrix).invert();
          }
        }(N2, U2, D2) : N2.projectionMatrix.copy(U2.projectionMatrix), function(e4, t3, n4) {
          null === n4 ? e4.matrix.copy(t3.matrixWorld) : (e4.matrix.copy(n4.matrixWorld), e4.matrix.invert(), e4.matrix.multiply(t3.matrixWorld));
          e4.matrix.decompose(e4.position, e4.quaternion, e4.scale), e4.updateMatrixWorld(true), e4.projectionMatrix.copy(t3.projectionMatrix), e4.projectionMatrixInverse.copy(t3.projectionMatrixInverse), e4.isPerspectiveCamera && (e4.fov = 2 * gs * Math.atan(1 / e4.projectionMatrix.elements[5]), e4.zoom = 1);
        }(e3, N2, i2);
      }, this.getCamera = function() {
        return N2;
      }, this.getFoveation = function() {
        if (null !== p2 || null !== m2) return c2;
      }, this.setFoveation = function(e3) {
        c2 = e3, null !== p2 && (p2.fixedFoveation = e3), null !== m2 && void 0 !== m2.fixedFoveation && (m2.fixedFoveation = e3);
      }, this.hasDepthSensing = function() {
        return null !== g2.texture;
      }, this.getDepthSensingMesh = function() {
        return g2.getMesh(N2);
      }, this.getCameraTexture = function(e3) {
        return E2[e3];
      };
      let z2 = null;
      const k2 = new On2();
      k2.setAnimationLoop(function(t2, n3) {
        if (u2 = n3.getViewerPose(d2 || s2), h2 = n3, null !== u2) {
          const t3 = u2.views;
          null !== m2 && (e2.setRenderTargetFramebuffer(A2, m2.framebuffer), e2.setRenderTarget(A2));
          let n4 = false;
          t3.length !== N2.cameras.length && (N2.cameras.length = 0, n4 = true);
          for (let i3 = 0; i3 < t3.length; i3++) {
            const r3 = t3[i3];
            let a3 = null;
            if (null !== m2) a3 = m2.getViewport(r3);
            else {
              const t4 = f2.getViewSubImage(p2, r3);
              a3 = t4.viewport, 0 === i3 && (e2.setRenderTargetTextures(A2, t4.colorTexture, t4.depthStencilTexture), e2.setRenderTarget(A2));
            }
            let o3 = w2[i3];
            void 0 === o3 && (o3 = new iu(), o3.layers.enable(i3), o3.viewport = new Js(), w2[i3] = o3), o3.matrix.fromArray(r3.transform.matrix), o3.matrix.decompose(o3.position, o3.quaternion, o3.scale), o3.projectionMatrix.fromArray(r3.projectionMatrix), o3.projectionMatrixInverse.copy(o3.projectionMatrix).invert(), o3.viewport.set(a3.x, a3.y, a3.width, a3.height), 0 === i3 && (N2.matrix.copy(o3.matrix), N2.matrix.decompose(N2.position, N2.quaternion, N2.scale)), true === n4 && N2.cameras.push(o3);
          }
          const i2 = a2.enabledFeatures;
          if (i2 && i2.includes("depth-sensing") && "gpu-optimized" == a2.depthUsage && _2) {
            f2 = r2.getBinding();
            const e3 = f2.getDepthInformation(t3[0]);
            e3 && e3.isValid && e3.texture && g2.init(e3, a2.renderState);
          }
          if (i2 && i2.includes("camera-access") && _2) {
            e2.state.unbindTexture(), f2 = r2.getBinding();
            for (let e3 = 0; e3 < t3.length; e3++) {
              const n5 = t3[e3].camera;
              if (n5) {
                let e4 = E2[n5];
                e4 || (e4 = new yh(), E2[n5] = e4);
                const t4 = f2.getCameraImage(n5);
                e4.sourceTexture = t4;
              }
            }
          }
        }
        for (let e3 = 0; e3 < R2.length; e3++) {
          const t3 = b2[e3], i2 = R2[e3];
          null !== t3 && void 0 !== i2 && i2.update(t3, n3, d2 || s2);
        }
        z2 && z2(t2, n3), n3.detectedPlanes && r2.dispatchEvent({ type: "planesdetected", data: n3 }), h2 = null;
      }), this.setAnimationLoop = function(e3) {
        z2 = e3;
      }, this.dispose = function() {
      };
    }
  };
  var Ma2 = new Qs();
  var xa2 = new Is();
  function Aa2(e2, t2) {
    function n2(e3, t3) {
      true === e3.matrixAutoUpdate && e3.updateMatrix(), t3.value.copy(e3.matrix);
    }
    function i2(e3, i3) {
      e3.opacity.value = i3.opacity, i3.color && e3.diffuse.value.copy(i3.color), i3.emissive && e3.emissive.value.copy(i3.emissive).multiplyScalar(i3.emissiveIntensity), i3.map && (e3.map.value = i3.map, n2(i3.map, e3.mapTransform)), i3.alphaMap && (e3.alphaMap.value = i3.alphaMap, n2(i3.alphaMap, e3.alphaMapTransform)), i3.bumpMap && (e3.bumpMap.value = i3.bumpMap, n2(i3.bumpMap, e3.bumpMapTransform), e3.bumpScale.value = i3.bumpScale, i3.side === d && (e3.bumpScale.value *= -1)), i3.normalMap && (e3.normalMap.value = i3.normalMap, n2(i3.normalMap, e3.normalMapTransform), e3.normalScale.value.copy(i3.normalScale), i3.side === d && e3.normalScale.value.negate()), i3.displacementMap && (e3.displacementMap.value = i3.displacementMap, n2(i3.displacementMap, e3.displacementMapTransform), e3.displacementScale.value = i3.displacementScale, e3.displacementBias.value = i3.displacementBias), i3.emissiveMap && (e3.emissiveMap.value = i3.emissiveMap, n2(i3.emissiveMap, e3.emissiveMapTransform)), i3.specularMap && (e3.specularMap.value = i3.specularMap, n2(i3.specularMap, e3.specularMapTransform)), i3.alphaTest > 0 && (e3.alphaTest.value = i3.alphaTest);
      const r2 = t2.get(i3), a2 = r2.envMap, o2 = r2.envMapRotation;
      a2 && (e3.envMap.value = a2, e3.envMapRotation.value.setFromMatrix4(Ma2.makeRotationFromEuler(o2)).transpose(), a2.isCubeTexture && false === a2.isRenderTargetTexture && e3.envMapRotation.value.premultiply(xa2), e3.reflectivity.value = i3.reflectivity, e3.ior.value = i3.ior, e3.refractionRatio.value = i3.refractionRatio), i3.lightMap && (e3.lightMap.value = i3.lightMap, e3.lightMapIntensity.value = i3.lightMapIntensity, n2(i3.lightMap, e3.lightMapTransform)), i3.aoMap && (e3.aoMap.value = i3.aoMap, e3.aoMapIntensity.value = i3.aoMapIntensity, n2(i3.aoMap, e3.aoMapTransform));
    }
    return { refreshFogUniforms: function(t3, n3) {
      n3.color.getRGB(t3.fogColor.value, Hl(e2)), n3.isFog ? (t3.fogNear.value = n3.near, t3.fogFar.value = n3.far) : n3.isFogExp2 && (t3.fogDensity.value = n3.density);
    }, refreshMaterialUniforms: function(e3, r2, a2, o2, s2) {
      r2.isNodeMaterial ? r2.uniformsNeedUpdate = false : r2.isMeshBasicMaterial ? i2(e3, r2) : r2.isMeshLambertMaterial ? (i2(e3, r2), r2.envMap && (e3.envMapIntensity.value = r2.envMapIntensity)) : r2.isMeshToonMaterial ? (i2(e3, r2), function(e4, t3) {
        t3.gradientMap && (e4.gradientMap.value = t3.gradientMap);
      }(e3, r2)) : r2.isMeshPhongMaterial ? (i2(e3, r2), function(e4, t3) {
        e4.specular.value.copy(t3.specular), e4.shininess.value = Math.max(t3.shininess, 1e-4);
      }(e3, r2), r2.envMap && (e3.envMapIntensity.value = r2.envMapIntensity)) : r2.isMeshStandardMaterial ? (i2(e3, r2), function(e4, t3) {
        e4.metalness.value = t3.metalness, t3.metalnessMap && (e4.metalnessMap.value = t3.metalnessMap, n2(t3.metalnessMap, e4.metalnessMapTransform));
        e4.roughness.value = t3.roughness, t3.roughnessMap && (e4.roughnessMap.value = t3.roughnessMap, n2(t3.roughnessMap, e4.roughnessMapTransform));
        t3.envMap && (e4.envMapIntensity.value = t3.envMapIntensity);
      }(e3, r2), r2.isMeshPhysicalMaterial && function(e4, t3, i3) {
        e4.ior.value = t3.ior, t3.sheen > 0 && (e4.sheenColor.value.copy(t3.sheenColor).multiplyScalar(t3.sheen), e4.sheenRoughness.value = t3.sheenRoughness, t3.sheenColorMap && (e4.sheenColorMap.value = t3.sheenColorMap, n2(t3.sheenColorMap, e4.sheenColorMapTransform)), t3.sheenRoughnessMap && (e4.sheenRoughnessMap.value = t3.sheenRoughnessMap, n2(t3.sheenRoughnessMap, e4.sheenRoughnessMapTransform)));
        t3.clearcoat > 0 && (e4.clearcoat.value = t3.clearcoat, e4.clearcoatRoughness.value = t3.clearcoatRoughness, t3.clearcoatMap && (e4.clearcoatMap.value = t3.clearcoatMap, n2(t3.clearcoatMap, e4.clearcoatMapTransform)), t3.clearcoatRoughnessMap && (e4.clearcoatRoughnessMap.value = t3.clearcoatRoughnessMap, n2(t3.clearcoatRoughnessMap, e4.clearcoatRoughnessMapTransform)), t3.clearcoatNormalMap && (e4.clearcoatNormalMap.value = t3.clearcoatNormalMap, n2(t3.clearcoatNormalMap, e4.clearcoatNormalMapTransform), e4.clearcoatNormalScale.value.copy(t3.clearcoatNormalScale), t3.side === d && e4.clearcoatNormalScale.value.negate()));
        t3.dispersion > 0 && (e4.dispersion.value = t3.dispersion);
        t3.iridescence > 0 && (e4.iridescence.value = t3.iridescence, e4.iridescenceIOR.value = t3.iridescenceIOR, e4.iridescenceThicknessMinimum.value = t3.iridescenceThicknessRange[0], e4.iridescenceThicknessMaximum.value = t3.iridescenceThicknessRange[1], t3.iridescenceMap && (e4.iridescenceMap.value = t3.iridescenceMap, n2(t3.iridescenceMap, e4.iridescenceMapTransform)), t3.iridescenceThicknessMap && (e4.iridescenceThicknessMap.value = t3.iridescenceThicknessMap, n2(t3.iridescenceThicknessMap, e4.iridescenceThicknessMapTransform)));
        t3.transmission > 0 && (e4.transmission.value = t3.transmission, e4.transmissionSamplerMap.value = i3.texture, e4.transmissionSamplerSize.value.set(i3.width, i3.height), t3.transmissionMap && (e4.transmissionMap.value = t3.transmissionMap, n2(t3.transmissionMap, e4.transmissionMapTransform)), e4.thickness.value = t3.thickness, t3.thicknessMap && (e4.thicknessMap.value = t3.thicknessMap, n2(t3.thicknessMap, e4.thicknessMapTransform)), e4.attenuationDistance.value = t3.attenuationDistance, e4.attenuationColor.value.copy(t3.attenuationColor));
        t3.anisotropy > 0 && (e4.anisotropyVector.value.set(t3.anisotropy * Math.cos(t3.anisotropyRotation), t3.anisotropy * Math.sin(t3.anisotropyRotation)), t3.anisotropyMap && (e4.anisotropyMap.value = t3.anisotropyMap, n2(t3.anisotropyMap, e4.anisotropyMapTransform)));
        e4.specularIntensity.value = t3.specularIntensity, e4.specularColor.value.copy(t3.specularColor), t3.specularColorMap && (e4.specularColorMap.value = t3.specularColorMap, n2(t3.specularColorMap, e4.specularColorMapTransform));
        t3.specularIntensityMap && (e4.specularIntensityMap.value = t3.specularIntensityMap, n2(t3.specularIntensityMap, e4.specularIntensityMapTransform));
      }(e3, r2, s2)) : r2.isMeshMatcapMaterial ? (i2(e3, r2), function(e4, t3) {
        t3.matcap && (e4.matcap.value = t3.matcap);
      }(e3, r2)) : r2.isMeshDepthMaterial ? i2(e3, r2) : r2.isMeshDistanceMaterial ? (i2(e3, r2), function(e4, n3) {
        const i3 = t2.get(n3).light;
        e4.referencePosition.value.setFromMatrixPosition(i3.matrixWorld), e4.nearDistance.value = i3.shadow.camera.near, e4.farDistance.value = i3.shadow.camera.far;
      }(e3, r2)) : r2.isMeshNormalMaterial ? i2(e3, r2) : r2.isLineBasicMaterial ? (function(e4, t3) {
        e4.diffuse.value.copy(t3.color), e4.opacity.value = t3.opacity, t3.map && (e4.map.value = t3.map, n2(t3.map, e4.mapTransform));
      }(e3, r2), r2.isLineDashedMaterial && function(e4, t3) {
        e4.dashSize.value = t3.dashSize, e4.totalSize.value = t3.dashSize + t3.gapSize, e4.scale.value = t3.scale;
      }(e3, r2)) : r2.isPointsMaterial ? function(e4, t3, i3, r3) {
        e4.diffuse.value.copy(t3.color), e4.opacity.value = t3.opacity, e4.size.value = t3.size * i3, e4.scale.value = 0.5 * r3, t3.map && (e4.map.value = t3.map, n2(t3.map, e4.uvTransform));
        t3.alphaMap && (e4.alphaMap.value = t3.alphaMap, n2(t3.alphaMap, e4.alphaMapTransform));
        t3.alphaTest > 0 && (e4.alphaTest.value = t3.alphaTest);
      }(e3, r2, a2, o2) : r2.isSpriteMaterial ? function(e4, t3) {
        e4.diffuse.value.copy(t3.color), e4.opacity.value = t3.opacity, e4.rotation.value = t3.rotation, t3.map && (e4.map.value = t3.map, n2(t3.map, e4.mapTransform));
        t3.alphaMap && (e4.alphaMap.value = t3.alphaMap, n2(t3.alphaMap, e4.alphaMapTransform));
        t3.alphaTest > 0 && (e4.alphaTest.value = t3.alphaTest);
      }(e3, r2) : r2.isShadowMaterial ? (e3.color.value.copy(r2.color), e3.opacity.value = r2.opacity) : r2.isShaderMaterial && (r2.uniformsNeedUpdate = false);
    } };
  }
  function Ra2(e2, t2, n2, i2) {
    let r2 = {}, a2 = {}, o2 = [];
    const s2 = e2.getParameter(e2.MAX_UNIFORM_BUFFER_BINDINGS);
    function l2(e3, t3, n3, i3) {
      const r3 = e3.value, a3 = t3 + "_" + n3;
      if (void 0 === i3[a3]) return "number" == typeof r3 || "boolean" == typeof r3 ? i3[a3] = r3 : ArrayBuffer.isView(r3) ? i3[a3] = r3.slice() : i3[a3] = r3.clone(), true;
      {
        const e4 = i3[a3];
        if ("number" == typeof r3 || "boolean" == typeof r3) {
          if (e4 !== r3) return i3[a3] = r3, true;
        } else {
          if (ArrayBuffer.isView(r3)) return true;
          if (false === e4.equals(r3)) return e4.copy(r3), true;
        }
      }
      return false;
    }
    function c2(e3) {
      const t3 = { boundary: 0, storage: 0 };
      return "number" == typeof e3 || "boolean" == typeof e3 ? (t3.boundary = 4, t3.storage = 4) : e3.isVector2 ? (t3.boundary = 8, t3.storage = 8) : e3.isVector3 || e3.isColor ? (t3.boundary = 16, t3.storage = 12) : e3.isVector4 ? (t3.boundary = 16, t3.storage = 16) : e3.isMatrix3 ? (t3.boundary = 48, t3.storage = 48) : e3.isMatrix4 ? (t3.boundary = 64, t3.storage = 64) : e3.isTexture ? as("WebGLRenderer: Texture samplers can not be part of an uniforms group.") : ArrayBuffer.isView(e3) ? (t3.boundary = 16, t3.storage = e3.byteLength) : as("WebGLRenderer: Unsupported uniform value type.", e3), t3;
    }
    function d2(t3) {
      const n3 = t3.target;
      n3.removeEventListener("dispose", d2);
      const i3 = o2.indexOf(n3.__bindingPointIndex);
      o2.splice(i3, 1), e2.deleteBuffer(r2[n3.id]), delete r2[n3.id], delete a2[n3.id];
    }
    return { bind: function(e3, t3) {
      const n3 = t3.program;
      i2.uniformBlockBinding(e3, n3);
    }, update: function(n3, u2) {
      let f2 = r2[n3.id];
      void 0 === f2 && (!function(e3) {
        const t3 = e3.uniforms;
        let n4 = 0;
        const i3 = 16;
        for (let e4 = 0, r4 = t3.length; e4 < r4; e4++) {
          const r5 = Array.isArray(t3[e4]) ? t3[e4] : [t3[e4]];
          for (let e5 = 0, t4 = r5.length; e5 < t4; e5++) {
            const t5 = r5[e5], a3 = Array.isArray(t5.value) ? t5.value : [t5.value];
            for (let e6 = 0, r6 = a3.length; e6 < r6; e6++) {
              const r7 = c2(a3[e6]), o3 = n4 % i3, s3 = o3 % r7.boundary, l3 = o3 + s3;
              n4 += s3, 0 !== l3 && i3 - l3 < r7.storage && (n4 += i3 - l3), t5.__data = new Float32Array(r7.storage / Float32Array.BYTES_PER_ELEMENT), t5.__offset = n4, n4 += r7.storage;
            }
          }
        }
        const r3 = n4 % i3;
        r3 > 0 && (n4 += i3 - r3);
        e3.__size = n4, e3.__cache = {};
      }(n3), f2 = function(t3) {
        const n4 = function() {
          for (let e3 = 0; e3 < s2; e3++) if (-1 === o2.indexOf(e3)) return o2.push(e3), e3;
          return os("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
        }();
        t3.__bindingPointIndex = n4;
        const i3 = e2.createBuffer(), r3 = t3.__size, a3 = t3.usage;
        return e2.bindBuffer(e2.UNIFORM_BUFFER, i3), e2.bufferData(e2.UNIFORM_BUFFER, r3, a3), e2.bindBuffer(e2.UNIFORM_BUFFER, null), e2.bindBufferBase(e2.UNIFORM_BUFFER, n4, i3), i3;
      }(n3), r2[n3.id] = f2, n3.addEventListener("dispose", d2));
      const p2 = u2.program;
      i2.updateUBOMapping(n3, p2);
      const m2 = t2.render.frame;
      a2[n3.id] !== m2 && (!function(t3) {
        const n4 = r2[t3.id], i3 = t3.uniforms, a3 = t3.__cache;
        e2.bindBuffer(e2.UNIFORM_BUFFER, n4);
        for (let t4 = 0, n5 = i3.length; t4 < n5; t4++) {
          const n6 = Array.isArray(i3[t4]) ? i3[t4] : [i3[t4]];
          for (let i4 = 0, r3 = n6.length; i4 < r3; i4++) {
            const r4 = n6[i4];
            if (true === l2(r4, t4, i4, a3)) {
              const t5 = r4.__offset, n7 = Array.isArray(r4.value) ? r4.value : [r4.value];
              let i5 = 0;
              for (let a4 = 0; a4 < n7.length; a4++) {
                const o3 = n7[a4], s3 = c2(o3);
                "number" == typeof o3 || "boolean" == typeof o3 ? (r4.__data[0] = o3, e2.bufferSubData(e2.UNIFORM_BUFFER, t5 + i5, r4.__data)) : o3.isMatrix3 ? (r4.__data[0] = o3.elements[0], r4.__data[1] = o3.elements[1], r4.__data[2] = o3.elements[2], r4.__data[3] = 0, r4.__data[4] = o3.elements[3], r4.__data[5] = o3.elements[4], r4.__data[6] = o3.elements[5], r4.__data[7] = 0, r4.__data[8] = o3.elements[6], r4.__data[9] = o3.elements[7], r4.__data[10] = o3.elements[8], r4.__data[11] = 0) : ArrayBuffer.isView(o3) ? r4.__data.set(new o3.constructor(o3.buffer, o3.byteOffset, r4.__data.length)) : (o3.toArray(r4.__data, i5), i5 += s3.storage / Float32Array.BYTES_PER_ELEMENT);
              }
              e2.bufferSubData(e2.UNIFORM_BUFFER, t5, r4.__data);
            }
          }
        }
        e2.bindBuffer(e2.UNIFORM_BUFFER, null);
      }(n3), a2[n3.id] = m2);
    }, dispose: function() {
      for (const t3 in r2) e2.deleteBuffer(r2[t3]);
      o2 = [], r2 = {}, a2 = {};
    } };
  }
  xa2.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
  var ba2 = new Uint16Array([12469, 15057, 12620, 14925, 13266, 14620, 13807, 14376, 14323, 13990, 14545, 13625, 14713, 13328, 14840, 12882, 14931, 12528, 14996, 12233, 15039, 11829, 15066, 11525, 15080, 11295, 15085, 10976, 15082, 10705, 15073, 10495, 13880, 14564, 13898, 14542, 13977, 14430, 14158, 14124, 14393, 13732, 14556, 13410, 14702, 12996, 14814, 12596, 14891, 12291, 14937, 11834, 14957, 11489, 14958, 11194, 14943, 10803, 14921, 10506, 14893, 10278, 14858, 9960, 14484, 14039, 14487, 14025, 14499, 13941, 14524, 13740, 14574, 13468, 14654, 13106, 14743, 12678, 14818, 12344, 14867, 11893, 14889, 11509, 14893, 11180, 14881, 10751, 14852, 10428, 14812, 10128, 14765, 9754, 14712, 9466, 14764, 13480, 14764, 13475, 14766, 13440, 14766, 13347, 14769, 13070, 14786, 12713, 14816, 12387, 14844, 11957, 14860, 11549, 14868, 11215, 14855, 10751, 14825, 10403, 14782, 10044, 14729, 9651, 14666, 9352, 14599, 9029, 14967, 12835, 14966, 12831, 14963, 12804, 14954, 12723, 14936, 12564, 14917, 12347, 14900, 11958, 14886, 11569, 14878, 11247, 14859, 10765, 14828, 10401, 14784, 10011, 14727, 9600, 14660, 9289, 14586, 8893, 14508, 8533, 15111, 12234, 15110, 12234, 15104, 12216, 15092, 12156, 15067, 12010, 15028, 11776, 14981, 11500, 14942, 11205, 14902, 10752, 14861, 10393, 14812, 9991, 14752, 9570, 14682, 9252, 14603, 8808, 14519, 8445, 14431, 8145, 15209, 11449, 15208, 11451, 15202, 11451, 15190, 11438, 15163, 11384, 15117, 11274, 15055, 10979, 14994, 10648, 14932, 10343, 14871, 9936, 14803, 9532, 14729, 9218, 14645, 8742, 14556, 8381, 14461, 8020, 14365, 7603, 15273, 10603, 15272, 10607, 15267, 10619, 15256, 10631, 15231, 10614, 15182, 10535, 15118, 10389, 15042, 10167, 14963, 9787, 14883, 9447, 14800, 9115, 14710, 8665, 14615, 8318, 14514, 7911, 14411, 7507, 14279, 7198, 15314, 9675, 15313, 9683, 15309, 9712, 15298, 9759, 15277, 9797, 15229, 9773, 15166, 9668, 15084, 9487, 14995, 9274, 14898, 8910, 14800, 8539, 14697, 8234, 14590, 7790, 14479, 7409, 14367, 7067, 14178, 6621, 15337, 8619, 15337, 8631, 15333, 8677, 15325, 8769, 15305, 8871, 15264, 8940, 15202, 8909, 15119, 8775, 15022, 8565, 14916, 8328, 14804, 8009, 14688, 7614, 14569, 7287, 14448, 6888, 14321, 6483, 14088, 6171, 15350, 7402, 15350, 7419, 15347, 7480, 15340, 7613, 15322, 7804, 15287, 7973, 15229, 8057, 15148, 8012, 15046, 7846, 14933, 7611, 14810, 7357, 14682, 7069, 14552, 6656, 14421, 6316, 14251, 5948, 14007, 5528, 15356, 5942, 15356, 5977, 15353, 6119, 15348, 6294, 15332, 6551, 15302, 6824, 15249, 7044, 15171, 7122, 15070, 7050, 14949, 6861, 14818, 6611, 14679, 6349, 14538, 6067, 14398, 5651, 14189, 5311, 13935, 4958, 15359, 4123, 15359, 4153, 15356, 4296, 15353, 4646, 15338, 5160, 15311, 5508, 15263, 5829, 15188, 6042, 15088, 6094, 14966, 6001, 14826, 5796, 14678, 5543, 14527, 5287, 14377, 4985, 14133, 4586, 13869, 4257, 15360, 1563, 15360, 1642, 15358, 2076, 15354, 2636, 15341, 3350, 15317, 4019, 15273, 4429, 15203, 4732, 15105, 4911, 14981, 4932, 14836, 4818, 14679, 4621, 14517, 4386, 14359, 4156, 14083, 3795, 13808, 3437, 15360, 122, 15360, 137, 15358, 285, 15355, 636, 15344, 1274, 15322, 2177, 15281, 2765, 15215, 3223, 15120, 3451, 14995, 3569, 14846, 3567, 14681, 3466, 14511, 3305, 14344, 3121, 14037, 2800, 13753, 2467, 15360, 0, 15360, 1, 15359, 21, 15355, 89, 15346, 253, 15325, 479, 15287, 796, 15225, 1148, 15133, 1492, 15008, 1749, 14856, 1882, 14685, 1886, 14506, 1783, 14324, 1608, 13996, 1398, 13702, 1183]);
  var Ca2 = null;
  var Pa2 = class {
    constructor(e2 = {}) {
      const { canvas: t2 = Ki(), context: r2 = null, depth: a2 = true, stencil: o2 = false, alpha: s2 = false, antialias: l2 = false, premultipliedAlpha: d2 = true, preserveDrawingBuffer: p2 = false, powerPreference: m2 = "default", failIfMajorPerformanceCaveat: _2 = false, reversedDepthBuffer: g2 = false, outputBufferType: T2 = zt } = e2;
      let M2;
      if (this.isWebGLRenderer = true, null !== r2) {
        if ("undefined" != typeof WebGLRenderingContext && r2 instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
        M2 = r2.getContextAttributes().alpha;
      } else M2 = s2;
      const x2 = T2, A2 = /* @__PURE__ */ new Set([Gt, Ht, Xt]), R2 = /* @__PURE__ */ new Set([zt, Ot, Bt, Et, Nt, Vt]), b2 = new Uint32Array(4), C2 = new Int32Array(4), P2 = new Ts();
      let U2 = null, w2 = null;
      const N2 = [], y2 = [];
      let F2 = null;
      this.domElement = t2, this.debug = { checkShaderErrors: true, onShaderError: null }, this.autoClear = true, this.autoClearColor = true, this.autoClearDepth = true, this.autoClearStencil = true, this.sortObjects = true, this.clippingPlanes = [], this.localClippingEnabled = false, this.toneMapping = Q, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
      const G2 = this;
      let H2 = false, V2 = null;
      this._outputColorSpace = ei;
      let W2 = 0, z2 = 0, k2 = null, X2 = -1, Y2 = null;
      const q2 = new Js(), j2 = new Js();
      let Z2 = null;
      const $2 = new Pr(0);
      let Q2 = 0, J2 = t2.width, ee2 = t2.height, te2 = 1, ne2 = null, ie2 = null;
      const re2 = new Js(0, 0, J2, ee2), ae2 = new Js(0, 0, J2, ee2);
      let oe2 = false;
      const se2 = new mo();
      let le2 = false, ce2 = false;
      const de2 = new Qs(), ue2 = new Ts(), fe2 = new Js(), pe2 = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: true };
      let me2 = false;
      function _e2() {
        return null === k2 ? te2 : 1;
      }
      let ge2, ve2, Ee2, Te2, Me2, xe2, Ae2, Re2, be2, Ce2, Pe2, De2, we2, Ie2, Ne2, ye2, Oe2, Fe2, Be2, Ge2, He2, Ve2, We2, ze2 = r2;
      function ke2(e3, n2) {
        return t2.getContext(e3, n2);
      }
      try {
        const e3 = { alpha: true, depth: a2, stencil: o2, antialias: l2, premultipliedAlpha: d2, preserveDrawingBuffer: p2, powerPreference: m2, failIfMajorPerformanceCaveat: _2 };
        if ("setAttribute" in t2 && t2.setAttribute("data-engine", `three.js r${t}`), t2.addEventListener("webglcontextlost", Ye2, false), t2.addEventListener("webglcontextrestored", qe2, false), t2.addEventListener("webglcontextcreationerror", je2, false), null === ze2) {
          const t3 = "webgl2";
          if (ze2 = ke2(t3, e3), null === ze2) throw ke2(t3) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
        }
      } catch (e3) {
        throw os("WebGLRenderer: " + e3.message), e3;
      }
      function Xe2() {
        ge2 = new fi2(ze2), ge2.init(), He2 = new Ea2(ze2, ge2), ve2 = new Yn(ze2, ge2, e2, He2), Ee2 = new ga2(ze2, ge2), ve2.reversedDepthBuffer && g2 && Ee2.buffers.depth.setReversed(true), Te2 = new hi2(ze2), Me2 = new ea2(), xe2 = new va2(ze2, ge2, Ee2, Me2, ve2, He2, Te2), Ae2 = new ui2(G2), Re2 = new Fn2(ze2), Ve2 = new Xn2(ze2, Re2), be2 = new pi2(ze2, Re2, Te2, Ve2), Ce2 = new gi2(ze2, be2, Re2, Ve2, Te2), Fe2 = new _i2(ze2, ve2, xe2), Ne2 = new qn2(Me2), Pe2 = new Jr2(G2, Ae2, ge2, ve2, Ve2, Ne2), De2 = new Aa2(G2, Me2), we2 = new ra2(), Ie2 = new da2(ge2), Oe2 = new kn2(G2, Ae2, Ee2, Ce2, M2, d2), ye2 = new _a2(G2, Ce2, ve2), We2 = new Ra2(ze2, Te2, ve2, Ee2), Be2 = new Kn2(ze2, ge2, Te2), Ge2 = new mi2(ze2, ge2, Te2), Te2.programs = Pe2.programs, G2.capabilities = ve2, G2.extensions = ge2, G2.properties = Me2, G2.renderLists = we2, G2.shadowMap = ye2, G2.state = Ee2, G2.info = Te2;
      }
      Xe2(), x2 !== zt && (F2 = new Ei2(x2, t2.width, t2.height, a2, o2));
      const Ke2 = new Ta2(G2, ze2);
      function Ye2(e3) {
        e3.preventDefault(), rs("WebGLRenderer: Context Lost."), H2 = true;
      }
      function qe2() {
        rs("WebGLRenderer: Context Restored."), H2 = false;
        const e3 = Te2.autoReset, t3 = ye2.enabled, n2 = ye2.autoUpdate, i2 = ye2.needsUpdate, r3 = ye2.type;
        Xe2(), Te2.autoReset = e3, ye2.enabled = t3, ye2.autoUpdate = n2, ye2.needsUpdate = i2, ye2.type = r3;
      }
      function je2(e3) {
        os("WebGLRenderer: A WebGL context could not be created. Reason: ", e3.statusMessage);
      }
      function Ze2(e3) {
        const t3 = e3.target;
        t3.removeEventListener("dispose", Ze2), function(e4) {
          (function(e5) {
            const t4 = Me2.get(e5).programs;
            void 0 !== t4 && (t4.forEach(function(e6) {
              Pe2.releaseProgram(e6);
            }), e5.isShaderMaterial && Pe2.releaseShaderCache(e5));
          })(e4), Me2.remove(e4);
        }(t3);
      }
      function $e2(e3, t3, n2) {
        true === e3.transparent && e3.side === p && false === e3.forceSinglePass ? (e3.side = d, e3.needsUpdate = true, st2(e3, t3, n2), e3.side = u, e3.needsUpdate = true, st2(e3, t3, n2), e3.side = p) : st2(e3, t3, n2);
      }
      this.xr = Ke2, this.getContext = function() {
        return ze2;
      }, this.getContextAttributes = function() {
        return ze2.getContextAttributes();
      }, this.forceContextLoss = function() {
        const e3 = ge2.get("WEBGL_lose_context");
        e3 && e3.loseContext();
      }, this.forceContextRestore = function() {
        const e3 = ge2.get("WEBGL_lose_context");
        e3 && e3.restoreContext();
      }, this.getPixelRatio = function() {
        return te2;
      }, this.setPixelRatio = function(e3) {
        void 0 !== e3 && (te2 = e3, this.setSize(J2, ee2, false));
      }, this.getSize = function(e3) {
        return e3.set(J2, ee2);
      }, this.setSize = function(e3, n2, i2 = true) {
        Ke2.isPresenting ? as("WebGLRenderer: Can't change size while VR device is presenting.") : (J2 = e3, ee2 = n2, t2.width = Math.floor(e3 * te2), t2.height = Math.floor(n2 * te2), true === i2 && (t2.style.width = e3 + "px", t2.style.height = n2 + "px"), null !== F2 && F2.setSize(t2.width, t2.height), this.setViewport(0, 0, e3, n2));
      }, this.getDrawingBufferSize = function(e3) {
        return e3.set(J2 * te2, ee2 * te2).floor();
      }, this.setDrawingBufferSize = function(e3, n2, i2) {
        J2 = e3, ee2 = n2, te2 = i2, t2.width = Math.floor(e3 * i2), t2.height = Math.floor(n2 * i2), this.setViewport(0, 0, e3, n2);
      }, this.setEffects = function(e3) {
        if (x2 !== zt) {
          if (e3) {
            for (let t3 = 0; t3 < e3.length; t3++) if (true === e3[t3].isOutputPass) {
              as("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");
              break;
            }
          }
          F2.setEffects(e3 || []);
        } else os("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");
      }, this.getCurrentViewport = function(e3) {
        return e3.copy(q2);
      }, this.getViewport = function(e3) {
        return e3.copy(re2);
      }, this.setViewport = function(e3, t3, n2, i2) {
        e3.isVector4 ? re2.set(e3.x, e3.y, e3.z, e3.w) : re2.set(e3, t3, n2, i2), Ee2.viewport(q2.copy(re2).multiplyScalar(te2).round());
      }, this.getScissor = function(e3) {
        return e3.copy(ae2);
      }, this.setScissor = function(e3, t3, n2, i2) {
        e3.isVector4 ? ae2.set(e3.x, e3.y, e3.z, e3.w) : ae2.set(e3, t3, n2, i2), Ee2.scissor(j2.copy(ae2).multiplyScalar(te2).round());
      }, this.getScissorTest = function() {
        return oe2;
      }, this.setScissorTest = function(e3) {
        Ee2.setScissorTest(oe2 = e3);
      }, this.setOpaqueSort = function(e3) {
        ne2 = e3;
      }, this.setTransparentSort = function(e3) {
        ie2 = e3;
      }, this.getClearColor = function(e3) {
        return e3.copy(Oe2.getClearColor());
      }, this.setClearColor = function() {
        Oe2.setClearColor(...arguments);
      }, this.getClearAlpha = function() {
        return Oe2.getClearAlpha();
      }, this.setClearAlpha = function() {
        Oe2.setClearAlpha(...arguments);
      }, this.clear = function(e3 = true, t3 = true, n2 = true) {
        let i2 = 0;
        if (e3) {
          let e4 = false;
          if (null !== k2) {
            const t4 = k2.texture.format;
            e4 = A2.has(t4);
          }
          if (e4) {
            const e5 = k2.texture.type, t4 = R2.has(e5), n3 = Oe2.getClearColor(), i3 = Oe2.getClearAlpha(), r3 = n3.r, a3 = n3.g, o3 = n3.b;
            t4 ? (b2[0] = r3, b2[1] = a3, b2[2] = o3, b2[3] = i3, ze2.clearBufferuiv(ze2.COLOR, 0, b2)) : (C2[0] = r3, C2[1] = a3, C2[2] = o3, C2[3] = i3, ze2.clearBufferiv(ze2.COLOR, 0, C2));
          } else i2 |= ze2.COLOR_BUFFER_BIT;
        }
        t3 && (i2 |= ze2.DEPTH_BUFFER_BIT, this.state.buffers.depth.setMask(true)), n2 && (i2 |= ze2.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), 0 !== i2 && ze2.clear(i2);
      }, this.clearColor = function() {
        this.clear(true, false, false);
      }, this.clearDepth = function() {
        this.clear(false, true, false);
      }, this.clearStencil = function() {
        this.clear(false, false, true);
      }, this.setNodesHandler = function(e3) {
        e3.setRenderer(this), V2 = e3;
      }, this.dispose = function() {
        t2.removeEventListener("webglcontextlost", Ye2, false), t2.removeEventListener("webglcontextrestored", qe2, false), t2.removeEventListener("webglcontextcreationerror", je2, false), Oe2.dispose(), we2.dispose(), Ie2.dispose(), Me2.dispose(), Ae2.dispose(), Ce2.dispose(), Ve2.dispose(), We2.dispose(), Pe2.dispose(), Ke2.dispose(), Ke2.removeEventListener("sessionstart", Je2), Ke2.removeEventListener("sessionend", et2), tt2.stop();
      }, this.renderBufferDirect = function(e3, t3, n2, i2, r3, a3) {
        null === t3 && (t3 = pe2);
        const o3 = r3.isMesh && r3.matrixWorld.determinant() < 0, s3 = function(e4, t4, n3, i3, r4) {
          true !== t4.isScene && (t4 = pe2);
          xe2.resetTextureUnits();
          const a4 = t4.fog, o4 = i3.isMeshStandardMaterial || i3.isMeshLambertMaterial || i3.isMeshPhongMaterial ? t4.environment : null, s4 = null === k2 ? G2.outputColorSpace : true === k2.isXRRenderTarget ? k2.texture.colorSpace : Rs.workingColorSpace, l4 = i3.isMeshStandardMaterial || i3.isMeshLambertMaterial && !i3.envMap || i3.isMeshPhongMaterial && !i3.envMap, c3 = Ae2.get(i3.envMap || o4, l4), d4 = true === i3.vertexColors && !!n3.attributes.color && 4 === n3.attributes.color.itemSize, u3 = !!n3.attributes.tangent && (!!i3.normalMap || i3.anisotropy > 0), p4 = !!n3.morphAttributes.position, m4 = !!n3.morphAttributes.normal, h3 = !!n3.morphAttributes.color;
          let _4 = Q;
          i3.toneMapped && (null !== k2 && true !== k2.isXRRenderTarget || (_4 = G2.toneMapping));
          const g4 = n3.morphAttributes.position || n3.morphAttributes.normal || n3.morphAttributes.color, v2 = void 0 !== g4 ? g4.length : 0, S2 = Me2.get(i3), T3 = w2.state.lights;
          if (true === le2 && (true === ce2 || e4 !== Y2)) {
            const t5 = e4 === Y2 && i3.id === X2;
            Ne2.setState(i3, e4, t5);
          }
          let M3 = false;
          i3.version === S2.__version ? S2.needsLights && S2.lightsStateVersion !== T3.state.version || S2.outputColorSpace !== s4 || r4.isBatchedMesh && false === S2.batching ? M3 = true : r4.isBatchedMesh || true !== S2.batching ? r4.isBatchedMesh && true === S2.batchingColor && null === r4.colorTexture || r4.isBatchedMesh && false === S2.batchingColor && null !== r4.colorTexture || r4.isInstancedMesh && false === S2.instancing ? M3 = true : r4.isInstancedMesh || true !== S2.instancing ? r4.isSkinnedMesh && false === S2.skinning ? M3 = true : r4.isSkinnedMesh || true !== S2.skinning ? r4.isInstancedMesh && true === S2.instancingColor && null === r4.instanceColor || r4.isInstancedMesh && false === S2.instancingColor && null !== r4.instanceColor || r4.isInstancedMesh && true === S2.instancingMorph && null === r4.morphTexture || r4.isInstancedMesh && false === S2.instancingMorph && null !== r4.morphTexture || S2.envMap !== c3 || true === i3.fog && S2.fog !== a4 ? M3 = true : void 0 === S2.numClippingPlanes || S2.numClippingPlanes === Ne2.numPlanes && S2.numIntersection === Ne2.numIntersection ? (S2.vertexAlphas !== d4 || S2.vertexTangents !== u3 || S2.morphTargets !== p4 || S2.morphNormals !== m4 || S2.morphColors !== h3 || S2.toneMapping !== _4 || S2.morphTargetsCount !== v2 || !!S2.lightProbeGrid != w2.state.lightProbeGridArray.length > 0) && (M3 = true) : M3 = true : M3 = true : M3 = true : M3 = true : (M3 = true, S2.__version = i3.version);
          let x3 = S2.currentProgram;
          true === M3 && (x3 = st2(i3, t4, r4), V2 && i3.isNodeMaterial && V2.onUpdateProgram(i3, x3, S2));
          let A3 = false, R3 = false, b3 = false;
          const C3 = x3.getUniforms(), U3 = S2.uniforms;
          Ee2.useProgram(x3.program) && (A3 = true, R3 = true, b3 = true);
          i3.id !== X2 && (X2 = i3.id, R3 = true);
          if (S2.needsLights) {
            const e5 = function(e6, t5) {
              if (0 === e6.length) return null;
              if (1 === e6.length) return null !== e6[0].texture ? e6[0] : null;
              P2.setFromMatrixPosition(t5.matrixWorld);
              for (let t6 = 0, n4 = e6.length; t6 < n4; t6++) {
                const n5 = e6[t6];
                if (null !== n5.texture && n5.boundingBox.containsPoint(P2)) return n5;
              }
              return null;
            }(w2.state.lightProbeGridArray, r4);
            S2.lightProbeGrid !== e5 && (S2.lightProbeGrid = e5, R3 = true);
          }
          if (A3 || Y2 !== e4) {
            Ee2.buffers.depth.getReversed() && true !== e4.reversedDepth && (e4._reversedDepth = true, e4.updateProjectionMatrix()), C3.setValue(ze2, "projectionMatrix", e4.projectionMatrix), C3.setValue(ze2, "viewMatrix", e4.matrixWorldInverse);
            const t5 = C3.map.cameraPosition;
            void 0 !== t5 && t5.setValue(ze2, ue2.setFromMatrixPosition(e4.matrixWorld)), ve2.logarithmicDepthBuffer && C3.setValue(ze2, "logDepthBufFC", 2 / (Math.log(e4.far + 1) / Math.LN2)), (i3.isMeshPhongMaterial || i3.isMeshToonMaterial || i3.isMeshLambertMaterial || i3.isMeshBasicMaterial || i3.isMeshStandardMaterial || i3.isShaderMaterial) && C3.setValue(ze2, "isOrthographic", true === e4.isOrthographicCamera), Y2 !== e4 && (Y2 = e4, R3 = true, b3 = true);
          }
          S2.needsLights && (T3.state.directionalShadowMap.length > 0 && C3.setValue(ze2, "directionalShadowMap", T3.state.directionalShadowMap, xe2), T3.state.spotShadowMap.length > 0 && C3.setValue(ze2, "spotShadowMap", T3.state.spotShadowMap, xe2), T3.state.pointShadowMap.length > 0 && C3.setValue(ze2, "pointShadowMap", T3.state.pointShadowMap, xe2));
          if (r4.isSkinnedMesh) {
            C3.setOptional(ze2, r4, "bindMatrix"), C3.setOptional(ze2, r4, "bindMatrixInverse");
            const e5 = r4.skeleton;
            e5 && (null === e5.boneTexture && e5.computeBoneTexture(), C3.setValue(ze2, "boneTexture", e5.boneTexture, xe2));
          }
          r4.isBatchedMesh && (C3.setOptional(ze2, r4, "batchingTexture"), C3.setValue(ze2, "batchingTexture", r4._matricesTexture, xe2), C3.setOptional(ze2, r4, "batchingIdTexture"), C3.setValue(ze2, "batchingIdTexture", r4._indirectTexture, xe2), C3.setOptional(ze2, r4, "batchingColorTexture"), null !== r4._colorsTexture && C3.setValue(ze2, "batchingColorTexture", r4._colorsTexture, xe2));
          const D2 = n3.morphAttributes;
          void 0 === D2.position && void 0 === D2.normal && void 0 === D2.color || Fe2.update(r4, n3, x3);
          (R3 || S2.receiveShadow !== r4.receiveShadow) && (S2.receiveShadow = r4.receiveShadow, C3.setValue(ze2, "receiveShadow", r4.receiveShadow));
          (i3.isMeshStandardMaterial || i3.isMeshLambertMaterial || i3.isMeshPhongMaterial) && null === i3.envMap && null !== t4.environment && (U3.envMapIntensity.value = t4.environmentIntensity);
          void 0 !== U3.dfgLUT && (U3.dfgLUT.value = (null === Ca2 && (Ca2 = new Ya(ba2, 16, 16, Yt, Rt), Ca2.name = "DFG_LUT", Ca2.minFilter = Mt, Ca2.magFilter = Mt, Ca2.wrapS = yt, Ca2.wrapT = yt, Ca2.generateMipmaps = false, Ca2.needsUpdate = true), Ca2));
          if (R3) {
            if (C3.setValue(ze2, "toneMappingExposure", G2.toneMappingExposure), S2.needsLights && (N3 = b3, (I2 = U3).ambientLightColor.needsUpdate = N3, I2.lightProbe.needsUpdate = N3, I2.directionalLights.needsUpdate = N3, I2.directionalLightShadows.needsUpdate = N3, I2.pointLights.needsUpdate = N3, I2.pointLightShadows.needsUpdate = N3, I2.spotLights.needsUpdate = N3, I2.spotLightShadows.needsUpdate = N3, I2.rectAreaLights.needsUpdate = N3, I2.hemisphereLights.needsUpdate = N3), a4 && true === i3.fog && De2.refreshFogUniforms(U3, a4), De2.refreshMaterialUniforms(U3, i3, te2, ee2, w2.state.transmissionRenderTarget[e4.id]), S2.needsLights && S2.lightProbeGrid) {
              const e5 = S2.lightProbeGrid;
              U3.probesSH.value = e5.texture, U3.probesMin.value.copy(e5.boundingBox.min), U3.probesMax.value.copy(e5.boundingBox.max), U3.probesResolution.value.copy(e5.resolution);
            }
            Ar2.upload(ze2, lt2(S2), U3, xe2);
          }
          var I2, N3;
          i3.isShaderMaterial && true === i3.uniformsNeedUpdate && (Ar2.upload(ze2, lt2(S2), U3, xe2), i3.uniformsNeedUpdate = false);
          i3.isSpriteMaterial && C3.setValue(ze2, "center", r4.center);
          if (C3.setValue(ze2, "modelViewMatrix", r4.modelViewMatrix), C3.setValue(ze2, "normalMatrix", r4.normalMatrix), C3.setValue(ze2, "modelMatrix", r4.matrixWorld), void 0 !== i3.uniformsGroups) {
            const e5 = i3.uniformsGroups;
            for (let t5 = 0, n4 = e5.length; t5 < n4; t5++) {
              const n5 = e5[t5];
              We2.update(n5, x3), We2.bind(n5, x3);
            }
          }
          return x3;
        }(e3, t3, n2, i2, r3);
        Ee2.setMaterial(i2, o3);
        let l3 = n2.index, c2 = 1;
        if (true === i2.wireframe) {
          if (l3 = be2.getWireframeAttribute(n2), void 0 === l3) return;
          c2 = 2;
        }
        const d3 = n2.drawRange, u2 = n2.attributes.position;
        let p3 = d3.start * c2, m3 = (d3.start + d3.count) * c2;
        null !== a3 && (p3 = Math.max(p3, a3.start * c2), m3 = Math.min(m3, (a3.start + a3.count) * c2)), null !== l3 ? (p3 = Math.max(p3, 0), m3 = Math.min(m3, l3.count)) : null != u2 && (p3 = Math.max(p3, 0), m3 = Math.min(m3, u2.count));
        const h2 = m3 - p3;
        if (h2 < 0 || h2 === 1 / 0) return;
        let _3;
        Ve2.setup(r3, i2, s3, n2, l3);
        let g3 = Be2;
        if (null !== l3 && (_3 = Re2.get(l3), g3 = Ge2, g3.setIndex(_3)), r3.isMesh) true === i2.wireframe ? (Ee2.setLineWidth(i2.wireframeLinewidth * _e2()), g3.setMode(ze2.LINES)) : g3.setMode(ze2.TRIANGLES);
        else if (r3.isLine) {
          let e4 = i2.linewidth;
          void 0 === e4 && (e4 = 1), Ee2.setLineWidth(e4 * _e2()), r3.isLineSegments ? g3.setMode(ze2.LINES) : r3.isLineLoop ? g3.setMode(ze2.LINE_LOOP) : g3.setMode(ze2.LINE_STRIP);
        } else r3.isPoints ? g3.setMode(ze2.POINTS) : r3.isSprite && g3.setMode(ze2.TRIANGLES);
        if (r3.isBatchedMesh) if (ge2.get("WEBGL_multi_draw")) g3.renderMultiDraw(r3._multiDrawStarts, r3._multiDrawCounts, r3._multiDrawCount);
        else {
          const e4 = r3._multiDrawStarts, t4 = r3._multiDrawCounts, n3 = r3._multiDrawCount, a4 = l3 ? Re2.get(l3).bytesPerElement : 1, o4 = Me2.get(i2).currentProgram.getUniforms();
          for (let i3 = 0; i3 < n3; i3++) o4.setValue(ze2, "_gl_DrawID", i3), g3.render(e4[i3] / a4, t4[i3]);
        }
        else if (r3.isInstancedMesh) g3.renderInstances(p3, h2, r3.count);
        else if (n2.isInstancedBufferGeometry) {
          const e4 = void 0 !== n2._maxInstanceCount ? n2._maxInstanceCount : 1 / 0, t4 = Math.min(n2.instanceCount, e4);
          g3.renderInstances(p3, h2, t4);
        } else g3.render(p3, h2);
      }, this.compile = function(e3, t3, n2 = null) {
        null === n2 && (n2 = e3), w2 = Ie2.get(n2), w2.init(t3), y2.push(w2), n2.traverseVisible(function(e4) {
          e4.isLight && e4.layers.test(t3.layers) && (w2.pushLight(e4), e4.castShadow && w2.pushShadow(e4));
        }), e3 !== n2 && e3.traverseVisible(function(e4) {
          e4.isLight && e4.layers.test(t3.layers) && (w2.pushLight(e4), e4.castShadow && w2.pushShadow(e4));
        }), w2.setupLights();
        const i2 = /* @__PURE__ */ new Set();
        return e3.traverse(function(e4) {
          if (!(e4.isMesh || e4.isPoints || e4.isLine || e4.isSprite)) return;
          const t4 = e4.material;
          if (t4) if (Array.isArray(t4)) for (let r3 = 0; r3 < t4.length; r3++) {
            const a3 = t4[r3];
            $e2(a3, n2, e4), i2.add(a3);
          }
          else $e2(t4, n2, e4), i2.add(t4);
        }), w2 = y2.pop(), i2;
      }, this.compileAsync = function(e3, t3, n2 = null) {
        const i2 = this.compile(e3, t3, n2);
        return new Promise((t4) => {
          function n3() {
            i2.forEach(function(e4) {
              Me2.get(e4).currentProgram.isReady() && i2.delete(e4);
            }), 0 !== i2.size ? setTimeout(n3, 10) : t4(e3);
          }
          null !== ge2.get("KHR_parallel_shader_compile") ? n3() : setTimeout(n3, 10);
        });
      };
      let Qe2 = null;
      function Je2() {
        tt2.stop();
      }
      function et2() {
        tt2.start();
      }
      const tt2 = new On2();
      function nt2(e3, t3, n2, i2) {
        if (false === e3.visible) return;
        if (e3.layers.test(t3.layers)) {
          if (e3.isGroup) n2 = e3.renderOrder;
          else if (e3.isLOD) true === e3.autoUpdate && e3.update(t3);
          else if (e3.isLightProbeGrid) w2.pushLightProbeGrid(e3);
          else if (e3.isLight) w2.pushLight(e3), e3.castShadow && w2.pushShadow(e3);
          else if (e3.isSprite) {
            if (!e3.frustumCulled || se2.intersectsSprite(e3)) {
              i2 && fe2.setFromMatrixPosition(e3.matrixWorld).applyMatrix4(de2);
              const t4 = Ce2.update(e3), r4 = e3.material;
              r4.visible && U2.push(e3, t4, r4, n2, fe2.z, null);
            }
          } else if ((e3.isMesh || e3.isLine || e3.isPoints) && (!e3.frustumCulled || se2.intersectsObject(e3))) {
            const t4 = Ce2.update(e3), r4 = e3.material;
            if (i2 && (void 0 !== e3.boundingSphere ? (null === e3.boundingSphere && e3.computeBoundingSphere(), fe2.copy(e3.boundingSphere.center)) : (null === t4.boundingSphere && t4.computeBoundingSphere(), fe2.copy(t4.boundingSphere.center)), fe2.applyMatrix4(e3.matrixWorld).applyMatrix4(de2)), Array.isArray(r4)) {
              const i3 = t4.groups;
              for (let a3 = 0, o3 = i3.length; a3 < o3; a3++) {
                const o4 = i3[a3], s3 = r4[o4.materialIndex];
                s3 && s3.visible && U2.push(e3, t4, s3, n2, fe2.z, o4);
              }
            } else r4.visible && U2.push(e3, t4, r4, n2, fe2.z, null);
          }
        }
        const r3 = e3.children;
        for (let e4 = 0, a3 = r3.length; e4 < a3; e4++) nt2(r3[e4], t3, n2, i2);
      }
      function it2(e3, t3, n2, i2) {
        const { opaque: r3, transmissive: a3, transparent: o3 } = e3;
        w2.setupLightsView(n2), true === le2 && Ne2.setGlobalState(G2.clippingPlanes, n2), i2 && Ee2.viewport(q2.copy(i2)), r3.length > 0 && at2(r3, t3, n2), a3.length > 0 && at2(a3, t3, n2), o3.length > 0 && at2(o3, t3, n2), Ee2.buffers.depth.setTest(true), Ee2.buffers.depth.setMask(true), Ee2.buffers.color.setMask(true), Ee2.setPolygonOffset(false);
      }
      function rt2(e3, t3, n2, i2) {
        if (null !== (true === n2.isScene ? n2.overrideMaterial : null)) return;
        if (void 0 === w2.state.transmissionRenderTarget[i2.id]) {
          const e4 = ge2.has("EXT_color_buffer_half_float") || ge2.has("EXT_color_buffer_float");
          w2.state.transmissionRenderTarget[i2.id] = new Ys(1, 1, { generateMipmaps: true, type: e4 ? Rt : zt, minFilter: At, samples: Math.max(4, ve2.samples), stencilBuffer: o2, resolveDepthBuffer: false, resolveStencilBuffer: false, colorSpace: Rs.workingColorSpace });
        }
        const r3 = w2.state.transmissionRenderTarget[i2.id], a3 = i2.viewport || q2;
        r3.setSize(a3.z * G2.transmissionResolutionScale, a3.w * G2.transmissionResolutionScale);
        const s3 = G2.getRenderTarget(), l3 = G2.getActiveCubeFace(), d3 = G2.getActiveMipmapLevel();
        G2.setRenderTarget(r3), G2.getClearColor($2), Q2 = G2.getClearAlpha(), Q2 < 1 && G2.setClearColor(16777215, 0.5), G2.clear(), me2 && Oe2.render(n2);
        const u2 = G2.toneMapping;
        G2.toneMapping = Q;
        const p3 = i2.viewport;
        if (void 0 !== i2.viewport && (i2.viewport = void 0), w2.setupLightsView(i2), true === le2 && Ne2.setGlobalState(G2.clippingPlanes, i2), at2(e3, n2, i2), xe2.updateMultisampleRenderTarget(r3), xe2.updateRenderTargetMipmap(r3), false === ge2.has("WEBGL_multisampled_render_to_texture")) {
          let e4 = false;
          for (let r4 = 0, a4 = t3.length; r4 < a4; r4++) {
            const a5 = t3[r4], { object: o3, geometry: s4, material: l4, group: d4 } = a5;
            if (l4.side === p && o3.layers.test(i2.layers)) {
              const t4 = l4.side;
              l4.side = d, l4.needsUpdate = true, ot2(o3, n2, i2, s4, l4, d4), l4.side = t4, l4.needsUpdate = true, e4 = true;
            }
          }
          true === e4 && (xe2.updateMultisampleRenderTarget(r3), xe2.updateRenderTargetMipmap(r3));
        }
        G2.setRenderTarget(s3, l3, d3), G2.setClearColor($2, Q2), void 0 !== p3 && (i2.viewport = p3), G2.toneMapping = u2;
      }
      function at2(e3, t3, n2) {
        const i2 = true === t3.isScene ? t3.overrideMaterial : null;
        for (let r3 = 0, a3 = e3.length; r3 < a3; r3++) {
          const a4 = e3[r3], { object: o3, geometry: s3, group: l3 } = a4;
          let c2 = a4.material;
          true === c2.allowOverride && null !== i2 && (c2 = i2), o3.layers.test(n2.layers) && ot2(o3, t3, n2, s3, c2, l3);
        }
      }
      function ot2(e3, t3, n2, i2, r3, a3) {
        e3.onBeforeRender(G2, t3, n2, i2, r3, a3), e3.modelViewMatrix.multiplyMatrices(n2.matrixWorldInverse, e3.matrixWorld), e3.normalMatrix.getNormalMatrix(e3.modelViewMatrix), r3.onBeforeRender(G2, t3, n2, i2, e3, a3), true === r3.transparent && r3.side === p && false === r3.forceSinglePass ? (r3.side = d, r3.needsUpdate = true, G2.renderBufferDirect(n2, t3, i2, r3, e3, a3), r3.side = u, r3.needsUpdate = true, G2.renderBufferDirect(n2, t3, i2, r3, e3, a3), r3.side = p) : G2.renderBufferDirect(n2, t3, i2, r3, e3, a3), e3.onAfterRender(G2, t3, n2, i2, r3, a3);
      }
      function st2(e3, t3, n2) {
        true !== t3.isScene && (t3 = pe2);
        const i2 = Me2.get(e3), r3 = w2.state.lights, a3 = w2.state.shadowsArray, o3 = r3.state.version, s3 = Pe2.getParameters(e3, r3.state, a3, t3, n2, w2.state.lightProbeGridArray), l3 = Pe2.getProgramCacheKey(s3);
        let c2 = i2.programs;
        i2.environment = e3.isMeshStandardMaterial || e3.isMeshLambertMaterial || e3.isMeshPhongMaterial ? t3.environment : null, i2.fog = t3.fog;
        const d3 = e3.isMeshStandardMaterial || e3.isMeshLambertMaterial && !e3.envMap || e3.isMeshPhongMaterial && !e3.envMap;
        i2.envMap = Ae2.get(e3.envMap || i2.environment, d3), i2.envMapRotation = null !== i2.environment && null === e3.envMap ? t3.environmentRotation : e3.envMapRotation, void 0 === c2 && (e3.addEventListener("dispose", Ze2), c2 = /* @__PURE__ */ new Map(), i2.programs = c2);
        let u2 = c2.get(l3);
        if (void 0 !== u2) {
          if (i2.currentProgram === u2 && i2.lightsStateVersion === o3) return ct2(e3, s3), u2;
        } else s3.uniforms = Pe2.getUniforms(e3), null !== V2 && e3.isNodeMaterial && V2.build(e3, n2, s3), e3.onBeforeCompile(s3, G2), u2 = Pe2.acquireProgram(s3, l3), c2.set(l3, u2), i2.uniforms = s3.uniforms;
        const f2 = i2.uniforms;
        return (e3.isShaderMaterial || e3.isRawShaderMaterial) && true !== e3.clipping || (f2.clippingPlanes = Ne2.uniform), ct2(e3, s3), i2.needsLights = function(e4) {
          return e4.isMeshLambertMaterial || e4.isMeshToonMaterial || e4.isMeshPhongMaterial || e4.isMeshStandardMaterial || e4.isShadowMaterial || e4.isShaderMaterial && true === e4.lights;
        }(e3), i2.lightsStateVersion = o3, i2.needsLights && (f2.ambientLightColor.value = r3.state.ambient, f2.lightProbe.value = r3.state.probe, f2.directionalLights.value = r3.state.directional, f2.directionalLightShadows.value = r3.state.directionalShadow, f2.spotLights.value = r3.state.spot, f2.spotLightShadows.value = r3.state.spotShadow, f2.rectAreaLights.value = r3.state.rectArea, f2.ltc_1.value = r3.state.rectAreaLTC1, f2.ltc_2.value = r3.state.rectAreaLTC2, f2.pointLights.value = r3.state.point, f2.pointLightShadows.value = r3.state.pointShadow, f2.hemisphereLights.value = r3.state.hemi, f2.directionalShadowMatrix.value = r3.state.directionalShadowMatrix, f2.spotLightMatrix.value = r3.state.spotLightMatrix, f2.spotLightMap.value = r3.state.spotLightMap, f2.pointShadowMatrix.value = r3.state.pointShadowMatrix), i2.lightProbeGrid = w2.state.lightProbeGridArray.length > 0, i2.currentProgram = u2, i2.uniformsList = null, u2;
      }
      function lt2(e3) {
        if (null === e3.uniformsList) {
          const t3 = e3.currentProgram.getUniforms();
          e3.uniformsList = Ar2.seqWithValue(t3.seq, e3.uniforms);
        }
        return e3.uniformsList;
      }
      function ct2(e3, t3) {
        const n2 = Me2.get(e3);
        n2.outputColorSpace = t3.outputColorSpace, n2.batching = t3.batching, n2.batchingColor = t3.batchingColor, n2.instancing = t3.instancing, n2.instancingColor = t3.instancingColor, n2.instancingMorph = t3.instancingMorph, n2.skinning = t3.skinning, n2.morphTargets = t3.morphTargets, n2.morphNormals = t3.morphNormals, n2.morphColors = t3.morphColors, n2.morphTargetsCount = t3.morphTargetsCount, n2.numClippingPlanes = t3.numClippingPlanes, n2.numIntersection = t3.numClipIntersection, n2.vertexAlphas = t3.vertexAlphas, n2.vertexTangents = t3.vertexTangents, n2.toneMapping = t3.toneMapping;
      }
      tt2.setAnimationLoop(function(e3) {
        Qe2 && Qe2(e3);
      }), "undefined" != typeof self && tt2.setContext(self), this.setAnimationLoop = function(e3) {
        Qe2 = e3, Ke2.setAnimationLoop(e3), null === e3 ? tt2.stop() : tt2.start();
      }, Ke2.addEventListener("sessionstart", Je2), Ke2.addEventListener("sessionend", et2), this.render = function(e3, t3) {
        if (void 0 !== t3 && true !== t3.isCamera) return void os("WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        if (true === H2) return;
        null !== V2 && V2.renderStart(e3, t3);
        const n2 = true === Ke2.enabled && true === Ke2.isPresenting, i2 = null !== F2 && (null === k2 || n2) && F2.begin(G2, k2);
        if (true === e3.matrixWorldAutoUpdate && e3.updateMatrixWorld(), null === t3.parent && true === t3.matrixWorldAutoUpdate && t3.updateMatrixWorld(), true !== Ke2.enabled || true !== Ke2.isPresenting || null !== F2 && false !== F2.isCompositing() || (true === Ke2.cameraAutoUpdate && Ke2.updateCamera(t3), t3 = Ke2.getCamera()), true === e3.isScene && e3.onBeforeRender(G2, e3, t3, k2), w2 = Ie2.get(e3, y2.length), w2.init(t3), w2.state.textureUnits = xe2.getTextureUnits(), y2.push(w2), de2.multiplyMatrices(t3.projectionMatrix, t3.matrixWorldInverse), se2.setFromProjectionMatrix(de2, Wi, t3.reversedDepth), ce2 = this.localClippingEnabled, le2 = Ne2.init(this.clippingPlanes, ce2), U2 = we2.get(e3, N2.length), U2.init(), N2.push(U2), true === Ke2.enabled && true === Ke2.isPresenting) {
          const e4 = G2.xr.getDepthSensingMesh();
          null !== e4 && nt2(e4, t3, -1 / 0, G2.sortObjects);
        }
        nt2(e3, t3, 0, G2.sortObjects), U2.finish(), true === G2.sortObjects && U2.sort(ne2, ie2), me2 = false === Ke2.enabled || false === Ke2.isPresenting || false === Ke2.hasDepthSensing(), me2 && Oe2.addToRenderList(U2, e3), this.info.render.frame++, true === le2 && Ne2.beginShadows();
        const r3 = w2.state.shadowsArray;
        ye2.render(r3, e3, t3), true === le2 && Ne2.endShadows(), true === this.info.autoReset && this.info.reset();
        if (false === (i2 && F2.hasRenderPass())) {
          const n3 = U2.opaque, i3 = U2.transmissive;
          if (w2.setupLights(), t3.isArrayCamera) {
            const r4 = t3.cameras;
            if (i3.length > 0) for (let t4 = 0, a3 = r4.length; t4 < a3; t4++) {
              rt2(n3, i3, e3, r4[t4]);
            }
            me2 && Oe2.render(e3);
            for (let t4 = 0, n4 = r4.length; t4 < n4; t4++) {
              const n5 = r4[t4];
              it2(U2, e3, n5, n5.viewport);
            }
          } else i3.length > 0 && rt2(n3, i3, e3, t3), me2 && Oe2.render(e3), it2(U2, e3, t3);
        }
        null !== k2 && 0 === z2 && (xe2.updateMultisampleRenderTarget(k2), xe2.updateRenderTargetMipmap(k2)), i2 && F2.end(G2), true === e3.isScene && e3.onAfterRender(G2, e3, t3), Ve2.resetDefaultState(), X2 = -1, Y2 = null, y2.pop(), y2.length > 0 ? (w2 = y2[y2.length - 1], xe2.setTextureUnits(w2.state.textureUnits), true === le2 && Ne2.setGlobalState(G2.clippingPlanes, w2.state.camera)) : w2 = null, N2.pop(), U2 = N2.length > 0 ? N2[N2.length - 1] : null, null !== V2 && V2.renderEnd();
      }, this.getActiveCubeFace = function() {
        return W2;
      }, this.getActiveMipmapLevel = function() {
        return z2;
      }, this.getRenderTarget = function() {
        return k2;
      }, this.setRenderTargetTextures = function(e3, t3, n2) {
        const i2 = Me2.get(e3);
        i2.__autoAllocateDepthBuffer = false === e3.resolveDepthBuffer, false === i2.__autoAllocateDepthBuffer && (i2.__useRenderToTexture = false), Me2.get(e3.texture).__webglTexture = t3, Me2.get(e3.depthTexture).__webglTexture = i2.__autoAllocateDepthBuffer ? void 0 : n2, i2.__hasExternalTextures = true;
      }, this.setRenderTargetFramebuffer = function(e3, t3) {
        const n2 = Me2.get(e3);
        n2.__webglFramebuffer = t3, n2.__useDefaultFramebuffer = void 0 === t3;
      };
      const dt2 = ze2.createFramebuffer();
      this.setRenderTarget = function(e3, t3 = 0, n2 = 0) {
        k2 = e3, W2 = t3, z2 = n2;
        let i2 = null, r3 = false, a3 = false;
        if (e3) {
          const o3 = Me2.get(e3);
          if (void 0 !== o3.__useDefaultFramebuffer) return Ee2.bindFramebuffer(ze2.FRAMEBUFFER, o3.__webglFramebuffer), q2.copy(e3.viewport), j2.copy(e3.scissor), Z2 = e3.scissorTest, Ee2.viewport(q2), Ee2.scissor(j2), Ee2.setScissorTest(Z2), void (X2 = -1);
          if (void 0 === o3.__webglFramebuffer) xe2.setupRenderTarget(e3);
          else if (o3.__hasExternalTextures) xe2.rebindTextures(e3, Me2.get(e3.texture).__webglTexture, Me2.get(e3.depthTexture).__webglTexture);
          else if (e3.depthBuffer) {
            const t4 = e3.depthTexture;
            if (o3.__boundDepthTexture !== t4) {
              if (null !== t4 && Me2.has(t4) && (e3.width !== t4.image.width || e3.height !== t4.image.height)) throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
              xe2.setupDepthRenderbuffer(e3);
            }
          }
          const s3 = e3.texture;
          (s3.isData3DTexture || s3.isDataArrayTexture || s3.isCompressedArrayTexture) && (a3 = true);
          const l3 = Me2.get(e3).__webglFramebuffer;
          e3.isWebGLCubeRenderTarget ? (i2 = Array.isArray(l3[t3]) ? l3[t3][n2] : l3[t3], r3 = true) : i2 = e3.samples > 0 && false === xe2.useMultisampledRTT(e3) ? Me2.get(e3).__webglMultisampledFramebuffer : Array.isArray(l3) ? l3[n2] : l3, q2.copy(e3.viewport), j2.copy(e3.scissor), Z2 = e3.scissorTest;
        } else q2.copy(re2).multiplyScalar(te2).floor(), j2.copy(ae2).multiplyScalar(te2).floor(), Z2 = oe2;
        0 !== n2 && (i2 = dt2);
        if (Ee2.bindFramebuffer(ze2.FRAMEBUFFER, i2) && Ee2.drawBuffers(e3, i2), Ee2.viewport(q2), Ee2.scissor(j2), Ee2.setScissorTest(Z2), r3) {
          const i3 = Me2.get(e3.texture);
          ze2.framebufferTexture2D(ze2.FRAMEBUFFER, ze2.COLOR_ATTACHMENT0, ze2.TEXTURE_CUBE_MAP_POSITIVE_X + t3, i3.__webglTexture, n2);
        } else if (a3) {
          const i3 = t3;
          for (let t4 = 0; t4 < e3.textures.length; t4++) {
            const r4 = Me2.get(e3.textures[t4]);
            ze2.framebufferTextureLayer(ze2.FRAMEBUFFER, ze2.COLOR_ATTACHMENT0 + t4, r4.__webglTexture, n2, i3);
          }
        } else if (null !== e3 && 0 !== n2) {
          const t4 = Me2.get(e3.texture);
          ze2.framebufferTexture2D(ze2.FRAMEBUFFER, ze2.COLOR_ATTACHMENT0, ze2.TEXTURE_2D, t4.__webglTexture, n2);
        }
        X2 = -1;
      }, this.readRenderTargetPixels = function(e3, t3, n2, i2, r3, a3, o3, s3 = 0) {
        if (!e3 || !e3.isWebGLRenderTarget) return void os("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        let l3 = Me2.get(e3).__webglFramebuffer;
        if (e3.isWebGLCubeRenderTarget && void 0 !== o3 && (l3 = l3[o3]), l3) {
          Ee2.bindFramebuffer(ze2.FRAMEBUFFER, l3);
          try {
            const o4 = e3.textures[s3], l4 = o4.format, c2 = o4.type;
            if (e3.textures.length > 1 && ze2.readBuffer(ze2.COLOR_ATTACHMENT0 + s3), !ve2.textureFormatReadable(l4)) return void os("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            if (!ve2.textureTypeReadable(c2)) return void os("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            t3 >= 0 && t3 <= e3.width - i2 && n2 >= 0 && n2 <= e3.height - r3 && ze2.readPixels(t3, n2, i2, r3, He2.convert(l4), He2.convert(c2), a3);
          } finally {
            const e4 = null !== k2 ? Me2.get(k2).__webglFramebuffer : null;
            Ee2.bindFramebuffer(ze2.FRAMEBUFFER, e4);
          }
        }
      }, this.readRenderTargetPixelsAsync = async function(e3, t3, n2, i2, r3, a3, o3, s3 = 0) {
        if (!e3 || !e3.isWebGLRenderTarget) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        let l3 = Me2.get(e3).__webglFramebuffer;
        if (e3.isWebGLCubeRenderTarget && void 0 !== o3 && (l3 = l3[o3]), l3) {
          if (t3 >= 0 && t3 <= e3.width - i2 && n2 >= 0 && n2 <= e3.height - r3) {
            Ee2.bindFramebuffer(ze2.FRAMEBUFFER, l3);
            const o4 = e3.textures[s3], c2 = o4.format, d3 = o4.type;
            if (e3.textures.length > 1 && ze2.readBuffer(ze2.COLOR_ATTACHMENT0 + s3), !ve2.textureFormatReadable(c2)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
            if (!ve2.textureTypeReadable(d3)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
            const u2 = ze2.createBuffer();
            ze2.bindBuffer(ze2.PIXEL_PACK_BUFFER, u2), ze2.bufferData(ze2.PIXEL_PACK_BUFFER, a3.byteLength, ze2.STREAM_READ), ze2.readPixels(t3, n2, i2, r3, He2.convert(c2), He2.convert(d3), 0);
            const f2 = null !== k2 ? Me2.get(k2).__webglFramebuffer : null;
            Ee2.bindFramebuffer(ze2.FRAMEBUFFER, f2);
            const p3 = ze2.fenceSync(ze2.SYNC_GPU_COMMANDS_COMPLETE, 0);
            return ze2.flush(), await cs(ze2, p3, 4), ze2.bindBuffer(ze2.PIXEL_PACK_BUFFER, u2), ze2.getBufferSubData(ze2.PIXEL_PACK_BUFFER, 0, a3), ze2.deleteBuffer(u2), ze2.deleteSync(p3), a3;
          }
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
        }
      }, this.copyFramebufferToTexture = function(e3, t3 = null, n2 = 0) {
        const i2 = Math.pow(2, -n2), r3 = Math.floor(e3.image.width * i2), a3 = Math.floor(e3.image.height * i2), o3 = null !== t3 ? t3.x : 0, s3 = null !== t3 ? t3.y : 0;
        xe2.setTexture2D(e3, 0), ze2.copyTexSubImage2D(ze2.TEXTURE_2D, n2, 0, 0, o3, s3, r3, a3), Ee2.unbindTexture();
      };
      const ut2 = ze2.createFramebuffer(), ft2 = ze2.createFramebuffer();
      this.copyTextureToTexture = function(e3, t3, n2 = null, i2 = null, r3 = 0, a3 = 0) {
        let o3, s3, l3, c2, d3, u2, f2, p3, m3;
        const h2 = e3.isCompressedTexture ? e3.mipmaps[a3] : e3.image;
        if (null !== n2) o3 = n2.max.x - n2.min.x, s3 = n2.max.y - n2.min.y, l3 = n2.isBox3 ? n2.max.z - n2.min.z : 1, c2 = n2.min.x, d3 = n2.min.y, u2 = n2.isBox3 ? n2.min.z : 0;
        else {
          const t4 = Math.pow(2, -r3);
          o3 = Math.floor(h2.width * t4), s3 = Math.floor(h2.height * t4), l3 = e3.isDataArrayTexture ? h2.depth : e3.isData3DTexture ? Math.floor(h2.depth * t4) : 1, c2 = 0, d3 = 0, u2 = 0;
        }
        null !== i2 ? (f2 = i2.x, p3 = i2.y, m3 = i2.z) : (f2 = 0, p3 = 0, m3 = 0);
        const _3 = He2.convert(t3.format), g3 = He2.convert(t3.type);
        let v2;
        t3.isData3DTexture ? (xe2.setTexture3D(t3, 0), v2 = ze2.TEXTURE_3D) : t3.isDataArrayTexture || t3.isCompressedArrayTexture ? (xe2.setTexture2DArray(t3, 0), v2 = ze2.TEXTURE_2D_ARRAY) : (xe2.setTexture2D(t3, 0), v2 = ze2.TEXTURE_2D), Ee2.activeTexture(ze2.TEXTURE0), Ee2.pixelStorei(ze2.UNPACK_FLIP_Y_WEBGL, t3.flipY), Ee2.pixelStorei(ze2.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t3.premultiplyAlpha), Ee2.pixelStorei(ze2.UNPACK_ALIGNMENT, t3.unpackAlignment);
        const E2 = Ee2.getParameter(ze2.UNPACK_ROW_LENGTH), S2 = Ee2.getParameter(ze2.UNPACK_IMAGE_HEIGHT), T3 = Ee2.getParameter(ze2.UNPACK_SKIP_PIXELS), M3 = Ee2.getParameter(ze2.UNPACK_SKIP_ROWS), x3 = Ee2.getParameter(ze2.UNPACK_SKIP_IMAGES);
        Ee2.pixelStorei(ze2.UNPACK_ROW_LENGTH, h2.width), Ee2.pixelStorei(ze2.UNPACK_IMAGE_HEIGHT, h2.height), Ee2.pixelStorei(ze2.UNPACK_SKIP_PIXELS, c2), Ee2.pixelStorei(ze2.UNPACK_SKIP_ROWS, d3), Ee2.pixelStorei(ze2.UNPACK_SKIP_IMAGES, u2);
        const A3 = e3.isDataArrayTexture || e3.isData3DTexture, R3 = t3.isDataArrayTexture || t3.isData3DTexture;
        if (e3.isDepthTexture) {
          const n3 = Me2.get(e3), i3 = Me2.get(t3), h3 = Me2.get(n3.__renderTarget), _4 = Me2.get(i3.__renderTarget);
          Ee2.bindFramebuffer(ze2.READ_FRAMEBUFFER, h3.__webglFramebuffer), Ee2.bindFramebuffer(ze2.DRAW_FRAMEBUFFER, _4.__webglFramebuffer);
          for (let n4 = 0; n4 < l3; n4++) A3 && (ze2.framebufferTextureLayer(ze2.READ_FRAMEBUFFER, ze2.COLOR_ATTACHMENT0, Me2.get(e3).__webglTexture, r3, u2 + n4), ze2.framebufferTextureLayer(ze2.DRAW_FRAMEBUFFER, ze2.COLOR_ATTACHMENT0, Me2.get(t3).__webglTexture, a3, m3 + n4)), ze2.blitFramebuffer(c2, d3, o3, s3, f2, p3, o3, s3, ze2.DEPTH_BUFFER_BIT, ze2.NEAREST);
          Ee2.bindFramebuffer(ze2.READ_FRAMEBUFFER, null), Ee2.bindFramebuffer(ze2.DRAW_FRAMEBUFFER, null);
        } else if (0 !== r3 || e3.isRenderTargetTexture || Me2.has(e3)) {
          const n3 = Me2.get(e3), i3 = Me2.get(t3);
          Ee2.bindFramebuffer(ze2.READ_FRAMEBUFFER, ut2), Ee2.bindFramebuffer(ze2.DRAW_FRAMEBUFFER, ft2);
          for (let e4 = 0; e4 < l3; e4++) A3 ? ze2.framebufferTextureLayer(ze2.READ_FRAMEBUFFER, ze2.COLOR_ATTACHMENT0, n3.__webglTexture, r3, u2 + e4) : ze2.framebufferTexture2D(ze2.READ_FRAMEBUFFER, ze2.COLOR_ATTACHMENT0, ze2.TEXTURE_2D, n3.__webglTexture, r3), R3 ? ze2.framebufferTextureLayer(ze2.DRAW_FRAMEBUFFER, ze2.COLOR_ATTACHMENT0, i3.__webglTexture, a3, m3 + e4) : ze2.framebufferTexture2D(ze2.DRAW_FRAMEBUFFER, ze2.COLOR_ATTACHMENT0, ze2.TEXTURE_2D, i3.__webglTexture, a3), 0 !== r3 ? ze2.blitFramebuffer(c2, d3, o3, s3, f2, p3, o3, s3, ze2.COLOR_BUFFER_BIT, ze2.NEAREST) : R3 ? ze2.copyTexSubImage3D(v2, a3, f2, p3, m3 + e4, c2, d3, o3, s3) : ze2.copyTexSubImage2D(v2, a3, f2, p3, c2, d3, o3, s3);
          Ee2.bindFramebuffer(ze2.READ_FRAMEBUFFER, null), Ee2.bindFramebuffer(ze2.DRAW_FRAMEBUFFER, null);
        } else R3 ? e3.isDataTexture || e3.isData3DTexture ? ze2.texSubImage3D(v2, a3, f2, p3, m3, o3, s3, l3, _3, g3, h2.data) : t3.isCompressedArrayTexture ? ze2.compressedTexSubImage3D(v2, a3, f2, p3, m3, o3, s3, l3, _3, h2.data) : ze2.texSubImage3D(v2, a3, f2, p3, m3, o3, s3, l3, _3, g3, h2) : e3.isDataTexture ? ze2.texSubImage2D(ze2.TEXTURE_2D, a3, f2, p3, o3, s3, _3, g3, h2.data) : e3.isCompressedTexture ? ze2.compressedTexSubImage2D(ze2.TEXTURE_2D, a3, f2, p3, h2.width, h2.height, _3, h2.data) : ze2.texSubImage2D(ze2.TEXTURE_2D, a3, f2, p3, o3, s3, _3, g3, h2);
        Ee2.pixelStorei(ze2.UNPACK_ROW_LENGTH, E2), Ee2.pixelStorei(ze2.UNPACK_IMAGE_HEIGHT, S2), Ee2.pixelStorei(ze2.UNPACK_SKIP_PIXELS, T3), Ee2.pixelStorei(ze2.UNPACK_SKIP_ROWS, M3), Ee2.pixelStorei(ze2.UNPACK_SKIP_IMAGES, x3), 0 === a3 && t3.generateMipmaps && ze2.generateMipmap(v2), Ee2.unbindTexture();
      }, this.initRenderTarget = function(e3) {
        void 0 === Me2.get(e3).__webglFramebuffer && xe2.setupRenderTarget(e3);
      }, this.initTexture = function(e3) {
        e3.isCubeTexture ? xe2.setTextureCube(e3, 0) : e3.isData3DTexture ? xe2.setTexture3D(e3, 0) : e3.isDataArrayTexture || e3.isCompressedArrayTexture ? xe2.setTexture2DArray(e3, 0) : xe2.setTexture2D(e3, 0), Ee2.unbindTexture();
      }, this.resetState = function() {
        W2 = 0, z2 = 0, k2 = null, Ee2.reset(), Ve2.reset();
      }, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
    }
    get coordinateSystem() {
      return Wi;
    }
    get outputColorSpace() {
      return this._outputColorSpace;
    }
    set outputColorSpace(e2) {
      this._outputColorSpace = e2;
      const t2 = this.getContext();
      t2.drawingBufferColorSpace = Rs._getDrawingBufferColorSpace(e2), t2.unpackColorSpace = Rs._getUnpackColorSpace();
    }
  };

  // runtime/web/js/config.js
  var CONFIG = {
    // Polaroid card geometry (UI-SPEC §"Scene composition spacing")
    POLAROID_W: 1,
    POLAROID_H: 1.236,
    POISSON_MIN_DIST: 0.7,
    // × POLAROID_W
    ROTATION_RANGE: Math.PI / 2,
    // radians (= 90 deg) — natural-scatter override
    STACK_Z_OFFSET: 3e-3,
    POLAROID_Y_LIFT: 0.012,
    // base Y above the table to prevent z-fighting
    // Card internal proportions (UI-SPEC §"Polaroid card internal proportions")
    BORDER_TOP_FRAC: 0.05,
    BORDER_SIDE_FRAC: 0.05,
    BORDER_BOTTOM_FRAC: 0.18,
    APERTURE_FRAC: 0.8,
    // Camera / scene composition
    TABLE_PITCH_DEG: -20,
    CAMERA_FOV: 38,
    CAMERA_HEIGHT_MULT: 1.8,
    // × POLAROID_H
    SCATTER_BOUNDS_W: 20,
    SCATTER_BOUNDS_D: 14,
    TABLE_OVERSCAN: 1.5,
    // table plane = SCATTER_BOUNDS × this
    // Tape — disabled per Donovan's UAT; tape didn't read as polaroid-tape, distracting
    TAPE_RATIO: 0,
    TAPE_DOUBLE_RATIO: 0,
    TAPE_W: 0.3,
    TAPE_H: 0.1,
    // Camera path (UI-SPEC §"Camera path geometry")
    LISSAJOUS_A: 4,
    LISSAJOUS_B: 2.5,
    LISSAJOUS_PERIOD_S: 90,
    DWELL_TIMES: [0.25, 0.75],
    DWELL_DURATION_S: 2.5,
    // Camera-zoom interrupt (replaces the polaroid lift)
    // Every ZOOM_INTERVAL_S the camera leaves the figure-8, dives to a 90°
    // bird's-eye view of a random polaroid, holds, then returns to where the
    // figure-8 would currently be. Lift constants kept for back-compat but
    // unused at runtime.
    ZOOM_INTERVAL_S: 15,
    ZOOM_HOLD_S: 3,
    ZOOM_TRANSITION_S: 2.5,
    // dive + return duration — slower feels more deliberate
    ZOOM_HEIGHT: 2.2,
    // camera Y above the polaroid at hold — leaves ~75px top/bottom margin at 900-tall viewport
    ZOOM_TRANSITION_EASE: "power2.inOut",
    LIFT_INTERVAL_MIN_S: 12,
    // legacy / disabled
    LIFT_INTERVAL_MAX_S: 18,
    LIFT_RISE_S: 1.2,
    LIFT_HOLD_S: 6,
    LIFT_FALL_S: 1.5,
    LIFT_RISE_EASE: "back.out(1.4)",
    LIFT_FALL_EASE: "power2.inOut",
    LIFT_DISTANCE_FROM_CAMERA: 2.5,
    // Performance (UI-SPEC §"Performance contract", MOTION-10)
    FPS_CAP: 30,
    TEXTURE_CACHE_MAX: 60,
    // Scene density
    SCATTER_COUNT_MIN: 25,
    SCATTER_COUNT_MAX: 80,
    SCATTER_COUNT_TARGET: 60,
    // Tabletop selection. null = procedural wood (table.js builds the canvas).
    // Anything else loads /tabletops/{value}.webp as the table material.
    // Available files (in runtime/web/tabletops/): arch, floral, straps, wallpaper.
    // Future Phase 6 hooks this into the screensaver options panel.
    TABLETOP_IMAGE: "floral",
    // Colors (UI-SPEC §"Color")
    COLOR_TABLE: 4007959,
    // darker walnut — Donovan UAT override
    COLOR_POLAROID_BORDER: 16117730,
    COLOR_PHOTO_BASE: 16777215,
    COLOR_BACKGROUND: 4000276,
    // dark maroon — Donovan UAT override (applies to all tabletop patterns)
    COLOR_CAPTION: "#2a2419",
    COLOR_HEMI_SKY: 16773848,
    COLOR_HEMI_GROUND: 3811866,
    COLOR_KEY: 16773334,
    HEMI_INTENSITY: 0.4,
    KEY_INTENSITY: 0.7,
    KEY_POSITION: [-3, 4, 2],
    // Roughness
    TABLE_ROUGHNESS: 0.85,
    BORDER_ROUGHNESS_MIN: 0.75,
    BORDER_ROUGHNESS_MAX: 0.95,
    APERTURE_ROUGHNESS: 0.4,
    // Shadow
    SHADOW_MAP_SIZE: 2048,
    SHADOW_BIAS: -5e-4,
    SHADOW_RADIUS: 4,
    // Tape palette (UI-SPEC §"Tape strip palette")
    TAPE_PALETTE: [
      { name: "cream", color: 15787724, opacity: 0.75 },
      { name: "dustyPink", color: 13936799, opacity: 0.75 },
      { name: "kraft", color: 10977376, opacity: 0.8 },
      { name: "fadedBlue", color: 10137784, opacity: 0.7 }
    ],
    // Caption (UI-SPEC §"Caption typography")
    CAPTION_TEXTURE_W: 1024,
    CAPTION_TEXTURE_H: 1280,
    CAPTION_PX_SIZE: 36,
    CAPTION_MAX_CHARS: 28,
    CAPTION_ROTATION_JITTER_DEG: 1.5,
    // Phase 1 placeholder photo source
    PLACEHOLDER_PHOTO_DIR: "../../Drive"
    // 12 photos relative to runtime/web/
  };

  // runtime/web/js/lights.js
  function createLights() {
    const hemi = new qc(
      CONFIG.COLOR_HEMI_SKY,
      CONFIG.COLOR_HEMI_GROUND,
      CONFIG.HEMI_INTENSITY
    );
    hemi.position.set(0, 5, 0);
    const key = new lu(
      CONFIG.COLOR_KEY,
      CONFIG.KEY_INTENSITY
    );
    key.position.set(...CONFIG.KEY_POSITION);
    key.target.position.set(0, 0, 0);
    key.castShadow = true;
    key.shadow.mapSize.width = CONFIG.SHADOW_MAP_SIZE;
    key.shadow.mapSize.height = CONFIG.SHADOW_MAP_SIZE;
    key.shadow.bias = CONFIG.SHADOW_BIAS;
    key.shadow.radius = CONFIG.SHADOW_RADIUS;
    const half = Math.max(CONFIG.SCATTER_BOUNDS_W, CONFIG.SCATTER_BOUNDS_D) / 2 + 1;
    key.shadow.camera.left = -half;
    key.shadow.camera.right = half;
    key.shadow.camera.top = half;
    key.shadow.camera.bottom = -half;
    key.shadow.camera.near = 0.1;
    key.shadow.camera.far = 20;
    return { hemi, key };
  }

  // runtime/web/js/wood-texture.js
  function createWoodCanvas(baseRgbHex) {
    const size = 1024;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    const baseR = baseRgbHex >> 16 & 255;
    const baseG = baseRgbHex >> 8 & 255;
    const baseB = baseRgbHex & 255;
    ctx.fillStyle = `rgb(${baseR},${baseG},${baseB})`;
    ctx.fillRect(0, 0, size, size);
    const plankW = 60;
    const grainRate = 0.04 * 50;
    const secondaryRate = 0.013 * 50;
    const img = ctx.getImageData(0, 0, size, size);
    const data = img.data;
    for (let y2 = 0; y2 < size; y2++) {
      for (let x2 = 0; x2 < size; x2++) {
        const plankX = x2 % plankW;
        const plankPhase = Math.floor(x2 / plankW) * 1.7;
        const grain = Math.sin((plankX + plankPhase * 100) * grainRate) * 0.5 + Math.sin((plankX + plankPhase * 50) * secondaryRate) * 0.3 + (Math.random() - 0.5) * 0.15;
        const seam = plankX < 2 ? -0.15 : 0;
        const delta = grain * 18 + seam * 40;
        const i2 = (y2 * size + x2) * 4;
        data[i2] = clamp255(data[i2] + delta);
        data[i2 + 1] = clamp255(data[i2 + 1] + delta * 0.9);
        data[i2 + 2] = clamp255(data[i2 + 2] + delta * 0.7);
      }
    }
    ctx.putImageData(img, 0, 0);
    return canvas;
  }
  function clamp255(v2) {
    return Math.max(0, Math.min(255, v2));
  }

  // runtime/web/js/texture-cache.js
  function loadImageAsTexture(url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        const tex = new qs(img);
        tex.colorSpace = ei;
        tex.anisotropy = 4;
        tex.needsUpdate = true;
        resolve(tex);
      };
      img.onerror = (err) => {
        reject(new Error(`[texture-cache] image load failed for ${url}`));
      };
      img.src = url;
    });
  }
  var TextureCache = class {
    constructor(maxResident = CONFIG.TEXTURE_CACHE_MAX) {
      this.map = /* @__PURE__ */ new Map();
      this.max = maxResident;
    }
    async get(url) {
      if (this.map.has(url)) {
        const t2 = this.map.get(url);
        this.map.delete(url);
        this.map.set(url, t2);
        return t2;
      }
      const texture = await loadImageAsTexture(url);
      this.map.set(url, texture);
      if (this.map.size > this.max) {
        const oldest = this.map.entries().next().value;
        if (oldest) {
          const [oldUrl, oldTex] = oldest;
          oldTex.dispose();
          if (oldTex.source?.data?.close) oldTex.source.data.close();
          this.map.delete(oldUrl);
        }
      }
      return texture;
    }
    size() {
      return this.map.size;
    }
    has(url) {
      return this.map.has(url);
    }
  };

  // runtime/web/js/tabletop-data.js
  var TABLETOP_URIS = {
    arch: "data:image/webp;base64,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",
    floral: "data:image/webp;base64,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",
    straps: "data:image/webp;base64,UklGRnpGAABXRUJQVlA4WAoAAAAMAAAADAIAXQEAVlA4IARDAAAQSgGdASoNAl4BPnU0lkgkoyIhqDKa6JAOiWdkc2OJe8v9v//OTZ2cbNBn5/mBvFeyOBKIPhm1x+TuURybbBuqvPHdwOcDaAqP/+340/sy7XRXKkt69NDRM8VfEf/3R7N8H9P8hv0//I8Gf039J91/uJf9ucv5z/w8cv8zz+f9firtoeHHw2SG80n9F0Eem/ltf4OiH8SP7P/x/Y/KOb8Y8RfVPCDfZTbtnXwPev940cQwEhLMCPjPXWOvwAxX61meBD+hRLD5kMri7KGGR3SJUTpEjd/BGtB5cgkqMydXhh7TORN5Pkquy+72q3h4Ass5SK8kTHSIQiBf0s51Nps7bU0uT34dW7q2exjuwbq5oYCo7r3zkJ0+0YLq0xL2fL2fq4Rn3zutlEJKJu6btbyspbXzXatXI/pXiIi3LJFdweF5L9uopvppQqb9XwUJg89TUhG/2qWMe331TSjvFYdvdIdrwL+JV8OW5FXtbovkqflrXPqR5dmCxa8OS8mDEZ4hNonAIuducnUrGAQ889Jr+rf/ozQjQMMTRpLH02CNaY0TnkKWzSWUGomJullyvX4oJfNme1HPdnFXB4DqVYPET8I6ZRZsXSd0f8f0DErJmRzFJak8kxQUHo/kRsfhu5kIlQzlSooLYt0F0NUXutsbPr7W2/+63jg6lGCmQZ0OFb0+mGt5eedwcffHLgz9wRCD70ZanIeBGyKIdB5iBb0iKSXZHvfTjftTTpEX2QHyXDSmee88Og6B9c3n9K5JmrHDeiXiKrApkbCAbMuuIddIzu3iVA1o0wYa7vCtauJH0zhYuCzB4Du6C/yC/yJpbsF/KO3lzrfv/byDg5gYsF4YmbPNsi3+4FbCV3pLaoBbXCjVA29nsw4ooyXoEGO1lhdEpFpdZT5t17B02nIvnQHMgicCWWdXcz+FesnhouUMzA3WlPe477sxYqjN52ProLe8p9hrYQnkkXw4apZ2wgK/93UiNvoqGiDVQWNb19U8qHHPLaAjY5ovpSogIwpwHvHiyiqkuwmIEKJTZDoThfZ4QP0LF43n/JIjekmoD1HWJmZsfipg7OGR+zxdqXsZEl9mkQnOjxihREtiAkKFwmjTeZ7MtpWLusmanAhOhMqsMALpXZPhPRZ85EfXKFlFI1gVHQTHFoj7R8yJmmNSju2rMj0MvnyoCGKLNUVvOVhwjyGjfiUY2nC5MvV/Cy144RWaDlssOIuJv3+oyENTtvYvmu5AWmY0VTowXIpYsGI1UyUsRcqhYCiD15zGaf6J96Iw4zho6SoMIFWh8Ntga7LeR6xA/64HP5pRzT60DoGdrtEqKDiQb2/X57R5YVkTRZcr6QK1BRCRcdUTCCBT+9QPmRs4wyfPrd8HIbqm4G1j5Ab1drja8z8CzordLSrCxEfDRi88meDsW+oMBgOTmDYAmfatNQZ6zaOJh4F3OhW8wjLt/3NmsZoXjtkSoj1oKMINfnExnzWk+3LdA95YOAhEcXO5mTav+hizzO3P8n8M9HJc0QKkeWqNzMlHA+qYSn8Y1sLZje+h9rvLJfK+f2M2RCgkR6uwpXdUZcE1DQxj2ebyTC07gFfvV/S/tSABdeJyUvnon+paGbn5kHr3o7c3Rc1EmZa+UwtrjgbDqtBBriF3eGtxJv4Gq8roPk6rYTXJxGBQ1tnbXXnfA0WRT79IV6bgxbfp6te4OBNb25cKz+newKaH/Q1FET0eZxTrFdeFYVtIzS8zMgd2C2vU6NS1jcE2mHtm7B9vRrBR8wq6K7EMTeJjzTYRk+fOtBcsFhfrDXqmDFnzDaMgEDs1Mn1/RhXuEfxY8sigPxo/MuAuOb4J6cqZ40ZTX2Tmu7CTX1ZIdzB4Fxw7/iLFo3XYYGBRZ6/VJ5aCQIxiFUKkjJMYT8fD3GG9Z1+iBHX2dzrhG9cvS8m9ehjDo/JdBScnzeQOlA/BA6hz9yDGU/frDH0nRori0VSIA39QtmbbUf0N3NmidGM6w8OzaCKadPOvt8fh0+tWhfHJbqpoA6PM8OwO2vk/48uYupOej6EB41WTwUwD/uWoZp5piGo0JS7BX8ghB8GpxrOE66C4YGEv6ASbE/+PPYSAFMKO8LtBvUtZl0VJMVwZhTdpSI81romuW4FkKcBoRKgk3d9Z0311TVSkBablZ+xNpeD24qWDr/moVECeBk3MzFn1OFtJ0lBh87YbwcNiInTicL3D1FZkYcgmzBvhmbbkYOsJSUWKYIkZC83/9PtS4pNPKy9BnTBKu3obS78HNDu/YjLRbCQsoUOqybLj3B7UzrJHSeGgbRz8MF5y6c98F1Cge6e8wkbhGvZtCe54sQn1VW5ZG1vt1VgbGgx2s+tL/PPPeb9UWA7lzbgnJsc2IeC7nXciOKw2WowymsEiN1ulL0hG2PrU+mxUCgFSBKcSgYbMbkfznIXbnuOwxN6zUNDzdq2eBMAWB+3Vt66yLoYAa7IelA378tOwGfaSsKbMY/Cjwxdboq+5FJaqsk0or+G92Gcg/3M8rS9a0GfjuevTMjcSIW6apxVZSyyHODh0HPQjUxNmWplRvN2c1lSx5WlScDwbwUo7cPTm+Nry8gq/PQuYJaOEpWb66X2zfNHVy741TIvJ0B8uXzOUN9baj8Gx1NsTeCHmMB/LIxr4vu0Fa3hAh5ZVo1ISLex56nuf+laygB++5TPqmD7P00FCPk378OJ4o2F/RqsHc+dN5z+c1PZkxAlt3+MgXSniR+gNCR2fKRwRqHgp7gtuSWZFpbolrkLED/YxglmzB5LSsV0nlZLSjVUQrY2KEkTkG6vYMRHOX6KmlYOKLx7GQdEAwy2zeczoaFYFp5NNjSKbgUWvXEmDj8gJRyIsR9sgJ5LDDQwLqbn53j0OhuIXJCqcp2Ub5mQUEHKjozhMcGPV70Rz8XM2HSv1IhTyt/9FyJEfLWZxg570D5kkY/VlJ9tPcoCOCWpdOgbbHAuHlGT2dvoASoajBZoW5xcibDfc62aKQg2KeYDA7WI0hX4jszJu2cqjP4FL8DB7jHhDtp3uNFPCnZN9B/SJMVm3T9cUB/WVZRvX6gtKgrWwb17zYBycrKmSvTZF0RQg3VizyUumw0AEiZaxRtSo/2TaUw+dyibnqWLYuA2W5xmQhuHEVvTUpRhJxDnD9GrbW9RyphnohBOp6dX0sWn8XMNRm4DZhOpCFbiES5Zs+QanLUY+xslLk9C2CMPgz9leUN3GHzZL0hB6xmovQrzNv/mdYlVoxyJjFJP/VDXm+RJmxUF5rPNotx5yXuCS44Cj0zpikJyYNEo1ZD+Dj95oBoaHpOZ36xNKVLKWNCtIfbRUgw6+nexnxjZTfH/xK04tm6ej2/Uhml08qcrzIsNnZBHg0GimQJbZN4ZLombtcAc6aelpybX5MgmcCeRi6vxQVemT7VqYu5JDi/sempQYSleHmD8b3P9GzfgKHGTLqTwOLvgf3uGrMOUmRW0yRIcKlzmW+34jzQlzgtaGZ8Q20agpd+6+WyZUuyRhbzDumXtomXOaFlBlh01tJgAA/vs0Ja1TLucfwwEPSFOKCa1sPG2p/4hmW8wF5vAj99drkcv+gj7Q+OqXud+Wmj5dTkT3GXFjCZjA2peXNSmcr66UuUjbrluN900JayVh1T+YTRwKhvBaCUQZJpJojQ8h1zdTpZC3onrK70UjS/9w23rKXI8fLAh2Sq+MLrcDFrmvSH/6M97wHcjZjVpb2jL74n2QYfjvElRLmgW3L3vP5yuXxzGDRWdnAaHT0jh7Iwq3FxbLfDtxnUFGhyOlhWfKCK56cNjIvpbCRsha8rjYJw9ZCVqS8EvKD83bNjBL1ByqLYuafkxzqLCo2Ij5MWdHafmvLnrUF6r8LwtCG4cyoXFzDSk5iEBRz9InsmzEYgm6yHta/YZ2xCCkO/WJmuXAUCC+g3FpAzXcJzSXTEpP9t0QyJJT3jg5gyraRqwBFGyU9mbn0XJGE1cf2yELbCh8W6YS+iS+gBF5d4YjL75L4pJOsfm4HLpKpov7Oz0XX73bUJFPTpfsUeMJMAXpKjM7eS0coZokgMnndKr9N37tzohXUsNKq83scI0EjhBkjrMy3x2DccywKsOZlvhLxLCPSoTjShLRcjTcCtCS34lbwCd9jigXo0Qa3SUF8A94t9Mb32g68BfhBlnHXm1opcrmMI68Z6FTpKplbghQIcXMm5bmsib2SiLXVFw4CpPeo3u44ZNTO1Jg/k1HmmVhUVoP+Dtbju6Tp5R+E2YlwpBwR7W2N7FDSYPloHPDCMcdJgjRQFG/DkJBUCBepSA+9Q/xV9tGuV04ODZYU+6NLRdhyq8nM3onKgn/VVsLTPDcs5A1u+0O8/FDBljPAhRcpH4P6nmTj+KHah1n2AW9pB7fnoewYwZmy6lwBImizuzXIww4x+Q+hLmg+2q5WmY7w4v5KqLxaNkHDxhtlQV7alpI/se0sBaFFxGah0Od0VJoLX0Ho97gV5r7OvPDNOJhV/sqQkkSs9wonIY232t8Ug9mMK7P0KGCa3pvQjOENsBqKIbDHb7vnqpoRJzVuLwmlV/mI/ItJZGiMm1mVH1CIRVOpkkTpaA4iG6jLsDD9qkaKfDFjFjQKpkdClS7qFxw63JLTWMSxgNYSpovQGMi3VakGfq3yIWgcRC0/DwlhccRm06tr8AoVjr6SEffdtXbvHOm+YeYUCz/j0+0nzfET1fOo9Z+7DvVTgteetdSrkMQ6Igoo0hfn83Gq08mGxMF60tGdIl1jVxT7XV+zieyRkrxbJmBL7eStt8sEt9haiVUQmQl+n0qpr69a0bd/0ipyxAmn0rwsj2MY7OnetbqWuI+FSTV4Fcb293w/r3fbZAj7z7utZmjTObs+SlWJpesQwKuNotfThet9G4AoUAhNMGdc+P0WYE32cbdmSwfvYhvoEPucyZzooCG614casaIqCictrd4i0wCqQbs5n+Z5bfJhaqzaxYeaKw9TCTGhwkItydfRBZOyZqIPbjnDhANVHmTqTb/8dLNZ14XOAFAsb/6JwPf7GDhYTwj+Ac/m7WZxB7ik8qmsIuWchHhI0TE7b3EJ3ue9YfoW0Sp3EeN779IksDQsXsxkBjS2SdRW02ZVM3u+5ldrvB2odCZxcdiZfGC2vAPWA+z9BBloFSg4qthZVb9nB7iDWr5m+g2rB7/3ZbXUQm7FPvPNBACZmYPk8KQSpjdOnDYEjYcC/Xv8TNZR/9xFd1csIRalw5XCSFpsATQRCmiB4dAd7kmZDplpNlzjV1aMzgohTYX4VQ5natknmY6ozuJmnbFHP8mmjMfvrdjbQdnbNgk7ixH43kVXpVbwuMH2quETjKY9Q8yypk6QdKGUJOVt/VCOlFJh/1DyEVxbvvEo8PNoSC/JFkirMPT34dsEAqj1bS1Zh2bUXul4aWkjYRAB0KJJYrChbb/BCbc1z1QjAQtwHWJbzggWFe6eW0+tKvJwx4A4fm0TSEjOEr+XXXSXkjmoXDca7zgfoU9tSvadC0eeKI+kEDLdeOjxesu2jAUXcpNMVyAHXa5wBR3Q396F/EYAu4mB/3o8HLs5KD4rgMaWqmClwIJzGeb/Dpcqyk8H06yicHrA6/aJoSE/hwqbZbRdDQLcQjHS1jt/10aMDDDLxcdiVJWJecIWUsNlcgIbywsrlpOnrhpQk3KHRjlmSAe/mg85F0yZ3U6XF+42DyhBJCQ6EPcVNCRjyV2EfRY8yxmhzo0bVpjMBPyKL4uFzKz9QoVrcaTe7Vf1sG42L7M1jJWOUmyXCIxy9DpIBo7hGQctHjjfAS2pw/VRtgRcUwoNfqvAc1kzvB84w1T4ra0+1qai7sVsyzacGXKqsXoRqNPiCfMftZZbZJ3MvTPZiRehzs5zmLtmNdo+lk5J3zu/66Zom3nKWMGV5YPDWLAIIBrZ+K73rowUVVKwyek8qhQtik1kWdG5VBkfov4IwI0or8rZUT4IH1gECzSU5BuQkEwZn7G+8rVGmOR3gmW8+k49N0qYXyld/bVff3mktqb14HSFazJx8nbtJ6AX0lQ51fajF9ZMmZEHmHHsE2L/IF+54Gpp0QB28UdTnAILm/NCEtTBYlaeD1KeFIESOiR0/blEOWm7qdEIJistjmDl3740O2k2FhNHaojMH4OHtlCyu/96XWHy69/TJ3bAFCh0jUHXPNoij0bibUeS3Mwm6XJ41V/iGakzoLAqLAefvWle9w8jb/Y+vqgh63nsHjI7qy2drHalmMA8Ss7ucLjMh0kTQccAECjqQwVk8OJkzpK14eMqsdQGpTFSQeP8z22G1KRaVtPeEcFbpcVxzbDW7btntl2IzVsEQ3RRKdJhvNiFOEInmTlS9qazQklTZ7bHuNablVY3D7IDOdrjwoSB9Iq2KF/YJ9o18bP07r91uTJmvRTl+WdnMTVZBsm3Fo5bms8OJsggTc9X2tFDC8NATsDoTt6xWhUoM5svdEKzwCmK8blLX+G3prwJ9sVPi2CEfRjaOVt9Uc+QVbqJNtr9kPrxmJrSNU/pUelpQNsoqFdy6PPGo//mMXbbmr1WQDkcLkfArhNQhp5NBAJ02+3ln/lIhJAGBWcJOXlrMGpvhGPEDKvjMThTBr1QbB8U6lSKCMOPEYE5Q71OXZwLqHlwist8UavprZ4xRbTkHjHpZO/61BQKkAu4rWIXiOko1BYIV8vCxBYO4kILrZYa7T4lNbwDcv8AG5mUe3lWP1O1BDMpnX9T58lGJn20fMnXc+QeBVYaq4A9R2JVwRGtTlKWjfg5KoXbQ7UEgV46ejWupbEVehktj1Vq7hiz5rKR3z6TVY9ARVt2FeXIcNIoLIU9p0xKFfn9DLOUFsjeC39TgygRNzYao+1cmFmcjQaHdWcZcUXIff1oxvboezUSu6wkG+r5QljaaonD72t5ffFKx5v/bKN7+vhWXFVy2plN0AaKVJUes/NxQsCFwOzqtIoWSoEQqllQzhaXVzxaE7fTp20kzkO+4OyZih49DhCjrQFaEZE/R/DTC5Q7xitbPOTZ3+VxUYDqfpTVu8w0cE+wCknMmvE7uOduj2xBCY6N8JGeu7XJKX7Dx5Krcd3GJEgAvjP6mUChscoK4yanehrcNIclcxjM/jcA6VwbX5agn7ZzLKLIfeeLMApzZXyGA2prq+dh7CQ21zro2/cvBO/vJxlX5p5DekyGRtvkmebZ23wo2wrxV+LXhU+FuTksCbbujPgvq4QJjdT9QTICVql4C563hkr63nzXUb9P9tPfFPZRsECtfOVWkTSCkmy1QwqoGv0IwC8oFer2IrJxA4CQrITkQnct8Y35a8kR/lY0M3MJWTGC8356BRbE/qcjfIw4hqOMQIV+hclNSiXZKcYBz3j5LfQfLx6SbGM1hOIbfXzTh399up5GwRIxFbwh/ZlYJfezCHXXIM5+dP0pUO+FzMK/VPil6I1cHy+Mm5GxcuEUHK4CThKU/sVeDJdV86wm1AKuWkuDoKn/haZJ3F29lAgxTkNL3vliRWln8O9GccxRrtKXuYaLIz68pCK+6FOjr9U8nExfkBw9vg1eP9ptPVrAXkNqU8EOWgpLEntUZDi/OaPg1+ZlVMv5C4G7NBxi2l4cPu+4hx27lCdFTWfRaRMS9XI6UPYQl21r2E8OkFF4JaeVksT7tN4t4rEiuIfA5hitWtGt7l1FK1GtiA2gxTcsUg1mnIY5cDC8JLAdsB0vsggRT/aCXuhxe8F++WAYOpXOaEs4dHm2d4i55J/vkDY918zTugJUdaYyIOXYWg+IO2t/sn+ZuiiLCS5JZRSVCu9AyhXCwRbva210C5lXIYuG2LQN5JoHWS77IYHXWrxMnbY1VIxlwC04tfS//JZ0/f2SnWUD3sc65eVeagV4cri8LtIvDWfIFB9uJgBQvyrkFIV47u7TTB0n4V+yFGPi6bdwWXfKrdm8y2QNZMujVzWjiGzYczhfYFuy2AjWwDKr7CtiqE0qAenP9Jlo+zoNW0lAblNQF2WtDcOEz/Pcaq3Oqs4M+4lMmSLFcFS4dDIVhHtxJP5kkJoOzdlcPQr9E9LhrusKoZEEM4ruohPvzx0IMpY5Zd0OGn2o0BsUjCYeIL/RYOcdXWLokx9SembUAm4xSnNon03CMs/SX9ibG8pUasVPXiixRNKZeWrmT/KIH97KS8B9bti9Jd82juiu4tl8vbRI/gNStWXNvlGbxgj8sXn07nqM7kQ7JS7tSz5iwIiDM67PkH10ivB05EtzAfvT0E5nYp9NC2xEt1NKZ+ES380kdBrq6JGocT4EhmlCdk3iFvSQX8iX93s1NWT6JvBeCC2plI4MpmyQeM2IrGQXMAl0LDx4VWIp2cl18qioI80HC5SIi5hDgaVrGrTPqvD8LX6pFU6rNaRHQFw26yVLa8sEvlbjCBNQtAnXN4eGhTRIeuIA3j9tVmMXrb+60URz2hbOPU/ovQeNl5fViqiZvSHzoRToeYs1Khmg300OI64WRQes5TjbKRlE6gwdyUoO5gvqDipgaA9xJfzUY4r6IPJs4+WE722ucaSJV8+nJOFxtIGzUl7G3x3BWlFfSW9PPj7vlEjF3oIx5ZveyT2Gxhb+AkNo+kOu4Tu9hGAFPhx8v1a3rZsNfUZK1kpBxGJs2NGPYkIvjwIgxIt4gygAJS5+xnRbW7UlQiWm6PmW7lTbQwaIfP7knrmoYmVtKO2dAgGH6OSOI6cePH73DD7HA5uIp+KM6yrp4K/xpsB7Nl9mTnF/Kp/SMTMHQyy5OYKaQ7w85gc4NGH960gI27Q726Eho+yQgP9QqF+t75V7S7Yf8pVMQM8E8U9DBegA7H4h1FHyt6uV6ZwFuHZ9JW7v6Q0s5NH5i0a/2HBm53Gfw9sBYYY2isxjoM9JP7fUzcnFgWLdOeK81nsqwmYBOZ9W6+O1t7qzl+vNw0UeJi+h91Dv2ZN2V7x6OBBSjcEX42zHpDZtsf84Va/hc7rxDIK0NuQB8YNNSSrjQZRmmGcM9VvurcK1ysBAPk6uw4JbG/G/DnClCyORL46urg1nL47Mxd803XjTbciLBGRbgxuUzJ4Yq+vzq+Zth3BPGZnkEZzbpcBd6JYXO43fcLuS65p6H45eUraLFDBA1jig/w91j9iJxsABGMcKD7ioDVQVC4SzPQ5E2zpeybYDHJ3So1OmwBEMpPK9ms21f8+bXGBJj1H3KzHnJFSAoz3JnXxXLCf9bQToSSMSRIva6Eq0blHwcC0N41EvJo1wTP9WIg3j6NQEYPsORSnsFTVCqhzL1qqsXoC77Z3L8OhbBSMwLG8dLE3HpOFf7AIbW9taiSW9aAqsspJLelefBCUZOuXpob2Rc+w2wGdFAj7u3iJ59aFdwrmbaIU1UnFl6JJDxjXgZJqBNNQbmEHRDO9BURI44PFIww9IW/K4fNT52sHshymDMnu6Jz4jNVYZzDYJaQAzAPtwHBXZ6kXBbfNopQc0IxsVBgfHe4thJYTp9i240TmdcE54SikMtfWd44rgeWBixdZv7mt4GOcRH4Zjoxq+eadsDGAC44U3wAUiFmUl95Z+cfqFJipaylOIXyVycppGk3cKYxyr/1qpcuHtFhRPkYJkB58tQQ+sY0pw+vU/hYE17XHpItfM1Hw7/Sx9CumclEYv9JnXfrJH4vMyOklrVbXjO5vwhQrhnJmVmKeFQOmM2wIFqvxkspbYlwYBP7Fpv26Q9Cm8q1Fo0jKUjzbkcKyUxm+8fH/syGJV83FmiO5Eq5Dv/nV4bB+PvbJPl8U++cBsqV1VslkWVL1u5msUDiqbScnWLT0QTKF2mfg4Wbazo1VqTOQX59MK4dIp2RSL9NvqWt2httan+ZTBpn4bNe4/mZnpqGlbzvgzrud+RVvkyiSj5aBoSV1iKFHD7Khq0K4ib4OtIxTwnnBdtQhSd1FNBj0CivoUlIfduYOGp5EPX68DN6YvCMnqJHQjPNQgISQFirMsQ3aO+GsfQ2qtgeDImrfWq/FqiiY0qwStB8JIIdsP4NbaGthF/gzFPS07E+vtNKKOU+1oJdFJFfrp6Wkw9cQHaufsJJlwM6wNIIUpMNkQp1+FxmQWJt3g6GMV+s2ZP7RhzQElawiPkONEVblTfyI1T7+JeH/KhuA9/IOTUg0MX448QAxnAUkqELY6U9Fyc25dntnUrqfpiG4fjnBG15ZmXMm5kHtd8gHj2f4Uy2V487oTfuRhLkOK29x9VBht8jFSpm4QsAov0wvb7aaGTw3xM+xj4Mndbhx1fWrfjsoYhQRby0v4cBKF3PThMEHjetmCHVO65Ps7QkJWM+n1P++N4MjoacNCRDmK1mIze6vV9UTonQPCrB6YgmHjcNkpTWAn6cqQqQev1Q4Eu0cfeUo2pFHHXIs3HVxGsFi4zDjCeDbpFT06JD0+LyceBVwhkRitOG09LlzYfDBNgK7GqMvjm1SRIP+85i2uSSBfWy5gg7+kaktZF8/JWWdoUwKe//K0d/rmzQGvajslND069QKXQZzqhJAwd0eQrg1gsDhUy57Seu4RNNQYNyNjkTi9crtVMKGhtVlb1FlCnJLIr0S+d0ovr3A1h479mF6a0DtvvqWrb8biFkw4b6VUt0bdEYj2/i3QO5EeTmY81tg8VugNZk5J3VpZcpn54yHzc8hjgAvhhebwsBNs2XKwYNkKKR/kt+3kboFV53agHjWyYiB7DZ1C+Sxvl9vAV7mdB0AgUxrGgo/qOLYEa4orlG0xePqLF3spmm78KN4m+4vy7be1cq7fWptyw2yKxlZqCRx1hnobL6GUSFYi9qiaVfW6SnYEKyalD8hCvJfBWMbLGj24aRJPpPvdpaQPSjL9qMbq4LHwOoRjzK6moC9+OtUXi7+3I440EJUS/357vULxH+9QigTwrx4yNc7wo8h5BmisFy2nFIdjov5U1euOfnQ7kYRcaMblXAj6Nh9yNbqayHfe7skxRAdzvjeeiIKCYRIDO/pCbqR1RN9N/Jr2gMR7BKOv7QRnKkwncAoM1w1QNLnKaQsaHhbY2B2Vv4CApfPho5I6RJnPxtHnfowFu6e59TpMMWgtLTACjsGQDmGB/TSSVFUPgyWwA2qgWoiCRqqcuzE4zPFh+4PdPH6KHb2bTpOBfcYk7UkYSGASSjdPxDu5Sg6RgzXGIfDkXNO1aETlQbO0YT65rr38IU7X8QJWikfeLOnSXNWUrsKGRwsbHYGkl8Hhf5KtCFAAf/2ATtnYErJMpOnUlcj4me2jLq0H8wP9v8s6ZEKyVj3b6Q9xpU5ALAX77x7POkb4cRKoPG3aNKWP8Fldvsi+hdDP2B5jaxg+ErvNzPpIPo9rRtQm6t7zbJA3x03i1l9am5YKgsEtyl1WMqET+Tz0PIfHeS2TthA7c3Tmh+k58Ya7cIaT33iiJrxwEHKAR0RXB99zWODAxEqgteJzhm80HUWERVip7ddH4wqeFs04UnKwCYWgIML8xMWgHSNuSnNTxYKPGjUM63efoOuyzEfmgCNcqXyOky0etjzIxy7iUhcWZfqg5KB1GzDY9S0Zi5RN6sdXouzxdfgBa+nOok23q4gO9hcEct6FyaRwWc30oeUIa6+Jnlcjukv9osbKzu2djQaYRDx6YeGgev9oW8r90qzDCnqf6tz/TAL3/UdNS4Vf7b1DhEc0P1dgavVgNs5Jj6YdiEY3lAlzGJlVpYhOW9PjryRYhbxz5gAnPIn2weeDXZ4fi05d5M/Pgv5PBvnFx/w0jZf9ejccjASZYad1aWqdW+921v169ffug53VOuvVXo54G25pKSCpTLV8S0qsD3BtNCzI/fVwQyIis0vzK66EbIF/fptOFIa++nMruZGlax5TNB5IfrC7QCpt2scT/QP31GgbXRitchcuBjX5l1bQn7yXg3VQg2iiX5Cxyhn3Xbh3rhfu3OxDh9fYOx96lugoQzwJiTr7ARH8VR4kAA9Cf2roRUwcPp2FRpoEnOxDYpfcOM6QLl6a9OgkgxuciD3Up/YHkXc+wLFu8OxrLClz+8+PoQVRFf53yplO3z2kyLOQxDgug6QBlaR3638qMH1p5Q0VdNoHwSGAVDohd3WgxXpxTUNu77e0oQEDpyB6KxUicx/jik3eL/CuM29aHAXl71oqf+RXTx6gJIbSOjZJCMwLN5oViwFC8+Fx6KbIIaQe0sY/4Xt7sdA4qQxgp81TcX/YEKVP11aI3ThptWy/F+PQ6St5Wpcwo9ZmVbaKcAoMrblNn7exOO3ZbrflzLmMV2u68id0QVRaSehbAFLeyvsxB40nY5bHlP7RrdVe5jeonW30BFyVpcsqeBQG6+tGHHI6xxMIXnuAItuihUtw5+0Oq0GBk/foGyyr1q70ZB7yECVho2hLMGab/hF7VN1g26yWuOAgJcWIvDRTnovS2upTMdqfkfq5hquRff9cwHJDFWFROppZCeNOCgqyLfXwWliw8eP7Sr4xCfh2N8bugB3vZsFNFJFAt7bZqnjbhrrsVIQo9Xdz1iBBhLXy+73vG7tfuPuTVqwxvain4+DTEoKU/yStv/zHjViaMB0cQ/1Urwr340vUT5lLsbSeP579zM30y3f0p9790ebYa28nVc8nlbkCjofUBawvOBKdIQRqkj21PkUI434hRXp5vNZKb48H1AzQcKsUSPBL09I54eSglhvw27N8iGgf+gjt9UfqRoOMZDihlaAQQefiqL1rVEJz6vquIKRUonCSGMjzulmU4uHdbSlvUn91M0xdZHvJNFGV0bi5nvbnDZbEkCttxU75bZZwQCOCAwn29awF+j5sGfGoSalDeOVkA5QevGclQed4+V24j+7usXINkMsHabqm/U9FN949tHT3IgruMEe5h7Kob3c2VcKmQhA33ZlsJ8+TZ3dVgAng5in32Vzv5oyP7NemqQnREzqo96SK6UnzEnVowdd1AE99N8/4iElmk8i9tdGrHWKpqu/udV/yQNhP52uyB3DlzZqGPHtA1xpI+5YqA1dQWjkGvW06KkOM776bMHL1DgmGNpSP+gbYl6ZGnINorzK9+kFg5eS2Rp4zm3oWU/KJW/rmZdaJbt2+CcABV6a9v6yEJY39ISGmLFYaTXqsbf2xv7hKO4RVsb9am0vQJ5yqcYnM4v2rrPkuNlB2NpaLLagY6zu/+RtTBOUw03nm+KqOH6wyDT9j6Sb5PAq1Whwy7jIQb6o8ynkc9nWO776rwViQbpJyH8DABR4pcYf/n6u+EnjMx6nNxj0UOOnk0odZZRQB82kv466Zp2novcC92ZSGrJ3Z/lQ3K98fyamx1M9xMSWpYvkNgeeBcJndxfvBEOZJBz03mwfZz1bKMiix5g1Ky+Wguc7oh++aT0LwC/RJsnpCh8ziM3mEuQjWJBllOF1Cr0EWwuMNYhU+Lb0WTAeWcHM7CnZEeuyELzJsbg60BxlWTL1HnKHQ5TZnQDXXB4mIp7g3CM14u5osnzNxnXKMbXcyocYGuhF5nT7+Q1xCrg5uceBp5ZPnJ9LFBSwmaY8bLHDC38Tu8AtXQMufwGbG0Dpa4XZJ/IVzfrE1KSEPpgdA0UJS0/L/PrbxhwVPFKXzVYSGZu0AW9HW9yzf/phdzjXGKgPR9uLb1w/wzD5SrdCPtKb9/m1I++XYVShzjj0fqOwzV5eIizVRhrs1alhkdvK4XZHAPgx/l/kz/kWV6gFH+BRiyNxuPxvKxlM87eNCKelJGs2hhxYOntCNSM7WoS311eDtUvuh/3cm0RoTpIwGBd22s79MnsmOtEhNBxVIxjaoW7MECi9HxAJLGWhjm8JS3Rtkcku71VdMuj4GR8E/Kxt4Jf4lgLLzZmgJMR12R4vxJjfcx3KGDb8c8nK1MrGUTj855lvYCj2jScXG8QESGSVrzDgA+GffJdR1iNSR86dP1vO7xAFUgRvDZnOYWcx7UC+sBbQH/Idz65HWhiu0ypmUyuJI+Le1+21vEgWFt6Y1k/XZeLaW6l9sT93yCtpCA0iaMrVh6EB79RJ5JvctxOtxP5IJ5vDYiztYX/Tcl4lInGj2siQgQrBzsZUR5HiUFf6+08M68EOHApt5vQKZD8fH1qfnCBFgFiv5JxlN5CpSvaSvTvQY/R2gID/4xhkesOBV1zmR3H3UpqpZdJttbHm2Rf8MxuMy1fJWD4LGaCgjGbV7gikBi5Isy/zH68wQGE+0/eQdoyCDUc+4emCQ3TIZa93lnYmX1h45UunVlRMHeF+qRLt5pobGWiBS5URaVoNFvx8OjJ7QtQCkZhI2Fgnt6Ulq2H5QEiRk9DOF5qNNQdpPKIz0n+mf1LJLAY/UOOW3Y1+u3j0oJc35eqHEDlLO77wh1Z3/hYwbln0HMjakmOiSBPXXyB3huyJGpyddbzFjI3gm0Vv8GeibPtif+eRWjsvtAvJZ4oWwBTIGp2P6skyWw5EORud+a4keDYoryzq1fFjub+PmMXIRc6Q4XH1dIHZpES51cho1+wDN01umkR4quSYNXZU4K6mknauyVFRQ85+JaWfVAC6W5M7S0tEYhcvNYrtohUZF84d2oim1Fp3mVprjiya6HALyJwr2fW8GoXAwp4T7/mLo6sEni/j//AkLovwsq6+dZOkNY+blEkSdmb72WFtL9Z3+sNQLsM8w343X9T0p1ttcop8dIAsPiHMJaJM2oFb2VlljSFAu8IAPSYpVbgPJNOQG830OgYEwi8GqBRktMBmf4eZfGuLBrOhGMETi1QX2Te+GUPctzXsv51KvPeBDd2zBjYkVIaDCDNhq2HFiCwT/cnJMK4VX4eozKbX9q6VhtYJTZu1b8xp/QvyNjcMcMHu6+rEivmBsqHQQFdZsQgKuU3j9oFVrMd0xg8veyqgNZgauj2y7uieleg5dQngzlOusG2PBriV6UUe6FiDprRPgy8IWTeWYVy0VANzOSs250XVTCzY+F/2GBfwWES0yO0b+8AU2l4ZVJQ8XqRPSOGfmAo9s8/gBEyGhC2bS1hF6HuD8F10annrDmp66uh2IlZl5T24NupDrrPF7pFwPkmFFiRDdoIOZnL2vHUKgRWjaCytF+edJXIfYnp11OJEbc2hlteN1wCtyCQAB+8Lg7zhhICDJ+9VtPnepoDfkhviIoVMqCwf1wsl9s3J+HcoUSbOHLEYHmJlOtFp30QwZtbpznap14QJHTMWL69MuJWmhScUtdHM24OYxngxU6Zffdsl5nWZ+bqDchuV3Zs1JnjtBe9vmHHr6Q+G2WdAhbq3/APFFHuTMGfCSkkXshTlcmdf4zDrVDWM6UBxzIEFpUpxVpFj3vRHuLUucQfe1l7ETHT0APHQG7+pfJru1KoGapn1ePB4h42G1aadP2c2oTGdp1kIBICES2tyOUGEX1T0PgajmG3D6GSXlja2moLiO3bkgmX4kOaPcE+XQWAQOkHTgQqEbBjA+3F/SPU3IKePFrAHMk4CvmVpkj4jX5NejGIwrU/GSDCZsvQFD60IU8p97KzkvQz1PtzkUNwP43vGX7syekDUdclAkGXvYB3ALK+axL6Vyp5RvG5srO7xM8i1mnOmhzaOAlM9blsFW1tbMltzhCmRh6gFepOZXhD/BwsYHFVSlpm953f/g4Fx0tJ95mP4yTfcqqVVPUyVGCDPktsBTTprKWbclmUlbfo7x4Sma3GjgTS9SK9W6QdnLYvZRzC9IzLW4CIZ5DGdH1GdfMK8E9Rp5WLL39vsDcrFtQQD1aKmh4p/qP/tJaDVHIQTU8LE/1xHq9NCI+de5fsKNbMAlSfuYeFXFzp0VdwJ3Yd362h/E6GsUoAOabgw2tgay0xqqWC+3QOCHuGgllwckV5ADmmi0XAdbIfLzEA3vjwpW+2VMXDJFoBl45GtOTrW5BuDAdyaYYurWwSO4pmRXasQLPvWx53Lee7Y1JYxwkF//Ewk9UBi6+tYzYLkzDxwLWfRV6X/YA3MRdJF/lWERxxhB5DdXXrRmIkYHPZvE9psjUPxFNsquK+SztvKla50KCLQcGlVyMOUdgkZ8xiPaycc6vndOnxN3ZA9uvZpSghNIgYLMLsNkzFcLX41xXrzQPt5jtUIHkuTxLr4KkRYYNV2jfehariuz5eIiMVgDmeTkldWQPVkReb27Vt9gPveGBmM/WUbb2/6zP4k9FBuxJ4yWozRiV4kbjcxsD+bFM61WvgzLOhQfRbOiZTySfD5LqFJJKuJ8JHBPfCA84znisRnwAmKg1hYCXd7uAdTmmvADmE+THFkFfXogbCvWfMjN/bWILVryd6chMrmNBA/ETwrD/qaIuU3AsxQwpLN4Fwk5BKyqIEskFdRXzMaqOdovtbSPLQNcsSaZgdSnJPtzhpMElMutEevlYw1kUgjUcd8hRDNu/2jKecTahWzF3oFPY+gOtoMXdVE+JE5clpjUz1BqTFmD1hxcvQ/u9svQYrPK2xO7oPvTxPDXP9dJ46WhBKoIzqMYLpPlKV3fLYSi7Aq2pU6y7w8gJIhEQu5BhUroYU9wfPgwUNMhtiKsIsD9GbvF0y9q2iLKPa+ndcIP3/ZvXtHrp6t8BVZfmHdOMTYGD4x3uBsQs9P1T8NVV8JnPHptU5A1DbqPgfzGpMlhEjcCODAHIiK6ACvlmt/5+MYi0buMzc1wccBCO0BVZpH3fGj12V7s37n+wVfw8SJ/EJ6yNG7W3pZakg0p44fv5fNEzrPp0eGsB8gWdvRXxVmr3A3qr3f7s6JbLNQhiIgKd9MshYsmNmv643MjGaBUJkOiyWARP6ZRlpiYBB3R960V++SimGUsFYopM0jNz16zghqekOU63Ms4qs1JAvbliIFV4aq3iHVGK5d9cqzHAPocqeQqgDBe+9pKov5491DxriP97xcB88ONxhc9Jx3RL8hCZVy2gplHj4JA+TBnEbKfKscKKsPTNSo6vwwE3LwoEmp1gnGayGcuzsLwx8aX1UoTOrvfNZheXHb73cgPXSKOl5T4Phx9Q1obr2hWawPzPOSs2faKaRgtY3SYT5BhCmCOzLpuOOiDljLqE8xw3uSvoAowabeIx6EOXU1kI2ZNaHjoRaUzKxKkSgE+TLEBMsU5rpTIPsLsntclvOVe2bFx63libNsN1iTgLAtY1/0Kw6k2ueHmSd5QOxDcg86eamezgVkGTUQv0t0uCa91QHFlrEPXrKC9AboXI/lJVumNy7vQCv/GQeDT76vW4p6AAqPF5egrTYwU6XqJ3K05OpCSVLTihM3Ojwal1ukpVYdrGN/cYyL6ixFBkIVqBjZylDeC5EU530RcppRiE2XRL43wgNqmZCBl3MIGNO6lr60/cnAAtiYkxJGUpL86qq928yaTvOaP1OZPgMpEvIExE39ONTzMS95Tc+SSXh8QeH+RLvEhbRGXCuG/7Yo2dwbgJXQDM19vVWdJ3mf9pnyhYZUhjCHk4CjPHBIiik0k+iPGWei3/GzA6MkmGnsRYiZDn3a95/boZWAE2vSHhIVPV2BJy/vjhsyRAajZtDnfFWhnxWeshSrSSfzu/JGXEBLvrF/rz5KG4fGn1dHmUlUQ0WwTcOe9QSYrSHZ2QDvWiefQox1k6Sa3l4nPQGpTIipoxdfhj1SQLyx8StqxTWgDwj8N0RhuSYyhebQVf7ZMbcvGVUGEDu988cz4oTy+5k4WOjvA6BaXvbVP/RvvQimwN0YGJKlT88wG+OvIR35OHB9Gtk5gysaNyAQjXqQlFKNbjn0sqDMHZg+bf+YwXE5UrdC/2UtfdF4qBAnqcVZQbWmPICy1JqxEi9BmmzLvi+tpHoCo3EymQxATBjpqBrdbQrbByXnS/kDBlpvHeva2QhBpuIcZIgtZomFU2Qf6HHyAVL9spnHaKIwICIscIKYALuXiPhn9R++NbBZVUNLvaRWIG4jy7WL1+dhAUWG6jAjt0YrQft2A+BFpeaBMjSdjm5AI0Wo1c0oGCLLQZTg0M4nVPDLYehJ3ukLZ/QxGmDsuELeMZLU8s62jMGBgVVxzhRtZm2CnXfnGtA1/PeTqCzn3OQnzEF/Uy2frPfuy5jg3p6kwIIR+W8EJ4jf2rQdGUwZ5WqoipwwfFG+svZpbb1Cvd4trVq3WBxumRhgbaHEOHxNxKFnabH+H6yaJbGx4Fr8PHHVIaYipjJOMBzevrhpNiz65qfwBnyTbvhiUzW331HFuiNPjl1MgyrPCRjJzyELbp8bguKFLx/E32XQpfM/HELSjJYbxo2fBnPxTRLz1IihFzlOYNij3gmOQ+ZFuPFS/GQcv/C/hglOZeZhT6h9INV/u3vSJsbAfK4tLxCybC9l/h6ZowligiteyLjLsdGZCI6gnPQujcXGpq7hutepdV9Tadqu6j8aZqSqFR35ZVDnc4Yk8uwzog3HfF7BpSekCFxD+FIhJB3hrDvkaIbJ/2Sqdp92WCThLdROLFPzMWuo5G2tiEScmo9OZQT9R3MDi26+sqK4vM5tR/Zm8JkHaLzd2YOhyESz/ceg3XudTk4scnNV3PDykmn+aC7nk1Vs957MOCUFSmJetaS6AAef55HkLSxYTg83lhCXeah2j7bHJ2RsiMhBrEefLDDdUTAv/4NyRYcxw2OF4dAvrtBbPS1m3MU2rzZQU/bFuqTOEt1TJBLoPQ7YpxqoASagLM5kvKkmMcn4a5w+/di3PQ/w9o0NQpGLtW9K8YBy03H5mKL2yjdHkmTWHbhQU6kMkEiM7JiYn1TixiX/0+K/1qMpE562j7RSuUTXJ6fZgY8IWcHErNnht1KsVRd7QM8CNSmPNUke5cyRoNfrqx5Bwl2fn4EeetK0HP4CkYEJkr79cy76ocov08TOu5HO0c4jWyZJAGDmSvFRHLf2X2O/fKb7KUdg/8dyVDD5gGcjKP7pxfoAK+AYVR0b+yqnqee5VQlM4IFEhDSpmM+/UWQNLeDj1nN7WP2KCkesSj86PgMcMsjzQp4xX86suvaRppULQh62T9xjKeGz8uq/m61tygOdnUSFVF+0ncmaabjcCjOkNSMVqhmKibgw6BprktwAOHpW6Z0oU9U8PnfPhKPMgnosLGqxMHkR5TZMqPreiJh3PuDldB3ljKtIgoISY9OJ5gobv7m8G02BkKGOzK+/j0koWqBAnA4G81zPmKAMm7y1Bp9jiUsFfxWmYKktyRMRKggr0joUwTVj9ZonnRPOR0PsRRp1unfJ6aMHNQKUTFVIbjnDK7qMPgDpkecraCyhcGsg3XOHZO4RpBIMlY5XU4lr9WYVyYfjI2cMLm4wTg0DJHmDig2EIuSs/2jwYHvDRSAxBuzt1YE2HzeHpUlpJjTW0DxziMdxKy5mK2qgTDrPUqXWTjyK3w/zRn0fsS+he90UcuN/cA8jLo28djfvYcBbVYI2284wioCqrO/FviNcsOXnQJt7ooWcyU+7RsEmVomAQiFbmcGbQhS1U6ZBXip6VzQgzxlO9QA9JXPz0q1ZckV5tV2uX63DnNKS+6jUSOYUE0LWzMpdbC8j13wdzQn5HvWTO+Jbz5FBS2snG1YeNVE9FlSuJNP506ZSuYPSS5T30Wd2Q+iLtL8HMWVa7Wrp7oBGRJBlXbgtLgEComxn/JrrROgHQsvoFzRRQ3IiStRKNJY1EN5WoRuLPv0LLipGEel1JCFFiGOkst6HEYFgzW9oVGBO/5rF6EbPKgZjzH1RfyHhoQ7cx6PzDgqUkPXtEbS00HrqwpWLIFKunJFPfVRhNB+S+xJGiAynwpuR76HKaFIcKbMzb/LtN6hC5nwVh+a5yxDkK8bVbFa+kR4uWdb9NcoC1It/0WgxhAONseBFFpXMqpzc05wTaOo8tesVP3XcmDxkH3kIf3w9hSqShGeRXDA5jUYZ5f2M4wewhLDLHkPZTHlSV9HjkXl4fOlmLiMF3OQYvVBtnnuvzf42VdU0AAQhcQRsuxfkei3NJ/CpaR18eJcn5LaHS4lQ6gNXLEdiO9+4z2dAZyz4p5DXe81O7ocwGBIxzUOGR8kzPuknLrm1JIsawQrmPFU47VMR9Fm5VuiWOCyOBd575Uy2FwyeqNHsEVDOhkoiDNdkdfn1Megz8ztuCyx73vNf5b6sdAZ0DQ39U6zmMkeNsgB8eBH6dboK4mdzy9dWTQJnjb9R/+zo5lmg32TMbWPlJtEQT393sagPK8Cwtggo0uvw5mDHWmaFs3eHAthCo6SV8syn1pcEBPSEuo+q8vJjXCmgpCezgDrXSK+VAtOm+ZyjbwPrSSymGdoE67fIJCTeXxMGnjMhFtpQIW/Voa4Kzi7M69ScjFIVIUQEZGDchmu34nvCe/pIxH01uwgyOa6AQzVg6vH0DVAHy5UkynaHRvBbABJSUC1//VUu3sbm02zObGA3nsJuQ4t9v3Y+3urVsLd3LCUtg3S0RqLbfTdKw5cOgP1VebOAHPqjCACAfVu1sdVIJI1QNxN8vnlxGFh1nX3DqVUgEFU1obDaGWlis+ExpT+UmRlulCjK2FmKEYAOiC8/OnrYt1FalNT5O5ajCvlU7QNf5nto1w0o53qKZ7GaQc3YnD+qbmd9duqxO3hinBsBMu48RGo4BDI7d4XpbXZ4qs8EPKIWS2oR/cvLR4AHx+qRrFUSELBmubwtgUbFjini/VxgbyINfCu7SqeYGsOVo9TsXQSwYU+0ZRP8FrlxgCCqcA85il7ZbeJ4RQaJIZPnfxyid+ZoJiFb2S8M+wuWFO8Z37dLzLk2z6D8Lr9NH3N6ZQtV2URz8f4Q/AH25t5zvuTdhXEWqweDjqSAnt3LovaEdCExW9cUBX0Ee1GFk7Seg6BV8oy3VdcEaqYlS3BopZ5D4KYSgEOgkL3A9HrAwHvid3rmgB0Ke+xfBhb1GvyfJSrm7dpvi4Crcwpf5m2/cu9bqu7tRC2YMLfTqvtkfmH3kGDC0Vmas5PeWk1DiC6MsZEytbks6xVM9kHdgep34g+wMrzMvQEo7tJspSfiJXRFM4ZfiXjBguDKR0h5+/VQuEaIEJGJdDpqk0YcF+98N5prtdyaC5zM4mNRkthxqEAnPQyKyPFHJU6ajObu0vzQID/PwDruaWbzZ5oDr1wH/unGQCBiuoeorc6FMsLTPKWMS62BxcVpOE8CvRZ/xdkEslFljrwATDikcgIwIMsZYUi4QCgSzstVqChpYNSsMoMRiBMBMrFupA88zNeqNmkMbwJv6DB1WqL2oDRlDIZYwlnbHSuRO/qlRakLjwESaYM0rrVM2iAG5Oi6zZm/2aJY7CGyQtlsZMII/EebIYLupH581pb98KeMOm4hTdNHDq+etC70GUkYvP88y2uo9CKYO6r0s1T/CmClkjIGpRGIrM5sWcOJFnqJyGsuvcDxzA/TphnY4+OUSmoBEUIZmUK5Dtvk8ha+vJrZLz3hRXcBBGnHBcgM/OKVSYaykj5Xt05NOJ29Rnf1J+UPV/sTOhH+E5l2YAiKcTwkeNynCvgleovk1MF9pIGF7xK9WRjLQ6HZKBuxE/MhHT+3p6P/BdNt0gxJT9mIw6mQohw3sEPu7avvi8oa8MeU4+vin1ct5TtXiOz0I+MjhwK8GaknXi2SilJtCI8MD2/amXit+Ol5fW2qeo44IMY7eTQWNqBQcZBM23vIXXyHMv1vJ+AcS7jAi+1E2Hx5ffstOaEBLXGNTTSHxlUUviw/QAUpybRpinayfSzkWuqwWa7Nygi+MXQfUh04OzBVUE+a9f+r43Z6cZL5G/S1qCzS7KYvwjM/IGoK8rAiJGWn/Ubrzlps0AW0R3v8+5j/y7PvopmuFnlBAiGXcsQWy+WDaDRUOKH+LMbwAJyPkioEJMENRR0OUkAc3MuS1MQRFUhLU10M8Dz20QomMktmUuNkVNi+sCYk1PM0r5vDHHGTfHFoJsopFY3TYpdLD69K3Y62m4OQ6THfHCIvHv18C4gyCiEiBQlp4OSKwnkLZAhLYHgPIOWBMTjBAAL3sfhC/iWAq2LOV4cw+M+4kXXMPVG9DidYCR0uZuyWd28gJwYdjhBA4oalNNmOD0Us/dnVAfhiLyGyDtrGnjKqcRNL6vQ7EgnrU8F9fpVmLo7U49w9CAfmqti9zyvFlXoP6vF3va3tMW8sSqIL6+nQm1435en4tpeIZBd9Owe/GlAjWoy+3/qocdMQ+6P5Nce8LEXtX7wlFWBgLFSR0mQbwyCQXmBZZM43SLmLKRRxk0Kv2VcQKsnSdRRnKbM8AucfQuyO90n6Y0P8YHD3UHjQloHjrIO/AnqXsYj2lv3SjjDMxk7eOahCfMS8z49HIZXmOTYh98hLBBeGR7D9c0N8UOlvvyf8qmxtesB6ktdTc6C2B0HiZhVZ8no6bft2kzpFHvbjkIvDhc8RLdjCiNH7Y/AwCt8OrDxrBe681MKEXvtW2g7G7oPfv3svp2IhSzPgAq3mzhYIt6dY2X0hQworRlMZoi4G2KFcxyN++g8GYQhocfGe27X494BBEPTkjKZyfUnbkpcBs8vB5Dk8a/gUj9mJkyNyMALWr/OwDxgQKLVxfmNwNmX/wmRgQ3U5juh38tzpihPLsbc2Vx8bYLa1m51e43L7kJilj0z8E8g+2qgRqD7TP68p3sorciUQfMLY2Ce7m8TYzK3EVz1w26elF3U+zBCU58EztjnV3hiMUQe0L8uzW2xiPU1bVOsM1bTdtjG57MlEUdm+tCE5jI0ZGqpbMMfv5q0uxFWc9nt+buxzlMw67+JFg3h3mlYMhLNHPTpW2RSHoNpguXzX1p/+JkbcvOUSR57xoKlYrIqjcpO1564EpTxQvuTuuf1nf8rrCdP/z45MK9zO4cgit5WZTLnBWqEEdwCuOsJ/1ru0zYx6kJBRPtA6zI/IuGdYSdCmvEpbgub0YLOk4q4QpUUL1W0a0GxLzj8c0cbq9gwm89NbuVGOhGmI40G2u3J84CkX+7P3hSZbxQN6ar1dFNYVpoFhXzHCLxQw68FRGVL9Q0wOXQ4gAEVYSUa6AAAARXhpZgAASUkqAAgAAAAGABIBAwABAAAAAQAAABoBBQABAAAAVgAAABsBBQABAAAAXgAAACgBAwABAAAAAgAAABMCAwABAAAAAQAAAGmHBAABAAAAZgAAAAAAAABIAAAAAQAAAEgAAAABAAAABgAAkAcABAAAADAyMTABkQcABAAAAAECAwAAoAcABAAAADAxMDABoAMAAQAAAP//AAACoAQAAQAAAA0CAAADoAQAAQAAAF4BAAAAAAAAWE1QII4CAAA8P3hwYWNrZXQgYmVnaW49IiIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJHbyBYTVAgU0RLIDEuMCI+PHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj48cmRmOkRlc2NyaXB0aW9uIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgcmRmOmFib3V0PSIiPjxkYzpjcmVhdG9yPjxyZGY6U2VxPjxyZGY6bGk+Z2hpczwvcmRmOmxpPjwvcmRmOlNlcT48L2RjOmNyZWF0b3I+PGRjOnJpZ2h0cz48cmRmOkFsdD48cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPmdoaXMvVmVjdGVlenk8L3JkZjpsaT48L3JkZjpBbHQ+PC9kYzpyaWdodHM+PC9yZGY6RGVzY3JpcHRpb24+PHJkZjpEZXNjcmlwdGlvbiB4bWxuczp4bXBSaWdodHM9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9yaWdodHMvIiByZGY6YWJvdXQ9IiI+PHhtcFJpZ2h0czpXZWJTdGF0ZW1lbnQ+aHR0cHM6Ly93d3cudmVjdGVlenkuY29tL2xpY2Vuc2luZzwveG1wUmlnaHRzOldlYlN0YXRlbWVudD48L3JkZjpEZXNjcmlwdGlvbj48L3JkZjpSREY+PC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InciPz4=",
    wallpaper: "data:image/webp;base64,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"
  };

  // runtime/web/js/table.js
  function createTable() {
    const w2 = CONFIG.SCATTER_BOUNDS_W * CONFIG.TABLE_OVERSCAN;
    const d2 = CONFIG.SCATTER_BOUNDS_D * CONFIG.TABLE_OVERSCAN;
    const geom = new Pl(w2, d2);
    const mat = new Ql({
      color: CONFIG.COLOR_TABLE,
      roughness: CONFIG.TABLE_ROUGHNESS,
      metalness: 0
    });
    const tabletopChoice = typeof window !== "undefined" && window.POLAROIDS_TABLETOP !== void 0 ? window.POLAROIDS_TABLETOP : CONFIG.TABLETOP_IMAGE;
    if (tabletopChoice && TABLETOP_URIS[tabletopChoice]) {
      const url = TABLETOP_URIS[tabletopChoice];
      loadImageAsTexture(url).then((tex) => {
        tex.wrapS = gt;
        tex.wrapT = gt;
        tex.repeat.set(3, 2);
        tex.offset.set(0, 0.25);
        mat.map = tex;
        mat.color = new Pr(16777215);
        mat.needsUpdate = true;
      }).catch((err) => {
        console.warn(`[table] tabletop image load failed (${url}); falling back to procedural wood`, err);
        const woodCanvas = createWoodCanvas(CONFIG.COLOR_TABLE);
        const woodTexture = new uh(woodCanvas);
        woodTexture.colorSpace = ei;
        woodTexture.wrapS = yt;
        woodTexture.wrapT = yt;
        woodTexture.needsUpdate = true;
        mat.map = woodTexture;
        mat.color = new Pr(16777215);
        mat.needsUpdate = true;
      });
    } else {
      const woodCanvas = createWoodCanvas(CONFIG.COLOR_TABLE);
      const woodTexture = new uh(woodCanvas);
      woodTexture.colorSpace = ei;
      woodTexture.wrapS = yt;
      woodTexture.wrapT = yt;
      woodTexture.needsUpdate = true;
      mat.map = woodTexture;
      mat.color = new Pr(16777215);
      mat.needsUpdate = true;
    }
    const mesh = new Ra(geom, mat);
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.y = 0;
    mesh.castShadow = false;
    mesh.receiveShadow = true;
    mesh.name = "table";
    return mesh;
  }

  // runtime/web/js/scene.js
  function createScene() {
    const scene = new Er();
    scene.background = new Pr(CONFIG.COLOR_BACKGROUND);
    scene.userData = { polaroids: [] };
    const { hemi, key } = createLights();
    scene.add(hemi);
    scene.add(key);
    scene.add(key.target);
    scene.add(createTable());
    return scene;
  }

  // runtime/web/js/renderer.js
  function createRenderer(canvas) {
    Rs.enabled = true;
    const renderer = new Pa2({ canvas, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputColorSpace = ei;
    renderer.toneMapping = Q;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = l;
    renderer.setClearColor(CONFIG.COLOR_BACKGROUND);
    return renderer;
  }
  function createCamera() {
    const cam = new iu(
      CONFIG.CAMERA_FOV,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    cam.position.set(0, CONFIG.CAMERA_HEIGHT_MULT * CONFIG.POLAROID_H + 3, 4);
    cam.lookAt(0, 0, 0);
    return cam;
  }

  // runtime/web/js/frame-loop.js
  function createFrameLoop({ tick, render }) {
    const frameIntervalMs = 1e3 / CONFIG.FPS_CAP;
    let running = false;
    let startTimeMs = 0;
    let lastFrameMs = 0;
    let rafHandle = null;
    function loop(nowMs) {
      if (!running) return;
      const elapsed = nowMs - lastFrameMs;
      if (elapsed >= frameIntervalMs) {
        const dtSec = Math.min(elapsed / 1e3, 0.1);
        const totalSec = (nowMs - startTimeMs) / 1e3;
        tick(dtSec, totalSec);
        render();
        lastFrameMs = nowMs - elapsed % frameIntervalMs;
      }
      rafHandle = requestAnimationFrame(loop);
    }
    return {
      start() {
        if (running) return;
        running = true;
        startTimeMs = performance.now();
        lastFrameMs = startTimeMs;
        rafHandle = requestAnimationFrame(loop);
      },
      stop() {
        running = false;
        if (rafHandle !== null) cancelAnimationFrame(rafHandle);
        rafHandle = null;
      }
    };
  }

  // runtime/web/js/polaroid.js
  function createPolaroid(id2, options = {}) {
    const group = new Tr();
    group.name = id2;
    const W2 = CONFIG.POLAROID_W;
    const H2 = CONFIG.POLAROID_H;
    const borderGeom = new Pl(W2, H2);
    const borderRoughness = CONFIG.BORDER_ROUGHNESS_MIN + Math.random() * (CONFIG.BORDER_ROUGHNESS_MAX - CONFIG.BORDER_ROUGHNESS_MIN);
    const borderMat = new Ql({
      color: CONFIG.COLOR_POLAROID_BORDER,
      roughness: borderRoughness,
      metalness: 0
    });
    const border = new Ra(borderGeom, borderMat);
    border.castShadow = true;
    border.receiveShadow = true;
    border.name = "border";
    group.add(border);
    const apW = W2 * (1 - 2 * CONFIG.BORDER_SIDE_FRAC);
    const apH = H2 * CONFIG.APERTURE_FRAC;
    const apY = (CONFIG.BORDER_BOTTOM_FRAC - CONFIG.BORDER_TOP_FRAC) * H2 / 2;
    const apertureGeom = new Pl(apW, apH);
    const apertureMat = new Ql({
      color: CONFIG.COLOR_PHOTO_BASE,
      roughness: CONFIG.APERTURE_ROUGHNESS,
      metalness: 0
    });
    const aperture = new Ra(apertureGeom, apertureMat);
    aperture.position.set(0, apY, 1e-3);
    aperture.castShadow = false;
    aperture.receiveShadow = true;
    aperture.name = "aperture";
    group.add(aperture);
    group.userData = {
      id: id2,
      restPosition: new Ts(),
      restRotation: new hr(),
      photoUrl: options.photoUrl || null,
      caption: options.caption || "",
      hasTape: 0,
      border,
      aperture,
      /**
       * Swap the aperture map with a new texture (used by Plan 04 when textures load).
       * @param {THREE.Texture} texture
       */
      setPhoto(texture) {
        apertureMat.map = texture;
        apertureMat.needsUpdate = true;
      },
      /**
       * Stub for Plan 07 — stores the caption texture reference; Plan 07 replaces
       * this body to composite the baked caption into the border material's map.
       * @param {THREE.Texture | null} texture
       */
      setCaption(texture) {
        this._captionTexture = texture;
      }
    };
    return group;
  }

  // runtime/web/js/scatter.js
  function poissonScatter({
    count = CONFIG.SCATTER_COUNT_TARGET,
    bounds = { w: CONFIG.SCATTER_BOUNDS_W, d: CONFIG.SCATTER_BOUNDS_D },
    minDist = CONFIG.POISSON_MIN_DIST * CONFIG.POLAROID_W,
    maxAttempts = 5e3
  } = {}) {
    const points = [];
    const halfW = bounds.w / 2;
    const halfD = bounds.d / 2;
    const minDistSq = minDist * minDist;
    let attempts = 0;
    while (points.length < count && attempts < maxAttempts) {
      attempts++;
      const candidate = {
        x: (Math.random() * 2 - 1) * halfW,
        z: (Math.random() * 2 - 1) * halfD
      };
      let ok = true;
      for (let i2 = 0; i2 < points.length; i2++) {
        const dx = candidate.x - points[i2].x;
        const dz = candidate.z - points[i2].z;
        if (dx * dx + dz * dz < minDistSq) {
          ok = false;
          break;
        }
      }
      if (ok) points.push(candidate);
    }
    return points;
  }

  // runtime/web/js/tape.js
  var TAPE_PALETTE = CONFIG.TAPE_PALETTE;
  function createTape() {
    const entry = TAPE_PALETTE[Math.floor(Math.random() * TAPE_PALETTE.length)];
    const geom = new Pl(CONFIG.TAPE_W, CONFIG.TAPE_H);
    const mat = new Ma({
      color: entry.color,
      transparent: true,
      opacity: entry.opacity
    });
    const mesh = new Ra(geom, mat);
    mesh.rotation.z = Math.random() * (Math.PI / 2);
    mesh.position.z = 5e-3;
    mesh.castShadow = true;
    mesh.receiveShadow = false;
    mesh.name = `tape-${entry.name}`;
    mesh.userData = { paletteName: entry.name };
    return mesh;
  }

  // runtime/web/js/photo-manifest.js
  var PHOTO_MANIFEST = typeof window !== "undefined" && Array.isArray(window.POLAROIDS_PHOTOS) && window.POLAROIDS_PHOTOS.length > 0 ? window.POLAROIDS_PHOTOS : [];

  // runtime/web/js/scatter-layout.js
  async function createScatterLayout(scene, textureCache) {
    const positions = poissonScatter({ count: CONFIG.SCATTER_COUNT_TARGET });
    const polaroids = [];
    const textureLoadPromises = [];
    for (let i2 = 0; i2 < positions.length; i2++) {
      const { x: x2, z: z2 } = positions[i2];
      const id2 = `polaroid-${String(i2).padStart(3, "0")}`;
      const photoUrl = PHOTO_MANIFEST[Math.floor(Math.random() * PHOTO_MANIFEST.length)];
      const group = createPolaroid(id2, { photoUrl });
      const spinRad = (Math.random() - 0.5) * 2 * CONFIG.ROTATION_RANGE;
      group.rotation.set(-Math.PI / 2, 0, spinRad, "XYZ");
      const stackY = CONFIG.POLAROID_Y_LIFT + i2 * CONFIG.STACK_Z_OFFSET;
      group.position.set(x2, stackY, z2);
      group.userData.restPosition.copy(group.position);
      group.userData.restRotation.copy(group.rotation);
      if (Math.random() < CONFIG.TAPE_RATIO) {
        const tape1 = createTape();
        const corner = Math.floor(Math.random() * 4);
        const cornerX = corner === 0 || corner === 3 ? CONFIG.POLAROID_W / 2 : -CONFIG.POLAROID_W / 2;
        const cornerY = corner === 0 || corner === 1 ? CONFIG.POLAROID_H / 2 : -CONFIG.POLAROID_H / 2;
        tape1.position.set(cornerX, cornerY, 5e-3);
        group.add(tape1);
        group.userData.hasTape = 1;
        if (Math.random() < CONFIG.TAPE_DOUBLE_RATIO / CONFIG.TAPE_RATIO) {
          const tape2 = createTape();
          const otherCorner = (corner + 1 + Math.floor(Math.random() * 3)) % 4;
          const ocX = otherCorner === 0 || otherCorner === 3 ? CONFIG.POLAROID_W / 2 : -CONFIG.POLAROID_W / 2;
          const ocY = otherCorner === 0 || otherCorner === 1 ? CONFIG.POLAROID_H / 2 : -CONFIG.POLAROID_H / 2;
          tape2.position.set(ocX, ocY, 5e-3);
          group.add(tape2);
          group.userData.hasTape = 2;
        }
      }
      scene.add(group);
      polaroids.push(group);
      textureLoadPromises.push(
        textureCache.get(photoUrl).then((texture) => {
          group.userData.setPhoto(texture);
        }).catch((err) => {
          console.warn("[polaroids] photo load failed", photoUrl, err);
        })
      );
    }
    await Promise.all(textureLoadPromises);
    scene.userData = scene.userData || {};
    scene.userData.polaroids = polaroids;
    console.log("[polaroids] scatter built:", polaroids.length, "polaroids (captions off)");
    return polaroids;
  }

  // runtime/web/js/camera-path.js
  function easedT(t2) {
    const dwells = CONFIG.DWELL_TIMES;
    const d1 = dwells[0];
    const d2 = dwells[1];
    let segStart;
    let segEnd;
    if (t2 < d1) {
      segStart = 0;
      segEnd = d1;
    } else if (t2 < d2) {
      segStart = d1;
      segEnd = d2;
    } else {
      segStart = d2;
      segEnd = 1;
    }
    const u2 = (t2 - segStart) / (segEnd - segStart);
    const smoothstep = u2 * u2 * (3 - 2 * u2);
    const eased = 0.7 * u2 + 0.3 * smoothstep;
    return segStart + eased * (segEnd - segStart);
  }
  function updateCameraPosition(camera, t2, prefersReducedMotion = false) {
    const p2 = computeCameraPosition(t2, prefersReducedMotion);
    camera.position.set(p2.x, p2.y, p2.z);
    camera.lookAt(0, 0, 0);
  }
  function computeCameraPosition(t2, prefersReducedMotion = false) {
    const period = prefersReducedMotion ? CONFIG.LISSAJOUS_PERIOD_S * 2 : CONFIG.LISSAJOUS_PERIOD_S;
    const phase = (t2 % period + period) % period / period;
    const eT = easedT(phase);
    const x2 = CONFIG.LISSAJOUS_A * Math.sin(2 * Math.PI * eT);
    const z2 = CONFIG.LISSAJOUS_B * Math.sin(4 * Math.PI * eT + Math.PI / 2);
    const y2 = CONFIG.CAMERA_HEIGHT_MULT * CONFIG.POLAROID_H + 3;
    return { x: x2, y: y2, z: z2 + 4 };
  }
  function createCameraPath() {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    let prefersReduced = mql.matches;
    mql.addEventListener("change", (e2) => {
      prefersReduced = e2.matches;
    });
    return {
      update(camera, t2) {
        updateCameraPosition(camera, t2, prefersReduced);
      },
      // Predict the figure-8 position at an absolute time without writing
      // to a camera — used by camera-zoom.js to compute the return target.
      positionAt(t2) {
        return computeCameraPosition(t2, prefersReduced);
      },
      get prefersReducedMotion() {
        return prefersReduced;
      }
    };
  }

  // runtime/web/js/camera-zoom.js
  function getGsap() {
    return typeof window !== "undefined" && window.gsap || null;
  }
  var lookAtTarget = new Ts(0, 0, 0);
  var photoTopDir = new Ts(0, 1, 0);
  var upState = { x: 0, y: 1, z: 0 };
  function buildCameraZoom(camera, polaroid, cameraPath, getElapsedTime, callbacks = {}) {
    const gsap = getGsap();
    if (!gsap) {
      console.warn("[camera-zoom] gsap unavailable \u2014 skipping zoom event");
      callbacks.onComplete && callbacks.onComplete();
      return null;
    }
    console.log("[camera-zoom] firing \u2014 diving to", polaroid.name || "(unnamed)");
    polaroid.updateMatrixWorld(true);
    const polaroidWorldPos = new Ts();
    polaroid.getWorldPosition(polaroidWorldPos);
    const diveTarget = {
      x: polaroidWorldPos.x,
      y: polaroidWorldPos.y + CONFIG.ZOOM_HEIGHT,
      z: polaroidWorldPos.z
    };
    const lookAtAtPolaroid = {
      x: polaroidWorldPos.x,
      y: polaroidWorldPos.y,
      z: polaroidWorldPos.z
    };
    lookAtTarget.set(0, 0, 0);
    polaroid.updateMatrixWorld(true);
    photoTopDir.set(0, 1, 0).applyQuaternion(polaroid.quaternion).normalize();
    upState.x = 0;
    upState.y = 1;
    upState.z = 0;
    const applyLookAt = () => {
      camera.up.set(upState.x, upState.y, upState.z);
      camera.lookAt(lookAtTarget);
    };
    let returnPos = null;
    const tl2 = gsap.timeline({
      onStart: () => {
        callbacks.onStart && callbacks.onStart();
      },
      onComplete: () => {
        callbacks.onComplete && callbacks.onComplete();
      }
    });
    tl2.to(camera.position, {
      x: diveTarget.x,
      y: diveTarget.y,
      z: diveTarget.z,
      duration: CONFIG.ZOOM_TRANSITION_S,
      ease: CONFIG.ZOOM_TRANSITION_EASE,
      onUpdate: applyLookAt
    });
    tl2.to(lookAtTarget, {
      x: lookAtAtPolaroid.x,
      y: lookAtAtPolaroid.y,
      z: lookAtAtPolaroid.z,
      duration: CONFIG.ZOOM_TRANSITION_S,
      ease: CONFIG.ZOOM_TRANSITION_EASE
    }, "<");
    tl2.to(upState, {
      x: photoTopDir.x,
      y: photoTopDir.y,
      z: photoTopDir.z,
      duration: CONFIG.ZOOM_TRANSITION_S,
      ease: CONFIG.ZOOM_TRANSITION_EASE
    }, "<");
    tl2.to({}, { duration: CONFIG.ZOOM_HOLD_S });
    tl2.call(() => {
      const now = getElapsedTime();
      const arrivalTime = now + CONFIG.ZOOM_TRANSITION_S;
      returnPos = cameraPath.positionAt(arrivalTime);
    });
    tl2.to(camera.position, {
      x: () => returnPos.x,
      y: () => returnPos.y,
      z: () => returnPos.z,
      duration: CONFIG.ZOOM_TRANSITION_S,
      ease: CONFIG.ZOOM_TRANSITION_EASE,
      onUpdate: applyLookAt
    });
    tl2.to(lookAtTarget, {
      x: 0,
      y: 0,
      z: 0,
      duration: CONFIG.ZOOM_TRANSITION_S,
      ease: CONFIG.ZOOM_TRANSITION_EASE
    }, "<");
    tl2.to(upState, {
      x: 0,
      y: 1,
      z: 0,
      duration: CONFIG.ZOOM_TRANSITION_S,
      ease: CONFIG.ZOOM_TRANSITION_EASE
    }, "<");
    return tl2;
  }

  // runtime/web/js/zoom-scheduler.js
  function createZoomScheduler(scene, camera, cameraPath, getElapsedTime, setZoomActive) {
    const polaroids = scene.userData && scene.userData.polaroids || [];
    if (polaroids.length === 0) {
      console.warn("[zoom-scheduler] no polaroids in scene.userData \u2014 scheduler is a no-op");
    }
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reducedMotion = mql.matches;
    mql.addEventListener("change", (e2) => {
      reducedMotion = e2.matches;
    });
    let timerId = null;
    let running = false;
    function armNext() {
      if (!running) return;
      if (reducedMotion) {
        console.log("[zoom-scheduler] reduced-motion active \u2014 zooms suspended");
        return;
      }
      console.log(`[zoom-scheduler] next zoom in ${CONFIG.ZOOM_INTERVAL_S}s`);
      timerId = setTimeout(fire, CONFIG.ZOOM_INTERVAL_S * 1e3);
    }
    function fire() {
      timerId = null;
      if (!running) return;
      if (reducedMotion) return;
      if (polaroids.length === 0) {
        armNext();
        return;
      }
      const target = polaroids[Math.floor(Math.random() * polaroids.length)];
      setZoomActive(true);
      const tl2 = buildCameraZoom(camera, target, cameraPath, getElapsedTime, {
        onComplete: () => {
          setZoomActive(false);
          armNext();
        }
      });
      if (!tl2) {
        setZoomActive(false);
        armNext();
      }
    }
    return {
      start() {
        if (running) return;
        running = true;
        console.log("[zoom-scheduler] starting \u2014 first scheduled zoom in " + CONFIG.ZOOM_INTERVAL_S + "s (immediate test owns T+2s)");
        armNext();
      },
      stop() {
        running = false;
        if (timerId !== null) {
          clearTimeout(timerId);
          timerId = null;
        }
      },
      get isReducedMotion() {
        return reducedMotion;
      }
    };
  }

  // runtime/web/js/main.js
  async function bootstrap() {
    const canvas = document.getElementById("scene");
    const renderer = createRenderer(canvas);
    const scene = createScene();
    const camera = createCamera();
    const textureCache = new TextureCache();
    const cameraPath = createCameraPath();
    window.addEventListener("resize", () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    });
    await createScatterLayout(scene, textureCache);
    let zoomActive = false;
    let lastT = 0;
    const zoomScheduler = createZoomScheduler(
      scene,
      camera,
      cameraPath,
      () => lastT,
      (active) => {
        zoomActive = active;
      }
    );
    const loop = createFrameLoop({
      tick: (_dt, t2) => {
        lastT = t2;
        if (!zoomActive) {
          cameraPath.update(camera, t2);
        }
      },
      render: () => {
        renderer.render(scene, camera);
      }
    });
    loop.start();
    zoomScheduler.start();
    console.log("[polaroids] live", {
      revision: t,
      polaroids: scene.userData.polaroids.length,
      textures: textureCache.size(),
      fps: CONFIG.FPS_CAP,
      reducedMotion: zoomScheduler.isReducedMotion,
      period: cameraPath.prefersReducedMotion ? "180s (reduced motion)" : "90s",
      zoomEvery: `${CONFIG.ZOOM_INTERVAL_S}s (hold ${CONFIG.ZOOM_HOLD_S}s)`
    });
    setTimeout(() => {
      if (!scene.userData.polaroids || scene.userData.polaroids.length === 0) {
        console.warn("[zoom-test] polaroids array empty \u2014 skipping immediate test");
        return;
      }
      const target = scene.userData.polaroids[Math.floor(Math.random() * scene.userData.polaroids.length)];
      console.log("[zoom-test] firing immediate zoom on", target.name);
      zoomActive = true;
      const tl2 = buildCameraZoom(
        camera,
        target,
        cameraPath,
        () => lastT,
        {
          onComplete: () => {
            zoomActive = false;
            console.log("[zoom-test] immediate zoom complete \u2014 scheduler owns subsequent events");
          }
        }
      );
      if (!tl2) {
        console.error("[zoom-test] buildCameraZoom returned null");
      }
    }, 2e3);
  }
  bootstrap();
})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
