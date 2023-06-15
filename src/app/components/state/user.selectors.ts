import {createSelector} from '@ngrx/store'
import { appProfile,appUsers } from './user.state';
import { Profile,Users } from 'src/app/models/userModel';

export const userRootSelector=(state:appUsers)=>state.allusers;
//----user----------

export const profileRootSelector=(state:appProfile)=>state.userdetails;
export const userProfile=createSelector(
    profileRootSelector,
    (userdetails:Profile)=>{
        return userdetails
    }
)

//---------------
export const uniqueEmail=createSelector(
    userRootSelector,
    (allusers:Users[])=>{
        return [...allusers]
    }
)