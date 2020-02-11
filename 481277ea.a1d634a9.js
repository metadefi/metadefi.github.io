(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{109:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return n})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return d}));var a=r(1),o=r(6),c=(r(0),r(144)),n={title:"Glossary",description:"Vector documentation glossary of terms"},i={id:"meta/glossary",title:"Glossary",description:"Vector documentation glossary of terms",source:"@site/docs/meta/glossary.md",permalink:"/docs/meta/glossary",editUrl:"https://github.com/brainrexapi/edit/master/docs/meta/glossary.md"},s=[{value:"Batch",id:"batch",children:[]},{value:"Benchmark",id:"benchmark",children:[]},{value:"Binary",id:"binary",children:[]},{value:"Buffer",id:"buffer",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Durability",id:"durability",children:[]},{value:"Event",id:"event",children:[]},{value:"Filter",id:"filter",children:[]},{value:"Flush",id:"flush",children:[]},{value:"Github",id:"github",children:[]},{value:"Guide",id:"guide",children:[]},{value:"Log",id:"log",children:[]},{value:"Lucio",id:"lucio",children:[]},{value:"Metric",id:"metric",children:[]},{value:"Parser",id:"parser",children:[]},{value:"Pipeline",id:"pipeline",children:[]},{value:"Reducer",id:"reducer",children:[]},{value:"Repo",id:"repo",children:[]},{value:"Role",id:"role",children:[]},{value:"Router",id:"router",children:[]},{value:"Rust",id:"rust",children:[]},{value:"Sampler",id:"sampler",children:[]},{value:"Sink",id:"sink",children:[]},{value:"Source",id:"source",children:[]},{value:"Structured Log",id:"structured-log",children:[]},{value:"Table",id:"table",children:[]},{value:"TOML",id:"toml",children:[]},{value:"Topology",id:"topology",children:[]},{value:"Transform",id:"transform",children:[]},{value:"Use Case",id:"use-case",children:[]},{value:"Vector",id:"vector",children:[]}],b={rightToc:s},l="wrapper";function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)(l,Object(a.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The gloassary contains common terms and their definitions."),Object(c.b)("h2",{id:"batch"},"Batch"),Object(c.b)("p",null,'"Batch" refers to a ',Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/about/data-model/log/"}),"batched payload")," within a sink. It is a batch of events encoded into a payload that the downstream service understands."),Object(c.b)("h2",{id:"benchmark"},"Benchmark"),Object(c.b)("p",null,'"Benchmark" refers to a test designed to measure performance and resource usage. You can learn more about Vector\'s benchmarks in the ',Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/#performance"}),"Benchmarks")," section."),Object(c.b)("h2",{id:"binary"},"Binary"),Object(c.b)("p",null,'"Binary" refers to the static binary that Vector compiles to.'),Object(c.b)("h2",{id:"buffer"},"Buffer"),Object(c.b)("p",null,'"Buffer" refers to an ordered queue of events that is coupled with a sink.'),Object(c.b)("h2",{id:"configuration"},"Configuration"),Object(c.b)("p",null,"\"Configuration\" refers to the settings and options used to control Vector's behavior. You can learn more about Vector's configuration in the ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/setup/configuration/"}),"Configuration")," section."),Object(c.b)("h2",{id:"durability"},"Durability"),Object(c.b)("p",null,'"Durability" refers to the ability to retain data across exceptional events. In the context of Vector, this typically refers to the ability to retain data across restarts.'),Object(c.b)("h2",{id:"event"},"Event"),Object(c.b)("p",null,'"Event" refers to a single unit of data that flows through Vector. You can learn more about events in the ',Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/about/data-model/"}),"Data Model")," section."),Object(c.b)("h2",{id:"filter"},"Filter"),Object(c.b)("p",null,'"Filter" refers to a type of ',Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/transforms/"}),"transform")," that filters events or fields on an event."),Object(c.b)("h2",{id:"flush"},"Flush"),Object(c.b)("p",null,'"flush" refers to the act of sending a batched payload to a downstream service. It is a common term used in conjunction with "buffer".'),Object(c.b)("h2",{id:"github"},"Github"),Object(c.b)("p",null,'"',Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/"}),"Github"),'"" refers to the service used to host Vector\'s source code.'),Object(c.b)("h2",{id:"guide"},"Guide"),Object(c.b)("p",null,'"Guide" is a tutorial or walk through on a specific subject. You can see Vector\'s guides in the ',Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/setup/guides/"}),"Guides")," section."),Object(c.b)("h2",{id:"log"},"Log"),Object(c.b)("p",null,'"Log" refers to an individual log event. This is a type of\n',Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/about/data-model/metric/"}),"Vector event"),"."),Object(c.b)("h2",{id:"lucio"},"Lucio"),Object(c.b)("p",null,"A sporty Italian that bleeds Rust, is a core member of the Vector team, and does not approve of New York pizza."),Object(c.b)("h2",{id:"metric"},"Metric"),Object(c.b)("p",null,'"Metric" refers to an individual data unit used to represent a point in time\nmeasurement. This is a type of ',Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/about/data-model/metric/"}),"Vector event"),"."),Object(c.b)("h2",{id:"parser"},"Parser"),Object(c.b)("p",null,'"Parser" refers to a ',Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/transforms/"}),"transform")," that parses event data."),Object(c.b)("h2",{id:"pipeline"},"Pipeline"),Object(c.b)("p",null,'"Pipeline" refers to the end result from combining ',Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/sources/"}),"sources"),",\n",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/transforms/"}),"transforms"),", and ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/sinks/"}),"sinks"),"."),Object(c.b)("h2",{id:"reducer"},"Reducer"),Object(c.b)("p",null,'"Reducer" refers to a ',Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/transforms/"}),"transform")," that reduces data into\na metric."),Object(c.b)("h2",{id:"repo"},"Repo"),Object(c.b)("p",null,'"Repo" refers to a Git respository, usually the\n',Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/timberio/vector"}),"Vector Git repository"),"."),Object(c.b)("h2",{id:"role"},"Role"),Object(c.b)("p",null,'"Role" refers to a ',Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/setup/deployment/roles/"}),"deployment role")," that Vector is deployed\nunder."),Object(c.b)("h2",{id:"router"},"Router"),Object(c.b)("p",null,'"Router" refers is something that accepts and routes data to many destinations,\nthis is commonly used to describe Vector.'),Object(c.b)("h2",{id:"rust"},"Rust"),Object(c.b)("p",null,'"Rust" refers to the ',Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.rust-lang.org/"}),"Rust programming language")," that Vector is\nwritten in."),Object(c.b)("h2",{id:"sampler"},"Sampler"),Object(c.b)("p",null,'"Sampler" refers to a ',Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/transforms/"}),"transform")," that samples data."),Object(c.b)("h2",{id:"sink"},"Sink"),Object(c.b)("p",null,'"Sink" refers to the Vector ',Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/sinks/"}),"sink concept"),"."),Object(c.b)("h2",{id:"source"},"Source"),Object(c.b)("p",null,'"Source" refers to the Vector ',Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/sources/"}),"source concept"),"."),Object(c.b)("h2",{id:"structured-log"},"Structured Log"),Object(c.b)("p",null,'"Structured log" refers to a log represented in a structured form, such as\na map. This is different from a text log which is represented as a single\ntext string.'),Object(c.b)("h2",{id:"table"},"Table"),Object(c.b)("p",null,'"Table" refers to the ',Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/toml-lang/toml#table"}),"TOML table type"),"."),Object(c.b)("h2",{id:"toml"},"TOML"),Object(c.b)("p",null,'"TOML" refers to ',Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/toml-lang/toml"}),"Tom's Obvious Markup Language")," and it is the syntax\nused to represent the Vector configuration."),Object(c.b)("h2",{id:"topology"},"Topology"),Object(c.b)("p",null,'"Topology" refers to a ',Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/setup/deployment/topologies/"}),"deploy topology")," that Vector is\ndeployed under."),Object(c.b)("h2",{id:"transform"},"Transform"),Object(c.b)("p",null,'"Transform" refers to the Vector ',Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/transforms/"}),"transform concept"),"."),Object(c.b)("h2",{id:"use-case"},"Use Case"),Object(c.b)("p",null,'"Use case" refers to a way in which Vector is used, such logs, metrics,\nreducing cost, etc.'),Object(c.b)("h2",{id:"vector"},"Vector"),Object(c.b)("p",null,'"Vector" is the name of this project.'))}d.isMDXComponent=!0}}]);