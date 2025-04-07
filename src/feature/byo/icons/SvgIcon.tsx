'use client';
import { type FC } from "react";

import { useDynamicSvgImport } from "../hooks/useDynamicSvgImport";


interface Props {
  iconName: string;
  wrapperStyle?: string;
  svgProps?: React.SVGProps<SVGAElement>;
}

const SvgIcon: FC<Props> = (props) => {
  const { iconName, wrapperStyle, svgProps } = props;
  const { loading, SvgIcon } = useDynamicSvgImport(iconName);
  return (
    <>
      {loading && (
        <div className='rounded-full bg-slate-400 animate-pulse h-8 w-8'></div>
      )}
      {SvgIcon && (
        <div className={wrapperStyle}>
          <SvgIcon {...svgProps} />
        </div>
      )}
    </>
  );
};

export default SvgIcon;
