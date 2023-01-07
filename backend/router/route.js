import { Router } from "express";
const router = Router();
import * as controller from '../controllers/controller.js';


/** Questions Routes API */
router.route('/questions')
        .get(controller.getQuestions) /** GET Request */
        .post(controller.insertQuestions) /** POST Request */
        
      

        /** Result Routes API */

router.route('/result')
  .get(controller.getResult)
  .post(controller.storeResult)
 



export default router;