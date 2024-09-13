import { UserContentTable } from "@/components/user-content";
import { PostListTable } from "./PostListTable";

const PostListContainer = () => {
  return (
    <div className="w-full py-4">
      {/* <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Post List</h2>
      </div> */}
      {/* <PostListTable /> */}
      <UserContentTable />
    </div>
  );
};

export default PostListContainer;
