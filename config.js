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
    title: '<span style="font-family:\'Signika\'; font-weight: 200; padding: 0.2vh; border-radius: 10px; color: #000000; font-size: 1.7rem; display: block; margin-bottom: 2px;">Ce au lăsat în urmă</span>',
    subtitle: '<span style="font-family: \'Signika\'; color: #000000; font-size: 2.8rem; font-weight: 500;"> DOI ANI DE <span style="font-weight: bold; animation: colorFade 6s infinite;">RĂZBOI</span> ÎN UCRAINA </span>',

    byline: '<p style="text-align: center;"> <img src="./ukraine.gif"></p> <a href="https://panorama.ro/author/edit/" target="_blank">Edit Gyenge</a> <p> <img src="./scroll.png"> </p> <p> scroll </p> ',
    footer: '<br> 24 februarie 2024 <br> <a href="https://panorama.ro/author/andrei-luca-popescu/" target="_blank">Editor: Andrei Luca Popescu</a> <br> Creat folosind <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling </a> <p>Ilustrația este făcută cu Microsoft Bing Image creator</p>',
    chapters: [
        {
            id: 'cap1',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'În cei <b style="color: #B01E23;">doi ani</b> de conflict în Ucraina, războiul a lăsat urme adânci nu doar în structura socială și economică a regiunii, ci și asupra mediului înconjurător. Războiul nu a schimbat doar destine umane, dar a și reconfigurat iremediabil relația omului cu mediul, punând în lumină fragilitatea acestuia în fața conflictelor armate.',
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
            id: 'cap6',
            daysAgo: 730,
            showTimeline: true,
            mapStyle: 'mapbox://styles/ed1990/clshd5fko001d01qw5qk66k79',
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '<b style="color: #B01E23;">Ziua de 24 februarie, 2022</b> marchează începutul războiului. Nimeni nu avea cum să intuiască ce urmează să se întîmple. Pe hartă apar conflictele de la începutul invaziei rusești. Dimensiunea cercului reprezintă numărul de decese/conflict. <p><img src="legenda.png" alt="Legend" style="max-width: 50%; height: auto;"></p> ',
            
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
            id: 'cap7',
            daysAgo: 723,
            showTimeline: true,
            alignment: 'center',
            mapStyle: 'mapbox://styles/ed1990/clsiyyie6016k01ql8u500hz4',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'După <b style="color: #B01E23;">prima săptămână</b> de război',
            
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
            id: 'cap8',
            daysAgo: 700,
            showTimeline: true,
            mapStyle: 'mapbox://styles/ed1990/clsizdkrl009r01qu1zx83w3u',
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'După <b style="color: #B01E23;">prima lună</b> de război',
            
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
            id: 'cap9',
            daysAgo: 365,
            showTimeline: true,
            mapStyle: 'mapbox://styles/ed1990/clsizjen4009s01qu34rd2mnj',
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'După <b style="color: #B01E23;">primul an</b> de război',
            
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
            id: 'cap10',
            daysAgo: 7,
            showTimeline: true,
            mapStyle: 'mapbox://styles/ed1990/clsj06byl01z201r406bhe7cd',
            triggerCustomScroll: true,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'După <b style="color: #B01E23;">primii doi ani</b> de război',
            
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
            id: 'cap2',
            daysAgo: 760,
            showTimeline: true,
            timelineImage: 'somaj.png', 
            alignment: 'center',
            hidden: false,
            title: '<h1 class="title">Înainte de conflict</h1>', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Înainte de izbucnirea conflictului, adică <b style="color: #B01E23;">acum mai bine de 730</b> de zile, familia medie din Ucraina se confrunta cu o serie de provocări, dar și cu momente de stabilitate și speranță. În ultimul deceniu, rata șomajului în Ucraina nu a depășit 10%. În ianuarie, 2022, rata șomajului era de <b style="color: #B01E23;">10,5%</b>.',
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
            description: 'După prima lună de război, rata șomajului a atins cote record, de 29,5%.',
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
            description: 'În cei doi ani de conflict, rata șomajului a rămas constant peste cel puțin 15%, dar au fost luni și cu peste 30%. ',
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
            showTimeline: true,
            timelineImage: 'chart1.png', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Legăturile comunitare și extinse erau puternice, familia extinsă jucând un rol crucial în susținerea membrilor săi prin resurse partajate și asistență reciprocă. În ciuda acestor provocări, multe familii ucrainene păstrau o reziliență remarcabilă, <b style="color: #B01E23;">în speranța unui viitor mai bun pentru generațiile următoare</b>.',
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
            description: 'Înainte de izbucnirea conflictului, lipsa siguranței alimentare, măsurată în procentul celor care au declarat că sunt forțați să economisească mâncarea pentru a le ajunge pentru o perioadă mai lungă era între 10 și 15%.',
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
            description: 'În primele 3 luni de război, procentul a urcat la peste 30%.',
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
            description: 'Astăzi, aproape 20% dintre ei își împart alimentele cu grijă pentru a face față perioadelor în care nu dispun de resurse.',
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
            description: 'În primul an de război, indicele prețurilor de consum a înregistrat o creștere semnificativă. Creșterea prețurilor a fost impulsată de o combinație de factori, inclusiv perturbări în lanțurile de aprovizionare, scăderea producției interne și creșterea costurilor pentru importuri. Inflația a afectat în mod direct buzunarele consumatorilor, mărind prețul bunurilor de bază și erodând puterea de cumpărare. Această situație a pus presiune suplimentară pe gospodării. ',
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
            description: 'Pe lângă provocările economice și sociale amplificate de război, ucrainenii se confruntă și cu riscuri semnificative la adresa sănătății, cauzate de elementele toxice eliberate în urma bombardamentelor. Exploziile și distrugerile infrastructurii industriale eliberează substanțe chimice periculoase și particule fine în aer, sol și sursele de apă, punând populația în pericol de a dezvolta probleme respiratorii, afecțiuni cutanate și alte boli grave pe termen lung.',
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
            description: 'Astăzi, familia medie din Ucraina, dacă nu a apucat să plece din calea răzvoiului, se confruntă cu un pericol major, dincolo de conflictele și bombardamentele zilnice. Utilizarea intensivă a muniției în conflictele armate are <b style="color: #B01E23;">consecințe devastatoare pentru sănătatea umană.</b>',
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
            description: 'Muniția este compusă din elemente care au efecte devastatoare asupra organismului. ',
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
            description: '<b style="color: #B01E23;">Plumbul</b>, extrem de toxic și ușor ingestibil, poate pătrunde în organismul uman prin inhalare, ingestie, contactul cu pielea și părul.',
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
            description: 'Particulele de <b style="color: #B01E23;">uraniu sărăcit</b>, mult mai mici decât leucocitele, pot traversa bariera hematoencefalică, afectând nervii olfactivi și procesele cognitive direct.',
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
            description: '<b style="color: #B01E23;">Antimoniul</b> induce inflamații ale sistemelor cardiovascular, respirator și digestiv, în timp ce nichelul afectează sistemul imunitar.',
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
            description: 'Microparticulele rezultate din distrugerea proiectilelor de muniție pătrund în corpuri umane și animale prin <b style="color: #B01E23;">apă, aer și sol</b>.',
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
            showTimeline: true,
            alignment: 'center',
            hidden: false,
            title: 'Înainte de conflict', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Ucraina adăpostea <b style="color: #B01E23;">peste 70 de mii de specii de floră și faună</b>, reprezentând mai mult de 35% din biodiversitatea Europei. Parcurile naționale și rezervațiile din Ucraina fac parte dintr-un lanț pan-european de situri protejate numit ”Rețeaua Emerald”, care adăpostesc multe specii pe cale de dispariție.',
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
            showTimeline: true,
            alignment: 'center',
            hidden: false,
            title: 'După izbucnirea conflictului', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Evaluări intermediare indică faptul că mai ine de o treime din siturile protejate din Ucraina au fost afectate de război. Conform Societății de Conservare a Naturii din Ucraina, peste 44% din cele mai valoroase zone naturale ale Ucrainei sunt afectate de conflictul armat.',
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
            description: 'Ucraina era renumită pentru fertilitatea solurilor sale, în special pentru cernoziomuri, care acoperă o mare parte din teritoriul național. Aceste soluri sunt bogate în humus și nutrienți, ceea ce a facilitat producția agricolă impresionantă, cu un accent deosebit pe cereale. Ucraina nu doar că <b style="color: #B01E23;">a satisfăcut nevoile interne de consum, dar a fost și unul dintre cei mai mari exportatori de cereale la nivel mondial</b>.',
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
                dataPoints: [5.8, 5, null],
                
            },
            yAxisMin: 0, // Customize minimum value for y-axis
            yAxisMax: 6,
            chartTitle: 'Exporturile de cereale prin porturile de la Marea Neagră (milioane tone)',
        },

        {
            id: 'cap5.1',
            daysAgo: 30,
            showTimeline: true,
            alignment: 'center',
            hidden: false,
            title: 'După izbucnirea conflictului', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Conflictul a perturbat lanțurile de aprovizionare și a limitat accesul la piețele tradiționale, în timp ce infrastructura critică a fost adesea vizată. Exporturile au scăzut față de imaginea ',
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
                dataPoints: [5.8, 5, 0, 0, 0, 0, 0, 1.4, 3.3, 3.6, 2.3, 3.3, 2.8, 3.1, 3.5, 2.5, 1.2, 1.8, 0.2, 0, 0,1, 1, 2.5, 4.3, 4,],
                
            },
            yAxisMin: 0, // Customize minimum value for y-axis
            yAxisMax: 6,
            chartTitle: 'Exporturile de cereale prin porturile de la Marea Neagră (milioane tone)',
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
            
            description: 'Agricultura, care a fost odată coloana vertebrală a economiei naționale, și mediul, crucial pentru sănătatea și bunăstarea populației, sunt acum serios compromise. Terenurile odată fertile sunt pustiite, iar ecosistemele distruse, subliniind astfel impactul devastator al războiului asupra resurselor naturale și a modului de viață ucrainean. Oleksiy Reznikov, fostul ministru al Apărării din Ucraina, a dezvăluit pentru Financial Times faptul că Ucraina consumă în medie <b style="color: #B01E23;">110.000 de obuze de calibrul 155 mm pe lună</b>, o cifră care nu include muniția de alte calibre. Comparativ, Federația Rusă recurge la o utilizare și mai masivă a munițiilor, folosind aproximativ <b style="color: #B01E23;">440.000 de obuze de 155 mm în fiecare lună</b>.',
            
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
            mapStyle: 'mapbox://styles/ed1990/clsjvzovi000301qzbvl18gww',
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Bazinul Niprului, inima hidrografică a Ucrainei și o componentă vitală a ecosistemului european, se confruntă cu o criză de mediu. Majoritatea corpurilor de apă din acest bazin sunt contaminate cu metale grele, <b style="color: #B01E23;">TNT, produse petroliere și alte reziduuri periculoase</b>. Peștii mor, iar ciclurile naturale de viață și migrație ale păsărilor acvatice sunt perturbate.',
            
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
            id: 'cap20',
            daysAgo: 430,
            showTimeline: false,
            mapStyle: 'mapbox://styles/ed1990/clsjvzovi000301qzbvl18gww',
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'După primele 4 luni de război, evenimentele au lăsat situații grave de afectare a apei. Cercurile portocalii de pe hartă sunt incidentele raportate, de afectare a resurselor de apă. Produsele petroliere și substanțele pe bază de azot se acumulează persistent în apele subterane. De asemenea, aceste zone sunt adesea poluate cu metale toxice, inclusiv plumb, cadmiu și crom.',
            
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
                    layer: 'Data-driven-circles',
                    opacity: 1,
                    duration: 6000
                }
            ],
            onChapterExit: [
                {
                    layer: 'Data-driven-circles',
                    opacity: 0
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
            description: 'Ploaia acidă, diferită de precipitațiile normale, rezultă direct din activitățile umane, cum ar fi în zone de conflict precum Ucraina. Este formată din oxizi de <b style="color: #B01E23;">sulf (SO₂)</b>, dioxid de <b style="color: #B01E23;">carbon (CO₂)</b>, și azot (<b style="color: #B01E23;">NOₓ</b>) emiși de explozii, care se transformă în atmosferă sub acțiunea soarelui și a oxigenului, generând impact devastator asupra mediului.',
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
            description: 'Mișcarea verticală a acestor componente acide este limitată de structura atmosferei și de distribuția verticală a temperaturii. Potrivit articolelor de specialitate, datele săptămânale înaintea războiului și după arată în încarcare puternică a aerului cu <b style="color: #B01E23;">SO2 și PM2.5</b>. ',
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
            id: 'cap23',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            hidden: true,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'De exemplu, moleculele de oxid de sulf, cu un timp de rezidență de aproximativ două zile și la o viteză a vântului de 10 m/s, pot călători până la 2.000 km, reflectând capacitatea lor de a influența mediul pe distanțe considerabile, cu implicații serioase pentru calitatea aerului, sănătatea umană și ecosisteme.',
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
            description: 'Războiul din Ucraina nu numai că a transformat unele dintre cele mai fertile soluri ale lumii într-un peisaj de dezastru ecologic, dar a extins și devastarea asupra rezervațiilor naturale și biodiversității. Peste 12.000 de kilometri pătrați de arii protejate au devenit zone de conflict',
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
            description: 'Distrugerea habitatelor naturale, împreună cu poluarea chimică din sol provocată de explozibili și metale grele, lasă în urmă un peisaj irecognoscibil. Orașele distruse reprezintă o amenințare ecologică suplimentară, cu bombe nedetonate, eliberarea de praf cancerigen din ruine și dificultăți enorme în reciclarea molozului. ',
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
            description: 'Războiul din Ucraina a dus la contaminarea solului cu o gamă largă de metale grele, inclusiv plumb, crom, arsen, mercur, nichel, zinc, cadmiu, precum și cu reziduuri de armament din fier, oțel și aliaje metalice, inclusiv uraniu sărăcit.',
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
            description: 'După explozii, fragmentele de metal și substanțele chimice persistă în sol, unele răspândindu-se pe o rază de până la 35 de metri. Zilnic, mii de obuze, care pot elibera între 1,6 și 3,5 kg de fragmente toxice fiecare, sunt folosite în zonele de conflict. Astfel, peste 651 kg de fragmente toxice se infiltrează zilnic în sol, provenind din carcase de muniție care includ, pe lângă alte elemente, sulf și cupru – metale cu potențial toxic semnificativ. ',
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
        {
            id: 'cap28',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Astăzi, realitatea cotidiană a familiilor din Ucraina este radical schimbată față de cea de dinainte, marcată profund de umbra războiului. Un exemplu elocvent al impactului pe termen lung asupra vieții de zi cu zi este sarcina uriașă de deminare care stă în fața națiunii. Conform unor estimări citate de Washington Post, dacă 500 de echipe de săpători sunt mobilizate pentru această misiune, ar dura 757 de ani pentru a curăța teritoriul Ucrainei de minele lăsate în urma conflictului inițiat de Rusia. Această perspectivă subliniază nu doar gravitatea situației actuale, ci și amploarea provocărilor pe care familiile ucrainene le vor înfrunta pentru generații.',
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


















        


        
        

    ]
};