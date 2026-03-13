import {db} from '../models/db.js'
import { eq} from 'drizzle-orm';
import { nanoid } from 'nanoid'

import {shorten} from '../config/tables.js'
import 'dotenv/config'

const createShorten = async (url) =>{
    let isUnique = false
    let id_url
    
    try {
        while(!isUnique){
            id_url = nanoid(6)
            const existing = await db.select().from(shorten).where(eq(shorten.id_url, id_url)).limit(1)

            if(existing.length === 0){
                isUnique = true 
            }
        }

        await db.insert(shorten).values({
            id_url: id_url,
            url: url,
            createdat: new Date()
        })

        return {
            short_url: `http://localhost:${process.env.PORT || 5000}/${id_url}`,
            original_url: url
        }
    } catch (error) {
        console.log(error);
        
    }
}

export default createShorten