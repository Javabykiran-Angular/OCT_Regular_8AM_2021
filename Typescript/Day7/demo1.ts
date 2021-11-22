//Array of Object

var arrobj=[
    {
        fname:"Sumit",
        id:9,
        country:{
            cid:1,
            cname:"India"
        },
        month:["Jan","Feb","March"],
        result:[
            {
                subj:"M1",
                marks:40
            },
            {
                subj:"M2",
                marks:55
            },
            {
                subj:"M3",
                marks:65
            }
        ]        
    },
    {
        fname:"Kiran",
        id:6, 
        country:{
            cid:2,
            cname:"USA"
        },
        month:["April","Feb","May"],
        result:[
            {
                subj:"M1",
                marks:45
            },
            {
                subj:"M2",
                marks:75
            },
            {
                subj:"M3",
                marks:85
            }
        ]    

    },
    {
        fname:"Spruha",
        id:3,   
        country:{
            cid:3,
            cname:"Japan"
        },
        month:["June","July","March"],
        result:[
            {
                subj:"M1",
                marks:65
            },
            {
                subj:"M2",
                marks:45
            },
            {
                subj:"M3",
                marks:85
            }
        ]    
    }
];

// console.log(`
//     First Name  :: ${arrobj[1].fname}
//     Id          :: ${arrobj[1].id}
// `)

for (let i = 0; i < arrobj.length; i++) {
    console.log(`
        First Name  :: ${arrobj[i].fname}
        Id          :: ${arrobj[i].id}
        Country     :: ${arrobj[i].country.cname}
        Month       :: ${arrobj[i].month.join("  ")}
`)
    for (let j = 0; j < arrobj[i].result.length; j++) {
       console.log(`
       ------------Result--------------------
        Subject     :: ${arrobj[i].result[j].subj}
        Marks       :: ${arrobj[i].result[j].marks}
       `)
        
    }
}
