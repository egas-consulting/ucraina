var config = {
    style: 'mapbox://styles/ed1990/clshd5fko001d01qw5qk66k79',
    accessToken: 'pk.eyJ1IjoiZWQxOTkwIiwiYSI6ImNsc2swYTVxcjE5NDAya2xobGs0YnZka28ifQ.OxvaAFCUn73cyiwtpOZaIg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: '<span style="font-family:\'Signika\'; font-weight: 200; padding: 0.2vh; border-radius: 10px; color: #000000; font-size: 1.7rem; display: block; margin-bottom: 2px;">Marile răni</span>',
    subtitle: '<span style="font-family: \'Signika\'; color: #000000; font-size: 2.6rem; font-weight: 500;"> DUPĂ DOI ANI DE <span style="font-weight: bold; animation: colorFade 6s infinite;">RĂZBOI</span> ÎN UCRAINA </span>',

    byline: '<p style="text-align: center;"> <img src="./ukraine.gif"></p> <a href="https://panorama.ro/author/edit/" target="_blank">Edit Gyenge</a> <p> <img src="./scroll.png"> </p> <p> scroll </p> ',
    footer: '<br> 24 februarie 2024 <br> <a href="https://panorama.ro/author/andrei-luca-popescu/" target="_blank">Editor: Andrei Luca Popescu</a> <br> Sursa datelor: informații obținute cu sprijinul Victoriei Kopenko <a href="https://panorama.ro/razboi-ucraina-ecologie-poluare-impact-mediu-romania/" target="_blank">pentru materialul publicat în Panorama,</a> <a href="https://ces.org.ua/en/tracker-economy-during-the-war/" target="_blank">Centre for Economic Strategy</a>, <a href="https://uncg.org.ua/iakoiu-maie-buty-dolia-poshkodzhenykh-vybukhamy-ukrainskykh-terytorij/" target="_blank">Ukranian Nature Conservation Group</a>, <a href="https://www.ft.com/content/75ee9701-aa93-4c5d-a1bc-7a51422280fd" target="_blank">Financial Times</a>, <a href="https://www.washingtonpost.com/world/2023/07/22/ukraine-is-now-most-mined-country-it-will-take-decades-make-safe/" target="_blank">Washington Post</a>, <a href="https://acleddata.com/ukraine-conflict-monitor/#dash" target="_blank">ACLED</a>, <a href="https://www.mdpi.com/2071-1050/14/21/13832#metrics" target="_blank">Zalakeviciute, R.; Mejia, D.; Alvarez, H.; Bermeo, X.; Bonilla-Bedoya, S.; Rybarczyk, Y.; Lamb, B. War Impact on Air Quality in Ukraine. Sustainability 2022, 14, 13832. https://doi.org/10.3390/su142113832</a>, <a href="https://www.worldbank.org/en/country/ukraine" target="_blank">World Bank</a>,<br> Creat folosind <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox </a> <p>Ilustrația este făcută cu Microsoft Bing Image creator</p>',
    chapters: [
        {
            id: 'cap1',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'Rusia a invadat Ucraina în urmă cu <b style="color: #B01E23;">doi ani</b>, în zorii unei zile reci de februarie, când marile puteri aliate din Vest trăgeau toate semnalele de alarmă că Vladimir Putin va da ordinul de război, însă toată lumea spera că blufează. De atunci, trăim cu război în Europa. Un război care ne afectează pe toți și care a lăsat urme adânci nu doar în structura socială și economică a regiunii, ci și asupra mediului înconjurător.',
            overlayImage: 'blank.png',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 15,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap1.1',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            mapStyle: 'mapbox://styles/ed1990/clst7lw1k00ak01qt0zyn8epd',
            hidden: false,
            title: '',
            image: '',
            description: 'Războiul a schimbat destinele a milioane de ucraineni, care fie au fugit unde au putut, fie au îndurat greutățile de acasă. Nu doar realitățile economice ale vieții din Ucraina s-au răsturnat peste noapte. Războiul a  scos la iveală și cât de fragilă e natura în fața conflictelor armate: apa, aerul și solul sunt otrăvite.',
            overlayImage: '',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 15,
                pitch: 60,
                bearing: 0,
            },
            location: {
                center: [31.2718321, 49.4871968],
                zoom: 5,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'data-driven-circles',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'data-driven-circles',
                //     opacity: 1
                // }
            ]
        },




        {
            id: 'cap6',
            daysAgo: 730,
            showTimeline: true,
            mapStyle: 'mapbox://styles/ed1990/clshd5fko001d01qw5qk66k79',
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '<b style="color: #B01E23;">Ziua de 24 februarie 2022</b> marchează începutul războiului. Deși toate semnele și avertismentele erau acolo, cei mai mulți, inclusiv ucraineni, ne spuneam: n-are cum. Pe hartă, apar ciocnirile armate de la începutul invaziei rusești până astăzi. Dimensiunea cercului reprezintă numărul de decese/zonă de conflict. <p><img src="legenda.png" alt="Legend" style="max-width: 50%; height: auto;"></p> ',
            
            location: {
                center: [31.2718321, 49.4871968],
                zoom: 5,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'data-driven-circles',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'data-driven-circles',
                    opacity: 1
                }
            ]
        },

        {
            id: 'cap6.1',
            daysAgo: 730,
            showTimeline: true,
            mapStyle: 'mapbox://styles/ed1990/clshd5fko001d01qw5qk66k79',
            alignment: 'center',
            hidden: true,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '',
            
            location: {
                center: [31.2718321, 49.4871968],
                zoom: 5,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'data-driven-circles',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'data-driven-circles',
                    opacity: 1
                }
            ]
        },

        {
            id: 'cap7',
            daysAgo: 723,
            showTimeline: true,
            alignment: 'center',
            mapStyle: 'mapbox://styles/ed1990/clsiyyie6016k01ql8u500hz4',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'După <b style="color: #B01E23;">prima săptămână</b> de război.',
            
            location: {
                center: [31.2718321, 49.4871968],
                zoom: 5,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'data-driven-circles',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'data-driven-circles',
                    opacity: 1
                }
            ]
        },
        {
            id: 'cap8',
            daysAgo: 700,
            showTimeline: true,
            mapStyle: 'mapbox://styles/ed1990/clsizdkrl009r01qu1zx83w3u',
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'După <b style="color: #B01E23;">prima lună</b> de război.',
            
            location: {
                center: [31.2718321, 49.4871968],
                zoom: 5,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'data-driven-circles',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'data-driven-circles',
                    opacity: 1
                }
            ]
        },

        {
            id: 'cap9',
            daysAgo: 365,
            showTimeline: true,
            mapStyle: 'mapbox://styles/ed1990/clsizjen4009s01qu34rd2mnj',
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'După <b style="color: #B01E23;">primul an</b> de război.',
            
            location: {
                center: [31.2718321, 49.4871968],
                zoom: 5,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'data-driven-circles',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'data-driven-circles',
                    opacity: 1
                }
            ]
        },
        {
            id: 'cap10',
            daysAgo: 7,
            showTimeline: true,
            mapStyle: 'mapbox://styles/ed1990/clsj06byl01z201r406bhe7cd',
            triggerCustomScroll: true,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'După <b style="color: #B01E23;">doi ani</b> de război.',
            
            location: {
                center: [31.2718321, 49.4871968],
                zoom: 5,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'data-driven-circles',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'data-driven-circles',
                    opacity: 1
                }
            ]
        },




        {
            id: 'cap2',
            daysAgo: 760,
            showTimeline: true,
            timelineImage: 'somaj.png', 
            alignment: 'center',
            hidden: false,
            title: '<h1 class="title">Înainte de conflict</h1>', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Înainte de izbucnirea conflictului, adică <b style="color: #B01E23;">acum mai bine de 730</b> de zile, familia medie din Ucraina se confrunta și așa cu greutăți economice, dar avea și momente de stabilitate și speranță. În ultimul deceniu, rata șomajului în Ucraina nu a depășit 10%. În ianuarie 2022, rata șomajului era de <b style="color: #B01E23;">10,5%</b>.',
            overlayImage: 'familie.gif',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            chartData: {
                labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
                label: 'Dataset 1',
                dataPoints: [10.5, 8.6, null, null]
            
            },
            yAxisMin: 0, // Customize minimum value for y-axis
            yAxisMax: 35,
            chartTitle: 'Rata șomajului', // Customize maximum value for y-axis
        
        
        },


        {
            id: 'cap2.1',
            daysAgo: 700,
            showTimeline: true,           
            alignment: 'center',
            hidden: false,
            title: '<h1 class="title">După izbucnirea conflictului</h1>', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'După prima lună de război, rata șomajului a atins cote record, de <b style="color: #B01E23;">29,5%.</b>',
            overlayImage: 'army.gif',           
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            chartData: {
                labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
                label: 'Dataset 1',
                dataPoints: [10.5, 8.6, 29.5, null],
                
            },
            yAxisMin: 0, // Customize minimum value for y-axis
            yAxisMax: 35,
            chartTitle: 'Rata șomajului',
        },

        {
            id: 'cap2.2',
            daysAgo: 30,
            showTimeline: true,
            timelineImage: 'somaj1.png', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'În cei doi ani de conflict, rata șomajului a rămas constant <b style="color: #B01E23;">peste 15%,</b> dar au fost luni și cu <b style="color: #B01E23;">peste 30%.</b> ',
            overlayImage: 'army.gif',           
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            chartData: {
                labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
                label: '',
                dataPoints: [10.5, 8.6, 29.5, 27.2, 30.7, 26, 28.2, 26, 21.5,22.9, 19.7, 22.3, 21.6, 24.2, 20.5, 20.8, 17.7, 21.4, 16.6, 15.1, 15.9, 18.4, 20, 16.1, 17 ],
                
            },
            yAxisMin: 0, // Customize minimum value for y-axis
            yAxisMax: 35,
            chartTitle: 'Rata șomajului',
        },



        {
            id: 'cap3',
            daysAgo: 731,
            showTimeline: false,
            timelineImage: 'chart1.png', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Ucrainenii au avut mereu rădăcini adânci și legături puternice în comunitățile în care trăiesc. Familia, cu toate rudele din jur, are un rol crucial. Membrii ei se susțin și își împart resursele, pentru a se ajuta. Viața nu era ușoară în Ucraina nici înainte ca Rusia să o invadeze. Ucrainenii au rezistat, <b style="color: #B01E23;">în speranța unui viitor mai bun.</b>',
            overlayImage: 'social.png',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap3.1',
            daysAgo: 731,
            showTimeline: true,
            timelineImage: 'chart1.png', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Foamea e un indicator cât se poate de bază pentru viața unui om. Înainte de izbucnirea războiului, lipsa siguranței alimentare, măsurată în procentul celor care au declarat că sunt forțați să-și economisească mâncarea, pentru a le ajunge pentru o perioadă mai lungă, era <b style="color: #B01E23;">între 10 și 15%</b> în Ucraina.',
            overlayImage: 'social.png',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            chartData: {
                labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
                label: '',
                dataPoints: [15.9, 11.4, ],
                
            },
            yAxisMin: 0, // Customize minimum value for y-axis
            yAxisMax: 35,
            chartTitle: '% celor care au declarat că raționalizează mâncarea',
        },

        {
            id: 'cap3.2',
            daysAgo: 650,
            showTimeline: true,
            timelineImage: 'chart1.png', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'În primele 3 luni de război, numărul ucrainenilor aflați în situația de a-și drămui mâncarea s-a dublat: procentul a urcat la <b style="color: #B01E23;">peste 30%.</b>',
            overlayImage: 'people.gif',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            chartData: {
                labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
                label: '',
                dataPoints: [15.9, 11.4, 22.1, 22.8, 30.3, ],
                
            },
            yAxisMin: 0, // Customize minimum value for y-axis
            yAxisMax: 35,
            chartTitle: '% celor care au declarat că raționalizează mâncarea',
        },

        {
            id: 'cap3.3',
            daysAgo: 30,
            showTimeline: true,
            timelineImage: 'chart1.png', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Astăzi, doi ani mai târziu, <b style="color: #B01E23;">aproape 20%</b> dintre ei își împart alimentele cu grijă. Știu că vor veni mereu zile în care nu vor avea de unde sau cu ce să-și ia de mâncare.',
            overlayImage: 'people.gif',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            chartData: {
                labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
                label: '',
                dataPoints: [15.9, 11.4, 22.1, 22.8, 30.3, 26.6, 26.7, 22.2, 19.4, 21.9, 21.7, 22.7, 19, 22, 24.1, 20, 22.9, 26.4, 23, 20.8, 24.7, 21.5, 17.7, 23.1, 19.2,],
                
            },
            yAxisMin: 0, // Customize minimum value for y-axis
            yAxisMax: 35,
            chartTitle: '% celor care au declarat că raționalizează mâncarea',
        },

        {
            id: 'cap3.4',
            daysAgo: 30,
            showTimeline: true,
            timelineImage: 'chart1.png', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'În primul an de război, toate s-au scumpit. Indicele prețurilor de consum a crescut semnificativ, din cauza perturbărilor în lanțurile de aprovizionare, scăderii producției interne și scumpirii importurilor. Inflația a lovit în buzunarele ucrainenilor, mărind prețul bunurilor de bază și erodând puterea de cumpărare. Această situație a pus presiune suplimentară pe gospodării: nu doar că mulți nu aveau destulă mâncare, dar mai era și scumpă.',
            overlayImage: 'people.gif',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            chartData: {
                labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
                label: '',
                dataPoints: [10, 10.7, 13.7, 16.4, 18, 21.5, 22.2, 23.8, 24.6, 26.6, 26.5, 26, 24.9, 21.3, 17.9, 15.3, 12.8, 11.3, 8.6, 7.1, 5.3, 5.1, 5.1, 4.7 ],
                
            },
            yAxisMin: 0, // Customize minimum value for y-axis
            yAxisMax: 35,
            chartTitle: 'Indicele prețurilor de consum (%)',
        },

        {
            id: 'cap3.5',
            daysAgo: 30,
            showTimeline: false,
            timelineImage: 'chart1.png', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Războiul nu i-a lovit doar economic pe ucraineni. Viețile le-au fost puse în pericol și nu doar în mod direct, de atacurile rusești. Sănătatea lor e la risc, din cauza elementelor toxice eliberate în urma bombardamentelor. ',
            overlayImage: 'people.gif',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            
        },

        {
            id: 'cap3.6',
            daysAgo: 30,
            showTimeline: false,
            timelineImage: 'chart1.png', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Exploziile și distrugerile provocate infrastructurii industriale eliberează substanțe chimice periculoase și particule fine în aer, sol și surse de apă. Ucrainenii sunt în pericol de a dezvolta probleme respiratorii, afecțiuni ale pielii și alte boli grave pe termen lung. Și nu doar ei. Afectate vor fi și statele vecine, inclusiv România și românii, după cum a arătat jurnalista ucraineancă Victoria Kopenko, <a href="https://panorama.ro/razboi-ucraina-ecologie-poluare-impact-mediu-romania/" style="color:#B01E23">într-un material din Panorama</a> despre cum colții nevăzuți ai războiului din Ucraina otrăvesc și ce e în jur.',
            overlayImage: 'people.gif',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            
        },

        {
            id: 'cap12',
            daysAgo: 20,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Astăzi, dacă o familie medie din Ucraina nu a apucat să plece din calea războiului, se confruntă cu un pericol major, dincolo de bombardamentele zilnice. Utilizarea intensivă a muniției în conflictele armate are <b style="color: #B01E23;">consecințe devastatoare pentru sănătatea umană.</b>',
            overlayImage: 'army.gif',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap13',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Muniția este compusă din elemente care au efecte grave asupra organismului.',
            overlayImage: 'tabel.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap13.1',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '<b style="color: #B01E23;">Plumbul</b> este principalul compus (95–97%), alături de <b style="color: #B01E23;">zinc, nichel, bariu, mangan, cupru, antimoniu</b> și uneori <b style="color: #B01E23;">uraniu sărăcit</b>.',
            overlayImage: 'tabelelemente.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'cap13.2',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '<b style="color: #B01E23;">Plumbul</b>, extrem de toxic și ușor de înghițit, poate pătrunde în organismul uman prin inhalare, ingestie, contactul cu pielea și părul.',
            overlayImage: 'body.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'cap13.3',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Intoxicația cu plumb provoacă insuficiență renală, afectarea sistemului nervos, encefalopatie, anemie, pierderea coordonării și a memoriei.',
            overlayImage: 'intoxicatieplumb.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap14',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Particulele de <b style="color: #B01E23;">uraniu sărăcit</b>, mult mai mici decât leucocitele, pot traversa bariera hemato-encefalică, afectând nervii olfactivi și procesele cognitive direct.',
            overlayImage: 'intoxicatieuraniu.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap15',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '<b style="color: #B01E23;">Antimoniul (sau stibiul) </b> induce inflamații ale sistemului cardiovascular, respirator și digestiv, în timp ce <b style="color: #B01E23;">nichelul</b> afectează sistemul imunitar.',
            overlayImage: 'intoxicatieantimoniu.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap16',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Expunerea la concentrații mari de <b style="color: #B01E23;">cupru, mangan și zinc</b> poate avea efecte otrăvitoare, inducând pneumonie, fibroză pulmonară și letargie.',
            overlayImage: 'intoxicatiecupru.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap17',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Explozibilii, cum ar fi <b style="color: #B01E23;">TNT, DNT și RDX</b>, contribuie la poluarea chimică, provocând intoxicații acute și efecte mutagene pe termen lung la oameni. <b style="color: #B01E23;">TNT</b>, care se absoarbe ușor prin piele și membranele mucoase, în funcție de doză, poate induce efecte cancerigene.',
            overlayImage: 'intoxicatietnt.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },




        {
            id: 'cap18',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Microparticulele rezultate din distrugerea proiectilelor de muniție pătrund în corpul oamenilor și animalelor prin <b style="color: #B01E23;">apă, aer și sol</b>.',
            overlayImage: 'general.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },


















        {
            id: 'cap4',
            daysAgo: 760,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: 'Înainte de conflict', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Ucraina adăpostea <b style="color: #B01E23;">peste 70 de mii de specii de floră și faună</b>, reprezentând mai mult de 35% din biodiversitatea Europei. Parcurile naționale și rezervațiile din Ucraina fac parte dintr-un lanț pan-european de situri protejate, numit „Rețeaua Emerald”, care adăpostesc multe specii pe cale de dispariție.',
            overlayImage: 'nature.gif',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            timelineImage: 'chart.png', 
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap4.1',
            daysAgo: 30,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: 'După izbucnirea conflictului', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Evaluări intermediare indică faptul că mai bine de o treime din siturile protejate din Ucraina au fost afectate de război. Conform Societății de Conservare a Naturii din Ucraina, <b style="color: #B01E23;">peste 44%</b> din cele mai valoroase zone naturale ale Ucrainei sunt afectate de conflictul armat.',
            overlayImage: 'sol.gif',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            timelineImage: 'chart.png', 
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap5',
            daysAgo: 731,
            showTimeline: true,
            alignment: 'center',
            hidden: false,
            title: 'Înainte de izbucnirea conflictului', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Ucraina era renumită pentru fertilitatea solurilor sale, în special pentru <b style="color: #B01E23;">cernoziomuri,</b> care acoperă o mare parte din teritoriul național. Aceste soluri sunt bogate în <b style="color: #B01E23;">humus și nutrienți,</b> ceea ce a permis Ucrainei să aibă o producție agricolă impresionantă, cu un accent deosebit pe cereale. Ucraina nu doar că <b style="color: #B01E23;">își acoperea  nevoile interne de consum, dar era și unul dintre cei mai mari exportatori de cereale la nivel mondial.</b>',
            overlayImage: 'tractor.gif',
            showChart: false,
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            chartData: {
                labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
                label: '',
                dataPoints: [6.2, 5.4, null],
                
            },
            yAxisMin: 0, // Customize minimum value for y-axis
            yAxisMax: 7,
            chartTitle: 'Evoluția lunară a exporturilor de cereale din Ucraina (milioane tone)',
        },

        {
            id: 'cap5.1',
            daysAgo: 30,
            showTimeline: true,
            alignment: 'center',
            hidden: false,
            title: 'După izbucnirea conflictului', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Conflictul a perturbat lanțurile de aprovizionare și a limitat accesul la piețele tradiționale, în timp ce infrastructura critică a fost adesea vizată de atacurile Rusiei.',
            overlayImage: 'agricultura.png',
            showChart: false,
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            chartData: {
                labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
                label: '',
                dataPoints: [6.2, 5.4, 0.3, 0.8, 1.5, 2.2, 2.2, 3.2, 4.7, 5.7, 5.1, 5.9, 4.8, 5.8, 6.4, 4.1, 3.6, 4, 2.6, 3.1, 3,3.3, 4.5, 6.1, 6,],
                
            },
            yAxisMin: 0, // Customize minimum value for y-axis
            yAxisMax: 7,
            chartTitle: 'Evoluția lunară a exporturilor de cereale din Ucraina (milioane tone)',
        },





        
        {
            id: 'cap11',
            daysAgo: 430,
            showTimeline: false,
            mapStyle: 'mapbox://styles/ed1990/clsj06byl01z201r406bhe7cd',
            endCustomScroll: true,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            
            description: 'Agricultura, care a fost odată coloana vertebrală a economiei Ucrainei, și mediul, crucial pentru sănătatea și bunăstarea populației, sunt acum serios compromise. Terenurile odată fertile sunt pustiite, iar ecosistemele distruse. Ucraina consumă în medie <b style="color: #B01E23;">110.000 de obuze de calibrul 155 mm pe lună</b>, a dezvăluit Oleksiy Reznikov, fostul ministru al Apărării din Ucraina, în <a href="https://www.ft.com/content/75ee9701-aa93-4c5d-a1bc-7a51422280fd" style="color:#B01E23">Financial Times</a>. Comparativ, Federația Rusă recurge la o utilizare și mai masivă a munițiilor, folosind aproximativ <b style="color: #B01E23;">440.000 de obuze de 155 mm în fiecare lună.</b>',
            
            location: {
                center: [31.2718321, 49.4871968],
                zoom: 5,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'data-driven-circles',
                    opacity: 1,
                    duration: 2000
                }
            ],
            onChapterExit: [
                {
                    layer: 'data-driven-circles',
                    opacity: 0
                }
            ]
        },


        

        {
            id: 'cap19',
            daysAgo: 430,
            showTimeline: false,            
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Bazinul Niprului, inima hidrografică a Ucrainei și o componentă vitală a ecosistemului european, se confruntă cu o criză de mediu. Majoritatea corpurilor de apă din acest bazin sunt contaminate cu metale grele, <b style="color: #B01E23;">TNT, produse petroliere și alte reziduuri periculoase</b>. Peștii mor, iar ciclurile naturale de viață și migrație ale păsărilor acvatice sunt perturbate.',
            overlayImage: 'nipru.png',
            location: {
                center: [31.2718321, 49.4871968],
                zoom: 6,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            //     {
            //         layer: 'Data-driven-circles',
            //         opacity: 0,
            //         duration: 6000
            //     }
            // ],
            // onChapterExit: [
            //     {
            //         layer: 'Data-driven-circles',
            //         opacity: 0
            //     }
            ],
        },

        {
            id: 'cap20.1',
            daysAgo: 430,
            showTimeline: false,
            mapStyle: 'mapbox://styles/ed1990/clsjgep6d021001qy74i3cwo4',
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'După primele 4 luni de război, luptele au afectat grav apa. <b style="color: #B01E23;">Cercurile portocalii de pe hartă sunt incidentele raportate, de afectare a resurselor de apă. </b>Produsele petroliere și substanțele pe bază de azot se acumulează persistent în apele subterane. De asemenea, aceste zone sunt adesea poluate cu metale toxice, inclusiv plumb, cadmiu și crom.',
            
            location: {
                center: [31.2718321, 49.4871968],
                zoom: 6,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'data-driven-circles',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'data-driven-circles',
                    opacity: 1
                }
            ],
            
        },





        

        {
            id: 'cap21',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Ploaia acidă  e provocată de activitățile toxice ale oamenilor. Războiul e una dintre ele. Este formată din <b style="color: #B01E23;">oxizi de sulf (SO₂)</b>, <b style="color: #B01E23;">dioxid de carbon (CO₂)</b> și (<b style="color: #B01E23;">azot NOₓ</b>) emiși de explozii, care se transformă în atmosferă sub acțiunea soarelui și a oxigenului, având un impact devastator asupra mediului.',
            overlayImage: 'generals.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap22',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Mișcarea verticală a acestor componente acide este limitată de structura atmosferei și de distribuția verticală a temperaturii. Potrivit articolelor de specialitate, datele săptămânale dinainte și după începerea războiului arată o încărcare puternică a aerului cu <b style="color: #B01E23;">dioxid de sulf SO2 și PM2.5 (particule fine poluante)</b>. ',
            overlayImage: 'poluareaer.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        

        {
            id: 'cap24',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Războiul din Ucraina nu numai că a transformat unele dintre cele mai fertile soluri ale lumii într-un dezastru ecologic, dar a devastat și rezervațiile naturale și biodiversitatea. Peste 12.000 de kilometri pătrați de arii protejate au devenit zone de conflict armat.',
            overlayImage: 'sol.gif',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap25',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Distrugerea habitatelor naturale împreună cu poluarea chimică din sol, provocate de explozibili și metale grele, lasă în urmă un peisaj irecognoscibil. Orașele distruse reprezintă o amenințare ecologică suplimentară, cu bombe nedetonate, cu praf cancerigen care iese din  ruine și cu moloz care este foarte greu de reciclat.',
            overlayImage: 'sol.gif',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'cap26',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Războiul din Ucraina a dus și la contaminarea <b style="color: #B01E23;">solului</b> cu o gamă largă de metale grele, inclusiv <b style="color: #B01E23;">plumb, crom, arsen, mercur, nichel, zinc, cadmiu,</b> precum și cu reziduuri de armament din fier, oțel și aliaje metalice, inclusiv <b style="color: #B01E23;">uraniu sărăcit.</b>',
            overlayImage: 'tabelelemente.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap27',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'După explozii, fragmentele de metal și substanțele chimice persistă în sol, unele răspândindu-se pe o rază de <a href="https://uncg.org.ua/iakoiu-maie-buty-dolia-poshkodzhenykh-vybukhamy-ukrainskykh-terytorij/" style="color:#B01E23">până la 35 de metri.</a> ',
            overlayImage: 'diameter.gif',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap27.1',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Zilnic, mii de obuze <a href="https://panorama.ro/razboi-ucraina-ecologie-poluare-impact-mediu-romania/" style="color:#B01E23">care pot elibera între 1,6 și 3,5 kg de fragmente toxice fiecare</a> sunt folosite în zonele de conflict. Astfel, peste 651 kg de fragmente toxice se infiltrează zilnic în sol, provenind din carcase de muniție care includ, pe lângă alte elemente, sulf și cupru – metale cu potențial toxic semnificativ. ',
            overlayImage: 'fragmente.gif',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'cap28',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Astăzi, după doi ani de război, familiile din Ucraina trăiesc într-o realitate radical schimbată, marcată profund de umbra războiului. Chinul nu se va sfârși nici când războiul se va încheia. ',
            overlayImage: 'astazi.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap29',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Un exemplu elocvent al impactului pe termen lung sunt minele neexplodate și uriașa misiune de deminare care așteaptă Ucraina, după război. Conform unor estimări citate de Washington Post, dacă 500 de echipe de săpători sunt mobilizate pentru această misiune, ar dura <b style="color: #B01E23;">757 de ani pentru a curăța teritoriul Ucrainei de minele</b> lăsate în urma conflictului inițiat de Rusia. Cea mai recentă estimare a instituțiilor internaționale și a guvernului de la Kiev arată că reconstrucția Ucrainei după război ar costa <b style="color: #B01E23;">486 de miliarde de dolari.</b> Familiile ucrainene au de luptat nu doar în acest război, ci vor avea pe generații de acum încolo.  ',
            overlayImage: 'generalss.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },


















        


        
        

    ]
};