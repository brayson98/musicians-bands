const  db  = require('./db');
const { Band, Musician, Song } = require('./index')

describe('Band, Musician, and Song Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await db.sync({ force: true });
    })

    test('can create a Band', async () => {
        const band = await Band.create({
            name: "Queen",
            genre: "Rock",
            
          });
      
          expect(band.name).toBe("Queen");
          expect(band.genre).toBe("Rock");
          
    })

    test('can create a Musician', async () => {
        const musician = await Musician.create({
            name: "Bob Marley",
            instrument: "Guitar"
            
          });
      
          expect(musician.name).toBe("Bob Marley");
          expect(musician.instrument).toBe("Guitar");
    })
    test('can create a Song', async () => {
        const song = await Song.create({
            title: "Hey Jude",
            year: 1968,
            length: 7
            
          });
      
          expect(song.title).toBe("Hey Jude");
          expect(song.year).toBe(1968);
          expect(song.length).toBe(7);
    })

    test('can update a Band', async () => {
        const band = await Band.create({
            name: "Old Band",
            genre: "Rock",
        });

        // Update the band
        await band.update({
            name: "New Band",
            genre: "Pop",
        });

        // Verify the update
        expect(band.name).toBe("New Band");
        expect(band.genre).toBe("Pop");
    });
    test('can update a Musician', async () => {
        const musician = await Musician.create({
            name: "Old Musician",
            instrument: "Piano",
        });

        // Update the musician
        await musician.update({
            name: "New Musician",
            instrument: "Drums",
        });

        // Verify the update
        expect(musician.name).toBe("New Musician");
        expect(musician.instrument).toBe("Drums");
    });

    test('can delete a Band', async () => {
        const band = await Band.create({
            name: "Test",
            genre: "Test"
        });

        await band.destroy();
        const foundBand = await Band.findByPk(band.id);

        expect(foundBand).toBeNull();
    })

    test('can delete a Musician', async () => {
        const musician = await Musician.create({
            name: "Test",
            instrument: "Test"
        });

        await musician.destroy();
        const foundMusician = await Musician.findByPk(musician.id);

        expect(foundMusician).toBeNull();
    })
})