import { Avatar } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { supabaseClient } from '../../config/supabase-client';

interface ProfileAvatarProps {
  avatarName: string;
  url: string | undefined;
  avatarSize?: string;
  mr?: string;
}

const ProfileAvatar = ({ url, avatarName, avatarSize, mr }: ProfileAvatarProps) => {
  const [avatarUrl, setAvatarUrl] = useState<string>();

  useEffect(() => {
    if (url) downloadImage(url);
  }, [url]);

  async function downloadImage(path: any) {
    try {
      const { data, error }: any = await supabaseClient.storage.from('images').download(path);
      if (error) {
        throw error;
      }
      const url: any = URL.createObjectURL(data);
      setAvatarUrl(url);
    } catch (error: any) {
      console.log('Error downloading image: ', error.message);
    }
  }

  return <Avatar mr={mr} src={avatarUrl} name={avatarName} size={avatarSize}/>;
};

export default ProfileAvatar;
