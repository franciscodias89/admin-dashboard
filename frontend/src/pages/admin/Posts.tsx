import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, Card, CardBody, CardFooter, CardHeader, Text, useDisclosure, useToast } from "@chakra-ui/react"
import { Page } from "../../components/shared/Page"
import { Toolbar, ToolbarActions, ToolbarTitle } from "../../components/shared/Toolbar"
import { Link } from "react-router-dom";
import { Loading } from "../../components/shared/Loading";
import { Result } from "../../components/shared/Result";
import { PostTable } from "../../components/post/PostTable";
import { useMemo, useRef, useState } from "react";
import { Post } from "../../types/post";
import { Pagination } from "../../components/shared/Pagination";
import { useRemovePost } from "../../hooks/post/useRemovePost";
import { useAuth } from "../../providers/AuthProvider";
import { useProfile } from "../../hooks/auth/useProfile";
import { usePostByProfileId } from "../../hooks/post/usePostByProfile";
import  Metabase  from "../../components/Metabase";

const pageSize = 5;

const Posts = () => {
  let { session } = useAuth();
  const { data: profile } = useProfile(session?.user.email);
  const { data, isError, isLoading } = usePostByProfileId(profile?.id);
  const [pageIndex, setPageIndex] = useState(0);
  const [activePost, setActivePost] = useState<Post | undefined>(undefined);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const toast = useToast();
  const cancelRef = useRef(null);
  const removePost = useRemovePost();

  const posts = useMemo(() => {
    return data?.slice(pageIndex * pageSize, pageIndex * pageSize + pageSize);
  }, [data, pageIndex]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <Result
        description="Something went wrong! If the problem persists, contact us!"
        status="error"
        title="Oops!"
      />
    );
  }

  function handlePageChange(newPageIndex: number) {
    setPageIndex(newPageIndex);
  }

  function handleCloseRemoveAlert() {
    setActivePost(undefined);
    onClose();
  }

  function handleOpenRemoveAlert(post: Post) {
    setActivePost(post);
    onOpen();
  }

  function handleRemovePost(post: Post) {
    removePost.mutate(post.id, {
      onSuccess: () => {
        onClose();
        toast({
          description: `Post ${post.id} has been removed`,
          status: "success"
        });
      },
      onError: () => {
        toast({
          description:
            "Something went wrong! If the problem persists, contact us!",
          status: "error"
        });
      }
    });
  }

  return (

    <Page animation="slideFade">
<span>Something went wrong! If the problem persists, contact us!</span>
     <Metabase></Metabase> 
    </Page>
    
    
    
  )
}

export default Posts