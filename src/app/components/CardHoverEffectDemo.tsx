"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    image: string;
    link: string;
    buttonText: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-4 gap-3",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card image={item.image}>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-black bg-opacity-50">
              <CardTitle>{item.title}</CardTitle>
              <CardButton>{item.buttonText}</CardButton>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  image,
  children,
}: {
  className?: string;
  image: string;
  children: React.ReactNode;
}) => {
//   console.log("Card image:", image); 
  return (
    <div
      className={cn(
        "rounded-2xl h-[105%] w-[105%] overflow-hidden relative",
        className
      )}
    >
      <Image src={image} alt="Card Image" width={1000} height={1000} className="w-full h-full" />
      {children}
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-white font-bold tracking-wide text-xl mb-4", className)}>
      {children}
    </h4>
  );
};

export const CardButton = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <button
      className={cn(
        "mt-4 px-4 py-2 bg-blue-600 rounded-full text-white hover:bg-blue-700",
        className
      )}
    >
      {children}
    </button>
  );
};


export const projects = [
  {
    title: "Animation",
    image: "/card-image-2.jpg", 
    link: "https://stripe.com",
    buttonText: "4 Classes",
  },
  {
    title: "Creative Writing",
    image: "/card-image-1.jpg",
    link: "https://netflix.com",
    buttonText: "6 Classes",
  },
  {
    title: "Film & Video",
    image: "/card-image-3.jpg",
    link: "https://google.com",
    buttonText: "7 Classes",
  },
  {
    title: "Fine Art",
    image: "/card-image-4.jpg",
    link: "https://meta.com",
    buttonText: "5 Classes",
  },
  {
    title: "Graphic Design",
    image: "/card-image-5.jpg",
    link: "https://amazon.com",
    buttonText: "8 Classes",
  },
  {
    title: "Illustration",
    image: "/card-image-6.avif",
    link: "https://microsoft.com",
    buttonText: "3 Classes",
  },
  {
    title: "Music",
    image: "/card-image-7.jpg",
    link: "https://apple.com",
    buttonText: "9 Classes",
  },
  {
    title: "Web Development",
    image: "/card-image-8.jpg",
    link: "https://tesla.com",
    buttonText: "10 Classes",
  },
];

export const Projects = [
  {
    title: "Animation",
    image: "/card-image-2.jpg", 
    link: "https://stripe.com",
    buttonText: "4 Classes",
  },
  {
    title: "Creative Writing",
    image: "/card-image-1.jpg",
    link: "https://netflix.com",
    buttonText: "6 Classes",
  },
  {
    title: "Film & Video",
    image: "/card-image-3.jpg",
    link: "https://google.com",
    buttonText: "7 Classes",
  },
  {
    title: "Fine Art",
    image: "/card-image-4.jpg",
    link: "https://meta.com",
    buttonText: "5 Classes",
  },
  // {
  //   title: "Graphic Design",
  //   image: "/card-image-5.jpg",
  //   link: "https://amazon.com",
  //   buttonText: "8 Classes",
  // },
  // {
  //   title: "Illustration",
  //   image: "/card-image-6.avif",
  //   link: "https://microsoft.com",
  //   buttonText: "3 Classes",
  // },
  // {
  //   title: "Music",
  //   image: "/card-image-7.jpg",
  //   link: "https://apple.com",
  //   buttonText: "9 Classes",
  // },
  // {
  //   title: "Web Development",
  //   image: "/card-image-8.jpg",
  //   link: "https://tesla.com",
  //   buttonText: "10 Classes",
  // },
];


export function CardHoverEffectDemo() {
  const [currentPage, setCurrentPage] = useState(0)

  const totalPages = 4
  const itemsPerPage = 8

  const getPageItems = (page: number) => {
    const repeatedItems = [...projects, ...projects, ...projects, ...Projects]
    const startIdx = page * itemsPerPage
    const endIdx = startIdx + itemsPerPage
    return repeatedItems.slice(startIdx, endIdx)
  }

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages)
  }

  const handlePrev = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages)
  }


  return (
    <div className="max-w-6xl mx-auto px-8">
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <HoverEffect items={getPageItems(currentPage)} />
          </motion.div>
        </AnimatePresence>
        {/* <div className="absolute inset-y-0 flex items-center">
          <button className="bg-gray-400 text-gray-700 rounded-full p-2" onClick={handlePrev}>
            &larr;
          </button>
        </div> */}
        {/* <div className="absolute right-0 inset-y-0 flex items-center">
          <button className="bg-gray-400 text-gray-700 rounded-full p-2" onClick={handleNext}>
            &rarr;
          </button>
        </div> */}
      </div>
      <div className="flex justify-center items-center space-x-10 mt-4">
        <div className="flex rounded-full items-center">
          <button className="bg-gray-400 text-gray-700 rounded-full px-2 py-2" onClick={handlePrev}>
            <FaArrowLeft />
          </button>
        </div>
        {[...Array(totalPages)].map((_, i) => (
          <button key={i} onClick={() => setCurrentPage(i)} className={`w-2 h-2 rounded-full ${i === currentPage ? 'bg-blue-600' : 'bg-blue-400'}`} />
        ))}
         <div className="flex rounded-full items-center">
          <button className="bg-gray-400 text-gray-700 rounded-full px-2 py-2" onClick={handleNext}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}


