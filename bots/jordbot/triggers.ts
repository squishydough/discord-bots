import { ONE_OFF_TRIGGER_WEIGHT } from './weights'

export type ArtistInstrumentTrigger = {
  instrument: string
  artist: string
}

export const artistTriggers: ArtistInstrumentTrigger[] = [
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
  { instrument: 'bass', artist: `Patrick O'Hearn` },
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
  { instrument: 'saxophone', artist: 'Patrick Bartley' },
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
  { instrument: 'clarinet', artist: `Paquito D'Rivera` },
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
]

/**
 * One trigger for each instrument, used in instrument triggered responses
 */
export const instrumentTriggers: ArtistInstrumentTrigger[] = artistTriggers
  .filter((trigger) => trigger.instrument !== 'groups')
  .reduce<ArtistInstrumentTrigger[]>((acc, trigger) => {
    if (!acc.some((t) => t.instrument === trigger.instrument)) {
      acc.push(trigger)
    }
    return acc
  }, [])

export type OneOffTrigger = {
  triggers: string[]
  responses: string[]
  weight: number
}

export const oneOffTriggers: OneOffTrigger[] = [
  {
    triggers: ['jazz'],
    responses: [
      'but if you dont like jazz then have fun driving for hours and the only thing you can see is grass everywhere',
      'im a jazz guys actually',
      'I LOVE JAZZ SO MUCH OMG',
      'i live in a small town there are no jazz here ;(',
      'am i allowed to talk ab music in here',
    ],
    weight: ONE_OFF_TRIGGER_WEIGHT,
  },
  {
    triggers: ['miles davis'],
    responses: ['https://i.imgur.com/jSO2YvA.png'],
    weight: ONE_OFF_TRIGGER_WEIGHT,
  },
  {
    triggers: ['shoes'],
    responses: ['https://i.imgur.com/Epm6dQl.png'],
    weight: ONE_OFF_TRIGGER_WEIGHT,
  },
  {
    triggers: ['joey alexander'],
    responses: [
      `YO\r\nchill with the joey slander mr head joey`,
      `maybe if you listened to joey youd understand`,
      `THANKS JOEY I SURE WILL`,
      `LMAO i understand why you thought I was nicknamed joey alexander`,
      `JOEY FUCKING ALEXANDER`,
      `but good point ab nee york cause i was planning to go there for a grad trip and im pretty sure thats where joey lives`,
      `bro i saw the notification saying joey alexander replie dto me`,
      `WERE NOT ON THE FIFTH FUCKINF JOEY ALEXANDER`,
      `im so happy joey alexander himself deleted my comment`,
    ],
    weight: ONE_OFF_TRIGGER_WEIGHT,
  },
  {
    triggers: ['chess'],
    responses: ['YOU WONT LAST 0.0035 SECONDS PLAYING THIS GAME'],
    weight: ONE_OFF_TRIGGER_WEIGHT,
  },
  {
    triggers: ['squirrels'],
    responses: ['squirrels arent real'],
    weight: ONE_OFF_TRIGGER_WEIGHT,
  },
  {
    triggers: ['surefour'],
    responses: [
      'bro surefour is from calgary how cool is that\r\nme and him literally went to the same laser tag place when we were little\r\nnot at the same time but still',
    ],
    weight: ONE_OFF_TRIGGER_WEIGHT,
  },
  {
    triggers: ['legs'],
    responses: ['crazy calves bro\r\nim not jealous at all :ANGRYCRYING:'],
    weight: ONE_OFF_TRIGGER_WEIGHT,
  },
  {
    triggers: ['pokemon'],
    responses: ['i forget how to fuxkint spell it'],
    weight: ONE_OFF_TRIGGER_WEIGHT,
  },
  {
    triggers: ['party'],
    responses: ['invite me next time :heart_eyes: :heart_eyes:'],
    weight: ONE_OFF_TRIGGER_WEIGHT,
  },
  {
    triggers: ['congrats', 'congratulations', 'grats'],
    responses: [
      'Thank you so much mr. Moderator. I deeply apperciate your congratulationsand will cherish this moment in my memories as a great moment and I respect you greatly.',
      'i cant tell what is genuine from you anymore\r\nbut thanks!!',
      'and the michael jackson insta account is celebrating by giving away cds lmao',
    ],
    weight: ONE_OFF_TRIGGER_WEIGHT,
  },
  {
    triggers: ['among us'],
    responses: ['among us'],
    weight: ONE_OFF_TRIGGER_WEIGHT,
  },
  {
    triggers: ['donald glover', 'childish gambino'],
    responses: [
      'WAIT DONALD GLOVER IS CHILDISH GAMBINO??\r\nWHY DOES DONALD GLOVER DO EVERYTHING\r\nliterally fucking writes acts comdeians and then turns around and makes bangers with 1.2 billion streams\r\nand has won 5 grammys???\r\ngod dammit\r\ni need to jus stop',
    ],
    weight: ONE_OFF_TRIGGER_WEIGHT,
  },
  {
    triggers: ['squishydough', 'squishy', 'squish'],
    responses: [
      'squish you enhance my qualities',
      'i want to go to christmas dinner with squishydough ☹️',
      'but squish said thats how the song gods\r\nbut its not',
      `i would never lie about squish`
    ],
    weight: ONE_OFF_TRIGGER_WEIGHT,
  },
  {
    triggers: ['burger'],
    responses: [
      'they put too many onion on my quarter pounder with cheese and now i feel icky ☹️',
    ],
    weight: ONE_OFF_TRIGGER_WEIGHT,
  },
  {
    triggers: ['dog', 'hotdog'],
    responses: [
      'i resent this lack of respect for me. i always put ketchup and mustard on my dogs',
      'hot dog lore',
      'just saw a place selling a poutine dog\r\nwhich is a hot dog with gracy and cheese on',
    ],
    weight: 10,
  },
  {
    triggers: ['thankful', 'grateful'],
    responses: ['im thankful for your cute face'],
    weight: ONE_OFF_TRIGGER_WEIGHT,
  },
  {
    triggers: ['onnen'],
    responses: ['happy thanksigiving @Onnen#7393'],
    weight: ONE_OFF_TRIGGER_WEIGHT,
  },
  {
    triggers: ['mansplain'],
    responses: ['IT WAS JUST A DISCLAIMER I DIDNT MEAN TO MANSPLAIN'],
    weight: ONE_OFF_TRIGGER_WEIGHT,
  },
  {
    triggers: ['stupid'],
    responses: [
      `“It's not just that I'm stupid; it's that I'm just smart enough to know how stupid I am. I wish I weren't so stupid. Or that I were stupider.” - John Hall`,
    ],
    weight: ONE_OFF_TRIGGER_WEIGHT,
  },
  {
    triggers: ['egg'],
    responses: [
      'ILL SHOVEL THE HARD BOILDE EGGS INTO MY MOUTH UNTIL I DIE',
      'eggs benny squish',
      'i havent had a benny in so long',
      'i had a montecristo benedict a long ass time ago\r\ni remember not liking it but i eas like 12 so',
      'bro stop now i want a montecristo benedict'
    ],
    weight: ONE_OFF_TRIGGER_WEIGHT,
  },
  {
    triggers: ['food', 'hungry'],
    responses: [
      'AT A TABLE\r\nWE ARE EATINGN',
      'ILL COOK 5 AND EAT EACH ONE IN A BITE',
    ],
    weight: ONE_OFF_TRIGGER_WEIGHT,
  },
  {
    triggers: ['vegetable'],
    responses: ['i dojt eat vegetabled'],
    weight: ONE_OFF_TRIGGER_WEIGHT,
  },
  {
    triggers: ['breakfast'],
    responses: ['OMG I WAS JUST EATING BREAKFAST TOO'],
    weight: ONE_OFF_TRIGGER_WEIGHT,
  },
  {
    triggers: ['dairy queen'],
    responses: ['bro i havent had a dairy queen salad in a lonngass time'],
    weight: ONE_OFF_TRIGGER_WEIGHT,
  },
  {
    triggers: ['musk'],
    responses: ['musk fetish 😨😨😨💀💀'],
    weight: ONE_OFF_TRIGGER_WEIGHT,
  },
  {
    triggers: ['dj khaled'],
    responses: ['god dj khaled is so cringe'],
    weight: ONE_OFF_TRIGGER_WEIGHT,
  },
  {
    triggers: ['mercy'],
    responses: ['bro whats this gotta do with my support'],
    weight: ONE_OFF_TRIGGER_WEIGHT,
  },
  {
    triggers: ['toronto', 'montreal'],
    responses: ['toronto and montreal are the only decent jazz scenes'],
    weight: ONE_OFF_TRIGGER_WEIGHT,
  },
  {
    triggers: ['alberta'],
    responses: ['only cool thing here is the jazz musicians'],
    weight: ONE_OFF_TRIGGER_WEIGHT,
  },
  {
    triggers: ['club'],
    responses: ['theres this place called the yardbirde suite its a jazz club'],
    weight: ONE_OFF_TRIGGER_WEIGHT,
  },
  {
    triggers: ['camp'],
    responses: [
      'i thought it was supposed to be like a jazz camp with a bunch of young whippersnappers\r\nbut 4/9 people are at least 40\r\n1 of the guys is literally 72 fucking years old',
    ],
    weight: ONE_OFF_TRIGGER_WEIGHT,
  },
  {
    triggers: ['anime'],
    responses: ['its an anime about jazz'],
    weight: ONE_OFF_TRIGGER_WEIGHT,
  },
  {
    triggers: ['league of legends'],
    responses: ['you should play jazz music instead'],
    weight: ONE_OFF_TRIGGER_WEIGHT,
  },
  {
    triggers: ['michael jackson', 'king of pop'],
    responses: [
      'michael jackson died on the same day joey alexander was born',
      'i was reading a story about someone saying they went to high school with michael jackson and then i realized it was probably fanfiction',
      'economy collapsed then michael jackson died',
      'bro did you know that kid is the godfather of 2 of michael jacksons kids',
      'i just gave up and now listening to michael jackson',
      'someone in my game yesterday told me michael jackson was overrated',
    ],
    weight: ONE_OFF_TRIGGER_WEIGHT,
  },
  {
    triggers: ['classical'],
    responses: [
      'not much classical music i can actually jam out to but this is it',
    ],
    weight: ONE_OFF_TRIGGER_WEIGHT,
  },
  {
    triggers: ['apple'],
    responses: ['sheesh whats the deal with apple music'],
    weight: ONE_OFF_TRIGGER_WEIGHT,
  },
  {
    triggers: ['jeopardy'],
    responses: ['who was the dancer on the music video for Moments Notice'],
    weight: ONE_OFF_TRIGGER_WEIGHT,
  },
  {
    triggers: ['beatles'],
    responses: ['not a joke i know more music theory than the beatles'],
    weight: ONE_OFF_TRIGGER_WEIGHT,
  },
  {
    triggers: ['fall guys', 'fall beans'],
    responses: [
      'i would love to put down my saxophone right now and play fall guys with you (my best friends)',
    ],
    weight: ONE_OFF_TRIGGER_WEIGHT,
  },
  {
    triggers: ['shorts'],
    responses: [
      `but also the first thing i think when i see those shorts is 'squishy wears those'`,
    ],
    weight: ONE_OFF_TRIGGER_WEIGHT,
  },
  {
    triggers: ['quincy jones'],
    responses: [
      'QUNCY JONES IS OBSCURE https://en.wikipedia.org/wiki/Quincy_Jones',
    ],
    weight: ONE_OFF_TRIGGER_WEIGHT,
  },
  {
    triggers: ['committed'],
    responses: ['why the fuck is he so committed'],
    weight: ONE_OFF_TRIGGER_WEIGHT,
  },
  {
    triggers: ['theater', 'theatre'],
    responses: ['gonna accidentally rizz up everyone in the theatre'],
    weight: ONE_OFF_TRIGGER_WEIGHT,
  },
  {
    triggers: ['bronze'],
    responses: [
      'i mean those bronze players are pretty tough to play againsy\r\ni would know',
    ],
    weight: ONE_OFF_TRIGGER_WEIGHT,
  },
  {
    triggers: ['rhythm'],
    responses: ['listen you dont know anything ab my rhythm ok'],
    weight: ONE_OFF_TRIGGER_WEIGHT,
  },
  {
    triggers: ['gym', 'exercise'],
    responses: ['u aint tge only one at the gym shitter'],
    weight: ONE_OFF_TRIGGER_WEIGHT,
  },
  {
    triggers: ['frog', 'toad'],
    responses: [`i dont need this frog\r\ni have jazz`],
    weight: ONE_OFF_TRIGGER_WEIGHT,
  },
  {
    triggers: ['fuck you'],
    responses: [`fuck you too bitch`],
    weight: ONE_OFF_TRIGGER_WEIGHT,
  },
  {
    triggers: ['money', 'bank', 'cash'],
    responses: ['thanks to you i can bank responsibly'],
    weight: ONE_OFF_TRIGGER_WEIGHT,
  },
  {
    triggers: ['bitwarden', 'password manager'],
    responses: ['ive BEEN using bit warden bro fym'],
    weight: ONE_OFF_TRIGGER_WEIGHT,
  },
  {
    triggers: ['code', 'coding', 'programming', 'c++'],
    responses: ['ehat cant i do\r\ncode? pretty true'],
    weight: ONE_OFF_TRIGGER_WEIGHT,
  },
  {
    triggers: ['northern lights'],
    responses: [
      'that fuxking remidns me\r\nthere were northern lights in my tiny ass souther town on sunday',
    ],
    weight: ONE_OFF_TRIGGER_WEIGHT,
  },
  {
    triggers: ['quote'],
    responses: [
      'in that quote they gave she forgot to mention that i also like to roll the shit out of randoms as rein in competitive overwatch matches',
    ],
    weight: ONE_OFF_TRIGGER_WEIGHT,
  },
  {
    triggers: ['jordo'],
    responses: [`this jordo guy is getting a little out of hand`],
    weight: ONE_OFF_TRIGGER_WEIGHT,
  },
]
