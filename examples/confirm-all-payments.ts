import { CryptoPay, GetInvoices, ConfirmPayment } from "@andrew-ld/cryptopay-api";

async function main() {
    let api = new CryptoPay("https://testnet-pay.crypt.bot", "3214:CENSURED")

    let invoices = await api.send(new GetInvoices())

    for (let invoice of invoices) {
        if (invoice.status !== "paid") {
            continue
        }

        if (invoice.isConfirmed) {
            continue
        }

        console.log(`confirming payment ${invoice.invoiceId}`)
        await api.send(new ConfirmPayment(invoice.invoiceId))
        console.log(`confirmed payment ${invoice.invoiceId}`)
    }
}

main().then().catch(console.error)
