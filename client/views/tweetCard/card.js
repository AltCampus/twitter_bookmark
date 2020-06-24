import React from "react";
import { Link } from "react-router-dom";
// import format from "date-fns/format";
// import { getTweetId, removeLinks } from "../../utils/index";
// import Button from "./button";
import Avatar from "./avatar";
// import { useRouter } from "next/router";

const Card = ({ ...props }) => {
  // const router = useRouter();

  return (
    <div className="card col">
      <div>
        <div className="my-2">
          <Avatar
            imageURL={
              (props.user && props.user.profile_image_url_https) ||
              "https://pbs.twimg.com/profile_images/1197013617129836544/BR1M9TBW_normal.jpg"
            }
            name={(props.user && props.user.name) || "Bimlendu kumar"}
            screenName={(props.user && props.user.screen_name) || "bim240"}
          />
        </div>
        <div>
          <Link>
            <a className="block">
              <h3 className="mt-4 ">
                {props.text || "this is a testing tweets"}
              </h3>
            </a>
          </Link>
        </div>
      </div>

      {/* <div className="mt-6 sm:flex sm:justify-between sm:items-center">
        <time className="hidden sm:block w-1/3 text-sm leading-5 text-gray-500">
          Tweeted on: {format(new Date(props.created_at), "do MMM yyyy")}
        </time>
      </div> */}
    </div>
  );
};

export default Card;
