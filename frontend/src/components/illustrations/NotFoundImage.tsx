import { Illustration } from "./Illustration";

function NotFoundImage({ ...rest }) {
  return (
    <Illustration viewBox="0 0 400 300" {...rest}>
      <path
        d="M95.85,121.73c-27.66,4.91-47.21,29-44,55.43,1.71,14,8.64,26.43,26.47,30,47.3,9.51,225.85,45.31,260.93-16.72,27.35-48.34,11.05-81.81-14.35-102.76s-78-16.6-121.53-2.26C171,96.11,146.93,112.65,95.85,121.73Z"
        fill="#e6e6e6"
        opacity="0.3"
        className="fill-gray-1"
      ></path>
      <ellipse
        cx="205.6"
        cy="245.02"
        rx="161.02"
        ry="11.9"
        fill="#e6e6e6"
        opacity="0.45"
        className="fill-gray-1"
      ></ellipse>
      <circle
        cx="115.32"
        cy="60.66"
        r="19.14"
        fill="#ffd200"
        className="fill-primary"
      ></circle>
      <circle
        cx="115.32"
        cy="60.66"
        r="36.49"
        fill="#ffd200"
        opacity="0.15"
        className="fill-primary"
      ></circle>
      <circle
        cx="195.69"
        cy="193.3"
        r="51.17"
        fill="#24285b"
        className="fill-gray-3"
      ></circle>
      <circle
        cx="195.69"
        cy="193.3"
        r="32.21"
        fill="#fff"
        className="fill-surface"
      ></circle>
      <path
        d="M133.91,205.51c3.39,0,4.61,1.22,4.61,4.6v5.83c0,3.39-1,4.61-4.61,4.61h-9.35V238.3c0,3.38-1.22,4.6-4.61,4.6h-6.64c-3.38,0-4.6-1.22-4.6-4.6V220.55H64c-3.38,0-4.6-1.22-4.6-4.61v-4.88A9,9,0,0,1,61,205.51l45-55.83a8.07,8.07,0,0,1,6.5-3.25H120c3.39,0,4.61.95,4.61,4.61v54.47Zm-25.2-36.32L79.3,205.51h29.41Z"
        fill="#68e1fd"
        className="fill-primary"
      ></path>
      <path
        d="M327.42,205.51c3.39,0,4.61,1.22,4.61,4.6v5.83c0,3.39-.95,4.61-4.61,4.61h-9.35V238.3c0,3.38-1.22,4.6-4.61,4.6h-6.64c-3.38,0-4.6-1.22-4.6-4.6V220.55H257.5c-3.38,0-4.6-1.22-4.6-4.61v-4.88a9,9,0,0,1,1.62-5.55l45-55.83a8.07,8.07,0,0,1,6.5-3.25h7.45c3.39,0,4.61.95,4.61,4.61v54.47Zm-25.2-36.32-29.41,36.32h29.41Z"
        fill="#68e1fd"
        className="fill-primary"
      ></path>
      <path
        d="M343.49,89.6a6.76,6.76,0,0,0-6.76-6.76,6.59,6.59,0,0,0-1.09.09,9.1,9.1,0,0,0-8-4.8l-.33,0a10.82,10.82,0,1,0-21,0l-.33,0a9.12,9.12,0,1,0,0,18.23h31.63V96.3A6.77,6.77,0,0,0,343.49,89.6Z"
        fill="#e6e6e6"
        className="fill-gray-1"
      ></path>
      <path
        d="M80.7,156.51a5.8,5.8,0,0,0-5.8-5.8,7,7,0,0,0-.93.08,7.81,7.81,0,0,0-6.89-4.11H66.8a9.28,9.28,0,1,0-18,0h-.28a7.82,7.82,0,1,0,0,15.63H75.65v-.05A5.81,5.81,0,0,0,80.7,156.51Z"
        fill="#e6e6e6"
        className="fill-gray-1"
      ></path>
    </Illustration>
  );
}

export { NotFoundImage };