  // model link --https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj
<br/>
 ![Screenshot 2024-04-09 102238](https://github.com/mishrasatyapriya9/Backend_Chai_with_code/assets/106869525/109bd15b-2ed2-440e-9a09-994a9b22ffc0)

<br/>
<br/>
    ####  //this code is by me ,just to understand line by line ,corrected code is under that                            
const getWatchHistory = asyncHandler(async (req, res) => {[
    {
        $match: {
            _id = new mongoose.Types.ObjectId(user._id)  //beacuse in the mongodb the id stores like in ObjectId("2973849201740924hrirhf7348")
        }
    },
    {
        $lookup: {
            from: "videos" ,//from  videos model
            localField: "WatchHistory",
            foreignField: "_id",
            as: "watchHistory",
            pipeline: [  //creating sub pipeline to find the owner of the videos 
                {
                    $lookup: {
                        from: "users",
                        localField: "owner",
                        foreignField: "_id",
                        as: "ownerDetails",
                        pipeline: [ //now we all the details of the owner of the videos,but we want to get some owner/user points not all the user points,so we have to do one more pipeline
                            {
                                $project: {
                                    fullname: 1,
                                    username: 1,
                                    avater:1,
                                }
                            }
                        ]
                    }
                }, 
                { //if we donot add thiw then as a result array is goed to frontend
                    $addFields: { //this is for helping to the frontend people to destructure the things easier by doing owner.usename like this
                        owner: {
                            $first: "$owner"
                        }
                    }
                }
            ]  
        }
    }]
    .res.status(200).json({
        success: true,
        message: "watch history fetched successfuly",
        user[0].watchHistory,
    })
})

 ####  //this is the original code 
const getWatchHistory = asyncHandler(async (req, res) => {
  const user = await User.aggregate([
    {
      $match: {
        _id: new mongoose.Types.ObjectId(req.user._id),
      },
    },
    {
      $lookup: {
        from: "videos",
        localField: "watchHistory",
        foreignField: "_id",
        as: "watchHistory",
        pipeline: [
          {
            $lookup: {
              from: "users",
              localField: "owner",
              foreignField: "_id",
              as: "owner",
              pipeline: [
                {
                  $project: {
                    fullName: 1,
                    username: 1,
                    avatar: 1,
                  },
                },
              ],
            },
          },
          {
            $addFields: {
              owner: {
                $first: "$owner",
              },
            },
          },
        ],
      },
    },
  ]);

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        user[0].watchHistory,
        "Watch history fetched successfully"
      )
    );
});
<br/>
