import { FooterCard } from "@/components/cards/footer-card";
export function Footer() {
  return (
    <footer className="bg-[#f4f4f7] px-8 pb-10 pt-20 md:px-12">
      <div className="mx-auto max-w-[1400px]">
        
        {/*top card*/}
        <div
          className="flex items-center justify-center rounded-[36px] py-10"
          style={FooterCard}
        >
          <div className="flex items-center gap-4">
            <img src="/FooterLogo.png" alt="logo" className="h-12 w-auto" />
          </div>
        </div>

        {/*content*/}
        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-[1fr_1fr_1.5fr]">
          
          {/*left side*/}
          <div className="flex gap-16">
            <div>
              <p className="text-[16px] font-medium text-[#4B74FF]">Usual</p>
              <div className="mt-6 flex flex-col gap-3 text-[#4b5162]">
                <a href="#">Services</a>
                <a href="#">About us</a>
              </div>
            </div>

            <div className="mt-[30px] flex flex-col gap-3 text-[#4b5162]">
              <a href="#">Portfolio</a>
              <a href="#">Contacts</a>
            </div>
          </div>

          {/*middle*/}
          <div className="flex gap-16">
            <div>
              <p className="text-[16px] font-medium text-[#4B74FF]">Legal</p>
              <div className="mt-6 flex flex-col gap-3 text-[#4b5162]">
                <a href="#">Help</a>
                <a href="#">FAQ</a>
              </div>
            </div>

            <div className="mt-[30px] flex flex-col gap-3 text-[#4b5162]">
              <a href="#">Terms of use</a>
              <a href="#">Privacy policy</a>
            </div>
          </div>

          {/*right side*/}
          <div>
            <p className="text-[20px] font-medium text-[#2a2e3c]">
              Subscribe to our newsletter!
            </p>

            <div className="mt-6 flex items-center rounded-full border border-[#4B74FF] bg-[#f1f2f6] p-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent px-5 py-3 text-[15px] outline-none placeholder:text-[#9aa1b3]"
              />

              <button className="rounded-full bg-[#4B74FF] px-6 py-3 text-[15px] font-medium text-white shadow-[0_10px_20px_rgba(75,116,255,0.4)] transition hover:translate-y-[-1px]">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/*divider*/}
        <div className="mt-16 h-px w-full bg-[#e3e6ee]" />

        {/*bottom*/}
        <div className="mt-6 text-center text-[14px] text-[#8b90a3]">
          © 2025 VolnyPravnik. All rights reserved.
        </div>
      </div>
    </footer>
  );
}