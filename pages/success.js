import React from "react";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";

const Success = () => {
    return (
        <div className="min-h-[650px] flex items-center">
            <Wrapper>
                <div className="max-w-[600px] rounded-lg p-5 border border-black mx-auto flex flex-col">
                    <div className="text-2xl font-bold">
                        Gracias por comprar con nosotros!

                    </div>
                    <div className="text-lg font-bold mt-2">
                        Su pedido ha sido realizado con éxito.
                    </div>
                    <div className="text-base mt-5">
                        Para cualquier consulta relacionada con el producto, envíe un correo electrónico a
                    </div>
                    <div className="underline">sopertest@gmail.com</div>

                    <Link href="/" className="font-bold mt-5">
                        Continue Shopping
                    </Link>
                </div>
            </Wrapper>
        </div>
    );
};

export default Success;
