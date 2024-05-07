import React from "react";

const CommentContainer = () => {
  const commentData = [
    {
      id: "comment1",
      text: "This is the first comment",
      author: "User1",
      replies: [
        {
          id: "reply1",
          text: "Reply to the first comment",
          author: "User2",
          replies: [
            {
              id: "reply1",
              text: "Reply to the first comment",
              author: "User2",
            },
            {
              id: "reply2",
              text: "Another reply to the first comment",
              author: "User3",
            },
          ],
        },
        {
          id: "reply2",
          text: "Another reply to the first comment",
          author: "User3",
        },
      ],
    },
    {
      id: "comment1",
      text: "This is the first comment",
      author: "User1",
    },
  ];

  const CommentsList = ({ comments }) => {
    return comments.map((comment, index) => (
      <div key={index}>
        <Comment data={comment} />
        <div className="pl-2 border ml-10 border-l-black">
          {comment.replies && <CommentsList comments={comment.replies} />}
        </div>
      </div>
    ));
  };

  const Comment = ({ data }) => {
    const { text, author } = data;
    return (
      <div className="flex shadow-sm bg-gray-100 p-2 my-2 rounded-lg">
        <img
          className="h-12"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user"
        />
        <div className="px-3">
          <p className="font-bold">{author}</p>
          <p>{text}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-2xl">Comments:</h1>
      <CommentsList comments={commentData} />
    </div>
  );
};

export default CommentContainer;
