import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

const data = [
    { id: 1, name: "Inicio", url: "/" },
    { id: 2, name: "Blog", url: "/about" },
    { id: 3, name: "Categorias", subMenu: true },
    { id: 4, name: "Contactos", url: "/contact" },
];

const subMenuData = [
    { id: 1, name: "Jordan", doc_count: 11 },
    { id: 2, name: "Sneakers", doc_count: 8 },
    { id: 3, name: "Running shoes", doc_count: 64 },
    { id: 4, name: "Football shoes", doc_count: 107 },
];

const MenuMobile = ({
    showCatMenu,
    setShowCatMenu,
    setMobileMenu,
    categories,
}) => {
    return (
        <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(150vh-50px)] bg-gradient text-black">
            {data.map((item) => {
                return (
                    <React.Fragment key={item.id}>
                        {!!item?.subMenu ? (
                            <li
                                className="cursor-pointer py-4 px-5 border-t border-yellow-500 flex flex-col relative"
                                onClick={() => setShowCatMenu(!showCatMenu)}
                            >
                                <div className="flex justify-between items-center">
                                    {item.name}
                                    <BsChevronDown size={14} />
                                </div>

                                {showCatMenu && (
                                    <ul className="bg-black/[0.05] -mx-5 mt-4 -mb-4">
                                        {categories?.map(
                                            ({ attributes: c, id }) => {
                                                return (
                                                    <Link
                                                        key={id}
                                                        href={`/category/${c.slug}`}
                                                        onClick={() => {
                                                            setShowCatMenu(
                                                                false
                                                            );
                                                            setMobileMenu(
                                                                false
                                                            );
                                                        }}
                                                    >
                                                        <li className="py-4 px-8 border-t border-yellow-500 flex justify-between">
                                                            {c.name}
                                                            <span className="opacity-50 text-sm">
                                                                {`(${c.products.data.length})`}
                                                            </span>
                                                        </li>
                                                    </Link>
                                                );
                                            }
                                        )}
                                    </ul>
                                )}
                            </li>
                        ) : (
                            <li className="py-4 border-t border-yellow-500">
                                <Link
                                    href={item?.url}
                                    onClick={() => setMobileMenu(false)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        )}
                    </React.Fragment>
                );
            })}
        </ul>
    );
};

export default MenuMobile;
