(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{98:function(e,a,t){"use strict";t.r(a);t(12);var n=t(0),l=t.n(n),c=t(146),r=t(142);a.default=function(e){const{tags:a}=e,t={};Object.keys(a).forEach(e=>{const a=function(e){return e[0].toUpperCase()}(e);t[a]=t[a]||[],t[a].push(e)});const n=Object.entries(t).sort(([e],[a])=>e===a?0:e>a?1:-1).map(([e,t])=>l.a.createElement("div",{key:e},l.a.createElement("h3",null,e),t.map(e=>l.a.createElement(r.a,{className:"padding-right--md",href:a[e].permalink,key:e},a[e].name," (",a[e].count,")")),l.a.createElement("hr",null))).filter(e=>null!=e);return l.a.createElement(c.a,{title:"Blog Tags",description:"Blog Tags"},l.a.createElement("div",{className:"container margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--8 col--offset-2"},l.a.createElement("h1",null,"Tags"),l.a.createElement("div",{className:"margin-vert--lg"},n)))))}}}]);