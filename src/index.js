'use strict';

const _globar = (typeof window !== "undefined" ? window : global || {});
const cookie = function (key, value, options) {
    if (arguments.length > 1 && String(value) !== "[object Object]") {
        options = extend({path:'/',expires:(new Date((new Date()).getTime()+1000*60*60*24))}, options);

        if (value === null || value === undefined) {
            options.expires = -1;
        }

        if (typeof options.expires === 'number') {
            var days = options.expires, t = options.expires = new Date();
            t.setDate(t.getDate() + days);
        }

        value = String(value);

        return (document.cookie = [
            encodeURIComponent(key), '=',
            options.raw ? value : cookie_encode(value),
            options.expires ? '; expires=' + options.expires.toUTCString() : '',
            options.path ? '; path=' + options.path : '',
            options.domain ? '; domain=' + options.domain : '',
            options.secure ? '; secure' : ''
        ].join(''));
    }
    options = value || {};
    var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
};


function cookie_encode(string){
	var decoded = encodeURIComponent(string);
	var ns = decoded.replace(/(%7B|%7D|%3A|%22|%23|%5B|%5D)/g,function(charater){return decodeURIComponent(charater);});
	return ns;
}


const extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;
	if ( typeof target === "boolean" ) {
		deep = target;
		target = arguments[ i ] || {};
		i++;
	}
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {
		if ( ( options = arguments[ i ] ) != null ) {
			for ( name in options ) {
				copy = options[ name ];
				if ( name === "__proto__" || target === copy ) {
					continue;
				}
				if ( deep && copy && ( isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;
					target[ name ] = extend( deep, clone, copy );
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}
	return target;
};

var getProto = Object.getPrototypeOf;
var class2type = {};
var hasOwn = class2type.hasOwnProperty;
var fnToString = hasOwn.toString;

var isPlainObject = function( obj ) {
    var proto, Ctor;
    if ( !obj || toString.call( obj ) !== "[object Object]" ) {
        return false;
    }
    proto = getProto( obj );
    if ( !proto ) {
        return true;
    }
    Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
    return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
};


var hCookie = {
	set: function set (key, value, option) {
		var path = option && option.path || "/";
		var expires = option && option.expires || 1;
		let num = isNaN(Number(expires)) ? 1 : Number(expires);
		var date = new Date((new Date()).getTime() + 1000 * 60 * 60 * 24 * num);
		return cookie(key, JSON.stringify(value), { path, expires: date });
	},
	get: function get (key) {
		return cookie(key) ? JSON.parse(cookie(key)) : null;
	},
	remove: function remove (key) {
		return cookie(key, null, { expires: -1 });
	}
}

_globar.hCookie = hCookie;

export default hCookie;
