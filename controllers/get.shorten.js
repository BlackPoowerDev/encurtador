import { eq} from 'drizzle-orm';

import {shorten} from '../config/tables.js'
import {db} from '../models/db.js'


const getShorten = async (id) => {
    try {
        const result = await db.select().from(shorten).where(eq(shorten.id_url, id)).limit(1)

        if(result.length === 0){
            return null;    
        }

        return result[0]
         
    } catch (error) {
        console.log(error);
    }
}
export default getShorten