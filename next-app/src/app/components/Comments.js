import React from "react";

const Comments = async ({ promise }) => {
  const comments = await promise;
  return (
    <div>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment._id} className="p-2 border-b my-8">
            <div className="flex justify-between text-gray-400 mb-4">
              <div>
                <p className="text-sm">{comment?.name}</p>
                <p className="text-sm">{comment?.email}</p>
              </div>
              <p className="text-sm">{comment?.date}</p>
            </div>

            <p>{comment?.comment}</p>
          </div>
        ))
      ) : (
        <div className="flex justify-center items-center">
          <h3>No Comment!</h3>
        </div>
      )}
    </div>
  );
};

export default Comments;
