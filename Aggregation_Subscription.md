  // model link --https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj
<br/>
 ![Screenshot 2024-04-09 102238](https://github.com/mishrasatyapriya9/Backend_Chai_with_code/assets/106869525/109bd15b-2ed2-440e-9a09-994a9b22ffc0)
 
    //finding subscribers of chai or code yt channel
    const channel = user.aggregate([ // in the user model we gonna add fields like total subscribers and total subscribed channel
        //these are the pipelines
        { //pipeline1
            $match: {
                username: username,
            }
        },
        {  //pipeline 2
            $lookup: { //finding the subscribers for a channel/perticular user in the platform
                from: "subscription", //subscription is a table/model
                localField: "_id", 
                foreignField: "channel",
                as: "subscribers"     
            } 
        },
        {   //pipeline 3
            $lookup: { //finding the total subscribed channel by this user/channel
                from: "subscription",
                localField: "_id",
                foreignField: "subscriber",
                as:"subscribed to"
            }
        }
        , { //these are the fields add to the user model because we aggregate the user model in the first line
            $addFields: {
                suscriberCount: {
                    $size:"$subscriber"
                },
                channelsSubscribedcount: {
                    $size:"$subscribed to"
                },
                isSuscribed: { //checking own user id is present in the subsribers ids ,if present i subscribed this channel else not subscribed
                    $cond: {
                        if: {
                            $in: [req.user?._id,"subscribers.subscriber"]
                        }
                    }
                }
            }
        }, {
            $project: { //pass onlyy the selected things to next
                fullname: 1, //if 1 then allow to pass to next
                username: 1,
                email: 1,
                subscribercount: 1,
                channelsSubscribedcount: 1,
                isSuscribed: 1,
                avater: 1,
                coverImage: 1,
                
            }
        }
    ])
}
