var _0x3f67 = [
  "error",
  "onFinish",
  "appendChild",
  "sessionId",
  "pf-collector\x20-\x20\x20fieldInput",
  "onreadystatechange",
  "getElementById",
  "autoLoadEvents",
  "createElement",
  "setupCallback",
  "_defaultUrl",
  "postForm",
  "\x20not\x20found",
  "attachEvent",
  "hidden",
  "onload",
  "merchantIdField",
  "pf-collector\x20-\x20field\x20input\x20has\x20required",
  "script",
  "sessionName",
  "sdk\x20collector\x20-\x20error\x20on\x20initialice",
  "MODIFICAIONDO\x20SESSION\x20NAME",
  "https://ssl.kaptcha.com/collect/sdk?m=100260",
  "config",
  "src",
  "visibleId",
  "input",
  "merchantSessionIdField",
  "type",
  "INITIALICE..",
  "sdkUrl",
  "runConfig",
  "text/javascript",
  "defaultSetupCall",
  "log",
  "collector",
  "runCollector",
  "length",
  "onStart",
  "basicValidation",
];

(function (_0x2cab99, _0x3f679b) {
  var _0x1c5ac5 = function (_0x281577) {
    while (--_0x281577) {
      _0x2cab99["push"](_0x2cab99["shift"]());
    }
  };
  _0x1c5ac5(++_0x3f679b);
})(_0x3f67, 0x11f);

var _0x1c5a = function (_0x2cab99, _0x3f679b) {
  _0x2cab99 = _0x2cab99 - 0x0;
  var _0x1c5ac5 = _0x3f67[_0x2cab99];
  return _0x1c5ac5;
};

function loadScript(_0x1da665, _0x485b04) {
  var _0x34f344 = document["head"],
    _0x440fb9 = document["createElement"](_0x1c5a("0xb"));
  (_0x440fb9[_0x1c5a("0x15")] = _0x1c5a("0x19")),
    (_0x440fb9[_0x1c5a("0x11")] = _0x1da665),
    (_0x440fb9[_0x1c5a("0x26")] = _0x485b04),
    (_0x440fb9[_0x1c5a("0x8")] = _0x485b04),
    _0x34f344[_0x1c5a("0x23")](_0x440fb9);
}

