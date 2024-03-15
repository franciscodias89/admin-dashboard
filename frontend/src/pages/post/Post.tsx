import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Divider, Flex, Heading, Text, Wrap } from "@chakra-ui/react"
import moment from "moment";
import { Link, useParams } from "react-router-dom";
import { BlogAuthor } from "../../components/shared/Blog";
import { Empty } from "../../components/shared/Empty";
import { Loading } from "../../components/shared/Loading";
import { Page } from "../../components/shared/Page";
import { Toolbar, ToolbarActions, ToolbarTitle } from "../../components/shared/Toolbar";
import { useCommentsByPostId } from "../../hooks/comments/useCommentsByPost";
import { usePost } from "../../hooks/post/usePost";
import { useAuth } from "../../providers/AuthProvider";
import { Comment } from "../../types/comment";
import CommentForm from "../../components/comments/CommentForm";



export const Post = () => {
  const { id } = useParams();
  let { session } = useAuth();
  const { data, isError, isLoading } = usePost(Number(id));
  const { data: comments } = useCommentsByPostId(data?.id);

  const isUpdate = !!id;

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <span>Something went wrong! If the problem persists, contact us!</span>
    );
  }

  return (
    <Page animation="slideFade">
      
    </Page>
  )
}
