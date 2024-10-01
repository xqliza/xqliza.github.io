"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl?: string;
  altText?: string;
  title?: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: readonly string[];
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  return (
    <Card className="flex">
      <div>
        {logoUrl && altText ? (
          <Link
            href={href || "#"}
            target="_blank"
            className="block cursor-pointer"
          >
            <div className="flex-none">
              <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
                <AvatarImage
                  src={logoUrl}
                  alt={altText}
                  className="object-contain"
                />
                <AvatarFallback>{altText[0]}</AvatarFallback>
              </Avatar>
            </div>
          </Link>
        ) : (
          <div className="size-12" />
        )}
      </div>
      <div className="flex-grow ml-4 items-center flex-col group">
        <CardHeader>
          <div className="flex items-center justify-between gap-x-2 text-base">
            <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
              {title && title}
              {subtitle && !title ? (
                <div className="font-normal text-xs mt-3">{subtitle}</div>
              ) : (
                ""
              )}
              {badges && (
                <span className="inline-flex gap-x-1">
                  {badges.map((badge, index) => (
                    <Badge
                      variant="secondary"
                      className="align-middle text-xs"
                      key={index}
                    >
                      {badge}
                    </Badge>
                  ))}
                </span>
              )}
            </h3>
            <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
              {period}
            </div>
          </div>
          {subtitle && title && (
            <div className="font-sans text-xs">{subtitle}</div>
          )}
        </CardHeader>
        {description && (
          <ul className="my-1 text-xs">
            {description.map((desc, index) => (
              <li key={index} className="list-disc list-inside mt-1">
                {desc}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Card>
  );
};