var PF = {
  collector: null,
  config: {
    sdkUrl: _0x1c5a("0xf"),
    sessionName: _0x1c5a("0x24"),
    merchantSessionIdField: "MercSessId",
    merchantIdField: "MerchantId",
    onStart: ![],
    onFinish: ![],
    visibleId: ![],
  },

  defaultSetupCall: function (_0x50b2a2, _0x5a396f) {
    client[_0x1c5a("0x2")]({
      "collect-end": function (_0x39540f) {
        if (_0x5a396f[_0x1c5a("0x22")]) {
          var _0x200a48 = {
            sessionId: _0x39540f[_0x5a396f[_0x1c5a("0x14")]],
            id: _0x5a396f[_0x1c5a("0x12")]
              ? _0x39540f[_0x5a396f[_0x1c5a("0x9")]]
              : ![],
          };
          _0x5a396f[_0x1c5a("0x22")](_0x200a48);
        }
      },
      "collect-begin": function (_0x96ca08) {
        if (_0x5a396f[_0x1c5a("0x1f")] === ![] && _0x50b2a2) {
          var _0x5a51b9 = document[_0x1c5a("0x1")](_0x1c5a("0x13"));
          (_0x5a51b9["type"] = _0x1c5a("0x7")),
            (_0x5a51b9["name"] = _0x5a396f[_0x1c5a("0xc")]),
            (_0x5a51b9["value"] = _0x96ca08[_0x5a396f[_0x1c5a("0x14")]]),
            _0x50b2a2[_0x1c5a("0x23")](_0x5a51b9);
        } else {
          if (_0x5a396f[_0x1c5a("0x1f")] !== ![]) {
            var _0x5ed798 = {
              sessionId: _0x96ca08[_0x5a396f[_0x1c5a("0x14")]],
              id: _0x5a396f[_0x1c5a("0x12")]
                ? _0x96ca08[_0x5a396f[_0x1c5a("0x9")]]
                : ![],
            };
            _0x5a396f["onStart"](_0x5ed798);
          }
        }
      },
    });
  },

  basicValidation: function (_0x3406c6) {
    if (_0x3406c6 === undefined || _0x3406c6 === null || _0x3406c6 === "")
      return console[_0x1c5a("0x21")](_0x1c5a("0xa")), ![];
    if (document[_0x1c5a("0x27")](_0x3406c6)[_0x1c5a("0x1e")] <= 0x0)
      return (
        console["error"](_0x1c5a("0x25") + _0x3406c6 + _0x1c5a("0x5")), ![]
      );
    return !![];
  },

  runCollector: function (_0x3608d0, _0x481442, _0x2aa17b) {
    (client = new ka["ClientSDK"]()),
      _0x2aa17b(_0x3608d0, _0x481442),
      client[_0x1c5a("0x0")](),
      _0x3608d0 &&
        (_0x3608d0[_0x1c5a("0x6")]
          ? _0x3608d0[_0x1c5a("0x6")]("submit", this[_0x1c5a("0x4")])
          : _0x3608d0["addEventListener"]("submit", this[_0x1c5a("0x4")]));
  },

  runConfig: function (_0x373871) {
    if (_0x373871 === ![] || _0x373871 === undefined) return this;
    return (
      _0x373871["_defaultUrl"] &&
        (this[_0x1c5a("0x10")][_0x1c5a("0x17")] = _0x373871[_0x1c5a("0x3")]),
      _0x373871[_0x1c5a("0xc")] &&
        (console["log"](_0x1c5a("0xe")),
        (this["config"][_0x1c5a("0xc")] = _0x373871[_0x1c5a("0xc")])),
      _0x373871[_0x1c5a("0x22")] &&
        (this[_0x1c5a("0x10")][_0x1c5a("0x22")] = _0x373871["onFinish"]),
      _0x373871[_0x1c5a("0x1f")] &&
        (this[_0x1c5a("0x10")]["onStart"] = _0x373871[_0x1c5a("0x1f")]),
      this
    );
  },

  initialize: function (_0x20fcb6) {
    console[_0x1c5a("0x1b")](_0x1c5a("0x16"));
    try {
      var _0x45d05b = this[_0x1c5a("0x10")],
        _0x360c16 = this[_0x1c5a("0x1d")],
        _0x2f5fa8 = this["defaultSetupCall"];
      this[_0x1c5a("0x18")](_0x20fcb6);
      var _0x3a556a = this["config"][_0x1c5a("0x17")];
      loadScript(_0x3a556a, function () {
        _0x360c16(![], _0x45d05b, _0x2f5fa8);
      });
    } catch (_0x184d68) {
      console["error"](_0x1c5a("0xd"));
    }
  },

  start: function (_0x10421a, _0x2835fb) {
    try {
      var _0x4c1b71 = this[_0x1c5a("0x20")](_0x10421a),
        _0x244547 = this[_0x1c5a("0x10")],
        _0x7947d6 = this["runCollector"],
        _0x205b5b = this[_0x1c5a("0x1a")];
      if (_0x4c1b71) {
        this[_0x1c5a("0x18")](_0x2835fb);
        var _0x1183e2 = this[_0x1c5a("0x10")][_0x1c5a("0x17")];
        loadScript(_0x1183e2, function () {
          (_form = document[_0x1c5a("0x27")](_0x10421a)),
            _0x7947d6(_form, _0x244547, _0x205b5b),
            (this[_0x1c5a("0x1c")] = client);
        });
      }
    } catch (_0x69c874) {
      console[_0x1c5a("0x21")]("sdk\x20integration\x20error", _0x69c874);
    }
  },
  postForm: function () {
    return ![];
  },
};
