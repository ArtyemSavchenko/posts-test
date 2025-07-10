import { useQuery } from '@tanstack/react-query';
import { getUserById } from 'entities/User';
import { User } from 'entities/User/ui/User';
import { UserSkeleton } from 'entities/User/ui/UserSkeleton';
import type { FC } from 'react';
import { joinClasses } from 'shared/utils';
import s from './UserInfo.module.css';
import type { TUserInfoProps } from './UserInfo.types';

export const UserInfo: FC<TUserInfoProps> = ({ userId, className }) => {
  const isUserIdExist = userId !== null;

  const { status: userStatus, data: user } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => {
      if (!isUserIdExist) {
        throw new Error('User id not exist');
      }

      return getUserById(userId);
    },
    enabled: isUserIdExist,
  });

  const getUserEl = () => {
    if (userStatus === 'pending') {
      return <UserSkeleton />;
    }

    if (userStatus === 'error') {
      return <div>Не удалось загрузить пользователя</div>;
    }

    return <User {...user} />;
  };

  return (
    <div className={joinClasses(s['user-info'], className)}>{getUserEl()}</div>
  );
};
