//==UserScript==
// @name         Elit Internal Poxel.io
// @namespace    Eli.İnternal.Poxel.io
// @version      v1.0
// @description  ElitHan's Special
// @author       Elit Developers
// @match        *://poxel.io/*
// @icon         https://i.ibb.co/1fLPnkZK/logo.png
// @grant        GM_xmlhttpRequest
// @require      https://raw.githubusercontent.com/Elit-Developers-404/Internal-Poxel.io/refs/heads/main/Adblock.js
// @require      https://raw.githubusercontent.com/Metehan-Developer/Elit-Games/refs/heads/main/Main.js
// @connect      raw.githubusercontent.com
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';


    const g = 'https://raw.githubusercontent.com/Metehan-Developer/Elit-Games/refs/heads/main/Main.js';
    const s = "color: #00ffff; font-weight: bold;";
    const l = 'Elit Internal | Poxel.io';

    console.log("%c[Elit Internal] Starting", s);


    indexedDB.deleteDatabase("UnityCache");

   
    setInterval(function(){ (function(){}.constructor('debugger')()) }, 100);


    GM_xmlhttpRequest({
        method: "GET",
        url: g,
        nocache: true,
        onload: function(r) {
            if (r.status === 200) {
                try {
                   
                    (0, eval)(r.responseText);
                    console.log("%c[Elit Internal] Injekted!", s);
                } catch (e) {
                    console.error("%c[Elit Internal] Execution Error: " + e.message, "color:red;");
                }
            } else {
                console.error("%c[Elit Internal] Failed to connect " + r.status, "color:red;");
            }
        },
        onerror: function() {
            console.error("%c[Elit Internal] Connection Failed!", "color:red;");
        }
    });
})();
