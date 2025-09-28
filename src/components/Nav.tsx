import {SquareAsterisk, NotebookTabs, Send,} from 'lucide-react';

export const Nav = () => {
  return (
      <nav className="absolute flex gap-4 items-center border-gray-300 border rounded-full bg-gray-100 px-3 py-1 bottom-2.5 left-1/2 -translate-x-1/2 ">
          <div className="rounded-full bg-black h-4 w-11"></div>
          <div className={"p-1 px-2 flex items-center gap-2"}>
              <SquareAsterisk className="size-5"/>
              <span className="">Services</span>
          </div>
          <div className={"p-1 px-2 flex items-center gap-2"}>
              <NotebookTabs className="size-5"/>
              <span className="">Plans</span>
          </div>
          <div className={"p-1 px-2 flex items-center gap-2"}>
              <Send className="size-5"/>
              <span className="">Contact</span>
          </div>
      </nav>
  );
}