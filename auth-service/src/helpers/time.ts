import {
  addTimeInterface,
  compareTimeInterface,
} from "../interfaces/time.interface";

const addTime = ({ minutes }: addTimeInterface) => {
  const nowTime = new Date().getTime();
  const newTime = nowTime + minutes * 60000;
  return new Date(newTime).toISOString();
};

const compareTime = ({ time }: compareTimeInterface) => {
  if (!time) return false;
  const nowTime = new Date().getTime();
  const oldTime = new Date(time).getTime();
  return oldTime > nowTime;
  //if time expire it returns false
};

export { addTime, compareTime };
