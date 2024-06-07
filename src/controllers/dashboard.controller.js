import mongoose from "mongoose"
import {Video} from "../models/video.model.js"
import {Subscription} from "../models/subscription.model.js"
import {Like} from "../models/like.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"

import {Video} from "../model/video.model.js"
import {Like} from "../model/like.model.js"

const getChannelStats = asyncHandler(async (req, res) => {
    // TODO: Get the channel stats like total video views, total subscribers, total videos, total likes etc.
//total views
//total subscribers
//total likes
  
//total videos
  const allVideos = await Video.aggregate ([
        {
            $match:{  // i think this will give me all the matching videos having same _id
                owner._id:user._id
            }
        },
    ])

const totalVideos = allVideos.length()
    
})

const getChannelVideos = asyncHandler(async (req, res) => {
    // TODO: Get all the videos uploaded by the channel
    const user = req.user;

    const allVideos = await Video.aggregate ([
        {
            $match:{  // i think this will give me all the matching videos having same _id
                owner._id:user._id
            }
        },
    ])

    return res.status(200).json(
        new apiResponse(200,allVideos,"all videos of the current channel are fetched successfuly."
    )
    
})

export {
    getChannelStats, 
    getChannelVideos
    }
