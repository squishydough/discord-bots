"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instruments = exports.triggers = void 0;
exports.triggers = [
    { instrument: 'trumpet', artist: 'Buddy Bolden' },
    { instrument: 'trumpet', artist: 'Freddie Keppard' },
    { instrument: 'trumpet', artist: 'Johnny Dunn' },
    { instrument: 'trumpet', artist: 'King Oliver' },
    { instrument: 'trumpet', artist: 'Louis Armstrong' },
    { instrument: 'trumpet', artist: 'Bix Beiderbecke' },
    { instrument: 'trumpet', artist: 'Rex Stewart' },
    { instrument: 'trumpet', artist: 'Roy Eldridge' },
    { instrument: 'trumpet', artist: 'Dizzy Gillespie' },
    { instrument: 'trumpet', artist: 'Miles Davis' },
    { instrument: 'trumpet', artist: 'Fats Navarro' },
    { instrument: 'trumpet', artist: 'Chet Baker' },
    { instrument: 'trumpet', artist: 'Clifford Brown' },
    { instrument: 'trumpet', artist: 'Blue Mitchell' },
    { instrument: 'trumpet', artist: 'Maynard Ferguson' },
    { instrument: 'trumpet', artist: 'Thad Jones' },
    { instrument: 'trumpet', artist: 'Donald Byrd' },
    { instrument: 'trumpet', artist: 'Woody Shaw' },
    { instrument: 'trumpet', artist: 'Lee Morgan' },
    { instrument: 'trumpet', artist: 'Freddie Hubbard' },
    { instrument: 'trumpet', artist: 'Clark Terry' },
    { instrument: 'trumpet', artist: 'Art Farmer' },
    { instrument: 'trumpet', artist: 'Don Ellis' },
    { instrument: 'trumpet', artist: 'Don Cherry' },
    { instrument: 'trumpet', artist: 'Bill Dixon' },
    { instrument: 'trumpet', artist: 'Michael Mantler' },
    { instrument: 'trumpet', artist: 'Leo Smith' },
    { instrument: 'trumpet', artist: 'Kenny Wheeler' },
    { instrument: 'trumpet', artist: 'Lesli Dalaba' },
    { instrument: 'trumpet', artist: 'Lester Bowie' },
    { instrument: 'trumpet', artist: 'Mark Isham' },
    { instrument: 'trumpet', artist: 'Butch Morris' },
    { instrument: 'trumpet', artist: 'Wynton Marsalis' },
    { instrument: 'trumpet', artist: 'Terence Blanchard' },
    { instrument: 'trumpet', artist: 'Arturo Sandoval' },
    { instrument: 'trumpet', artist: 'Tom Harrell' },
    { instrument: 'trumpet', artist: 'Roy Hargrove' },
    { instrument: 'trumpet', artist: 'Dave Douglas' },
    { instrument: 'trumpet', artist: 'Christian Scott' },
    { instrument: 'trumpet', artist: 'Rob Mazurek' },
    { instrument: 'keyboard', artist: 'Scott Joplin' },
    { instrument: 'keyboard', artist: 'James Johnson' },
    { instrument: 'keyboard', artist: 'Jelly Roll Morton' },
    { instrument: 'keyboard', artist: 'Fats Waller' },
    { instrument: 'keyboard', artist: 'Earl Hines' },
    { instrument: 'keyboard', artist: 'Count Basie' },
    { instrument: 'keyboard', artist: 'Duke Ellington' },
    { instrument: 'keyboard', artist: 'Mary Lou Williams' },
    { instrument: 'keyboard', artist: 'Art Tatum' },
    { instrument: 'keyboard', artist: 'Teddy Wilson' },
    { instrument: 'keyboard', artist: 'Erroll Garner' },
    { instrument: 'keyboard', artist: 'Thelonious Monk' },
    { instrument: 'keyboard', artist: 'John Lewis' },
    { instrument: 'keyboard', artist: 'Bud Powell' },
    { instrument: 'keyboard', artist: 'Lennie Tristano' },
    { instrument: 'keyboard', artist: 'Dave Brubeck' },
    { instrument: 'keyboard', artist: 'George Shearing' },
    { instrument: 'keyboard', artist: 'Oscar Peterson' },
    { instrument: 'keyboard', artist: 'Stan Kenton' },
    { instrument: 'keyboard', artist: 'Horace Silver' },
    { instrument: 'keyboard', artist: 'Cedar Walton' },
    { instrument: 'keyboard', artist: 'Herbie Nichols' },
    { instrument: 'keyboard', artist: 'George Russell' },
    { instrument: 'keyboard', artist: 'Gil Evans' },
    { instrument: 'keyboard', artist: 'Bill Evans' },
    { instrument: 'keyboard', artist: 'Claude Thornhill' },
    { instrument: 'keyboard', artist: 'Jimmy Smith' },
    { instrument: 'keyboard', artist: 'Larry Young' },
    { instrument: 'keyboard', artist: 'Mal Waldron' },
    { instrument: 'keyboard', artist: 'Andrew Hill' },
    { instrument: 'keyboard', artist: 'Don Pullen' },
    { instrument: 'keyboard', artist: 'Cecil Taylor' },
    { instrument: 'keyboard', artist: 'Jaki Byard' },
    { instrument: 'keyboard', artist: 'Tommy Flanagan' },
    { instrument: 'keyboard', artist: 'Stanley Cowell' },
    { instrument: 'keyboard', artist: 'Kenny Barron' },
    { instrument: 'keyboard', artist: 'Hank Jones' },
    { instrument: 'keyboard', artist: 'Myra Melford' },
    { instrument: 'keyboard', artist: 'Marilyn Crispell' },
    { instrument: 'keyboard', artist: 'Joanne Brackeen' },
    { instrument: 'keyboard', artist: 'Sun Ra' },
    { instrument: 'keyboard', artist: 'Dollar Brand' },
    { instrument: 'keyboard', artist: 'Chick Corea' },
    { instrument: 'keyboard', artist: 'Herbie Hancock' },
    { instrument: 'keyboard', artist: 'Paul Bley' },
    { instrument: 'keyboard', artist: 'McCoy Tyner' },
    { instrument: 'keyboard', artist: 'Joe Zawinul' },
    { instrument: 'keyboard', artist: 'Carla Bley' },
    { instrument: 'keyboard', artist: 'Keith Jarrett' },
    { instrument: 'keyboard', artist: 'Muhal Richard Abrams' },
    { instrument: 'keyboard', artist: 'Amina-Claudine Myers' },
    { instrument: 'keyboard', artist: 'Richard Teitelbaum' },
    { instrument: 'keyboard', artist: 'Anthony Davis' },
    { instrument: 'keyboard', artist: 'Wayne Horvitz' },
    { instrument: 'keyboard', artist: 'Lyle Mays' },
    { instrument: 'keyboard', artist: 'Misha Mengelberg' },
    { instrument: 'keyboard', artist: 'Irene Schweizer' },
    { instrument: 'keyboard', artist: 'Matthew Shipp' },
    { instrument: 'keyboard', artist: 'Geri Allen' },
    { instrument: 'keyboard', artist: 'Martial Solal' },
    { instrument: 'keyboard', artist: 'Paul Plimley' },
    { instrument: 'keyboard', artist: 'Jessica Williams' },
    { instrument: 'keyboard', artist: 'Brad Mehldau' },
    { instrument: 'keyboard', artist: 'Jason Moran' },
    { instrument: 'keyboard', artist: 'Vijay Iver' },
    { instrument: 'keyboard', artist: 'Fred Hersch' },
    { instrument: 'keyboard', artist: 'Hiromi' },
    { instrument: 'drums', artist: 'Buddy Rich' },
    { instrument: 'drums', artist: 'Gene Kupra' },
    { instrument: 'drums', artist: 'Kenny Clarke' },
    { instrument: 'drums', artist: 'Roy Haynes' },
    { instrument: 'drums', artist: 'Shelly Manne' },
    { instrument: 'drums', artist: 'Chico Hamilton' },
    { instrument: 'drums', artist: 'Art Blakey' },
    { instrument: 'drums', artist: 'Max Roach' },
    { instrument: 'drums', artist: 'Lionel Hampton' },
    { instrument: 'drums', artist: 'Philly Joe Jones' },
    { instrument: 'drums', artist: 'Mel Lewis' },
    { instrument: 'drums', artist: 'Elvin Jones' },
    { instrument: 'drums', artist: 'Ed Blackwell' },
    { instrument: 'drums', artist: 'Milford Graves' },
    { instrument: 'drums', artist: 'Barry Altschul' },
    { instrument: 'drums', artist: 'Andrew Cyrille' },
    { instrument: 'drums', artist: 'Rashied Ali' },
    { instrument: 'drums', artist: 'Sunny Murray' },
    { instrument: 'drums', artist: 'Tony Williams' },
    { instrument: 'drums', artist: 'Don Moye' },
    { instrument: 'drums', artist: 'Paul Motian' },
    { instrument: 'drums', artist: 'Jack DeJohnette' },
    { instrument: 'drums', artist: 'Billy Cobham' },
    { instrument: 'drums', artist: 'Sam Bennett' },
    { instrument: 'drums', artist: 'Trilok Gurtu' },
    { instrument: 'drums', artist: 'Glen Velez' },
    { instrument: 'drums', artist: 'Nana Vasconcelos' },
    { instrument: 'drums', artist: 'Michael Shrieve' },
    { instrument: 'drums', artist: 'Stomu Yamashta' },
    { instrument: 'drums', artist: 'Gerry Hemingway' },
    { instrument: 'drums', artist: 'Ronald Shannon Jackson' },
    { instrument: 'drums', artist: 'Tony Oxley' },
    { instrument: 'drums', artist: 'Han Bennink' },
    { instrument: 'drums', artist: 'Paul Lovens' },
    { instrument: 'drums', artist: 'William Hooker' },
    { instrument: 'drums', artist: 'David Moss' },
    { instrument: 'drums', artist: 'Charles Noyes' },
    { instrument: 'drums', artist: 'Ikue Mori' },
    { instrument: 'drums', artist: 'Bobby Previte' },
    { instrument: 'drums', artist: 'Peter Erskine' },
    { instrument: 'drums', artist: 'Danny Gottlieb' },
    { instrument: 'drums', artist: 'Chris Corsano' },
    { instrument: 'guitar', artist: 'Freddie Green' },
    { instrument: 'guitar', artist: 'Eddie Lang' },
    { instrument: 'guitar', artist: 'Django Reinhardt' },
    { instrument: 'guitar', artist: 'Charlie Christian' },
    { instrument: 'guitar', artist: 'Eddie Condon' },
    { instrument: 'guitar', artist: 'Kenny Burrell' },
    { instrument: 'guitar', artist: 'Wes Montgomery' },
    { instrument: 'guitar', artist: 'Jim Hall' },
    { instrument: 'guitar', artist: 'Joe Pass' },
    { instrument: 'guitar', artist: 'Eddie Durham' },
    { instrument: 'guitar', artist: 'Larry Coryell' },
    { instrument: 'guitar', artist: 'John McLaughlin' },
    { instrument: 'guitar', artist: 'John Abercrombie' },
    { instrument: 'guitar', artist: 'George Benson' },
    { instrument: 'guitar', artist: 'Derek Bailey' },
    { instrument: 'guitar', artist: 'Keith Rowe' },
    { instrument: 'guitar', artist: 'Eugene Chadbourne' },
    { instrument: 'guitar', artist: 'Kevin Drumm' },
    { instrument: 'guitar', artist: 'Ralph Towner' },
    { instrument: 'guitar', artist: 'David Torn' },
    { instrument: 'guitar', artist: 'Steve Tibbetts' },
    { instrument: 'guitar', artist: 'Nels Cline' },
    { instrument: 'guitar', artist: 'Fred Frith' },
    { instrument: 'guitar', artist: 'Pat Metheny' },
    { instrument: 'guitar', artist: 'James Blood Ulmer' },
    { instrument: 'guitar', artist: 'Sonny Sharrock' },
    { instrument: 'guitar', artist: 'Al DiMeola' },
    { instrument: 'guitar', artist: 'John Scofield' },
    { instrument: 'guitar', artist: 'Elliott Sharp' },
    { instrument: 'guitar', artist: 'Alan Licht' },
    { instrument: 'guitar', artist: 'Jon Rose' },
    { instrument: 'guitar', artist: 'Henry Kaiser' },
    { instrument: 'guitar', artist: 'Bill Frisell' },
    { instrument: 'guitar', artist: 'Mike Stern' },
    { instrument: 'guitar', artist: 'Stanley Jordan' },
    { instrument: 'guitar', artist: 'Mary Halvorson' },
    { instrument: 'bass', artist: 'Steve Brown ' },
    { instrument: 'bass', artist: 'John Kirby ' },
    { instrument: 'bass', artist: 'Walter Page' },
    { instrument: 'bass', artist: 'Jimmy Blanton ' },
    { instrument: 'bass', artist: 'Milt Hinton' },
    { instrument: 'bass', artist: 'Milt Jackson ' },
    { instrument: 'bass', artist: 'Percy Heath' },
    { instrument: 'bass', artist: 'Charles Mingus' },
    { instrument: 'bass', artist: 'Scott LaFaro' },
    { instrument: 'bass', artist: 'Ron Carter' },
    { instrument: 'bass', artist: 'Stanley Clarke' },
    { instrument: 'bass', artist: 'Steve Swallow' },
    { instrument: 'bass', artist: 'Jamaladeen Tacuma' },
    { instrument: 'bass', artist: 'Eberhard Weber' },
    { instrument: 'bass', artist: 'Charlie Haden' },
    { instrument: 'bass', artist: 'Cecil McBee' },
    { instrument: 'bass', artist: 'David Friesen' },
    { instrument: 'bass', artist: 'Dave Holland' },
    { instrument: 'bass', artist: 'Jaco Pastorius' },
    { instrument: 'bass', artist: "Patrick O'Hearn" },
    { instrument: 'bass', artist: 'Bob Wasserman' },
    { instrument: 'bass', artist: 'Mark Helias' },
    { instrument: 'bass', artist: 'Maarten Altena' },
    { instrument: 'bass', artist: 'Peter Kowald' },
    { instrument: 'bass', artist: 'Saheb Sarbib' },
    { instrument: 'bass', artist: 'Marc Johnson' },
    { instrument: 'bass', artist: 'Mark Egan' },
    { instrument: 'bass', artist: 'Reggie Workman' },
    { instrument: 'bass', artist: 'John Patitucci' },
    { instrument: 'bass', artist: 'Michael Formanek' },
    { instrument: 'bass', artist: 'Christian McBride' },
    { instrument: 'bass', artist: 'Marcus Miller' },
    { instrument: 'bass', artist: 'Victor Wooten' },
    { instrument: 'bass', artist: 'Christian McBride' },
    { instrument: 'bass', artist: 'Esperanza Spalding' },
    { instrument: 'flute', artist: 'Wayne Carver' },
    { instrument: 'flute', artist: 'Bud Shank' },
    { instrument: 'flute', artist: 'Herbie Mann' },
    { instrument: 'flute', artist: 'Roland Kirk' },
    { instrument: 'flute', artist: 'Eric Dolphy' },
    { instrument: 'flute', artist: 'Yusef Lateef' },
    { instrument: 'flute', artist: 'Paul Horn' },
    { instrument: 'flute', artist: 'Hubert Laws' },
    { instrument: 'flute', artist: 'Sonny Fortune' },
    { instrument: 'flute', artist: 'James Spaulding' },
    { instrument: 'flute', artist: 'James Newton' },
    { instrument: 'flute', artist: 'Robert Dick' },
    { instrument: 'flute', artist: 'Dave Valentin' },
    { instrument: 'flute', artist: 'Frank Wess' },
    { instrument: 'flute', artist: 'Henry Threadgill' },
    { instrument: 'saxophone', artist: 'Coleman Hawkins' },
    { instrument: 'saxophone', artist: 'Lester Young' },
    { instrument: 'saxophone', artist: 'Ben Webster' },
    { instrument: 'saxophone', artist: 'Hank Mobley' },
    { instrument: 'saxophone', artist: 'Tina Brooks' },
    { instrument: 'saxophone', artist: 'Dexter Gordon' },
    { instrument: 'saxophone', artist: 'Oliver Nelson' },
    { instrument: 'saxophone', artist: 'Stan Getz' },
    { instrument: 'saxophone', artist: 'Zoot Sims' },
    { instrument: 'saxophone', artist: 'Sonny Rollins' },
    { instrument: 'saxophone', artist: 'Wayne Shorter' },
    { instrument: 'saxophone', artist: 'John Coltrane' },
    { instrument: 'saxophone', artist: 'Albert Ayler' },
    { instrument: 'saxophone', artist: 'Archie Shepp' },
    { instrument: 'saxophone', artist: 'Sam Rivers' },
    { instrument: 'saxophone', artist: 'John Gilmore' },
    { instrument: 'saxophone', artist: 'Pharoah Sanders' },
    { instrument: 'saxophone', artist: 'Kalaparush Maurice McIntyre' },
    { instrument: 'saxophone', artist: 'Fred Anderson' },
    { instrument: 'saxophone', artist: 'Gato Barbieri' },
    { instrument: 'saxophone', artist: 'Joe Henderson' },
    { instrument: 'saxophone', artist: 'David Murray' },
    { instrument: 'saxophone', artist: 'Michael Brecker' },
    { instrument: 'saxophone', artist: 'Chico Freeman' },
    { instrument: 'saxophone', artist: 'Frank Lowe' },
    { instrument: 'saxophone', artist: 'Joe McPhee' },
    { instrument: 'saxophone', artist: 'Joe Henderson' },
    { instrument: 'saxophone', artist: 'Branford Marsalis' },
    { instrument: 'saxophone', artist: 'James Carter' },
    { instrument: 'saxophone', artist: 'John Butcher' },
    { instrument: 'saxophone', artist: 'Joe Lovano' },
    { instrument: 'saxophone', artist: 'Marty Fogel' },
    { instrument: 'saxophone', artist: 'Larry Ochs' },
    { instrument: 'saxophone', artist: 'Ken Vandermark' },
    { instrument: 'saxophone', artist: 'Joshua Redman' },
    { instrument: 'saxophone', artist: 'Gary Thomas' },
    { instrument: 'saxophone', artist: 'Johnny Hodges' },
    { instrument: 'saxophone', artist: 'Benny Carter' },
    { instrument: 'saxophone', artist: 'Charlie Parker' },
    { instrument: 'saxophone', artist: 'Lee Konitz' },
    { instrument: 'saxophone', artist: 'Paul Desmond' },
    { instrument: 'saxophone', artist: 'Art Pepper' },
    { instrument: 'saxophone', artist: 'Marion Brown' },
    { instrument: 'saxophone', artist: 'Cannonball Adderley' },
    { instrument: 'saxophone', artist: 'Phil Woods' },
    { instrument: 'saxophone', artist: 'Jackie McLean' },
    { instrument: 'saxophone', artist: 'Ornette Coleman' },
    { instrument: 'saxophone', artist: 'Eric Dolphy' },
    { instrument: 'saxophone', artist: 'Paul Winter' },
    { instrument: 'saxophone', artist: 'John Tchicai' },
    { instrument: 'saxophone', artist: 'Jimmy Lyons' },
    { instrument: 'saxophone', artist: 'Anthony Braxton' },
    { instrument: 'saxophone', artist: 'Roscoe Mitchell' },
    { instrument: 'saxophone', artist: 'Joseph Jarman' },
    { instrument: 'saxophone', artist: 'Julius Hemphill' },
    { instrument: 'saxophone', artist: 'Oliver Lake' },
    { instrument: 'saxophone', artist: 'Arthur Blythe' },
    { instrument: 'saxophone', artist: 'Joe Harriott' },
    { instrument: 'saxophone', artist: 'Tim Berne' },
    { instrument: 'saxophone', artist: 'John Zorn' },
    { instrument: 'saxophone', artist: 'Marty Ehrlich' },
    { instrument: 'saxophone', artist: 'Henry Threadgill' },
    { instrument: 'saxophone', artist: 'Steve Coleman' },
    { instrument: 'saxophone', artist: 'Greg Osby' },
    { instrument: 'saxophone', artist: 'James Spaulding' },
    { instrument: 'saxophone', artist: 'Rudresh Mahanthappa' },
    { instrument: 'saxophone', artist: 'Gerry Mulligan' },
    { instrument: 'saxophone', artist: 'Pepper Adams' },
    { instrument: 'saxophone', artist: 'Hamiett Bluiett' },
    { instrument: 'saxophone', artist: 'Steve Lacy' },
    { instrument: 'saxophone', artist: 'Lol Coxhill' },
    { instrument: 'saxophone', artist: 'Dave Liebman' },
    { instrument: 'saxophone', artist: 'Branford Marsalis' },
    { instrument: 'saxophone', artist: 'John Surman ' },
    { instrument: 'saxophone', artist: 'Evan Parker' },
    { instrument: 'saxophone', artist: 'Jon Raskin' },
    { instrument: 'saxophone', artist: 'Dave Liebman ' },
    { instrument: 'saxophone', artist: 'Gary Smulyan' },
    { instrument: 'clarinet', artist: 'Barney Bigard' },
    { instrument: 'clarinet', artist: 'Johnny Dodds' },
    { instrument: 'clarinet', artist: 'Jimmie Noone' },
    { instrument: 'clarinet', artist: 'Sidney Bechet' },
    { instrument: 'clarinet', artist: 'Pee Wee Russell' },
    { instrument: 'clarinet', artist: 'Benny Goodman' },
    { instrument: 'clarinet', artist: 'Woody Herman' },
    { instrument: 'clarinet', artist: 'Artie Shaw' },
    { instrument: 'clarinet', artist: 'Jimmy Dorsey' },
    { instrument: 'clarinet', artist: 'Tony Scott' },
    { instrument: 'clarinet', artist: 'Buddy DeFranco' },
    { instrument: 'clarinet', artist: 'Jimmy Giuffre' },
    { instrument: 'clarinet', artist: 'Eric Dolphy' },
    { instrument: 'clarinet', artist: 'Marty Ehrlich' },
    { instrument: 'clarinet', artist: 'Don Byron' },
    { instrument: 'clarinet', artist: 'Guillermo Gregorio' },
    { instrument: 'clarinet', artist: 'Anat Cohen' },
    { instrument: 'clarinet', artist: 'Ken Peplowski' },
    { instrument: 'clarinet', artist: "Paquito D'Rivera" },
    { instrument: 'trombone', artist: 'Kid Ory' },
    { instrument: 'trombone', artist: 'Miff Mole' },
    { instrument: 'trombone', artist: 'Tommy Dorsey' },
    { instrument: 'trombone', artist: 'Jack Teargarden' },
    { instrument: 'trombone', artist: 'Kai Winding' },
    { instrument: 'trombone', artist: 'Bob Brookmeyer' },
    { instrument: 'trombone', artist: 'J.J. Johnson' },
    { instrument: 'trombone', artist: 'Bill Harris' },
    { instrument: 'trombone', artist: 'Roswell Rudd' },
    { instrument: 'trombone', artist: 'Curtis Fuller' },
    { instrument: 'trombone', artist: 'George Lewis' },
    { instrument: 'trombone', artist: 'Jim Staley' },
    { instrument: 'trombone', artist: 'Ray Anderson' },
    { instrument: 'trombone', artist: 'Peter Zummo' },
    { instrument: 'trombone', artist: 'Jimmy Knepper' },
    { instrument: 'trombone', artist: 'Robin Eubanks' },
    { instrument: 'trombone', artist: 'Julian Priester' },
    { instrument: 'trombone', artist: 'Albert Mangelsdorff' },
    { instrument: 'trombone', artist: 'Guenter Christmann' },
    { instrument: 'trombone', artist: 'Paul Rutherford' },
    { instrument: 'trombone', artist: 'Steve Turre' },
    { instrument: 'trombone', artist: 'Conrad Herwig' },
    { instrument: 'groups', artist: 'Original Dixieland Jass Band' },
    { instrument: 'groups', artist: 'Modern Jazz Quartet' },
    { instrument: 'groups', artist: 'Jazztet' },
    { instrument: 'groups', artist: 'Art Ensemble Of Chicago' },
    { instrument: 'groups', artist: 'Air' },
    { instrument: 'groups', artist: 'Mahavishnu Orchestra' },
    { instrument: 'groups', artist: 'Revolutionary Ensemble' },
    { instrument: 'groups', artist: 'World Saxophone Quartet' },
    { instrument: 'groups', artist: 'Weather Report' },
    { instrument: 'groups', artist: 'Oregon' },
    { instrument: 'groups', artist: 'Yellowjackets' },
    { instrument: 'groups', artist: 'Spyro Gyra' },
    { instrument: 'groups', artist: 'Shadowfax' },
    { instrument: 'groups', artist: 'Group 87' },
    { instrument: 'groups', artist: 'Montreux' },
    { instrument: 'groups', artist: 'Turtle Island String Quartet' },
    { instrument: 'groups', artist: 'Curlew' },
    { instrument: 'groups', artist: 'Borbetomagus' },
    { instrument: 'groups', artist: 'Necks' },
    { instrument: 'vocals', artist: 'Louis Armstrong' },
    { instrument: 'vocals', artist: 'Billie Holiday' },
    { instrument: 'vocals', artist: 'Ella Fitzgerald' },
    { instrument: 'vocals', artist: 'Frank Sinatra' },
    { instrument: 'vocals', artist: 'Nat King Cole' },
    { instrument: 'vocals', artist: 'Billy Eckstine' },
    { instrument: 'vocals', artist: 'Sarah Vaughan' },
    { instrument: 'vocals', artist: 'Betty Carter' },
    { instrument: 'vocals', artist: 'Carmen McRae' },
    { instrument: 'vocals', artist: 'Shirley Horn' },
    { instrument: 'vocals', artist: 'Abbey Lincoln' },
    { instrument: 'vocals', artist: 'Patty Waters' },
    { instrument: 'vocals', artist: 'Jeanne Lee' },
    { instrument: 'vocals', artist: 'Jay Clayton' },
    { instrument: 'vocals', artist: 'Bobby McFerrin' },
    { instrument: 'vocals', artist: 'Al Jarreau' },
    { instrument: 'vocals', artist: 'Sheila Jordan' },
    { instrument: 'vocals', artist: 'Cassandra Wilson' },
    { instrument: 'vocals', artist: 'Diana Krall' },
    { instrument: 'vocals', artist: 'Dianne Reeves' },
    { instrument: 'vocals', artist: 'Kurt Elling' },
    { instrument: 'violin', artist: 'Stuff Smith' },
    { instrument: 'violin', artist: 'Joe Venuti' },
    { instrument: 'violin', artist: 'Stephane Grappelly' },
    { instrument: 'violin', artist: 'Jean-Luc Ponty' },
    { instrument: 'violin', artist: 'Leroy Jenkins' },
    { instrument: 'violin', artist: 'Billy Bang' },
    { instrument: 'violin', artist: 'Mark Feldman' },
    { instrument: 'violin', artist: 'Regina Carter' },
    { instrument: 'harp', artist: 'Alice Coltrane' },
    { instrument: 'harp', artist: 'Zeena Parkins' },
    { instrument: 'accordion', artist: 'Guy Klucevsek' },
    { instrument: 'accordion', artist: 'Richard Galliano' },
    { instrument: 'vibraphone', artist: 'Lionel Hampton' },
    { instrument: 'vibraphone', artist: 'Red Norvo' },
    { instrument: 'vibraphone', artist: 'Milt Jackson' },
    { instrument: 'vibraphone', artist: 'Teddy Charles' },
    { instrument: 'vibraphone', artist: 'Cal Tjader' },
    { instrument: 'vibraphone', artist: 'Bobby Hutcherson' },
    { instrument: 'vibraphone', artist: 'Gary Burton' },
    { instrument: 'vibraphone', artist: 'Gunter Hampel' },
    { instrument: 'vibraphone', artist: 'Stefon Harris' },
    { instrument: 'cello', artist: 'Fred Katz' },
    { instrument: 'cello', artist: 'Collin Walcott' },
    { instrument: 'cello', artist: 'David Darling' },
    { instrument: 'cello', artist: 'Tom Cora' },
    { instrument: 'cello', artist: 'Hank Roberts' },
    { instrument: 'cello', artist: 'Erik Friedlander' },
    { instrument: 'cello', artist: 'Fred Lonberg-Holm' },
    { instrument: 'cello', artist: 'Okkyung Lee ' },
    { instrument: 'banjo', artist: 'Bela Fleck' },
    { instrument: 'piano', artist: 'Joey Alexander' },
    { instrument: 'piano', artist: 'Thelonius Monk' },
    { instrument: 'piano', artist: 'Art Tatum' },
    { instrument: 'piano', artist: 'Bill Evans' },
    { instrument: 'piano', artist: 'McCoy Tyner' },
    { instrument: 'piano', artist: 'Oscar Peterson' },
    { instrument: 'piano', artist: 'Herbie Hancock' },
    { instrument: 'piano', artist: 'Bud Powell' },
    { instrument: 'piano', artist: 'Keith Jarrett' },
    { instrument: 'piano', artist: 'Chick Corea' },
    { instrument: 'piano', artist: 'Jelly Roll Morton' },
    { instrument: 'piano', artist: 'Duke Ellington' },
    { instrument: 'piano', artist: 'Count Basie' },
    { instrument: 'piano', artist: 'Fats Waller' },
    { instrument: 'piano', artist: 'James P. Johnson' },
    { instrument: 'piano', artist: 'Earl Hines' },
    { instrument: 'piano', artist: 'Tommy Flanagan' },
    { instrument: 'piano', artist: 'Bob James' },
    { instrument: 'piano', artist: 'Joe Zawinul' },
    { instrument: 'piano', artist: 'Kenny Kirkland' },
    { instrument: 'piano', artist: 'Scott Joplin' },
    { instrument: 'piano', artist: 'Teddy Wilson' },
    { instrument: 'piano', artist: 'Red Garland' },
    { instrument: 'piano', artist: 'George Shearing' },
    { instrument: 'piano', artist: 'Horace Silver' },
    { instrument: 'piano', artist: 'Les McCann' },
    { instrument: 'piano', artist: 'Dave Brubeck' },
    { instrument: 'piano', artist: 'Billy Strayhorn' },
    { instrument: 'piano', artist: 'Erroll Garner' },
    { instrument: 'piano', artist: 'Ahmad Jamal' },
    { instrument: 'piano', artist: 'Ramsey Lewis' },
    { instrument: 'piano', artist: 'Sonny Clark' },
    { instrument: 'piano', artist: 'George Duke' },
    { instrument: 'piano', artist: 'Jan Hammer' },
    { instrument: 'piano', artist: 'Duke Pearson' },
    { instrument: 'piano', artist: 'Dave Grusin' },
    { instrument: 'piano', artist: 'Wynton Kelly' },
    { instrument: 'piano', artist: 'Lyle Mays' },
    { instrument: 'piano', artist: 'Sun Ra' },
    { instrument: 'piano', artist: 'Michel Petrucciani' },
    { instrument: 'piano', artist: 'Paul Bley' },
    { instrument: 'piano', artist: 'Cecil Taylor' },
    { instrument: 'piano', artist: 'John Lewis' },
    { instrument: 'piano', artist: 'Andrew Hill' },
    { instrument: 'piano', artist: 'Phineas Newborn' },
    { instrument: 'piano', artist: 'David Benoit' },
    { instrument: 'piano', artist: 'Alan Pasqua' },
    { instrument: 'piano', artist: 'Eubie Blake' },
    { instrument: 'piano', artist: 'Eddie Palmieri' },
    { instrument: 'piano', artist: 'Fletcher Henderson' },
    { instrument: 'piano', artist: 'Randy Waldman' },
    { instrument: 'piano', artist: 'Hank Jones' },
    { instrument: 'piano', artist: 'Bill Mays' },
    { instrument: 'piano', artist: 'Hampton Hawes' },
    { instrument: 'piano', artist: 'Billy Taylor' },
    { instrument: 'piano', artist: 'Vince Guaraldi' },
    { instrument: 'piano', artist: 'Mose Allison' },
    { instrument: 'piano', artist: 'Don Grolnick' },
    { instrument: 'piano', artist: 'Albert Ammons' },
    { instrument: 'piano', artist: 'Ellis Marsalis' },
    { instrument: 'piano', artist: 'Paul Nagel' },
    { instrument: 'piano', artist: 'Alan Broadbent' },
    { instrument: 'piano', artist: 'John Medeski' },
    { instrument: 'piano', artist: 'Jim Beard' },
    { instrument: 'piano', artist: 'Brad Mehldau' },
    { instrument: 'piano', artist: 'Mitch Forman' },
    { instrument: 'piano', artist: 'Joe Sample' },
    { instrument: 'piano', artist: 'Matt Denis' },
    { instrument: 'piano', artist: 'Lennie Tristano' },
    { instrument: 'piano', artist: 'Mary Lou Williams' },
    { instrument: 'piano', artist: 'Kenny Drew' },
    { instrument: 'piano', artist: 'Max Middleton' },
    { instrument: 'piano', artist: 'Jason Moran' },
    { instrument: 'piano', artist: 'Milt Buckner' },
    { instrument: 'piano', artist: 'Randy Weston' },
    { instrument: 'piano', artist: 'Andre Previn' },
    { instrument: 'piano', artist: 'Mal Waldron' },
    { instrument: 'piano', artist: 'Billy Kyle' },
    { instrument: 'piano', artist: 'Kirk Lightsey' },
    { instrument: 'piano', artist: 'Marian Macpartland' },
    { instrument: 'piano', artist: 'Barry Harris' },
    { instrument: 'piano', artist: 'Steve Kuhn' },
    { instrument: 'piano', artist: 'Danilo Perez' },
    { instrument: 'piano', artist: 'Jaki Byard' },
    { instrument: 'piano', artist: 'Mike Longo' },
    { instrument: 'piano', artist: 'Kenny Barron' },
    { instrument: 'piano', artist: 'Billy Tipton' },
    { instrument: 'piano', artist: 'Brian Culbertson' },
    { instrument: 'piano', artist: 'Gene Harris' },
    { instrument: 'piano', artist: 'Patrice Rushen' },
    { instrument: 'piano', artist: 'Cliff Korman' },
    { instrument: 'piano', artist: 'Joe Bonner' },
    { instrument: 'piano', artist: 'Perez Prado' },
    { instrument: 'piano', artist: 'Benny Green' },
    { instrument: 'piano', artist: 'Cedar Walton' },
    { instrument: 'piano', artist: 'Bobby Enriquez' },
    { instrument: 'piano', artist: 'Bobby Timmons' },
    { instrument: 'piano', artist: 'Abdullah Ibrahim' },
    { instrument: 'piano', artist: 'Hiromi Uehara' },
    { instrument: 'piano', artist: 'Tigran Hamasyan' },
    { instrument: 'organ', artist: 'Jimmy Smith' },
    { instrument: 'organ', artist: 'Jack McDuff' },
    { instrument: 'organ', artist: 'Jimmy McGriff' },
    { instrument: 'organ', artist: 'Larry Goldings' },
    { instrument: 'organ', artist: 'Lonnie Liston Smith' },
    { instrument: 'organ', artist: 'Joey Francesco' },
    { instrument: 'organ', artist: 'Charles Earland' },
    { instrument: 'organ', artist: 'Mel Rhyne' },
    { instrument: 'organ', artist: 'John Patton' },
];
exports.instruments = exports.triggers
    .filter(function (trigger) { return trigger.instrument !== 'groups'; })
    .reduce(function (acc, trigger) {
    if (!acc.some(function (t) { return t.instrument === trigger.instrument; })) {
        acc.push(trigger);
    }
    return acc;
}, []);