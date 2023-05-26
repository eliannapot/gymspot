

/**  */
const modelPromise = import(`../model/better-sqlite/changePrograms.js`); 

   async function getAllPrograms(req, res) {
      // console.log("getAllPrograms Controller");
     try {
      model = await modelPromise;
      const allPrograms = await model.getAllPrograms();
      // console.log(allPrograms)
       res.render('programs', { programs: allPrograms, title: 'Programs', javascript: 'programs.js'});
     } catch (error) {
      console.log(error);
      res.send(error);
     }
   }
   
   module.exports = {
     getAllPrograms: getAllPrograms
   };

 
