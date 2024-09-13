import { UserContentTable } from "@/components/user-content";
import { PostList } from "./PostList";

const PostListContainer = () => {
  return (
    <div className="w-full py-4">
      {/* <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Post List</h2>
      </div> */}
      {/* <PostList /> */}
      <UserContentTable />
    </div>
  );
};

export default PostListContainer;
