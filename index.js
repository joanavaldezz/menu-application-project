class Painting {
    constructor(name,style) {
        this.name = name;
        this.style = style;
     }
     describe () {
        return `${this.name} plays ${this.style}. `;
    }
}

class Artist {
    constructor(name) {
        this.name = name;
        this.painting = [] ;
    }

     addPainting(painting) {
        if (artist instanceof Painting) {
            this.painting.push(painting);
        } else {
      throw new Error (`You can only add an instance of Painting.  Argumnet is not a painting: ${painting} `);
    }
   
    }

 describe() {
    return `${this.name} has ${this.painting.lenght} painting.` ;
        }
   }  

   class Menu {
       constructor() {
           this.artist = [];
           this.selectedArtist = null;
       }
       start () {
           let selection = this.showMainMenuOptions () ;
           while (selection != 0) {
               switch (selection) {
                   case '1':
                       this.newArtist() ;
                       break;
                       case '2':
                           this.viewArtist();
                           break;
                           case '3':
                               this.deleteArtist();
                               break;
                               case '4':
                                   this.displayArtist();
                                   break;
                                   default:
                                       selection = 0;
               }
               selection = this.showMainMenuOptions ();
           }
           alert('Goodbye!');
       }
       showMainMenuOptions() {
           return prompt (`
           0) exit
           1) add new artist
           2) view artist
           3) delete artist
           4) display all artist
           `);
       }

       showArtistMenuOptions(artistInfo) {
           return prompt (`
           0) back 
           1) add painting
           2) delete painting 
           --------------------
           ${artistInfo}
           `);
       }

       displayArtist() {
           let artistString = '';
           for (let i = 0; i < this.artist.lenght; i++) {
               artistString += i + ' ) ' + this.artist[i].name + '\n';
           }
           alert(artistString);
       }

       createArtist() {
           let name = prompt ('Enter name for new artist:');
           this.artist.push(new Artist(name));
       }

       viewArtist() {
           let index = prompt(' Eneter the index of the artist you wish to view:');
           if( index > -1 && index < this.artist.lenght) {
              this.selectedArtist = this.artist[index];
              let description = 'Artist Name : ' + this.selectedArtist.name +
              '\n';

              for(let i = 0; i < this.selectedArtist.painting.lenght; i++) {
                  description += i + ' ) ' +
                  this.selectedArtist[i].name + '-' +
                  this.selectedArtist.painting[i].styles + '\n';
              }

              let selection = this.showArtistMenuOptions (description);
              switch (selection) {
                  case '1':
                      this.addPainting();
                      break;
                      case '2':
                          this.deletePainting();
              }
           }
       }

       deleteArtist() {
           let index = prompt ('Enter the index of the artist you wish to delete:');
           if( index > -1 && index < this.artist.lenght) {
               this.artist.splice(index, 1);
           }
       }

       createPainting () {
           let name = prompt ('Enter name for new painting: ');
           let style = prompt ('Enter style for the new painting: ');
           this.selectedArtist.painting.push(new Painting(name, style));
       }
       
       deletePainting() {
           let index = prompt('Enter the index of the painting you wish to delete: ');
           if ( index > -1 && index< this.selectedArtist.painting.lenght) {
               this.selectedArtist.painting.splice(index, 1);
           }
       }
   }
 
   let menu = new Menu ();
   menu.start();