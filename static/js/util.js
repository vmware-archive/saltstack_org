/**
 * Allow Prototypal inheritance
 * http://javascript.crockford.com/prototypal.html
 * @author Douglas Crockford
 * @version 2008-04-07
 * @param oldObject
 * @return newObject
 */
if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        function F() {}
        F.prototype = o;
        return new F();
    };
}

/**
 * Add some ES5 functions to browsers that don't already have them builtin.
 * javascript.crockford.com/remedial.html
 *
 */
function typeOf(value) {
    var s = typeof value;
    if (s === 'object') {
        if (value) {
            if (typeof value.length === 'number' &&
                !(value.propertyIsEnumerable('length')) &&
                        typeof value.splice === 'function') {
                s = 'array';
            }
        } else {
            s = 'null';
        }
    }
    return s;
}

/**
 * isEmpty(v) returns true if v is an object containing no enumerable members.
 *
 */
if (typeof String.prototype.isEmpty !== 'function') {
    function isEmpty(o) {
        var i, v;
        if (typeOf(o) === 'object') {
            for (i in o) {
                v = o[i];
                if (v !== undefined && typeOf(v) !== 'function') {
                    return false;
                }
            }
        }
        return true;
    };
}

/**
 * entityify() produces a string in which '<', '>', and '&' are replaced with
 * their HTML entity equivalents. This is essential for placing arbitrary
 * strings into HTML texts.
 *
 */
if (typeof String.prototype.entityify !== 'function') {
    String.prototype.entityify = function () {
        return this.replace(/&/g, "&amp;").replace(/</g,
                                                "&lt;").replace(/>/g, "&gt;");
    };
}

/**
 * quote() produces a quoted string. This method returns a string that is like
 * the original string except that it is wrapped in quotes and all quote and
 * backslash characters are preceded with backslash.
 *
 */
if (typeof String.prototype.quote !== 'function') {
    String.prototype.quote = function () {
        var c, i, l = this.length, o = '"';
        for (i = 0; i < l; i += 1) {
            c = this.charAt(i);
            if (c >= ' ') {
                if (c === '\\' || c === '"') {
                    o += '\\';
                }
                o += c;
            } else {
                switch (c) {
                    case '\b':
                        o += '\\b';
                    break;
                    case '\f':
                        o += '\\f';
                    break;
                    case '\n':
                        o += '\\n';
                    break;
                    case '\r':
                        o += '\\r';
                    break;
                    case '\t':
                        o += '\\t';
                    break;
                    default:
                        c = c.charCodeAt();
                    o += '\\u00' + Math.floor(c / 16).toString(16) +
                        (c % 16).toString(16);
                }
            }
        }
        return o + '"';
    };
}

/**
 * supplant() does variable substitution on the string. It scans through the
 * string looking for expressions enclosed in { } braces. If an expression is
 * found, use it as a key on the object, and if the key has a string value or
 * number value, it is substituted for the bracket expression and it repeats.
 *
 * @example
 * param = {domain: 'valvion.com', media: 'http://media.valvion.com/'};
 * url = "{media}logo.gif".supplant(param);
 *
 */
if (typeof String.prototype.supplant !== 'function') {
    String.prototype.supplant = function (o) {
        return this.replace(/{([^{}]*)}/g,
            function (a, b) {
                var r = o[b];
                return typeof r === 'string' || typeof r === 'number' ? r : a;
            }
        );
    };
}

/**
 * The trim() method removes whitespace characters from the beginning and end
 * of the string.
 *
 */
if (typeof String.prototype.trim !== 'function') {
    String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/g, "");
    }; 
}

/*
 * JavaScript Pretty Date
 * Copyright (c) 2011 John Resig (ejohn.org)
 * Licensed under the MIT and GPL licenses.
 */

// Takes an ISO time and returns a string representing how
// long ago the date represents.
function prettyDate(time){
    // SH: modified to assume date is already in the correct format
    // var date = new Date((time || "").replace(/-/g,"/").replace(/[TZ]/g," ")),
    var date = new Date((time || "")),
            diff = (((new Date()).getTime() - date.getTime()) / 1000),
            day_diff = Math.floor(diff / 86400);

    if ( isNaN(day_diff) || day_diff < 0 || day_diff >= 31 )
        return;
                    
    return day_diff === 0 && (
                diff < 60 && "just now" ||
                diff < 120 && "1 minute ago" ||
                diff < 3600 && Math.floor( diff / 60 ) + " minutes ago" ||
                diff < 7200 && "1 hour ago" ||
                diff < 86400 && Math.floor( diff / 3600 ) + " hours ago") ||
        day_diff == 1 && "yesterday" ||
        day_diff < 7 && day_diff + " days ago" ||
        day_diff < 31 && Math.ceil( day_diff / 7 ) + " weeks ago";
}
