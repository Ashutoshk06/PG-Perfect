import multer from "multer";
import path from "path"
const upload = multer(
    { dest: 'uploads/',
    limits:{fieldSize:759476803 *1000000}, // 1000000=1mb, 50mb file size
    storage : multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, 'uploads/')
        },
        filename: function (req, file, cb) {
          cb(null, file.originalname)
        }
      }),   

fileFilter:(req,file,cb)=>{
    let ext=path.extname(file.originalname)

    if(
        ext!==".jpg"&&
        ext!==".jpeg"&&
        ext!==".webp"&&
        ext!==".png"&&
        ext!==".mp4"&&
        ext!==".jfif"
        
    ){
      return cb(new Error(`Unsupported file type ${ext}`),false)
        
    }
    cb(null, true)
}
})
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'uploads/');
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//     }
//   });
    
//   const upload = multer({ storage: storage });
export default upload