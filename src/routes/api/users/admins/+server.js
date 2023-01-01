import { adminAuth } from '$lib/firebase/admin.server';
import {json} from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET() {
    return new Response('Hello');
};

/** @type {import('./$types').RequestHandler} */
export async function POST({request}) {
    const addUserInput = await request.json();
    const userRecord = await adminAuth.createUser({ email:addUserInput.email, password:addUserInput.password, displayName:addUserInput.name});
    // await adminAuth.updateUser(userRecord.uid,{displayName:addUserInput.name})
    return json(userRecord);

};