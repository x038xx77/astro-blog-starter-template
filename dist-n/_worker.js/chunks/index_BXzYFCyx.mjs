globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate } from './astro/server_COiPld1w.mjs';
import { j as jsxRuntimeExports, $ as $$Layout, a as $$Container } from './Layout_2PJY54-i.mjs';
import { $ as $$Hero, a as $$Features } from './Features_CnCIK0J-.mjs';
import { s as seoData } from './seo-data-site_D_Z3JnBH.mjs';
import { T as TbLampOff, a as TbTruckDelivery, $ as $$Reviews, b as $$FAQ } from './index_VKWG4mLY.mjs';
import { g as getCollection } from './_astro_content_d0Ob6qz0.mjs';
import { t as textProductsPage } from './products_DQyL-G0J.mjs';
import { a as reactExports } from './_@astro-renderers_BLcAVN98.mjs';
import { s as styles, a as styles$1, b as styles$2, c as styles$3 } from './index.d5ca07e9_BWZ_a1uF.mjs';
import { m as markdownSpace, f as factorySpace, a as markdownLineEndingOrSpace, b as factoryWhitespace, c as markdownLineEnding, u as unicodeWhitespace, d as unicodePunctuation, e as asciiAlphanumeric, g as asciiAlpha, h as asciiControl, n as normalizeIdentifier, i as blankLine, l as labelEnd, p as parse$1, j as preprocess, k as postprocess } from './index_DdepQNjg.mjs';

const ProductDescriptionModal = ({ title, description, onClose }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.modalOverlay, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.modalContent, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: styles.modalTitle, children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles.modalDescription, children: description }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: styles.closeButton, onClick: onClose, children: "Закрыть" })
  ] }) });
};

const AuthContext = reactExports.createContext(void 0);
const useAuth = () => {
  const context = reactExports.useContext(AuthContext);
  if (!context) throw new Error("useAuth должен использоваться внутри AuthProvider");
  return context;
};
const AuthProvider = ({ children }) => {
  const [user, setUser] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);
  const login = (email, password) => {
    const newUser = { email, password };
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
  };
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AuthContext.Provider, { value: { user, login, logout, isAuthenticated: !!user }, children });
};

const ProductCardCms = ({ productData, productSlug, onMoreDetails, onEdit, onDelete }) => {
  const { title, price, discount, image, is_active, is_delivery } = productData;
  const discountedPrice = price - price * Number(discount) / 100;
  const { isAuthenticated } = useAuth();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      id: "idProductsCard",
      style: { backgroundColor: textProductsPage?.bgCard, color: textProductsPage?.cardTextColor },
      className: ` ${styles$1.productCard}`,
      children: [
        image.src && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: image.src,
            alt: title,
            className: `${"object-cover filter grayscale rounded-lg" } `,
            width: 300,
            height: 200
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: styles$1.productDetails,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: styles$1.productTitle, children: title }),
              !is_active && /* @__PURE__ */ jsxRuntimeExports.jsx(TbLampOff, { size: 48, color: "red" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$1.priceContainer, children: Number(discount) > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: styles$1.originalPrice, children: [
                  price.toFixed(2),
                  " ₽"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: styles$1.discountedPrice, children: [
                  discountedPrice.toFixed(2),
                  " ₽"
                ] })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: styles$1.productPrice, children: [
                price.toFixed(2),
                " ₽"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center rounded bg-gray-700 dark:bg-black text-black dark:text-white", children: is_delivery && /* @__PURE__ */ jsxRuntimeExports.jsx(TbTruckDelivery, { size: 24 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: styles$1.moreButton, onClick: onMoreDetails, children: "Подробнее" }),
              productData.is_payment_button ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `/init-payment/${productSlug}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: styles$1.payButton, children: "Оплатить" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `/send-order/${productSlug}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: styles$1.payButton, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold font-rubik text-xs text-gray-100", children: textProductsPage?.text_button_to_order }) }) }),
              isAuthenticated && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: styles$1.editButton, onClick: onEdit, children: "Редактировать" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: styles$1.deleteButton, onClick: onDelete, children: "Удалить" })
              ] })
            ]
          }
        )
      ]
    }
  );
};

const GITHUB_API_URL = undefined                                                    ;
const GITHUB_TOKEN = undefined                                                  ;
const GITREPOSITORY_OWNER = undefined                                                         ;
const GITREPO = undefined                                             ;

async function addFileToGitHub(path, message, content) {
  const encodedContent = btoa(unescape(encodeURIComponent(content)));
  const body = {
    message,
    content: encodedContent
  };
  const response = await fetch(`${GITHUB_API_URL}/${GITREPOSITORY_OWNER}/${GITREPO}/contents/${path}`, {
    method: "PUT",
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
  if (!response.ok) {
    throw new Error(`Ошибка добавления файла: ${response.statusText}`);
  }
  return await response.json();
}

let a$1=[["\0","","","","","","","","\b","\t","\n","\v","\f","\r","","","","","","","","","","","","","","","","","",""," ","!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/","0","1","2","3","4","5","6","7","8","9",":",";","<","=",">","?","@","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","[","\\","]","^","_","`","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","{","|","}","~","",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,," ","!","C/","PS","$?","Y=","|","SS",'"',"(c)","a","<<","!",,"(r)","-","deg","+-","2","3","'","u","P","*",",","1","o",">>","1/4","1/2","3/4","?","A","A","A","A","A","A","AE","C","E","E","E","E","I","I","I","I","D","N","O","O","O","O","O","x","O","U","U","U","U","U","Th","ss","a","a","a","a","a","a","ae","c","e","e","e","e","i","i","i","i","d","n","o","o","o","o","o","/","o","u","u","u","u","y","th","y"],["A","a","A","a","A","a","C","c","C","c","C","c","C","c","D","d","D","d","E","e","E","e","E","e","E","e","E","e","G","g","G","g","G","g","G","g","H","h","H","h","I","i","I","i","I","i","I","i","I","i","IJ","ij","J","j","K","k","k","L","l","L","l","L","l","L","l","L","l","N","n","N","n","N","n","'n","NG","ng","O","o","O","o","O","o","OE","oe","R","r","R","r","R","r","S","s","S","s","S","s","S","s","T","t","T","t","T","t","U","u","U","u","U","u","U","u","U","u","U","u","W","w","Y","y","Y","Z","z","Z","z","Z","z","s","b","B","B","b","6","6","O","C","c","D","D","D","d","d","3","@","E","F","f","G","G","hv","I","I","K","k","l","l","W","N","n","O","O","o","OI","oi","P","p","YR","2","2","SH","sh","t","T","t","T","U","u","Y","V","Y","y","Z","z","ZH","ZH","zh","zh","2","5","5","ts","w","|","||","|=","!","DZ","Dz","dz","LJ","Lj","lj","NJ","Nj","nj","A","a","I","i","O","o","U","u","U","u","U","u","U","u","U","u","@","A","a","A","a","AE","ae","G","g","G","g","K","k","O","o","O","o","ZH","zh","j","DZ","D","dz","G","g","HV","W","N","n","A","a","AE","ae","O","o"],["A","a","A","a","E","e","E","e","I","i","I","i","O","o","O","o","R","r","R","r","U","u","U","u","S","s","T","t","Y","y","H","h","N","d","OU","ou","Z","z","A","a","E","e","O","o","O","o","O","o","O","o","Y","y","l","n","t","j","db","qp","A","C","c","L","T","s","z","?","?","B","U","V","E","e","J","j","Q","q","R","r","Y","y","a","a","a","b","o","c","d","d","e","@","@","e","e","e","e","j","g","g","g","g","u","Y","h","h","i","i","I","l","l","l","lZ","W","W","m","n","n","n","o","OE","O","F","R","R","R","R","r","r","R","R","R","s","S","j","S","S","t","t","U","U","v","^","W","Y","Y","z","z","Z","Z","?","?","?","C","@","B","E","G","H","j","k","L","q","?","?","dz","dZ","dz","ts","tS","tC","fN","ls","lz","WW","]]","h","h","k","h","j","r","r","r","r","w","y","'",'"',"`","'","`","`","'","?","?","<",">","^","V","^","V","'","-","/","\\",",","_","\\","/",":",".","`","'","^","V","+","-","V",".","@",",","~",'"',"R","X","G","l","s","x","?",,,,,,,,"V","=",'"'],[,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,"'",",",,,,,,,,,"?",,,,,,,,"A",";","E","I","I",,"O",,"U","O","I","A","V","G","D","E","Z","I","Th","I","K","L","M","N","X","O","P","R",,"S","T","Y","F","H","Ps","O","I","Y","a","e","i","i","y","a","v","g","d","e","z","i","th","i","k","l","m","n","x","o","p","r","s","s","t","y","f","h","ps","o","i","y","o","y","o",,"b","th","U","U","U","ph","p","&",,,"St","st","W","w","Q","q","Sp","sp","Sh","sh","F","f","Kh","kh","H","h","G","g","CH","ch","Ti","ti","k","r","c","j"],["Jo","Yo","Dj","Gj","Ie","Dz","I","Yi","J","Lj","Nj","Tsh","Kj","I","U","Dzh","A","B","V","G","D","E","Zh","Z","I","Y","K","L","M","N","O","P","R","S","T","U","F","H","C","Ch","Sh","Shch",,"Y",,"E","Yu","Ya","a","b","v","g","d","e","zh","z","i","y","k","l","m","n","o","p","r","s","t","u","f","h","c","ch","sh","shch",,"y",,"e","yu","ya","je","yo","dj","gj","ie","dz","i","yi","j","lj","nj","tsh","kj","i","u","dzh","O","o","E","e","Ie","ie","E","e","Ie","ie","O","o","Io","io","Ks","ks","Ps","ps","F","f","Y","y","Y","y","u","u","O","o","O","o","Ot","ot","Q","q","*1000*",,,,,,"*100.000*","*1.000.000*",,,'"','"',"R'","r'","G'","g'","G'","g'","G'","g'","Zh'","zh'","Z'","z'","K'","k'","K'","k'","K'","k'","K'","k'","N'","n'","Ng","ng","P'","p'","Kh","kh","S'","s'","T'","t'","U","u","U'","u'","Kh'","kh'","Tts","tts","Ch'","ch'","Ch'","ch'","H","h","Ch","ch","Ch'","ch'","`","Zh","zh","K'","k'",,,"N'","n'",,,"Ch","ch",,,,"a","a","A","a","Ae","ae","Ie","ie","@","@","@","@","Zh","zh","Z","z","Dz","dz","I","i","I","i","O","o","O","o","O","o","E","e","U","u","U","u","U","u","Ch","ch",,,"Y","y"],[,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,"A","B","G","D","E","Z","E","E","T`","Zh","I","L","Kh","Ts","K","H","Dz","Gh","Ch","M","Y","N","Sh","O","Ch`","P","J","Rh","S","V","T","R","Ts`","W","P`","K`","O","F",,,"<","'","/","!",",","?",".",,"a","b","g","d","e","z","e","e","t`","zh","i","l","kh","ts","k","h","dz","gh","ch","m","y","n","sh","o","ch`","p","j","rh","s","v","t","r","ts`","w","p`","k`","o","f","ew",,".","-",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,"@","e","a","o","i","e","e","a","a","o",,"u","'",,,,,,,":",,,,,,,,,,,,,,"b","g","d","h","v","z","kh","t","y","k","k","l","m","m","n","n","s","`","p","p","ts","ts","q","r","sh","t",,,,,,"V","oy","i","'",'"'],[,,,,,,,,,,,,",",,,,,,,,,,,,,,,";",,,,"?",,,"a","'","w'",,"y'",,"b","@","t","th","j","H","kh","d","dh","r","z","s","sh","S","D","T","Z","aa","G",,,,,,,"f","q","k","l","m","n","h","w","~","y","an","un","in","a","u","i","W",,,"'","'",,,,,,,,,,,"0","1","2","3","4","5","6","7","8","9","%",".",",","*",,,,"'","'","'",,"'","'w","'u","'y","tt","tth","b","t","T","p","th","bh","'h","H","ny","dy","H","ch","cch","dd","D","D","Dt","dh","ddh","d","D","D","rr","R","R","R","R","R","R","j","R","S","S","S","S","S","T","GH","F","F","F","v","f","ph","Q","Q","kh","k","K","K","ng","K","g","G","N","G","G","G","L","L","L","L","N","N","N","N","N","h","Ch","hy","h","H","@","W","oe","oe","u","yu","yu","W","v","y","Y","Y","W",,,"y","y'",".","ae",,,,,,,,"@","#",,,,,,,,,,,"^",,,,,,,"0","1","2","3","4","5","6","7","8","9","Sh","D","Gh","&","+m"],["//","/",",","!","!","-",",",",",";","?","~","{","}","*",,,"'",,"b","g","g","d","d","h","w","z","H","t","t","y","yh","k","l","m","n","s","s","`","p","p","S","q","r","sh","t",,,,"a","a","a","A","A","A","e","e","e","E","i","i","u","u","u","o",,"`","'",,,"X","Q","@","@","|","+",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,"h","sh","n","r","b","L","k","'","v","m","f","dh","th","l","g","ny","s","d","z","t","y","p","j","ch","tt","hh","kh","th","z","sh","s","d","t","z","`","gh","q","w","a","aa","i","ee","u","oo","e","ey","o","oa"],[],[,"N","N","H",,"a","aa","i","ii","u","uu","R","L","eN","e","e","ai","oN","o","o","au","k","kh","g","gh","ng","c","ch","j","jh","ny","tt","tth","dd","ddh","nn","t","th","d","dh","n","nnn","p","ph","b","bh","m","y","r","rr","l","l","lll","v","sh","ss","s","h",,,"'","'","aa","i","ii","u","uu","R","RR","eN","e","e","ai","oN","o","o","au",,,,"AUM","'","'","`","'",,,,"q","khh","ghh","z","dddh","rh","f","yy","RR","LL","L","LL"," / "," // ","0","1","2","3","4","5","6","7","8","9",".",,,,,,,,,,,,,,,,,"N","N","H",,"a","aa","i","ii","u","uu","R","RR",,,"e","ai",,,"o","au","k","kh","g","gh","ng","c","ch","j","jh","ny","tt","tth","dd","ddh","nn","t","th","d","dh","n",,"p","ph","b","bh","m","y","r",,"l",,,,"sh","ss","s","h",,,"'",,"aa","i","ii","u","uu","R","RR",,,"e","ai",,,"o","au",,,,,,,,,,,"+",,,,,"rr","rh",,"yy","RR","LL","L","LL",,,"0","1","2","3","4","5","6","7","8","9","r'","r`","Rs","Rs","1/","2/","3/","4/"," 1 - 1/","/16"],[,,"N",,,"a","aa","i","ii","u","uu",,,,,"ee","ai",,,"oo","au","k","kh","g","gh","ng","c","ch","j","jh","ny","tt","tth","dd","ddh","nn","t","th","d","dh","n",,"p","ph","b","bb","m","y","r",,"l","ll",,"v","sh",,"s","h",,,"'",,"aa","i","ii","u","uu",,,,,"ee","ai",,,"oo","au",,,,,,,,,,,,,"khh","ghh","z","rr",,"f",,,,,,,,"0","1","2","3","4","5","6","7","8","9","N","H",,,"G.E.O.",,,,,,,,,,,,,"N","N","H",,"a","aa","i","ii","u","uu","R",,"eN",,"e","ai","oN",,"o","au","k","kh","g","gh","ng","c","ch","j","jh","ny","tt","tth","dd","ddh","nn","t","th","d","dh","n",,"p","ph","b","bh","m","ya","r",,"l","ll",,"v","sh","ss","s","h",,,"'","'","aa","i","ii","u","uu","R","RR","eN",,"e","ai","oN",,"o","au",,,,"AUM",,,,,,,,,,,,,,,,"RR",,,,,,"0","1","2","3","4","5","6","7","8","9"],[,"N","N","H",,"a","aa","i","ii","u","uu","R","L",,,"e","ai",,,"o","au","k","kh","g","gh","ng","c","ch","j","jh","ny","tt","tth","dd","ddh","nn","t","th","d","dh","n",,"p","ph","b","bh","m","y","r",,"l","ll",,,"sh","ss","s","h",,,"'","'","aa","i","ii","u","uu","R",,,,"e","ai",,,"o","au",,,,,,,,,,"+","+",,,,,"rr","rh",,"yy","RR","LL",,,,,"0","1","2","3","4","5","6","7","8","9",,,,,,,,,,,,,,,,,,,"N","H",,"a","aa","i","ii","u","uu",,,,"e","ee","ai",,"o","oo","au","k",,,,"ng","c",,"j",,"ny","tt",,,,"nn","t",,,,"n","nnn","p",,,,"m","y","r","rr","l","ll","lll","v",,"ss","s","h",,,,,"aa","i","ii","u","uu",,,,"e","ee","ai",,"o","oo","au",,,,,,,,,,,"+",,,,,,,,,,,,,,,"0","1","2","3","4","5","6","7","8","9","+10+","+100+","+1000+"],[,"N","N","H",,"a","aa","i","ii","u","uu","R","L",,"e","ee","ai",,"o","oo","au","k","kh","g","gh","ng","c","ch","j","jh","ny","tt","tth","dd","ddh","nn","t","th","d","dh","n",,"p","ph","b","bh","m","y","r","rr","l","ll",,"v","sh","ss","s","h",,,,,"aa","i","ii","u","uu","R","RR",,"e","ee","ai",,"o","oo","au",,,,,,,,,"+","+",,,,,,,,,,"RR","LL",,,,,"0","1","2","3","4","5","6","7","8","9",,,,,,,,,,,,,,,,,,,"N","H",,"a","aa","i","ii","u","uu","R","L",,"e","ee","ai",,"o","oo","au","k","kh","g","gh","ng","c","ch","j","jh","ny","tt","tth","dd","ddh","nn","t","th","d","dh","n",,"p","ph","b","bh","m","y","r","rr","l","ll",,"v","sh","ss","s","h",,,,,"aa","i","ii","u","uu","R","RR",,"e","ee","ai",,"o","oo","au",,,,,,,,,"+","+",,,,,,,,"lll",,"RR","LL",,,,,"0","1","2","3","4","5","6","7","8","9"],[,,"N","H",,"a","aa","i","ii","u","uu","R","L",,"e","ee","ai",,"o","oo","au","k","kh","g","gh","ng","c","ch","j","jh","ny","tt","tth","dd","ddh","nn","t","th","d","dh","n",,"p","ph","b","bh","m","y","r","rr","l","ll","lll","v","sh","ss","s","h",,,,,"aa","i","ii","u","uu","R",,,"e","ee","ai",,"o","oo","au",,,,,,,,,,,"+",,,,,,,,,"RR","LL",,,,,"0","1","2","3","4","5","6","7","8","9",,,,,,,,,,,,,,,,,,,"N","H",,"a","aa","ae","aae","i","ii","u","uu","R","RR","L","LL","e","ee","ai","o","oo","au",,,,"k","kh","g","gh","ng","nng","c","ch","j","jh","ny","jny","nyj","tt","tth","dd","ddh","nn","nndd","t","th","d","dh","n",,"nd","p","ph","b","bh","m","mb","y","r",,"l",,,"v","sh","ss","s","h","ll","f",,,,,,,,,"aa","ae","aae","i","ii","u",,"uu",,"R","e","ee","ai","o","oo","au","L",,,,,,,,,,,,,,,,,,,"RR","LL"," . "],[,"k","kh","kh","kh","kh","kh","ng","cch","ch","ch","ch","ch","y","d","t","th","th","th","n","d","t","th","th","th","n","b","p","ph","f","ph","f","ph","m","y","r","R","l","L","w","s","s","s","h","l","`","h","~","a","a","aa","am","i","ii","ue","uue","u","uu","'",,,,,"Bh.","e","ae","o","ai","ai","ao","+",,,,,,,"M",," * ","0","1","2","3","4","5","6","7","8","9"," // "," /// ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,"k","kh",,"kh",,,"ng","ch",,"s",,,"ny",,,,,,,"d","h","th","th",,"n","b","p","ph","f","ph","f",,"m","y","r",,"l",,"w",,,"s","h",,"`",,"~","a",,"aa","am","i","ii","y","yy","u","uu",,"o","l","ny",,,"e","ei","o","ay","ai",,"+",,,,,,,"M",,,"0","1","2","3","4","5","6","7","8","9",,,"hn","hm"],["AUM",,,,,,,," // "," * ",,"-"," / "," / "," // "," -/ "," +/ "," X/ "," /XX/ "," /X/ ",",",,,,,,,,,,,,"0","1","2","3","4","5","6","7","8","9",".5","1.5","2.5","3.5","4.5","5.5","6.5","7.5","8.5","-.5","+","*","^","_",,"~",,"]","[[","]]",,,"k","kh","g","gh","ng","c","ch","j",,"ny","tt","tth","dd","ddh","nn","t","th","d","dh","n","p","ph","b","bh","m","ts","tsh","dz","dzh","w","zh","z","'","y","r","l","sh","ssh","s","h","a","kss","r",,,,,,,"aa","i","ii","u","uu","R","RR","L","LL","e","ee","o","oo","M","H","i","ii",,,,,,,,,,,,,,,"k","kh","g","gh","ng","c","ch","j",,"ny","tt","tth","dd","ddh","nn","t","th","d","dh","n","p","ph","b","bh","m","ts","tsh","dz","dzh","w","zh","z","'","y","r","l","sh","ss","s","h","a","kss","w","y","r",,"X"," :X: "," /O/ "," /o/ "," \\o\\ "," (O) "],["k","kh","g","gh","ng","c","ch","j","jh","ny","nny","tt","tth","dd","ddh","nn","tt","th","d","dh","n","p","ph","b","bh","m","y","r","l","w","s","h","ll","a",,"i","ii","u","uu","e",,"o","au",,"aa","i","ii","u","uu","e","ai",,,,"N","'",":",,,,,,,,"0","1","2","3","4","5","6","7","8","9"," / "," // ","n*","r*","l*","e*","sh","ss","R","RR","L","LL","R","RR","L","LL",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,"A","B","G","D","E","V","Z","T`","I","K","L","M","N","O","P","Zh","R","S","T","U","P`","K`","G'","Q","Sh","Ch`","C`","Z'","C","Ch","X","J","H","E","Y","W","Xh","OE",,,,,,,,,,,"a","b","g","d","e","v","z","t`","i","k","l","m","n","o","p","zh","r","s","t","u","p`","k`","g'","q","sh","ch`","c`","z'","c","ch","x","j","h","e","y","w","xh","oe","f",,,,," // "],["g","gg","n","d","dd","r","m","b","bb","s","ss",,"j","jj","c","k","t","p","h","ng","nn","nd","nb","dg","rn","rr","rh","rN","mb","mN","bg","bn",,"bs","bsg","bst","bsb","bss","bsj","bj","bc","bt","bp","bN","bbN","sg","sn","sd","sr","sm","sb","sbg","sss","s","sj","sc","sk","st","sp","sh",,,,,"Z","g","d","m","b","s","Z",,"j","c","t","p","N","j",,,,,"ck","ch",,,"pb","pN","hh","Q",,,,,,,,"a","ae","ya","yae","eo","e","yeo","ye","o","wa","wae","oe","yo","u","weo","we","wi","yu","eu","yi","i","a-o","a-u","ya-o","ya-yo","eo-o","eo-u","eo-eu","yeo-o","yeo-u","o-eo","o-e","o-ye","o-o","o-u","yo-ya","yo-yae","yo-yeo","yo-o","yo-i","u-a","u-ae","u-eo-eu","u-ye","u-u","yu-a","yu-eo","yu-e","yu-yeo","yu-ye","yu-u","yu-i","eu-u","eu-eu","yi-u","i-a","i-ya","i-o","i-u","i-eu","i-U","U","U-eo","U-u","U-i","UU",,,,,,"g","gg","gs","n","nj","nh","d","l","lg","lm","lb","ls","lt","lp","lh","m","b","bs","s","ss","ng","j","c","k","t","p","h","gl","gsg","ng","nd","ns","nZ","nt","dg","tl","lgs","ln","ld","lth","ll","lmg","lms","lbs","lbh","rNp","lss","lZ","lk","lQ","mg","ml","mb","ms","mss","mZ","mc","mh","mN","bl","bp","ph","pN","sg","sd","sl","sb","Z","g","ss",,"kh","N","Ns","NZ","pb","pN","hn","hl","hm","hb","Q"],["ha","hu","hi","haa","hee","he","ho",,"la","lu","li","laa","lee","le","lo","lwa","hha","hhu","hhi","hhaa","hhee","hhe","hho","hhwa","ma","mu","mi","maa","mee","me","mo","mwa","sza","szu","szi","szaa","szee","sze","szo","szwa","ra","ru","ri","raa","ree","re","ro","rwa","sa","su","si","saa","see","se","so","swa","sha","shu","shi","shaa","shee","she","sho","shwa","qa","qu","qi","qaa","qee","qe","qo",,"qwa",,"qwi","qwaa","qwee","qwe",,,"qha","qhu","qhi","qhaa","qhee","qhe","qho",,"qhwa",,"qhwi","qhwaa","qhwee","qhwe",,,"ba","bu","bi","baa","bee","be","bo","bwa","va","vu","vi","vaa","vee","ve","vo","vwa","ta","tu","ti","taa","tee","te","to","twa","ca","cu","ci","caa","cee","ce","co","cwa","xa","xu","xi","xaa","xee","xe","xo",,"xwa",,"xwi","xwaa","xwee","xwe",,,"na","nu","ni","naa","nee","ne","no","nwa","nya","nyu","nyi","nyaa","nyee","nye","nyo","nywa","'a","'u",,"'aa","'ee","'e","'o","'wa","ka","ku","ki","kaa","kee","ke","ko",,"kwa",,"kwi","kwaa","kwee","kwe",,,"kxa","kxu","kxi","kxaa","kxee","kxe","kxo",,"kxwa",,"kxwi","kxwaa","kxwee","kxwe",,,"wa","wu","wi","waa","wee","we","wo",,"`a","`u","`i","`aa","`ee","`e","`o",,"za","zu","zi","zaa","zee","ze","zo","zwa","zha","zhu","zhi","zhaa","zhee","zhe","zho","zhwa","ya","yu","yi","yaa","yee","ye","yo",,"da","du","di","daa","dee","de","do","dwa","dda","ddu","ddi","ddaa","ddee","dde","ddo","ddwa"],["ja","ju","ji","jaa","jee","je","jo","jwa","ga","gu","gi","gaa","gee","ge","go",,"gwa",,"gwi","gwaa","gwee","gwe",,,"gga","ggu","ggi","ggaa","ggee","gge","ggo",,"tha","thu","thi","thaa","thee","the","tho","thwa","cha","chu","chi","chaa","chee","che","cho","chwa","pha","phu","phi","phaa","phee","phe","pho","phwa","tsa","tsu","tsi","tsaa","tsee","tse","tso","tswa","tza","tzu","tzi","tzaa","tzee","tze","tzo",,"fa","fu","fi","faa","fee","fe","fo","fwa","pa","pu","pi","paa","pee","pe","po","pwa","rya","mya","fya",,,,,,," ",".",",",";",":",":: ","?","//","1","2","3","4","5","6","7","8","9","10+","20+","30+","40+","50+","60+","70+","80+","90+","100+","10,000+",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,"a","e","i","o","u","v","ga","ka","ge","gi","go","gu","gv","ha","he","hi","ho","hu","hv","la","le","li","lo","lu","lv","ma","me","mi","mo","mu","na","hna","nah","ne","ni","no","nu","nv","qua","que","qui","quo","quu","quv","sa","s","se","si","so","su","sv","da","ta","de","te","di","ti","do","du","dv","dla","tla","tle","tli","tlo","tlu","tlv","tsa","tse","tsi","tso","tsu","tsv","wa","we","wi","wo","wu","wv","ya","ye","yi","yo","yu","yv"],[,"ai","aai","i","ii","u","uu","oo","ee","i","a","aa","we","we","wi","wi","wii","wii","wo","wo","woo","woo","woo","wa","wa","waa","waa","waa","ai","w","'","t","k","sh","s","n","w","n",,"w","c","?","l","en","in","on","an","pai","paai","pi","pii","pu","puu","poo","hee","hi","pa","paa","pwe","pwe","pwi","pwi","pwii","pwii","pwo","pwo","pwoo","pwoo","pwa","pwa","pwaa","pwaa","pwaa","p","p","h","tai","taai","ti","tii","tu","tuu","too","dee","di","ta","taa","twe","twe","twi","twi","twii","twii","two","two","twoo","twoo","twa","twa","twaa","twaa","twaa","t","tte","tti","tto","tta","kai","kaai","ki","kii","ku","kuu","koo","ka","kaa","kwe","kwe","kwi","kwi","kwii","kwii","kwo","kwo","kwoo","kwoo","kwa","kwa","kwaa","kwaa","kwaa","k","kw","keh","kih","koh","kah","gai","caai","gi","gii","gu","guu","coo","ga","gaa","cwe","cwe","cwi","cwi","cwii","cwii","cwo","cwo","cwoo","cwoo","cwa","cwa","cwaa","cwaa","cwaa","g","th","mai","maai","mi","mii","mu","muu","moo","ma","maa","mwe","mwe","mwi","mwi","mwii","mwii","mwo","mwo","mwoo","mwoo","mwa","mwa","mwaa","mwaa","mwaa","m","m","mh","m","m","nai","naai","ni","nii","nu","nuu","noo","na","naa","nwe","nwe","nwa","nwa","nwaa","nwaa","nwaa","n","ng","nh","lai","laai","li","lii","lu","luu","loo","la","laa","lwe","lwe","lwi","lwi","lwii","lwii","lwo","lwo","lwoo","lwoo","lwa","lwa","lwaa","lwaa","l","l","l","sai","saai","si","sii","su","suu","soo","sa","saa","swe","swe","swi","swi","swii","swii","swo","swo","swoo","swoo"],["swa","swa","swaa","swaa","swaa","s","s","sw","s","sk","skw","sW","spwa","stwa","skwa","scwa","she","shi","shii","sho","shoo","sha","shaa","shwe","shwe","shwi","shwi","shwii","shwii","shwo","shwo","shwoo","shwoo","shwa","shwa","shwaa","shwaa","sh","jai","yaai","ji","jii","ju","juu","yoo","ja","jaa","ywe","ywe","ywi","ywi","ywii","ywii","ywo","ywo","ywoo","ywoo","ywa","ywa","ywaa","ywaa","ywaa","j","y","y","yi","re","rai","le","raai","ri","rii","ru","ruu","lo","ra","raa","la","rwaa","rwaa","r","r","r","vai","faai","vi","vii","vu","vuu","va","vaa","fwaa","fwaa","v","the","the","thi","thi","thii","thii","tho","thoo","tha","thaa","thwaa","thwaa","th","tthe","tthi","ttho","ttha","tth","tye","tyi","tyo","tya","he","hi","hii","ho","hoo","ha","haa","h","h","hk","qaai","qi","qii","qu","quu","qa","qaa","q","tlhe","tlhi","tlho","tlha","re","ri","ro","ra","ngaai","ngi","ngii","ngu","nguu","nga","ngaa","ng","nng","she","shi","sho","sha","the","thi","tho","tha","th","lhi","lhii","lho","lhoo","lha","lhaa","lh","the","thi","thii","tho","thoo","tha","thaa","th","b","e","i","o","a","we","wi","wo","wa","ne","ni","no","na","ke","ki","ko","ka","he","hi","ho","ha","ghu","gho","ghe","ghee","ghi","gha","ru","ro","re","ree","ri","ra","wu","wo","we","wee","wi","wa","hwu","hwo","hwe","hwee","hwi","hwa","thu","tho","the","thee","thi","tha","ttu","tto","tte","ttee","tti","tta","pu","po","pe","pee","pi","pa","p","gu","go","ge","gee","gi","ga","khu","kho","khe","khee","khi","kha","kku","kko","kke","kkee","kki"],["kka","kk","nu","no","ne","nee","ni","na","mu","mo","me","mee","mi","ma","yu","yo","ye","yee","yi","ya","ju","ju","jo","je","jee","ji","ji","ja","jju","jjo","jje","jjee","jji","jja","lu","lo","le","lee","li","la","dlu","dlo","dle","dlee","dli","dla","lhu","lho","lhe","lhee","lhi","lha","tlhu","tlho","tlhe","tlhee","tlhi","tlha","tlu","tlo","tle","tlee","tli","tla","zu","zo","ze","zee","zi","za","z","z","dzu","dzo","dze","dzee","dzi","dza","su","so","se","see","si","sa","shu","sho","she","shee","shi","sha","sh","tsu","tso","tse","tsee","tsi","tsa","chu","cho","che","chee","chi","cha","ttsu","ttso","ttse","ttsee","ttsi","ttsa","X",".","qai","ngai","nngi","nngii","nngo","nngoo","nnga","nngaa",,,,,,,,,," ","b","l","f","s","n","h","d","t","c","q","m","g","ng","z","r","a","o","u","e","i","ch","th","ph","p","x","p","<",">",,,,"f","v","u","yr","y","w","th","th","a","o","ac","ae","o","o","o","oe","on","r","k","c","k","g","ng","g","g","w","h","h","h","h","n","n","n","i","e","j","g","ae","a","eo","p","z","s","s","s","c","z","t","t","d","b","b","p","p","e","m","m","m","l","l","ng","ng","d","o","ear","ior","qu","qu","qu","s","yr","yr","yr","q","x",".",":","+","17","18","19"],[,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,"k","kh","g","gh","ng","c","ch","j","jh","ny","t","tth","d","ddh","nn","t","th","d","dh","n","p","ph","b","bh","m","y","r","l","v","sh","ss","s","h","l","q","a","aa","i","ii","u","uk","uu","uuv","ry","ryy","ly","lyy","e","ai","oo","oo","au","a","aa","aa","i","ii","y","yy","u","uu","ua","oe","ya","ie","e","ae","ai","oo","au","M","H","a`",,,,"r",,"!",,,,,,"."," // ",":","+","++"," * "," /// ","KR","'",,,,"0","1","2","3","4","5","6","7","8","9"],[" @ "," ... ",",",". ",": "," // ",,"-",",",". ",,,,,,,"0","1","2","3","4","5","6","7","8","9",,,,,,,"a","e","i","o","u","O","U","ee","n","ng","b","p","q","g","m","l","s","sh","t","d","ch","j","y","r","w","f","k","kha","ts","z","h","zr","lh","zh","ch","-","e","i","o","u","O","U","ng","b","p","q","g","m","t","d","ch","j","ts","y","w","k","g","h","jy","ny","dz","e","i","iy","U","u","ng","k","g","h","p","sh","t","d","j","f","g","h","ts","z","r","ch","zh","i","k","r","f","zh",,,,,,,,,,"H","X","W","M"," 3 "," 333 ","a","i","k","ng","c","tt","tth","dd","nn","t","d","p","ph","ss","zh","z","a","t","zh","gh","ng","c","jh","tta","ddh","t","dh","ss","cy","zh","z","u","y","bh","'"],[],[],[],[],[],["A","a","B","b","B","b","B","b","C","c","D","d","D","d","D","d","D","d","D","d","E","e","E","e","E","e","E","e","E","e","F","f","G","g","H","h","H","h","H","h","H","h","H","h","I","i","I","i","K","k","K","k","K","k","L","l","L","l","L","l","L","l","M","m","M","m","M","m","N","n","N","n","N","n","N","n","O","o","O","o","O","o","O","o","P","p","P","p","R","r","R","r","R","r","R","r","S","s","S","s","S","s","S","s","S","s","T","t","T","t","T","t","T","t","U","u","U","u","U","u","U","u","U","u","V","v","V","v","W","w","W","w","W","w","W","w","W","w","X","x","X","x","Y","y","Z","z","Z","z","Z","z","h","t","w","y","a","S",,,,,"A","a","A","a","A","a","A","a","A","a","A","a","A","a","A","a","A","a","A","a","A","a","A","a","E","e","E","e","E","e","E","e","E","e","E","e","E","e","E","e","I","i","I","i","O","o","O","o","O","o","O","o","O","o","O","o","O","o","O","o","O","o","O","o","O","o","O","o","U","u","U","u","U","u","U","u","U","u","U","u","U","u","Y","y","Y","y","Y","y","Y","y"],["a","a","a","a","a","a","a","a","A","A","A","A","A","A","A","A","e","e","e","e","e","e",,,"E","E","E","E","E","E",,,"e","e","e","e","e","e","e","e","E","E","E","E","E","E","E","E","i","i","i","i","i","i","i","i","I","I","I","I","I","I","I","I","o","o","o","o","o","o",,,"O","O","O","O","O","O",,,"u","u","u","u","u","u","u","u",,"U",,"U",,"U",,"U","o","o","o","o","o","o","o","o","O","O","O","O","O","O","O","O","a","a","e","e","e","e","i","i","o","o","u","u","o","o",,,"a","a","a","a","a","a","a","a","A","A","A","A","A","A","A","A","e","e","e","e","e","e","e","e","E","E","E","E","E","E","E","E","o","o","o","o","o","o","o","o","O","O","O","O","O","O","O","O","a","a","a","a","a",,"a","a","A","A","A","A","A","'","i","'","~",'"~',"e","e","e",,"e","e","E","E","E","E","E","'`","''","'~","i","i","i","i",,,"i","i","I","I","I","I",,"`'","`'","`~","u","u","u","u","R","R","u","u","U","U","U","U","R",'"`',"\"'","`",,,"o","o","o",,"o","o","O","O","O","O","O","'","`"],[" "," "," "," "," "," "," "," "," "," "," "," ",,,,,"-","-","-","-","--","--","||","_","'","'",",","'",'"','"',",,",'"',"+","++","*","*>",".","..","...",".","\n","\n\n",,,,,," ","%0","%00","'","''","'''","`","``","```","^","<",">","*","!!","!?","-","_","-","^","***","--","/","-[","]-",,"?!","!?","7","PP","(]","[)",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,"0",,,,"4","5","6","7","8","9","+","-","=","(",")","n","0","1","2","3","4","5","6","7","8","9","+","-","=","(",")",,,,,,,,,,,,,,,,,,"ECU","CL","Cr","FF","L","mil","N","Pts","Rs","W","NS","D","EU","K","T","Dr"],[,,"C",,,,,,,,"g","H","H","H","h",,"I","I","L","l","lb","N","no","(p)","P","P","Q","R","R","R",,,"(sm)","(tel)","(tm)",,"Z",,,"mho","Z",,,,"B","C","e","e",,"F",,"M","o",,,,,"i","Q","(fax)","pi",,,"Pi",,"G","L","L","Y","D","d","e","i","j",,,"per",,,,,,," 1/3 "," 2/3 "," 1/5 "," 2/5 "," 3/5 "," 4/5 "," 1/6 "," 5/6 "," 1/8 "," 3/8 "," 5/8 "," 7/8 "," 1/","I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","L","C","D","M","i","ii","iii","iv","v","vi","vii","viii","ix","x","xi","xii","l","c","d","m","(D","D)","((|))",")",,,,,,,,,,,,,"-","|","-","|","-","|","\\","/","\\","/","-","-","~","~","-","|","-","|","-","-","-","|","-","|","|","-","-","-","-","-","-","|","|","|","|","|","|","|","^","V","\\","=","V","^","-","-","|","|","-","-","|","|","=","|","=","=","|","=","|","=","=","=","=","=","=","|","=","|","=","|","\\","/","\\","/","=","=","~","~","|","|","-","|","-","|","-","-","-","|","-","|","|","|","|","|","|","|","-","\\","\\","|"],[],[],[],["-","-","|","|","-","-","|","|","-","-","|","|","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","-","-","|","|","-","|","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","+","/","\\","X","-","|","-","|","-","|","-","|","-","|","-","|","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","-","|",,,,,,,,,,,"#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","^","^","^","^",">",">",">",">",">",">","V","V","V","V","<","<","<","<","<","<","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","#","#","#","#","#","^","^","^","O","#","#","#","#","#","#","#","#"],[],[],[" ","a","1","b","'","k","2","l","@","c","i","f","/","m","s","p",'"',"e","3","h","9","o","6","r","^","d","j","g",">","n","t","q",",","*","5","<","-","u","8","v",".","%","[","$","+","x","!","&",";",":","4","\\","0","z","7","(","_","?","w","]","#","y",")","=","[d7]","[d17]","[d27]","[d127]","[d37]","[d137]","[d237]","[d1237]","[d47]","[d147]","[d247]","[d1247]","[d347]","[d1347]","[d2347]","[d12347]","[d57]","[d157]","[d257]","[d1257]","[d357]","[d1357]","[d2357]","[d12357]","[d457]","[d1457]","[d2457]","[d12457]","[d3457]","[d13457]","[d23457]","[d123457]","[d67]","[d167]","[d267]","[d1267]","[d367]","[d1367]","[d2367]","[d12367]","[d467]","[d1467]","[d2467]","[d12467]","[d3467]","[d13467]","[d23467]","[d123467]","[d567]","[d1567]","[d2567]","[d12567]","[d3567]","[d13567]","[d23567]","[d123567]","[d4567]","[d14567]","[d24567]","[d124567]","[d34567]","[d134567]","[d234567]","[d1234567]","[d8]","[d18]","[d28]","[d128]","[d38]","[d138]","[d238]","[d1238]","[d48]","[d148]","[d248]","[d1248]","[d348]","[d1348]","[d2348]","[d12348]","[d58]","[d158]","[d258]","[d1258]","[d358]","[d1358]","[d2358]","[d12358]","[d458]","[d1458]","[d2458]","[d12458]","[d3458]","[d13458]","[d23458]","[d123458]","[d68]","[d168]","[d268]","[d1268]","[d368]","[d1368]","[d2368]","[d12368]","[d468]","[d1468]","[d2468]","[d12468]","[d3468]","[d13468]","[d23468]","[d123468]","[d568]","[d1568]","[d2568]","[d12568]","[d3568]","[d13568]","[d23568]","[d123568]","[d4568]","[d14568]","[d24568]","[d124568]","[d34568]","[d134568]","[d234568]","[d1234568]","[d78]","[d178]","[d278]","[d1278]","[d378]","[d1378]","[d2378]","[d12378]","[d478]","[d1478]","[d2478]","[d12478]","[d3478]","[d13478]","[d23478]","[d123478]","[d578]","[d1578]","[d2578]","[d12578]","[d3578]","[d13578]","[d23578]","[d123578]","[d4578]","[d14578]","[d24578]","[d124578]","[d34578]","[d134578]","[d234578]","[d1234578]","[d678]","[d1678]","[d2678]","[d12678]","[d3678]","[d13678]","[d23678]","[d123678]","[d4678]","[d14678]","[d24678]","[d124678]","[d34678]","[d134678]","[d234678]","[d1234678]","[d5678]","[d15678]","[d25678]","[d125678]","[d35678]","[d135678]","[d235678]","[d1235678]","[d45678]","[d145678]","[d245678]","[d1245678]","[d345678]","[d1345678]","[d2345678]","[d12345678]"],[],[],[],[],[],[],[],[" ",",",". ",'"',"[JIS]",'"',"/","0","<","> ","<<",">> ","[","] ","{","} ","[(",")] ","@","X ","[","] ","[[","]] ","((",")) ","[[","]] ","~ ","``","''",",,","@","1","2","3","4","5","6","7","8","9",,,,,,,"~","+","+","+","+",,"@"," // ","+10+","+20+","+30+",,,,,,,"a","a","i","i","u","u","e","e","o","o","ka","ga","ki","gi","ku","gu","ke","ge","ko","go","sa","za","si","zi","su","zu","se","ze","so","zo","ta","da","ti","di","tu","tu","du","te","de","to","do","na","ni","nu","ne","no","ha","ba","pa","hi","bi","pi","hu","bu","pu","he","be","pe","ho","bo","po","ma","mi","mu","me","mo","ya","ya","yu","yu","yo","yo","ra","ri","ru","re","ro","wa","wa","wi","we","wo","n","vu",,,,,,,,,'"','"',,,"a","a","i","i","u","u","e","e","o","o","ka","ga","ki","gi","ku","gu","ke","ge","ko","go","sa","za","si","zi","su","zu","se","ze","so","zo","ta","da","ti","di","tu","tu","du","te","de","to","do","na","ni","nu","ne","no","ha","ba","pa","hi","bi","pi","hu","bu","pu","he","be","pe","ho","bo","po","ma","mi","mu","me","mo","ya","ya","yu","yu","yo","yo","ra","ri","ru","re","ro","wa","wa","wi","we","wo","n","vu","ka","ke","va","vi","ve","vo",,,'"','"'],[,,,,,"B","P","M","F","D","T","N","L","G","K","H","J","Q","X","ZH","CH","SH","R","Z","C","S","A","O","E","EH","AI","EI","AU","OU","AN","EN","ANG","ENG","ER","I","U","IU","V","NG","GN",,,,,"g","gg","gs","n","nj","nh","d","dd","r","lg","lm","lb","ls","lt","lp","rh","m","b","bb","bs","s","ss",,"j","jj","c","k","t","p","h","a","ae","ya","yae","eo","e","yeo","ye","o","wa","wae","oe","yo","u","weo","we","wi","yu","eu","yi","i",,"nn","nd","ns","nZ","lgs","ld","lbs","lZ","lQ","mb","ms","mZ","mN","bg",,"bsg","bst","bj","bt","bN","bbN","sg","sn","sd","sb","sj","Z",,"N","Ns","NZ","pN","hh","Q","yo-ya","yo-yae","yo-i","yu-yeo","yu-ye","yu-i","U","U-i",,,,,,,,,,,,,,,,,,"BU","ZI","JI","GU","EE","ENN","OO","ONN","IR","ANN","INN","UNN","IM","NGG","AINN","AUNN","AM","OM","ONG","INNN","P","T","K","H"],["(g)","(n)","(d)","(r)","(m)","(b)","(s)","()","(j)","(c)","(k)","(t)","(p)","(h)","(ga)","(na)","(da)","(ra)","(ma)","(ba)","(sa)","(a)","(ja)","(ca)","(ka)","(ta)","(pa)","(ha)","(ju)",,,,"(1) ","(2) ","(3) ","(4) ","(5) ","(6) ","(7) ","(8) ","(9) ","(10) ","(Yue) ","(Huo) ","(Shui) ","(Mu) ","(Jin) ","(Tu) ","(Ri) ","(Zhu) ","(You) ","(She) ","(Ming) ","(Te) ","(Cai) ","(Zhu) ","(Lao) ","(Dai) ","(Hu) ","(Xue) ","(Jian) ","(Qi) ","(Zi) ","(Xie) ","(Ji) ","(Xiu) ","<<",">>",,,,,,,,,,,,,,,,,,,,,,,,,,,,,"(g)","(n)","(d)","(r)","(m)","(b)","(s)","()","(j)","(c)","(k)","(t)","(p)","(h)","(ga)","(na)","(da)","(ra)","(ma)","(ba)","(sa)","(a)","(ja)","(ca)","(ka)","(ta)","(pa)","(ha)",,,,"KIS ","(1) ","(2) ","(3) ","(4) ","(5) ","(6) ","(7) ","(8) ","(9) ","(10) ","(Yue) ","(Huo) ","(Shui) ","(Mu) ","(Jin) ","(Tu) ","(Ri) ","(Zhu) ","(You) ","(She) ","(Ming) ","(Te) ","(Cai) ","(Zhu) ","(Lao) ","(Mi) ","(Nan) ","(Nu) ","(Shi) ","(You) ","(Yin) ","(Zhu) ","(Xiang) ","(Xiu) ","(Xie) ","(Zheng) ","(Shang) ","(Zhong) ","(Xia) ","(Zuo) ","(You) ","(Yi) ","(Zong) ","(Xue) ","(Jian) ","(Qi) ","(Zi) ","(Xie) ","(Ye) ",,,,,,,,,,,,,,,,"1M","2M","3M","4M","5M","6M","7M","8M","9M","10M","11M","12M",,,,,"a","i","u","u","o","ka","ki","ku","ke","ko","sa","si","su","se","so","ta","ti","tu","te","to","na","ni","nu","ne","no","ha","hi","hu","he","ho","ma","mi","mu","me","mo","ya","yu","yo","ra","ri","ru","re","ro","wa","wi","we","wo"],["apartment","alpha","ampere","are","inning","inch","won","escudo","acre","ounce","ohm","kai-ri","carat","calorie","gallon","gamma","giga","guinea","curie","guilder","kilo","kilogram","kilometer","kilowatt","gram","gram ton","cruzeiro","krone","case","koruna","co-op","cycle","centime","shilling","centi","cent","dozen","desi","dollar","ton","nano","knot","heights","percent","parts","barrel","piaster","picul","pico","building","farad","feet","bushel","franc","hectare","peso","pfennig","hertz","pence","page","beta","point","volt","hon","pound","hall","horn","micro","mile","mach","mark","mansion","micron","milli","millibar","mega","megaton","meter","yard","yard","yuan","liter","lira","rupee","ruble","rem","roentgen","watt","0h","1h","2h","3h","4h","5h","6h","7h","8h","9h","10h","11h","12h","13h","14h","15h","16h","17h","18h","19h","20h","21h","22h","23h","24h","HPA","da","AU","bar","oV","pc",,,,,"Heisei","Syouwa","Taisyou","Meiji","Inc.","pA","nA","microamp","mA","kA","kB","MB","GB","cal","kcal","pF","nF","microFarad","microgram","mg","kg","Hz","kHz","MHz","GHz","THz","microliter","ml","dl","kl","fm","nm","micrometer","mm","cm","km","mm^2","cm^2","m^2","km^2","mm^4","cm^3","m^3","km^3","m/s","m/s^2","Pa","kPa","MPa","GPa","rad","rad/s","rad/s^2","ps","ns","microsecond","ms","pV","nV","microvolt","mV","kV","MV","pW","nW","microwatt","mW","kW","MW","kOhm","MOhm","a.m.","Bq","cc","cd","C/kg","Co.","dB","Gy","ha","HP","in","K.K.","KM","kt","lm","ln","log","lx","mb","mil","mol","pH","p.m.","PPM","PR","sr","Sv","Wb",,,"1d","2d","3d","4d","5d","6d","7d","8d","9d","10d","11d","12d","13d","14d","15d","16d","17d","18d","19d","20d","21d","22d","23d","24d","25d","26d","27d","28d","29d","30d","31d"],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],["Yi","Ding","Kao","Qi","Shang","Xia",,"Wan","Zhang","San","Shang","Xia","Ji","Bu","Yu","Mian","Gai","Chou","Chou","Zhuan","Qie","Pi","Shi","Shi","Qiu","Bing","Ye","Cong","Dong","Si","Cheng","Diu","Qiu","Liang","Diu","You","Liang","Yan","Bing","Sang","Gun","Jiu","Ge","Ya","Qiang","Zhong","Ji","Jie","Feng","Guan","Chuan","Chan","Lin","Zhuo","Zhu","Ha","Wan","Dan","Wei","Zhu","Jing","Li","Ju","Pie","Fu","Yi","Yi","Nai","Shime","Jiu","Jiu","Zhe","Me","Yi",,"Zhi","Wu","Zha","Hu","Fa","Le","Zhong","Ping","Pang","Qiao","Hu","Guai","Cheng","Cheng","Yi","Yin",,"Mie","Jiu","Qi","Ye","Xi","Xiang","Gai","Diu","Hal",,"Shu","Twul","Shi","Ji","Nang","Jia","Kel","Shi",,"Ol","Mai","Luan","Cal","Ru","Xue","Yan","Fu","Sha","Na","Gan","Sol","El","Cwul",,"Gan","Chi","Gui","Gan","Luan","Lin","Yi","Jue","Liao","Ma","Yu","Zheng","Shi","Shi","Er","Chu","Yu","Yu","Yu","Yun","Hu","Qi","Wu","Jing","Si","Sui","Gen","Gen","Ya","Xie","Ya","Qi","Ya","Ji","Tou","Wang","Kang","Ta","Jiao","Hai","Yi","Chan","Heng","Mu",,"Xiang","Jing","Ting","Liang","Xiang","Jing","Ye","Qin","Bo","You","Xie","Dan","Lian","Duo","Wei","Ren","Ren","Ji","La","Wang","Yi","Shi","Ren","Le","Ding","Ze","Jin","Pu","Chou","Ba","Zhang","Jin","Jie","Bing","Reng","Cong","Fo","San","Lun","Sya","Cang","Zi","Shi","Ta","Zhang","Fu","Xian","Xian","Tuo","Hong","Tong","Ren","Qian","Gan","Yi","Di","Dai","Ling","Yi","Chao","Chang","Sa",,"Yi","Mu","Men","Ren","Jia","Chao","Yang","Qian","Zhong","Pi","Wan","Wu","Jian","Jie","Yao","Feng","Cang","Ren","Wang","Fen","Di","Fang"],["Zhong","Qi","Pei","Yu","Diao","Dun","Wen","Yi","Xin","Kang","Yi","Ji","Ai","Wu","Ji","Fu","Fa","Xiu","Jin","Bei","Dan","Fu","Tang","Zhong","You","Huo","Hui","Yu","Cui","Chuan","San","Wei","Chuan","Che","Ya","Xian","Shang","Chang","Lun","Cang","Xun","Xin","Wei","Zhu",,"Xuan","Nu","Bo","Gu","Ni","Ni","Xie","Ban","Xu","Ling","Zhou","Shen","Qu","Si","Beng","Si","Jia","Pi","Yi","Si","Ai","Zheng","Dian","Han","Mai","Dan","Zhu","Bu","Qu","Bi","Shao","Ci","Wei","Di","Zhu","Zuo","You","Yang","Ti","Zhan","He","Bi","Tuo","She","Yu","Yi","Fo","Zuo","Kou","Ning","Tong","Ni","Xuan","Qu","Yong","Wa","Qian",,"Ka",,"Pei","Huai","He","Lao","Xiang","Ge","Yang","Bai","Fa","Ming","Jia","Er","Bing","Ji","Hen","Huo","Gui","Quan","Tiao","Jiao","Ci","Yi","Shi","Xing","Shen","Tuo","Kan","Zhi","Gai","Lai","Yi","Chi","Kua","Guang","Li","Yin","Shi","Mi","Zhu","Xu","You","An","Lu","Mou","Er","Lun","Tong","Cha","Chi","Xun","Gong","Zhou","Yi","Ru","Jian","Xia","Jia","Zai","Lu","Ko","Jiao","Zhen","Ce","Qiao","Kuai","Chai","Ning","Nong","Jin","Wu","Hou","Jiong","Cheng","Zhen","Zuo","Chou","Qin","Lu","Ju","Shu","Ting","Shen","Tuo","Bo","Nan","Hao","Bian","Tui","Yu","Xi","Cu","E","Qiu","Xu","Kuang","Ku","Wu","Jun","Yi","Fu","Lang","Zu","Qiao","Li","Yong","Hun","Jing","Xian","San","Pai","Su","Fu","Xi","Li","Fu","Ping","Bao","Yu","Si","Xia","Xin","Xiu","Yu","Ti","Che","Chou",,"Yan","Lia","Li","Lai",,"Jian","Xiu","Fu","He","Ju","Xiao","Pai","Jian","Biao","Chu","Fei","Feng","Ya","An","Bei","Yu","Xin","Bi","Jian"],["Chang","Chi","Bing","Zan","Yao","Cui","Lia","Wan","Lai","Cang","Zong","Ge","Guan","Bei","Tian","Shu","Shu","Men","Dao","Tan","Jue","Chui","Xing","Peng","Tang","Hou","Yi","Qi","Ti","Gan","Jing","Jie","Sui","Chang","Jie","Fang","Zhi","Kong","Juan","Zong","Ju","Qian","Ni","Lun","Zhuo","Wei","Luo","Song","Leng","Hun","Dong","Zi","Ben","Wu","Ju","Nai","Cai","Jian","Zhai","Ye","Zhi","Sha","Qing",,"Ying","Cheng","Jian","Yan","Nuan","Zhong","Chun","Jia","Jie","Wei","Yu","Bing","Ruo","Ti","Wei","Pian","Yan","Feng","Tang","Wo","E","Xie","Che","Sheng","Kan","Di","Zuo","Cha","Ting","Bei","Ye","Huang","Yao","Zhan","Chou","Yan","You","Jian","Xu","Zha","Ci","Fu","Bi","Zhi","Zong","Mian","Ji","Yi","Xie","Xun","Si","Duan","Ce","Zhen","Ou","Tou","Tou","Bei","Za","Lu","Jie","Wei","Fen","Chang","Gui","Sou","Zhi","Su","Xia","Fu","Yuan","Rong","Li","Ru","Yun","Gou","Ma","Bang","Dian","Tang","Hao","Jie","Xi","Shan","Qian","Jue","Cang","Chu","San","Bei","Xiao","Yong","Yao","Tan","Suo","Yang","Fa","Bing","Jia","Dai","Zai","Tang",,"Bin","Chu","Nuo","Can","Lei","Cui","Yong","Zao","Zong","Peng","Song","Ao","Chuan","Yu","Zhai","Cou","Shang","Qiang","Jing","Chi","Sha","Han","Zhang","Qing","Yan","Di","Xi","Lu","Bei","Piao","Jin","Lian","Lu","Man","Qian","Xian","Tan","Ying","Dong","Zhuan","Xiang","Shan","Qiao","Jiong","Tui","Zun","Pu","Xi","Lao","Chang","Guang","Liao","Qi","Deng","Chan","Wei","Ji","Fan","Hui","Chuan","Jian","Dan","Jiao","Jiu","Seng","Fen","Xian","Jue","E","Jiao","Jian","Tong","Lin","Bo","Gu",,"Su","Xian","Jiang","Min","Ye","Jin","Jia","Qiao","Pi","Feng","Zhou","Ai","Sai"],["Yi","Jun","Nong","Chan","Yi","Dang","Jing","Xuan","Kuai","Jian","Chu","Dan","Jiao","Sha","Zai",,"Bin","An","Ru","Tai","Chou","Chai","Lan","Ni","Jin","Qian","Meng","Wu","Ning","Qiong","Ni","Chang","Lie","Lei","Lu","Kuang","Bao","Du","Biao","Zan","Zhi","Si","You","Hao","Chen","Chen","Li","Teng","Wei","Long","Chu","Chan","Rang","Shu","Hui","Li","Luo","Zan","Nuo","Tang","Yan","Lei","Nang","Er","Wu","Yun","Zan","Yuan","Xiong","Chong","Zhao","Xiong","Xian","Guang","Dui","Ke","Dui","Mian","Tu","Chang","Er","Dui","Er","Xin","Tu","Si","Yan","Yan","Shi","Shi","Dang","Qian","Dou","Fen","Mao","Shen","Dou","Bai","Jing","Li","Huang","Ru","Wang","Nei","Quan","Liang","Yu","Ba","Gong","Liu","Xi",,"Lan","Gong","Tian","Guan","Xing","Bing","Qi","Ju","Dian","Zi","Ppwun","Yang","Jian","Shou","Ji","Yi","Ji","Chan","Jiong","Mao","Ran","Nei","Yuan","Mao","Gang","Ran","Ce","Jiong","Ce","Zai","Gua","Jiong","Mao","Zhou","Mou","Gou","Xu","Mian","Mi","Rong","Yin","Xie","Kan","Jun","Nong","Yi","Mi","Shi","Guan","Meng","Zhong","Ju","Yuan","Ming","Kou","Lam","Fu","Xie","Mi","Bing","Dong","Tai","Gang","Feng","Bing","Hu","Chong","Jue","Hu","Kuang","Ye","Leng","Pan","Fu","Min","Dong","Xian","Lie","Xia","Jian","Jing","Shu","Mei","Tu","Qi","Gu","Zhun","Song","Jing","Liang","Qing","Diao","Ling","Dong","Gan","Jian","Yin","Cou","Yi","Li","Cang","Ming","Zhuen","Cui","Si","Duo","Jin","Lin","Lin","Ning","Xi","Du","Ji","Fan","Fan","Fan","Feng","Ju","Chu","Tako","Feng","Mok","Ci","Fu","Feng","Ping","Feng","Kai","Huang","Kai","Gan","Deng","Ping","Qu","Xiong","Kuai","Tu","Ao","Chu","Ji","Dang","Han","Han","Zao"],["Dao","Diao","Dao","Ren","Ren","Chuang","Fen","Qie","Yi","Ji","Kan","Qian","Cun","Chu","Wen","Ji","Dan","Xing","Hua","Wan","Jue","Li","Yue","Lie","Liu","Ze","Gang","Chuang","Fu","Chu","Qu","Ju","Shan","Min","Ling","Zhong","Pan","Bie","Jie","Jie","Bao","Li","Shan","Bie","Chan","Jing","Gua","Gen","Dao","Chuang","Kui","Ku","Duo","Er","Zhi","Shua","Quan","Cha","Ci","Ke","Jie","Gui","Ci","Gui","Kai","Duo","Ji","Ti","Jing","Lou","Gen","Ze","Yuan","Cuo","Xue","Ke","La","Qian","Cha","Chuang","Gua","Jian","Cuo","Li","Ti","Fei","Pou","Chan","Qi","Chuang","Zi","Gang","Wan","Bo","Ji","Duo","Qing","Yan","Zhuo","Jian","Ji","Bo","Yan","Ju","Huo","Sheng","Jian","Duo","Duan","Wu","Gua","Fu","Sheng","Jian","Ge","Zha","Kai","Chuang","Juan","Chan","Tuan","Lu","Li","Fou","Shan","Piao","Kou","Jiao","Gua","Qiao","Jue","Hua","Zha","Zhuo","Lian","Ju","Pi","Liu","Gui","Jiao","Gui","Jian","Jian","Tang","Huo","Ji","Jian","Yi","Jian","Zhi","Chan","Cuan","Mo","Li","Zhu","Li","Ya","Quan","Ban","Gong","Jia","Wu","Mai","Lie","Jin","Keng","Xie","Zhi","Dong","Zhu","Nu","Jie","Qu","Shao","Yi","Zhu","Miao","Li","Jing","Lao","Lao","Juan","Kou","Yang","Wa","Xiao","Mou","Kuang","Jie","Lie","He","Shi","Ke","Jing","Hao","Bo","Min","Chi","Lang","Yong","Yong","Mian","Ke","Xun","Juan","Qing","Lu","Pou","Meng","Lai","Le","Kai","Mian","Dong","Xu","Xu","Kan","Wu","Yi","Xun","Weng","Sheng","Lao","Mu","Lu","Piao","Shi","Ji","Qin","Qiang","Jiao","Quan","Yang","Yi","Jue","Fan","Juan","Tong","Ju","Dan","Xie","Mai","Xun","Xun","Lu","Li","Che","Rang","Quan","Bao","Shao","Yun","Jiu","Bao","Gou","Wu"],["Yun","Mwun","Nay","Gai","Gai","Bao","Cong",,"Xiong","Peng","Ju","Tao","Ge","Pu","An","Pao","Fu","Gong","Da","Jiu","Qiong","Bi","Hua","Bei","Nao","Chi","Fang","Jiu","Yi","Za","Jiang","Kang","Jiang","Kuang","Hu","Xia","Qu","Bian","Gui","Qie","Zang","Kuang","Fei","Hu","Tou","Gui","Gui","Hui","Dan","Gui","Lian","Lian","Suan","Du","Jiu","Qu","Xi","Pi","Qu","Yi","Qia","Yan","Bian","Ni","Qu","Shi","Xin","Qian","Nian","Sa","Zu","Sheng","Wu","Hui","Ban","Shi","Xi","Wan","Hua","Xie","Wan","Bei","Zu","Zhuo","Xie","Dan","Mai","Nan","Dan","Ji","Bo","Shuai","Bu","Kuang","Bian","Bu","Zhan","Qia","Lu","You","Lu","Xi","Gua","Wo","Xie","Jie","Jie","Wei","Ang","Qiong","Zhi","Mao","Yin","Wei","Shao","Ji","Que","Luan","Shi","Juan","Xie","Xu","Jin","Que","Wu","Ji","E","Qing","Xi",,"Han","Zhan","E","Ting","Li","Zhe","Han","Li","Ya","Ya","Yan","She","Zhi","Zha","Pang",,"He","Ya","Zhi","Ce","Pang","Ti","Li","She","Hou","Ting","Zui","Cuo","Fei","Yuan","Ce","Yuan","Xiang","Yan","Li","Jue","Sha","Dian","Chu","Jiu","Qin","Ao","Gui","Yan","Si","Li","Chang","Lan","Li","Yan","Yan","Yuan","Si","Gong","Lin","Qiu","Qu","Qu","Uk","Lei","Du","Xian","Zhuan","San","Can","Can","Can","Can","Ai","Dai","You","Cha","Ji","You","Shuang","Fan","Shou","Guai","Ba","Fa","Ruo","Shi","Shu","Zhuo","Qu","Shou","Bian","Xu","Jia","Pan","Sou","Gao","Wei","Sou","Die","Rui","Cong","Kou","Gu","Ju","Ling","Gua","Tao","Kou","Zhi","Jiao","Zhao","Ba","Ding","Ke","Tai","Chi","Shi","You","Qiu","Po","Ye","Hao","Si","Tan","Chi","Le","Diao","Ji",,"Hong"],["Mie","Xu","Mang","Chi","Ge","Xuan","Yao","Zi","He","Ji","Diao","Cun","Tong","Ming","Hou","Li","Tu","Xiang","Zha","Xia","Ye","Lu","A","Ma","Ou","Xue","Yi","Jun","Chou","Lin","Tun","Yin","Fei","Bi","Qin","Qin","Jie","Bu","Fou","Ba","Dun","Fen","E","Han","Ting","Hang","Shun","Qi","Hong","Zhi","Shen","Wu","Wu","Chao","Ne","Xue","Xi","Chui","Dou","Wen","Hou","Ou","Wu","Gao","Ya","Jun","Lu","E","Ge","Mei","Ai","Qi","Cheng","Wu","Gao","Fu","Jiao","Hong","Chi","Sheng","Ne","Tun","Fu","Yi","Dai","Ou","Li","Bai","Yuan","Kuai",,"Qiang","Wu","E","Shi","Quan","Pen","Wen","Ni","M","Ling","Ran","You","Di","Zhou","Shi","Zhou","Tie","Xi","Yi","Qi","Ping","Zi","Gu","Zi","Wei","Xu","He","Nao","Xia","Pei","Yi","Xiao","Shen","Hu","Ming","Da","Qu","Ju","Gem","Za","Tuo","Duo","Pou","Pao","Bi","Fu","Yang","He","Zha","He","Hai","Jiu","Yong","Fu","Que","Zhou","Wa","Ka","Gu","Ka","Zuo","Bu","Long","Dong","Ning","Tha","Si","Xian","Huo","Qi","Er","E","Guang","Zha","Xi","Yi","Lie","Zi","Mie","Mi","Zhi","Yao","Ji","Zhou","Ge","Shuai","Zan","Xiao","Ke","Hui","Kua","Huai","Tao","Xian","E","Xuan","Xiu","Wai","Yan","Lao","Yi","Ai","Pin","Shen","Tong","Hong","Xiong","Chi","Wa","Ha","Zai","Yu","Di","Pai","Xiang","Ai","Hen","Kuang","Ya","Da","Xiao","Bi","Yue",,"Hua","Sasou","Kuai","Duo",,"Ji","Nong","Mou","Yo","Hao","Yuan","Long","Pou","Mang","Ge","E","Chi","Shao","Li","Na","Zu","He","Ku","Xiao","Xian","Lao","Bo","Zhe","Zha","Liang","Ba","Mie","Le","Sui","Fou","Bu","Han","Heng","Geng","Shuo","Ge"],["You","Yan","Gu","Gu","Bai","Han","Suo","Chun","Yi","Ai","Jia","Tu","Xian","Huan","Li","Xi","Tang","Zuo","Qiu","Che","Wu","Zao","Ya","Dou","Qi","Di","Qin","Ma","Mal","Hong","Dou","Kes","Lao","Liang","Suo","Zao","Huan","Lang","Sha","Ji","Zuo","Wo","Feng","Yin","Hu","Qi","Shou","Wei","Shua","Chang","Er","Li","Qiang","An","Jie","Yo","Nian","Yu","Tian","Lai","Sha","Xi","Tuo","Hu","Ai","Zhou","Nou","Ken","Zhuo","Zhuo","Shang","Di","Heng","Lan","A","Xiao","Xiang","Tun","Wu","Wen","Cui","Sha","Hu","Qi","Qi","Tao","Dan","Dan","Ye","Zi","Bi","Cui","Chuo","He","Ya","Qi","Zhe","Pei","Liang","Xian","Pi","Sha","La","Ze","Qing","Gua","Pa","Zhe","Se","Zhuan","Nie","Guo","Luo","Yan","Di","Quan","Tan","Bo","Ding","Lang","Xiao",,"Tang","Chi","Ti","An","Jiu","Dan","Ke","Yong","Wei","Nan","Shan","Yu","Zhe","La","Jie","Hou","Han","Die","Zhou","Chai","Wai","Re","Yu","Yin","Zan","Yao","Wo","Mian","Hu","Yun","Chuan","Hui","Huan","Huan","Xi","He","Ji","Kui","Zhong","Wei","Sha","Xu","Huang","Du","Nie","Xuan","Liang","Yu","Sang","Chi","Qiao","Yan","Dan","Pen","Can","Li","Yo","Zha","Wei","Miao","Ying","Pen","Phos","Kui","Xi","Yu","Jie","Lou","Ku","Sao","Huo","Ti","Yao","He","A","Xiu","Qiang","Se","Yong","Su","Hong","Xie","Yi","Suo","Ma","Cha","Hai","Ke","Ta","Sang","Tian","Ru","Sou","Wa","Ji","Pang","Wu","Xian","Shi","Ge","Zi","Jie","Luo","Weng","Wa","Si","Chi","Hao","Suo","Jia","Hai","Suo","Qin","Nie","He","Cis","Sai","Ng","Ge","Na","Dia","Ai",,"Tong","Bi","Ao","Ao","Lian","Cui","Zhe","Mo","Sou","Sou","Tan"],["Di","Qi","Jiao","Chong","Jiao","Kai","Tan","San","Cao","Jia","Ai","Xiao","Piao","Lou","Ga","Gu","Xiao","Hu","Hui","Guo","Ou","Xian","Ze","Chang","Xu","Po","De","Ma","Ma","Hu","Lei","Du","Ga","Tang","Ye","Beng","Ying","Saai","Jiao","Mi","Xiao","Hua","Mai","Ran","Zuo","Peng","Lao","Xiao","Ji","Zhu","Chao","Kui","Zui","Xiao","Si","Hao","Fu","Liao","Qiao","Xi","Xiu","Tan","Tan","Mo","Xun","E","Zun","Fan","Chi","Hui","Zan","Chuang","Cu","Dan","Yu","Tun","Cheng","Jiao","Ye","Xi","Qi","Hao","Lian","Xu","Deng","Hui","Yin","Pu","Jue","Qin","Xun","Nie","Lu","Si","Yan","Ying","Da","Dan","Yu","Zhou","Jin","Nong","Yue","Hui","Qi","E","Zao","Yi","Shi","Jiao","Yuan","Ai","Yong","Jue","Kuai","Yu","Pen","Dao","Ge","Xin","Dun","Dang","Sin","Sai","Pi","Pi","Yin","Zui","Ning","Di","Lan","Ta","Huo","Ru","Hao","Xia","Ya","Duo","Xi","Chou","Ji","Jin","Hao","Ti","Chang",,,"Ca","Ti","Lu","Hui","Bo","You","Nie","Yin","Hu","Mo","Huang","Zhe","Li","Liu","Haai","Nang","Xiao","Mo","Yan","Li","Lu","Long","Fu","Dan","Chen","Pin","Pi","Xiang","Huo","Mo","Xi","Duo","Ku","Yan","Chan","Ying","Rang","Dian","La","Ta","Xiao","Jiao","Chuo","Huan","Huo","Zhuan","Nie","Xiao","Ca","Li","Chan","Chai","Li","Yi","Luo","Nang","Zan","Su","Xi","So","Jian","Za","Zhu","Lan","Nie","Nang",,,"Wei","Hui","Yin","Qiu","Si","Nin","Jian","Hui","Xin","Yin","Nan","Tuan","Tuan","Dun","Kang","Yuan","Jiong","Pian","Yun","Cong","Hu","Hui","Yuan","You","Guo","Kun","Cong","Wei","Tu","Wei","Lun","Guo","Qun","Ri","Ling","Gu","Guo","Tai","Guo","Tu","You"],["Guo","Yin","Hun","Pu","Yu","Han","Yuan","Lun","Quan","Yu","Qing","Guo","Chuan","Wei","Yuan","Quan","Ku","Fu","Yuan","Yuan","E","Tu","Tu","Tu","Tuan","Lue","Hui","Yi","Yuan","Luan","Luan","Tu","Ya","Tu","Ting","Sheng","Pu","Lu","Iri","Ya","Zai","Wei","Ge","Yu","Wu","Gui","Pi","Yi","Di","Qian","Qian","Zhen","Zhuo","Dang","Qia","Akutsu","Yama","Kuang","Chang","Qi","Nie","Mo","Ji","Jia","Zhi","Zhi","Ban","Xun","Tou","Qin","Fen","Jun","Keng","Tun","Fang","Fen","Ben","Tan","Kan","Pi","Zuo","Keng","Bi","Xing","Di","Jing","Ji","Kuai","Di","Jing","Jian","Tan","Li","Ba","Wu","Fen","Zhui","Po","Pan","Tang","Kun","Qu","Tan","Zhi","Tuo","Gan","Ping","Dian","Gua","Ni","Tai","Pi","Jiong","Yang","Fo","Ao","Liu","Qiu","Mu","Ke","Gou","Xue","Ba","Chi","Che","Ling","Zhu","Fu","Hu","Zhi","Chui","La","Long","Long","Lu","Ao","Tay","Pao",,"Xing","Dong","Ji","Ke","Lu","Ci","Chi","Lei","Gai","Yin","Hou","Dui","Zhao","Fu","Guang","Yao","Duo","Duo","Gui","Cha","Yang","Yin","Fa","Gou","Yuan","Die","Xie","Ken","Jiong","Shou","E","Ha","Dian","Hong","Wu","Kua",,"Tao","Dang","Kai","Gake","Nao","An","Xing","Xian","Huan","Bang","Pei","Ba","Yi","Yin","Han","Xu","Chui","Cen","Geng","Ai","Peng","Fang","Que","Yong","Xun","Jia","Di","Mai","Lang","Xuan","Cheng","Yan","Jin","Zhe","Lei","Lie","Bu","Cheng","Gomi","Bu","Shi","Xun","Guo","Jiong","Ye","Nian","Di","Yu","Bu","Ya","Juan","Sui","Pi","Cheng","Wan","Ju","Lun","Zheng","Kong","Chong","Dong","Dai","Tan","An","Cai","Shu","Beng","Kan","Zhi","Duo","Yi","Zhi","Yi","Pei","Ji","Zhun","Qi","Sao","Ju","Ni"],["Ku","Ke","Tang","Kun","Ni","Jian","Dui","Jin","Gang","Yu","E","Peng","Gu","Tu","Leng",,"Ya","Qian",,"An",,"Duo","Nao","Tu","Cheng","Yin","Hun","Bi","Lian","Guo","Die","Zhuan","Hou","Bao","Bao","Yu","Di","Mao","Jie","Ruan","E","Geng","Kan","Zong","Yu","Huang","E","Yao","Yan","Bao","Ji","Mei","Chang","Du","Tuo","Yin","Feng","Zhong","Jie","Zhen","Feng","Gang","Chuan","Jian","Pyeng","Toride","Xiang","Huang","Leng","Duan",,"Xuan","Ji","Ji","Kuai","Ying","Ta","Cheng","Yong","Kai","Su","Su","Shi","Mi","Ta","Weng","Cheng","Tu","Tang","Que","Zhong","Li","Peng","Bang","Sai","Zang","Dui","Tian","Wu","Cheng","Xun","Ge","Zhen","Ai","Gong","Yan","Kan","Tian","Yuan","Wen","Xie","Liu","Ama","Lang","Chang","Peng","Beng","Chen","Cu","Lu","Ou","Qian","Mei","Mo","Zhuan","Shuang","Shu","Lou","Chi","Man","Biao","Jing","Qi","Shu","Di","Zhang","Kan","Yong","Dian","Chen","Zhi","Xi","Guo","Qiang","Jin","Di","Shang","Mu","Cui","Yan","Ta","Zeng","Qi","Qiang","Liang",,"Zhui","Qiao","Zeng","Xu","Shan","Shan","Ba","Pu","Kuai","Dong","Fan","Que","Mo","Dun","Dun","Dun","Di","Sheng","Duo","Duo","Tan","Deng","Wu","Fen","Huang","Tan","Da","Ye","Sho","Mama","Yu","Qiang","Ji","Qiao","Ken","Yi","Pi","Bi","Dian","Jiang","Ye","Yong","Bo","Tan","Lan","Ju","Huai","Dang","Rang","Qian","Xun","Lan","Xi","He","Ai","Ya","Dao","Hao","Ruan","Mama","Lei","Kuang","Lu","Yan","Tan","Wei","Huai","Long","Long","Rui","Li","Lin","Rang","Ten","Xun","Yan","Lei","Ba",,"Shi","Ren",,"Zhuang","Zhuang","Sheng","Yi","Mai","Ke","Zhu","Zhuang","Hu","Hu","Kun","Yi","Hu","Xu","Kun","Shou","Mang","Zun"],["Shou","Yi","Zhi","Gu","Chu","Jiang","Feng","Bei","Cay","Bian","Sui","Qun","Ling","Fu","Zuo","Xia","Xiong",,"Nao","Xia","Kui","Xi","Wai","Yuan","Mao","Su","Duo","Duo","Ye","Qing","Uys","Gou","Gou","Qi","Meng","Meng","Yin","Huo","Chen","Da","Ze","Tian","Tai","Fu","Guai","Yao","Yang","Hang","Gao","Shi","Ben","Tai","Tou","Yan","Bi","Yi","Kua","Jia","Duo","Kwu","Kuang","Yun","Jia","Pa","En","Lian","Huan","Di","Yan","Pao","Quan","Qi","Nai","Feng","Xie","Fen","Dian",,"Kui","Zou","Huan","Qi","Kai","Zha","Ben","Yi","Jiang","Tao","Zang","Ben","Xi","Xiang","Fei","Diao","Xun","Keng","Dian","Ao","She","Weng","Pan","Ao","Wu","Ao","Jiang","Lian","Duo","Yun","Jiang","Shi","Fen","Huo","Bi","Lian","Duo","Nu","Nu","Ding","Nai","Qian","Jian","Ta","Jiu","Nan","Cha","Hao","Xian","Fan","Ji","Shuo","Ru","Fei","Wang","Hong","Zhuang","Fu","Ma","Dan","Ren","Fu","Jing","Yan","Xie","Wen","Zhong","Pa","Du","Ji","Keng","Zhong","Yao","Jin","Yun","Miao","Pei","Shi","Yue","Zhuang","Niu","Yan","Na","Xin","Fen","Bi","Yu","Tuo","Feng","Yuan","Fang","Wu","Yu","Gui","Du","Ba","Ni","Zhou","Zhuo","Zhao","Da","Nai","Yuan","Tou","Xuan","Zhi","E","Mei","Mo","Qi","Bi","Shen","Qie","E","He","Xu","Fa","Zheng","Min","Ban","Mu","Fu","Ling","Zi","Zi","Shi","Ran","Shan","Yang","Man","Jie","Gu","Si","Xing","Wei","Zi","Ju","Shan","Pin","Ren","Yao","Tong","Jiang","Shu","Ji","Gai","Shang","Kuo","Juan","Jiao","Gou","Mu","Jian","Jian","Yi","Nian","Zhi","Ji","Ji","Xian","Heng","Guang","Jun","Kua","Yan","Ming","Lie","Pei","Yan","You","Yan","Cha","Shen","Yin","Chi","Gui","Quan","Zi"],["Song","Wei","Hong","Wa","Lou","Ya","Rao","Jiao","Luan","Ping","Xian","Shao","Li","Cheng","Xiao","Mang","Fu","Suo","Wu","Wei","Ke","Lai","Chuo","Ding","Niang","Xing","Nan","Yu","Nuo","Pei","Nei","Juan","Shen","Zhi","Han","Di","Zhuang","E","Pin","Tui","Han","Mian","Wu","Yan","Wu","Xi","Yan","Yu","Si","Yu","Wa",,"Xian","Ju","Qu","Shui","Qi","Xian","Zhui","Dong","Chang","Lu","Ai","E","E","Lou","Mian","Cong","Pou","Ju","Po","Cai","Ding","Wan","Biao","Xiao","Shu","Qi","Hui","Fu","E","Wo","Tan","Fei","Wei","Jie","Tian","Ni","Quan","Jing","Hun","Jing","Qian","Dian","Xing","Hu","Wa","Lai","Bi","Yin","Chou","Chuo","Fu","Jing","Lun","Yan","Lan","Kun","Yin","Ya","Ju","Li","Dian","Xian","Hwa","Hua","Ying","Chan","Shen","Ting","Dang","Yao","Wu","Nan","Ruo","Jia","Tou","Xu","Yu","Wei","Ti","Rou","Mei","Dan","Ruan","Qin","Hui","Wu","Qian","Chun","Mao","Fu","Jie","Duan","Xi","Zhong","Mei","Huang","Mian","An","Ying","Xuan","Jie","Wei","Mei","Yuan","Zhen","Qiu","Ti","Xie","Tuo","Lian","Mao","Ran","Si","Pian","Wei","Wa","Jiu","Hu","Ao",,"Bou","Xu","Tou","Gui","Zou","Yao","Pi","Xi","Yuan","Ying","Rong","Ru","Chi","Liu","Mei","Pan","Ao","Ma","Gou","Kui","Qin","Jia","Sao","Zhen","Yuan","Cha","Yong","Ming","Ying","Ji","Su","Niao","Xian","Tao","Pang","Lang","Nao","Bao","Ai","Pi","Pin","Yi","Piao","Yu","Lei","Xuan","Man","Yi","Zhang","Kang","Yong","Ni","Li","Di","Gui","Yan","Jin","Zhuan","Chang","Ce","Han","Nen","Lao","Mo","Zhe","Hu","Hu","Ao","Nen","Qiang","Ma","Pie","Gu","Wu","Jiao","Tuo","Zhan","Mao","Xian","Xian","Mo","Liao","Lian","Hua"],["Gui","Deng","Zhi","Xu","Yi","Hua","Xi","Hui","Rao","Xi","Yan","Chan","Jiao","Mei","Fan","Fan","Xian","Yi","Wei","Jiao","Fu","Shi","Bi","Shan","Sui","Qiang","Lian","Huan","Xin","Niao","Dong","Yi","Can","Ai","Niang","Neng","Ma","Tiao","Chou","Jin","Ci","Yu","Pin","Yong","Xu","Nai","Yan","Tai","Ying","Can","Niao","Wo","Ying","Mian","Kaka","Ma","Shen","Xing","Ni","Du","Liu","Yuan","Lan","Yan","Shuang","Ling","Jiao","Niang","Lan","Xian","Ying","Shuang","Shuai","Quan","Mi","Li","Luan","Yan","Zhu","Lan","Zi","Jie","Jue","Jue","Kong","Yun","Zi","Zi","Cun","Sun","Fu","Bei","Zi","Xiao","Xin","Meng","Si","Tai","Bao","Ji","Gu","Nu","Xue",,"Zhuan","Hai","Luan","Sun","Huai","Mie","Cong","Qian","Shu","Chan","Ya","Zi","Ni","Fu","Zi","Li","Xue","Bo","Ru","Lai","Nie","Nie","Ying","Luan","Mian","Ning","Rong","Ta","Gui","Zhai","Qiong","Yu","Shou","An","Tu","Song","Wan","Rou","Yao","Hong","Yi","Jing","Zhun","Mi","Zhu","Dang","Hong","Zong","Guan","Zhou","Ding","Wan","Yi","Bao","Shi","Shi","Chong","Shen","Ke","Xuan","Shi","You","Huan","Yi","Tiao","Shi","Xian","Gong","Cheng","Qun","Gong","Xiao","Zai","Zha","Bao","Hai","Yan","Xiao","Jia","Shen","Chen","Rong","Huang","Mi","Kou","Kuan","Bin","Su","Cai","Zan","Ji","Yuan","Ji","Yin","Mi","Kou","Qing","Que","Zhen","Jian","Fu","Ning","Bing","Huan","Mei","Qin","Han","Yu","Shi","Ning","Qin","Ning","Zhi","Yu","Bao","Kuan","Ning","Qin","Mo","Cha","Ju","Gua","Qin","Hu","Wu","Liao","Shi","Zhu","Zhai","Shen","Wei","Xie","Kuan","Hui","Liao","Jun","Huan","Yi","Yi","Bao","Qin","Chong","Bao","Feng","Cun","Dui","Si","Xun","Dao","Lu","Dui","Shou"],["Po","Feng","Zhuan","Fu","She","Ke","Jiang","Jiang","Zhuan","Wei","Zun","Xun","Shu","Dui","Dao","Xiao","Ji","Shao","Er","Er","Er","Ga","Jian","Shu","Chen","Shang","Shang","Mo","Ga","Chang","Liao","Xian","Xian",,"Wang","Wang","You","Liao","Liao","Yao","Mang","Wang","Wang","Wang","Ga","Yao","Duo","Kui","Zhong","Jiu","Gan","Gu","Gan","Tui","Gan","Gan","Shi","Yin","Chi","Kao","Ni","Jin","Wei","Niao","Ju","Pi","Ceng","Xi","Bi","Ju","Jie","Tian","Qu","Ti","Jie","Wu","Diao","Shi","Shi","Ping","Ji","Xie","Chen","Xi","Ni","Zhan","Xi",,"Man","E","Lou","Ping","Ti","Fei","Shu","Xie","Tu","Lu","Lu","Xi","Ceng","Lu","Ju","Xie","Ju","Jue","Liao","Jue","Shu","Xi","Che","Tun","Ni","Shan",,"Xian","Li","Xue","Nata",,"Long","Yi","Qi","Ren","Wu","Han","Shen","Yu","Chu","Sui","Qi",,"Yue","Ban","Yao","Ang","Ya","Wu","Jie","E","Ji","Qian","Fen","Yuan","Qi","Cen","Qian","Qi","Cha","Jie","Qu","Gang","Xian","Ao","Lan","Dao","Ba","Zuo","Zuo","Yang","Ju","Gang","Ke","Gou","Xue","Bei","Li","Tiao","Ju","Yan","Fu","Xiu","Jia","Ling","Tuo","Pei","You","Dai","Kuang","Yue","Qu","Hu","Po","Min","An","Tiao","Ling","Chi","Yuri","Dong","Cem","Kui","Xiu","Mao","Tong","Xue","Yi","Kura","He","Ke","Luo","E","Fu","Xun","Die","Lu","An","Er","Gai","Quan","Tong","Yi","Mu","Shi","An","Wei","Hu","Zhi","Mi","Li","Ji","Tong","Wei","You","Sang","Xia","Li","Yao","Jiao","Zheng","Luan","Jiao","E","E","Yu","Ye","Bu","Qiao","Qun","Feng","Feng","Nao","Li","You","Xian","Hong","Dao","Shen","Cheng","Tu","Geng","Jun","Hao","Xia","Yin","Yu"],["Lang","Kan","Lao","Lai","Xian","Que","Kong","Chong","Chong","Ta","Lin","Hua","Ju","Lai","Qi","Min","Kun","Kun","Zu","Gu","Cui","Ya","Ya","Gang","Lun","Lun","Leng","Jue","Duo","Zheng","Guo","Yin","Dong","Han","Zheng","Wei","Yao","Pi","Yan","Song","Jie","Beng","Zu","Jue","Dong","Zhan","Gu","Yin",,"Ze","Huang","Yu","Wei","Yang","Feng","Qiu","Dun","Ti","Yi","Zhi","Shi","Zai","Yao","E","Zhu","Kan","Lu","Yan","Mei","Gan","Ji","Ji","Huan","Ting","Sheng","Mei","Qian","Wu","Yu","Zong","Lan","Jue","Yan","Yan","Wei","Zong","Cha","Sui","Rong","Yamashina","Qin","Yu","Kewashii","Lou","Tu","Dui","Xi","Weng","Cang","Dang","Hong","Jie","Ai","Liu","Wu","Song","Qiao","Zi","Wei","Beng","Dian","Cuo","Qian","Yong","Nie","Cuo","Ji",,"Tao","Song","Zong","Jiang","Liao","Kang","Chan","Die","Cen","Ding","Tu","Lou","Zhang","Zhan","Zhan","Ao","Cao","Qu","Qiang","Zui","Zui","Dao","Dao","Xi","Yu","Bo","Long","Xiang","Ceng","Bo","Qin","Jiao","Yan","Lao","Zhan","Lin","Liao","Liao","Jin","Deng","Duo","Zun","Jiao","Gui","Yao","Qiao","Yao","Jue","Zhan","Yi","Xue","Nao","Ye","Ye","Yi","E","Xian","Ji","Xie","Ke","Xi","Di","Ao","Zui",,"Ni","Rong","Dao","Ling","Za","Yu","Yue","Yin",,"Jie","Li","Sui","Long","Long","Dian","Ying","Xi","Ju","Chan","Ying","Kui","Yan","Wei","Nao","Quan","Chao","Cuan","Luan","Dian","Dian",,"Yan","Yan","Yan","Nao","Yan","Chuan","Gui","Chuan","Zhou","Huang","Jing","Xun","Chao","Chao","Lie","Gong","Zuo","Qiao","Ju","Gong","Kek","Wu","Pwu","Pwu","Chai","Qiu","Qiu","Ji","Yi","Si","Ba","Zhi","Zhao","Xiang","Yi","Jin","Xun","Juan","Phas","Xun","Jin","Fu"],["Za","Bi","Shi","Bu","Ding","Shuai","Fan","Nie","Shi","Fen","Pa","Zhi","Xi","Hu","Dan","Wei","Zhang","Tang","Dai","Ma","Pei","Pa","Tie","Fu","Lian","Zhi","Zhou","Bo","Zhi","Di","Mo","Yi","Yi","Ping","Qia","Juan","Ru","Shuai","Dai","Zheng","Shui","Qiao","Zhen","Shi","Qun","Xi","Bang","Dai","Gui","Chou","Ping","Zhang","Sha","Wan","Dai","Wei","Chang","Sha","Qi","Ze","Guo","Mao","Du","Hou","Zheng","Xu","Mi","Wei","Wo","Fu","Yi","Bang","Ping","Tazuna","Gong","Pan","Huang","Dao","Mi","Jia","Teng","Hui","Zhong","Shan","Man","Mu","Biao","Guo","Ze","Mu","Bang","Zhang","Jiong","Chan","Fu","Zhi","Hu","Fan","Chuang","Bi","Hei",,"Mi","Qiao","Chan","Fen","Meng","Bang","Chou","Mie","Chu","Jie","Xian","Lan","Gan","Ping","Nian","Qian","Bing","Bing","Xing","Gan","Yao","Huan","You","You","Ji","Guang","Pi","Ting","Ze","Guang","Zhuang","Mo","Qing","Bi","Qin","Dun","Chuang","Gui","Ya","Bai","Jie","Xu","Lu","Wu",,"Ku","Ying","Di","Pao","Dian","Ya","Miao","Geng","Ci","Fu","Tong","Pang","Fei","Xiang","Yi","Zhi","Tiao","Zhi","Xiu","Du","Zuo","Xiao","Tu","Gui","Ku","Pang","Ting","You","Bu","Ding","Cheng","Lai","Bei","Ji","An","Shu","Kang","Yong","Tuo","Song","Shu","Qing","Yu","Yu","Miao","Sou","Ce","Xiang","Fei","Jiu","He","Hui","Liu","Sha","Lian","Lang","Sou","Jian","Pou","Qing","Jiu","Jiu","Qin","Ao","Kuo","Lou","Yin","Liao","Dai","Lu","Yi","Chu","Chan","Tu","Si","Xin","Miao","Chang","Wu","Fei","Guang","Koc","Kuai","Bi","Qiang","Xie","Lin","Lin","Liao","Lu",,"Ying","Xian","Ting","Yong","Li","Ting","Yin","Xun","Yan","Ting","Di","Po","Jian","Hui","Nai","Hui","Gong","Nian"],["Kai","Bian","Yi","Qi","Nong","Fen","Ju","Yan","Yi","Zang","Bi","Yi","Yi","Er","San","Shi","Er","Shi","Shi","Gong","Diao","Yin","Hu","Fu","Hong","Wu","Tui","Chi","Jiang","Ba","Shen","Di","Zhang","Jue","Tao","Fu","Di","Mi","Xian","Hu","Chao","Nu","Jing","Zhen","Yi","Mi","Quan","Wan","Shao","Ruo","Xuan","Jing","Dun","Zhang","Jiang","Qiang","Peng","Dan","Qiang","Bi","Bi","She","Dan","Jian","Gou","Sei","Fa","Bi","Kou","Nagi","Bie","Xiao","Dan","Kuo","Qiang","Hong","Mi","Kuo","Wan","Jue","Ji","Ji","Gui","Dang","Lu","Lu","Tuan","Hui","Zhi","Hui","Hui","Yi","Yi","Yi","Yi","Huo","Huo","Shan","Xing","Wen","Tong","Yan","Yan","Yu","Chi","Cai","Biao","Diao","Bin","Peng","Yong","Piao","Zhang","Ying","Chi","Chi","Zhuo","Tuo","Ji","Pang","Zhong","Yi","Wang","Che","Bi","Chi","Ling","Fu","Wang","Zheng","Cu","Wang","Jing","Dai","Xi","Xun","Hen","Yang","Huai","Lu","Hou","Wa","Cheng","Zhi","Xu","Jing","Tu","Cong",,"Lai","Cong","De","Pai","Xi",,"Qi","Chang","Zhi","Cong","Zhou","Lai","Yu","Xie","Jie","Jian","Chi","Jia","Bian","Huang","Fu","Xun","Wei","Pang","Yao","Wei","Xi","Zheng","Piao","Chi","De","Zheng","Zheng","Bie","De","Chong","Che","Jiao","Wei","Jiao","Hui","Mei","Long","Xiang","Bao","Qu","Xin","Shu","Bi","Yi","Le","Ren","Dao","Ding","Gai","Ji","Ren","Ren","Chan","Tan","Te","Te","Gan","Qi","Shi","Cun","Zhi","Wang","Mang","Xi","Fan","Ying","Tian","Min","Min","Zhong","Chong","Wu","Ji","Wu","Xi","Ye","You","Wan","Cong","Zhong","Kuai","Yu","Bian","Zhi","Qi","Cui","Chen","Tai","Tun","Qian","Nian","Hun","Xiong","Niu","Wang","Xian","Xin","Kang","Hu","Kai","Fen"],["Huai","Tai","Song","Wu","Ou","Chang","Chuang","Ju","Yi","Bao","Chao","Min","Pei","Zuo","Zen","Yang","Kou","Ban","Nu","Nao","Zheng","Pa","Bu","Tie","Gu","Hu","Ju","Da","Lian","Si","Chou","Di","Dai","Yi","Tu","You","Fu","Ji","Peng","Xing","Yuan","Ni","Guai","Fu","Xi","Bi","You","Qie","Xuan","Cong","Bing","Huang","Xu","Chu","Pi","Xi","Xi","Tan","Koraeru","Zong","Dui",,"Ki","Yi","Chi","Ren","Xun","Shi","Xi","Lao","Heng","Kuang","Mu","Zhi","Xie","Lian","Tiao","Huang","Die","Hao","Kong","Gui","Heng","Xi","Xiao","Shu","S","Kua","Qiu","Yang","Hui","Hui","Chi","Jia","Yi","Xiong","Guai","Lin","Hui","Zi","Xu","Chi","Xiang","Nu","Hen","En","Ke","Tong","Tian","Gong","Quan","Xi","Qia","Yue","Peng","Ken","De","Hui","E","Kyuu","Tong","Yan","Kai","Ce","Nao","Yun","Mang","Yong","Yong","Yuan","Pi","Kun","Qiao","Yue","Yu","Yu","Jie","Xi","Zhe","Lin","Ti","Han","Hao","Qie","Ti","Bu","Yi","Qian","Hui","Xi","Bei","Man","Yi","Heng","Song","Quan","Cheng","Hui","Wu","Wu","You","Li","Liang","Huan","Cong","Yi","Yue","Li","Nin","Nao","E","Que","Xuan","Qian","Wu","Min","Cong","Fei","Bei","Duo","Cui","Chang","Men","Li","Ji","Guan","Guan","Xing","Dao","Qi","Kong","Tian","Lun","Xi","Kan","Kun","Ni","Qing","Chou","Dun","Guo","Chan","Liang","Wan","Yuan","Jin","Ji","Lin","Yu","Huo","He","Quan","Tan","Ti","Ti","Nie","Wang","Chuo","Bu","Hun","Xi","Tang","Xin","Wei","Hui","E","Rui","Zong","Jian","Yong","Dian","Ju","Can","Cheng","De","Bei","Qie","Can","Dan","Guan","Duo","Nao","Yun","Xiang","Zhui","Die","Huang","Chun","Qiong","Re","Xing","Ce","Bian","Hun","Zong","Ti"],["Qiao","Chou","Bei","Xuan","Wei","Ge","Qian","Wei","Yu","Yu","Bi","Xuan","Huan","Min","Bi","Yi","Mian","Yong","Kai","Dang","Yin","E","Chen","Mou","Ke","Ke","Yu","Ai","Qie","Yan","Nuo","Gan","Yun","Zong","Sai","Leng","Fen",,"Kui","Kui","Que","Gong","Yun","Su","Su","Qi","Yao","Song","Huang","Ji","Gu","Ju","Chuang","Ni","Xie","Kai","Zheng","Yong","Cao","Sun","Shen","Bo","Kai","Yuan","Xie","Hun","Yong","Yang","Li","Sao","Tao","Yin","Ci","Xu","Qian","Tai","Huang","Yun","Shen","Ming",,"She","Cong","Piao","Mo","Mu","Guo","Chi","Can","Can","Can","Cui","Min","Te","Zhang","Tong","Ao","Shuang","Man","Guan","Que","Zao","Jiu","Hui","Kai","Lian","Ou","Song","Jin","Yin","Lu","Shang","Wei","Tuan","Man","Qian","She","Yong","Qing","Kang","Di","Zhi","Lou","Juan","Qi","Qi","Yu","Ping","Liao","Cong","You","Chong","Zhi","Tong","Cheng","Qi","Qu","Peng","Bei","Bie","Chun","Jiao","Zeng","Chi","Lian","Ping","Kui","Hui","Qiao","Cheng","Yin","Yin","Xi","Xi","Dan","Tan","Duo","Dui","Dui","Su","Jue","Ce","Xiao","Fan","Fen","Lao","Lao","Chong","Han","Qi","Xian","Min","Jing","Liao","Wu","Can","Jue","Cu","Xian","Tan","Sheng","Pi","Yi","Chu","Xian","Nao","Dan","Tan","Jing","Song","Han","Jiao","Wai","Huan","Dong","Qin","Qin","Qu","Cao","Ken","Xie","Ying","Ao","Mao","Yi","Lin","Se","Jun","Huai","Men","Lan","Ai","Lin","Yan","Gua","Xia","Chi","Yu","Yin","Dai","Meng","Ai","Meng","Dui","Qi","Mo","Lan","Men","Chou","Zhi","Nuo","Nuo","Yan","Yang","Bo","Zhi","Kuang","Kuang","You","Fu","Liu","Mie","Cheng",,"Chan","Meng","Lan","Huai","Xuan","Rang","Chan","Ji","Ju","Huan","She","Yi"],["Lian","Nan","Mi","Tang","Jue","Gang","Gang","Gang","Ge","Yue","Wu","Jian","Xu","Shu","Rong","Xi","Cheng","Wo","Jie","Ge","Jian","Qiang","Huo","Qiang","Zhan","Dong","Qi","Jia","Die","Zei","Jia","Ji","Shi","Kan","Ji","Kui","Gai","Deng","Zhan","Chuang","Ge","Jian","Jie","Yu","Jian","Yan","Lu","Xi","Zhan","Xi","Xi","Chuo","Dai","Qu","Hu","Hu","Hu","E","Shi","Li","Mao","Hu","Li","Fang","Suo","Bian","Dian","Jiong","Shang","Yi","Yi","Shan","Hu","Fei","Yan","Shou","T","Cai","Zha","Qiu","Le","Bu","Ba","Da","Reng","Fu","Hameru","Zai","Tuo","Zhang","Diao","Kang","Yu","Ku","Han","Shen","Cha","Yi","Gu","Kou","Wu","Tuo","Qian","Zhi","Ren","Kuo","Men","Sao","Yang","Niu","Ban","Che","Rao","Xi","Qian","Ban","Jia","Yu","Fu","Ao","Xi","Pi","Zhi","Zi","E","Dun","Zhao","Cheng","Ji","Yan","Kuang","Bian","Chao","Ju","Wen","Hu","Yue","Jue","Ba","Qin","Zhen","Zheng","Yun","Wan","Nu","Yi","Shu","Zhua","Pou","Tou","Dou","Kang","Zhe","Pou","Fu","Pao","Ba","Ao","Ze","Tuan","Kou","Lun","Qiang",,"Hu","Bao","Bing","Zhi","Peng","Tan","Pu","Pi","Tai","Yao","Zhen","Zha","Yang","Bao","He","Ni","Yi","Di","Chi","Pi","Za","Mo","Mo","Shen","Ya","Chou","Qu","Min","Chu","Jia","Fu","Zhan","Zhu","Dan","Chai","Mu","Nian","La","Fu","Pao","Ban","Pai","Ling","Na","Guai","Qian","Ju","Tuo","Ba","Tuo","Tuo","Ao","Ju","Zhuo","Pan","Zhao","Bai","Bai","Di","Ni","Ju","Kuo","Long","Jian",,"Yong","Lan","Ning","Bo","Ze","Qian","Hen","Gua","Shi","Jie","Zheng","Nin","Gong","Gong","Quan","Shuan","Cun","Zan","Kao","Chi","Xie","Ce","Hui","Pin","Zhuai","Shi","Na"],["Bo","Chi","Gua","Zhi","Kuo","Duo","Duo","Zhi","Qie","An","Nong","Zhen","Ge","Jiao","Ku","Dong","Ru","Tiao","Lie","Zha","Lu","Die","Wa","Jue","Mushiru","Ju","Zhi","Luan","Ya","Zhua","Ta","Xie","Nao","Dang","Jiao","Zheng","Ji","Hui","Xun","Ku","Ai","Tuo","Nuo","Cuo","Bo","Geng","Ti","Zhen","Cheng","Suo","Suo","Keng","Mei","Long","Ju","Peng","Jian","Yi","Ting","Shan","Nuo","Wan","Xie","Cha","Feng","Jiao","Wu","Jun","Jiu","Tong","Kun","Huo","Tu","Zhuo","Pou","Le","Ba","Han","Shao","Nie","Juan","Ze","Song","Ye","Jue","Bu","Huan","Bu","Zun","Yi","Zhai","Lu","Sou","Tuo","Lao","Sun","Bang","Jian","Huan","Dao",,"Wan","Qin","Peng","She","Lie","Min","Men","Fu","Bai","Ju","Dao","Wo","Ai","Juan","Yue","Zong","Chen","Chui","Jie","Tu","Ben","Na","Nian","Nuo","Zu","Wo","Xi","Xian","Cheng","Dian","Sao","Lun","Qing","Gang","Duo","Shou","Diao","Pou","Di","Zhang","Gun","Ji","Tao","Qia","Qi","Pai","Shu","Qian","Ling","Yi","Ya","Jue","Zheng","Liang","Gua","Yi","Huo","Shan","Zheng","Lue","Cai","Tan","Che","Bing","Jie","Ti","Kong","Tui","Yan","Cuo","Zou","Ju","Tian","Qian","Ken","Bai","Shou","Jie","Lu","Guo","Haba",,"Zhi","Dan","Mang","Xian","Sao","Guan","Peng","Yuan","Nuo","Jian","Zhen","Jiu","Jian","Yu","Yan","Kui","Nan","Hong","Rou","Pi","Wei","Sai","Zou","Xuan","Miao","Ti","Nie","Cha","Shi","Zong","Zhen","Yi","Shun","Heng","Bian","Yang","Huan","Yan","Zuan","An","Xu","Ya","Wo","Ke","Chuai","Ji","Ti","La","La","Cheng","Kai","Jiu","Jiu","Tu","Jie","Hui","Geng","Chong","Shuo","She","Xie","Yuan","Qian","Ye","Cha","Zha","Bei","Yao",,,"Lan","Wen","Qin"],["Chan","Ge","Lou","Zong","Geng","Jiao","Gou","Qin","Yong","Que","Chou","Chi","Zhan","Sun","Sun","Bo","Chu","Rong","Beng","Cuo","Sao","Ke","Yao","Dao","Zhi","Nu","Xie","Jian","Sou","Qiu","Gao","Xian","Shuo","Sang","Jin","Mie","E","Chui","Nuo","Shan","Ta","Jie","Tang","Pan","Ban","Da","Li","Tao","Hu","Zhi","Wa","Xia","Qian","Wen","Qiang","Tian","Zhen","E","Xi","Nuo","Quan","Cha","Zha","Ge","Wu","En","She","Kang","She","Shu","Bai","Yao","Bin","Sou","Tan","Sa","Chan","Suo","Liao","Chong","Chuang","Guo","Bing","Feng","Shuai","Di","Qi","Sou","Zhai","Lian","Tang","Chi","Guan","Lu","Luo","Lou","Zong","Gai","Hu","Zha","Chuang","Tang","Hua","Cui","Nai","Mo","Jiang","Gui","Ying","Zhi","Ao","Zhi","Nie","Man","Shan","Kou","Shu","Suo","Tuan","Jiao","Mo","Mo","Zhe","Xian","Keng","Piao","Jiang","Yin","Gou","Qian","Lue","Ji","Ying","Jue","Pie","Pie","Lao","Dun","Xian","Ruan","Kui","Zan","Yi","Xun","Cheng","Cheng","Sa","Nao","Heng","Si","Qian","Huang","Da","Zun","Nian","Lin","Zheng","Hui","Zhuang","Jiao","Ji","Cao","Dan","Dan","Che","Bo","Che","Jue","Xiao","Liao","Ben","Fu","Qiao","Bo","Cuo","Zhuo","Zhuan","Tuo","Pu","Qin","Dun","Nian",,"Xie","Lu","Jiao","Cuan","Ta","Han","Qiao","Zhua","Jian","Gan","Yong","Lei","Kuo","Lu","Shan","Zhuo","Ze","Pu","Chuo","Ji","Dang","Suo","Cao","Qing","Jing","Huan","Jie","Qin","Kuai","Dan","Xi","Ge","Pi","Bo","Ao","Ju","Ye",,"Mang","Sou","Mi","Ji","Tai","Zhuo","Dao","Xing","Lan","Ca","Ju","Ye","Ru","Ye","Ye","Ni","Hu","Ji","Bin","Ning","Ge","Zhi","Jie","Kuo","Mo","Jian","Xie","Lie","Tan","Bai","Sou","Lu","Lue","Rao","Zhi"],["Pan","Yang","Lei","Sa","Shu","Zan","Nian","Xian","Jun","Huo","Li","La","Han","Ying","Lu","Long","Qian","Qian","Zan","Qian","Lan","San","Ying","Mei","Rang","Chan",,"Cuan","Xi","She","Luo","Jun","Mi","Li","Zan","Luan","Tan","Zuan","Li","Dian","Wa","Dang","Jiao","Jue","Lan","Li","Nang","Zhi","Gui","Gui","Qi","Xin","Pu","Sui","Shou","Kao","You","Gai","Yi","Gong","Gan","Ban","Fang","Zheng","Bo","Dian","Kou","Min","Wu","Gu","He","Ce","Xiao","Mi","Chu","Ge","Di","Xu","Jiao","Min","Chen","Jiu","Zhen","Duo","Yu","Chi","Ao","Bai","Xu","Jiao","Duo","Lian","Nie","Bi","Chang","Dian","Duo","Yi","Gan","San","Ke","Yan","Dun","Qi","Dou","Xiao","Duo","Jiao","Jing","Yang","Xia","Min","Shu","Ai","Qiao","Ai","Zheng","Di","Zhen","Fu","Shu","Liao","Qu","Xiong","Xi","Jiao","Sen","Jiao","Zhuo","Yi","Lian","Bi","Li","Xiao","Xiao","Wen","Xue","Qi","Qi","Zhai","Bin","Jue","Zhai",,"Fei","Ban","Ban","Lan","Yu","Lan","Wei","Dou","Sheng","Liao","Jia","Hu","Xie","Jia","Yu","Zhen","Jiao","Wo","Tou","Chu","Jin","Chi","Yin","Fu","Qiang","Zhan","Qu","Zhuo","Zhan","Duan","Zhuo","Si","Xin","Zhuo","Zhuo","Qin","Lin","Zhuo","Chu","Duan","Zhu","Fang","Xie","Hang","Yu","Shi","Pei","You","Mye","Pang","Qi","Zhan","Mao","Lu","Pei","Pi","Liu","Fu","Fang","Xuan","Jing","Jing","Ni","Zu","Zhao","Yi","Liu","Shao","Jian","Es","Yi","Qi","Zhi","Fan","Piao","Fan","Zhan","Guai","Sui","Yu","Wu","Ji","Ji","Ji","Huo","Ri","Dan","Jiu","Zhi","Zao","Xie","Tiao","Xun","Xu","Xu","Xu","Gan","Han","Tai","Di","Xu","Chan","Shi","Kuang","Yang","Shi","Wang","Min","Min","Tun","Chun","Wu"],["Yun","Bei","Ang","Ze","Ban","Jie","Kun","Sheng","Hu","Fang","Hao","Gui","Chang","Xuan","Ming","Hun","Fen","Qin","Hu","Yi","Xi","Xin","Yan","Ze","Fang","Tan","Shen","Ju","Yang","Zan","Bing","Xing","Ying","Xuan","Pei","Zhen","Ling","Chun","Hao","Mei","Zuo","Mo","Bian","Xu","Hun","Zhao","Zong","Shi","Shi","Yu","Fei","Die","Mao","Ni","Chang","Wen","Dong","Ai","Bing","Ang","Zhou","Long","Xian","Kuang","Tiao","Chao","Shi","Huang","Huang","Xuan","Kui","Xu","Jiao","Jin","Zhi","Jin","Shang","Tong","Hong","Yan","Gai","Xiang","Shai","Xiao","Ye","Yun","Hui","Han","Han","Jun","Wan","Xian","Kun","Zhou","Xi","Cheng","Sheng","Bu","Zhe","Zhe","Wu","Han","Hui","Hao","Chen","Wan","Tian","Zhuo","Zui","Zhou","Pu","Jing","Xi","Shan","Yi","Xi","Qing","Qi","Jing","Gui","Zhen","Yi","Zhi","An","Wan","Lin","Liang","Chang","Wang","Xiao","Zan","Hi","Xuan","Xuan","Yi","Xia","Yun","Hui","Fu","Min","Kui","He","Ying","Du","Wei","Shu","Qing","Mao","Nan","Jian","Nuan","An","Yang","Chun","Yao","Suo","Jin","Ming","Jiao","Kai","Gao","Weng","Chang","Qi","Hao","Yan","Li","Ai","Ji","Gui","Men","Zan","Xie","Hao","Mu","Mo","Cong","Ni","Zhang","Hui","Bao","Han","Xuan","Chuan","Liao","Xian","Dan","Jing","Pie","Lin","Tun","Xi","Yi","Ji","Huang","Tai","Ye","Ye","Li","Tan","Tong","Xiao","Fei","Qin","Zhao","Hao","Yi","Xiang","Xing","Sen","Jiao","Bao","Jing","Yian","Ai","Ye","Ru","Shu","Meng","Xun","Yao","Pu","Li","Chen","Kuang","Die",,"Yan","Huo","Lu","Xi","Rong","Long","Nang","Luo","Luan","Shai","Tang","Yan","Chu","Yue","Yue","Qu","Yi","Geng","Ye","Hu","He","Shu","Cao","Cao","Noboru","Man","Ceng","Ceng","Ti"],["Zui","Can","Xu","Hui","Yin","Qie","Fen","Pi","Yue","You","Ruan","Peng","Ban","Fu","Ling","Fei","Qu",,"Nu","Tiao","Shuo","Zhen","Lang","Lang","Juan","Ming","Huang","Wang","Tun","Zhao","Ji","Qi","Ying","Zong","Wang","Tong","Lang",,"Meng","Long","Mu","Deng","Wei","Mo","Ben","Zha","Zhu","Shu",,"Zhu","Ren","Ba","Po","Duo","Duo","Dao","Li","Qiu","Ji","Jiu","Bi","Xiu","Ting","Ci","Sha","Eburi","Za","Quan","Qian","Yu","Gan","Wu","Cha","Shan","Xun","Fan","Wu","Zi","Li","Xing","Cai","Cun","Ren","Shao","Tuo","Di","Zhang","Mang","Chi","Yi","Gu","Gong","Du","Yi","Qi","Shu","Gang","Tiao","Moku","Soma","Tochi","Lai","Sugi","Mang","Yang","Ma","Miao","Si","Yuan","Hang","Fei","Bei","Jie","Dong","Gao","Yao","Xian","Chu","Qun","Pa","Shu","Hua","Xin","Chou","Zhu","Chou","Song","Ban","Song","Ji","Yue","Jin","Gou","Ji","Mao","Pi","Bi","Wang","Ang","Fang","Fen","Yi","Fu","Nan","Xi","Hu","Ya","Dou","Xun","Zhen","Yao","Lin","Rui","E","Mei","Zhao","Guo","Zhi","Cong","Yun","Waku","Dou","Shu","Zao",,"Li","Haze","Jian","Cheng","Matsu","Qiang","Feng","Nan","Xiao","Xian","Ku","Ping","Yi","Xi","Zhi","Guai","Xiao","Jia","Jia","Gou","Fu","Mo","Yi","Ye","Ye","Shi","Nie","Bi","Duo","Yi","Ling","Bing","Ni","La","He","Pan","Fan","Zhong","Dai","Ci","Yang","Fu","Bo","Mou","Gan","Qi","Ran","Rou","Mao","Zhao","Song","Zhe","Xia","You","Shen","Ju","Tuo","Zuo","Nan","Ning","Yong","Di","Zhi","Zha","Cha","Dan","Gu","Pu","Jiu","Ao","Fu","Jian","Bo","Duo","Ke","Nai","Zhu","Bi","Liu","Chai","Zha","Si","Zhu","Pei","Shi","Guai","Cha","Yao","Jue","Jiu","Shi"],["Zhi","Liu","Mei","Hoy","Rong","Zha",,"Biao","Zhan","Jie","Long","Dong","Lu","Sayng","Li","Lan","Yong","Shu","Xun","Shuan","Qi","Zhen","Qi","Li","Yi","Xiang","Zhen","Li","Su","Gua","Kan","Bing","Ren","Xiao","Bo","Ren","Bing","Zi","Chou","Yi","Jie","Xu","Zhu","Jian","Zui","Er","Er","You","Fa","Gong","Kao","Lao","Zhan","Li","Yin","Yang","He","Gen","Zhi","Chi","Ge","Zai","Luan","Fu","Jie","Hang","Gui","Tao","Guang","Wei","Kuang","Ru","An","An","Juan","Yi","Zhuo","Ku","Zhi","Qiong","Tong","Sang","Sang","Huan","Jie","Jiu","Xue","Duo","Zhui","Yu","Zan","Kasei","Ying","Masu",,"Zhan","Ya","Nao","Zhen","Dang","Qi","Qiao","Hua","Kuai","Jiang","Zhuang","Xun","Suo","Sha","Zhen","Bei","Ting","Gua","Jing","Bo","Ben","Fu","Rui","Tong","Jue","Xi","Lang","Liu","Feng","Qi","Wen","Jun","Gan","Cu","Liang","Qiu","Ting","You","Mei","Bang","Long","Peng","Zhuang","Di","Xuan","Tu","Zao","Ao","Gu","Bi","Di","Han","Zi","Zhi","Ren","Bei","Geng","Jian","Huan","Wan","Nuo","Jia","Tiao","Ji","Xiao","Lu","Huan","Shao","Cen","Fen","Song","Meng","Wu","Li","Li","Dou","Cen","Ying","Suo","Ju","Ti","Jie","Kun","Zhuo","Shu","Chan","Fan","Wei","Jing","Li","Bing","Fumoto","Shikimi","Tao","Zhi","Lai","Lian","Jian","Zhuo","Ling","Li","Qi","Bing","Zhun","Cong","Qian","Mian","Qi","Qi","Cai","Gun","Chan","Te","Fei","Pai","Bang","Pou","Hun","Zong","Cheng","Zao","Ji","Li","Peng","Yu","Yu","Gu","Hun","Dong","Tang","Gang","Wang","Di","Xi","Fan","Cheng","Zhan","Qi","Yuan","Yan","Yu","Quan","Yi","Sen","Ren","Chui","Leng","Qi","Zhuo","Fu","Ke","Lai","Zou","Zou","Zhuo","Guan","Fen","Fen","Chen","Qiong","Nie"],["Wan","Guo","Lu","Hao","Jie","Yi","Chou","Ju","Ju","Cheng","Zuo","Liang","Qiang","Zhi","Zhui","Ya","Ju","Bei","Jiao","Zhuo","Zi","Bin","Peng","Ding","Chu","Chang","Kunugi","Momiji","Jian","Gui","Xi","Du","Qian","Kunugi","Soko","Shide","Luo","Zhi","Ken","Myeng","Tafu",,"Peng","Zhan",,"Tuo","Sen","Duo","Ye","Fou","Wei","Wei","Duan","Jia","Zong","Jian","Yi","Shen","Xi","Yan","Yan","Chuan","Zhan","Chun","Yu","He","Zha","Wo","Pian","Bi","Yao","Huo","Xu","Ruo","Yang","La","Yan","Ben","Hun","Kui","Jie","Kui","Si","Feng","Xie","Tuo","Zhi","Jian","Mu","Mao","Chu","Hu","Hu","Lian","Leng","Ting","Nan","Yu","You","Mei","Song","Xuan","Xuan","Ying","Zhen","Pian","Ye","Ji","Jie","Ye","Chu","Shun","Yu","Cou","Wei","Mei","Di","Ji","Jie","Kai","Qiu","Ying","Rou","Heng","Lou","Le","Hazou","Katsura","Pin","Muro","Gai","Tan","Lan","Yun","Yu","Chen","Lu","Ju","Sakaki",,"Pi","Xie","Jia","Yi","Zhan","Fu","Nai","Mi","Lang","Rong","Gu","Jian","Ju","Ta","Yao","Zhen","Bang","Sha","Yuan","Zi","Ming","Su","Jia","Yao","Jie","Huang","Gan","Fei","Zha","Qian","Ma","Sun","Yuan","Xie","Rong","Shi","Zhi","Cui","Yun","Ting","Liu","Rong","Tang","Que","Zhai","Si","Sheng","Ta","Ke","Xi","Gu","Qi","Kao","Gao","Sun","Pan","Tao","Ge","Xun","Dian","Nou","Ji","Shuo","Gou","Chui","Qiang","Cha","Qian","Huai","Mei","Xu","Gang","Gao","Zhuo","Tuo","Hashi","Yang","Dian","Jia","Jian","Zui","Kashi","Ori","Bin","Zhu",,"Xi","Qi","Lian","Hui","Yong","Qian","Guo","Gai","Gai","Tuan","Hua","Cu","Sen","Cui","Beng","You","Hu","Jiang","Hu","Huan","Kui","Yi","Nie","Gao","Kang","Gui","Gui","Cao","Man","Jin"],["Di","Zhuang","Le","Lang","Chen","Cong","Li","Xiu","Qing","Shuang","Fan","Tong","Guan","Ji","Suo","Lei","Lu","Liang","Mi","Lou","Chao","Su","Ke","Shu","Tang","Biao","Lu","Jiu","Shu","Zha","Shu","Zhang","Men","Mo","Niao","Yang","Tiao","Peng","Zhu","Sha","Xi","Quan","Heng","Jian","Cong",,"Hokuso","Qiang","Tara","Ying","Er","Xin","Zhi","Qiao","Zui","Cong","Pu","Shu","Hua","Kui","Zhen","Zun","Yue","Zhan","Xi","Xun","Dian","Fa","Gan","Mo","Wu","Qiao","Nao","Lin","Liu","Qiao","Xian","Run","Fan","Zhan","Tuo","Lao","Yun","Shun","Tui","Cheng","Tang","Meng","Ju","Cheng","Su","Jue","Jue","Tan","Hui","Ji","Nuo","Xiang","Tuo","Ning","Rui","Zhu","Chuang","Zeng","Fen","Qiong","Ran","Heng","Cen","Gu","Liu","Lao","Gao","Chu","Zusa","Nude","Ca","San","Ji","Dou","Shou","Lu",,,"Yuan","Ta","Shu","Jiang","Tan","Lin","Nong","Yin","Xi","Sui","Shan","Zui","Xuan","Cheng","Gan","Ju","Zui","Yi","Qin","Pu","Yan","Lei","Feng","Hui","Dang","Ji","Sui","Bo","Bi","Ding","Chu","Zhua","Kuai","Ji","Jie","Jia","Qing","Zhe","Jian","Qiang","Dao","Yi","Biao","Song","She","Lin","Kunugi","Cha","Meng","Yin","Tao","Tai","Mian","Qi","Toan","Bin","Huo","Ji","Qian","Mi","Ning","Yi","Gao","Jian","Yin","Er","Qing","Yan","Qi","Mi","Zhao","Gui","Chun","Ji","Kui","Po","Deng","Chu",,"Mian","You","Zhi","Guang","Qian","Lei","Lei","Sa","Lu","Li","Cuan","Lu","Mie","Hui","Ou","Lu","Jie","Gao","Du","Yuan","Li","Fei","Zhuo","Sou","Lian","Tamo","Chu",,"Zhu","Lu","Yan","Li","Zhu","Chen","Jie","E","Su","Huai","Nie","Yu","Long","Lai",,"Xian","Kwi","Ju","Xiao","Ling","Ying","Jian","Yin","You","Ying"],["Xiang","Nong","Bo","Chan","Lan","Ju","Shuang","She","Wei","Cong","Quan","Qu","Cang",,"Yu","Luo","Li","Zan","Luan","Dang","Jue","Em","Lan","Lan","Zhu","Lei","Li","Ba","Nang","Yu","Ling","Tsuki","Qian","Ci","Huan","Xin","Yu","Yu","Qian","Ou","Xu","Chao","Chu","Chi","Kai","Yi","Jue","Xi","Xu","Xia","Yu","Kuai","Lang","Kuan","Shuo","Xi","Ai","Yi","Qi","Hu","Chi","Qin","Kuan","Kan","Kuan","Kan","Chuan","Sha","Gua","Yin","Xin","Xie","Yu","Qian","Xiao","Yi","Ge","Wu","Tan","Jin","Ou","Hu","Ti","Huan","Xu","Pen","Xi","Xiao","Xu","Xi","Sen","Lian","Chu","Yi","Kan","Yu","Chuo","Huan","Zhi","Zheng","Ci","Bu","Wu","Qi","Bu","Bu","Wai","Ju","Qian","Chi","Se","Chi","Se","Zhong","Sui","Sui","Li","Cuo","Yu","Li","Gui","Dai","Dai","Si","Jian","Zhe","Mo","Mo","Yao","Mo","Cu","Yang","Tian","Sheng","Dai","Shang","Xu","Xun","Shu","Can","Jue","Piao","Qia","Qiu","Su","Qing","Yun","Lian","Yi","Fou","Zhi","Ye","Can","Hun","Dan","Ji","Ye","Zhen","Yun","Wen","Chou","Bin","Ti","Jin","Shang","Yin","Diao","Cu","Hui","Cuan","Yi","Dan","Du","Jiang","Lian","Bin","Du","Tsukusu","Jian","Shu","Ou","Duan","Zhu","Yin","Qing","Yi","Sha","Que","Ke","Yao","Jun","Dian","Hui","Hui","Gu","Que","Ji","Yi","Ou","Hui","Duan","Yi","Xiao","Wu","Guan","Mu","Mei","Mei","Ai","Zuo","Du","Yu","Bi","Bi","Bi","Pi","Pi","Bi","Chan","Mao",,,"Pu","Mushiru","Jia","Zhan","Sai","Mu","Tuo","Xun","Er","Rong","Xian","Ju","Mu","Hao","Qiu","Dou","Mushiru","Tan","Pei","Ju","Duo","Cui","Bi","San",,"Mao","Sui","Yu","Yu","Tuo","He","Jian","Ta","San"],["Lu","Mu","Li","Tong","Rong","Chang","Pu","Luo","Zhan","Sao","Zhan","Meng","Luo","Qu","Die","Shi","Di","Min","Jue","Mang","Qi","Pie","Nai","Qi","Dao","Xian","Chuan","Fen","Ri","Nei",,"Fu","Shen","Dong","Qing","Qi","Yin","Xi","Hai","Yang","An","Ya","Ke","Qing","Ya","Dong","Dan","Lu","Qing","Yang","Yun","Yun","Shui","San","Zheng","Bing","Yong","Dang","Shitamizu","Le","Ni","Tun","Fan","Gui","Ting","Zhi","Qiu","Bin","Ze","Mian","Cuan","Hui","Diao","Han","Cha","Zhuo","Chuan","Wan","Fan","Dai","Xi","Tuo","Mang","Qiu","Qi","Shan","Pai","Han","Qian","Wu","Wu","Xun","Si","Ru","Gong","Jiang","Chi","Wu","Tsuchi",,"Tang","Zhi","Chi","Qian","Mi","Yu","Wang","Qing","Jing","Rui","Jun","Hong","Tai","Quan","Ji","Bian","Bian","Gan","Wen","Zhong","Fang","Xiong","Jue","Hang","Niou","Qi","Fen","Xu","Xu","Qin","Yi","Wo","Yun","Yuan","Hang","Yan","Shen","Chen","Dan","You","Dun","Hu","Huo","Qie","Mu","Rou","Mei","Ta","Mian","Wu","Chong","Tian","Bi","Sha","Zhi","Pei","Pan","Zhui","Za","Gou","Liu","Mei","Ze","Feng","Ou","Li","Lun","Cang","Feng","Wei","Hu","Mo","Mei","Shu","Ju","Zan","Tuo","Tuo","Tuo","He","Li","Mi","Yi","Fa","Fei","You","Tian","Zhi","Zhao","Gu","Zhan","Yan","Si","Kuang","Jiong","Ju","Xie","Qiu","Yi","Jia","Zhong","Quan","Bo","Hui","Mi","Ben","Zhuo","Chu","Le","You","Gu","Hong","Gan","Fa","Mao","Si","Hu","Ping","Ci","Fan","Chi","Su","Ning","Cheng","Ling","Pao","Bo","Qi","Si","Ni","Ju","Yue","Zhu","Sheng","Lei","Xuan","Xue","Fu","Pan","Min","Tai","Yang","Ji","Yong","Guan","Beng","Xue","Long","Lu",,"Bo","Xie","Po","Ze","Jing","Yin"],["Zhou","Ji","Yi","Hui","Hui","Zui","Cheng","Yin","Wei","Hou","Jian","Yang","Lie","Si","Ji","Er","Xing","Fu","Sa","Suo","Zhi","Yin","Wu","Xi","Kao","Zhu","Jiang","Luo",,"An","Dong","Yi","Mou","Lei","Yi","Mi","Quan","Jin","Mo","Wei","Xiao","Xie","Hong","Xu","Shuo","Kuang","Tao","Qie","Ju","Er","Zhou","Ru","Ping","Xun","Xiong","Zhi","Guang","Huan","Ming","Huo","Wa","Qia","Pai","Wu","Qu","Liu","Yi","Jia","Jing","Qian","Jiang","Jiao","Cheng","Shi","Zhuo","Ce","Pal","Kuai","Ji","Liu","Chan","Hun","Hu","Nong","Xun","Jin","Lie","Qiu","Wei","Zhe","Jun","Han","Bang","Mang","Zhuo","You","Xi","Bo","Dou","Wan","Hong","Yi","Pu","Ying","Lan","Hao","Lang","Han","Li","Geng","Fu","Wu","Lian","Chun","Feng","Yi","Yu","Tong","Lao","Hai","Jin","Jia","Chong","Weng","Mei","Sui","Cheng","Pei","Xian","Shen","Tu","Kun","Pin","Nie","Han","Jing","Xiao","She","Nian","Tu","Yong","Xiao","Xian","Ting","E","Su","Tun","Juan","Cen","Ti","Li","Shui","Si","Lei","Shui","Tao","Du","Lao","Lai","Lian","Wei","Wo","Yun","Huan","Di",,"Run","Jian","Zhang","Se","Fu","Guan","Xing","Shou","Shuan","Ya","Chuo","Zhang","Ye","Kong","Wo","Han","Tuo","Dong","He","Wo","Ju","Gan","Liang","Hun","Ta","Zhuo","Dian","Qie","De","Juan","Zi","Xi","Yao","Qi","Gu","Guo","Han","Lin","Tang","Zhou","Peng","Hao","Chang","Shu","Qi","Fang","Chi","Lu","Nao","Ju","Tao","Cong","Lei","Zhi","Peng","Fei","Song","Tian","Pi","Dan","Yu","Ni","Yu","Lu","Gan","Mi","Jing","Ling","Lun","Yin","Cui","Qu","Huai","Yu","Nian","Shen","Piao","Chun","Wa","Yuan","Lai","Hun","Qing","Yan","Qian","Tian","Miao","Zhi","Yin","Mi"],["Ben","Yuan","Wen","Re","Fei","Qing","Yuan","Ke","Ji","She","Yuan","Shibui","Lu","Zi","Du",,"Jian","Min","Pi","Tani","Yu","Yuan","Shen","Shen","Rou","Huan","Zhu","Jian","Nuan","Yu","Qiu","Ting","Qu","Du","Feng","Zha","Bo","Wo","Wo","Di","Wei","Wen","Ru","Xie","Ce","Wei","Ge","Gang","Yan","Hong","Xuan","Mi","Ke","Mao","Ying","Yan","You","Hong","Miao","Xing","Mei","Zai","Hun","Nai","Kui","Shi","E","Pai","Mei","Lian","Qi","Qi","Mei","Tian","Cou","Wei","Can","Tuan","Mian","Hui","Mo","Xu","Ji","Pen","Jian","Jian","Hu","Feng","Xiang","Yi","Yin","Zhan","Shi","Jie","Cheng","Huang","Tan","Yu","Bi","Min","Shi","Tu","Sheng","Yong","Qu","Zhong","Suei","Jiu","Jiao","Qiou","Yin","Tang","Long","Huo","Yuan","Nan","Ban","You","Quan","Chui","Liang","Chan","Yan","Chun","Nie","Zi","Wan","Shi","Man","Ying","Ratsu","Kui",,"Jian","Xu","Lu","Gui","Gai",,,"Po","Jin","Gui","Tang","Yuan","Suo","Yuan","Lian","Yao","Meng","Zhun","Sheng","Ke","Tai","Da","Wa","Liu","Gou","Sao","Ming","Zha","Shi","Yi","Lun","Ma","Pu","Wei","Li","Cai","Wu","Xi","Wen","Qiang","Ze","Shi","Su","Yi","Zhen","Sou","Yun","Xiu","Yin","Rong","Hun","Su","Su","Ni","Ta","Shi","Ru","Wei","Pan","Chu","Chu","Pang","Weng","Cang","Mie","He","Dian","Hao","Huang","Xi","Zi","Di","Zhi","Ying","Fu","Jie","Hua","Ge","Zi","Tao","Teng","Sui","Bi","Jiao","Hui","Gun","Yin","Gao","Long","Zhi","Yan","She","Man","Ying","Chun","Lu","Lan","Luan",,"Bin","Tan","Yu","Sou","Hu","Bi","Biao","Zhi","Jiang","Kou","Shen","Shang","Di","Mi","Ao","Lu","Hu","Hu","You","Chan","Fan","Yong","Gun","Man"],["Qing","Yu","Piao","Ji","Ya","Jiao","Qi","Xi","Ji","Lu","Lu","Long","Jin","Guo","Cong","Lou","Zhi","Gai","Qiang","Li","Yan","Cao","Jiao","Cong","Qun","Tuan","Ou","Teng","Ye","Xi","Mi","Tang","Mo","Shang","Han","Lian","Lan","Wa","Li","Qian","Feng","Xuan","Yi","Man","Zi","Mang","Kang","Lei","Peng","Shu","Zhang","Zhang","Chong","Xu","Huan","Kuo","Jian","Yan","Chuang","Liao","Cui","Ti","Yang","Jiang","Cong","Ying","Hong","Xun","Shu","Guan","Ying","Xiao",,,"Xu","Lian","Zhi","Wei","Pi","Jue","Jiao","Po","Dang","Hui","Jie","Wu","Pa","Ji","Pan","Gui","Xiao","Qian","Qian","Xi","Lu","Xi","Xuan","Dun","Huang","Min","Run","Su","Liao","Zhen","Zhong","Yi","Di","Wan","Dan","Tan","Chao","Xun","Kui","Yie","Shao","Tu","Zhu","San","Hei","Bi","Shan","Chan","Chan","Shu","Tong","Pu","Lin","Wei","Se","Se","Cheng","Jiong","Cheng","Hua","Jiao","Lao","Che","Gan","Cun","Heng","Si","Shu","Peng","Han","Yun","Liu","Hong","Fu","Hao","He","Xian","Jian","Shan","Xi","Oki",,"Lan",,"Yu","Lin","Min","Zao","Dang","Wan","Ze","Xie","Yu","Li","Shi","Xue","Ling","Man","Zi","Yong","Kuai","Can","Lian","Dian","Ye","Ao","Huan","Zhen","Chan","Man","Dan","Dan","Yi","Sui","Pi","Ju","Ta","Qin","Ji","Zhuo","Lian","Nong","Guo","Jin","Fen","Se","Ji","Sui","Hui","Chu","Ta","Song","Ding",,"Zhu","Lai","Bin","Lian","Mi","Shi","Shu","Mi","Ning","Ying","Ying","Meng","Jin","Qi","Pi","Ji","Hao","Ru","Zui","Wo","Tao","Yin","Yin","Dui","Ci","Huo","Jing","Lan","Jun","Ai","Pu","Zhuo","Wei","Bin","Gu","Qian","Xing","Hama","Kuo","Fei",,"Boku","Jian","Wei","Luo","Zan","Lu","Li"],["You","Yang","Lu","Si","Jie","Ying","Du","Wang","Hui","Xie","Pan","Shen","Biao","Chan","Mo","Liu","Jian","Pu","Se","Cheng","Gu","Bin","Huo","Xian","Lu","Qin","Han","Ying","Yong","Li","Jing","Xiao","Ying","Sui","Wei","Xie","Huai","Hao","Zhu","Long","Lai","Dui","Fan","Hu","Lai",,,"Ying","Mi","Ji","Lian","Jian","Ying","Fen","Lin","Yi","Jian","Yue","Chan","Dai","Rang","Jian","Lan","Fan","Shuang","Yuan","Zhuo","Feng","She","Lei","Lan","Cong","Qu","Yong","Qian","Fa","Guan","Que","Yan","Hao","Hyeng","Sa","Zan","Luan","Yan","Li","Mi","Shan","Tan","Dang","Jiao","Chan",,"Hao","Ba","Zhu","Lan","Lan","Nang","Wan","Luan","Xun","Xian","Yan","Gan","Yan","Yu","Huo","Si","Mie","Guang","Deng","Hui","Xiao","Xiao","Hu","Hong","Ling","Zao","Zhuan","Jiu","Zha","Xie","Chi","Zhuo","Zai","Zai","Can","Yang","Qi","Zhong","Fen","Niu","Jiong","Wen","Po","Yi","Lu","Chui","Pi","Kai","Pan","Yan","Kai","Pang","Mu","Chao","Liao","Gui","Kang","Tun","Guang","Xin","Zhi","Guang","Guang","Wei","Qiang",,"Da","Xia","Zheng","Zhu","Ke","Zhao","Fu","Ba","Duo","Duo","Ling","Zhuo","Xuan","Ju","Tan","Pao","Jiong","Pao","Tai","Tai","Bing","Yang","Tong","Han","Zhu","Zha","Dian","Wei","Shi","Lian","Chi","Huang",,"Hu","Shuo","Lan","Jing","Jiao","Xu","Xing","Quan","Lie","Huan","Yang","Xiao","Xiu","Xian","Yin","Wu","Zhou","Yao","Shi","Wei","Tong","Xue","Zai","Kai","Hong","Luo","Xia","Zhu","Xuan","Zheng","Po","Yan","Hui","Guang","Zhe","Hui","Kao",,"Fan","Shao","Ye","Hui",,"Tang","Jin","Re",,"Xi","Fu","Jiong","Che","Pu","Jing","Zhuo","Ting","Wan","Hai","Peng","Lang","Shan","Hu","Feng","Chi","Rong"],["Hu","Xi","Shu","He","Xun","Ku","Jue","Xiao","Xi","Yan","Han","Zhuang","Jun","Di","Xie","Ji","Wu",,,"Han","Yan","Huan","Men","Ju","Chou","Bei","Fen","Lin","Kun","Hun","Tun","Xi","Cui","Wu","Hong","Ju","Fu","Wo","Jiao","Cong","Feng","Ping","Qiong","Ruo","Xi","Qiong","Xin","Zhuo","Yan","Yan","Yi","Jue","Yu","Gang","Ran","Pi","Gu",,"Sheng","Chang","Shao",,,,,"Chen","He","Kui","Zhong","Duan","Xia","Hui","Feng","Lian","Xuan","Xing","Huang","Jiao","Jian","Bi","Ying","Zhu","Wei","Tuan","Tian","Xi","Nuan","Nuan","Chan","Yan","Jiong","Jiong","Yu","Mei","Sha","Wei","Ye","Xin","Qiong","Rou","Mei","Huan","Xu","Zhao","Wei","Fan","Qiu","Sui","Yang","Lie","Zhu","Jie","Gao","Gua","Bao","Hu","Yun","Xia",,,"Bian","Gou","Tui","Tang","Chao","Shan","N","Bo","Huang","Xie","Xi","Wu","Xi","Yun","He","He","Xi","Yun","Xiong","Nai","Shan","Qiong","Yao","Xun","Mi","Lian","Ying","Wen","Rong","Oozutsu",,"Qiang","Liu","Xi","Bi","Biao","Zong","Lu","Jian","Shou","Yi","Lou","Feng","Sui","Yi","Tong","Jue","Zong","Yun","Hu","Yi","Zhi","Ao","Wei","Liao","Han","Ou","Re","Jiong","Man",,"Shang","Cuan","Zeng","Jian","Xi","Xi","Xi","Yi","Xiao","Chi","Huang","Chan","Ye","Qian","Ran","Yan","Xian","Qiao","Zun","Deng","Dun","Shen","Jiao","Fen","Si","Liao","Yu","Lin","Tong","Shao","Fen","Fan","Yan","Xun","Lan","Mei","Tang","Yi","Jing","Men",,,"Ying","Yu","Yi","Xue","Lan","Tai","Zao","Can","Sui","Xi","Que","Cong","Lian","Hui","Zhu","Xie","Ling","Wei","Yi","Xie","Zhao","Hui","Tatsu","Nung","Lan","Ru","Xian","Kao","Xun","Jin","Chou","Chou","Yao"],["He","Lan","Biao","Rong","Li","Mo","Bao","Ruo","Lu","La","Ao","Xun","Kuang","Shuo",,"Li","Lu","Jue","Liao","Yan","Xi","Xie","Long","Ye",,"Rang","Yue","Lan","Cong","Jue","Tong","Guan",,"Che","Mi","Tang","Lan","Zhu",,"Ling","Cuan","Yu","Zhua","Tsumekanmuri","Pa","Zheng","Pao","Cheng","Yuan","Ai","Wei",,"Jue","Jue","Fu","Ye","Ba","Die","Ye","Yao","Zu","Shuang","Er","Qiang","Chuang","Ge","Zang","Die","Qiang","Yong","Qiang","Pian","Ban","Pan","Shao","Jian","Pai","Du","Chuang","Tou","Zha","Bian","Die","Bang","Bo","Chuang","You",,"Du","Ya","Cheng","Niu","Ushihen","Pin","Jiu","Mou","Tuo","Mu","Lao","Ren","Mang","Fang","Mao","Mu","Gang","Wu","Yan","Ge","Bei","Si","Jian","Gu","You","Ge","Sheng","Mu","Di","Qian","Quan","Quan","Zi","Te","Xi","Mang","Keng","Qian","Wu","Gu","Xi","Li","Li","Pou","Ji","Gang","Zhi","Ben","Quan","Run","Du","Ju","Jia","Jian","Feng","Pian","Ke","Ju","Kao","Chu","Xi","Bei","Luo","Jie","Ma","San","Wei","Li","Dun","Tong",,"Jiang","Ikenie","Li","Du","Lie","Pi","Piao","Bao","Xi","Chou","Wei","Kui","Chou","Quan","Fan","Ba","Fan","Qiu","Ji","Cai","Chuo","An","Jie","Zhuang","Guang","Ma","You","Kang","Bo","Hou","Ya","Yin","Huan","Zhuang","Yun","Kuang","Niu","Di","Qing","Zhong","Mu","Bei","Pi","Ju","Ni","Sheng","Pao","Xia","Tuo","Hu","Ling","Fei","Pi","Ni","Ao","You","Gou","Yue","Ju","Dan","Po","Gu","Xian","Ning","Huan","Hen","Jiao","He","Zhao","Ji","Xun","Shan","Ta","Rong","Shou","Tong","Lao","Du","Xia","Shi","Hua","Zheng","Yu","Sun","Yu","Bi","Mang","Xi","Juan","Li","Xia","Yin","Suan","Lang","Bei","Zhi","Yan"],["Sha","Li","Han","Xian","Jing","Pai","Fei","Yao","Ba","Qi","Ni","Biao","Yin","Lai","Xi","Jian","Qiang","Kun","Yan","Guo","Zong","Mi","Chang","Yi","Zhi","Zheng","Ya","Meng","Cai","Cu","She","Kari","Cen","Luo","Hu","Zong","Ji","Wei","Feng","Wo","Yuan","Xing","Zhu","Mao","Wei","Yuan","Xian","Tuan","Ya","Nao","Xie","Jia","Hou","Bian","You","You","Mei","Zha","Yao","Sun","Bo","Ming","Hua","Yuan","Sou","Ma","Yuan","Dai","Yu","Shi","Hao",,"Yi","Zhen","Chuang","Hao","Man","Jing","Jiang","Mu","Zhang","Chan","Ao","Ao","Hao","Cui","Fen","Jue","Bi","Bi","Huang","Pu","Lin","Yu","Tong","Yao","Liao","Shuo","Xiao","Swu","Ton","Xi","Ge","Juan","Du","Hui","Kuai","Xian","Xie","Ta","Xian","Xun","Ning","Pin","Huo","Nou","Meng","Lie","Nao","Guang","Shou","Lu","Ta","Xian","Mi","Rang","Huan","Nao","Luo","Xian","Qi","Jue","Xuan","Miao","Zi","Lu","Lu","Yu","Su","Wang","Qiu","Ga","Ding","Le","Ba","Ji","Hong","Di","Quan","Gan","Jiu","Yu","Ji","Yu","Yang","Ma","Gong","Wu","Fu","Wen","Jie","Ya","Fen","Bian","Beng","Yue","Jue","Yun","Jue","Wan","Jian","Mei","Dan","Pi","Wei","Huan","Xian","Qiang","Ling","Dai","Yi","An","Ping","Dian","Fu","Xuan","Xi","Bo","Ci","Gou","Jia","Shao","Po","Ci","Ke","Ran","Sheng","Shen","Yi","Zu","Jia","Min","Shan","Liu","Bi","Zhen","Zhen","Jue","Fa","Long","Jin","Jiao","Jian","Li","Guang","Xian","Zhou","Gong","Yan","Xiu","Yang","Xu","Luo","Su","Zhu","Qin","Ken","Xun","Bao","Er","Xiang","Yao","Xia","Heng","Gui","Chong","Xu","Ban","Pei",,"Dang","Ei","Hun","Wen","E","Cheng","Ti","Wu","Wu","Cheng","Jun","Mei","Bei","Ting","Xian","Chuo"],["Han","Xuan","Yan","Qiu","Quan","Lang","Li","Xiu","Fu","Liu","Ye","Xi","Ling","Li","Jin","Lian","Suo","Chiisai",,"Wan","Dian","Pin","Zhan","Cui","Min","Yu","Ju","Chen","Lai","Wen","Sheng","Wei","Dian","Chu","Zhuo","Pei","Cheng","Hu","Qi","E","Kun","Chang","Qi","Beng","Wan","Lu","Cong","Guan","Yan","Diao","Bei","Lin","Qin","Pi","Pa","Que","Zhuo","Qin","Fa",,"Qiong","Du","Jie","Hun","Yu","Mao","Mei","Chun","Xuan","Ti","Xing","Dai","Rou","Min","Zhen","Wei","Ruan","Huan","Jie","Chuan","Jian","Zhuan","Yang","Lian","Quan","Xia","Duan","Yuan","Ye","Nao","Hu","Ying","Yu","Huang","Rui","Se","Liu","Shi","Rong","Suo","Yao","Wen","Wu","Jin","Jin","Ying","Ma","Tao","Liu","Tang","Li","Lang","Gui","Zhen","Qiang","Cuo","Jue","Zhao","Yao","Ai","Bin","Tu","Chang","Kun","Zhuan","Cong","Jin","Yi","Cui","Cong","Qi","Li","Ying","Suo","Qiu","Xuan","Ao","Lian","Man","Zhang","Yin",,"Ying","Zhi","Lu","Wu","Deng","Xiou","Zeng","Xun","Qu","Dang","Lin","Liao","Qiong","Su","Huang","Gui","Pu","Jing","Fan","Jin","Liu","Ji",,"Jing","Ai","Bi","Can","Qu","Zao","Dang","Jiao","Gun","Tan","Hui","Huan","Se","Sui","Tian",,"Yu","Jin","Lu","Bin","Shou","Wen","Zui","Lan","Xi","Ji","Xuan","Ruan","Huo","Gai","Lei","Du","Li","Zhi","Rou","Li","Zan","Qiong","Zhe","Gui","Sui","La","Long","Lu","Li","Zan","Lan","Ying","Mi","Xiang","Xi","Guan","Dao","Zan","Huan","Gua","Bo","Die","Bao","Hu","Zhi","Piao","Ban","Rang","Li","Wa","Dekaguramu","Jiang","Qian","Fan","Pen","Fang","Dan","Weng","Ou","Deshiguramu","Miriguramu","Thon","Hu","Ling","Yi","Ping","Ci","Hekutogura","Juan","Chang","Chi","Sarake","Dang","Meng","Pou"],["Zhui","Ping","Bian","Zhou","Zhen","Senchigura","Ci","Ying","Qi","Xian","Lou","Di","Ou","Meng","Zhuan","Peng","Lin","Zeng","Wu","Pi","Dan","Weng","Ying","Yan","Gan","Dai","Shen","Tian","Tian","Han","Chang","Sheng","Qing","Sheng","Chan","Chan","Rui","Sheng","Su","Sen","Yong","Shuai","Lu","Fu","Yong","Beng","Feng","Ning","Tian","You","Jia","Shen","Zha","Dian","Fu","Nan","Dian","Ping","Ting","Hua","Ting","Quan","Zi","Meng","Bi","Qi","Liu","Xun","Liu","Chang","Mu","Yun","Fan","Fu","Geng","Tian","Jie","Jie","Quan","Wei","Fu","Tian","Mu","Tap","Pan","Jiang","Wa","Da","Nan","Liu","Ben","Zhen","Chu","Mu","Mu","Ce","Cen","Gai","Bi","Da","Zhi","Lue","Qi","Lue","Pan","Kesa","Fan","Hua","Yu","Yu","Mu","Jun","Yi","Liu","Yu","Die","Chou","Hua","Dang","Chuo","Ji","Wan","Jiang","Sheng","Chang","Tuan","Lei","Ji","Cha","Liu","Tatamu","Tuan","Lin","Jiang","Jiang","Chou","Bo","Die","Die","Pi","Nie","Dan","Shu","Shu","Zhi","Yi","Chuang","Nai","Ding","Bi","Jie","Liao","Gong","Ge","Jiu","Zhou","Xia","Shan","Xu","Nue","Li","Yang","Chen","You","Ba","Jie","Jue","Zhi","Xia","Cui","Bi","Yi","Li","Zong","Chuang","Feng","Zhu","Pao","Pi","Gan","Ke","Ci","Xie","Qi","Dan","Zhen","Fa","Zhi","Teng","Ju","Ji","Fei","Qu","Dian","Jia","Xian","Cha","Bing","Ni","Zheng","Yong","Jing","Quan","Chong","Tong","Yi","Kai","Wei","Hui","Duo","Yang","Chi","Zhi","Hen","Ya","Mei","Dou","Jing","Xiao","Tong","Tu","Mang","Pi","Xiao","Suan","Pu","Li","Zhi","Cuo","Duo","Wu","Sha","Lao","Shou","Huan","Xian","Yi","Peng","Zhang","Guan","Tan","Fei","Ma","Lin","Chi","Ji","Dian","An","Chi","Bi","Bei","Min","Gu","Dui","E","Wei"],["Yu","Cui","Ya","Zhu","Cu","Dan","Shen","Zhung","Ji","Yu","Hou","Feng","La","Yang","Shen","Tu","Yu","Gua","Wen","Huan","Ku","Jia","Yin","Yi","Lu","Sao","Jue","Chi","Xi","Guan","Yi","Wen","Ji","Chuang","Ban","Lei","Liu","Chai","Shou","Nue","Dian","Da","Pie","Tan","Zhang","Biao","Shen","Cu","Luo","Yi","Zong","Chou","Zhang","Zhai","Sou","Suo","Que","Diao","Lou","Lu","Mo","Jin","Yin","Ying","Huang","Fu","Liao","Long","Qiao","Liu","Lao","Xian","Fei","Dan","Yin","He","Ai","Ban","Xian","Guan","Guai","Nong","Yu","Wei","Yi","Yong","Pi","Lei","Li","Shu","Dan","Lin","Dian","Lin","Lai","Pie","Ji","Chi","Yang","Xian","Jie","Zheng",,"Li","Huo","Lai","Shaku","Dian","Xian","Ying","Yin","Qu","Yong","Tan","Dian","Luo","Luan","Luan","Bo",,"Gui","Po","Fa","Deng","Fa","Bai","Bai","Qie","Bi","Zao","Zao","Mao","De","Pa","Jie","Huang","Gui","Ci","Ling","Gao","Mo","Ji","Jiao","Peng","Gao","Ai","E","Hao","Han","Bi","Wan","Chou","Qian","Xi","Ai","Jiong","Hao","Huang","Hao","Ze","Cui","Hao","Xiao","Ye","Po","Hao","Jiao","Ai","Xing","Huang","Li","Piao","He","Jiao","Pi","Gan","Pao","Zhou","Jun","Qiu","Cun","Que","Zha","Gu","Jun","Jun","Zhou","Zha","Gu","Zhan","Du","Min","Qi","Ying","Yu","Bei","Zhao","Zhong","Pen","He","Ying","He","Yi","Bo","Wan","He","Ang","Zhan","Yan","Jian","He","Yu","Kui","Fan","Gai","Dao","Pan","Fu","Qiu","Sheng","Dao","Lu","Zhan","Meng","Li","Jin","Xu","Jian","Pan","Guan","An","Lu","Shu","Zhou","Dang","An","Gu","Li","Mu","Cheng","Gan","Xu","Mang","Mang","Zhi","Qi","Ruan","Tian","Xiang","Dun","Xin","Xi","Pan","Feng","Dun","Min"],["Ming","Sheng","Shi","Yun","Mian","Pan","Fang","Miao","Dan","Mei","Mao","Kan","Xian","Ou","Shi","Yang","Zheng","Yao","Shen","Huo","Da","Zhen","Kuang","Ju","Shen","Chi","Sheng","Mei","Mo","Zhu","Zhen","Zhen","Mian","Di","Yuan","Die","Yi","Zi","Zi","Chao","Zha","Xuan","Bing","Mi","Long","Sui","Dong","Mi","Die","Yi","Er","Ming","Xuan","Chi","Kuang","Juan","Mou","Zhen","Tiao","Yang","Yan","Mo","Zhong","Mai","Zhao","Zheng","Mei","Jun","Shao","Han","Huan","Di","Cheng","Cuo","Juan","E","Wan","Xian","Xi","Kun","Lai","Jian","Shan","Tian","Hun","Wan","Ling","Shi","Qiong","Lie","Yai","Jing","Zheng","Li","Lai","Sui","Juan","Shui","Sui","Du","Bi","Bi","Mu","Hun","Ni","Lu","Yi","Jie","Cai","Zhou","Yu","Hun","Ma","Xia","Xing","Xi","Gun","Cai","Chun","Jian","Mei","Du","Hou","Xuan","Ti","Kui","Gao","Rui","Mou","Xu","Fa","Wen","Miao","Chou","Kui","Mi","Weng","Kou","Dang","Chen","Ke","Sou","Xia","Qiong","Mao","Ming","Man","Shui","Ze","Zhang","Yi","Diao","Ou","Mo","Shun","Cong","Lou","Chi","Man","Piao","Cheng","Ji","Meng",,"Run","Pie","Xi","Qiao","Pu","Zhu","Deng","Shen","Shun","Liao","Che","Xian","Kan","Ye","Xu","Tong","Mou","Lin","Kui","Xian","Ye","Ai","Hui","Zhan","Jian","Gu","Zhao","Qu","Wei","Chou","Sao","Ning","Xun","Yao","Huo","Meng","Mian","Bin","Mian","Li","Kuang","Jue","Xuan","Mian","Huo","Lu","Meng","Long","Guan","Man","Xi","Chu","Tang","Kan","Zhu","Mao","Jin","Lin","Yu","Shuo","Ce","Jue","Shi","Yi","Shen","Zhi","Hou","Shen","Ying","Ju","Zhou","Jiao","Cuo","Duan","Ai","Jiao","Zeng","Huo","Bai","Shi","Ding","Qi","Ji","Zi","Gan","Wu","Tuo","Ku","Qiang","Xi","Fan","Kuang"],["Dang","Ma","Sha","Dan","Jue","Li","Fu","Min","Nuo","Huo","Kang","Zhi","Qi","Kan","Jie","Fen","E","Ya","Pi","Zhe","Yan","Sui","Zhuan","Che","Dun","Pan","Yan",,"Feng","Fa","Mo","Zha","Qu","Yu","Luo","Tuo","Tuo","Di","Zhai","Zhen","Ai","Fei","Mu","Zhu","Li","Bian","Nu","Ping","Peng","Ling","Pao","Le","Po","Bo","Po","Shen","Za","Nuo","Li","Long","Tong",,"Li","Aragane","Chu","Keng","Quan","Zhu","Kuang","Huo","E","Nao","Jia","Lu","Wei","Ai","Luo","Ken","Xing","Yan","Tong","Peng","Xi",,"Hong","Shuo","Xia","Qiao",,"Wei","Qiao",,"Keng","Xiao","Que","Chan","Lang","Hong","Yu","Xiao","Xia","Mang","Long","Iong","Che","Che","E","Liu","Ying","Mang","Que","Yan","Sha","Kun","Yu",,"Kaki","Lu","Chen","Jian","Nue","Song","Zhuo","Keng","Peng","Yan","Zhui","Kong","Ceng","Qi","Zong","Qing","Lin","Jun","Bo","Ding","Min","Diao","Jian","He","Lu","Ai","Sui","Que","Ling","Bei","Yin","Dui","Wu","Qi","Lun","Wan","Dian","Gang","Pei","Qi","Chen","Ruan","Yan","Die","Ding","Du","Tuo","Jie","Ying","Bian","Ke","Bi","Wei","Shuo","Zhen","Duan","Xia","Dang","Ti","Nao","Peng","Jian","Di","Tan","Cha","Seki","Qi",,"Feng","Xuan","Que","Que","Ma","Gong","Nian","Su","E","Ci","Liu","Si","Tang","Bang","Hua","Pi","Wei","Sang","Lei","Cuo","Zhen","Xia","Qi","Lian","Pan","Wei","Yun","Dui","Zhe","Ke","La",,"Qing","Gun","Zhuan","Chan","Qi","Ao","Peng","Lu","Lu","Kan","Qiang","Chen","Yin","Lei","Biao","Qi","Mo","Qi","Cui","Zong","Qing","Chuo",,"Ji","Shan","Lao","Qu","Zeng","Deng","Jian","Xi","Lin","Ding","Dian","Huang","Pan","Za","Qiao","Di","Li"],["Tani","Jiao",,"Zhang","Qiao","Dun","Xian","Yu","Zhui","He","Huo","Zhai","Lei","Ke","Chu","Ji","Que","Dang","Yi","Jiang","Pi","Pi","Yu","Pin","Qi","Ai","Kai","Jian","Yu","Ruan","Meng","Pao","Ci",,,"Mie","Ca","Xian","Kuang","Lei","Lei","Zhi","Li","Li","Fan","Que","Pao","Ying","Li","Long","Long","Mo","Bo","Shuang","Guan","Lan","Zan","Yan","Shi","Shi","Li","Reng","She","Yue","Si","Qi","Ta","Ma","Xie","Xian","Xian","Zhi","Qi","Zhi","Beng","Dui","Zhong",,"Yi","Shi","You","Zhi","Tiao","Fu","Fu","Mi","Zu","Zhi","Suan","Mei","Zuo","Qu","Hu","Zhu","Shen","Sui","Ci","Chai","Mi","Lu","Yu","Xiang","Wu","Tiao","Piao","Zhu","Gui","Xia","Zhi","Ji","Gao","Zhen","Gao","Shui","Jin","Chen","Gai","Kun","Di","Dao","Huo","Tao","Qi","Gu","Guan","Zui","Ling","Lu","Bing","Jin","Dao","Zhi","Lu","Shan","Bei","Zhe","Hui","You","Xi","Yin","Zi","Huo","Zhen","Fu","Yuan","Wu","Xian","Yang","Ti","Yi","Mei","Si","Di",,"Zhuo","Zhen","Yong","Ji","Gao","Tang","Si","Ma","Ta",,"Xuan","Qi","Yu","Xi","Ji","Si","Chan","Tan","Kuai","Sui","Li","Nong","Ni","Dao","Li","Rang","Yue","Ti","Zan","Lei","Rou","Yu","Yu","Chi","Xie","Qin","He","Tu","Xiu","Si","Ren","Tu","Zi","Cha","Gan","Yi","Xian","Bing","Nian","Qiu","Qiu","Zhong","Fen","Hao","Yun","Ke","Miao","Zhi","Geng","Bi","Zhi","Yu","Mi","Ku","Ban","Pi","Ni","Li","You","Zu","Pi","Ba","Ling","Mo","Cheng","Nian","Qin","Yang","Zuo","Zhi","Zhi","Shu","Ju","Zi","Huo","Ji","Cheng","Tong","Zhi","Huo","He","Yin","Zi","Zhi","Jie","Ren","Du","Yi","Zhu","Hui","Nong","Fu"],["Xi","Kao","Lang","Fu","Ze","Shui","Lu","Kun","Gan","Geng","Ti","Cheng","Tu","Shao","Shui","Ya","Lun","Lu","Gu","Zuo","Ren","Zhun","Bang","Bai","Ji","Zhi","Zhi","Kun","Leng","Peng","Ke","Bing","Chou","Zu","Yu","Su","Lue",,"Yi","Xi","Bian","Ji","Fu","Bi","Nuo","Jie","Zhong","Zong","Xu","Cheng","Dao","Wen","Lian","Zi","Yu","Ji","Xu","Zhen","Zhi","Dao","Jia","Ji","Gao","Gao","Gu","Rong","Sui","You","Ji","Kang","Mu","Shan","Men","Zhi","Ji","Lu","Su","Ji","Ying","Wen","Qiu","Se",,"Yi","Huang","Qie","Ji","Sui","Xiao","Pu","Jiao","Zhuo","Tong","Sai","Lu","Sui","Nong","Se","Hui","Rang","Nuo","Yu","Bin","Ji","Tui","Wen","Cheng","Huo","Gong","Lu","Biao",,"Rang","Zhuo","Li","Zan","Xue","Wa","Jiu","Qiong","Xi","Qiong","Kong","Yu","Sen","Jing","Yao","Chuan","Zhun","Tu","Lao","Qie","Zhai","Yao","Bian","Bao","Yao","Bing","Wa","Zhu","Jiao","Qiao","Diao","Wu","Gui","Yao","Zhi","Chuang","Yao","Tiao","Jiao","Chuang","Jiong","Xiao","Cheng","Kou","Cuan","Wo","Dan","Ku","Ke","Zhui","Xu","Su","Guan","Kui","Dou",,"Yin","Wo","Wa","Ya","Yu","Ju","Qiong","Yao","Yao","Tiao","Chao","Yu","Tian","Diao","Ju","Liao","Xi","Wu","Kui","Chuang","Zhao",,"Kuan","Long","Cheng","Cui","Piao","Zao","Cuan","Qiao","Qiong","Dou","Zao","Long","Qie","Li","Chu","Shi","Fou","Qian","Chu","Hong","Qi","Qian","Gong","Shi","Shu","Miao","Ju","Zhan","Zhu","Ling","Long","Bing","Jing","Jing","Zhang","Yi","Si","Jun","Hong","Tong","Song","Jing","Diao","Yi","Shu","Jing","Qu","Jie","Ping","Duan","Shao","Zhuan","Ceng","Deng","Cui","Huai","Jing","Kan","Jing","Zhu","Zhu","Le","Peng","Yu","Chi","Gan"],["Mang","Zhu","Utsubo","Du","Ji","Xiao","Ba","Suan","Ji","Zhen","Zhao","Sun","Ya","Zhui","Yuan","Hu","Gang","Xiao","Cen","Pi","Bi","Jian","Yi","Dong","Shan","Sheng","Xia","Di","Zhu","Na","Chi","Gu","Li","Qie","Min","Bao","Tiao","Si","Fu","Ce","Ben","Pei","Da","Zi","Di","Ling","Ze","Nu","Fu","Gou","Fan","Jia","Ge","Fan","Shi","Mao","Po","Sey","Jian","Qiong","Long","Souke","Bian","Luo","Gui","Qu","Chi","Yin","Yao","Xian","Bi","Qiong","Gua","Deng","Jiao","Jin","Quan","Sun","Ru","Fa","Kuang","Zhu","Tong","Ji","Da","Xing","Ce","Zhong","Kou","Lai","Bi","Shai","Dang","Zheng","Ce","Fu","Yun","Tu","Pa","Li","Lang","Ju","Guan","Jian","Han","Tong","Xia","Zhi","Cheng","Suan","Shi","Zhu","Zuo","Xiao","Shao","Ting","Ce","Yan","Gao","Kuai","Gan","Chou","Kago","Gang","Yun","O","Qian","Xiao","Jian","Pu","Lai","Zou","Bi","Bi","Bi","Ge","Chi","Guai","Yu","Jian","Zhao","Gu","Chi","Zheng","Jing","Sha","Zhou","Lu","Bo","Ji","Lin","Suan","Jun","Fu","Zha","Gu","Kong","Qian","Quan","Jun","Chui","Guan","Yuan","Ce","Ju","Bo","Ze","Qie","Tuo","Luo","Dan","Xiao","Ruo","Jian","Xuan","Bian","Sun","Xiang","Xian","Ping","Zhen","Sheng","Hu","Shi","Zhu","Yue","Chun","Lu","Wu","Dong","Xiao","Ji","Jie","Huang","Xing","Mei","Fan","Chui","Zhuan","Pian","Feng","Zhu","Hong","Qie","Hou","Qiu","Miao","Qian",,"Kui","Sik","Lou","Yun","He","Tang","Yue","Chou","Gao","Fei","Ruo","Zheng","Gou","Nie","Qian","Xiao","Cuan","Gong","Pang","Du","Li","Bi","Zhuo","Chu","Shai","Chi","Zhu","Qiang","Long","Lan","Jian","Bu","Li","Hui","Bi","Di","Cong","Yan","Peng","Sen","Zhuan","Pai","Piao","Dou","Yu","Mie","Zhuan"],["Ze","Xi","Guo","Yi","Hu","Chan","Kou","Cu","Ping","Chou","Ji","Gui","Su","Lou","Zha","Lu","Nian","Suo","Cuan","Sasara","Suo","Le","Duan","Yana","Xiao","Bo","Mi","Si","Dang","Liao","Dan","Dian","Fu","Jian","Min","Kui","Dai","Qiao","Deng","Huang","Sun","Lao","Zan","Xiao","Du","Shi","Zan",,"Pai","Hata","Pai","Gan","Ju","Du","Lu","Yan","Bo","Dang","Sai","Ke","Long","Qian","Lian","Bo","Zhou","Lai",,"Lan","Kui","Yu","Yue","Hao","Zhen","Tai","Ti","Mi","Chou","Ji",,"Hata","Teng","Zhuan","Zhou","Fan","Sou","Zhou","Kuji","Zhuo","Teng","Lu","Lu","Jian","Tuo","Ying","Yu","Lai","Long","Shinshi","Lian","Lan","Qian","Yue","Zhong","Qu","Lian","Bian","Duan","Zuan","Li","Si","Luo","Ying","Yue","Zhuo","Xu","Mi","Di","Fan","Shen","Zhe","Shen","Nu","Xie","Lei","Xian","Zi","Ni","Cun",,"Qian","Kume","Bi","Ban","Wu","Sha","Kang","Rou","Fen","Bi","Cui",,"Li","Chi","Nukamiso","Ro","Ba","Li","Gan","Ju","Po","Mo","Cu","Nian","Zhou","Li","Su","Tiao","Li","Qi","Su","Hong","Tong","Zi","Ce","Yue","Zhou","Lin","Zhuang","Bai",,"Fen","Ji",,"Sukumo","Liang","Xian","Fu","Liang","Can","Geng","Li","Yue","Lu","Ju","Qi","Cui","Bai","Zhang","Lin","Zong","Jing","Guo","Kouji","San","San","Tang","Bian","Rou","Mian","Hou","Xu","Zong","Hu","Jian","Zan","Ci","Li","Xie","Fu","Ni","Bei","Gu","Xiu","Gao","Tang","Qiu","Sukumo","Cao","Zhuang","Tang","Mi","San","Fen","Zao","Kang","Jiang","Mo","San","San","Nuo","Xi","Liang","Jiang","Kuai","Bo","Huan",,"Zong","Xian","Nuo","Tuan","Nie","Li","Zuo","Di","Nie","Tiao","Lan","Mi","Jiao","Jiu","Xi","Gong","Zheng","Jiu","You"],["Ji","Cha","Zhou","Xun","Yue","Hong","Yu","He","Wan","Ren","Wen","Wen","Qiu","Na","Zi","Tou","Niu","Fou","Jie","Shu","Chun","Pi","Yin","Sha","Hong","Zhi","Ji","Fen","Yun","Ren","Dan","Jin","Su","Fang","Suo","Cui","Jiu","Zha","Kinu","Jin","Fu","Zhi","Ci","Zi","Chou","Hong","Zha","Lei","Xi","Fu","Xie","Shen","Bei","Zhu","Qu","Ling","Zhu","Shao","Gan","Yang","Fu","Tuo","Zhen","Dai","Zhuo","Shi","Zhong","Xian","Zu","Jiong","Ban","Ju","Mo","Shu","Zui","Wata","Jing","Ren","Heng","Xie","Jie","Zhu","Chou","Gua","Bai","Jue","Kuang","Hu","Ci","Geng","Geng","Tao","Xie","Ku","Jiao","Quan","Gai","Luo","Xuan","Bing","Xian","Fu","Gei","Tong","Rong","Tiao","Yin","Lei","Xie","Quan","Xu","Lun","Die","Tong","Si","Jiang","Xiang","Hui","Jue","Zhi","Jian","Juan","Chi","Mian","Zhen","Lu","Cheng","Qiu","Shu","Bang","Tong","Xiao","Wan","Qin","Geng","Xiu","Ti","Xiu","Xie","Hong","Xi","Fu","Ting","Sui","Dui","Kun","Fu","Jing","Hu","Zhi","Yan","Jiong","Feng","Ji","Sok","Kase","Zong","Lin","Duo","Li","Lu","Liang","Chou","Quan","Shao","Qi","Qi","Zhun","Qi","Wan","Qian","Xian","Shou","Wei","Qi","Tao","Wan","Gang","Wang","Beng","Zhui","Cai","Guo","Cui","Lun","Liu","Qi","Zhan","Bei","Chuo","Ling","Mian","Qi","Qie","Tan","Zong","Gun","Zou","Yi","Zi","Xing","Liang","Jin","Fei","Rui","Min","Yu","Zong","Fan","Lu","Xu","Yingl","Zhang","Kasuri","Xu","Xiang","Jian","Ke","Xian","Ruan","Mian","Qi","Duan","Zhong","Di","Min","Miao","Yuan","Xie","Bao","Si","Qiu","Bian","Huan","Geng","Cong","Mian","Wei","Fu","Wei","Yu","Gou","Miao","Xie","Lian","Zong","Bian","Yun","Yin","Ti","Gua","Zhi","Yun","Cheng","Chan","Dai"],["Xia","Yuan","Zong","Xu","Nawa","Odoshi","Geng","Sen","Ying","Jin","Yi","Zhui","Ni","Bang","Gu","Pan","Zhou","Jian","Cuo","Quan","Shuang","Yun","Xia","Shuai","Xi","Rong","Tao","Fu","Yun","Zhen","Gao","Ru","Hu","Zai","Teng","Xian","Su","Zhen","Zong","Tao","Horo","Cai","Bi","Feng","Cu","Li","Suo","Yin","Xi","Zong","Lei","Zhuan","Qian","Man","Zhi","Lu","Mo","Piao","Lian","Mi","Xuan","Zong","Ji","Shan","Sui","Fan","Shuai","Beng","Yi","Sao","Mou","Zhou","Qiang","Hun","Sem","Xi","Jung","Xiu","Ran","Xuan","Hui","Qiao","Zeng","Zuo","Zhi","Shan","San","Lin","Yu","Fan","Liao","Chuo","Zun","Jian","Rao","Chan","Rui","Xiu","Hui","Hua","Zuan","Xi","Qiang","Un","Da","Sheng","Hui","Xi","Se","Jian","Jiang","Huan","Zao","Cong","Jie","Jiao","Bo","Chan","Yi","Nao","Sui","Yi","Shai","Xu","Ji","Bin","Qian","Lan","Pu","Xun","Zuan","Qi","Peng","Li","Mo","Lei","Xie","Zuan","Kuang","You","Xu","Lei","Xian","Chan","Kou","Lu","Chan","Ying","Cai","Xiang","Xian","Zui","Zuan","Luo","Xi","Dao","Lan","Lei","Lian","Si","Jiu","Yu","Hong","Zhou","Xian","He","Yue","Ji","Wan","Kuang","Ji","Ren","Wei","Yun","Hong","Chun","Pi","Sha","Gang","Na","Ren","Zong","Lun","Fen","Zhi","Wen","Fang","Zhu","Yin","Niu","Shu","Xian","Gan","Xie","Fu","Lian","Zu","Shen","Xi","Zhi","Zhong","Zhou","Ban","Fu","Zhuo","Shao","Yi","Jing","Dai","Bang","Rong","Jie","Ku","Rao","Die","Heng","Hui","Gei","Xuan","Jiang","Luo","Jue","Jiao","Tong","Geng","Xiao","Juan","Xiu","Xi","Sui","Tao","Ji","Ti","Ji","Xu","Ling",,"Xu","Qi","Fei","Chuo","Zhang","Gun","Sheng","Wei","Mian","Shou","Beng","Chou","Tao","Liu","Quan","Zong","Zhan","Wan","Lu"],["Zhui","Zi","Ke","Xiang","Jian","Mian","Lan","Ti","Miao","Qi","Yun","Hui","Si","Duo","Duan","Bian","Xian","Gou","Zhui","Huan","Di","Lu","Bian","Min","Yuan","Jin","Fu","Ru","Zhen","Feng","Shuai","Gao","Chan","Li","Yi","Jian","Bin","Piao","Man","Lei","Ying","Suo","Mou","Sao","Xie","Liao","Shan","Zeng","Jiang","Qian","Zao","Huan","Jiao","Zuan","Fou","Xie","Gang","Fou","Que","Fou","Kaakeru","Bo","Ping","Hou",,"Gang","Ying","Ying","Qing","Xia","Guan","Zun","Tan","Chang","Qi","Weng","Ying","Lei","Tan","Lu","Guan","Wang","Wang","Gang","Wang","Han",,"Luo","Fu","Mi","Fa","Gu","Zhu","Ju","Mao","Gu","Min","Gang","Ba","Gua","Ti","Juan","Fu","Lin","Yan","Zhao","Zui","Gua","Zhuo","Yu","Zhi","An","Fa","Nan","Shu","Si","Pi","Ma","Liu","Ba","Fa","Li","Chao","Wei","Bi","Ji","Zeng","Tong","Liu","Ji","Juan","Mi","Zhao","Luo","Pi","Ji","Ji","Luan","Yang","Mie","Qiang","Ta","Mei","Yang","You","You","Fen","Ba","Gao","Yang","Gu","Qiang","Zang","Gao","Ling","Yi","Zhu","Di","Xiu","Qian","Yi","Xian","Rong","Qun","Qun","Qian","Huan","Zui","Xian","Yi","Yashinau","Qiang","Xian","Yu","Geng","Jie","Tang","Yuan","Xi","Fan","Shan","Fen","Shan","Lian","Lei","Geng","Nou","Qiang","Chan","Yu","Gong","Yi","Chong","Weng","Fen","Hong","Chi","Chi","Cui","Fu","Xia","Pen","Yi","La","Yi","Pi","Ling","Liu","Zhi","Qu","Xi","Xie","Xiang","Xi","Xi","Qi","Qiao","Hui","Hui","Xiao","Se","Hong","Jiang","Di","Cui","Fei","Tao","Sha","Chi","Zhu","Jian","Xuan","Shi","Pian","Zong","Wan","Hui","Hou","He","He","Han","Ao","Piao","Yi","Lian","Qu",,"Lin","Pen","Qiao","Ao","Fan","Yi","Hui","Xuan","Dao"],["Yao","Lao",,"Kao","Mao","Zhe","Qi","Gou","Gou","Gou","Die","Die","Er","Shua","Ruan","Er","Nai","Zhuan","Lei","Ting","Zi","Geng","Chao","Hao","Yun","Pa","Pi","Chi","Si","Chu","Jia","Ju","He","Chu","Lao","Lun","Ji","Tang","Ou","Lou","Nou","Gou","Pang","Ze","Lou","Ji","Lao","Huo","You","Mo","Huai","Er","Zhe","Ting","Ye","Da","Song","Qin","Yun","Chi","Dan","Dan","Hong","Geng","Zhi",,"Nie","Dan","Zhen","Che","Ling","Zheng","You","Wa","Liao","Long","Zhi","Ning","Tiao","Er","Ya","Die","Gua",,"Lian","Hao","Sheng","Lie","Pin","Jing","Ju","Bi","Di","Guo","Wen","Xu","Ping","Cong","Shikato",,"Ting","Yu","Cong","Kui","Tsuraneru","Kui","Cong","Lian","Weng","Kui","Lian","Lian","Cong","Ao","Sheng","Song","Ting","Kui","Nie","Zhi","Dan","Ning","Qie","Ji","Ting","Ting","Long","Yu","Yu","Zhao","Si","Su","Yi","Su","Si","Zhao","Zhao","Rou","Yi","Le","Ji","Qiu","Ken","Cao","Ge","Di","Huan","Huang","Yi","Ren","Xiao","Ru","Zhou","Yuan","Du","Gang","Rong","Gan","Cha","Wo","Chang","Gu","Zhi","Han","Fu","Fei","Fen","Pei","Pang","Jian","Fang","Zhun","You","Na","Hang","Ken","Ran","Gong","Yu","Wen","Yao","Jin","Pi","Qian","Xi","Xi","Fei","Ken","Jing","Tai","Shen","Zhong","Zhang","Xie","Shen","Wei","Zhou","Die","Dan","Fei","Ba","Bo","Qu","Tian","Bei","Gua","Tai","Zi","Ku","Zhi","Ni","Ping","Zi","Fu","Pang","Zhen","Xian","Zuo","Pei","Jia","Sheng","Zhi","Bao","Mu","Qu","Hu","Ke","Yi","Yin","Xu","Yang","Long","Dong","Ka","Lu","Jing","Nu","Yan","Pang","Kua","Yi","Guang","Gai","Ge","Dong","Zhi","Xiao","Xiong","Xiong","Er","E","Xing","Pian","Neng","Zi","Gui"],["Cheng","Tiao","Zhi","Cui","Mei","Xie","Cui","Xie","Mo","Mai","Ji","Obiyaakasu",,"Kuai","Sa","Zang","Qi","Nao","Mi","Nong","Luan","Wan","Bo","Wen","Guan","Qiu","Jiao","Jing","Rou","Heng","Cuo","Lie","Shan","Ting","Mei","Chun","Shen","Xie","De","Zui","Cu","Xiu","Xin","Tuo","Pao","Cheng","Nei","Fu","Dou","Tuo","Niao","Noy","Pi","Gu","Gua","Li","Lian","Zhang","Cui","Jie","Liang","Zhou","Pi","Biao","Lun","Pian","Guo","Kui","Chui","Dan","Tian","Nei","Jing","Jie","La","Yi","An","Ren","Shen","Chuo","Fu","Fu","Ju","Fei","Qiang","Wan","Dong","Pi","Guo","Zong","Ding","Wu","Mei","Ruan","Zhuan","Zhi","Cou","Gua","Ou","Di","An","Xing","Nao","Yu","Chuan","Nan","Yun","Zhong","Rou","E","Sai","Tu","Yao","Jian","Wei","Jiao","Yu","Jia","Duan","Bi","Chang","Fu","Xian","Ni","Mian","Wa","Teng","Tui","Bang","Qian","Lu","Wa","Sou","Tang","Su","Zhui","Ge","Yi","Bo","Liao","Ji","Pi","Xie","Gao","Lu","Bin","Ou","Chang","Lu","Guo","Pang","Chuai","Piao","Jiang","Fu","Tang","Mo","Xi","Zhuan","Lu","Jiao","Ying","Lu","Zhi","Tara","Chun","Lian","Tong","Peng","Ni","Zha","Liao","Cui","Gui","Xiao","Teng","Fan","Zhi","Jiao","Shan","Wu","Cui","Run","Xiang","Sui","Fen","Ying","Tan","Zhua","Dan","Kuai","Nong","Tun","Lian","Bi","Yong","Jue","Chu","Yi","Juan","La","Lian","Sao","Tun","Gu","Qi","Cui","Bin","Xun","Ru","Huo","Zang","Xian","Biao","Xing","Kuan","La","Yan","Lu","Huo","Zang","Luo","Qu","Zang","Luan","Ni","Zang","Chen","Qian","Wo","Guang","Zang","Lin","Guang","Zi","Jiao","Nie","Chou","Ji","Gao","Chou","Mian","Nie","Zhi","Zhi","Ge","Jian","Die","Zhi","Xiu","Tai","Zhen","Jiu","Xian","Yu","Cha"],["Yao","Yu","Chong","Xi","Xi","Jiu","Yu","Yu","Xing","Ju","Jiu","Xin","She","She","Yadoru","Jiu","Shi","Tan","Shu","Shi","Tian","Dan","Pu","Pu","Guan","Hua","Tan","Chuan","Shun","Xia","Wu","Zhou","Dao","Gang","Shan","Yi",,"Pa","Tai","Fan","Ban","Chuan","Hang","Fang","Ban","Que","Hesaki","Zhong","Jian","Cang","Ling","Zhu","Ze","Duo","Bo","Xian","Ge","Chuan","Jia","Lu","Hong","Pang","Xi",,"Fu","Zao","Feng","Li","Shao","Yu","Lang","Ting",,"Wei","Bo","Meng","Nian","Ju","Huang","Shou","Zong","Bian","Mao","Die",,"Bang","Cha","Yi","Sao","Cang","Cao","Lou","Dai","Sori","Yao","Tong","Yofune","Dang","Tan","Lu","Yi","Jie","Jian","Huo","Meng","Qi","Lu","Lu","Chan","Shuang","Gen","Liang","Jian","Jian","Se","Yan","Fu","Ping","Yan","Yan","Cao","Cao","Yi","Le","Ting","Qiu","Ai","Nai","Tiao","Jiao","Jie","Peng","Wan","Yi","Chai","Mian","Mie","Gan","Qian","Yu","Yu","Shuo","Qiong","Tu","Xia","Qi","Mang","Zi","Hui","Sui","Zhi","Xiang","Bi","Fu","Tun","Wei","Wu","Zhi","Qi","Shan","Wen","Qian","Ren","Fou","Kou","Jie","Lu","Xu","Ji","Qin","Qi","Yuan","Fen","Ba","Rui","Xin","Ji","Hua","Hua","Fang","Wu","Jue","Gou","Zhi","Yun","Qin","Ao","Chu","Mao","Ya","Fei","Reng","Hang","Cong","Yin","You","Bian","Yi","Susa","Wei","Li","Pi","E","Xian","Chang","Cang","Meng","Su","Yi","Yuan","Ran","Ling","Tai","Tiao","Di","Miao","Qiong","Li","Yong","Ke","Mu","Pei","Bao","Gou","Min","Yi","Yi","Ju","Pi","Ruo","Ku","Zhu","Ni","Bo","Bing","Shan","Qiu","Yao","Xian","Ben","Hong","Ying","Zha","Dong","Ju","Die","Nie","Gan","Hu","Ping","Mei","Fu","Sheng","Gu","Bi","Wei"],["Fu","Zhuo","Mao","Fan","Qie","Mao","Mao","Ba","Zi","Mo","Zi","Di","Chi","Ji","Jing","Long",,"Niao",,"Xue","Ying","Qiong","Ge","Ming","Li","Rong","Yin","Gen","Qian","Chai","Chen","Yu","Xiu","Zi","Lie","Wu","Ji","Kui","Ce","Chong","Ci","Gou","Guang","Mang","Chi","Jiao","Jiao","Fu","Yu","Zhu","Zi","Jiang","Hui","Yin","Cha","Fa","Rong","Ru","Chong","Mang","Tong","Zhong",,"Zhu","Xun","Huan","Kua","Quan","Gai","Da","Jing","Xing","Quan","Cao","Jing","Er","An","Shou","Chi","Ren","Jian","Ti","Huang","Ping","Li","Jin","Lao","Shu","Zhuang","Da","Jia","Rao","Bi","Ze","Qiao","Hui","Qi","Dang",,"Rong","Hun","Ying","Luo","Ying","Xun","Jin","Sun","Yin","Mai","Hong","Zhou","Yao","Du","Wei","Chu","Dou","Fu","Ren","Yin","He","Bi","Bu","Yun","Di","Tu","Sui","Sui","Cheng","Chen","Wu","Bie","Xi","Geng","Li","Fu","Zhu","Mo","Li","Zhuang","Ji","Duo","Qiu","Sha","Suo","Chen","Feng","Ju","Mei","Meng","Xing","Jing","Che","Xin","Jun","Yan","Ting","Diao","Cuo","Wan","Han","You","Cuo","Jia","Wang","You","Niu","Shao","Xian","Lang","Fu","E","Mo","Wen","Jie","Nan","Mu","Kan","Lai","Lian","Shi","Wo","Usagi","Lian","Huo","You","Ying","Ying","Nuc","Chun","Mang","Mang","Ci","Wan","Jing","Di","Qu","Dong","Jian","Zou","Gu","La","Lu","Ju","Wei","Jun","Nie","Kun","He","Pu","Zi","Gao","Guo","Fu","Lun","Chang","Chou","Song","Chui","Zhan","Men","Cai","Ba","Li","Tu","Bo","Han","Bao","Qin","Juan","Xi","Qin","Di","Jie","Pu","Dang","Jin","Zhao","Tai","Geng","Hua","Gu","Ling","Fei","Jin","An","Wang","Beng","Zhou","Yan","Ju","Jian","Lin","Tan","Shu","Tian","Dao"],["Hu","Qi","He","Cui","Tao","Chun","Bei","Chang","Huan","Fei","Lai","Qi","Meng","Ping","Wei","Dan","Sha","Huan","Yan","Yi","Tiao","Qi","Wan","Ce","Nai","Kutabireru","Tuo","Jiu","Tie","Luo",,,"Meng",,"Yaji",,"Ying","Ying","Ying","Xiao","Sa","Qiu","Ke","Xiang","Wan","Yu","Yu","Fu","Lian","Xuan","Yuan","Nan","Ze","Wo","Chun","Xiao","Yu","Pian","Mao","An","E","Luo","Ying","Huo","Gua","Jiang","Mian","Zuo","Zuo","Ju","Bao","Rou","Xi","Xie","An","Qu","Jian","Fu","Lu","Jing","Pen","Feng","Hong","Hong","Hou","Yan","Tu","Zhu","Zi","Xiang","Shen","Ge","Jie","Jing","Mi","Huang","Shen","Pu","Gai","Dong","Zhou","Qian","Wei","Bo","Wei","Pa","Ji","Hu","Zang","Jia","Duan","Yao","Jun","Cong","Quan","Wei","Xian","Kui","Ting","Hun","Xi","Shi","Qi","Lan","Zong","Yao","Yuan","Mei","Yun","Shu","Di","Zhuan","Guan","Sukumo","Xue","Chan","Kai","Kui",,"Jiang","Lou","Wei","Pai",,"Sou","Yin","Shi","Chun","Shi","Yun","Zhen","Lang","Nu","Meng","He","Que","Suan","Yuan","Li","Ju","Xi","Pang","Chu","Xu","Tu","Liu","Wo","Zhen","Qian","Zu","Po","Cuo","Yuan","Chu","Yu","Kuai","Pan","Pu","Pu","Na","Shuo","Xi","Fen","Yun","Zheng","Jian","Ji","Ruo","Cang","En","Mi","Hao","Sun","Zhen","Ming","Sou","Xu","Liu","Xi","Gu","Lang","Rong","Weng","Gai","Cuo","Shi","Tang","Luo","Ru","Suo","Xian","Bei","Yao","Gui","Bi","Zong","Gun","Za","Xiu","Ce","Hai","Lan",,"Ji","Li","Can","Lang","Yu",,"Ying","Mo","Diao","Tiao","Mao","Tong","Zhu","Peng","An","Lian","Cong","Xi","Ping","Qiu","Jin","Chun","Jie","Wei","Tui","Cao","Yu","Yi","Ji","Liao","Bi","Lu","Su"],["Bu","Zhang","Luo","Jiang","Man","Yan","Ling","Ji","Piao","Gun","Han","Di","Su","Lu","She","Shang","Di","Mie","Xun","Man","Bo","Di","Cuo","Zhe","Sen","Xuan","Wei","Hu","Ao","Mi","Lou","Cu","Zhong","Cai","Po","Jiang","Mi","Cong","Niao","Hui","Jun","Yin","Jian","Yan","Shu","Yin","Kui","Chen","Hu","Sha","Kou","Qian","Ma","Zang","Sonoko","Qiang","Dou","Lian","Lin","Kou","Ai","Bi","Li","Wei","Ji","Xun","Sheng","Fan","Meng","Ou","Chan","Dian","Xun","Jiao","Rui","Rui","Lei","Yu","Qiao","Chu","Hua","Jian","Mai","Yun","Bao","You","Qu","Lu","Rao","Hui","E","Teng","Fei","Jue","Zui","Fa","Ru","Fen","Kui","Shun","Rui","Ya","Xu","Fu","Jue","Dang","Wu","Tong","Si","Xiao","Xi","Long","Yun",,"Qi","Jian","Yun","Sun","Ling","Yu","Xia","Yong","Ji","Hong","Si","Nong","Lei","Xuan","Yun","Yu","Xi","Hao","Bo","Hao","Ai","Wei","Hui","Wei","Ji","Ci","Xiang","Luan","Mie","Yi","Leng","Jiang","Can","Shen","Qiang","Lian","Ke","Yuan","Da","Ti","Tang","Xie","Bi","Zhan","Sun","Lian","Fan","Ding","Jie","Gu","Xie","Shu","Jian","Kao","Hong","Sa","Xin","Xun","Yao","Hie","Sou","Shu","Xun","Dui","Pin","Wei","Neng","Chou","Mai","Ru","Piao","Tai","Qi","Zao","Chen","Zhen","Er","Ni","Ying","Gao","Cong","Xiao","Qi","Fa","Jian","Xu","Kui","Jie","Bian","Diao","Mi","Lan","Jin","Cang","Miao","Qiong","Qie","Xian",,"Ou","Xian","Su","Lu","Yi","Xu","Xie","Li","Yi","La","Lei","Xiao","Di","Zhi","Bei","Teng","Yao","Mo","Huan","Piao","Fan","Sou","Tan","Tui","Qiong","Qiao","Wei","Liu","Hui",,"Gao","Yun",,"Li","Shu","Chu","Ai","Lin","Zao","Xuan","Chen","Lai","Huo"],["Tuo","Wu","Rui","Rui","Qi","Heng","Lu","Su","Tui","Mang","Yun","Pin","Yu","Xun","Ji","Jiong","Xian","Mo","Hagi","Su","Jiong",,"Nie","Bo","Rang","Yi","Xian","Yu","Ju","Lian","Lian","Yin","Qiang","Ying","Long","Tong","Wei","Yue","Ling","Qu","Yao","Fan","Mi","Lan","Kui","Lan","Ji","Dang","Katsura","Lei","Lei","Hua","Feng","Zhi","Wei","Kui","Zhan","Huai","Li","Ji","Mi","Lei","Huai","Luo","Ji","Kui","Lu","Jian","San",,"Lei","Quan","Xiao","Yi","Luan","Men","Bie","Hu","Hu","Lu","Nue","Lu","Si","Xiao","Qian","Chu","Hu","Xu","Cuo","Fu","Xu","Xu","Lu","Hu","Yu","Hao","Jiao","Ju","Guo","Bao","Yan","Zhan","Zhan","Kui","Ban","Xi","Shu","Chong","Qiu","Diao","Ji","Qiu","Cheng","Shi",,"Di","Zhe","She","Yu","Gan","Zi","Hong","Hui","Meng","Ge","Sui","Xia","Chai","Shi","Yi","Ma","Xiang","Fang","E","Pa","Chi","Qian","Wen","Wen","Rui","Bang","Bi","Yue","Yue","Jun","Qi","Ran","Yin","Qi","Tian","Yuan","Jue","Hui","Qin","Qi","Zhong","Ya","Ci","Mu","Wang","Fen","Fen","Hang","Gong","Zao","Fu","Ran","Jie","Fu","Chi","Dou","Piao","Xian","Ni","Te","Qiu","You","Zha","Ping","Chi","You","He","Han","Ju","Li","Fu","Ran","Zha","Gou","Pi","Bo","Xian","Zhu","Diao","Bie","Bing","Gu","Ran","Qu","She","Tie","Ling","Gu","Dan","Gu","Ying","Li","Cheng","Qu","Mou","Ge","Ci","Hui","Hui","Mang","Fu","Yang","Wa","Lie","Zhu","Yi","Xian","Kuo","Jiao","Li","Yi","Ping","Ji","Ha","She","Yi","Wang","Mo","Qiong","Qie","Gui","Gong","Zhi","Man","Ebi","Zhi","Jia","Rao","Si","Qi","Xing","Lie","Qiu","Shao","Yong","Jia","Shui","Che","Bai","E","Han"],["Shu","Xuan","Feng","Shen","Zhen","Fu","Xian","Zhe","Wu","Fu","Li","Lang","Bi","Chu","Yuan","You","Jie","Dan","Yan","Ting","Dian","Shui","Hui","Gua","Zhi","Song","Fei","Ju","Mi","Qi","Qi","Yu","Jun","Zha","Meng","Qiang","Si","Xi","Lun","Li","Die","Tiao","Tao","Kun","Gan","Han","Yu","Bang","Fei","Pi","Wei","Dun","Yi","Yuan","Su","Quan","Qian","Rui","Ni","Qing","Wei","Liang","Guo","Wan","Dong","E","Ban","Di","Wang","Can","Yang","Ying","Guo","Chan",,"La","Ke","Ji","He","Ting","Mai","Xu","Mian","Yu","Jie","Shi","Xuan","Huang","Yan","Bian","Rou","Wei","Fu","Yuan","Mei","Wei","Fu","Ruan","Xie","You","Qiu","Mao","Xia","Ying","Shi","Chong","Tang","Zhu","Zong","Ti","Fu","Yuan","Hui","Meng","La","Du","Hu","Qiu","Die","Li","Gua","Yun","Ju","Nan","Lou","Qun","Rong","Ying","Jiang",,"Lang","Pang","Si","Xi","Ci","Xi","Yuan","Weng","Lian","Sou","Ban","Rong","Rong","Ji","Wu","Qiu","Han","Qin","Yi","Bi","Hua","Tang","Yi","Du","Nai","He","Hu","Hui","Ma","Ming","Yi","Wen","Ying","Teng","Yu","Cang","So","Ebi","Man",,"Shang","Zhe","Cao","Chi","Di","Ao","Lu","Wei","Zhi","Tang","Chen","Piao","Qu","Pi","Yu","Jian","Luo","Lou","Qin","Zhong","Yin","Jiang","Shuai","Wen","Jiao","Wan","Zhi","Zhe","Ma","Ma","Guo","Liu","Mao","Xi","Cong","Li","Man","Xiao","Kamakiri","Zhang","Mang","Xiang","Mo","Zui","Si","Qiu","Te","Zhi","Peng","Peng","Jiao","Qu","Bie","Liao","Pan","Gui","Xi","Ji","Zhuan","Huang","Fei","Lao","Jue","Jue","Hui","Yin","Chan","Jiao","Shan","Rao","Xiao","Mou","Chong","Xun","Si",,"Cheng","Dang","Li","Xie","Shan","Yi","Jing","Da","Chan","Qi"],["Ci","Xiang","She","Luo","Qin","Ying","Chai","Li","Ze","Xuan","Lian","Zhu","Ze","Xie","Mang","Xie","Qi","Rong","Jian","Meng","Hao","Ruan","Huo","Zhuo","Jie","Bin","He","Mie","Fan","Lei","Jie","La","Mi","Li","Chun","Li","Qiu","Nie","Lu","Du","Xiao","Zhu","Long","Li","Long","Feng","Ye","Beng","Shang","Gu","Juan","Ying",,"Xi","Can","Qu","Quan","Du","Can","Man","Jue","Jie","Zhu","Zha","Xie","Huang","Niu","Pei","Nu","Xin","Zhong","Mo","Er","Ke","Mie","Xi","Xing","Yan","Kan","Yuan",,"Ling","Xuan","Shu","Xian","Tong","Long","Jie","Xian","Ya","Hu","Wei","Dao","Chong","Wei","Dao","Zhun","Heng","Qu","Yi","Yi","Bu","Gan","Yu","Biao","Cha","Yi","Shan","Chen","Fu","Gun","Fen","Shuai","Jie","Na","Zhong","Dan","Ri","Zhong","Zhong","Xie","Qi","Xie","Ran","Zhi","Ren","Qin","Jin","Jun","Yuan","Mei","Chai","Ao","Niao","Hui","Ran","Jia","Tuo","Ling","Dai","Bao","Pao","Yao","Zuo","Bi","Shao","Tan","Ju","He","Shu","Xiu","Zhen","Yi","Pa","Bo","Di","Wa","Fu","Gun","Zhi","Zhi","Ran","Pan","Yi","Mao","Tuo","Na","Kou","Xian","Chan","Qu","Bei","Gun","Xi","Ne","Bo","Horo","Fu","Yi","Chi","Ku","Ren","Jiang","Jia","Cun","Mo","Jie","Er","Luo","Ru","Zhu","Gui","Yin","Cai","Lie","Kamishimo","Yuki","Zhuang","Dang",,"Kun","Ken","Niao","Shu","Jia","Kun","Cheng","Li","Juan","Shen","Pou","Ge","Yi","Yu","Zhen","Liu","Qiu","Qun","Ji","Yi","Bu","Zhuang","Shui","Sha","Qun","Li","Lian","Lian","Ku","Jian","Fou","Chan","Bi","Gun","Tao","Yuan","Ling","Chi","Chang","Chou","Duo","Biao","Liang","Chang","Pei","Pei","Fei","Yuan","Luo","Guo","Yan","Du","Xi","Zhi","Ju","Qi"],["Ji","Zhi","Gua","Ken","Che","Ti","Ti","Fu","Chong","Xie","Bian","Die","Kun","Duan","Xiu","Xiu","He","Yuan","Bao","Bao","Fu","Yu","Tuan","Yan","Hui","Bei","Chu","Lu","Ena","Hitoe","Yun","Da","Gou","Da","Huai","Rong","Yuan","Ru","Nai","Jiong","Suo","Ban","Tun","Chi","Sang","Niao","Ying","Jie","Qian","Huai","Ku","Lian","Bao","Li","Zhe","Shi","Lu","Yi","Die","Xie","Xian","Wei","Biao","Cao","Ji","Jiang","Sen","Bao","Xiang","Chihaya","Pu","Jian","Zhuan","Jian","Zui","Ji","Dan","Za","Fan","Bo","Xiang","Xin","Bie","Rao","Man","Lan","Ao","Duo","Gui","Cao","Sui","Nong","Chan","Lian","Bi","Jin","Dang","Shu","Tan","Bi","Lan","Pu","Ru","Zhi",,"Shu","Wa","Shi","Bai","Xie","Bo","Chen","Lai","Long","Xi","Xian","Lan","Zhe","Dai","Tasuki","Zan","Shi","Jian","Pan","Yi","Ran","Ya","Xi","Xi","Yao","Feng","Tan",,"Biao","Fu","Ba","He","Ji","Ji","Jian","Guan","Bian","Yan","Gui","Jue","Pian","Mao","Mi","Mi","Mie","Shi","Si","Zhan","Luo","Jue","Mi","Tiao","Lian","Yao","Zhi","Jun","Xi","Shan","Wei","Xi","Tian","Yu","Lan","E","Du","Qin","Pang","Ji","Ming","Ying","Gou","Qu","Zhan","Jin","Guan","Deng","Jian","Luo","Qu","Jian","Wei","Jue","Qu","Luo","Lan","Shen","Di","Guan","Jian","Guan","Yan","Gui","Mi","Shi","Zhan","Lan","Jue","Ji","Xi","Di","Tian","Yu","Gou","Jin","Qu","Jiao","Jiu","Jin","Cu","Jue","Zhi","Chao","Ji","Gu","Dan","Zui","Di","Shang","Hua","Quan","Ge","Chi","Jie","Gui","Gong","Chu","Jie","Hun","Qiu","Xing","Su","Ni","Ji","Lu","Zhi","Zha","Bi","Xing","Hu","Shang","Gong","Zhi","Xue","Chu","Xi","Yi","Lu","Jue","Xi","Yan","Xi"],["Yan","Yan","Ding","Fu","Qiu","Qiu","Jiao","Hong","Ji","Fan","Xun","Diao","Hong","Cha","Tao","Xu","Jie","Yi","Ren","Xun","Yin","Shan","Qi","Tuo","Ji","Xun","Yin","E","Fen","Ya","Yao","Song","Shen","Yin","Xin","Jue","Xiao","Ne","Chen","You","Zhi","Xiong","Fang","Xin","Chao","She","Xian","Sha","Tun","Xu","Yi","Yi","Su","Chi","He","Shen","He","Xu","Zhen","Zhu","Zheng","Gou","Zi","Zi","Zhan","Gu","Fu","Quan","Die","Ling","Di","Yang","Li","Nao","Pan","Zhou","Gan","Yi","Ju","Ao","Zha","Tuo","Yi","Qu","Zhao","Ping","Bi","Xiong","Qu","Ba","Da","Zu","Tao","Zhu","Ci","Zhe","Yong","Xu","Xun","Yi","Huang","He","Shi","Cha","Jiao","Shi","Hen","Cha","Gou","Gui","Quan","Hui","Jie","Hua","Gai","Xiang","Wei","Shen","Chou","Tong","Mi","Zhan","Ming","E","Hui","Yan","Xiong","Gua","Er","Beng","Tiao","Chi","Lei","Zhu","Kuang","Kua","Wu","Yu","Teng","Ji","Zhi","Ren","Su","Lang","E","Kuang","E","Shi","Ting","Dan","Bo","Chan","You","Heng","Qiao","Qin","Shua","An","Yu","Xiao","Cheng","Jie","Xian","Wu","Wu","Gao","Song","Pu","Hui","Jing","Shuo","Zhen","Shuo","Du","Yasashi","Chang","Shui","Jie","Ke","Qu","Cong","Xiao","Sui","Wang","Xuan","Fei","Chi","Ta","Yi","Na","Yin","Diao","Pi","Chuo","Chan","Chen","Zhun","Ji","Qi","Tan","Zhui","Wei","Ju","Qing","Jian","Zheng","Ze","Zou","Qian","Zhuo","Liang","Jian","Zhu","Hao","Lun","Shen","Biao","Huai","Pian","Yu","Die","Xu","Pian","Shi","Xuan","Shi","Hun","Hua","E","Zhong","Di","Xie","Fu","Pu","Ting","Jian","Qi","Yu","Zi","Chuan","Xi","Hui","Yin","An","Xian","Nan","Chen","Feng","Zhu","Yang","Yan","Heng","Xuan","Ge","Nuo","Qi"],["Mou","Ye","Wei",,"Teng","Zou","Shan","Jian","Bo","Ku","Huang","Huo","Ge","Ying","Mi","Xiao","Mi","Xi","Qiang","Chen","Nue","Ti","Su","Bang","Chi","Qian","Shi","Jiang","Yuan","Xie","Xue","Tao","Yao","Yao",,"Yu","Biao","Cong","Qing","Li","Mo","Mo","Shang","Zhe","Miu","Jian","Ze","Jie","Lian","Lou","Can","Ou","Guan","Xi","Zhuo","Ao","Ao","Jin","Zhe","Yi","Hu","Jiang","Man","Chao","Han","Hua","Chan","Xu","Zeng","Se","Xi","She","Dui","Zheng","Nao","Lan","E","Ying","Jue","Ji","Zun","Jiao","Bo","Hui","Zhuan","Mu","Zen","Zha","Shi","Qiao","Tan","Zen","Pu","Sheng","Xuan","Zao","Tan","Dang","Sui","Qian","Ji","Jiao","Jing","Lian","Nou","Yi","Ai","Zhan","Pi","Hui","Hua","Yi","Yi","Shan","Rang","Nou","Qian","Zhui","Ta","Hu","Zhou","Hao","Ye","Ying","Jian","Yu","Jian","Hui","Du","Zhe","Xuan","Zan","Lei","Shen","Wei","Chan","Li","Yi","Bian","Zhe","Yan","E","Chou","Wei","Chou","Yao","Chan","Rang","Yin","Lan","Chen","Huo","Zhe","Huan","Zan","Yi","Dang","Zhan","Yan","Du","Yan","Ji","Ding","Fu","Ren","Ji","Jie","Hong","Tao","Rang","Shan","Qi","Tuo","Xun","Yi","Xun","Ji","Ren","Jiang","Hui","Ou","Ju","Ya","Ne","Xu","E","Lun","Xiong","Song","Feng","She","Fang","Jue","Zheng","Gu","He","Ping","Zu","Shi","Xiong","Zha","Su","Zhen","Di","Zou","Ci","Qu","Zhao","Bi","Yi","Yi","Kuang","Lei","Shi","Gua","Shi","Jie","Hui","Cheng","Zhu","Shen","Hua","Dan","Gou","Quan","Gui","Xun","Yi","Zheng","Gai","Xiang","Cha","Hun","Xu","Zhou","Jie","Wu","Yu","Qiao","Wu","Gao","You","Hui","Kuang","Shuo","Song","Ai","Qing","Zhu","Zou","Nuo","Du","Zhuo","Fei","Ke","Wei"],["Yu","Shui","Shen","Diao","Chan","Liang","Zhun","Sui","Tan","Shen","Yi","Mou","Chen","Die","Huang","Jian","Xie","Nue","Ye","Wei","E","Yu","Xuan","Chan","Zi","An","Yan","Di","Mi","Pian","Xu","Mo","Dang","Su","Xie","Yao","Bang","Shi","Qian","Mi","Jin","Man","Zhe","Jian","Miu","Tan","Zen","Qiao","Lan","Pu","Jue","Yan","Qian","Zhan","Chen","Gu","Qian","Hong","Xia","Jue","Hong","Han","Hong","Xi","Xi","Huo","Liao","Han","Du","Long","Dou","Jiang","Qi","Shi","Li","Deng","Wan","Bi","Shu","Xian","Feng","Zhi","Zhi","Yan","Yan","Shi","Chu","Hui","Tun","Yi","Tun","Yi","Jian","Ba","Hou","E","Cu","Xiang","Huan","Jian","Ken","Gai","Qu","Fu","Xi","Bin","Hao","Yu","Zhu","Jia",,"Xi","Bo","Wen","Huan","Bin","Di","Zong","Fen","Yi","Zhi","Bao","Chai","Han","Pi","Na","Pi","Gou","Na","You","Diao","Mo","Si","Xiu","Huan","Kun","He","He","Mo","Han","Mao","Li","Ni","Bi","Yu","Jia","Tuan","Mao","Pi","Xi","E","Ju","Mo","Chu","Tan","Huan","Jue","Bei","Zhen","Yuan","Fu","Cai","Gong","Te","Yi","Hang","Wan","Pin","Huo","Fan","Tan","Guan","Ze","Zhi","Er","Zhu","Shi","Bi","Zi","Er","Gui","Pian","Bian","Mai","Dai","Sheng","Kuang","Fei","Tie","Yi","Chi","Mao","He","Bi","Lu","Ren","Hui","Gai","Pian","Zi","Jia","Xu","Zei","Jiao","Gai","Zang","Jian","Ying","Xun","Zhen","She","Bin","Bin","Qiu","She","Chuan","Zang","Zhou","Lai","Zan","Si","Chen","Shang","Tian","Pei","Geng","Xian","Mai","Jian","Sui","Fu","Tan","Cong","Cong","Zhi","Ji","Zhang","Du","Jin","Xiong","Shun","Yun","Bao","Zai","Lai","Feng","Cang","Ji","Sheng","Ai","Zhuan","Fu","Gou","Sai","Ze","Liao"],["Wei","Bai","Chen","Zhuan","Zhi","Zhui","Biao","Yun","Zeng","Tan","Zan","Yan",,"Shan","Wan","Ying","Jin","Gan","Xian","Zang","Bi","Du","Shu","Yan",,"Xuan","Long","Gan","Zang","Bei","Zhen","Fu","Yuan","Gong","Cai","Ze","Xian","Bai","Zhang","Huo","Zhi","Fan","Tan","Pin","Bian","Gou","Zhu","Guan","Er","Jian","Bi","Shi","Tie","Gui","Kuang","Dai","Mao","Fei","He","Yi","Zei","Zhi","Jia","Hui","Zi","Ren","Lu","Zang","Zi","Gai","Jin","Qiu","Zhen","Lai","She","Fu","Du","Ji","Shu","Shang","Si","Bi","Zhou","Geng","Pei","Tan","Lai","Feng","Zhui","Fu","Zhuan","Sai","Ze","Yan","Zan","Yun","Zeng","Shan","Ying","Gan","Chi","Xi","She","Nan","Xiong","Xi","Cheng","He","Cheng","Zhe","Xia","Tang","Zou","Zou","Li","Jiu","Fu","Zhao","Gan","Qi","Shan","Qiong","Qin","Xian","Ci","Jue","Qin","Chi","Ci","Chen","Chen","Die","Ju","Chao","Di","Se","Zhan","Zhu","Yue","Qu","Jie","Chi","Chu","Gua","Xue","Ci","Tiao","Duo","Lie","Gan","Suo","Cu","Xi","Zhao","Su","Yin","Ju","Jian","Que","Tang","Chuo","Cui","Lu","Qu","Dang","Qiu","Zi","Ti","Qu","Chi","Huang","Qiao","Qiao","Yao","Zao","Ti",,"Zan","Zan","Zu","Pa","Bao","Ku","Ke","Dun","Jue","Fu","Chen","Jian","Fang","Zhi","Sa","Yue","Pa","Qi","Yue","Qiang","Tuo","Tai","Yi","Nian","Ling","Mei","Ba","Die","Ku","Tuo","Jia","Ci","Pao","Qia","Zhu","Ju","Die","Zhi","Fu","Pan","Ju","Shan","Bo","Ni","Ju","Li","Gen","Yi","Ji","Dai","Xian","Jiao","Duo","Zhu","Zhuan","Kua","Zhuai","Gui","Qiong","Kui","Xiang","Chi","Lu","Beng","Zhi","Jia","Tiao","Cai","Jian","Ta","Qiao","Bi","Xian","Duo","Ji","Ju","Ji","Shu","Tu"],["Chu","Jing","Nie","Xiao","Bo","Chi","Qun","Mou","Shu","Lang","Yong","Jiao","Chou","Qiao",,"Ta","Jian","Qi","Wo","Wei","Zhuo","Jie","Ji","Nie","Ju","Ju","Lun","Lu","Leng","Huai","Ju","Chi","Wan","Quan","Ti","Bo","Zu","Qie","Ji","Cu","Zong","Cai","Zong","Peng","Zhi","Zheng","Dian","Zhi","Yu","Duo","Dun","Chun","Yong","Zhong","Di","Zhe","Chen","Chuai","Jian","Gua","Tang","Ju","Fu","Zu","Die","Pian","Rou","Nuo","Ti","Cha","Tui","Jian","Dao","Cuo","Xi","Ta","Qiang","Zhan","Dian","Ti","Ji","Nie","Man","Liu","Zhan","Bi","Chong","Lu","Liao","Cu","Tang","Dai","Suo","Xi","Kui","Ji","Zhi","Qiang","Di","Man","Zong","Lian","Beng","Zao","Nian","Bie","Tui","Ju","Deng","Ceng","Xian","Fan","Chu","Zhong","Dun","Bo","Cu","Zu","Jue","Jue","Lin","Ta","Qiao","Qiao","Pu","Liao","Dun","Cuan","Kuang","Zao","Ta","Bi","Bi","Zhu","Ju","Chu","Qiao","Dun","Chou","Ji","Wu","Yue","Nian","Lin","Lie","Zhi","Li","Zhi","Chan","Chu","Duan","Wei","Long","Lin","Xian","Wei","Zuan","Lan","Xie","Rang","Xie","Nie","Ta","Qu","Jie","Cuan","Zuan","Xi","Kui","Jue","Lin","Shen","Gong","Dan","Segare","Qu","Ti","Duo","Duo","Gong","Lang","Nerau","Luo","Ai","Ji","Ju","Tang","Utsuke",,"Yan","Shitsuke","Kang","Qu","Lou","Lao","Tuo","Zhi","Yagate","Ti","Dao","Yagate","Yu","Che","Ya","Gui","Jun","Wei","Yue","Xin","Di","Xuan","Fan","Ren","Shan","Qiang","Shu","Tun","Chen","Dai","E","Na","Qi","Mao","Ruan","Ren","Fan","Zhuan","Hong","Hu","Qu","Huang","Di","Ling","Dai","Ao","Zhen","Fan","Kuang","Ang","Peng","Bei","Gu","Ku","Pao","Zhu","Rong","E","Ba","Zhou","Zhi","Yao","Ke","Yi","Qing","Shi","Ping"],["Er","Qiong","Ju","Jiao","Guang","Lu","Kai","Quan","Zhou","Zai","Zhi","She","Liang","Yu","Shao","You","Huan","Yun","Zhe","Wan","Fu","Qing","Zhou","Ni","Ling","Zhe","Zhan","Liang","Zi","Hui","Wang","Chuo","Guo","Kan","Yi","Peng","Qian","Gun","Nian","Pian","Guan","Bei","Lun","Pai","Liang","Ruan","Rou","Ji","Yang","Xian","Chuan","Cou","Qun","Ge","You","Hong","Shu","Fu","Zi","Fu","Wen","Ben","Zhan","Yu","Wen","Tao","Gu","Zhen","Xia","Yuan","Lu","Jiu","Chao","Zhuan","Wei","Hun","Sori","Che","Jiao","Zhan","Pu","Lao","Fen","Fan","Lin","Ge","Se","Kan","Huan","Yi","Ji","Dui","Er","Yu","Xian","Hong","Lei","Pei","Li","Li","Lu","Lin","Che","Ya","Gui","Xuan","Di","Ren","Zhuan","E","Lun","Ruan","Hong","Ku","Ke","Lu","Zhou","Zhi","Yi","Hu","Zhen","Li","Yao","Qing","Shi","Zai","Zhi","Jiao","Zhou","Quan","Lu","Jiao","Zhe","Fu","Liang","Nian","Bei","Hui","Gun","Wang","Liang","Chuo","Zi","Cou","Fu","Ji","Wen","Shu","Pei","Yuan","Xia","Zhan","Lu","Che","Lin","Xin","Gu","Ci","Ci","Pi","Zui","Bian","La","La","Ci","Xue","Ban","Bian","Bian","Bian",,"Bian","Ban","Ci","Bian","Bian","Chen","Ru","Nong","Nong","Zhen","Chuo","Chuo","Suberu","Reng","Bian","Bian","Sip","Ip","Liao","Da","Chan","Gan","Qian","Yu","Yu","Qi","Xun","Yi","Guo","Mai","Qi","Za","Wang","Jia","Zhun","Ying","Ti","Yun","Jin","Hang","Ya","Fan","Wu","Da","E","Huan","Zhe","Totemo","Jin","Yuan","Wei","Lian","Chi","Che","Ni","Tiao","Zhi","Yi","Jiong","Jia","Chen","Dai","Er","Di","Po","Wang","Die","Ze","Tao","Shu","Tuo","Kep","Jing","Hui","Tong","You","Mi","Beng","Ji","Nai","Yi","Jie","Zhui","Lie","Xun"],["Tui","Song","Gua","Tao","Pang","Hou","Ni","Dun","Jiong","Xuan","Xun","Bu","You","Xiao","Qiu","Tou","Zhu","Qiu","Di","Di","Tu","Jing","Ti","Dou","Yi","Zhe","Tong","Guang","Wu","Shi","Cheng","Su","Zao","Qun","Feng","Lian","Suo","Hui","Li","Sako","Lai","Ben","Cuo","Jue","Beng","Huan","Dai","Lu","You","Zhou","Jin","Yu","Chuo","Kui","Wei","Ti","Yi","Da","Yuan","Luo","Bi","Nuo","Yu","Dang","Sui","Dun","Sui","Yan","Chuan","Chi","Ti","Yu","Shi","Zhen","You","Yun","E","Bian","Guo","E","Xia","Huang","Qiu","Dao","Da","Wei","Appare","Yi","Gou","Yao","Chu","Liu","Xun","Ta","Di","Chi","Yuan","Su","Ta","Qian",,"Yao","Guan","Zhang","Ao","Shi","Ce","Chi","Su","Zao","Zhe","Dun","Di","Lou","Chi","Cuo","Lin","Zun","Rao","Qian","Xuan","Yu","Yi","Wu","Liao","Ju","Shi","Bi","Yao","Mai","Xie","Sui","Huan","Zhan","Teng","Er","Miao","Bian","Bian","La","Li","Yuan","Yao","Luo","Li","Yi","Ting","Deng","Qi","Yong","Shan","Han","Yu","Mang","Ru","Qiong",,"Kuang","Fu","Kang","Bin","Fang","Xing","Na","Xin","Shen","Bang","Yuan","Cun","Huo","Xie","Bang","Wu","Ju","You","Han","Tai","Qiu","Bi","Pei","Bing","Shao","Bei","Wa","Di","Zou","Ye","Lin","Kuang","Gui","Zhu","Shi","Ku","Yu","Gai","Ge","Xi","Zhi","Ji","Xun","Hou","Xing","Jiao","Xi","Gui","Nuo","Lang","Jia","Kuai","Zheng","Otoko","Yun","Yan","Cheng","Dou","Chi","Lu","Fu","Wu","Fu","Gao","Hao","Lang","Jia","Geng","Jun","Ying","Bo","Xi","Bei","Li","Yun","Bu","Xiao","Qi","Pi","Qing","Guo","Zhou","Tan","Zou","Ping","Lai","Ni","Chen","You","Bu","Xiang","Dan","Ju","Yong","Qiao","Yi","Du","Yan","Mei"],["Ruo","Bei","E","Yu","Juan","Yu","Yun","Hou","Kui","Xiang","Xiang","Sou","Tang","Ming","Xi","Ru","Chu","Zi","Zou","Ju","Wu","Xiang","Yun","Hao","Yong","Bi","Mo","Chao","Fu","Liao","Yin","Zhuan","Hu","Qiao","Yan","Zhang","Fan","Qiao","Xu","Deng","Bi","Xin","Bi","Ceng","Wei","Zheng","Mao","Shan","Lin","Po","Dan","Meng","Ye","Cao","Kuai","Feng","Meng","Zou","Kuang","Lian","Zan","Chan","You","Qi","Yan","Chan","Zan","Ling","Huan","Xi","Feng","Zan","Li","You","Ding","Qiu","Zhuo","Pei","Zhou","Yi","Hang","Yu","Jiu","Yan","Zui","Mao","Dan","Xu","Tou","Zhen","Fen","Sakenomoto",,"Yun","Tai","Tian","Qia","Tuo","Zuo","Han","Gu","Su","Po","Chou","Zai","Ming","Luo","Chuo","Chou","You","Tong","Zhi","Xian","Jiang","Cheng","Yin","Tu","Xiao","Mei","Ku","Suan","Lei","Pu","Zui","Hai","Yan","Xi","Niang","Wei","Lu","Lan","Yan","Tao","Pei","Zhan","Chun","Tan","Zui","Chuo","Cu","Kun","Ti","Mian","Du","Hu","Xu","Xing","Tan","Jiu","Chun","Yun","Po","Ke","Sou","Mi","Quan","Chou","Cuo","Yun","Yong","Ang","Zha","Hai","Tang","Jiang","Piao","Shan","Yu","Li","Zao","Lao","Yi","Jiang","Pu","Jiao","Xi","Tan","Po","Nong","Yi","Li","Ju","Jiao","Yi","Niang","Ru","Xun","Chou","Yan","Ling","Mi","Mi","Niang","Xin","Jiao","Xi","Mi","Yan","Bian","Cai","Shi","You","Shi","Shi","Li","Chong","Ye","Liang","Li","Jin","Jin","Qiu","Yi","Diao","Dao","Zhao","Ding","Po","Qiu","He","Fu","Zhen","Zhi","Ba","Luan","Fu","Nai","Diao","Shan","Qiao","Kou","Chuan","Zi","Fan","Yu","Hua","Han","Gong","Qi","Mang","Ri","Di","Si","Xi","Yi","Chai","Shi","Tu","Xi","Nu","Qian","Ishiyumi","Jian","Pi","Ye","Yin"],["Ba","Fang","Chen","Xing","Tou","Yue","Yan","Fu","Pi","Na","Xin","E","Jue","Dun","Gou","Yin","Qian","Ban","Ji","Ren","Chao","Niu","Fen","Yun","Ji","Qin","Pi","Guo","Hong","Yin","Jun","Shi","Yi","Zhong","Nie","Gai","Ri","Huo","Tai","Kang","Habaki","Irori","Ngaak",,"Duo","Zi","Ni","Tu","Shi","Min","Gu","E","Ling","Bing","Yi","Gu","Ba","Pi","Yu","Si","Zuo","Bu","You","Dian","Jia","Zhen","Shi","Shi","Tie","Ju","Zhan","Shi","She","Xuan","Zhao","Bao","He","Bi","Sheng","Chu","Shi","Bo","Zhu","Chi","Za","Po","Tong","Qian","Fu","Zhai","Liu","Qian","Fu","Li","Yue","Pi","Yang","Ban","Bo","Jie","Gou","Shu","Zheng","Mu","Ni","Nie","Di","Jia","Mu","Dan","Shen","Yi","Si","Kuang","Ka","Bei","Jian","Tong","Xing","Hong","Jiao","Chi","Er","Ge","Bing","Shi","Mou","Jia","Yin","Jun","Zhou","Chong","Shang","Tong","Mo","Lei","Ji","Yu","Xu","Ren","Zun","Zhi","Qiong","Shan","Chi","Xian","Xing","Quan","Pi","Tie","Zhu","Hou","Ming","Kua","Yao","Xian","Xian","Xiu","Jun","Cha","Lao","Ji","Pi","Ru","Mi","Yi","Yin","Guang","An","Diou","You","Se","Kao","Qian","Luan","Kasugai","Ai","Diao","Han","Rui","Shi","Keng","Qiu","Xiao","Zhe","Xiu","Zang","Ti","Cuo","Gua","Gong","Zhong","Dou","Lu","Mei","Lang","Wan","Xin","Yun","Bei","Wu","Su","Yu","Chan","Ting","Bo","Han","Jia","Hong","Cuan","Feng","Chan","Wan","Zhi","Si","Xuan","Wu","Wu","Tiao","Gong","Zhuo","Lue","Xing","Qian","Shen","Han","Lue","Xie","Chu","Zheng","Ju","Xian","Tie","Mang","Pu","Li","Pan","Rui","Cheng","Gao","Li","Te","Pyeng","Zhu",,"Tu","Liu","Zui","Ju","Chang","Yuan","Jian","Gang","Diao","Tao","Chang"],["Lun","Kua","Ling","Bei","Lu","Li","Qiang","Pou","Juan","Min","Zui","Peng","An","Pi","Xian","Ya","Zhui","Lei","A","Kong","Ta","Kun","Du","Wei","Chui","Zi","Zheng","Ben","Nie","Cong","Qun","Tan","Ding","Qi","Qian","Zhuo","Qi","Yu","Jin","Guan","Mao","Chang","Tian","Xi","Lian","Tao","Gu","Cuo","Shu","Zhen","Lu","Meng","Lu","Hua","Biao","Ga","Lai","Ken","Kazari","Bu","Nai","Wan","Zan",,"De","Xian",,"Huo","Liang",,"Men","Kai","Ying","Di","Lian","Guo","Xian","Du","Tu","Wei","Cong","Fu","Rou","Ji","E","Rou","Chen","Ti","Zha","Hong","Yang","Duan","Xia","Yu","Keng","Xing","Huang","Wei","Fu","Zhao","Cha","Qie","She","Hong","Kui","Tian","Mou","Qiao","Qiao","Hou","Tou","Cong","Huan","Ye","Min","Jian","Duan","Jian","Song","Kui","Hu","Xuan","Duo","Jie","Zhen","Bian","Zhong","Zi","Xiu","Ye","Mei","Pai","Ai","Jie",,"Mei","Chuo","Ta","Bang","Xia","Lian","Suo","Xi","Liu","Zu","Ye","Nou","Weng","Rong","Tang","Suo","Qiang","Ge","Shuo","Chui","Bo","Pan","Sa","Bi","Sang","Gang","Zi","Wu","Ying","Huang","Tiao","Liu","Kai","Sun","Sha","Sou","Wan","Hao","Zhen","Zhen","Luo","Yi","Yuan","Tang","Nie","Xi","Jia","Ge","Ma","Juan","Kasugai","Habaki","Suo",,,,"Na","Lu","Suo","Ou","Zu","Tuan","Xiu","Guan","Xuan","Lian","Shou","Ao","Man","Mo","Luo","Bi","Wei","Liu","Di","Qiao","Cong","Yi","Lu","Ao","Keng","Qiang","Cui","Qi","Chang","Tang","Man","Yong","Chan","Feng","Jing","Biao","Shu","Lou","Xiu","Cong","Long","Zan","Jian","Cao","Li","Xia","Xi","Kang",,"Beng",,,"Zheng","Lu","Hua","Ji","Pu","Hui","Qiang","Po","Lin","Suo","Xiu","San","Cheng"],["Kui","Si","Liu","Nao","Heng","Pie","Sui","Fan","Qiao","Quan","Yang","Tang","Xiang","Jue","Jiao","Zun","Liao","Jie","Lao","Dui","Tan","Zan","Ji","Jian","Zhong","Deng","Ya","Ying","Dui","Jue","Nou","Ti","Pu","Tie",,,"Ding","Shan","Kai","Jian","Fei","Sui","Lu","Juan","Hui","Yu","Lian","Zhuo","Qiao","Qian","Zhuo","Lei","Bi","Tie","Huan","Ye","Duo","Guo","Dang","Ju","Fen","Da","Bei","Yi","Ai","Zong","Xun","Diao","Zhu","Heng","Zhui","Ji","Nie","Ta","Huo","Qing","Bin","Ying","Kui","Ning","Xu","Jian","Jian","Yari","Cha","Zhi","Mie","Li","Lei","Ji","Zuan","Kuang","Shang","Peng","La","Du","Shuo","Chuo","Lu","Biao","Bao","Lu",,,"Long","E","Lu","Xin","Jian","Lan","Bo","Jian","Yao","Chan","Xiang","Jian","Xi","Guan","Cang","Nie","Lei","Cuan","Qu","Pan","Luo","Zuan","Luan","Zao","Nie","Jue","Tang","Shu","Lan","Jin","Qiu","Yi","Zhen","Ding","Zhao","Po","Diao","Tu","Qian","Chuan","Shan","Ji","Fan","Diao","Men","Nu","Xi","Chai","Xing","Gai","Bu","Tai","Ju","Dun","Chao","Zhong","Na","Bei","Gang","Ban","Qian","Yao","Qin","Jun","Wu","Gou","Kang","Fang","Huo","Tou","Niu","Ba","Yu","Qian","Zheng","Qian","Gu","Bo","E","Po","Bu","Ba","Yue","Zuan","Mu","Dan","Jia","Dian","You","Tie","Bo","Ling","Shuo","Qian","Liu","Bao","Shi","Xuan","She","Bi","Ni","Pi","Duo","Xing","Kao","Lao","Er","Mang","Ya","You","Cheng","Jia","Ye","Nao","Zhi","Dang","Tong","Lu","Diao","Yin","Kai","Zha","Zhu","Xian","Ting","Diu","Xian","Hua","Quan","Sha","Jia","Yao","Ge","Ming","Zheng","Se","Jiao","Yi","Chan","Chong","Tang","An","Yin","Ru","Zhu","Lao","Pu","Wu","Lai","Te","Lian","Keng"],["Xiao","Suo","Li","Zheng","Chu","Guo","Gao","Tie","Xiu","Cuo","Lue","Feng","Xin","Liu","Kai","Jian","Rui","Ti","Lang","Qian","Ju","A","Qiang","Duo","Tian","Cuo","Mao","Ben","Qi","De","Kua","Kun","Chang","Xi","Gu","Luo","Chui","Zhui","Jin","Zhi","Xian","Juan","Huo","Pou","Tan","Ding","Jian","Ju","Meng","Zi","Qie","Ying","Kai","Qiang","Song","E","Cha","Qiao","Zhong","Duan","Sou","Huang","Huan","Ai","Du","Mei","Lou","Zi","Fei","Mei","Mo","Zhen","Bo","Ge","Nie","Tang","Juan","Nie","Na","Liu","Hao","Bang","Yi","Jia","Bin","Rong","Biao","Tang","Man","Luo","Beng","Yong","Jing","Di","Zu","Xuan","Liu","Tan","Jue","Liao","Pu","Lu","Dui","Lan","Pu","Cuan","Qiang","Deng","Huo","Lei","Huan","Zhuo","Lian","Yi","Cha","Biao","La","Chan","Xiang","Chang","Chang","Jiu","Ao","Die","Qu","Liao","Mi","Chang","Men","Ma","Shuan","Shan","Huo","Men","Yan","Bi","Han","Bi","San","Kai","Kang","Beng","Hong","Run","San","Xian","Xian","Jian","Min","Xia","Yuru","Dou","Zha","Nao","Jian","Peng","Xia","Ling","Bian","Bi","Run","He","Guan","Ge","Ge","Fa","Chu","Hong","Gui","Min","Se","Kun","Lang","Lu","Ting","Sha","Ju","Yue","Yue","Chan","Qu","Lin","Chang","Shai","Kun","Yan","Min","Yan","E","Hun","Yu","Wen","Xiang","Bao","Xiang","Qu","Yao","Wen","Ban","An","Wei","Yin","Kuo","Que","Lan","Du",,"Phwung","Tian","Nie","Ta","Kai","He","Que","Chuang","Guan","Dou","Qi","Kui","Tang","Guan","Piao","Kan","Xi","Hui","Chan","Pi","Dang","Huan","Ta","Wen",,"Men","Shuan","Shan","Yan","Han","Bi","Wen","Chuang","Run","Wei","Xian","Hong","Jian","Min","Kang","Men","Zha","Nao","Gui","Wen","Ta","Min","Lu","Kai"],["Fa","Ge","He","Kun","Jiu","Yue","Lang","Du","Yu","Yan","Chang","Xi","Wen","Hun","Yan","E","Chan","Lan","Qu","Hui","Kuo","Que","Ge","Tian","Ta","Que","Kan","Huan","Fu","Fu","Le","Dui","Xin","Qian","Wu","Yi","Tuo","Yin","Yang","Dou","E","Sheng","Ban","Pei","Keng","Yun","Ruan","Zhi","Pi","Jing","Fang","Yang","Yin","Zhen","Jie","Cheng","E","Qu","Di","Zu","Zuo","Dian","Ling","A","Tuo","Tuo","Po","Bing","Fu","Ji","Lu","Long","Chen","Xing","Duo","Lou","Mo","Jiang","Shu","Duo","Xian","Er","Gui","Yu","Gai","Shan","Xun","Qiao","Xing","Chun","Fu","Bi","Xia","Shan","Sheng","Zhi","Pu","Dou","Yuan","Zhen","Chu","Xian","Tou","Nie","Yun","Xian","Pei","Pei","Zou","Yi","Dui","Lun","Yin","Ju","Chui","Chen","Pi","Ling","Tao","Xian","Lu","Sheng","Xian","Yin","Zhu","Yang","Reng","Shan","Chong","Yan","Yin","Yu","Ti","Yu","Long","Wei","Wei","Nie","Dui","Sui","An","Huang","Jie","Sui","Yin","Gai","Yan","Hui","Ge","Yun","Wu","Wei","Ai","Xi","Tang","Ji","Zhang","Dao","Ao","Xi","Yin",,"Rao","Lin","Tui","Deng","Pi","Sui","Sui","Yu","Xian","Fen","Ni","Er","Ji","Dao","Xi","Yin","E","Hui","Long","Xi","Li","Li","Li","Zhui","He","Zhi","Zhun","Jun","Nan","Yi","Que","Yan","Qian","Ya","Xiong","Ya","Ji","Gu","Huan","Zhi","Gou","Jun","Ci","Yong","Ju","Chu","Hu","Za","Luo","Yu","Chou","Diao","Sui","Han","Huo","Shuang","Guan","Chu","Za","Yong","Ji","Xi","Chou","Liu","Li","Nan","Xue","Za","Ji","Ji","Yu","Yu","Xue","Na","Fou","Se","Mu","Wen","Fen","Pang","Yun","Li","Li","Ang","Ling","Lei","An","Bao","Meng","Dian","Dang","Xing","Wu","Zhao"],["Xu","Ji","Mu","Chen","Xiao","Zha","Ting","Zhen","Pei","Mei","Ling","Qi","Chou","Huo","Sha","Fei","Weng","Zhan","Yin","Ni","Chou","Tun","Lin",,"Dong","Ying","Wu","Ling","Shuang","Ling","Xia","Hong","Yin","Mo","Mai","Yun","Liu","Meng","Bin","Wu","Wei","Huo","Yin","Xi","Yi","Ai","Dan","Deng","Xian","Yu","Lu","Long","Dai","Ji","Pang","Yang","Ba","Pi","Wei",,"Xi","Ji","Mai","Meng","Meng","Lei","Li","Huo","Ai","Fei","Dai","Long","Ling","Ai","Feng","Li","Bao",,"He","He","Bing","Qing","Qing","Jing","Tian","Zhen","Jing","Cheng","Qing","Jing","Jing","Dian","Jing","Tian","Fei","Fei","Kao","Mi","Mian","Mian","Pao","Ye","Tian","Hui","Ye","Ge","Ding","Cha","Jian","Ren","Di","Du","Wu","Ren","Qin","Jin","Xue","Niu","Ba","Yin","Sa","Na","Mo","Zu","Da","Ban","Yi","Yao","Tao","Tuo","Jia","Hong","Pao","Yang","Tomo","Yin","Jia","Tao","Ji","Xie","An","An","Hen","Gong","Kohaze","Da","Qiao","Ting","Wan","Ying","Sui","Tiao","Qiao","Xuan","Kong","Beng","Ta","Zhang","Bing","Kuo","Ju","La","Xie","Rou","Bang","Yi","Qiu","Qiu","He","Xiao","Mu","Ju","Jian","Bian","Di","Jian","On","Tao","Gou","Ta","Bei","Xie","Pan","Ge","Bi","Kuo","Tang","Lou","Gui","Qiao","Xue","Ji","Jian","Jiang","Chan","Da","Huo","Xian","Qian","Du","Wa","Jian","Lan","Wei","Ren","Fu","Mei","Juan","Ge","Wei","Qiao","Han","Chang",,"Rou","Xun","She","Wei","Ge","Bei","Tao","Gou","Yun",,"Bi","Wei","Hui","Du","Wa","Du","Wei","Ren","Fu","Han","Wei","Yun","Tao","Jiu","Jiu","Xian","Xie","Xian","Ji","Yin","Za","Yun","Shao","Le","Peng","Heng","Ying","Yun","Peng","Yin","Yin","Xiang"],["Hu","Ye","Ding","Qing","Pan","Xiang","Shun","Han","Xu","Yi","Xu","Gu","Song","Kui","Qi","Hang","Yu","Wan","Ban","Dun","Di","Dan","Pan","Po","Ling","Ce","Jing","Lei","He","Qiao","E","E","Wei","Jie","Gua","Shen","Yi","Shen","Hai","Dui","Pian","Ping","Lei","Fu","Jia","Tou","Hui","Kui","Jia","Le","Tian","Cheng","Ying","Jun","Hu","Han","Jing","Tui","Tui","Pin","Lai","Tui","Zi","Zi","Chui","Ding","Lai","Yan","Han","Jian","Ke","Cui","Jiong","Qin","Yi","Sai","Ti","E","E","Yan","Hun","Kan","Yong","Zhuan","Yan","Xian","Xin","Yi","Yuan","Sang","Dian","Dian","Jiang","Ku","Lei","Liao","Piao","Yi","Man","Qi","Rao","Hao","Qiao","Gu","Xun","Qian","Hui","Zhan","Ru","Hong","Bin","Xian","Pin","Lu","Lan","Nie","Quan","Ye","Ding","Qing","Han","Xiang","Shun","Xu","Xu","Wan","Gu","Dun","Qi","Ban","Song","Hang","Yu","Lu","Ling","Po","Jing","Jie","Jia","Tian","Han","Ying","Jiong","Hai","Yi","Pin","Hui","Tui","Han","Ying","Ying","Ke","Ti","Yong","E","Zhuan","Yan","E","Nie","Man","Dian","Sang","Hao","Lei","Zhan","Ru","Pin","Quan","Feng","Biao","Oroshi","Fu","Xia","Zhan","Biao","Sa","Ba","Tai","Lie","Gua","Xuan","Shao","Ju","Bi","Si","Wei","Yang","Yao","Sou","Kai","Sao","Fan","Liu","Xi","Liao","Piao","Piao","Liu","Biao","Biao","Biao","Liao",,"Se","Feng","Biao","Feng","Yang","Zhan","Biao","Sa","Ju","Si","Sou","Yao","Liu","Piao","Biao","Biao","Fei","Fan","Fei","Fei","Shi","Shi","Can","Ji","Ding","Si","Tuo","Zhan","Sun","Xiang","Tun","Ren","Yu","Juan","Chi","Yin","Fan","Fan","Sun","Yin","Zhu","Yi","Zhai","Bi","Jie","Tao","Liu","Ci","Tie","Si","Bao","Shi","Duo"],["Hai","Ren","Tian","Jiao","Jia","Bing","Yao","Tong","Ci","Xiang","Yang","Yang","Er","Yan","Le","Yi","Can","Bo","Nei","E","Bu","Jun","Dou","Su","Yu","Shi","Yao","Hun","Guo","Shi","Jian","Zhui","Bing","Xian","Bu","Ye","Tan","Fei","Zhang","Wei","Guan","E","Nuan","Hun","Hu","Huang","Tie","Hui","Jian","Hou","He","Xing","Fen","Wei","Gu","Cha","Song","Tang","Bo","Gao","Xi","Kui","Liu","Sou","Tao","Ye","Yun","Mo","Tang","Man","Bi","Yu","Xiu","Jin","San","Kui","Zhuan","Shan","Chi","Dan","Yi","Ji","Rao","Cheng","Yong","Tao","Hui","Xiang","Zhan","Fen","Hai","Meng","Yan","Mo","Chan","Xiang","Luo","Zuan","Nang","Shi","Ding","Ji","Tuo","Xing","Tun","Xi","Ren","Yu","Chi","Fan","Yin","Jian","Shi","Bao","Si","Duo","Yi","Er","Rao","Xiang","Jia","Le","Jiao","Yi","Bing","Bo","Dou","E","Yu","Nei","Jun","Guo","Hun","Xian","Guan","Cha","Kui","Gu","Sou","Chan","Ye","Mo","Bo","Liu","Xiu","Jin","Man","San","Zhuan","Nang","Shou","Kui","Guo","Xiang","Fen","Ba","Ni","Bi","Bo","Tu","Han","Fei","Jian","An","Ai","Fu","Xian","Wen","Xin","Fen","Bin","Xing","Ma","Yu","Feng","Han","Di","Tuo","Tuo","Chi","Xun","Zhu","Zhi","Pei","Xin","Ri","Sa","Yin","Wen","Zhi","Dan","Lu","You","Bo","Bao","Kuai","Tuo","Yi","Qu",,"Qu","Jiong","Bo","Zhao","Yuan","Peng","Zhou","Ju","Zhu","Nu","Ju","Pi","Zang","Jia","Ling","Zhen","Tai","Fu","Yang","Shi","Bi","Tuo","Tuo","Si","Liu","Ma","Pian","Tao","Zhi","Rong","Teng","Dong","Xun","Quan","Shen","Jiong","Er","Hai","Bo","Zhu","Yin","Luo","Shuu","Dan","Xie","Liu","Ju","Song","Qin","Mang","Liang","Han","Tu","Xuan","Tui","Jun"],["E","Cheng","Xin","Ai","Lu","Zhui","Zhou","She","Pian","Kun","Tao","Lai","Zong","Ke","Qi","Qi","Yan","Fei","Sao","Yan","Jie","Yao","Wu","Pian","Cong","Pian","Qian","Fei","Huang","Jian","Huo","Yu","Ti","Quan","Xia","Zong","Kui","Rou","Si","Gua","Tuo","Kui","Sou","Qian","Cheng","Zhi","Liu","Pang","Teng","Xi","Cao","Du","Yan","Yuan","Zou","Sao","Shan","Li","Zhi","Shuang","Lu","Xi","Luo","Zhang","Mo","Ao","Can","Piao","Cong","Qu","Bi","Zhi","Yu","Xu","Hua","Bo","Su","Xiao","Lin","Chan","Dun","Liu","Tuo","Zeng","Tan","Jiao","Tie","Yan","Luo","Zhan","Jing","Yi","Ye","Tuo","Bin","Zou","Yan","Peng","Lu","Teng","Xiang","Ji","Shuang","Ju","Xi","Huan","Li","Biao","Ma","Yu","Tuo","Xun","Chi","Qu","Ri","Bo","Lu","Zang","Shi","Si","Fu","Ju","Zou","Zhu","Tuo","Nu","Jia","Yi","Tai","Xiao","Ma","Yin","Jiao","Hua","Luo","Hai","Pian","Biao","Li","Cheng","Yan","Xin","Qin","Jun","Qi","Qi","Ke","Zhui","Zong","Su","Can","Pian","Zhi","Kui","Sao","Wu","Ao","Liu","Qian","Shan","Piao","Luo","Cong","Chan","Zou","Ji","Shuang","Xiang","Gu","Wei","Wei","Wei","Yu","Gan","Yi","Ang","Tou","Xie","Bao","Bi","Chi","Ti","Di","Ku","Hai","Qiao","Gou","Kua","Ge","Tui","Geng","Pian","Bi","Ke","Ka","Yu","Sui","Lou","Bo","Xiao","Pang","Bo","Ci","Kuan","Bin","Mo","Liao","Lou","Nao","Du","Zang","Sui","Ti","Bin","Kuan","Lu","Gao","Gao","Qiao","Kao","Qiao","Lao","Zao","Biao","Kun","Kun","Ti","Fang","Xiu","Ran","Mao","Dan","Kun","Bin","Fa","Tiao","Peng","Zi","Fa","Ran","Ti","Pao","Pi","Mao","Fu","Er","Rong","Qu","Gong","Xiu","Gua","Ji","Peng","Zhua","Shao","Sha"],["Ti","Li","Bin","Zong","Ti","Peng","Song","Zheng","Quan","Zong","Shun","Jian","Duo","Hu","La","Jiu","Qi","Lian","Zhen","Bin","Peng","Mo","San","Man","Man","Seng","Xu","Lie","Qian","Qian","Nong","Huan","Kuai","Ning","Bin","Lie","Rang","Dou","Dou","Nao","Hong","Xi","Dou","Han","Dou","Dou","Jiu","Chang","Yu","Yu","Li","Juan","Fu","Qian","Gui","Zong","Liu","Gui","Shang","Yu","Gui","Mei","Ji","Qi","Jie","Kui","Hun","Ba","Po","Mei","Xu","Yan","Xiao","Liang","Yu","Tui","Qi","Wang","Liang","Wei","Jian","Chi","Piao","Bi","Mo","Ji","Xu","Chou","Yan","Zhan","Yu","Dao","Ren","Ji","Eri","Gong","Tuo","Diao","Ji","Xu","E","E","Sha","Hang","Tun","Mo","Jie","Shen","Fan","Yuan","Bi","Lu","Wen","Hu","Lu","Za","Fang","Fen","Na","You","Namazu","Todo","He","Xia","Qu","Han","Pi","Ling","Tuo","Bo","Qiu","Ping","Fu","Bi","Ji","Wei","Ju","Diao","Bo","You","Gun","Pi","Nian","Xing","Tai","Bao","Fu","Zha","Ju","Gu","Kajika","Tong",,"Ta","Jie","Shu","Hou","Xiang","Er","An","Wei","Tiao","Zhu","Yin","Lie","Luo","Tong","Yi","Qi","Bing","Wei","Jiao","Bu","Gui","Xian","Ge","Hui","Bora","Mate","Kao","Gori","Duo","Jun","Ti","Man","Xiao","Za","Sha","Qin","Yu","Nei","Zhe","Gun","Geng","Su","Wu","Qiu","Ting","Fu","Wan","You","Li","Sha","Sha","Gao","Meng","Ugui","Asari","Subashiri","Kazunoko","Yong","Ni","Zi","Qi","Qing","Xiang","Nei","Chun","Ji","Diao","Qie","Gu","Zhou","Dong","Lai","Fei","Ni","Yi","Kun","Lu","Jiu","Chang","Jing","Lun","Ling","Zou","Li","Meng","Zong","Zhi","Nian","Shachi","Dojou","Sukesou","Shi","Shen","Hun","Shi","Hou","Xing","Zhu","La","Zong","Ji","Bian","Bian"],["Huan","Quan","Ze","Wei","Wei","Yu","Qun","Rou","Die","Huang","Lian","Yan","Qiu","Qiu","Jian","Bi","E","Yang","Fu","Sai","Jian","Xia","Tuo","Hu","Muroaji","Ruo","Haraka","Wen","Jian","Hao","Wu","Fang","Sao","Liu","Ma","Shi","Shi","Yin","Z","Teng","Ta","Yao","Ge","Rong","Qian","Qi","Wen","Ruo","Hatahata","Lian","Ao","Le","Hui","Min","Ji","Tiao","Qu","Jian","Sao","Man","Xi","Qiu","Biao","Ji","Ji","Zhu","Jiang","Qiu","Zhuan","Yong","Zhang","Kang","Xue","Bie","Jue","Qu","Xiang","Bo","Jiao","Xun","Su","Huang","Zun","Shan","Shan","Fan","Jue","Lin","Xun","Miao","Xi","Eso","Kyou","Fen","Guan","Hou","Kuai","Zei","Sao","Zhan","Gan","Gui","Sheng","Li","Chang","Hatahata","Shiira","Mutsu","Ru","Ji","Xu","Huo","Shiira","Li","Lie","Li","Mie","Zhen","Xiang","E","Lu","Guan","Li","Xian","Yu","Dao","Ji","You","Tun","Lu","Fang","Ba","He","Bo","Ping","Nian","Lu","You","Zha","Fu","Bo","Bao","Hou","Pi","Tai","Gui","Jie","Kao","Wei","Er","Tong","Ze","Hou","Kuai","Ji","Jiao","Xian","Za","Xiang","Xun","Geng","Li","Lian","Jian","Li","Shi","Tiao","Gun","Sha","Wan","Jun","Ji","Yong","Qing","Ling","Qi","Zou","Fei","Kun","Chang","Gu","Ni","Nian","Diao","Jing","Shen","Shi","Zi","Fen","Die","Bi","Chang","Shi","Wen","Wei","Sai","E","Qiu","Fu","Huang","Quan","Jiang","Bian","Sao","Ao","Qi","Ta","Yin","Yao","Fang","Jian","Le","Biao","Xue","Bie","Man","Min","Yong","Wei","Xi","Jue","Shan","Lin","Zun","Huo","Gan","Li","Zhan","Guan","Niao","Yi","Fu","Li","Jiu","Bu","Yan","Fu","Diao","Ji","Feng","Nio","Gan","Shi","Feng","Ming","Bao","Yuan","Zhi","Hu","Qin","Fu","Fen","Wen","Jian","Shi","Yu"],["Fou","Yiao","Jue","Jue","Pi","Huan","Zhen","Bao","Yan","Ya","Zheng","Fang","Feng","Wen","Ou","Te","Jia","Nu","Ling","Mie","Fu","Tuo","Wen","Li","Bian","Zhi","Ge","Yuan","Zi","Qu","Xiao","Zhi","Dan","Ju","You","Gu","Zhong","Yu","Yang","Rong","Ya","Tie","Yu","Shigi","Ying","Zhui","Wu","Er","Gua","Ai","Zhi","Yan","Heng","Jiao","Ji","Lie","Zhu","Ren","Yi","Hong","Luo","Ru","Mou","Ge","Ren","Jiao","Xiu","Zhou","Zhi","Luo","Chidori","Toki","Ten","Luan","Jia","Ji","Yu","Huan","Tuo","Bu","Wu","Juan","Yu","Bo","Xun","Xun","Bi","Xi","Jun","Ju","Tu","Jing","Ti","E","E","Kuang","Hu","Wu","Shen","Lai","Ikaruga","Kakesu","Lu","Ping","Shu","Fu","An","Zhao","Peng","Qin","Qian","Bei","Diao","Lu","Que","Jian","Ju","Tu","Ya","Yuan","Qi","Li","Ye","Zhui","Kong","Zhui","Kun","Sheng","Qi","Jing","Yi","Yi","Jing","Zi","Lai","Dong","Qi","Chun","Geng","Ju","Qu","Isuka","Kikuitadaki","Ji","Shu",,"Chi","Miao","Rou","An","Qiu","Ti","Hu","Ti","E","Jie","Mao","Fu","Chun","Tu","Yan","He","Yuan","Pian","Yun","Mei","Hu","Ying","Dun","Mu","Ju","Tsugumi","Cang","Fang","Gu","Ying","Yuan","Xuan","Weng","Shi","He","Chu","Tang","Xia","Ruo","Liu","Ji","Gu","Jian","Zhun","Han","Zi","Zi","Ni","Yao","Yan","Ji","Li","Tian","Kou","Ti","Ti","Ni","Tu","Ma","Jiao","Gao","Tian","Chen","Li","Zhuan","Zhe","Ao","Yao","Yi","Ou","Chi","Zhi","Liao","Rong","Lou","Bi","Shuang","Zhuo","Yu","Wu","Jue","Yin","Quan","Si","Jiao","Yi","Hua","Bi","Ying","Su","Huang","Fan","Jiao","Liao","Yan","Kao","Jiu","Xian","Xian","Tu","Mai","Zun","Yu","Ying","Lu","Tuan","Xian","Xue","Yi","Pi"],["Shu","Luo","Qi","Yi","Ji","Zhe","Yu","Zhan","Ye","Yang","Pi","Ning","Huo","Mi","Ying","Meng","Di","Yue","Yu","Lei","Bao","Lu","He","Long","Shuang","Yue","Ying","Guan","Qu","Li","Luan","Niao","Jiu","Ji","Yuan","Ming","Shi","Ou","Ya","Cang","Bao","Zhen","Gu","Dong","Lu","Ya","Xiao","Yang","Ling","Zhi","Qu","Yuan","Xue","Tuo","Si","Zhi","Er","Gua","Xiu","Heng","Zhou","Ge","Luan","Hong","Wu","Bo","Li","Juan","Hu","E","Yu","Xian","Ti","Wu","Que","Miao","An","Kun","Bei","Peng","Qian","Chun","Geng","Yuan","Su","Hu","He","E","Gu","Qiu","Zi","Mei","Mu","Ni","Yao","Weng","Liu","Ji","Ni","Jian","He","Yi","Ying","Zhe","Liao","Liao","Jiao","Jiu","Yu","Lu","Xuan","Zhan","Ying","Huo","Meng","Guan","Shuang","Lu","Jin","Ling","Jian","Xian","Cuo","Jian","Jian","Yan","Cuo","Lu","You","Cu","Ji","Biao","Cu","Biao","Zhu","Jun","Zhu","Jian","Mi","Mi","Wu","Liu","Chen","Jun","Lin","Ni","Qi","Lu","Jiu","Jun","Jing","Li","Xiang","Yan","Jia","Mi","Li","She","Zhang","Lin","Jing","Ji","Ling","Yan","Cu","Mai","Mai","Ge","Chao","Fu","Mian","Mian","Fu","Pao","Qu","Qu","Mou","Fu","Xian","Lai","Qu","Mian",,"Feng","Fu","Qu","Mian","Ma","Mo","Mo","Hui","Ma","Zou","Nen","Fen","Huang","Huang","Jin","Guang","Tian","Tou","Heng","Xi","Kuang","Heng","Shu","Li","Nian","Chi","Hei","Hei","Yi","Qian","Dan","Xi","Tuan","Mo","Mo","Qian","Dai","Chu","You","Dian","Yi","Xia","Yan","Qu","Mei","Yan","Jing","Yu","Li","Dang","Du","Can","Yin","An","Yan","Tan","An","Zhen","Dai","Can","Yi","Mei","Dan","Yan","Du","Lu","Zhi","Fen","Fu","Fu","Min","Min","Yuan"],["Cu","Qu","Chao","Wa","Zhu","Zhi","Mang","Ao","Bie","Tuo","Bi","Yuan","Chao","Tuo","Ding","Mi","Nai","Ding","Zi","Gu","Gu","Dong","Fen","Tao","Yuan","Pi","Chang","Gao","Qi","Yuan","Tang","Teng","Shu","Shu","Fen","Fei","Wen","Ba","Diao","Tuo","Tong","Qu","Sheng","Shi","You","Shi","Ting","Wu","Nian","Jing","Hun","Ju","Yan","Tu","Ti","Xi","Xian","Yan","Lei","Bi","Yao","Qiu","Han","Wu","Wu","Hou","Xi","Ge","Zha","Xiu","Weng","Zha","Nong","Nang","Qi","Zhai","Ji","Zi","Ji","Ji","Qi","Ji","Chi","Chen","Chen","He","Ya","Ken","Xie","Pao","Cuo","Shi","Zi","Chi","Nian","Ju","Tiao","Ling","Ling","Chu","Quan","Xie","Ken","Nie","Jiu","Yao","Chuo","Kun","Yu","Chu","Yi","Ni","Cuo","Zou","Qu","Nen","Xian","Ou","E","Wo","Yi","Chuo","Zou","Dian","Chu","Jin","Ya","Chi","Chen","He","Ken","Ju","Ling","Pao","Tiao","Zi","Ken","Yu","Chuo","Qu","Wo","Long","Pang","Gong","Pang","Yan","Long","Long","Gong","Kan","Ta","Ling","Ta","Long","Gong","Kan","Gui","Qiu","Bie","Gui","Yue","Chui","He","Jue","Xie","Yu"],["it","ix","i","ip","iet","iex","ie","iep","at","ax","a","ap","uox","uo","uop","ot","ox","o","op","ex","e","wu","bit","bix","bi","bip","biet","biex","bie","biep","bat","bax","ba","bap","buox","buo","buop","bot","box","bo","bop","bex","be","bep","but","bux","bu","bup","burx","bur","byt","byx","by","byp","byrx","byr","pit","pix","pi","pip","piex","pie","piep","pat","pax","pa","pap","puox","puo","puop","pot","pox","po","pop","put","pux","pu","pup","purx","pur","pyt","pyx","py","pyp","pyrx","pyr","bbit","bbix","bbi","bbip","bbiet","bbiex","bbie","bbiep","bbat","bbax","bba","bbap","bbuox","bbuo","bbuop","bbot","bbox","bbo","bbop","bbex","bbe","bbep","bbut","bbux","bbu","bbup","bburx","bbur","bbyt","bbyx","bby","bbyp","nbit","nbix","nbi","nbip","nbiex","nbie","nbiep","nbat","nbax","nba","nbap","nbot","nbox","nbo","nbop","nbut","nbux","nbu","nbup","nburx","nbur","nbyt","nbyx","nby","nbyp","nbyrx","nbyr","hmit","hmix","hmi","hmip","hmiex","hmie","hmiep","hmat","hmax","hma","hmap","hmuox","hmuo","hmuop","hmot","hmox","hmo","hmop","hmut","hmux","hmu","hmup","hmurx","hmur","hmyx","hmy","hmyp","hmyrx","hmyr","mit","mix","mi","mip","miex","mie","miep","mat","max","ma","map","muot","muox","muo","muop","mot","mox","mo","mop","mex","me","mut","mux","mu","mup","murx","mur","myt","myx","my","myp","fit","fix","fi","fip","fat","fax","fa","fap","fox","fo","fop","fut","fux","fu","fup","furx","fur","fyt","fyx","fy","fyp","vit","vix","vi","vip","viet","viex","vie","viep","vat","vax","va","vap","vot","vox","vo","vop","vex","vep","vut","vux","vu","vup","vurx","vur","vyt","vyx","vy","vyp","vyrx","vyr"],["dit","dix","di","dip","diex","die","diep","dat","dax","da","dap","duox","duo","dot","dox","do","dop","dex","de","dep","dut","dux","du","dup","durx","dur","tit","tix","ti","tip","tiex","tie","tiep","tat","tax","ta","tap","tuot","tuox","tuo","tuop","tot","tox","to","top","tex","te","tep","tut","tux","tu","tup","turx","tur","ddit","ddix","ddi","ddip","ddiex","ddie","ddiep","ddat","ddax","dda","ddap","dduox","dduo","dduop","ddot","ddox","ddo","ddop","ddex","dde","ddep","ddut","ddux","ddu","ddup","ddurx","ddur","ndit","ndix","ndi","ndip","ndiex","ndie","ndat","ndax","nda","ndap","ndot","ndox","ndo","ndop","ndex","nde","ndep","ndut","ndux","ndu","ndup","ndurx","ndur","hnit","hnix","hni","hnip","hniet","hniex","hnie","hniep","hnat","hnax","hna","hnap","hnuox","hnuo","hnot","hnox","hnop","hnex","hne","hnep","hnut","nit","nix","ni","nip","niex","nie","niep","nax","na","nap","nuox","nuo","nuop","not","nox","no","nop","nex","ne","nep","nut","nux","nu","nup","nurx","nur","hlit","hlix","hli","hlip","hliex","hlie","hliep","hlat","hlax","hla","hlap","hluox","hluo","hluop","hlox","hlo","hlop","hlex","hle","hlep","hlut","hlux","hlu","hlup","hlurx","hlur","hlyt","hlyx","hly","hlyp","hlyrx","hlyr","lit","lix","li","lip","liet","liex","lie","liep","lat","lax","la","lap","luot","luox","luo","luop","lot","lox","lo","lop","lex","le","lep","lut","lux","lu","lup","lurx","lur","lyt","lyx","ly","lyp","lyrx","lyr","git","gix","gi","gip","giet","giex","gie","giep","gat","gax","ga","gap","guot","guox","guo","guop","got","gox","go","gop","get","gex","ge","gep","gut","gux","gu","gup","gurx","gur","kit","kix","ki","kip","kiex","kie","kiep","kat"],["kax","ka","kap","kuox","kuo","kuop","kot","kox","ko","kop","ket","kex","ke","kep","kut","kux","ku","kup","kurx","kur","ggit","ggix","ggi","ggiex","ggie","ggiep","ggat","ggax","gga","ggap","gguot","gguox","gguo","gguop","ggot","ggox","ggo","ggop","gget","ggex","gge","ggep","ggut","ggux","ggu","ggup","ggurx","ggur","mgiex","mgie","mgat","mgax","mga","mgap","mguox","mguo","mguop","mgot","mgox","mgo","mgop","mgex","mge","mgep","mgut","mgux","mgu","mgup","mgurx","mgur","hxit","hxix","hxi","hxip","hxiet","hxiex","hxie","hxiep","hxat","hxax","hxa","hxap","hxuot","hxuox","hxuo","hxuop","hxot","hxox","hxo","hxop","hxex","hxe","hxep","ngiex","ngie","ngiep","ngat","ngax","nga","ngap","nguot","nguox","nguo","ngot","ngox","ngo","ngop","ngex","nge","ngep","hit","hiex","hie","hat","hax","ha","hap","huot","huox","huo","huop","hot","hox","ho","hop","hex","he","hep","wat","wax","wa","wap","wuox","wuo","wuop","wox","wo","wop","wex","we","wep","zit","zix","zi","zip","ziex","zie","ziep","zat","zax","za","zap","zuox","zuo","zuop","zot","zox","zo","zop","zex","ze","zep","zut","zux","zu","zup","zurx","zur","zyt","zyx","zy","zyp","zyrx","zyr","cit","cix","ci","cip","ciet","ciex","cie","ciep","cat","cax","ca","cap","cuox","cuo","cuop","cot","cox","co","cop","cex","ce","cep","cut","cux","cu","cup","curx","cur","cyt","cyx","cy","cyp","cyrx","cyr","zzit","zzix","zzi","zzip","zziet","zziex","zzie","zziep","zzat","zzax","zza","zzap","zzox","zzo","zzop","zzex","zze","zzep","zzux","zzu","zzup","zzurx","zzur","zzyt","zzyx","zzy","zzyp","zzyrx","zzyr","nzit","nzix","nzi","nzip","nziex","nzie","nziep","nzat","nzax","nza","nzap","nzuox","nzuo","nzox","nzop","nzex","nze","nzux","nzu"],["nzup","nzurx","nzur","nzyt","nzyx","nzy","nzyp","nzyrx","nzyr","sit","six","si","sip","siex","sie","siep","sat","sax","sa","sap","suox","suo","suop","sot","sox","so","sop","sex","se","sep","sut","sux","su","sup","surx","sur","syt","syx","sy","syp","syrx","syr","ssit","ssix","ssi","ssip","ssiex","ssie","ssiep","ssat","ssax","ssa","ssap","ssot","ssox","sso","ssop","ssex","sse","ssep","ssut","ssux","ssu","ssup","ssyt","ssyx","ssy","ssyp","ssyrx","ssyr","zhat","zhax","zha","zhap","zhuox","zhuo","zhuop","zhot","zhox","zho","zhop","zhet","zhex","zhe","zhep","zhut","zhux","zhu","zhup","zhurx","zhur","zhyt","zhyx","zhy","zhyp","zhyrx","zhyr","chat","chax","cha","chap","chuot","chuox","chuo","chuop","chot","chox","cho","chop","chet","chex","che","chep","chux","chu","chup","churx","chur","chyt","chyx","chy","chyp","chyrx","chyr","rrax","rra","rruox","rruo","rrot","rrox","rro","rrop","rret","rrex","rre","rrep","rrut","rrux","rru","rrup","rrurx","rrur","rryt","rryx","rry","rryp","rryrx","rryr","nrat","nrax","nra","nrap","nrox","nro","nrop","nret","nrex","nre","nrep","nrut","nrux","nru","nrup","nrurx","nrur","nryt","nryx","nry","nryp","nryrx","nryr","shat","shax","sha","shap","shuox","shuo","shuop","shot","shox","sho","shop","shet","shex","she","shep","shut","shux","shu","shup","shurx","shur","shyt","shyx","shy","shyp","shyrx","shyr","rat","rax","ra","rap","ruox","ruo","ruop","rot","rox","ro","rop","rex","re","rep","rut","rux","ru","rup","rurx","rur","ryt","ryx","ry","ryp","ryrx","ryr","jit","jix","ji","jip","jiet","jiex","jie","jiep","juot","juox","juo","juop","jot","jox","jo","jop","jut","jux","ju","jup","jurx","jur","jyt","jyx","jy","jyp","jyrx","jyr","qit","qix","qi","qip"],["qiet","qiex","qie","qiep","quot","quox","quo","quop","qot","qox","qo","qop","qut","qux","qu","qup","qurx","qur","qyt","qyx","qy","qyp","qyrx","qyr","jjit","jjix","jji","jjip","jjiet","jjiex","jjie","jjiep","jjuox","jjuo","jjuop","jjot","jjox","jjo","jjop","jjut","jjux","jju","jjup","jjurx","jjur","jjyt","jjyx","jjy","jjyp","njit","njix","nji","njip","njiet","njiex","njie","njiep","njuox","njuo","njot","njox","njo","njop","njux","nju","njup","njurx","njur","njyt","njyx","njy","njyp","njyrx","njyr","nyit","nyix","nyi","nyip","nyiet","nyiex","nyie","nyiep","nyuox","nyuo","nyuop","nyot","nyox","nyo","nyop","nyut","nyux","nyu","nyup","xit","xix","xi","xip","xiet","xiex","xie","xiep","xuox","xuo","xot","xox","xo","xop","xyt","xyx","xy","xyp","xyrx","xyr","yit","yix","yi","yip","yiet","yiex","yie","yiep","yuot","yuox","yuo","yuop","yot","yox","yo","yop","yut","yux","yu","yup","yurx","yur","yyt","yyx","yy","yyp","yyrx","yyr",,,,"Qot","Li","Kit","Nyip","Cyp","Ssi","Ggop","Gep","Mi","Hxit","Lyr","Bbut","Mop","Yo","Put","Hxuo","Tat","Ga",,,"Ddur","Bur","Gguo","Nyop","Tu","Op","Jjut","Zot","Pyt","Hmo","Yit","Vur","Shy","Vep","Za","Jo",,"Jjy","Got","Jjie","Wo","Du","Shur","Lie","Cy","Cuop","Cip","Hxop","Shat",,"Shop","Che","Zziet",,"Ke"],[],[],[,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,"A","a","A","a","HENG","heng","TZ","tz","3","3","4","4","4","4","F","S","AA","aa","AO","ao","AU","au","AV","av","AV-","av-","AY","ay","C","c","K","k","K","k","K","k","L","l","L","l","O","o","O","o","OO","oo","P","p","P","p","P","p","Q","q","Q","q","R","r","R","r","V","v","VY","vy","Z","z","TH","th","TH","th","Y","y","ET","et","IS","is","CON","con","US","us","dum","lum","num","rum","RUM","tum","um","D","d","F","f","G","G","g","L","l","R","r","S","s","T","t","^",":","=","'","'","H","l",".","N","n","C","c","c","h","B","b","F","f","AE","ae","OE","oe","UE","ue","G","g","K","k","N","n","R","r","S","s","H","E","G","L","I","Q","K","T","J","CHI","B","b","O","o","U","u",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,"I","H","oe","M","F","P","M","I","M1"],[],[],[],[],["ga","gag","gagg","gags","gan","ganj","ganh","gad","gal","galg","galm","galb","gals","galt","galp","galh","gam","gab","gabs","gas","gass","gang","gaj","gac","gak","gat","gap","gah","gae","gaeg","gaegg","gaegs","gaen","gaenj","gaenh","gaed","gael","gaelg","gaelm","gaelb","gaels","gaelt","gaelp","gaelh","gaem","gaeb","gaebs","gaes","gaess","gaeng","gaej","gaec","gaek","gaet","gaep","gaeh","gya","gyag","gyagg","gyags","gyan","gyanj","gyanh","gyad","gyal","gyalg","gyalm","gyalb","gyals","gyalt","gyalp","gyalh","gyam","gyab","gyabs","gyas","gyass","gyang","gyaj","gyac","gyak","gyat","gyap","gyah","gyae","gyaeg","gyaegg","gyaegs","gyaen","gyaenj","gyaenh","gyaed","gyael","gyaelg","gyaelm","gyaelb","gyaels","gyaelt","gyaelp","gyaelh","gyaem","gyaeb","gyaebs","gyaes","gyaess","gyaeng","gyaej","gyaec","gyaek","gyaet","gyaep","gyaeh","geo","geog","geogg","geogs","geon","geonj","geonh","geod","geol","geolg","geolm","geolb","geols","geolt","geolp","geolh","geom","geob","geobs","geos","geoss","geong","geoj","geoc","geok","geot","geop","geoh","ge","geg","gegg","gegs","gen","genj","genh","ged","gel","gelg","gelm","gelb","gels","gelt","gelp","gelh","gem","geb","gebs","ges","gess","geng","gej","gec","gek","get","gep","geh","gyeo","gyeog","gyeogg","gyeogs","gyeon","gyeonj","gyeonh","gyeod","gyeol","gyeolg","gyeolm","gyeolb","gyeols","gyeolt","gyeolp","gyeolh","gyeom","gyeob","gyeobs","gyeos","gyeoss","gyeong","gyeoj","gyeoc","gyeok","gyeot","gyeop","gyeoh","gye","gyeg","gyegg","gyegs","gyen","gyenj","gyenh","gyed","gyel","gyelg","gyelm","gyelb","gyels","gyelt","gyelp","gyelh","gyem","gyeb","gyebs","gyes","gyess","gyeng","gyej","gyec","gyek","gyet","gyep","gyeh","go","gog","gogg","gogs","gon","gonj","gonh","god","gol","golg","golm","golb","gols","golt","golp","golh","gom","gob","gobs","gos","goss","gong","goj","goc","gok","got","gop","goh","gwa","gwag","gwagg","gwags"],["gwan","gwanj","gwanh","gwad","gwal","gwalg","gwalm","gwalb","gwals","gwalt","gwalp","gwalh","gwam","gwab","gwabs","gwas","gwass","gwang","gwaj","gwac","gwak","gwat","gwap","gwah","gwae","gwaeg","gwaegg","gwaegs","gwaen","gwaenj","gwaenh","gwaed","gwael","gwaelg","gwaelm","gwaelb","gwaels","gwaelt","gwaelp","gwaelh","gwaem","gwaeb","gwaebs","gwaes","gwaess","gwaeng","gwaej","gwaec","gwaek","gwaet","gwaep","gwaeh","goe","goeg","goegg","goegs","goen","goenj","goenh","goed","goel","goelg","goelm","goelb","goels","goelt","goelp","goelh","goem","goeb","goebs","goes","goess","goeng","goej","goec","goek","goet","goep","goeh","gyo","gyog","gyogg","gyogs","gyon","gyonj","gyonh","gyod","gyol","gyolg","gyolm","gyolb","gyols","gyolt","gyolp","gyolh","gyom","gyob","gyobs","gyos","gyoss","gyong","gyoj","gyoc","gyok","gyot","gyop","gyoh","gu","gug","gugg","gugs","gun","gunj","gunh","gud","gul","gulg","gulm","gulb","guls","gult","gulp","gulh","gum","gub","gubs","gus","guss","gung","guj","guc","guk","gut","gup","guh","gweo","gweog","gweogg","gweogs","gweon","gweonj","gweonh","gweod","gweol","gweolg","gweolm","gweolb","gweols","gweolt","gweolp","gweolh","gweom","gweob","gweobs","gweos","gweoss","gweong","gweoj","gweoc","gweok","gweot","gweop","gweoh","gwe","gweg","gwegg","gwegs","gwen","gwenj","gwenh","gwed","gwel","gwelg","gwelm","gwelb","gwels","gwelt","gwelp","gwelh","gwem","gweb","gwebs","gwes","gwess","gweng","gwej","gwec","gwek","gwet","gwep","gweh","gwi","gwig","gwigg","gwigs","gwin","gwinj","gwinh","gwid","gwil","gwilg","gwilm","gwilb","gwils","gwilt","gwilp","gwilh","gwim","gwib","gwibs","gwis","gwiss","gwing","gwij","gwic","gwik","gwit","gwip","gwih","gyu","gyug","gyugg","gyugs","gyun","gyunj","gyunh","gyud","gyul","gyulg","gyulm","gyulb","gyuls","gyult","gyulp","gyulh","gyum","gyub","gyubs","gyus","gyuss","gyung","gyuj","gyuc","gyuk","gyut","gyup","gyuh","geu","geug","geugg","geugs","geun","geunj","geunh","geud"],["geul","geulg","geulm","geulb","geuls","geult","geulp","geulh","geum","geub","geubs","geus","geuss","geung","geuj","geuc","geuk","geut","geup","geuh","gyi","gyig","gyigg","gyigs","gyin","gyinj","gyinh","gyid","gyil","gyilg","gyilm","gyilb","gyils","gyilt","gyilp","gyilh","gyim","gyib","gyibs","gyis","gyiss","gying","gyij","gyic","gyik","gyit","gyip","gyih","gi","gig","gigg","gigs","gin","ginj","ginh","gid","gil","gilg","gilm","gilb","gils","gilt","gilp","gilh","gim","gib","gibs","gis","giss","ging","gij","gic","gik","git","gip","gih","gga","ggag","ggagg","ggags","ggan","gganj","gganh","ggad","ggal","ggalg","ggalm","ggalb","ggals","ggalt","ggalp","ggalh","ggam","ggab","ggabs","ggas","ggass","ggang","ggaj","ggac","ggak","ggat","ggap","ggah","ggae","ggaeg","ggaegg","ggaegs","ggaen","ggaenj","ggaenh","ggaed","ggael","ggaelg","ggaelm","ggaelb","ggaels","ggaelt","ggaelp","ggaelh","ggaem","ggaeb","ggaebs","ggaes","ggaess","ggaeng","ggaej","ggaec","ggaek","ggaet","ggaep","ggaeh","ggya","ggyag","ggyagg","ggyags","ggyan","ggyanj","ggyanh","ggyad","ggyal","ggyalg","ggyalm","ggyalb","ggyals","ggyalt","ggyalp","ggyalh","ggyam","ggyab","ggyabs","ggyas","ggyass","ggyang","ggyaj","ggyac","ggyak","ggyat","ggyap","ggyah","ggyae","ggyaeg","ggyaegg","ggyaegs","ggyaen","ggyaenj","ggyaenh","ggyaed","ggyael","ggyaelg","ggyaelm","ggyaelb","ggyaels","ggyaelt","ggyaelp","ggyaelh","ggyaem","ggyaeb","ggyaebs","ggyaes","ggyaess","ggyaeng","ggyaej","ggyaec","ggyaek","ggyaet","ggyaep","ggyaeh","ggeo","ggeog","ggeogg","ggeogs","ggeon","ggeonj","ggeonh","ggeod","ggeol","ggeolg","ggeolm","ggeolb","ggeols","ggeolt","ggeolp","ggeolh","ggeom","ggeob","ggeobs","ggeos","ggeoss","ggeong","ggeoj","ggeoc","ggeok","ggeot","ggeop","ggeoh","gge","ggeg","ggegg","ggegs","ggen","ggenj","ggenh","gged","ggel","ggelg","ggelm","ggelb","ggels","ggelt","ggelp","ggelh","ggem","ggeb","ggebs","gges","ggess","ggeng","ggej","ggec","ggek","gget","ggep","ggeh","ggyeo","ggyeog","ggyeogg","ggyeogs","ggyeon","ggyeonj","ggyeonh","ggyeod","ggyeol","ggyeolg","ggyeolm","ggyeolb"],["ggyeols","ggyeolt","ggyeolp","ggyeolh","ggyeom","ggyeob","ggyeobs","ggyeos","ggyeoss","ggyeong","ggyeoj","ggyeoc","ggyeok","ggyeot","ggyeop","ggyeoh","ggye","ggyeg","ggyegg","ggyegs","ggyen","ggyenj","ggyenh","ggyed","ggyel","ggyelg","ggyelm","ggyelb","ggyels","ggyelt","ggyelp","ggyelh","ggyem","ggyeb","ggyebs","ggyes","ggyess","ggyeng","ggyej","ggyec","ggyek","ggyet","ggyep","ggyeh","ggo","ggog","ggogg","ggogs","ggon","ggonj","ggonh","ggod","ggol","ggolg","ggolm","ggolb","ggols","ggolt","ggolp","ggolh","ggom","ggob","ggobs","ggos","ggoss","ggong","ggoj","ggoc","ggok","ggot","ggop","ggoh","ggwa","ggwag","ggwagg","ggwags","ggwan","ggwanj","ggwanh","ggwad","ggwal","ggwalg","ggwalm","ggwalb","ggwals","ggwalt","ggwalp","ggwalh","ggwam","ggwab","ggwabs","ggwas","ggwass","ggwang","ggwaj","ggwac","ggwak","ggwat","ggwap","ggwah","ggwae","ggwaeg","ggwaegg","ggwaegs","ggwaen","ggwaenj","ggwaenh","ggwaed","ggwael","ggwaelg","ggwaelm","ggwaelb","ggwaels","ggwaelt","ggwaelp","ggwaelh","ggwaem","ggwaeb","ggwaebs","ggwaes","ggwaess","ggwaeng","ggwaej","ggwaec","ggwaek","ggwaet","ggwaep","ggwaeh","ggoe","ggoeg","ggoegg","ggoegs","ggoen","ggoenj","ggoenh","ggoed","ggoel","ggoelg","ggoelm","ggoelb","ggoels","ggoelt","ggoelp","ggoelh","ggoem","ggoeb","ggoebs","ggoes","ggoess","ggoeng","ggoej","ggoec","ggoek","ggoet","ggoep","ggoeh","ggyo","ggyog","ggyogg","ggyogs","ggyon","ggyonj","ggyonh","ggyod","ggyol","ggyolg","ggyolm","ggyolb","ggyols","ggyolt","ggyolp","ggyolh","ggyom","ggyob","ggyobs","ggyos","ggyoss","ggyong","ggyoj","ggyoc","ggyok","ggyot","ggyop","ggyoh","ggu","ggug","ggugg","ggugs","ggun","ggunj","ggunh","ggud","ggul","ggulg","ggulm","ggulb","gguls","ggult","ggulp","ggulh","ggum","ggub","ggubs","ggus","gguss","ggung","gguj","gguc","gguk","ggut","ggup","gguh","ggweo","ggweog","ggweogg","ggweogs","ggweon","ggweonj","ggweonh","ggweod","ggweol","ggweolg","ggweolm","ggweolb","ggweols","ggweolt","ggweolp","ggweolh","ggweom","ggweob","ggweobs","ggweos","ggweoss","ggweong","ggweoj","ggweoc","ggweok","ggweot","ggweop","ggweoh","ggwe","ggweg","ggwegg","ggwegs","ggwen","ggwenj","ggwenh","ggwed","ggwel","ggwelg","ggwelm","ggwelb","ggwels","ggwelt","ggwelp","ggwelh"],["ggwem","ggweb","ggwebs","ggwes","ggwess","ggweng","ggwej","ggwec","ggwek","ggwet","ggwep","ggweh","ggwi","ggwig","ggwigg","ggwigs","ggwin","ggwinj","ggwinh","ggwid","ggwil","ggwilg","ggwilm","ggwilb","ggwils","ggwilt","ggwilp","ggwilh","ggwim","ggwib","ggwibs","ggwis","ggwiss","ggwing","ggwij","ggwic","ggwik","ggwit","ggwip","ggwih","ggyu","ggyug","ggyugg","ggyugs","ggyun","ggyunj","ggyunh","ggyud","ggyul","ggyulg","ggyulm","ggyulb","ggyuls","ggyult","ggyulp","ggyulh","ggyum","ggyub","ggyubs","ggyus","ggyuss","ggyung","ggyuj","ggyuc","ggyuk","ggyut","ggyup","ggyuh","ggeu","ggeug","ggeugg","ggeugs","ggeun","ggeunj","ggeunh","ggeud","ggeul","ggeulg","ggeulm","ggeulb","ggeuls","ggeult","ggeulp","ggeulh","ggeum","ggeub","ggeubs","ggeus","ggeuss","ggeung","ggeuj","ggeuc","ggeuk","ggeut","ggeup","ggeuh","ggyi","ggyig","ggyigg","ggyigs","ggyin","ggyinj","ggyinh","ggyid","ggyil","ggyilg","ggyilm","ggyilb","ggyils","ggyilt","ggyilp","ggyilh","ggyim","ggyib","ggyibs","ggyis","ggyiss","ggying","ggyij","ggyic","ggyik","ggyit","ggyip","ggyih","ggi","ggig","ggigg","ggigs","ggin","gginj","gginh","ggid","ggil","ggilg","ggilm","ggilb","ggils","ggilt","ggilp","ggilh","ggim","ggib","ggibs","ggis","ggiss","gging","ggij","ggic","ggik","ggit","ggip","ggih","na","nag","nagg","nags","nan","nanj","nanh","nad","nal","nalg","nalm","nalb","nals","nalt","nalp","nalh","nam","nab","nabs","nas","nass","nang","naj","nac","nak","nat","nap","nah","nae","naeg","naegg","naegs","naen","naenj","naenh","naed","nael","naelg","naelm","naelb","naels","naelt","naelp","naelh","naem","naeb","naebs","naes","naess","naeng","naej","naec","naek","naet","naep","naeh","nya","nyag","nyagg","nyags","nyan","nyanj","nyanh","nyad","nyal","nyalg","nyalm","nyalb","nyals","nyalt","nyalp","nyalh","nyam","nyab","nyabs","nyas","nyass","nyang","nyaj","nyac","nyak","nyat","nyap","nyah","nyae","nyaeg","nyaegg","nyaegs","nyaen","nyaenj","nyaenh","nyaed","nyael","nyaelg","nyaelm","nyaelb","nyaels","nyaelt","nyaelp","nyaelh","nyaem","nyaeb","nyaebs","nyaes"],["nyaess","nyaeng","nyaej","nyaec","nyaek","nyaet","nyaep","nyaeh","neo","neog","neogg","neogs","neon","neonj","neonh","neod","neol","neolg","neolm","neolb","neols","neolt","neolp","neolh","neom","neob","neobs","neos","neoss","neong","neoj","neoc","neok","neot","neop","neoh","ne","neg","negg","negs","nen","nenj","nenh","ned","nel","nelg","nelm","nelb","nels","nelt","nelp","nelh","nem","neb","nebs","nes","ness","neng","nej","nec","nek","net","nep","neh","nyeo","nyeog","nyeogg","nyeogs","nyeon","nyeonj","nyeonh","nyeod","nyeol","nyeolg","nyeolm","nyeolb","nyeols","nyeolt","nyeolp","nyeolh","nyeom","nyeob","nyeobs","nyeos","nyeoss","nyeong","nyeoj","nyeoc","nyeok","nyeot","nyeop","nyeoh","nye","nyeg","nyegg","nyegs","nyen","nyenj","nyenh","nyed","nyel","nyelg","nyelm","nyelb","nyels","nyelt","nyelp","nyelh","nyem","nyeb","nyebs","nyes","nyess","nyeng","nyej","nyec","nyek","nyet","nyep","nyeh","no","nog","nogg","nogs","non","nonj","nonh","nod","nol","nolg","nolm","nolb","nols","nolt","nolp","nolh","nom","nob","nobs","nos","noss","nong","noj","noc","nok","not","nop","noh","nwa","nwag","nwagg","nwags","nwan","nwanj","nwanh","nwad","nwal","nwalg","nwalm","nwalb","nwals","nwalt","nwalp","nwalh","nwam","nwab","nwabs","nwas","nwass","nwang","nwaj","nwac","nwak","nwat","nwap","nwah","nwae","nwaeg","nwaegg","nwaegs","nwaen","nwaenj","nwaenh","nwaed","nwael","nwaelg","nwaelm","nwaelb","nwaels","nwaelt","nwaelp","nwaelh","nwaem","nwaeb","nwaebs","nwaes","nwaess","nwaeng","nwaej","nwaec","nwaek","nwaet","nwaep","nwaeh","noe","noeg","noegg","noegs","noen","noenj","noenh","noed","noel","noelg","noelm","noelb","noels","noelt","noelp","noelh","noem","noeb","noebs","noes","noess","noeng","noej","noec","noek","noet","noep","noeh","nyo","nyog","nyogg","nyogs","nyon","nyonj","nyonh","nyod","nyol","nyolg","nyolm","nyolb","nyols","nyolt","nyolp","nyolh","nyom","nyob","nyobs","nyos","nyoss","nyong","nyoj","nyoc"],["nyok","nyot","nyop","nyoh","nu","nug","nugg","nugs","nun","nunj","nunh","nud","nul","nulg","nulm","nulb","nuls","nult","nulp","nulh","num","nub","nubs","nus","nuss","nung","nuj","nuc","nuk","nut","nup","nuh","nweo","nweog","nweogg","nweogs","nweon","nweonj","nweonh","nweod","nweol","nweolg","nweolm","nweolb","nweols","nweolt","nweolp","nweolh","nweom","nweob","nweobs","nweos","nweoss","nweong","nweoj","nweoc","nweok","nweot","nweop","nweoh","nwe","nweg","nwegg","nwegs","nwen","nwenj","nwenh","nwed","nwel","nwelg","nwelm","nwelb","nwels","nwelt","nwelp","nwelh","nwem","nweb","nwebs","nwes","nwess","nweng","nwej","nwec","nwek","nwet","nwep","nweh","nwi","nwig","nwigg","nwigs","nwin","nwinj","nwinh","nwid","nwil","nwilg","nwilm","nwilb","nwils","nwilt","nwilp","nwilh","nwim","nwib","nwibs","nwis","nwiss","nwing","nwij","nwic","nwik","nwit","nwip","nwih","nyu","nyug","nyugg","nyugs","nyun","nyunj","nyunh","nyud","nyul","nyulg","nyulm","nyulb","nyuls","nyult","nyulp","nyulh","nyum","nyub","nyubs","nyus","nyuss","nyung","nyuj","nyuc","nyuk","nyut","nyup","nyuh","neu","neug","neugg","neugs","neun","neunj","neunh","neud","neul","neulg","neulm","neulb","neuls","neult","neulp","neulh","neum","neub","neubs","neus","neuss","neung","neuj","neuc","neuk","neut","neup","neuh","nyi","nyig","nyigg","nyigs","nyin","nyinj","nyinh","nyid","nyil","nyilg","nyilm","nyilb","nyils","nyilt","nyilp","nyilh","nyim","nyib","nyibs","nyis","nyiss","nying","nyij","nyic","nyik","nyit","nyip","nyih","ni","nig","nigg","nigs","nin","ninj","ninh","nid","nil","nilg","nilm","nilb","nils","nilt","nilp","nilh","nim","nib","nibs","nis","niss","ning","nij","nic","nik","nit","nip","nih","da","dag","dagg","dags","dan","danj","danh","dad","dal","dalg","dalm","dalb","dals","dalt","dalp","dalh","dam","dab","dabs","das","dass","dang","daj","dac","dak","dat","dap","dah"],["dae","daeg","daegg","daegs","daen","daenj","daenh","daed","dael","daelg","daelm","daelb","daels","daelt","daelp","daelh","daem","daeb","daebs","daes","daess","daeng","daej","daec","daek","daet","daep","daeh","dya","dyag","dyagg","dyags","dyan","dyanj","dyanh","dyad","dyal","dyalg","dyalm","dyalb","dyals","dyalt","dyalp","dyalh","dyam","dyab","dyabs","dyas","dyass","dyang","dyaj","dyac","dyak","dyat","dyap","dyah","dyae","dyaeg","dyaegg","dyaegs","dyaen","dyaenj","dyaenh","dyaed","dyael","dyaelg","dyaelm","dyaelb","dyaels","dyaelt","dyaelp","dyaelh","dyaem","dyaeb","dyaebs","dyaes","dyaess","dyaeng","dyaej","dyaec","dyaek","dyaet","dyaep","dyaeh","deo","deog","deogg","deogs","deon","deonj","deonh","deod","deol","deolg","deolm","deolb","deols","deolt","deolp","deolh","deom","deob","deobs","deos","deoss","deong","deoj","deoc","deok","deot","deop","deoh","de","deg","degg","degs","den","denj","denh","ded","del","delg","delm","delb","dels","delt","delp","delh","dem","deb","debs","des","dess","deng","dej","dec","dek","det","dep","deh","dyeo","dyeog","dyeogg","dyeogs","dyeon","dyeonj","dyeonh","dyeod","dyeol","dyeolg","dyeolm","dyeolb","dyeols","dyeolt","dyeolp","dyeolh","dyeom","dyeob","dyeobs","dyeos","dyeoss","dyeong","dyeoj","dyeoc","dyeok","dyeot","dyeop","dyeoh","dye","dyeg","dyegg","dyegs","dyen","dyenj","dyenh","dyed","dyel","dyelg","dyelm","dyelb","dyels","dyelt","dyelp","dyelh","dyem","dyeb","dyebs","dyes","dyess","dyeng","dyej","dyec","dyek","dyet","dyep","dyeh","do","dog","dogg","dogs","don","donj","donh","dod","dol","dolg","dolm","dolb","dols","dolt","dolp","dolh","dom","dob","dobs","dos","doss","dong","doj","doc","dok","dot","dop","doh","dwa","dwag","dwagg","dwags","dwan","dwanj","dwanh","dwad","dwal","dwalg","dwalm","dwalb","dwals","dwalt","dwalp","dwalh","dwam","dwab","dwabs","dwas","dwass","dwang","dwaj","dwac","dwak","dwat","dwap","dwah","dwae","dwaeg","dwaegg","dwaegs"],["dwaen","dwaenj","dwaenh","dwaed","dwael","dwaelg","dwaelm","dwaelb","dwaels","dwaelt","dwaelp","dwaelh","dwaem","dwaeb","dwaebs","dwaes","dwaess","dwaeng","dwaej","dwaec","dwaek","dwaet","dwaep","dwaeh","doe","doeg","doegg","doegs","doen","doenj","doenh","doed","doel","doelg","doelm","doelb","doels","doelt","doelp","doelh","doem","doeb","doebs","does","doess","doeng","doej","doec","doek","doet","doep","doeh","dyo","dyog","dyogg","dyogs","dyon","dyonj","dyonh","dyod","dyol","dyolg","dyolm","dyolb","dyols","dyolt","dyolp","dyolh","dyom","dyob","dyobs","dyos","dyoss","dyong","dyoj","dyoc","dyok","dyot","dyop","dyoh","du","dug","dugg","dugs","dun","dunj","dunh","dud","dul","dulg","dulm","dulb","duls","dult","dulp","dulh","dum","dub","dubs","dus","duss","dung","duj","duc","duk","dut","dup","duh","dweo","dweog","dweogg","dweogs","dweon","dweonj","dweonh","dweod","dweol","dweolg","dweolm","dweolb","dweols","dweolt","dweolp","dweolh","dweom","dweob","dweobs","dweos","dweoss","dweong","dweoj","dweoc","dweok","dweot","dweop","dweoh","dwe","dweg","dwegg","dwegs","dwen","dwenj","dwenh","dwed","dwel","dwelg","dwelm","dwelb","dwels","dwelt","dwelp","dwelh","dwem","dweb","dwebs","dwes","dwess","dweng","dwej","dwec","dwek","dwet","dwep","dweh","dwi","dwig","dwigg","dwigs","dwin","dwinj","dwinh","dwid","dwil","dwilg","dwilm","dwilb","dwils","dwilt","dwilp","dwilh","dwim","dwib","dwibs","dwis","dwiss","dwing","dwij","dwic","dwik","dwit","dwip","dwih","dyu","dyug","dyugg","dyugs","dyun","dyunj","dyunh","dyud","dyul","dyulg","dyulm","dyulb","dyuls","dyult","dyulp","dyulh","dyum","dyub","dyubs","dyus","dyuss","dyung","dyuj","dyuc","dyuk","dyut","dyup","dyuh","deu","deug","deugg","deugs","deun","deunj","deunh","deud","deul","deulg","deulm","deulb","deuls","deult","deulp","deulh","deum","deub","deubs","deus","deuss","deung","deuj","deuc","deuk","deut","deup","deuh","dyi","dyig","dyigg","dyigs","dyin","dyinj","dyinh","dyid"],["dyil","dyilg","dyilm","dyilb","dyils","dyilt","dyilp","dyilh","dyim","dyib","dyibs","dyis","dyiss","dying","dyij","dyic","dyik","dyit","dyip","dyih","di","dig","digg","digs","din","dinj","dinh","did","dil","dilg","dilm","dilb","dils","dilt","dilp","dilh","dim","dib","dibs","dis","diss","ding","dij","dic","dik","dit","dip","dih","dda","ddag","ddagg","ddags","ddan","ddanj","ddanh","ddad","ddal","ddalg","ddalm","ddalb","ddals","ddalt","ddalp","ddalh","ddam","ddab","ddabs","ddas","ddass","ddang","ddaj","ddac","ddak","ddat","ddap","ddah","ddae","ddaeg","ddaegg","ddaegs","ddaen","ddaenj","ddaenh","ddaed","ddael","ddaelg","ddaelm","ddaelb","ddaels","ddaelt","ddaelp","ddaelh","ddaem","ddaeb","ddaebs","ddaes","ddaess","ddaeng","ddaej","ddaec","ddaek","ddaet","ddaep","ddaeh","ddya","ddyag","ddyagg","ddyags","ddyan","ddyanj","ddyanh","ddyad","ddyal","ddyalg","ddyalm","ddyalb","ddyals","ddyalt","ddyalp","ddyalh","ddyam","ddyab","ddyabs","ddyas","ddyass","ddyang","ddyaj","ddyac","ddyak","ddyat","ddyap","ddyah","ddyae","ddyaeg","ddyaegg","ddyaegs","ddyaen","ddyaenj","ddyaenh","ddyaed","ddyael","ddyaelg","ddyaelm","ddyaelb","ddyaels","ddyaelt","ddyaelp","ddyaelh","ddyaem","ddyaeb","ddyaebs","ddyaes","ddyaess","ddyaeng","ddyaej","ddyaec","ddyaek","ddyaet","ddyaep","ddyaeh","ddeo","ddeog","ddeogg","ddeogs","ddeon","ddeonj","ddeonh","ddeod","ddeol","ddeolg","ddeolm","ddeolb","ddeols","ddeolt","ddeolp","ddeolh","ddeom","ddeob","ddeobs","ddeos","ddeoss","ddeong","ddeoj","ddeoc","ddeok","ddeot","ddeop","ddeoh","dde","ddeg","ddegg","ddegs","dden","ddenj","ddenh","dded","ddel","ddelg","ddelm","ddelb","ddels","ddelt","ddelp","ddelh","ddem","ddeb","ddebs","ddes","ddess","ddeng","ddej","ddec","ddek","ddet","ddep","ddeh","ddyeo","ddyeog","ddyeogg","ddyeogs","ddyeon","ddyeonj","ddyeonh","ddyeod","ddyeol","ddyeolg","ddyeolm","ddyeolb","ddyeols","ddyeolt","ddyeolp","ddyeolh","ddyeom","ddyeob","ddyeobs","ddyeos","ddyeoss","ddyeong","ddyeoj","ddyeoc","ddyeok","ddyeot","ddyeop","ddyeoh","ddye","ddyeg","ddyegg","ddyegs","ddyen","ddyenj","ddyenh","ddyed","ddyel","ddyelg","ddyelm","ddyelb"],["ddyels","ddyelt","ddyelp","ddyelh","ddyem","ddyeb","ddyebs","ddyes","ddyess","ddyeng","ddyej","ddyec","ddyek","ddyet","ddyep","ddyeh","ddo","ddog","ddogg","ddogs","ddon","ddonj","ddonh","ddod","ddol","ddolg","ddolm","ddolb","ddols","ddolt","ddolp","ddolh","ddom","ddob","ddobs","ddos","ddoss","ddong","ddoj","ddoc","ddok","ddot","ddop","ddoh","ddwa","ddwag","ddwagg","ddwags","ddwan","ddwanj","ddwanh","ddwad","ddwal","ddwalg","ddwalm","ddwalb","ddwals","ddwalt","ddwalp","ddwalh","ddwam","ddwab","ddwabs","ddwas","ddwass","ddwang","ddwaj","ddwac","ddwak","ddwat","ddwap","ddwah","ddwae","ddwaeg","ddwaegg","ddwaegs","ddwaen","ddwaenj","ddwaenh","ddwaed","ddwael","ddwaelg","ddwaelm","ddwaelb","ddwaels","ddwaelt","ddwaelp","ddwaelh","ddwaem","ddwaeb","ddwaebs","ddwaes","ddwaess","ddwaeng","ddwaej","ddwaec","ddwaek","ddwaet","ddwaep","ddwaeh","ddoe","ddoeg","ddoegg","ddoegs","ddoen","ddoenj","ddoenh","ddoed","ddoel","ddoelg","ddoelm","ddoelb","ddoels","ddoelt","ddoelp","ddoelh","ddoem","ddoeb","ddoebs","ddoes","ddoess","ddoeng","ddoej","ddoec","ddoek","ddoet","ddoep","ddoeh","ddyo","ddyog","ddyogg","ddyogs","ddyon","ddyonj","ddyonh","ddyod","ddyol","ddyolg","ddyolm","ddyolb","ddyols","ddyolt","ddyolp","ddyolh","ddyom","ddyob","ddyobs","ddyos","ddyoss","ddyong","ddyoj","ddyoc","ddyok","ddyot","ddyop","ddyoh","ddu","ddug","ddugg","ddugs","ddun","ddunj","ddunh","ddud","ddul","ddulg","ddulm","ddulb","dduls","ddult","ddulp","ddulh","ddum","ddub","ddubs","ddus","dduss","ddung","dduj","dduc","dduk","ddut","ddup","dduh","ddweo","ddweog","ddweogg","ddweogs","ddweon","ddweonj","ddweonh","ddweod","ddweol","ddweolg","ddweolm","ddweolb","ddweols","ddweolt","ddweolp","ddweolh","ddweom","ddweob","ddweobs","ddweos","ddweoss","ddweong","ddweoj","ddweoc","ddweok","ddweot","ddweop","ddweoh","ddwe","ddweg","ddwegg","ddwegs","ddwen","ddwenj","ddwenh","ddwed","ddwel","ddwelg","ddwelm","ddwelb","ddwels","ddwelt","ddwelp","ddwelh","ddwem","ddweb","ddwebs","ddwes","ddwess","ddweng","ddwej","ddwec","ddwek","ddwet","ddwep","ddweh","ddwi","ddwig","ddwigg","ddwigs","ddwin","ddwinj","ddwinh","ddwid","ddwil","ddwilg","ddwilm","ddwilb","ddwils","ddwilt","ddwilp","ddwilh"],["ddwim","ddwib","ddwibs","ddwis","ddwiss","ddwing","ddwij","ddwic","ddwik","ddwit","ddwip","ddwih","ddyu","ddyug","ddyugg","ddyugs","ddyun","ddyunj","ddyunh","ddyud","ddyul","ddyulg","ddyulm","ddyulb","ddyuls","ddyult","ddyulp","ddyulh","ddyum","ddyub","ddyubs","ddyus","ddyuss","ddyung","ddyuj","ddyuc","ddyuk","ddyut","ddyup","ddyuh","ddeu","ddeug","ddeugg","ddeugs","ddeun","ddeunj","ddeunh","ddeud","ddeul","ddeulg","ddeulm","ddeulb","ddeuls","ddeult","ddeulp","ddeulh","ddeum","ddeub","ddeubs","ddeus","ddeuss","ddeung","ddeuj","ddeuc","ddeuk","ddeut","ddeup","ddeuh","ddyi","ddyig","ddyigg","ddyigs","ddyin","ddyinj","ddyinh","ddyid","ddyil","ddyilg","ddyilm","ddyilb","ddyils","ddyilt","ddyilp","ddyilh","ddyim","ddyib","ddyibs","ddyis","ddyiss","ddying","ddyij","ddyic","ddyik","ddyit","ddyip","ddyih","ddi","ddig","ddigg","ddigs","ddin","ddinj","ddinh","ddid","ddil","ddilg","ddilm","ddilb","ddils","ddilt","ddilp","ddilh","ddim","ddib","ddibs","ddis","ddiss","dding","ddij","ddic","ddik","ddit","ddip","ddih","ra","rag","ragg","rags","ran","ranj","ranh","rad","ral","ralg","ralm","ralb","rals","ralt","ralp","ralh","ram","rab","rabs","ras","rass","rang","raj","rac","rak","rat","rap","rah","rae","raeg","raegg","raegs","raen","raenj","raenh","raed","rael","raelg","raelm","raelb","raels","raelt","raelp","raelh","raem","raeb","raebs","raes","raess","raeng","raej","raec","raek","raet","raep","raeh","rya","ryag","ryagg","ryags","ryan","ryanj","ryanh","ryad","ryal","ryalg","ryalm","ryalb","ryals","ryalt","ryalp","ryalh","ryam","ryab","ryabs","ryas","ryass","ryang","ryaj","ryac","ryak","ryat","ryap","ryah","ryae","ryaeg","ryaegg","ryaegs","ryaen","ryaenj","ryaenh","ryaed","ryael","ryaelg","ryaelm","ryaelb","ryaels","ryaelt","ryaelp","ryaelh","ryaem","ryaeb","ryaebs","ryaes","ryaess","ryaeng","ryaej","ryaec","ryaek","ryaet","ryaep","ryaeh","reo","reog","reogg","reogs","reon","reonj","reonh","reod","reol","reolg","reolm","reolb","reols","reolt","reolp","reolh","reom","reob","reobs","reos"],["reoss","reong","reoj","reoc","reok","reot","reop","reoh","re","reg","regg","regs","ren","renj","renh","red","rel","relg","relm","relb","rels","relt","relp","relh","rem","reb","rebs","res","ress","reng","rej","rec","rek","ret","rep","reh","ryeo","ryeog","ryeogg","ryeogs","ryeon","ryeonj","ryeonh","ryeod","ryeol","ryeolg","ryeolm","ryeolb","ryeols","ryeolt","ryeolp","ryeolh","ryeom","ryeob","ryeobs","ryeos","ryeoss","ryeong","ryeoj","ryeoc","ryeok","ryeot","ryeop","ryeoh","rye","ryeg","ryegg","ryegs","ryen","ryenj","ryenh","ryed","ryel","ryelg","ryelm","ryelb","ryels","ryelt","ryelp","ryelh","ryem","ryeb","ryebs","ryes","ryess","ryeng","ryej","ryec","ryek","ryet","ryep","ryeh","ro","rog","rogg","rogs","ron","ronj","ronh","rod","rol","rolg","rolm","rolb","rols","rolt","rolp","rolh","rom","rob","robs","ros","ross","rong","roj","roc","rok","rot","rop","roh","rwa","rwag","rwagg","rwags","rwan","rwanj","rwanh","rwad","rwal","rwalg","rwalm","rwalb","rwals","rwalt","rwalp","rwalh","rwam","rwab","rwabs","rwas","rwass","rwang","rwaj","rwac","rwak","rwat","rwap","rwah","rwae","rwaeg","rwaegg","rwaegs","rwaen","rwaenj","rwaenh","rwaed","rwael","rwaelg","rwaelm","rwaelb","rwaels","rwaelt","rwaelp","rwaelh","rwaem","rwaeb","rwaebs","rwaes","rwaess","rwaeng","rwaej","rwaec","rwaek","rwaet","rwaep","rwaeh","roe","roeg","roegg","roegs","roen","roenj","roenh","roed","roel","roelg","roelm","roelb","roels","roelt","roelp","roelh","roem","roeb","roebs","roes","roess","roeng","roej","roec","roek","roet","roep","roeh","ryo","ryog","ryogg","ryogs","ryon","ryonj","ryonh","ryod","ryol","ryolg","ryolm","ryolb","ryols","ryolt","ryolp","ryolh","ryom","ryob","ryobs","ryos","ryoss","ryong","ryoj","ryoc","ryok","ryot","ryop","ryoh","ru","rug","rugg","rugs","run","runj","runh","rud","rul","rulg","rulm","rulb","ruls","rult","rulp","rulh","rum","rub","rubs","rus","russ","rung","ruj","ruc"],["ruk","rut","rup","ruh","rweo","rweog","rweogg","rweogs","rweon","rweonj","rweonh","rweod","rweol","rweolg","rweolm","rweolb","rweols","rweolt","rweolp","rweolh","rweom","rweob","rweobs","rweos","rweoss","rweong","rweoj","rweoc","rweok","rweot","rweop","rweoh","rwe","rweg","rwegg","rwegs","rwen","rwenj","rwenh","rwed","rwel","rwelg","rwelm","rwelb","rwels","rwelt","rwelp","rwelh","rwem","rweb","rwebs","rwes","rwess","rweng","rwej","rwec","rwek","rwet","rwep","rweh","rwi","rwig","rwigg","rwigs","rwin","rwinj","rwinh","rwid","rwil","rwilg","rwilm","rwilb","rwils","rwilt","rwilp","rwilh","rwim","rwib","rwibs","rwis","rwiss","rwing","rwij","rwic","rwik","rwit","rwip","rwih","ryu","ryug","ryugg","ryugs","ryun","ryunj","ryunh","ryud","ryul","ryulg","ryulm","ryulb","ryuls","ryult","ryulp","ryulh","ryum","ryub","ryubs","ryus","ryuss","ryung","ryuj","ryuc","ryuk","ryut","ryup","ryuh","reu","reug","reugg","reugs","reun","reunj","reunh","reud","reul","reulg","reulm","reulb","reuls","reult","reulp","reulh","reum","reub","reubs","reus","reuss","reung","reuj","reuc","reuk","reut","reup","reuh","ryi","ryig","ryigg","ryigs","ryin","ryinj","ryinh","ryid","ryil","ryilg","ryilm","ryilb","ryils","ryilt","ryilp","ryilh","ryim","ryib","ryibs","ryis","ryiss","rying","ryij","ryic","ryik","ryit","ryip","ryih","ri","rig","rigg","rigs","rin","rinj","rinh","rid","ril","rilg","rilm","rilb","rils","rilt","rilp","rilh","rim","rib","ribs","ris","riss","ring","rij","ric","rik","rit","rip","rih","ma","mag","magg","mags","man","manj","manh","mad","mal","malg","malm","malb","mals","malt","malp","malh","mam","mab","mabs","mas","mass","mang","maj","mac","mak","mat","map","mah","mae","maeg","maegg","maegs","maen","maenj","maenh","maed","mael","maelg","maelm","maelb","maels","maelt","maelp","maelh","maem","maeb","maebs","maes","maess","maeng","maej","maec","maek","maet","maep","maeh"],["mya","myag","myagg","myags","myan","myanj","myanh","myad","myal","myalg","myalm","myalb","myals","myalt","myalp","myalh","myam","myab","myabs","myas","myass","myang","myaj","myac","myak","myat","myap","myah","myae","myaeg","myaegg","myaegs","myaen","myaenj","myaenh","myaed","myael","myaelg","myaelm","myaelb","myaels","myaelt","myaelp","myaelh","myaem","myaeb","myaebs","myaes","myaess","myaeng","myaej","myaec","myaek","myaet","myaep","myaeh","meo","meog","meogg","meogs","meon","meonj","meonh","meod","meol","meolg","meolm","meolb","meols","meolt","meolp","meolh","meom","meob","meobs","meos","meoss","meong","meoj","meoc","meok","meot","meop","meoh","me","meg","megg","megs","men","menj","menh","med","mel","melg","melm","melb","mels","melt","melp","melh","mem","meb","mebs","mes","mess","meng","mej","mec","mek","met","mep","meh","myeo","myeog","myeogg","myeogs","myeon","myeonj","myeonh","myeod","myeol","myeolg","myeolm","myeolb","myeols","myeolt","myeolp","myeolh","myeom","myeob","myeobs","myeos","myeoss","myeong","myeoj","myeoc","myeok","myeot","myeop","myeoh","mye","myeg","myegg","myegs","myen","myenj","myenh","myed","myel","myelg","myelm","myelb","myels","myelt","myelp","myelh","myem","myeb","myebs","myes","myess","myeng","myej","myec","myek","myet","myep","myeh","mo","mog","mogg","mogs","mon","monj","monh","mod","mol","molg","molm","molb","mols","molt","molp","molh","mom","mob","mobs","mos","moss","mong","moj","moc","mok","mot","mop","moh","mwa","mwag","mwagg","mwags","mwan","mwanj","mwanh","mwad","mwal","mwalg","mwalm","mwalb","mwals","mwalt","mwalp","mwalh","mwam","mwab","mwabs","mwas","mwass","mwang","mwaj","mwac","mwak","mwat","mwap","mwah","mwae","mwaeg","mwaegg","mwaegs","mwaen","mwaenj","mwaenh","mwaed","mwael","mwaelg","mwaelm","mwaelb","mwaels","mwaelt","mwaelp","mwaelh","mwaem","mwaeb","mwaebs","mwaes","mwaess","mwaeng","mwaej","mwaec","mwaek","mwaet","mwaep","mwaeh","moe","moeg","moegg","moegs"],["moen","moenj","moenh","moed","moel","moelg","moelm","moelb","moels","moelt","moelp","moelh","moem","moeb","moebs","moes","moess","moeng","moej","moec","moek","moet","moep","moeh","myo","myog","myogg","myogs","myon","myonj","myonh","myod","myol","myolg","myolm","myolb","myols","myolt","myolp","myolh","myom","myob","myobs","myos","myoss","myong","myoj","myoc","myok","myot","myop","myoh","mu","mug","mugg","mugs","mun","munj","munh","mud","mul","mulg","mulm","mulb","muls","mult","mulp","mulh","mum","mub","mubs","mus","muss","mung","muj","muc","muk","mut","mup","muh","mweo","mweog","mweogg","mweogs","mweon","mweonj","mweonh","mweod","mweol","mweolg","mweolm","mweolb","mweols","mweolt","mweolp","mweolh","mweom","mweob","mweobs","mweos","mweoss","mweong","mweoj","mweoc","mweok","mweot","mweop","mweoh","mwe","mweg","mwegg","mwegs","mwen","mwenj","mwenh","mwed","mwel","mwelg","mwelm","mwelb","mwels","mwelt","mwelp","mwelh","mwem","mweb","mwebs","mwes","mwess","mweng","mwej","mwec","mwek","mwet","mwep","mweh","mwi","mwig","mwigg","mwigs","mwin","mwinj","mwinh","mwid","mwil","mwilg","mwilm","mwilb","mwils","mwilt","mwilp","mwilh","mwim","mwib","mwibs","mwis","mwiss","mwing","mwij","mwic","mwik","mwit","mwip","mwih","myu","myug","myugg","myugs","myun","myunj","myunh","myud","myul","myulg","myulm","myulb","myuls","myult","myulp","myulh","myum","myub","myubs","myus","myuss","myung","myuj","myuc","myuk","myut","myup","myuh","meu","meug","meugg","meugs","meun","meunj","meunh","meud","meul","meulg","meulm","meulb","meuls","meult","meulp","meulh","meum","meub","meubs","meus","meuss","meung","meuj","meuc","meuk","meut","meup","meuh","myi","myig","myigg","myigs","myin","myinj","myinh","myid","myil","myilg","myilm","myilb","myils","myilt","myilp","myilh","myim","myib","myibs","myis","myiss","mying","myij","myic","myik","myit","myip","myih","mi","mig","migg","migs","min","minj","minh","mid"],["mil","milg","milm","milb","mils","milt","milp","milh","mim","mib","mibs","mis","miss","ming","mij","mic","mik","mit","mip","mih","ba","bag","bagg","bags","ban","banj","banh","bad","bal","balg","balm","balb","bals","balt","balp","balh","bam","bab","babs","bas","bass","bang","baj","bac","bak","bat","bap","bah","bae","baeg","baegg","baegs","baen","baenj","baenh","baed","bael","baelg","baelm","baelb","baels","baelt","baelp","baelh","baem","baeb","baebs","baes","baess","baeng","baej","baec","baek","baet","baep","baeh","bya","byag","byagg","byags","byan","byanj","byanh","byad","byal","byalg","byalm","byalb","byals","byalt","byalp","byalh","byam","byab","byabs","byas","byass","byang","byaj","byac","byak","byat","byap","byah","byae","byaeg","byaegg","byaegs","byaen","byaenj","byaenh","byaed","byael","byaelg","byaelm","byaelb","byaels","byaelt","byaelp","byaelh","byaem","byaeb","byaebs","byaes","byaess","byaeng","byaej","byaec","byaek","byaet","byaep","byaeh","beo","beog","beogg","beogs","beon","beonj","beonh","beod","beol","beolg","beolm","beolb","beols","beolt","beolp","beolh","beom","beob","beobs","beos","beoss","beong","beoj","beoc","beok","beot","beop","beoh","be","beg","begg","begs","ben","benj","benh","bed","bel","belg","belm","belb","bels","belt","belp","belh","bem","beb","bebs","bes","bess","beng","bej","bec","bek","bet","bep","beh","byeo","byeog","byeogg","byeogs","byeon","byeonj","byeonh","byeod","byeol","byeolg","byeolm","byeolb","byeols","byeolt","byeolp","byeolh","byeom","byeob","byeobs","byeos","byeoss","byeong","byeoj","byeoc","byeok","byeot","byeop","byeoh","bye","byeg","byegg","byegs","byen","byenj","byenh","byed","byel","byelg","byelm","byelb","byels","byelt","byelp","byelh","byem","byeb","byebs","byes","byess","byeng","byej","byec","byek","byet","byep","byeh","bo","bog","bogg","bogs","bon","bonj","bonh","bod","bol","bolg","bolm","bolb"],["bols","bolt","bolp","bolh","bom","bob","bobs","bos","boss","bong","boj","boc","bok","bot","bop","boh","bwa","bwag","bwagg","bwags","bwan","bwanj","bwanh","bwad","bwal","bwalg","bwalm","bwalb","bwals","bwalt","bwalp","bwalh","bwam","bwab","bwabs","bwas","bwass","bwang","bwaj","bwac","bwak","bwat","bwap","bwah","bwae","bwaeg","bwaegg","bwaegs","bwaen","bwaenj","bwaenh","bwaed","bwael","bwaelg","bwaelm","bwaelb","bwaels","bwaelt","bwaelp","bwaelh","bwaem","bwaeb","bwaebs","bwaes","bwaess","bwaeng","bwaej","bwaec","bwaek","bwaet","bwaep","bwaeh","boe","boeg","boegg","boegs","boen","boenj","boenh","boed","boel","boelg","boelm","boelb","boels","boelt","boelp","boelh","boem","boeb","boebs","boes","boess","boeng","boej","boec","boek","boet","boep","boeh","byo","byog","byogg","byogs","byon","byonj","byonh","byod","byol","byolg","byolm","byolb","byols","byolt","byolp","byolh","byom","byob","byobs","byos","byoss","byong","byoj","byoc","byok","byot","byop","byoh","bu","bug","bugg","bugs","bun","bunj","bunh","bud","bul","bulg","bulm","bulb","buls","bult","bulp","bulh","bum","bub","bubs","bus","buss","bung","buj","buc","buk","but","bup","buh","bweo","bweog","bweogg","bweogs","bweon","bweonj","bweonh","bweod","bweol","bweolg","bweolm","bweolb","bweols","bweolt","bweolp","bweolh","bweom","bweob","bweobs","bweos","bweoss","bweong","bweoj","bweoc","bweok","bweot","bweop","bweoh","bwe","bweg","bwegg","bwegs","bwen","bwenj","bwenh","bwed","bwel","bwelg","bwelm","bwelb","bwels","bwelt","bwelp","bwelh","bwem","bweb","bwebs","bwes","bwess","bweng","bwej","bwec","bwek","bwet","bwep","bweh","bwi","bwig","bwigg","bwigs","bwin","bwinj","bwinh","bwid","bwil","bwilg","bwilm","bwilb","bwils","bwilt","bwilp","bwilh","bwim","bwib","bwibs","bwis","bwiss","bwing","bwij","bwic","bwik","bwit","bwip","bwih","byu","byug","byugg","byugs","byun","byunj","byunh","byud","byul","byulg","byulm","byulb","byuls","byult","byulp","byulh"],["byum","byub","byubs","byus","byuss","byung","byuj","byuc","byuk","byut","byup","byuh","beu","beug","beugg","beugs","beun","beunj","beunh","beud","beul","beulg","beulm","beulb","beuls","beult","beulp","beulh","beum","beub","beubs","beus","beuss","beung","beuj","beuc","beuk","beut","beup","beuh","byi","byig","byigg","byigs","byin","byinj","byinh","byid","byil","byilg","byilm","byilb","byils","byilt","byilp","byilh","byim","byib","byibs","byis","byiss","bying","byij","byic","byik","byit","byip","byih","bi","big","bigg","bigs","bin","binj","binh","bid","bil","bilg","bilm","bilb","bils","bilt","bilp","bilh","bim","bib","bibs","bis","biss","bing","bij","bic","bik","bit","bip","bih","bba","bbag","bbagg","bbags","bban","bbanj","bbanh","bbad","bbal","bbalg","bbalm","bbalb","bbals","bbalt","bbalp","bbalh","bbam","bbab","bbabs","bbas","bbass","bbang","bbaj","bbac","bbak","bbat","bbap","bbah","bbae","bbaeg","bbaegg","bbaegs","bbaen","bbaenj","bbaenh","bbaed","bbael","bbaelg","bbaelm","bbaelb","bbaels","bbaelt","bbaelp","bbaelh","bbaem","bbaeb","bbaebs","bbaes","bbaess","bbaeng","bbaej","bbaec","bbaek","bbaet","bbaep","bbaeh","bbya","bbyag","bbyagg","bbyags","bbyan","bbyanj","bbyanh","bbyad","bbyal","bbyalg","bbyalm","bbyalb","bbyals","bbyalt","bbyalp","bbyalh","bbyam","bbyab","bbyabs","bbyas","bbyass","bbyang","bbyaj","bbyac","bbyak","bbyat","bbyap","bbyah","bbyae","bbyaeg","bbyaegg","bbyaegs","bbyaen","bbyaenj","bbyaenh","bbyaed","bbyael","bbyaelg","bbyaelm","bbyaelb","bbyaels","bbyaelt","bbyaelp","bbyaelh","bbyaem","bbyaeb","bbyaebs","bbyaes","bbyaess","bbyaeng","bbyaej","bbyaec","bbyaek","bbyaet","bbyaep","bbyaeh","bbeo","bbeog","bbeogg","bbeogs","bbeon","bbeonj","bbeonh","bbeod","bbeol","bbeolg","bbeolm","bbeolb","bbeols","bbeolt","bbeolp","bbeolh","bbeom","bbeob","bbeobs","bbeos","bbeoss","bbeong","bbeoj","bbeoc","bbeok","bbeot","bbeop","bbeoh","bbe","bbeg","bbegg","bbegs","bben","bbenj","bbenh","bbed","bbel","bbelg","bbelm","bbelb","bbels","bbelt","bbelp","bbelh","bbem","bbeb","bbebs","bbes"],["bbess","bbeng","bbej","bbec","bbek","bbet","bbep","bbeh","bbyeo","bbyeog","bbyeogg","bbyeogs","bbyeon","bbyeonj","bbyeonh","bbyeod","bbyeol","bbyeolg","bbyeolm","bbyeolb","bbyeols","bbyeolt","bbyeolp","bbyeolh","bbyeom","bbyeob","bbyeobs","bbyeos","bbyeoss","bbyeong","bbyeoj","bbyeoc","bbyeok","bbyeot","bbyeop","bbyeoh","bbye","bbyeg","bbyegg","bbyegs","bbyen","bbyenj","bbyenh","bbyed","bbyel","bbyelg","bbyelm","bbyelb","bbyels","bbyelt","bbyelp","bbyelh","bbyem","bbyeb","bbyebs","bbyes","bbyess","bbyeng","bbyej","bbyec","bbyek","bbyet","bbyep","bbyeh","bbo","bbog","bbogg","bbogs","bbon","bbonj","bbonh","bbod","bbol","bbolg","bbolm","bbolb","bbols","bbolt","bbolp","bbolh","bbom","bbob","bbobs","bbos","bboss","bbong","bboj","bboc","bbok","bbot","bbop","bboh","bbwa","bbwag","bbwagg","bbwags","bbwan","bbwanj","bbwanh","bbwad","bbwal","bbwalg","bbwalm","bbwalb","bbwals","bbwalt","bbwalp","bbwalh","bbwam","bbwab","bbwabs","bbwas","bbwass","bbwang","bbwaj","bbwac","bbwak","bbwat","bbwap","bbwah","bbwae","bbwaeg","bbwaegg","bbwaegs","bbwaen","bbwaenj","bbwaenh","bbwaed","bbwael","bbwaelg","bbwaelm","bbwaelb","bbwaels","bbwaelt","bbwaelp","bbwaelh","bbwaem","bbwaeb","bbwaebs","bbwaes","bbwaess","bbwaeng","bbwaej","bbwaec","bbwaek","bbwaet","bbwaep","bbwaeh","bboe","bboeg","bboegg","bboegs","bboen","bboenj","bboenh","bboed","bboel","bboelg","bboelm","bboelb","bboels","bboelt","bboelp","bboelh","bboem","bboeb","bboebs","bboes","bboess","bboeng","bboej","bboec","bboek","bboet","bboep","bboeh","bbyo","bbyog","bbyogg","bbyogs","bbyon","bbyonj","bbyonh","bbyod","bbyol","bbyolg","bbyolm","bbyolb","bbyols","bbyolt","bbyolp","bbyolh","bbyom","bbyob","bbyobs","bbyos","bbyoss","bbyong","bbyoj","bbyoc","bbyok","bbyot","bbyop","bbyoh","bbu","bbug","bbugg","bbugs","bbun","bbunj","bbunh","bbud","bbul","bbulg","bbulm","bbulb","bbuls","bbult","bbulp","bbulh","bbum","bbub","bbubs","bbus","bbuss","bbung","bbuj","bbuc","bbuk","bbut","bbup","bbuh","bbweo","bbweog","bbweogg","bbweogs","bbweon","bbweonj","bbweonh","bbweod","bbweol","bbweolg","bbweolm","bbweolb","bbweols","bbweolt","bbweolp","bbweolh","bbweom","bbweob","bbweobs","bbweos","bbweoss","bbweong","bbweoj","bbweoc"],["bbweok","bbweot","bbweop","bbweoh","bbwe","bbweg","bbwegg","bbwegs","bbwen","bbwenj","bbwenh","bbwed","bbwel","bbwelg","bbwelm","bbwelb","bbwels","bbwelt","bbwelp","bbwelh","bbwem","bbweb","bbwebs","bbwes","bbwess","bbweng","bbwej","bbwec","bbwek","bbwet","bbwep","bbweh","bbwi","bbwig","bbwigg","bbwigs","bbwin","bbwinj","bbwinh","bbwid","bbwil","bbwilg","bbwilm","bbwilb","bbwils","bbwilt","bbwilp","bbwilh","bbwim","bbwib","bbwibs","bbwis","bbwiss","bbwing","bbwij","bbwic","bbwik","bbwit","bbwip","bbwih","bbyu","bbyug","bbyugg","bbyugs","bbyun","bbyunj","bbyunh","bbyud","bbyul","bbyulg","bbyulm","bbyulb","bbyuls","bbyult","bbyulp","bbyulh","bbyum","bbyub","bbyubs","bbyus","bbyuss","bbyung","bbyuj","bbyuc","bbyuk","bbyut","bbyup","bbyuh","bbeu","bbeug","bbeugg","bbeugs","bbeun","bbeunj","bbeunh","bbeud","bbeul","bbeulg","bbeulm","bbeulb","bbeuls","bbeult","bbeulp","bbeulh","bbeum","bbeub","bbeubs","bbeus","bbeuss","bbeung","bbeuj","bbeuc","bbeuk","bbeut","bbeup","bbeuh","bbyi","bbyig","bbyigg","bbyigs","bbyin","bbyinj","bbyinh","bbyid","bbyil","bbyilg","bbyilm","bbyilb","bbyils","bbyilt","bbyilp","bbyilh","bbyim","bbyib","bbyibs","bbyis","bbyiss","bbying","bbyij","bbyic","bbyik","bbyit","bbyip","bbyih","bbi","bbig","bbigg","bbigs","bbin","bbinj","bbinh","bbid","bbil","bbilg","bbilm","bbilb","bbils","bbilt","bbilp","bbilh","bbim","bbib","bbibs","bbis","bbiss","bbing","bbij","bbic","bbik","bbit","bbip","bbih","sa","sag","sagg","sags","san","sanj","sanh","sad","sal","salg","salm","salb","sals","salt","salp","salh","sam","sab","sabs","sas","sass","sang","saj","sac","sak","sat","sap","sah","sae","saeg","saegg","saegs","saen","saenj","saenh","saed","sael","saelg","saelm","saelb","saels","saelt","saelp","saelh","saem","saeb","saebs","saes","saess","saeng","saej","saec","saek","saet","saep","saeh","sya","syag","syagg","syags","syan","syanj","syanh","syad","syal","syalg","syalm","syalb","syals","syalt","syalp","syalh","syam","syab","syabs","syas","syass","syang","syaj","syac","syak","syat","syap","syah"],["syae","syaeg","syaegg","syaegs","syaen","syaenj","syaenh","syaed","syael","syaelg","syaelm","syaelb","syaels","syaelt","syaelp","syaelh","syaem","syaeb","syaebs","syaes","syaess","syaeng","syaej","syaec","syaek","syaet","syaep","syaeh","seo","seog","seogg","seogs","seon","seonj","seonh","seod","seol","seolg","seolm","seolb","seols","seolt","seolp","seolh","seom","seob","seobs","seos","seoss","seong","seoj","seoc","seok","seot","seop","seoh","se","seg","segg","segs","sen","senj","senh","sed","sel","selg","selm","selb","sels","selt","selp","selh","sem","seb","sebs","ses","sess","seng","sej","sec","sek","set","sep","seh","syeo","syeog","syeogg","syeogs","syeon","syeonj","syeonh","syeod","syeol","syeolg","syeolm","syeolb","syeols","syeolt","syeolp","syeolh","syeom","syeob","syeobs","syeos","syeoss","syeong","syeoj","syeoc","syeok","syeot","syeop","syeoh","sye","syeg","syegg","syegs","syen","syenj","syenh","syed","syel","syelg","syelm","syelb","syels","syelt","syelp","syelh","syem","syeb","syebs","syes","syess","syeng","syej","syec","syek","syet","syep","syeh","so","sog","sogg","sogs","son","sonj","sonh","sod","sol","solg","solm","solb","sols","solt","solp","solh","som","sob","sobs","sos","soss","song","soj","soc","sok","sot","sop","soh","swa","swag","swagg","swags","swan","swanj","swanh","swad","swal","swalg","swalm","swalb","swals","swalt","swalp","swalh","swam","swab","swabs","swas","swass","swang","swaj","swac","swak","swat","swap","swah","swae","swaeg","swaegg","swaegs","swaen","swaenj","swaenh","swaed","swael","swaelg","swaelm","swaelb","swaels","swaelt","swaelp","swaelh","swaem","swaeb","swaebs","swaes","swaess","swaeng","swaej","swaec","swaek","swaet","swaep","swaeh","soe","soeg","soegg","soegs","soen","soenj","soenh","soed","soel","soelg","soelm","soelb","soels","soelt","soelp","soelh","soem","soeb","soebs","soes","soess","soeng","soej","soec","soek","soet","soep","soeh","syo","syog","syogg","syogs"],["syon","syonj","syonh","syod","syol","syolg","syolm","syolb","syols","syolt","syolp","syolh","syom","syob","syobs","syos","syoss","syong","syoj","syoc","syok","syot","syop","syoh","su","sug","sugg","sugs","sun","sunj","sunh","sud","sul","sulg","sulm","sulb","suls","sult","sulp","sulh","sum","sub","subs","sus","suss","sung","suj","suc","suk","sut","sup","suh","sweo","sweog","sweogg","sweogs","sweon","sweonj","sweonh","sweod","sweol","sweolg","sweolm","sweolb","sweols","sweolt","sweolp","sweolh","sweom","sweob","sweobs","sweos","sweoss","sweong","sweoj","sweoc","sweok","sweot","sweop","sweoh","swe","sweg","swegg","swegs","swen","swenj","swenh","swed","swel","swelg","swelm","swelb","swels","swelt","swelp","swelh","swem","sweb","swebs","swes","swess","sweng","swej","swec","swek","swet","swep","sweh","swi","swig","swigg","swigs","swin","swinj","swinh","swid","swil","swilg","swilm","swilb","swils","swilt","swilp","swilh","swim","swib","swibs","swis","swiss","swing","swij","swic","swik","swit","swip","swih","syu","syug","syugg","syugs","syun","syunj","syunh","syud","syul","syulg","syulm","syulb","syuls","syult","syulp","syulh","syum","syub","syubs","syus","syuss","syung","syuj","syuc","syuk","syut","syup","syuh","seu","seug","seugg","seugs","seun","seunj","seunh","seud","seul","seulg","seulm","seulb","seuls","seult","seulp","seulh","seum","seub","seubs","seus","seuss","seung","seuj","seuc","seuk","seut","seup","seuh","syi","syig","syigg","syigs","syin","syinj","syinh","syid","syil","syilg","syilm","syilb","syils","syilt","syilp","syilh","syim","syib","syibs","syis","syiss","sying","syij","syic","syik","syit","syip","syih","si","sig","sigg","sigs","sin","sinj","sinh","sid","sil","silg","silm","silb","sils","silt","silp","silh","sim","sib","sibs","sis","siss","sing","sij","sic","sik","sit","sip","sih","ssa","ssag","ssagg","ssags","ssan","ssanj","ssanh","ssad"],["ssal","ssalg","ssalm","ssalb","ssals","ssalt","ssalp","ssalh","ssam","ssab","ssabs","ssas","ssass","ssang","ssaj","ssac","ssak","ssat","ssap","ssah","ssae","ssaeg","ssaegg","ssaegs","ssaen","ssaenj","ssaenh","ssaed","ssael","ssaelg","ssaelm","ssaelb","ssaels","ssaelt","ssaelp","ssaelh","ssaem","ssaeb","ssaebs","ssaes","ssaess","ssaeng","ssaej","ssaec","ssaek","ssaet","ssaep","ssaeh","ssya","ssyag","ssyagg","ssyags","ssyan","ssyanj","ssyanh","ssyad","ssyal","ssyalg","ssyalm","ssyalb","ssyals","ssyalt","ssyalp","ssyalh","ssyam","ssyab","ssyabs","ssyas","ssyass","ssyang","ssyaj","ssyac","ssyak","ssyat","ssyap","ssyah","ssyae","ssyaeg","ssyaegg","ssyaegs","ssyaen","ssyaenj","ssyaenh","ssyaed","ssyael","ssyaelg","ssyaelm","ssyaelb","ssyaels","ssyaelt","ssyaelp","ssyaelh","ssyaem","ssyaeb","ssyaebs","ssyaes","ssyaess","ssyaeng","ssyaej","ssyaec","ssyaek","ssyaet","ssyaep","ssyaeh","sseo","sseog","sseogg","sseogs","sseon","sseonj","sseonh","sseod","sseol","sseolg","sseolm","sseolb","sseols","sseolt","sseolp","sseolh","sseom","sseob","sseobs","sseos","sseoss","sseong","sseoj","sseoc","sseok","sseot","sseop","sseoh","sse","sseg","ssegg","ssegs","ssen","ssenj","ssenh","ssed","ssel","sselg","sselm","sselb","ssels","sselt","sselp","sselh","ssem","sseb","ssebs","sses","ssess","sseng","ssej","ssec","ssek","sset","ssep","sseh","ssyeo","ssyeog","ssyeogg","ssyeogs","ssyeon","ssyeonj","ssyeonh","ssyeod","ssyeol","ssyeolg","ssyeolm","ssyeolb","ssyeols","ssyeolt","ssyeolp","ssyeolh","ssyeom","ssyeob","ssyeobs","ssyeos","ssyeoss","ssyeong","ssyeoj","ssyeoc","ssyeok","ssyeot","ssyeop","ssyeoh","ssye","ssyeg","ssyegg","ssyegs","ssyen","ssyenj","ssyenh","ssyed","ssyel","ssyelg","ssyelm","ssyelb","ssyels","ssyelt","ssyelp","ssyelh","ssyem","ssyeb","ssyebs","ssyes","ssyess","ssyeng","ssyej","ssyec","ssyek","ssyet","ssyep","ssyeh","sso","ssog","ssogg","ssogs","sson","ssonj","ssonh","ssod","ssol","ssolg","ssolm","ssolb","ssols","ssolt","ssolp","ssolh","ssom","ssob","ssobs","ssos","ssoss","ssong","ssoj","ssoc","ssok","ssot","ssop","ssoh","sswa","sswag","sswagg","sswags","sswan","sswanj","sswanh","sswad","sswal","sswalg","sswalm","sswalb"],["sswals","sswalt","sswalp","sswalh","sswam","sswab","sswabs","sswas","sswass","sswang","sswaj","sswac","sswak","sswat","sswap","sswah","sswae","sswaeg","sswaegg","sswaegs","sswaen","sswaenj","sswaenh","sswaed","sswael","sswaelg","sswaelm","sswaelb","sswaels","sswaelt","sswaelp","sswaelh","sswaem","sswaeb","sswaebs","sswaes","sswaess","sswaeng","sswaej","sswaec","sswaek","sswaet","sswaep","sswaeh","ssoe","ssoeg","ssoegg","ssoegs","ssoen","ssoenj","ssoenh","ssoed","ssoel","ssoelg","ssoelm","ssoelb","ssoels","ssoelt","ssoelp","ssoelh","ssoem","ssoeb","ssoebs","ssoes","ssoess","ssoeng","ssoej","ssoec","ssoek","ssoet","ssoep","ssoeh","ssyo","ssyog","ssyogg","ssyogs","ssyon","ssyonj","ssyonh","ssyod","ssyol","ssyolg","ssyolm","ssyolb","ssyols","ssyolt","ssyolp","ssyolh","ssyom","ssyob","ssyobs","ssyos","ssyoss","ssyong","ssyoj","ssyoc","ssyok","ssyot","ssyop","ssyoh","ssu","ssug","ssugg","ssugs","ssun","ssunj","ssunh","ssud","ssul","ssulg","ssulm","ssulb","ssuls","ssult","ssulp","ssulh","ssum","ssub","ssubs","ssus","ssuss","ssung","ssuj","ssuc","ssuk","ssut","ssup","ssuh","ssweo","ssweog","ssweogg","ssweogs","ssweon","ssweonj","ssweonh","ssweod","ssweol","ssweolg","ssweolm","ssweolb","ssweols","ssweolt","ssweolp","ssweolh","ssweom","ssweob","ssweobs","ssweos","ssweoss","ssweong","ssweoj","ssweoc","ssweok","ssweot","ssweop","ssweoh","sswe","ssweg","sswegg","sswegs","sswen","sswenj","sswenh","sswed","sswel","sswelg","sswelm","sswelb","sswels","sswelt","sswelp","sswelh","sswem","ssweb","sswebs","sswes","sswess","ssweng","sswej","sswec","sswek","sswet","sswep","ssweh","sswi","sswig","sswigg","sswigs","sswin","sswinj","sswinh","sswid","sswil","sswilg","sswilm","sswilb","sswils","sswilt","sswilp","sswilh","sswim","sswib","sswibs","sswis","sswiss","sswing","sswij","sswic","sswik","sswit","sswip","sswih","ssyu","ssyug","ssyugg","ssyugs","ssyun","ssyunj","ssyunh","ssyud","ssyul","ssyulg","ssyulm","ssyulb","ssyuls","ssyult","ssyulp","ssyulh","ssyum","ssyub","ssyubs","ssyus","ssyuss","ssyung","ssyuj","ssyuc","ssyuk","ssyut","ssyup","ssyuh","sseu","sseug","sseugg","sseugs","sseun","sseunj","sseunh","sseud","sseul","sseulg","sseulm","sseulb","sseuls","sseult","sseulp","sseulh"],["sseum","sseub","sseubs","sseus","sseuss","sseung","sseuj","sseuc","sseuk","sseut","sseup","sseuh","ssyi","ssyig","ssyigg","ssyigs","ssyin","ssyinj","ssyinh","ssyid","ssyil","ssyilg","ssyilm","ssyilb","ssyils","ssyilt","ssyilp","ssyilh","ssyim","ssyib","ssyibs","ssyis","ssyiss","ssying","ssyij","ssyic","ssyik","ssyit","ssyip","ssyih","ssi","ssig","ssigg","ssigs","ssin","ssinj","ssinh","ssid","ssil","ssilg","ssilm","ssilb","ssils","ssilt","ssilp","ssilh","ssim","ssib","ssibs","ssis","ssiss","ssing","ssij","ssic","ssik","ssit","ssip","ssih","a","ag","agg","ags","an","anj","anh","ad","al","alg","alm","alb","als","alt","alp","alh","am","ab","abs","as","ass","ang","aj","ac","ak","at","ap","ah","ae","aeg","aegg","aegs","aen","aenj","aenh","aed","ael","aelg","aelm","aelb","aels","aelt","aelp","aelh","aem","aeb","aebs","aes","aess","aeng","aej","aec","aek","aet","aep","aeh","ya","yag","yagg","yags","yan","yanj","yanh","yad","yal","yalg","yalm","yalb","yals","yalt","yalp","yalh","yam","yab","yabs","yas","yass","yang","yaj","yac","yak","yat","yap","yah","yae","yaeg","yaegg","yaegs","yaen","yaenj","yaenh","yaed","yael","yaelg","yaelm","yaelb","yaels","yaelt","yaelp","yaelh","yaem","yaeb","yaebs","yaes","yaess","yaeng","yaej","yaec","yaek","yaet","yaep","yaeh","eo","eog","eogg","eogs","eon","eonj","eonh","eod","eol","eolg","eolm","eolb","eols","eolt","eolp","eolh","eom","eob","eobs","eos","eoss","eong","eoj","eoc","eok","eot","eop","eoh","e","eg","egg","egs","en","enj","enh","ed","el","elg","elm","elb","els","elt","elp","elh","em","eb","ebs","es","ess","eng","ej","ec","ek","et","ep","eh","yeo","yeog","yeogg","yeogs","yeon","yeonj","yeonh","yeod","yeol","yeolg","yeolm","yeolb","yeols","yeolt","yeolp","yeolh","yeom","yeob","yeobs","yeos"],["yeoss","yeong","yeoj","yeoc","yeok","yeot","yeop","yeoh","ye","yeg","yegg","yegs","yen","yenj","yenh","yed","yel","yelg","yelm","yelb","yels","yelt","yelp","yelh","yem","yeb","yebs","yes","yess","yeng","yej","yec","yek","yet","yep","yeh","o","og","ogg","ogs","on","onj","onh","od","ol","olg","olm","olb","ols","olt","olp","olh","om","ob","obs","os","oss","ong","oj","oc","ok","ot","op","oh","wa","wag","wagg","wags","wan","wanj","wanh","wad","wal","walg","walm","walb","wals","walt","walp","walh","wam","wab","wabs","was","wass","wang","waj","wac","wak","wat","wap","wah","wae","waeg","waegg","waegs","waen","waenj","waenh","waed","wael","waelg","waelm","waelb","waels","waelt","waelp","waelh","waem","waeb","waebs","waes","waess","waeng","waej","waec","waek","waet","waep","waeh","oe","oeg","oegg","oegs","oen","oenj","oenh","oed","oel","oelg","oelm","oelb","oels","oelt","oelp","oelh","oem","oeb","oebs","oes","oess","oeng","oej","oec","oek","oet","oep","oeh","yo","yog","yogg","yogs","yon","yonj","yonh","yod","yol","yolg","yolm","yolb","yols","yolt","yolp","yolh","yom","yob","yobs","yos","yoss","yong","yoj","yoc","yok","yot","yop","yoh","u","ug","ugg","ugs","un","unj","unh","ud","ul","ulg","ulm","ulb","uls","ult","ulp","ulh","um","ub","ubs","us","uss","ung","uj","uc","uk","ut","up","uh","weo","weog","weogg","weogs","weon","weonj","weonh","weod","weol","weolg","weolm","weolb","weols","weolt","weolp","weolh","weom","weob","weobs","weos","weoss","weong","weoj","weoc","weok","weot","weop","weoh","we","weg","wegg","wegs","wen","wenj","wenh","wed","wel","welg","welm","welb","wels","welt","welp","welh","wem","web","webs","wes","wess","weng","wej","wec"],["wek","wet","wep","weh","wi","wig","wigg","wigs","win","winj","winh","wid","wil","wilg","wilm","wilb","wils","wilt","wilp","wilh","wim","wib","wibs","wis","wiss","wing","wij","wic","wik","wit","wip","wih","yu","yug","yugg","yugs","yun","yunj","yunh","yud","yul","yulg","yulm","yulb","yuls","yult","yulp","yulh","yum","yub","yubs","yus","yuss","yung","yuj","yuc","yuk","yut","yup","yuh","eu","eug","eugg","eugs","eun","eunj","eunh","eud","eul","eulg","eulm","eulb","euls","eult","eulp","eulh","eum","eub","eubs","eus","euss","eung","euj","euc","euk","eut","eup","euh","yi","yig","yigg","yigs","yin","yinj","yinh","yid","yil","yilg","yilm","yilb","yils","yilt","yilp","yilh","yim","yib","yibs","yis","yiss","ying","yij","yic","yik","yit","yip","yih","i","ig","igg","igs","in","inj","inh","id","il","ilg","ilm","ilb","ils","ilt","ilp","ilh","im","ib","ibs","is","iss","ing","ij","ic","ik","it","ip","ih","ja","jag","jagg","jags","jan","janj","janh","jad","jal","jalg","jalm","jalb","jals","jalt","jalp","jalh","jam","jab","jabs","jas","jass","jang","jaj","jac","jak","jat","jap","jah","jae","jaeg","jaegg","jaegs","jaen","jaenj","jaenh","jaed","jael","jaelg","jaelm","jaelb","jaels","jaelt","jaelp","jaelh","jaem","jaeb","jaebs","jaes","jaess","jaeng","jaej","jaec","jaek","jaet","jaep","jaeh","jya","jyag","jyagg","jyags","jyan","jyanj","jyanh","jyad","jyal","jyalg","jyalm","jyalb","jyals","jyalt","jyalp","jyalh","jyam","jyab","jyabs","jyas","jyass","jyang","jyaj","jyac","jyak","jyat","jyap","jyah","jyae","jyaeg","jyaegg","jyaegs","jyaen","jyaenj","jyaenh","jyaed","jyael","jyaelg","jyaelm","jyaelb","jyaels","jyaelt","jyaelp","jyaelh","jyaem","jyaeb","jyaebs","jyaes","jyaess","jyaeng","jyaej","jyaec","jyaek","jyaet","jyaep","jyaeh"],["jeo","jeog","jeogg","jeogs","jeon","jeonj","jeonh","jeod","jeol","jeolg","jeolm","jeolb","jeols","jeolt","jeolp","jeolh","jeom","jeob","jeobs","jeos","jeoss","jeong","jeoj","jeoc","jeok","jeot","jeop","jeoh","je","jeg","jegg","jegs","jen","jenj","jenh","jed","jel","jelg","jelm","jelb","jels","jelt","jelp","jelh","jem","jeb","jebs","jes","jess","jeng","jej","jec","jek","jet","jep","jeh","jyeo","jyeog","jyeogg","jyeogs","jyeon","jyeonj","jyeonh","jyeod","jyeol","jyeolg","jyeolm","jyeolb","jyeols","jyeolt","jyeolp","jyeolh","jyeom","jyeob","jyeobs","jyeos","jyeoss","jyeong","jyeoj","jyeoc","jyeok","jyeot","jyeop","jyeoh","jye","jyeg","jyegg","jyegs","jyen","jyenj","jyenh","jyed","jyel","jyelg","jyelm","jyelb","jyels","jyelt","jyelp","jyelh","jyem","jyeb","jyebs","jyes","jyess","jyeng","jyej","jyec","jyek","jyet","jyep","jyeh","jo","jog","jogg","jogs","jon","jonj","jonh","jod","jol","jolg","jolm","jolb","jols","jolt","jolp","jolh","jom","job","jobs","jos","joss","jong","joj","joc","jok","jot","jop","joh","jwa","jwag","jwagg","jwags","jwan","jwanj","jwanh","jwad","jwal","jwalg","jwalm","jwalb","jwals","jwalt","jwalp","jwalh","jwam","jwab","jwabs","jwas","jwass","jwang","jwaj","jwac","jwak","jwat","jwap","jwah","jwae","jwaeg","jwaegg","jwaegs","jwaen","jwaenj","jwaenh","jwaed","jwael","jwaelg","jwaelm","jwaelb","jwaels","jwaelt","jwaelp","jwaelh","jwaem","jwaeb","jwaebs","jwaes","jwaess","jwaeng","jwaej","jwaec","jwaek","jwaet","jwaep","jwaeh","joe","joeg","joegg","joegs","joen","joenj","joenh","joed","joel","joelg","joelm","joelb","joels","joelt","joelp","joelh","joem","joeb","joebs","joes","joess","joeng","joej","joec","joek","joet","joep","joeh","jyo","jyog","jyogg","jyogs","jyon","jyonj","jyonh","jyod","jyol","jyolg","jyolm","jyolb","jyols","jyolt","jyolp","jyolh","jyom","jyob","jyobs","jyos","jyoss","jyong","jyoj","jyoc","jyok","jyot","jyop","jyoh","ju","jug","jugg","jugs"],["jun","junj","junh","jud","jul","julg","julm","julb","juls","jult","julp","julh","jum","jub","jubs","jus","juss","jung","juj","juc","juk","jut","jup","juh","jweo","jweog","jweogg","jweogs","jweon","jweonj","jweonh","jweod","jweol","jweolg","jweolm","jweolb","jweols","jweolt","jweolp","jweolh","jweom","jweob","jweobs","jweos","jweoss","jweong","jweoj","jweoc","jweok","jweot","jweop","jweoh","jwe","jweg","jwegg","jwegs","jwen","jwenj","jwenh","jwed","jwel","jwelg","jwelm","jwelb","jwels","jwelt","jwelp","jwelh","jwem","jweb","jwebs","jwes","jwess","jweng","jwej","jwec","jwek","jwet","jwep","jweh","jwi","jwig","jwigg","jwigs","jwin","jwinj","jwinh","jwid","jwil","jwilg","jwilm","jwilb","jwils","jwilt","jwilp","jwilh","jwim","jwib","jwibs","jwis","jwiss","jwing","jwij","jwic","jwik","jwit","jwip","jwih","jyu","jyug","jyugg","jyugs","jyun","jyunj","jyunh","jyud","jyul","jyulg","jyulm","jyulb","jyuls","jyult","jyulp","jyulh","jyum","jyub","jyubs","jyus","jyuss","jyung","jyuj","jyuc","jyuk","jyut","jyup","jyuh","jeu","jeug","jeugg","jeugs","jeun","jeunj","jeunh","jeud","jeul","jeulg","jeulm","jeulb","jeuls","jeult","jeulp","jeulh","jeum","jeub","jeubs","jeus","jeuss","jeung","jeuj","jeuc","jeuk","jeut","jeup","jeuh","jyi","jyig","jyigg","jyigs","jyin","jyinj","jyinh","jyid","jyil","jyilg","jyilm","jyilb","jyils","jyilt","jyilp","jyilh","jyim","jyib","jyibs","jyis","jyiss","jying","jyij","jyic","jyik","jyit","jyip","jyih","ji","jig","jigg","jigs","jin","jinj","jinh","jid","jil","jilg","jilm","jilb","jils","jilt","jilp","jilh","jim","jib","jibs","jis","jiss","jing","jij","jic","jik","jit","jip","jih","jja","jjag","jjagg","jjags","jjan","jjanj","jjanh","jjad","jjal","jjalg","jjalm","jjalb","jjals","jjalt","jjalp","jjalh","jjam","jjab","jjabs","jjas","jjass","jjang","jjaj","jjac","jjak","jjat","jjap","jjah","jjae","jjaeg","jjaegg","jjaegs","jjaen","jjaenj","jjaenh","jjaed"],["jjael","jjaelg","jjaelm","jjaelb","jjaels","jjaelt","jjaelp","jjaelh","jjaem","jjaeb","jjaebs","jjaes","jjaess","jjaeng","jjaej","jjaec","jjaek","jjaet","jjaep","jjaeh","jjya","jjyag","jjyagg","jjyags","jjyan","jjyanj","jjyanh","jjyad","jjyal","jjyalg","jjyalm","jjyalb","jjyals","jjyalt","jjyalp","jjyalh","jjyam","jjyab","jjyabs","jjyas","jjyass","jjyang","jjyaj","jjyac","jjyak","jjyat","jjyap","jjyah","jjyae","jjyaeg","jjyaegg","jjyaegs","jjyaen","jjyaenj","jjyaenh","jjyaed","jjyael","jjyaelg","jjyaelm","jjyaelb","jjyaels","jjyaelt","jjyaelp","jjyaelh","jjyaem","jjyaeb","jjyaebs","jjyaes","jjyaess","jjyaeng","jjyaej","jjyaec","jjyaek","jjyaet","jjyaep","jjyaeh","jjeo","jjeog","jjeogg","jjeogs","jjeon","jjeonj","jjeonh","jjeod","jjeol","jjeolg","jjeolm","jjeolb","jjeols","jjeolt","jjeolp","jjeolh","jjeom","jjeob","jjeobs","jjeos","jjeoss","jjeong","jjeoj","jjeoc","jjeok","jjeot","jjeop","jjeoh","jje","jjeg","jjegg","jjegs","jjen","jjenj","jjenh","jjed","jjel","jjelg","jjelm","jjelb","jjels","jjelt","jjelp","jjelh","jjem","jjeb","jjebs","jjes","jjess","jjeng","jjej","jjec","jjek","jjet","jjep","jjeh","jjyeo","jjyeog","jjyeogg","jjyeogs","jjyeon","jjyeonj","jjyeonh","jjyeod","jjyeol","jjyeolg","jjyeolm","jjyeolb","jjyeols","jjyeolt","jjyeolp","jjyeolh","jjyeom","jjyeob","jjyeobs","jjyeos","jjyeoss","jjyeong","jjyeoj","jjyeoc","jjyeok","jjyeot","jjyeop","jjyeoh","jjye","jjyeg","jjyegg","jjyegs","jjyen","jjyenj","jjyenh","jjyed","jjyel","jjyelg","jjyelm","jjyelb","jjyels","jjyelt","jjyelp","jjyelh","jjyem","jjyeb","jjyebs","jjyes","jjyess","jjyeng","jjyej","jjyec","jjyek","jjyet","jjyep","jjyeh","jjo","jjog","jjogg","jjogs","jjon","jjonj","jjonh","jjod","jjol","jjolg","jjolm","jjolb","jjols","jjolt","jjolp","jjolh","jjom","jjob","jjobs","jjos","jjoss","jjong","jjoj","jjoc","jjok","jjot","jjop","jjoh","jjwa","jjwag","jjwagg","jjwags","jjwan","jjwanj","jjwanh","jjwad","jjwal","jjwalg","jjwalm","jjwalb","jjwals","jjwalt","jjwalp","jjwalh","jjwam","jjwab","jjwabs","jjwas","jjwass","jjwang","jjwaj","jjwac","jjwak","jjwat","jjwap","jjwah","jjwae","jjwaeg","jjwaegg","jjwaegs","jjwaen","jjwaenj","jjwaenh","jjwaed","jjwael","jjwaelg","jjwaelm","jjwaelb"],["jjwaels","jjwaelt","jjwaelp","jjwaelh","jjwaem","jjwaeb","jjwaebs","jjwaes","jjwaess","jjwaeng","jjwaej","jjwaec","jjwaek","jjwaet","jjwaep","jjwaeh","jjoe","jjoeg","jjoegg","jjoegs","jjoen","jjoenj","jjoenh","jjoed","jjoel","jjoelg","jjoelm","jjoelb","jjoels","jjoelt","jjoelp","jjoelh","jjoem","jjoeb","jjoebs","jjoes","jjoess","jjoeng","jjoej","jjoec","jjoek","jjoet","jjoep","jjoeh","jjyo","jjyog","jjyogg","jjyogs","jjyon","jjyonj","jjyonh","jjyod","jjyol","jjyolg","jjyolm","jjyolb","jjyols","jjyolt","jjyolp","jjyolh","jjyom","jjyob","jjyobs","jjyos","jjyoss","jjyong","jjyoj","jjyoc","jjyok","jjyot","jjyop","jjyoh","jju","jjug","jjugg","jjugs","jjun","jjunj","jjunh","jjud","jjul","jjulg","jjulm","jjulb","jjuls","jjult","jjulp","jjulh","jjum","jjub","jjubs","jjus","jjuss","jjung","jjuj","jjuc","jjuk","jjut","jjup","jjuh","jjweo","jjweog","jjweogg","jjweogs","jjweon","jjweonj","jjweonh","jjweod","jjweol","jjweolg","jjweolm","jjweolb","jjweols","jjweolt","jjweolp","jjweolh","jjweom","jjweob","jjweobs","jjweos","jjweoss","jjweong","jjweoj","jjweoc","jjweok","jjweot","jjweop","jjweoh","jjwe","jjweg","jjwegg","jjwegs","jjwen","jjwenj","jjwenh","jjwed","jjwel","jjwelg","jjwelm","jjwelb","jjwels","jjwelt","jjwelp","jjwelh","jjwem","jjweb","jjwebs","jjwes","jjwess","jjweng","jjwej","jjwec","jjwek","jjwet","jjwep","jjweh","jjwi","jjwig","jjwigg","jjwigs","jjwin","jjwinj","jjwinh","jjwid","jjwil","jjwilg","jjwilm","jjwilb","jjwils","jjwilt","jjwilp","jjwilh","jjwim","jjwib","jjwibs","jjwis","jjwiss","jjwing","jjwij","jjwic","jjwik","jjwit","jjwip","jjwih","jjyu","jjyug","jjyugg","jjyugs","jjyun","jjyunj","jjyunh","jjyud","jjyul","jjyulg","jjyulm","jjyulb","jjyuls","jjyult","jjyulp","jjyulh","jjyum","jjyub","jjyubs","jjyus","jjyuss","jjyung","jjyuj","jjyuc","jjyuk","jjyut","jjyup","jjyuh","jjeu","jjeug","jjeugg","jjeugs","jjeun","jjeunj","jjeunh","jjeud","jjeul","jjeulg","jjeulm","jjeulb","jjeuls","jjeult","jjeulp","jjeulh","jjeum","jjeub","jjeubs","jjeus","jjeuss","jjeung","jjeuj","jjeuc","jjeuk","jjeut","jjeup","jjeuh","jjyi","jjyig","jjyigg","jjyigs","jjyin","jjyinj","jjyinh","jjyid","jjyil","jjyilg","jjyilm","jjyilb","jjyils","jjyilt","jjyilp","jjyilh"],["jjyim","jjyib","jjyibs","jjyis","jjyiss","jjying","jjyij","jjyic","jjyik","jjyit","jjyip","jjyih","jji","jjig","jjigg","jjigs","jjin","jjinj","jjinh","jjid","jjil","jjilg","jjilm","jjilb","jjils","jjilt","jjilp","jjilh","jjim","jjib","jjibs","jjis","jjiss","jjing","jjij","jjic","jjik","jjit","jjip","jjih","ca","cag","cagg","cags","can","canj","canh","cad","cal","calg","calm","calb","cals","calt","calp","calh","cam","cab","cabs","cas","cass","cang","caj","cac","cak","cat","cap","cah","cae","caeg","caegg","caegs","caen","caenj","caenh","caed","cael","caelg","caelm","caelb","caels","caelt","caelp","caelh","caem","caeb","caebs","caes","caess","caeng","caej","caec","caek","caet","caep","caeh","cya","cyag","cyagg","cyags","cyan","cyanj","cyanh","cyad","cyal","cyalg","cyalm","cyalb","cyals","cyalt","cyalp","cyalh","cyam","cyab","cyabs","cyas","cyass","cyang","cyaj","cyac","cyak","cyat","cyap","cyah","cyae","cyaeg","cyaegg","cyaegs","cyaen","cyaenj","cyaenh","cyaed","cyael","cyaelg","cyaelm","cyaelb","cyaels","cyaelt","cyaelp","cyaelh","cyaem","cyaeb","cyaebs","cyaes","cyaess","cyaeng","cyaej","cyaec","cyaek","cyaet","cyaep","cyaeh","ceo","ceog","ceogg","ceogs","ceon","ceonj","ceonh","ceod","ceol","ceolg","ceolm","ceolb","ceols","ceolt","ceolp","ceolh","ceom","ceob","ceobs","ceos","ceoss","ceong","ceoj","ceoc","ceok","ceot","ceop","ceoh","ce","ceg","cegg","cegs","cen","cenj","cenh","ced","cel","celg","celm","celb","cels","celt","celp","celh","cem","ceb","cebs","ces","cess","ceng","cej","cec","cek","cet","cep","ceh","cyeo","cyeog","cyeogg","cyeogs","cyeon","cyeonj","cyeonh","cyeod","cyeol","cyeolg","cyeolm","cyeolb","cyeols","cyeolt","cyeolp","cyeolh","cyeom","cyeob","cyeobs","cyeos","cyeoss","cyeong","cyeoj","cyeoc","cyeok","cyeot","cyeop","cyeoh","cye","cyeg","cyegg","cyegs","cyen","cyenj","cyenh","cyed","cyel","cyelg","cyelm","cyelb","cyels","cyelt","cyelp","cyelh","cyem","cyeb","cyebs","cyes"],["cyess","cyeng","cyej","cyec","cyek","cyet","cyep","cyeh","co","cog","cogg","cogs","con","conj","conh","cod","col","colg","colm","colb","cols","colt","colp","colh","com","cob","cobs","cos","coss","cong","coj","coc","cok","cot","cop","coh","cwa","cwag","cwagg","cwags","cwan","cwanj","cwanh","cwad","cwal","cwalg","cwalm","cwalb","cwals","cwalt","cwalp","cwalh","cwam","cwab","cwabs","cwas","cwass","cwang","cwaj","cwac","cwak","cwat","cwap","cwah","cwae","cwaeg","cwaegg","cwaegs","cwaen","cwaenj","cwaenh","cwaed","cwael","cwaelg","cwaelm","cwaelb","cwaels","cwaelt","cwaelp","cwaelh","cwaem","cwaeb","cwaebs","cwaes","cwaess","cwaeng","cwaej","cwaec","cwaek","cwaet","cwaep","cwaeh","coe","coeg","coegg","coegs","coen","coenj","coenh","coed","coel","coelg","coelm","coelb","coels","coelt","coelp","coelh","coem","coeb","coebs","coes","coess","coeng","coej","coec","coek","coet","coep","coeh","cyo","cyog","cyogg","cyogs","cyon","cyonj","cyonh","cyod","cyol","cyolg","cyolm","cyolb","cyols","cyolt","cyolp","cyolh","cyom","cyob","cyobs","cyos","cyoss","cyong","cyoj","cyoc","cyok","cyot","cyop","cyoh","cu","cug","cugg","cugs","cun","cunj","cunh","cud","cul","culg","culm","culb","culs","cult","culp","culh","cum","cub","cubs","cus","cuss","cung","cuj","cuc","cuk","cut","cup","cuh","cweo","cweog","cweogg","cweogs","cweon","cweonj","cweonh","cweod","cweol","cweolg","cweolm","cweolb","cweols","cweolt","cweolp","cweolh","cweom","cweob","cweobs","cweos","cweoss","cweong","cweoj","cweoc","cweok","cweot","cweop","cweoh","cwe","cweg","cwegg","cwegs","cwen","cwenj","cwenh","cwed","cwel","cwelg","cwelm","cwelb","cwels","cwelt","cwelp","cwelh","cwem","cweb","cwebs","cwes","cwess","cweng","cwej","cwec","cwek","cwet","cwep","cweh","cwi","cwig","cwigg","cwigs","cwin","cwinj","cwinh","cwid","cwil","cwilg","cwilm","cwilb","cwils","cwilt","cwilp","cwilh","cwim","cwib","cwibs","cwis","cwiss","cwing","cwij","cwic"],["cwik","cwit","cwip","cwih","cyu","cyug","cyugg","cyugs","cyun","cyunj","cyunh","cyud","cyul","cyulg","cyulm","cyulb","cyuls","cyult","cyulp","cyulh","cyum","cyub","cyubs","cyus","cyuss","cyung","cyuj","cyuc","cyuk","cyut","cyup","cyuh","ceu","ceug","ceugg","ceugs","ceun","ceunj","ceunh","ceud","ceul","ceulg","ceulm","ceulb","ceuls","ceult","ceulp","ceulh","ceum","ceub","ceubs","ceus","ceuss","ceung","ceuj","ceuc","ceuk","ceut","ceup","ceuh","cyi","cyig","cyigg","cyigs","cyin","cyinj","cyinh","cyid","cyil","cyilg","cyilm","cyilb","cyils","cyilt","cyilp","cyilh","cyim","cyib","cyibs","cyis","cyiss","cying","cyij","cyic","cyik","cyit","cyip","cyih","ci","cig","cigg","cigs","cin","cinj","cinh","cid","cil","cilg","cilm","cilb","cils","cilt","cilp","cilh","cim","cib","cibs","cis","ciss","cing","cij","cic","cik","cit","cip","cih","ka","kag","kagg","kags","kan","kanj","kanh","kad","kal","kalg","kalm","kalb","kals","kalt","kalp","kalh","kam","kab","kabs","kas","kass","kang","kaj","kac","kak","kat","kap","kah","kae","kaeg","kaegg","kaegs","kaen","kaenj","kaenh","kaed","kael","kaelg","kaelm","kaelb","kaels","kaelt","kaelp","kaelh","kaem","kaeb","kaebs","kaes","kaess","kaeng","kaej","kaec","kaek","kaet","kaep","kaeh","kya","kyag","kyagg","kyags","kyan","kyanj","kyanh","kyad","kyal","kyalg","kyalm","kyalb","kyals","kyalt","kyalp","kyalh","kyam","kyab","kyabs","kyas","kyass","kyang","kyaj","kyac","kyak","kyat","kyap","kyah","kyae","kyaeg","kyaegg","kyaegs","kyaen","kyaenj","kyaenh","kyaed","kyael","kyaelg","kyaelm","kyaelb","kyaels","kyaelt","kyaelp","kyaelh","kyaem","kyaeb","kyaebs","kyaes","kyaess","kyaeng","kyaej","kyaec","kyaek","kyaet","kyaep","kyaeh","keo","keog","keogg","keogs","keon","keonj","keonh","keod","keol","keolg","keolm","keolb","keols","keolt","keolp","keolh","keom","keob","keobs","keos","keoss","keong","keoj","keoc","keok","keot","keop","keoh"],["ke","keg","kegg","kegs","ken","kenj","kenh","ked","kel","kelg","kelm","kelb","kels","kelt","kelp","kelh","kem","keb","kebs","kes","kess","keng","kej","kec","kek","ket","kep","keh","kyeo","kyeog","kyeogg","kyeogs","kyeon","kyeonj","kyeonh","kyeod","kyeol","kyeolg","kyeolm","kyeolb","kyeols","kyeolt","kyeolp","kyeolh","kyeom","kyeob","kyeobs","kyeos","kyeoss","kyeong","kyeoj","kyeoc","kyeok","kyeot","kyeop","kyeoh","kye","kyeg","kyegg","kyegs","kyen","kyenj","kyenh","kyed","kyel","kyelg","kyelm","kyelb","kyels","kyelt","kyelp","kyelh","kyem","kyeb","kyebs","kyes","kyess","kyeng","kyej","kyec","kyek","kyet","kyep","kyeh","ko","kog","kogg","kogs","kon","konj","konh","kod","kol","kolg","kolm","kolb","kols","kolt","kolp","kolh","kom","kob","kobs","kos","koss","kong","koj","koc","kok","kot","kop","koh","kwa","kwag","kwagg","kwags","kwan","kwanj","kwanh","kwad","kwal","kwalg","kwalm","kwalb","kwals","kwalt","kwalp","kwalh","kwam","kwab","kwabs","kwas","kwass","kwang","kwaj","kwac","kwak","kwat","kwap","kwah","kwae","kwaeg","kwaegg","kwaegs","kwaen","kwaenj","kwaenh","kwaed","kwael","kwaelg","kwaelm","kwaelb","kwaels","kwaelt","kwaelp","kwaelh","kwaem","kwaeb","kwaebs","kwaes","kwaess","kwaeng","kwaej","kwaec","kwaek","kwaet","kwaep","kwaeh","koe","koeg","koegg","koegs","koen","koenj","koenh","koed","koel","koelg","koelm","koelb","koels","koelt","koelp","koelh","koem","koeb","koebs","koes","koess","koeng","koej","koec","koek","koet","koep","koeh","kyo","kyog","kyogg","kyogs","kyon","kyonj","kyonh","kyod","kyol","kyolg","kyolm","kyolb","kyols","kyolt","kyolp","kyolh","kyom","kyob","kyobs","kyos","kyoss","kyong","kyoj","kyoc","kyok","kyot","kyop","kyoh","ku","kug","kugg","kugs","kun","kunj","kunh","kud","kul","kulg","kulm","kulb","kuls","kult","kulp","kulh","kum","kub","kubs","kus","kuss","kung","kuj","kuc","kuk","kut","kup","kuh","kweo","kweog","kweogg","kweogs"],["kweon","kweonj","kweonh","kweod","kweol","kweolg","kweolm","kweolb","kweols","kweolt","kweolp","kweolh","kweom","kweob","kweobs","kweos","kweoss","kweong","kweoj","kweoc","kweok","kweot","kweop","kweoh","kwe","kweg","kwegg","kwegs","kwen","kwenj","kwenh","kwed","kwel","kwelg","kwelm","kwelb","kwels","kwelt","kwelp","kwelh","kwem","kweb","kwebs","kwes","kwess","kweng","kwej","kwec","kwek","kwet","kwep","kweh","kwi","kwig","kwigg","kwigs","kwin","kwinj","kwinh","kwid","kwil","kwilg","kwilm","kwilb","kwils","kwilt","kwilp","kwilh","kwim","kwib","kwibs","kwis","kwiss","kwing","kwij","kwic","kwik","kwit","kwip","kwih","kyu","kyug","kyugg","kyugs","kyun","kyunj","kyunh","kyud","kyul","kyulg","kyulm","kyulb","kyuls","kyult","kyulp","kyulh","kyum","kyub","kyubs","kyus","kyuss","kyung","kyuj","kyuc","kyuk","kyut","kyup","kyuh","keu","keug","keugg","keugs","keun","keunj","keunh","keud","keul","keulg","keulm","keulb","keuls","keult","keulp","keulh","keum","keub","keubs","keus","keuss","keung","keuj","keuc","keuk","keut","keup","keuh","kyi","kyig","kyigg","kyigs","kyin","kyinj","kyinh","kyid","kyil","kyilg","kyilm","kyilb","kyils","kyilt","kyilp","kyilh","kyim","kyib","kyibs","kyis","kyiss","kying","kyij","kyic","kyik","kyit","kyip","kyih","ki","kig","kigg","kigs","kin","kinj","kinh","kid","kil","kilg","kilm","kilb","kils","kilt","kilp","kilh","kim","kib","kibs","kis","kiss","king","kij","kic","kik","kit","kip","kih","ta","tag","tagg","tags","tan","tanj","tanh","tad","tal","talg","talm","talb","tals","talt","talp","talh","tam","tab","tabs","tas","tass","tang","taj","tac","tak","tat","tap","tah","tae","taeg","taegg","taegs","taen","taenj","taenh","taed","tael","taelg","taelm","taelb","taels","taelt","taelp","taelh","taem","taeb","taebs","taes","taess","taeng","taej","taec","taek","taet","taep","taeh","tya","tyag","tyagg","tyags","tyan","tyanj","tyanh","tyad"],["tyal","tyalg","tyalm","tyalb","tyals","tyalt","tyalp","tyalh","tyam","tyab","tyabs","tyas","tyass","tyang","tyaj","tyac","tyak","tyat","tyap","tyah","tyae","tyaeg","tyaegg","tyaegs","tyaen","tyaenj","tyaenh","tyaed","tyael","tyaelg","tyaelm","tyaelb","tyaels","tyaelt","tyaelp","tyaelh","tyaem","tyaeb","tyaebs","tyaes","tyaess","tyaeng","tyaej","tyaec","tyaek","tyaet","tyaep","tyaeh","teo","teog","teogg","teogs","teon","teonj","teonh","teod","teol","teolg","teolm","teolb","teols","teolt","teolp","teolh","teom","teob","teobs","teos","teoss","teong","teoj","teoc","teok","teot","teop","teoh","te","teg","tegg","tegs","ten","tenj","tenh","ted","tel","telg","telm","telb","tels","telt","telp","telh","tem","teb","tebs","tes","tess","teng","tej","tec","tek","tet","tep","teh","tyeo","tyeog","tyeogg","tyeogs","tyeon","tyeonj","tyeonh","tyeod","tyeol","tyeolg","tyeolm","tyeolb","tyeols","tyeolt","tyeolp","tyeolh","tyeom","tyeob","tyeobs","tyeos","tyeoss","tyeong","tyeoj","tyeoc","tyeok","tyeot","tyeop","tyeoh","tye","tyeg","tyegg","tyegs","tyen","tyenj","tyenh","tyed","tyel","tyelg","tyelm","tyelb","tyels","tyelt","tyelp","tyelh","tyem","tyeb","tyebs","tyes","tyess","tyeng","tyej","tyec","tyek","tyet","tyep","tyeh","to","tog","togg","togs","ton","tonj","tonh","tod","tol","tolg","tolm","tolb","tols","tolt","tolp","tolh","tom","tob","tobs","tos","toss","tong","toj","toc","tok","tot","top","toh","twa","twag","twagg","twags","twan","twanj","twanh","twad","twal","twalg","twalm","twalb","twals","twalt","twalp","twalh","twam","twab","twabs","twas","twass","twang","twaj","twac","twak","twat","twap","twah","twae","twaeg","twaegg","twaegs","twaen","twaenj","twaenh","twaed","twael","twaelg","twaelm","twaelb","twaels","twaelt","twaelp","twaelh","twaem","twaeb","twaebs","twaes","twaess","twaeng","twaej","twaec","twaek","twaet","twaep","twaeh","toe","toeg","toegg","toegs","toen","toenj","toenh","toed","toel","toelg","toelm","toelb"],["toels","toelt","toelp","toelh","toem","toeb","toebs","toes","toess","toeng","toej","toec","toek","toet","toep","toeh","tyo","tyog","tyogg","tyogs","tyon","tyonj","tyonh","tyod","tyol","tyolg","tyolm","tyolb","tyols","tyolt","tyolp","tyolh","tyom","tyob","tyobs","tyos","tyoss","tyong","tyoj","tyoc","tyok","tyot","tyop","tyoh","tu","tug","tugg","tugs","tun","tunj","tunh","tud","tul","tulg","tulm","tulb","tuls","tult","tulp","tulh","tum","tub","tubs","tus","tuss","tung","tuj","tuc","tuk","tut","tup","tuh","tweo","tweog","tweogg","tweogs","tweon","tweonj","tweonh","tweod","tweol","tweolg","tweolm","tweolb","tweols","tweolt","tweolp","tweolh","tweom","tweob","tweobs","tweos","tweoss","tweong","tweoj","tweoc","tweok","tweot","tweop","tweoh","twe","tweg","twegg","twegs","twen","twenj","twenh","twed","twel","twelg","twelm","twelb","twels","twelt","twelp","twelh","twem","tweb","twebs","twes","twess","tweng","twej","twec","twek","twet","twep","tweh","twi","twig","twigg","twigs","twin","twinj","twinh","twid","twil","twilg","twilm","twilb","twils","twilt","twilp","twilh","twim","twib","twibs","twis","twiss","twing","twij","twic","twik","twit","twip","twih","tyu","tyug","tyugg","tyugs","tyun","tyunj","tyunh","tyud","tyul","tyulg","tyulm","tyulb","tyuls","tyult","tyulp","tyulh","tyum","tyub","tyubs","tyus","tyuss","tyung","tyuj","tyuc","tyuk","tyut","tyup","tyuh","teu","teug","teugg","teugs","teun","teunj","teunh","teud","teul","teulg","teulm","teulb","teuls","teult","teulp","teulh","teum","teub","teubs","teus","teuss","teung","teuj","teuc","teuk","teut","teup","teuh","tyi","tyig","tyigg","tyigs","tyin","tyinj","tyinh","tyid","tyil","tyilg","tyilm","tyilb","tyils","tyilt","tyilp","tyilh","tyim","tyib","tyibs","tyis","tyiss","tying","tyij","tyic","tyik","tyit","tyip","tyih","ti","tig","tigg","tigs","tin","tinj","tinh","tid","til","tilg","tilm","tilb","tils","tilt","tilp","tilh"],["tim","tib","tibs","tis","tiss","ting","tij","tic","tik","tit","tip","tih","pa","pag","pagg","pags","pan","panj","panh","pad","pal","palg","palm","palb","pals","palt","palp","palh","pam","pab","pabs","pas","pass","pang","paj","pac","pak","pat","pap","pah","pae","paeg","paegg","paegs","paen","paenj","paenh","paed","pael","paelg","paelm","paelb","paels","paelt","paelp","paelh","paem","paeb","paebs","paes","paess","paeng","paej","paec","paek","paet","paep","paeh","pya","pyag","pyagg","pyags","pyan","pyanj","pyanh","pyad","pyal","pyalg","pyalm","pyalb","pyals","pyalt","pyalp","pyalh","pyam","pyab","pyabs","pyas","pyass","pyang","pyaj","pyac","pyak","pyat","pyap","pyah","pyae","pyaeg","pyaegg","pyaegs","pyaen","pyaenj","pyaenh","pyaed","pyael","pyaelg","pyaelm","pyaelb","pyaels","pyaelt","pyaelp","pyaelh","pyaem","pyaeb","pyaebs","pyaes","pyaess","pyaeng","pyaej","pyaec","pyaek","pyaet","pyaep","pyaeh","peo","peog","peogg","peogs","peon","peonj","peonh","peod","peol","peolg","peolm","peolb","peols","peolt","peolp","peolh","peom","peob","peobs","peos","peoss","peong","peoj","peoc","peok","peot","peop","peoh","pe","peg","pegg","pegs","pen","penj","penh","ped","pel","pelg","pelm","pelb","pels","pelt","pelp","pelh","pem","peb","pebs","pes","pess","peng","pej","pec","pek","pet","pep","peh","pyeo","pyeog","pyeogg","pyeogs","pyeon","pyeonj","pyeonh","pyeod","pyeol","pyeolg","pyeolm","pyeolb","pyeols","pyeolt","pyeolp","pyeolh","pyeom","pyeob","pyeobs","pyeos","pyeoss","pyeong","pyeoj","pyeoc","pyeok","pyeot","pyeop","pyeoh","pye","pyeg","pyegg","pyegs","pyen","pyenj","pyenh","pyed","pyel","pyelg","pyelm","pyelb","pyels","pyelt","pyelp","pyelh","pyem","pyeb","pyebs","pyes","pyess","pyeng","pyej","pyec","pyek","pyet","pyep","pyeh","po","pog","pogg","pogs","pon","ponj","ponh","pod","pol","polg","polm","polb","pols","polt","polp","polh","pom","pob","pobs","pos"],["poss","pong","poj","poc","pok","pot","pop","poh","pwa","pwag","pwagg","pwags","pwan","pwanj","pwanh","pwad","pwal","pwalg","pwalm","pwalb","pwals","pwalt","pwalp","pwalh","pwam","pwab","pwabs","pwas","pwass","pwang","pwaj","pwac","pwak","pwat","pwap","pwah","pwae","pwaeg","pwaegg","pwaegs","pwaen","pwaenj","pwaenh","pwaed","pwael","pwaelg","pwaelm","pwaelb","pwaels","pwaelt","pwaelp","pwaelh","pwaem","pwaeb","pwaebs","pwaes","pwaess","pwaeng","pwaej","pwaec","pwaek","pwaet","pwaep","pwaeh","poe","poeg","poegg","poegs","poen","poenj","poenh","poed","poel","poelg","poelm","poelb","poels","poelt","poelp","poelh","poem","poeb","poebs","poes","poess","poeng","poej","poec","poek","poet","poep","poeh","pyo","pyog","pyogg","pyogs","pyon","pyonj","pyonh","pyod","pyol","pyolg","pyolm","pyolb","pyols","pyolt","pyolp","pyolh","pyom","pyob","pyobs","pyos","pyoss","pyong","pyoj","pyoc","pyok","pyot","pyop","pyoh","pu","pug","pugg","pugs","pun","punj","punh","pud","pul","pulg","pulm","pulb","puls","pult","pulp","pulh","pum","pub","pubs","pus","puss","pung","puj","puc","puk","put","pup","puh","pweo","pweog","pweogg","pweogs","pweon","pweonj","pweonh","pweod","pweol","pweolg","pweolm","pweolb","pweols","pweolt","pweolp","pweolh","pweom","pweob","pweobs","pweos","pweoss","pweong","pweoj","pweoc","pweok","pweot","pweop","pweoh","pwe","pweg","pwegg","pwegs","pwen","pwenj","pwenh","pwed","pwel","pwelg","pwelm","pwelb","pwels","pwelt","pwelp","pwelh","pwem","pweb","pwebs","pwes","pwess","pweng","pwej","pwec","pwek","pwet","pwep","pweh","pwi","pwig","pwigg","pwigs","pwin","pwinj","pwinh","pwid","pwil","pwilg","pwilm","pwilb","pwils","pwilt","pwilp","pwilh","pwim","pwib","pwibs","pwis","pwiss","pwing","pwij","pwic","pwik","pwit","pwip","pwih","pyu","pyug","pyugg","pyugs","pyun","pyunj","pyunh","pyud","pyul","pyulg","pyulm","pyulb","pyuls","pyult","pyulp","pyulh","pyum","pyub","pyubs","pyus","pyuss","pyung","pyuj","pyuc"],["pyuk","pyut","pyup","pyuh","peu","peug","peugg","peugs","peun","peunj","peunh","peud","peul","peulg","peulm","peulb","peuls","peult","peulp","peulh","peum","peub","peubs","peus","peuss","peung","peuj","peuc","peuk","peut","peup","peuh","pyi","pyig","pyigg","pyigs","pyin","pyinj","pyinh","pyid","pyil","pyilg","pyilm","pyilb","pyils","pyilt","pyilp","pyilh","pyim","pyib","pyibs","pyis","pyiss","pying","pyij","pyic","pyik","pyit","pyip","pyih","pi","pig","pigg","pigs","pin","pinj","pinh","pid","pil","pilg","pilm","pilb","pils","pilt","pilp","pilh","pim","pib","pibs","pis","piss","ping","pij","pic","pik","pit","pip","pih","ha","hag","hagg","hags","han","hanj","hanh","had","hal","halg","halm","halb","hals","halt","halp","halh","ham","hab","habs","has","hass","hang","haj","hac","hak","hat","hap","hah","hae","haeg","haegg","haegs","haen","haenj","haenh","haed","hael","haelg","haelm","haelb","haels","haelt","haelp","haelh","haem","haeb","haebs","haes","haess","haeng","haej","haec","haek","haet","haep","haeh","hya","hyag","hyagg","hyags","hyan","hyanj","hyanh","hyad","hyal","hyalg","hyalm","hyalb","hyals","hyalt","hyalp","hyalh","hyam","hyab","hyabs","hyas","hyass","hyang","hyaj","hyac","hyak","hyat","hyap","hyah","hyae","hyaeg","hyaegg","hyaegs","hyaen","hyaenj","hyaenh","hyaed","hyael","hyaelg","hyaelm","hyaelb","hyaels","hyaelt","hyaelp","hyaelh","hyaem","hyaeb","hyaebs","hyaes","hyaess","hyaeng","hyaej","hyaec","hyaek","hyaet","hyaep","hyaeh","heo","heog","heogg","heogs","heon","heonj","heonh","heod","heol","heolg","heolm","heolb","heols","heolt","heolp","heolh","heom","heob","heobs","heos","heoss","heong","heoj","heoc","heok","heot","heop","heoh","he","heg","hegg","hegs","hen","henj","henh","hed","hel","helg","helm","helb","hels","helt","help","helh","hem","heb","hebs","hes","hess","heng","hej","hec","hek","het","hep","heh"],["hyeo","hyeog","hyeogg","hyeogs","hyeon","hyeonj","hyeonh","hyeod","hyeol","hyeolg","hyeolm","hyeolb","hyeols","hyeolt","hyeolp","hyeolh","hyeom","hyeob","hyeobs","hyeos","hyeoss","hyeong","hyeoj","hyeoc","hyeok","hyeot","hyeop","hyeoh","hye","hyeg","hyegg","hyegs","hyen","hyenj","hyenh","hyed","hyel","hyelg","hyelm","hyelb","hyels","hyelt","hyelp","hyelh","hyem","hyeb","hyebs","hyes","hyess","hyeng","hyej","hyec","hyek","hyet","hyep","hyeh","ho","hog","hogg","hogs","hon","honj","honh","hod","hol","holg","holm","holb","hols","holt","holp","holh","hom","hob","hobs","hos","hoss","hong","hoj","hoc","hok","hot","hop","hoh","hwa","hwag","hwagg","hwags","hwan","hwanj","hwanh","hwad","hwal","hwalg","hwalm","hwalb","hwals","hwalt","hwalp","hwalh","hwam","hwab","hwabs","hwas","hwass","hwang","hwaj","hwac","hwak","hwat","hwap","hwah","hwae","hwaeg","hwaegg","hwaegs","hwaen","hwaenj","hwaenh","hwaed","hwael","hwaelg","hwaelm","hwaelb","hwaels","hwaelt","hwaelp","hwaelh","hwaem","hwaeb","hwaebs","hwaes","hwaess","hwaeng","hwaej","hwaec","hwaek","hwaet","hwaep","hwaeh","hoe","hoeg","hoegg","hoegs","hoen","hoenj","hoenh","hoed","hoel","hoelg","hoelm","hoelb","hoels","hoelt","hoelp","hoelh","hoem","hoeb","hoebs","hoes","hoess","hoeng","hoej","hoec","hoek","hoet","hoep","hoeh","hyo","hyog","hyogg","hyogs","hyon","hyonj","hyonh","hyod","hyol","hyolg","hyolm","hyolb","hyols","hyolt","hyolp","hyolh","hyom","hyob","hyobs","hyos","hyoss","hyong","hyoj","hyoc","hyok","hyot","hyop","hyoh","hu","hug","hugg","hugs","hun","hunj","hunh","hud","hul","hulg","hulm","hulb","huls","hult","hulp","hulh","hum","hub","hubs","hus","huss","hung","huj","huc","huk","hut","hup","huh","hweo","hweog","hweogg","hweogs","hweon","hweonj","hweonh","hweod","hweol","hweolg","hweolm","hweolb","hweols","hweolt","hweolp","hweolh","hweom","hweob","hweobs","hweos","hweoss","hweong","hweoj","hweoc","hweok","hweot","hweop","hweoh","hwe","hweg","hwegg","hwegs"],["hwen","hwenj","hwenh","hwed","hwel","hwelg","hwelm","hwelb","hwels","hwelt","hwelp","hwelh","hwem","hweb","hwebs","hwes","hwess","hweng","hwej","hwec","hwek","hwet","hwep","hweh","hwi","hwig","hwigg","hwigs","hwin","hwinj","hwinh","hwid","hwil","hwilg","hwilm","hwilb","hwils","hwilt","hwilp","hwilh","hwim","hwib","hwibs","hwis","hwiss","hwing","hwij","hwic","hwik","hwit","hwip","hwih","hyu","hyug","hyugg","hyugs","hyun","hyunj","hyunh","hyud","hyul","hyulg","hyulm","hyulb","hyuls","hyult","hyulp","hyulh","hyum","hyub","hyubs","hyus","hyuss","hyung","hyuj","hyuc","hyuk","hyut","hyup","hyuh","heu","heug","heugg","heugs","heun","heunj","heunh","heud","heul","heulg","heulm","heulb","heuls","heult","heulp","heulh","heum","heub","heubs","heus","heuss","heung","heuj","heuc","heuk","heut","heup","heuh","hyi","hyig","hyigg","hyigs","hyin","hyinj","hyinh","hyid","hyil","hyilg","hyilm","hyilb","hyils","hyilt","hyilp","hyilh","hyim","hyib","hyibs","hyis","hyiss","hying","hyij","hyic","hyik","hyit","hyip","hyih","hi","hig","higg","higs","hin","hinj","hinh","hid","hil","hilg","hilm","hilb","hils","hilt","hilp","hilh","him","hib","hibs","his","hiss","hing","hij","hic","hik","hit","hip","hih"],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],["Kay","Kayng","Ke","Ko","Kol","Koc","Kwi","Kwi","Kyun","Kul","Kum","Na","Na","Na","La","Na","Na","Na","Na","Na","Nak","Nak","Nak","Nak","Nak","Nak","Nak","Nan","Nan","Nan","Nan","Nan","Nan","Nam","Nam","Nam","Nam","Nap","Nap","Nap","Nang","Nang","Nang","Nang","Nang","Nay","Nayng","No","No","No","No","No","No","No","No","No","No","No","No","Nok","Nok","Nok","Nok","Nok","Nok","Non","Nong","Nong","Nong","Nong","Noy","Noy","Noy","Noy","Nwu","Nwu","Nwu","Nwu","Nwu","Nwu","Nwu","Nwu","Nuk","Nuk","Num","Nung","Nung","Nung","Nung","Nung","Twu","La","Lak","Lak","Lan","Lyeng","Lo","Lyul","Li","Pey","Pen","Pyen","Pwu","Pwul","Pi","Sak","Sak","Sam","Sayk","Sayng","Sep","Sey","Sway","Sin","Sim","Sip","Ya","Yak","Yak","Yang","Yang","Yang","Yang","Yang","Yang","Yang","Yang","Ye","Ye","Ye","Ye","Ye","Ye","Ye","Ye","Ye","Ye","Ye","Yek","Yek","Yek","Yek","Yen","Yen","Yen","Yen","Yen","Yen","Yen","Yen","Yen","Yen","Yen","Yen","Yen","Yen","Yel","Yel","Yel","Yel","Yel","Yel","Yem","Yem","Yem","Yem","Yem","Yep","Yeng","Yeng","Yeng","Yeng","Yeng","Yeng","Yeng","Yeng","Yeng","Yeng","Yeng","Yeng","Yeng","Yey","Yey","Yey","Yey","O","Yo","Yo","Yo","Yo","Yo","Yo","Yo","Yo","Yo","Yo","Yong","Wun","Wen","Yu","Yu","Yu","Yu","Yu","Yu","Yu","Yu","Yu","Yu","Yuk","Yuk","Yuk","Yun","Yun","Yun","Yun","Yul","Yul","Yul","Yul","Yung","I","I","I","I","I","I","I","I","I","I","I","I","I","I","Ik","Ik","In","In","In","In","In","In","In","Im","Im","Im","Ip","Ip","Ip","Cang","Cek","Ci","Cip","Cha","Chek"],["Chey","Thak","Thak","Thang","Thayk","Thong","Pho","Phok","Hang","Hang","Hyen","Hwak","Wu","Huo",,,"Zhong",,"Qing",,,"Xi","Zhu","Yi","Li","Shen","Xiang","Fu","Jing","Jing","Yu",,"Hagi",,"Zhu",,,"Yi","Du",,,,"Fan","Si","Guan"],["ff","fi","fl","ffi","ffl","st","st",,,,,,,,,,,,,"mn","me","mi","vn","mkh",,,,,,"yi",,"ay","`",,"d","h","k","l","m","m","t","+","sh","s","sh","s","a","a",,"b","g","d","h","v","z",,"t","y","k","k","l",,"l",,"n","n",,"p","p",,"ts","ts","r","sh","t","vo","b","k","p","l"],[],[],[,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,"~",,,,,,,,,,,,,"..","--","-","_","_","(",") ","{","} ","[","] ","[(",")] ","<<",">> ","<","> ","[","] ","{","}",,,,,,,,,,,,",",",",".",,";",":","?","!","-","(",")","{","}","{","}","#","&","*","+","-","<",">","=",,"\\","$","%","@"],[,"!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/","0","1","2","3","4","5","6","7","8","9",":",";","<","=",">","?","@","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","[","\\","]","^","_","`","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","{","|","}","~",,,".","[","]",",","*","wo","a","i","u","e","o","ya","yu","yo","tu","+","a","i","u","e","o","ka","ki","ku","ke","ko","sa","si","su","se","so","ta","ti","tu","te","to","na","ni","nu","ne","no","ha","hi","hu","he","ho","ma","mi","mu","me","mo","ya","yu","yo","ra","ri","ru","re","ro","wa","n",":",";",,"g","gg","gs","n","nj","nh","d","dd","r","lg","lm","lb","ls","lt","lp","rh","m","b","bb","bs","s","ss",,"j","jj","c","k","t","p","h",,,,"a","ae","ya","yae","eo","e",,,"yeo","ye","o","wa","wae","oe",,,"yo","u","weo","we","wi","yu",,,"eu","yi","i",,,,"/C","PS","!","-","|","Y=","W=",,"|","-","|","-","|","#","O",,,,,,,,,,,"{","|","}"]];const i$1={};for(let n=0;n<a$1.length;n++)for(let e=0;e<a$1[n].length;e++){const u=a$1[n][e];if("string"==typeof u&&u.length){const a=String.fromCharCode((n<<8)+e);i$1[a]=u;}}function n(a){return (a||"").replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}function e$1(a){return /[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFC\uF900-\uFA6D\uFA70-\uFAD9]|\uD81B[\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]/.test(a)}function u(a){return /[\s!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDFFF]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/.test(a)}function o$1(a){switch(true){case a instanceof Array:const i=[];for(let n=0;n<a.length;n++)i[n]=o$1(a[n]);return i;case a instanceof Date:return new Date(a.valueOf());case a instanceof RegExp:return new RegExp(a.source,a.flags);case a instanceof Object:const n={};for(const i in a)Object.prototype.hasOwnProperty.call(a,i)&&(n[i]=o$1(a[i]));return n;default:return a}}function g(a,i){if(0===i.length)return  false;const n=Math.floor(i.length/2);switch(function(a,i){switch(true){case a<i[0]:return  -1;case a>i[1]:return 1}return 0}(a,i[n])){case  -1:return g(a,i.slice(0,n));case 1:return g(a,i.slice(n+1))}return  true}function h(a,i,e,u=[]){const o=u.length?RegExp(u.map(n).join("|"),"g"):null,g=RegExp(i.source,i.flags.replace("g","")+"g");let h="",s=0;for(;;){const i=g.exec(a);let n="",u=0;if(!i){h+=a.substring(s,a.length);break}for(;;){const a=o?o.exec(i[0]):null;if(!a){n+=i[0].length>u?e:"";break}n+=a.index>u?e:"",n+=a[0],u=o.lastIndex;}h+=a.substring(s,i.index)+n,s=g.lastIndex;}return h}a$1=void 0;const s$1={ignore:[],replace:[],replaceAfter:[],trim:false,unknown:"",fixChineseSpacing:true};class y{constructor(a=o$1(s$1),n=i$1){this.confOptions=a,this.map=n;}get options(){return o$1(Object.assign(Object.assign({},s$1),this.confOptions))}config(a,i=false){return i&&(this.confOptions={}),a&&"object"==typeof a&&(this.confOptions=o$1(a)),this.confOptions}codeMapReplace(a,i=[],n){let o=0,h="";const s=n.fixChineseSpacing&&e$1(a);let y=false;for(let l=0;l<a.length;l++){const b=/[\uD800-\uDBFF]/.test(a[l])&&/[\uDC00-\uDFFF]/.test(a[l+1])?a[l]+a[l+1]:a[l];let w,j=false;switch(true){case g(o,i):case 2===b.length&&g(o+1,i):w=b,i.find(a=>a[1]>=o&&a[0]===o)||(j=true);break;default:w=this.map[b]||n.unknown||"";}s&&(!y||j||u(w)||(w=" "+w),y=!!w&&e$1(b)),h+=w,o+=b.length,l+=b.length-1;}return h}formatReplaceOption(a){if(a instanceof Array)return o$1(a);const i=[];for(const n in a)Object.prototype.hasOwnProperty.call(a,n)&&i.push([n,a[n]]);return i}replaceString(a,i,e=[]){const u=o$1(i);let g=a;for(let a=0;a<u.length;a++){const i=u[a];switch(true){case i[0]instanceof RegExp:i[0]=RegExp(i[0].source,i[0].flags.replace("g","")+"g");break;case "string"==typeof i[0]&&i[0].length>0:i[0]=RegExp(n(i[0]),"g");break;default:i[0]=/[^\s\S]/;}g=h(g,i[0],i[1],e);}return g}setData(a,n=false){if(n&&(this.map=o$1(i$1)),a&&"object"==typeof a&&Object.keys(a).length){this.map=o$1(this.map);for(const i in a)Object.prototype.hasOwnProperty.call(a,i)&&i.length<3&&i<="􏿿"&&(this.map[i]=a[i]);}return this.map}transliterate(a,i){i="object"==typeof i?i:{};const n=o$1(Object.assign(Object.assign({},this.options),i));let e="string"==typeof a?a:String(a);const u=this.formatReplaceOption(n.replace);u.length&&(e=this.replaceString(e,u,n.ignore));const g=n.ignore&&n.ignore.length>0?function(a,i){let n=[];for(let e=0;e<i.length;e++){const u=i[e];let o=-1;for(;(o=a.indexOf(u,o+1))>-1;)n.push([o,o+u.length-1]);}const e=n.sort((a,i)=>a[0]-i[0]||a[1]-i[1]);let u;return n=[],e.forEach(a=>!u||a[0]>u[1]+1?n.push(u=a):a[1]>u[1]&&(u[1]=a[1])),n}(e,n.ignore):[];e=this.codeMapReplace(e,g,n),n.trim&&(e=e.trim());const h=this.formatReplaceOption(n.replaceAfter);return h.length&&(e=this.replaceString(e,h)),e}}const l$1=Object.assign(Object.assign({},o$1(s$1)),{allowedChars:"a-zA-Z0-9-_.~",lowercase:true,separator:"-",uppercase:false,fixChineseSpacing:true});const b=new y,w=b.transliterate.bind(b);w.config=b.config.bind(b),w.setData=b.setData.bind(b);const j=new class extends y{get options(){return o$1(Object.assign(Object.assign({},l$1),this.confOptions))}config(a,i=false){return i&&(this.confOptions={}),a&&"object"==typeof a&&(this.confOptions=o$1(a)),this.confOptions}slugify(a,i){i="object"==typeof i?i:{};const e=o$1(Object.assign(Object.assign({},this.options),i)),u=e.separator?n(e.separator):"";let g=this.transliterate(a,e);return g=h(g,RegExp(`[^${e.allowedChars}]+`,"g"),e.separator,e.ignore),u&&(g=g.replace(RegExp(`^${u}+|${u}$`,"g"),"")),e.lowercase&&(g=g.toLowerCase()),e.uppercase&&(g=g.toUpperCase()),g}},d=j.slugify.bind(j);d.config=j.config.bind(j),d.setData=j.setData.bind(j);

/**
 * Browser Image Compression
 * v2.0.2
 * by Donald <donaldcwl@gmail.com>
 * https://github.com/Donaldcwl/browser-image-compression
 */

function _mergeNamespaces(e,t){return t.forEach((function(t){t&&"string"!=typeof t&&!Array.isArray(t)&&Object.keys(t).forEach((function(r){if("default"!==r&&!(r in e)){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,i.get?i:{enumerable:true,get:function(){return t[r]}});}}));})),Object.freeze(e)}function copyExifWithoutOrientation(e,t){return new Promise((function(r,i){let o;return getApp1Segment(e).then((function(e){try{return o=e,r(new Blob([t.slice(0,2),o,t.slice(2)],{type:"image/jpeg"}))}catch(e){return i(e)}}),i)}))}const getApp1Segment=e=>new Promise(((t,r)=>{const i=new FileReader;i.addEventListener("load",(({target:{result:e}})=>{const i=new DataView(e);let o=0;if(65496!==i.getUint16(o))return r("not a valid JPEG");for(o+=2;;){const a=i.getUint16(o);if(65498===a)break;const s=i.getUint16(o+2);if(65505===a&&1165519206===i.getUint32(o+4)){const a=o+10;let f;switch(i.getUint16(a)){case 18761:f=true;break;case 19789:f=false;break;default:return r("TIFF header contains invalid endian")}if(42!==i.getUint16(a+2,f))return r("TIFF header contains invalid version");const l=i.getUint32(a+4,f),c=a+l+2+12*i.getUint16(a+l,f);for(let e=a+l+2;e<c;e+=12){if(274==i.getUint16(e,f)){if(3!==i.getUint16(e+2,f))return r("Orientation data type is invalid");if(1!==i.getUint32(e+4,f))return r("Orientation data count is invalid");i.setUint16(e+8,1,f);break}}return t(e.slice(o,o+2+s))}o+=2+s;}return t(new Blob)})),i.readAsArrayBuffer(e);}));var e={},t={get exports(){return e},set exports(t){e=t;}};!function(e){var r,i,UZIP={};t.exports=UZIP,UZIP.parse=function(e,t){for(var r=UZIP.bin.readUshort,i=UZIP.bin.readUint,o=0,a={},s=new Uint8Array(e),f=s.length-4;101010256!=i(s,f);)f--;o=f;o+=4;var l=r(s,o+=4);r(s,o+=2);var c=i(s,o+=2),u=i(s,o+=4);o+=4,o=u;for(var h=0;h<l;h++){i(s,o),o+=4,o+=4,o+=4,i(s,o+=4);c=i(s,o+=4);var d=i(s,o+=4),A=r(s,o+=4),g=r(s,o+2),p=r(s,o+4);o+=6;var m=i(s,o+=8);o+=4,o+=A+g+p,UZIP._readLocal(s,m,a,c,d,t);}return a},UZIP._readLocal=function(e,t,r,i,o,a){var s=UZIP.bin.readUshort,f=UZIP.bin.readUint;f(e,t),s(e,t+=4),s(e,t+=2);var l=s(e,t+=2);f(e,t+=2),f(e,t+=4),t+=4;var c=s(e,t+=8),u=s(e,t+=2);t+=2;var h=UZIP.bin.readUTF8(e,t,c);if(t+=c,t+=u,a)r[h]={size:o,csize:i};else {var d=new Uint8Array(e.buffer,t);if(0==l)r[h]=new Uint8Array(d.buffer.slice(t,t+i));else {if(8!=l)throw "unknown compression method: "+l;var A=new Uint8Array(o);UZIP.inflateRaw(d,A),r[h]=A;}}},UZIP.inflateRaw=function(e,t){return UZIP.F.inflate(e,t)},UZIP.inflate=function(e,t){return e[0],e[1],UZIP.inflateRaw(new Uint8Array(e.buffer,e.byteOffset+2,e.length-6),t)},UZIP.deflate=function(e,t){null==t&&(t={level:6});var r=0,i=new Uint8Array(50+Math.floor(1.1*e.length));i[r]=120,i[r+1]=156,r+=2,r=UZIP.F.deflateRaw(e,i,r,t.level);var o=UZIP.adler(e,0,e.length);return i[r+0]=o>>>24&255,i[r+1]=o>>>16&255,i[r+2]=o>>>8&255,i[r+3]=o>>>0&255,new Uint8Array(i.buffer,0,r+4)},UZIP.deflateRaw=function(e,t){null==t&&(t={level:6});var r=new Uint8Array(50+Math.floor(1.1*e.length)),i=UZIP.F.deflateRaw(e,r,i,t.level);return new Uint8Array(r.buffer,0,i)},UZIP.encode=function(e,t){null==t&&(t=false);var r=0,i=UZIP.bin.writeUint,o=UZIP.bin.writeUshort,a={};for(var s in e){var f=!UZIP._noNeed(s)&&!t,l=e[s],c=UZIP.crc.crc(l,0,l.length);a[s]={cpr:f,usize:l.length,crc:c,file:f?UZIP.deflateRaw(l):l};}for(var s in a)r+=a[s].file.length+30+46+2*UZIP.bin.sizeUTF8(s);r+=22;var u=new Uint8Array(r),h=0,d=[];for(var s in a){var A=a[s];d.push(h),h=UZIP._writeHeader(u,h,s,A,0);}var g=0,p=h;for(var s in a){A=a[s];d.push(h),h=UZIP._writeHeader(u,h,s,A,1,d[g++]);}var m=h-p;return i(u,h,101010256),h+=4,o(u,h+=4,g),o(u,h+=2,g),i(u,h+=2,m),i(u,h+=4,p),h+=4,h+=2,u.buffer},UZIP._noNeed=function(e){var t=e.split(".").pop().toLowerCase();return  -1!="png,jpg,jpeg,zip".indexOf(t)},UZIP._writeHeader=function(e,t,r,i,o,a){var s=UZIP.bin.writeUint,f=UZIP.bin.writeUshort,l=i.file;return s(e,t,0==o?67324752:33639248),t+=4,1==o&&(t+=2),f(e,t,20),f(e,t+=2,0),f(e,t+=2,i.cpr?8:0),s(e,t+=2,0),s(e,t+=4,i.crc),s(e,t+=4,l.length),s(e,t+=4,i.usize),f(e,t+=4,UZIP.bin.sizeUTF8(r)),f(e,t+=2,0),t+=2,1==o&&(t+=2,t+=2,s(e,t+=6,a),t+=4),t+=UZIP.bin.writeUTF8(e,t,r),0==o&&(e.set(l,t),t+=l.length),t},UZIP.crc={table:function(){for(var e=new Uint32Array(256),t=0;t<256;t++){for(var r=t,i=0;i<8;i++)1&r?r=3988292384^r>>>1:r>>>=1;e[t]=r;}return e}(),update:function(e,t,r,i){for(var o=0;o<i;o++)e=UZIP.crc.table[255&(e^t[r+o])]^e>>>8;return e},crc:function(e,t,r){return 4294967295^UZIP.crc.update(4294967295,e,t,r)}},UZIP.adler=function(e,t,r){for(var i=1,o=0,a=t,s=t+r;a<s;){for(var f=Math.min(a+5552,s);a<f;)o+=i+=e[a++];i%=65521,o%=65521;}return o<<16|i},UZIP.bin={readUshort:function(e,t){return e[t]|e[t+1]<<8},writeUshort:function(e,t,r){e[t]=255&r,e[t+1]=r>>8&255;},readUint:function(e,t){return 16777216*e[t+3]+(e[t+2]<<16|e[t+1]<<8|e[t])},writeUint:function(e,t,r){e[t]=255&r,e[t+1]=r>>8&255,e[t+2]=r>>16&255,e[t+3]=r>>24&255;},readASCII:function(e,t,r){for(var i="",o=0;o<r;o++)i+=String.fromCharCode(e[t+o]);return i},writeASCII:function(e,t,r){for(var i=0;i<r.length;i++)e[t+i]=r.charCodeAt(i);},pad:function(e){return e.length<2?"0"+e:e},readUTF8:function(e,t,r){for(var i,o="",a=0;a<r;a++)o+="%"+UZIP.bin.pad(e[t+a].toString(16));try{i=decodeURIComponent(o);}catch(i){return UZIP.bin.readASCII(e,t,r)}return i},writeUTF8:function(e,t,r){for(var i=r.length,o=0,a=0;a<i;a++){var s=r.charCodeAt(a);if(0==(4294967168&s))e[t+o]=s,o++;else if(0==(4294965248&s))e[t+o]=192|s>>6,e[t+o+1]=128|s>>0&63,o+=2;else if(0==(4294901760&s))e[t+o]=224|s>>12,e[t+o+1]=128|s>>6&63,e[t+o+2]=128|s>>0&63,o+=3;else {if(0!=(4292870144&s))throw "e";e[t+o]=240|s>>18,e[t+o+1]=128|s>>12&63,e[t+o+2]=128|s>>6&63,e[t+o+3]=128|s>>0&63,o+=4;}}return o},sizeUTF8:function(e){for(var t=e.length,r=0,i=0;i<t;i++){var o=e.charCodeAt(i);if(0==(4294967168&o))r++;else if(0==(4294965248&o))r+=2;else if(0==(4294901760&o))r+=3;else {if(0!=(4292870144&o))throw "e";r+=4;}}return r}},UZIP.F={},UZIP.F.deflateRaw=function(e,t,r,i){var o=[[0,0,0,0,0],[4,4,8,4,0],[4,5,16,8,0],[4,6,16,16,0],[4,10,16,32,0],[8,16,32,32,0],[8,16,128,128,0],[8,32,128,256,0],[32,128,258,1024,1],[32,258,258,4096,1]][i],a=UZIP.F.U,s=UZIP.F._goodIndex;UZIP.F._hash;var f=UZIP.F._putsE,l=0,c=r<<3,u=0,h=e.length;if(0==i){for(;l<h;){f(t,c,l+(_=Math.min(65535,h-l))==h?1:0),c=UZIP.F._copyExact(e,l,_,t,c+8),l+=_;}return c>>>3}var d=a.lits,A=a.strt,g=a.prev,p=0,m=0,w=0,v=0,b=0,y=0;for(h>2&&(A[y=UZIP.F._hash(e,0)]=0),l=0;l<h;l++){if(b=y,l+1<h-2){y=UZIP.F._hash(e,l+1);var E=l+1&32767;g[E]=A[y],A[y]=E;}if(u<=l){(p>14e3||m>26697)&&h-l>100&&(u<l&&(d[p]=l-u,p+=2,u=l),c=UZIP.F._writeBlock(l==h-1||u==h?1:0,d,p,v,e,w,l-w,t,c),p=m=v=0,w=l);var F=0;l<h-2&&(F=UZIP.F._bestMatch(e,l,g,b,Math.min(o[2],h-l),o[3]));var _=F>>>16,B=65535&F;if(0!=F){B=65535&F;var U=s(_=F>>>16,a.of0);a.lhst[257+U]++;var C=s(B,a.df0);a.dhst[C]++,v+=a.exb[U]+a.dxb[C],d[p]=_<<23|l-u,d[p+1]=B<<16|U<<8|C,p+=2,u=l+_;}else a.lhst[e[l]]++;m++;}}for(w==l&&0!=e.length||(u<l&&(d[p]=l-u,p+=2,u=l),c=UZIP.F._writeBlock(1,d,p,v,e,w,l-w,t,c),p=0,m=0,p=m=v=0,w=l);0!=(7&c);)c++;return c>>>3},UZIP.F._bestMatch=function(e,t,r,i,o,a){var s=32767&t,f=r[s],l=s-f+32768&32767;if(f==s||i!=UZIP.F._hash(e,t-l))return 0;for(var c=0,u=0,h=Math.min(32767,t);l<=h&&0!=--a&&f!=s;){if(0==c||e[t+c]==e[t+c-l]){var d=UZIP.F._howLong(e,t,l);if(d>c){if(u=l,(c=d)>=o)break;l+2<d&&(d=l+2);for(var A=0,g=0;g<d-2;g++){var p=t-l+g+32768&32767,m=p-r[p]+32768&32767;m>A&&(A=m,f=p);}}}l+=(s=f)-(f=r[s])+32768&32767;}return c<<16|u},UZIP.F._howLong=function(e,t,r){if(e[t]!=e[t-r]||e[t+1]!=e[t+1-r]||e[t+2]!=e[t+2-r])return 0;var i=t,o=Math.min(e.length,t+258);for(t+=3;t<o&&e[t]==e[t-r];)t++;return t-i},UZIP.F._hash=function(e,t){return (e[t]<<8|e[t+1])+(e[t+2]<<4)&65535},UZIP.saved=0,UZIP.F._writeBlock=function(e,t,r,i,o,a,s,f,l){var c,u,h,d,A,g,p,m,w,v=UZIP.F.U,b=UZIP.F._putsF,y=UZIP.F._putsE;v.lhst[256]++,u=(c=UZIP.F.getTrees())[0],h=c[1],d=c[2],A=c[3],g=c[4],p=c[5],m=c[6],w=c[7];var E=32+(0==(l+3&7)?0:8-(l+3&7))+(s<<3),F=i+UZIP.F.contSize(v.fltree,v.lhst)+UZIP.F.contSize(v.fdtree,v.dhst),_=i+UZIP.F.contSize(v.ltree,v.lhst)+UZIP.F.contSize(v.dtree,v.dhst);_+=14+3*p+UZIP.F.contSize(v.itree,v.ihst)+(2*v.ihst[16]+3*v.ihst[17]+7*v.ihst[18]);for(var B=0;B<286;B++)v.lhst[B]=0;for(B=0;B<30;B++)v.dhst[B]=0;for(B=0;B<19;B++)v.ihst[B]=0;var U=E<F&&E<_?0:F<_?1:2;if(b(f,l,e),b(f,l+1,U),l+=3,0==U){for(;0!=(7&l);)l++;l=UZIP.F._copyExact(o,a,s,f,l);}else {var C,I;if(1==U&&(C=v.fltree,I=v.fdtree),2==U){UZIP.F.makeCodes(v.ltree,u),UZIP.F.revCodes(v.ltree,u),UZIP.F.makeCodes(v.dtree,h),UZIP.F.revCodes(v.dtree,h),UZIP.F.makeCodes(v.itree,d),UZIP.F.revCodes(v.itree,d),C=v.ltree,I=v.dtree,y(f,l,A-257),y(f,l+=5,g-1),y(f,l+=5,p-4),l+=4;for(var Q=0;Q<p;Q++)y(f,l+3*Q,v.itree[1+(v.ordr[Q]<<1)]);l+=3*p,l=UZIP.F._codeTiny(m,v.itree,f,l),l=UZIP.F._codeTiny(w,v.itree,f,l);}for(var M=a,x=0;x<r;x+=2){for(var S=t[x],R=S>>>23,T=M+(8388607&S);M<T;)l=UZIP.F._writeLit(o[M++],C,f,l);if(0!=R){var O=t[x+1],P=O>>16,H=O>>8&255,L=255&O;y(f,l=UZIP.F._writeLit(257+H,C,f,l),R-v.of0[H]),l+=v.exb[H],b(f,l=UZIP.F._writeLit(L,I,f,l),P-v.df0[L]),l+=v.dxb[L],M+=R;}}l=UZIP.F._writeLit(256,C,f,l);}return l},UZIP.F._copyExact=function(e,t,r,i,o){var a=o>>>3;return i[a]=r,i[a+1]=r>>>8,i[a+2]=255-i[a],i[a+3]=255-i[a+1],a+=4,i.set(new Uint8Array(e.buffer,t,r),a),o+(r+4<<3)},UZIP.F.getTrees=function(){for(var e=UZIP.F.U,t=UZIP.F._hufTree(e.lhst,e.ltree,15),r=UZIP.F._hufTree(e.dhst,e.dtree,15),i=[],o=UZIP.F._lenCodes(e.ltree,i),a=[],s=UZIP.F._lenCodes(e.dtree,a),f=0;f<i.length;f+=2)e.ihst[i[f]]++;for(f=0;f<a.length;f+=2)e.ihst[a[f]]++;for(var l=UZIP.F._hufTree(e.ihst,e.itree,7),c=19;c>4&&0==e.itree[1+(e.ordr[c-1]<<1)];)c--;return [t,r,l,o,s,c,i,a]},UZIP.F.getSecond=function(e){for(var t=[],r=0;r<e.length;r+=2)t.push(e[r+1]);return t},UZIP.F.nonZero=function(e){for(var t="",r=0;r<e.length;r+=2)0!=e[r+1]&&(t+=(r>>1)+",");return t},UZIP.F.contSize=function(e,t){for(var r=0,i=0;i<t.length;i++)r+=t[i]*e[1+(i<<1)];return r},UZIP.F._codeTiny=function(e,t,r,i){for(var o=0;o<e.length;o+=2){var a=e[o],s=e[o+1];i=UZIP.F._writeLit(a,t,r,i);var f=16==a?2:17==a?3:7;a>15&&(UZIP.F._putsE(r,i,s,f),i+=f);}return i},UZIP.F._lenCodes=function(e,t){for(var r=e.length;2!=r&&0==e[r-1];)r-=2;for(var i=0;i<r;i+=2){var o=e[i+1],a=i+3<r?e[i+3]:-1,s=i+5<r?e[i+5]:-1,f=0==i?-1:e[i-1];if(0==o&&a==o&&s==o){for(var l=i+5;l+2<r&&e[l+2]==o;)l+=2;(c=Math.min(l+1-i>>>1,138))<11?t.push(17,c-3):t.push(18,c-11),i+=2*c-2;}else if(o==f&&a==o&&s==o){for(l=i+5;l+2<r&&e[l+2]==o;)l+=2;var c=Math.min(l+1-i>>>1,6);t.push(16,c-3),i+=2*c-2;}else t.push(o,0);}return r>>>1},UZIP.F._hufTree=function(e,t,r){var i=[],o=e.length,a=t.length,s=0;for(s=0;s<a;s+=2)t[s]=0,t[s+1]=0;for(s=0;s<o;s++)0!=e[s]&&i.push({lit:s,f:e[s]});var f=i.length,l=i.slice(0);if(0==f)return 0;if(1==f){var c=i[0].lit;l=0==c?1:0;return t[1+(c<<1)]=1,t[1+(l<<1)]=1,1}i.sort((function(e,t){return e.f-t.f}));var u=i[0],h=i[1],d=0,A=1,g=2;for(i[0]={lit:-1,f:u.f+h.f,l:u,r:h,d:0};A!=f-1;)u=d!=A&&(g==f||i[d].f<i[g].f)?i[d++]:i[g++],h=d!=A&&(g==f||i[d].f<i[g].f)?i[d++]:i[g++],i[A++]={lit:-1,f:u.f+h.f,l:u,r:h};var p=UZIP.F.setDepth(i[A-1],0);for(p>r&&(UZIP.F.restrictDepth(l,r,p),p=r),s=0;s<f;s++)t[1+(l[s].lit<<1)]=l[s].d;return p},UZIP.F.setDepth=function(e,t){return  -1!=e.lit?(e.d=t,t):Math.max(UZIP.F.setDepth(e.l,t+1),UZIP.F.setDepth(e.r,t+1))},UZIP.F.restrictDepth=function(e,t,r){var i=0,o=1<<r-t,a=0;for(e.sort((function(e,t){return t.d==e.d?e.f-t.f:t.d-e.d})),i=0;i<e.length&&e[i].d>t;i++){var s=e[i].d;e[i].d=t,a+=o-(1<<r-s);}for(a>>>=r-t;a>0;){(s=e[i].d)<t?(e[i].d++,a-=1<<t-s-1):i++;}for(;i>=0;i--)e[i].d==t&&a<0&&(e[i].d--,a++);0!=a&&console.log("debt left");},UZIP.F._goodIndex=function(e,t){var r=0;return t[16|r]<=e&&(r|=16),t[8|r]<=e&&(r|=8),t[4|r]<=e&&(r|=4),t[2|r]<=e&&(r|=2),t[1|r]<=e&&(r|=1),r},UZIP.F._writeLit=function(e,t,r,i){return UZIP.F._putsF(r,i,t[e<<1]),i+t[1+(e<<1)]},UZIP.F.inflate=function(e,t){var r=Uint8Array;if(3==e[0]&&0==e[1])return t||new r(0);var i=UZIP.F,o=i._bitsF,a=i._bitsE,s=i._decodeTiny,f=i.makeCodes,l=i.codes2map,c=i._get17,u=i.U,h=null==t;h&&(t=new r(e.length>>>2<<3));for(var d,A,g=0,p=0,m=0,w=0,v=0,b=0,y=0,E=0,F=0;0==g;)if(g=o(e,F,1),p=o(e,F+1,2),F+=3,0!=p){if(h&&(t=UZIP.F._check(t,E+(1<<17))),1==p&&(d=u.flmap,A=u.fdmap,b=511,y=31),2==p){m=a(e,F,5)+257,w=a(e,F+5,5)+1,v=a(e,F+10,4)+4,F+=14;for(var _=0;_<38;_+=2)u.itree[_]=0,u.itree[_+1]=0;var B=1;for(_=0;_<v;_++){var U=a(e,F+3*_,3);u.itree[1+(u.ordr[_]<<1)]=U,U>B&&(B=U);}F+=3*v,f(u.itree,B),l(u.itree,B,u.imap),d=u.lmap,A=u.dmap,F=s(u.imap,(1<<B)-1,m+w,e,F,u.ttree);var C=i._copyOut(u.ttree,0,m,u.ltree);b=(1<<C)-1;var I=i._copyOut(u.ttree,m,w,u.dtree);y=(1<<I)-1,f(u.ltree,C),l(u.ltree,C,d),f(u.dtree,I),l(u.dtree,I,A);}for(;;){var Q=d[c(e,F)&b];F+=15&Q;var M=Q>>>4;if(M>>>8==0)t[E++]=M;else {if(256==M)break;var x=E+M-254;if(M>264){var S=u.ldef[M-257];x=E+(S>>>3)+a(e,F,7&S),F+=7&S;}var R=A[c(e,F)&y];F+=15&R;var T=R>>>4,O=u.ddef[T],P=(O>>>4)+o(e,F,15&O);for(F+=15&O,h&&(t=UZIP.F._check(t,E+(1<<17)));E<x;)t[E]=t[E++-P],t[E]=t[E++-P],t[E]=t[E++-P],t[E]=t[E++-P];E=x;}}}else {0!=(7&F)&&(F+=8-(7&F));var H=4+(F>>>3),L=e[H-4]|e[H-3]<<8;h&&(t=UZIP.F._check(t,E+L)),t.set(new r(e.buffer,e.byteOffset+H,L),E),F=H+L<<3,E+=L;}return t.length==E?t:t.slice(0,E)},UZIP.F._check=function(e,t){var r=e.length;if(t<=r)return e;var i=new Uint8Array(Math.max(r<<1,t));return i.set(e,0),i},UZIP.F._decodeTiny=function(e,t,r,i,o,a){for(var s=UZIP.F._bitsE,f=UZIP.F._get17,l=0;l<r;){var c=e[f(i,o)&t];o+=15&c;var u=c>>>4;if(u<=15)a[l]=u,l++;else {var h=0,d=0;16==u?(d=3+s(i,o,2),o+=2,h=a[l-1]):17==u?(d=3+s(i,o,3),o+=3):18==u&&(d=11+s(i,o,7),o+=7);for(var A=l+d;l<A;)a[l]=h,l++;}}return o},UZIP.F._copyOut=function(e,t,r,i){for(var o=0,a=0,s=i.length>>>1;a<r;){var f=e[a+t];i[a<<1]=0,i[1+(a<<1)]=f,f>o&&(o=f),a++;}for(;a<s;)i[a<<1]=0,i[1+(a<<1)]=0,a++;return o},UZIP.F.makeCodes=function(e,t){for(var r,i,o,a,s=UZIP.F.U,f=e.length,l=s.bl_count,c=0;c<=t;c++)l[c]=0;for(c=1;c<f;c+=2)l[e[c]]++;var u=s.next_code;for(r=0,l[0]=0,i=1;i<=t;i++)r=r+l[i-1]<<1,u[i]=r;for(o=0;o<f;o+=2)0!=(a=e[o+1])&&(e[o]=u[a],u[a]++);},UZIP.F.codes2map=function(e,t,r){for(var i=e.length,o=UZIP.F.U.rev15,a=0;a<i;a+=2)if(0!=e[a+1])for(var s=a>>1,f=e[a+1],l=s<<4|f,c=t-f,u=e[a]<<c,h=u+(1<<c);u!=h;){r[o[u]>>>15-t]=l,u++;}},UZIP.F.revCodes=function(e,t){for(var r=UZIP.F.U.rev15,i=15-t,o=0;o<e.length;o+=2){var a=e[o]<<t-e[o+1];e[o]=r[a]>>>i;}},UZIP.F._putsE=function(e,t,r){r<<=7&t;var i=t>>>3;e[i]|=r,e[i+1]|=r>>>8;},UZIP.F._putsF=function(e,t,r){r<<=7&t;var i=t>>>3;e[i]|=r,e[i+1]|=r>>>8,e[i+2]|=r>>>16;},UZIP.F._bitsE=function(e,t,r){return (e[t>>>3]|e[1+(t>>>3)]<<8)>>>(7&t)&(1<<r)-1},UZIP.F._bitsF=function(e,t,r){return (e[t>>>3]|e[1+(t>>>3)]<<8|e[2+(t>>>3)]<<16)>>>(7&t)&(1<<r)-1},UZIP.F._get17=function(e,t){return (e[t>>>3]|e[1+(t>>>3)]<<8|e[2+(t>>>3)]<<16)>>>(7&t)},UZIP.F._get25=function(e,t){return (e[t>>>3]|e[1+(t>>>3)]<<8|e[2+(t>>>3)]<<16|e[3+(t>>>3)]<<24)>>>(7&t)},UZIP.F.U=(r=Uint16Array,i=Uint32Array,{next_code:new r(16),bl_count:new r(16),ordr:[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],of0:[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],exb:[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0],ldef:new r(32),df0:[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,65535,65535],dxb:[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0],ddef:new i(32),flmap:new r(512),fltree:[],fdmap:new r(32),fdtree:[],lmap:new r(32768),ltree:[],ttree:[],dmap:new r(32768),dtree:[],imap:new r(512),itree:[],rev15:new r(32768),lhst:new i(286),dhst:new i(30),ihst:new i(19),lits:new i(15e3),strt:new r(65536),prev:new r(32768)}),function(){for(var e=UZIP.F.U,t=0;t<32768;t++){var r=t;r=(4278255360&(r=(4042322160&(r=(3435973836&(r=(2863311530&r)>>>1|(1431655765&r)<<1))>>>2|(858993459&r)<<2))>>>4|(252645135&r)<<4))>>>8|(16711935&r)<<8,e.rev15[t]=(r>>>16|r<<16)>>>17;}function pushV(e,t,r){for(;0!=t--;)e.push(0,r);}for(t=0;t<32;t++)e.ldef[t]=e.of0[t]<<3|e.exb[t],e.ddef[t]=e.df0[t]<<4|e.dxb[t];pushV(e.fltree,144,8),pushV(e.fltree,112,9),pushV(e.fltree,24,7),pushV(e.fltree,8,8),UZIP.F.makeCodes(e.fltree,9),UZIP.F.codes2map(e.fltree,9,e.flmap),UZIP.F.revCodes(e.fltree,9),pushV(e.fdtree,32,5),UZIP.F.makeCodes(e.fdtree,5),UZIP.F.codes2map(e.fdtree,5,e.fdmap),UZIP.F.revCodes(e.fdtree,5),pushV(e.itree,19,0),pushV(e.ltree,286,0),pushV(e.dtree,30,0),pushV(e.ttree,320,0);}();}();var UZIP=_mergeNamespaces({__proto__:null,default:e},[e]);const UPNG=function(){var e={nextZero(e,t){for(;0!=e[t];)t++;return t},readUshort:(e,t)=>e[t]<<8|e[t+1],writeUshort(e,t,r){e[t]=r>>8&255,e[t+1]=255&r;},readUint:(e,t)=>16777216*e[t]+(e[t+1]<<16|e[t+2]<<8|e[t+3]),writeUint(e,t,r){e[t]=r>>24&255,e[t+1]=r>>16&255,e[t+2]=r>>8&255,e[t+3]=255&r;},readASCII(e,t,r){let i="";for(let o=0;o<r;o++)i+=String.fromCharCode(e[t+o]);return i},writeASCII(e,t,r){for(let i=0;i<r.length;i++)e[t+i]=r.charCodeAt(i);},readBytes(e,t,r){const i=[];for(let o=0;o<r;o++)i.push(e[t+o]);return i},pad:e=>e.length<2?`0${e}`:e,readUTF8(t,r,i){let o,a="";for(let o=0;o<i;o++)a+=`%${e.pad(t[r+o].toString(16))}`;try{o=decodeURIComponent(a);}catch(o){return e.readASCII(t,r,i)}return o}};function decodeImage(t,r,i,o){const a=r*i,s=_getBPP(o),f=Math.ceil(r*s/8),l=new Uint8Array(4*a),c=new Uint32Array(l.buffer),{ctype:u}=o,{depth:h}=o,d=e.readUshort;if(6==u){const e=a<<2;if(8==h)for(var A=0;A<e;A+=4)l[A]=t[A],l[A+1]=t[A+1],l[A+2]=t[A+2],l[A+3]=t[A+3];if(16==h)for(A=0;A<e;A++)l[A]=t[A<<1];}else if(2==u){const e=o.tabs.tRNS;if(null==e){if(8==h)for(A=0;A<a;A++){var g=3*A;c[A]=255<<24|t[g+2]<<16|t[g+1]<<8|t[g];}if(16==h)for(A=0;A<a;A++){g=6*A;c[A]=255<<24|t[g+4]<<16|t[g+2]<<8|t[g];}}else {var p=e[0];const r=e[1],i=e[2];if(8==h)for(A=0;A<a;A++){var m=A<<2;g=3*A;c[A]=255<<24|t[g+2]<<16|t[g+1]<<8|t[g],t[g]==p&&t[g+1]==r&&t[g+2]==i&&(l[m+3]=0);}if(16==h)for(A=0;A<a;A++){m=A<<2,g=6*A;c[A]=255<<24|t[g+4]<<16|t[g+2]<<8|t[g],d(t,g)==p&&d(t,g+2)==r&&d(t,g+4)==i&&(l[m+3]=0);}}}else if(3==u){const e=o.tabs.PLTE,s=o.tabs.tRNS,c=s?s.length:0;if(1==h)for(var w=0;w<i;w++){var v=w*f,b=w*r;for(A=0;A<r;A++){m=b+A<<2;var y=3*(E=t[v+(A>>3)]>>7-((7&A)<<0)&1);l[m]=e[y],l[m+1]=e[y+1],l[m+2]=e[y+2],l[m+3]=E<c?s[E]:255;}}if(2==h)for(w=0;w<i;w++)for(v=w*f,b=w*r,A=0;A<r;A++){m=b+A<<2,y=3*(E=t[v+(A>>2)]>>6-((3&A)<<1)&3);l[m]=e[y],l[m+1]=e[y+1],l[m+2]=e[y+2],l[m+3]=E<c?s[E]:255;}if(4==h)for(w=0;w<i;w++)for(v=w*f,b=w*r,A=0;A<r;A++){m=b+A<<2,y=3*(E=t[v+(A>>1)]>>4-((1&A)<<2)&15);l[m]=e[y],l[m+1]=e[y+1],l[m+2]=e[y+2],l[m+3]=E<c?s[E]:255;}if(8==h)for(A=0;A<a;A++){var E;m=A<<2,y=3*(E=t[A]);l[m]=e[y],l[m+1]=e[y+1],l[m+2]=e[y+2],l[m+3]=E<c?s[E]:255;}}else if(4==u){if(8==h)for(A=0;A<a;A++){m=A<<2;var F=t[_=A<<1];l[m]=F,l[m+1]=F,l[m+2]=F,l[m+3]=t[_+1];}if(16==h)for(A=0;A<a;A++){var _;m=A<<2,F=t[_=A<<2];l[m]=F,l[m+1]=F,l[m+2]=F,l[m+3]=t[_+2];}}else if(0==u)for(p=o.tabs.tRNS?o.tabs.tRNS:-1,w=0;w<i;w++){const e=w*f,i=w*r;if(1==h)for(var B=0;B<r;B++){var U=(F=255*(t[e+(B>>>3)]>>>7-(7&B)&1))==255*p?0:255;c[i+B]=U<<24|F<<16|F<<8|F;}else if(2==h)for(B=0;B<r;B++){U=(F=85*(t[e+(B>>>2)]>>>6-((3&B)<<1)&3))==85*p?0:255;c[i+B]=U<<24|F<<16|F<<8|F;}else if(4==h)for(B=0;B<r;B++){U=(F=17*(t[e+(B>>>1)]>>>4-((1&B)<<2)&15))==17*p?0:255;c[i+B]=U<<24|F<<16|F<<8|F;}else if(8==h)for(B=0;B<r;B++){U=(F=t[e+B])==p?0:255;c[i+B]=U<<24|F<<16|F<<8|F;}else if(16==h)for(B=0;B<r;B++){F=t[e+(B<<1)],U=d(t,e+(B<<1))==p?0:255;c[i+B]=U<<24|F<<16|F<<8|F;}}return l}function _decompress(e,r,i,o){const a=_getBPP(e),s=Math.ceil(i*a/8),f=new Uint8Array((s+1+e.interlace)*o);return r=e.tabs.CgBI?t(r,f):_inflate(r,f),0==e.interlace?r=_filterZero(r,e,0,i,o):1==e.interlace&&(r=function _readInterlace(e,t){const r=t.width,i=t.height,o=_getBPP(t),a=o>>3,s=Math.ceil(r*o/8),f=new Uint8Array(i*s);let l=0;const c=[0,0,4,0,2,0,1],u=[0,4,0,2,0,1,0],h=[8,8,8,4,4,2,2],d=[8,8,4,4,2,2,1];let A=0;for(;A<7;){const p=h[A],m=d[A];let w=0,v=0,b=c[A];for(;b<i;)b+=p,v++;let y=u[A];for(;y<r;)y+=m,w++;const E=Math.ceil(w*o/8);_filterZero(e,t,l,w,v);let F=0,_=c[A];for(;_<i;){let t=u[A],i=l+F*E<<3;for(;t<r;){var g;if(1==o)g=(g=e[i>>3])>>7-(7&i)&1,f[_*s+(t>>3)]|=g<<7-((7&t)<<0);if(2==o)g=(g=e[i>>3])>>6-(7&i)&3,f[_*s+(t>>2)]|=g<<6-((3&t)<<1);if(4==o)g=(g=e[i>>3])>>4-(7&i)&15,f[_*s+(t>>1)]|=g<<4-((1&t)<<2);if(o>=8){const r=_*s+t*a;for(let t=0;t<a;t++)f[r+t]=e[(i>>3)+t];}i+=o,t+=m;}F++,_+=p;}w*v!=0&&(l+=v*(1+E)),A+=1;}return f}(r,e)),r}function _inflate(e,r){return t(new Uint8Array(e.buffer,2,e.length-6),r)}var t=function(){const e={H:{}};return e.H.N=function(t,r){const i=Uint8Array;let o,a,s=0,f=0,l=0,c=0,u=0,h=0,d=0,A=0,g=0;if(3==t[0]&&0==t[1])return r||new i(0);const p=e.H,m=p.b,w=p.e,v=p.R,b=p.n,y=p.A,E=p.Z,F=p.m,_=null==r;for(_&&(r=new i(t.length>>>2<<5));0==s;)if(s=m(t,g,1),f=m(t,g+1,2),g+=3,0!=f){if(_&&(r=e.H.W(r,A+(1<<17))),1==f&&(o=F.J,a=F.h,h=511,d=31),2==f){l=w(t,g,5)+257,c=w(t,g+5,5)+1,u=w(t,g+10,4)+4,g+=14;let e=1;for(var B=0;B<38;B+=2)F.Q[B]=0,F.Q[B+1]=0;for(B=0;B<u;B++){const r=w(t,g+3*B,3);F.Q[1+(F.X[B]<<1)]=r,r>e&&(e=r);}g+=3*u,b(F.Q,e),y(F.Q,e,F.u),o=F.w,a=F.d,g=v(F.u,(1<<e)-1,l+c,t,g,F.v);const r=p.V(F.v,0,l,F.C);h=(1<<r)-1;const i=p.V(F.v,l,c,F.D);d=(1<<i)-1,b(F.C,r),y(F.C,r,o),b(F.D,i),y(F.D,i,a);}for(;;){const e=o[E(t,g)&h];g+=15&e;const i=e>>>4;if(i>>>8==0)r[A++]=i;else {if(256==i)break;{let e=A+i-254;if(i>264){const r=F.q[i-257];e=A+(r>>>3)+w(t,g,7&r),g+=7&r;}const o=a[E(t,g)&d];g+=15&o;const s=o>>>4,f=F.c[s],l=(f>>>4)+m(t,g,15&f);for(g+=15&f;A<e;)r[A]=r[A++-l],r[A]=r[A++-l],r[A]=r[A++-l],r[A]=r[A++-l];A=e;}}}}else {0!=(7&g)&&(g+=8-(7&g));const o=4+(g>>>3),a=t[o-4]|t[o-3]<<8;_&&(r=e.H.W(r,A+a)),r.set(new i(t.buffer,t.byteOffset+o,a),A),g=o+a<<3,A+=a;}return r.length==A?r:r.slice(0,A)},e.H.W=function(e,t){const r=e.length;if(t<=r)return e;const i=new Uint8Array(r<<1);return i.set(e,0),i},e.H.R=function(t,r,i,o,a,s){const f=e.H.e,l=e.H.Z;let c=0;for(;c<i;){const e=t[l(o,a)&r];a+=15&e;const i=e>>>4;if(i<=15)s[c]=i,c++;else {let e=0,t=0;16==i?(t=3+f(o,a,2),a+=2,e=s[c-1]):17==i?(t=3+f(o,a,3),a+=3):18==i&&(t=11+f(o,a,7),a+=7);const r=c+t;for(;c<r;)s[c]=e,c++;}}return a},e.H.V=function(e,t,r,i){let o=0,a=0;const s=i.length>>>1;for(;a<r;){const r=e[a+t];i[a<<1]=0,i[1+(a<<1)]=r,r>o&&(o=r),a++;}for(;a<s;)i[a<<1]=0,i[1+(a<<1)]=0,a++;return o},e.H.n=function(t,r){const i=e.H.m,o=t.length;let a,s,f;let l;const c=i.j;for(var u=0;u<=r;u++)c[u]=0;for(u=1;u<o;u+=2)c[t[u]]++;const h=i.K;for(a=0,c[0]=0,s=1;s<=r;s++)a=a+c[s-1]<<1,h[s]=a;for(f=0;f<o;f+=2)l=t[f+1],0!=l&&(t[f]=h[l],h[l]++);},e.H.A=function(t,r,i){const o=t.length,a=e.H.m.r;for(let e=0;e<o;e+=2)if(0!=t[e+1]){const o=e>>1,s=t[e+1],f=o<<4|s,l=r-s;let c=t[e]<<l;const u=c+(1<<l);for(;c!=u;){i[a[c]>>>15-r]=f,c++;}}},e.H.l=function(t,r){const i=e.H.m.r,o=15-r;for(let e=0;e<t.length;e+=2){const a=t[e]<<r-t[e+1];t[e]=i[a]>>>o;}},e.H.M=function(e,t,r){r<<=7&t;const i=t>>>3;e[i]|=r,e[i+1]|=r>>>8;},e.H.I=function(e,t,r){r<<=7&t;const i=t>>>3;e[i]|=r,e[i+1]|=r>>>8,e[i+2]|=r>>>16;},e.H.e=function(e,t,r){return (e[t>>>3]|e[1+(t>>>3)]<<8)>>>(7&t)&(1<<r)-1},e.H.b=function(e,t,r){return (e[t>>>3]|e[1+(t>>>3)]<<8|e[2+(t>>>3)]<<16)>>>(7&t)&(1<<r)-1},e.H.Z=function(e,t){return (e[t>>>3]|e[1+(t>>>3)]<<8|e[2+(t>>>3)]<<16)>>>(7&t)},e.H.i=function(e,t){return (e[t>>>3]|e[1+(t>>>3)]<<8|e[2+(t>>>3)]<<16|e[3+(t>>>3)]<<24)>>>(7&t)},e.H.m=function(){const e=Uint16Array,t=Uint32Array;return {K:new e(16),j:new e(16),X:[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],S:[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],T:[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0],q:new e(32),p:[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,65535,65535],z:[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0],c:new t(32),J:new e(512),_:[],h:new e(32),$:[],w:new e(32768),C:[],v:[],d:new e(32768),D:[],u:new e(512),Q:[],r:new e(32768),s:new t(286),Y:new t(30),a:new t(19),t:new t(15e3),k:new e(65536),g:new e(32768)}}(),function(){const t=e.H.m;for(var r=0;r<32768;r++){let e=r;e=(2863311530&e)>>>1|(1431655765&e)<<1,e=(3435973836&e)>>>2|(858993459&e)<<2,e=(4042322160&e)>>>4|(252645135&e)<<4,e=(4278255360&e)>>>8|(16711935&e)<<8,t.r[r]=(e>>>16|e<<16)>>>17;}function n(e,t,r){for(;0!=t--;)e.push(0,r);}for(r=0;r<32;r++)t.q[r]=t.S[r]<<3|t.T[r],t.c[r]=t.p[r]<<4|t.z[r];n(t._,144,8),n(t._,112,9),n(t._,24,7),n(t._,8,8),e.H.n(t._,9),e.H.A(t._,9,t.J),e.H.l(t._,9),n(t.$,32,5),e.H.n(t.$,5),e.H.A(t.$,5,t.h),e.H.l(t.$,5),n(t.Q,19,0),n(t.C,286,0),n(t.D,30,0),n(t.v,320,0);}(),e.H.N}();function _getBPP(e){return [1,null,3,1,2,null,4][e.ctype]*e.depth}function _filterZero(e,t,r,i,o){let a=_getBPP(t);const s=Math.ceil(i*a/8);let f,l;a=Math.ceil(a/8);let c=e[r],u=0;if(c>1&&(e[r]=[0,0,1][c-2]),3==c)for(u=a;u<s;u++)e[u+1]=e[u+1]+(e[u+1-a]>>>1)&255;for(let t=0;t<o;t++)if(f=r+t*s,l=f+t+1,c=e[l-1],u=0,0==c)for(;u<s;u++)e[f+u]=e[l+u];else if(1==c){for(;u<a;u++)e[f+u]=e[l+u];for(;u<s;u++)e[f+u]=e[l+u]+e[f+u-a];}else if(2==c)for(;u<s;u++)e[f+u]=e[l+u]+e[f+u-s];else if(3==c){for(;u<a;u++)e[f+u]=e[l+u]+(e[f+u-s]>>>1);for(;u<s;u++)e[f+u]=e[l+u]+(e[f+u-s]+e[f+u-a]>>>1);}else {for(;u<a;u++)e[f+u]=e[l+u]+_paeth(0,e[f+u-s],0);for(;u<s;u++)e[f+u]=e[l+u]+_paeth(e[f+u-a],e[f+u-s],e[f+u-a-s]);}return e}function _paeth(e,t,r){const i=e+t-r,o=i-e,a=i-t,s=i-r;return o*o<=a*a&&o*o<=s*s?e:a*a<=s*s?t:r}function _IHDR(t,r,i){i.width=e.readUint(t,r),r+=4,i.height=e.readUint(t,r),r+=4,i.depth=t[r],r++,i.ctype=t[r],r++,i.compress=t[r],r++,i.filter=t[r],r++,i.interlace=t[r],r++;}function _copyTile(e,t,r,i,o,a,s,f,l){const c=Math.min(t,o),u=Math.min(r,a);let h=0,d=0;for(let r=0;r<u;r++)for(let a=0;a<c;a++)if(s>=0&&f>=0?(h=r*t+a<<2,d=(f+r)*o+s+a<<2):(h=(-f+r)*t-s+a<<2,d=r*o+a<<2),0==l)i[d]=e[h],i[d+1]=e[h+1],i[d+2]=e[h+2],i[d+3]=e[h+3];else if(1==l){var A=e[h+3]*(1/255),g=e[h]*A,p=e[h+1]*A,m=e[h+2]*A,w=i[d+3]*(1/255),v=i[d]*w,b=i[d+1]*w,y=i[d+2]*w;const t=1-A,r=A+w*t,o=0==r?0:1/r;i[d+3]=255*r,i[d+0]=(g+v*t)*o,i[d+1]=(p+b*t)*o,i[d+2]=(m+y*t)*o;}else if(2==l){A=e[h+3],g=e[h],p=e[h+1],m=e[h+2],w=i[d+3],v=i[d],b=i[d+1],y=i[d+2];A==w&&g==v&&p==b&&m==y?(i[d]=0,i[d+1]=0,i[d+2]=0,i[d+3]=0):(i[d]=g,i[d+1]=p,i[d+2]=m,i[d+3]=A);}else if(3==l){A=e[h+3],g=e[h],p=e[h+1],m=e[h+2],w=i[d+3],v=i[d],b=i[d+1],y=i[d+2];if(A==w&&g==v&&p==b&&m==y)continue;if(A<220&&w>20)return  false}return  true}return {decode:function decode(r){const i=new Uint8Array(r);let o=8;const a=e,s=a.readUshort,f=a.readUint,l={tabs:{},frames:[]},c=new Uint8Array(i.length);let u,h=0,d=0;const A=[137,80,78,71,13,10,26,10];for(var g=0;g<8;g++)if(i[g]!=A[g])throw "The input is not a PNG file!";for(;o<i.length;){const e=a.readUint(i,o);o+=4;const r=a.readASCII(i,o,4);if(o+=4,"IHDR"==r)_IHDR(i,o,l);else if("iCCP"==r){for(var p=o;0!=i[p];)p++;a.readASCII(i,o,p-o),i[p+1];const s=i.slice(p+2,o+e);let f=null;try{f=_inflate(s);}catch(e){f=t(s);}l.tabs[r]=f;}else if("CgBI"==r)l.tabs[r]=i.slice(o,o+4);else if("IDAT"==r){for(g=0;g<e;g++)c[h+g]=i[o+g];h+=e;}else if("acTL"==r)l.tabs[r]={num_frames:f(i,o),num_plays:f(i,o+4)},u=new Uint8Array(i.length);else if("fcTL"==r){if(0!=d)(E=l.frames[l.frames.length-1]).data=_decompress(l,u.slice(0,d),E.rect.width,E.rect.height),d=0;const e={x:f(i,o+12),y:f(i,o+16),width:f(i,o+4),height:f(i,o+8)};let t=s(i,o+22);t=s(i,o+20)/(0==t?100:t);const r={rect:e,delay:Math.round(1e3*t),dispose:i[o+24],blend:i[o+25]};l.frames.push(r);}else if("fdAT"==r){for(g=0;g<e-4;g++)u[d+g]=i[o+g+4];d+=e-4;}else if("pHYs"==r)l.tabs[r]=[a.readUint(i,o),a.readUint(i,o+4),i[o+8]];else if("cHRM"==r){l.tabs[r]=[];for(g=0;g<8;g++)l.tabs[r].push(a.readUint(i,o+4*g));}else if("tEXt"==r||"zTXt"==r){null==l.tabs[r]&&(l.tabs[r]={});var m=a.nextZero(i,o),w=a.readASCII(i,o,m-o),v=o+e-m-1;if("tEXt"==r)y=a.readASCII(i,m+1,v);else {var b=_inflate(i.slice(m+2,m+2+v));y=a.readUTF8(b,0,b.length);}l.tabs[r][w]=y;}else if("iTXt"==r){null==l.tabs[r]&&(l.tabs[r]={});m=0,p=o;m=a.nextZero(i,p);w=a.readASCII(i,p,m-p);const t=i[p=m+1];var y;i[p+1],p+=2,m=a.nextZero(i,p),a.readASCII(i,p,m-p),p=m+1,m=a.nextZero(i,p),a.readUTF8(i,p,m-p);v=e-((p=m+1)-o);if(0==t)y=a.readUTF8(i,p,v);else {b=_inflate(i.slice(p,p+v));y=a.readUTF8(b,0,b.length);}l.tabs[r][w]=y;}else if("PLTE"==r)l.tabs[r]=a.readBytes(i,o,e);else if("hIST"==r){const e=l.tabs.PLTE.length/3;l.tabs[r]=[];for(g=0;g<e;g++)l.tabs[r].push(s(i,o+2*g));}else if("tRNS"==r)3==l.ctype?l.tabs[r]=a.readBytes(i,o,e):0==l.ctype?l.tabs[r]=s(i,o):2==l.ctype&&(l.tabs[r]=[s(i,o),s(i,o+2),s(i,o+4)]);else if("gAMA"==r)l.tabs[r]=a.readUint(i,o)/1e5;else if("sRGB"==r)l.tabs[r]=i[o];else if("bKGD"==r)0==l.ctype||4==l.ctype?l.tabs[r]=[s(i,o)]:2==l.ctype||6==l.ctype?l.tabs[r]=[s(i,o),s(i,o+2),s(i,o+4)]:3==l.ctype&&(l.tabs[r]=i[o]);else if("IEND"==r)break;o+=e,a.readUint(i,o),o+=4;}var E;return 0!=d&&((E=l.frames[l.frames.length-1]).data=_decompress(l,u.slice(0,d),E.rect.width,E.rect.height)),l.data=_decompress(l,c,l.width,l.height),delete l.compress,delete l.interlace,delete l.filter,l},toRGBA8:function toRGBA8(e){const t=e.width,r=e.height;if(null==e.tabs.acTL)return [decodeImage(e.data,t,r,e).buffer];const i=[];null==e.frames[0].data&&(e.frames[0].data=e.data);const o=t*r*4,a=new Uint8Array(o),s=new Uint8Array(o),f=new Uint8Array(o);for(let c=0;c<e.frames.length;c++){const u=e.frames[c],h=u.rect.x,d=u.rect.y,A=u.rect.width,g=u.rect.height,p=decodeImage(u.data,A,g,e);if(0!=c)for(var l=0;l<o;l++)f[l]=a[l];if(0==u.blend?_copyTile(p,A,g,a,t,r,h,d,0):1==u.blend&&_copyTile(p,A,g,a,t,r,h,d,1),i.push(a.buffer.slice(0)),0==u.dispose);else if(1==u.dispose)_copyTile(s,A,g,a,t,r,h,d,0);else if(2==u.dispose)for(l=0;l<o;l++)a[l]=f[l];}return i},_paeth:_paeth,_copyTile:_copyTile,_bin:e}}();!function(){const{_copyTile:e}=UPNG,{_bin:t}=UPNG,r=UPNG._paeth;var i={table:function(){const e=new Uint32Array(256);for(let t=0;t<256;t++){let r=t;for(let e=0;e<8;e++)1&r?r=3988292384^r>>>1:r>>>=1;e[t]=r;}return e}(),update(e,t,r,o){for(let a=0;a<o;a++)e=i.table[255&(e^t[r+a])]^e>>>8;return e},crc:(e,t,r)=>4294967295^i.update(4294967295,e,t,r)};function addErr(e,t,r,i){t[r]+=e[0]*i>>4,t[r+1]+=e[1]*i>>4,t[r+2]+=e[2]*i>>4,t[r+3]+=e[3]*i>>4;}function N(e){return Math.max(0,Math.min(255,e))}function D(e,t){const r=e[0]-t[0],i=e[1]-t[1],o=e[2]-t[2],a=e[3]-t[3];return r*r+i*i+o*o+a*a}function dither(e,t,r,i,o,a,s){null==s&&(s=1);const f=i.length,l=[];for(var c=0;c<f;c++){const e=i[c];l.push([e>>>0&255,e>>>8&255,e>>>16&255,e>>>24&255]);}for(c=0;c<f;c++){let e=4294967295;for(var u=0,h=0;h<f;h++){var d=D(l[c],l[h]);h!=c&&d<e&&(e=d,u=h);}}const A=new Uint32Array(o.buffer),g=new Int16Array(t*r*4),p=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];for(c=0;c<p.length;c++)p[c]=255*((p[c]+.5)/16-.5);for(let o=0;o<r;o++)for(let w=0;w<t;w++){var m;c=4*(o*t+w);if(2!=s)m=[N(e[c]+g[c]),N(e[c+1]+g[c+1]),N(e[c+2]+g[c+2]),N(e[c+3]+g[c+3])];else {d=p[4*(3&o)+(3&w)];m=[N(e[c]+d),N(e[c+1]+d),N(e[c+2]+d),N(e[c+3]+d)];}u=0;let v=16777215;for(h=0;h<f;h++){const e=D(m,l[h]);e<v&&(v=e,u=h);}const b=l[u],y=[m[0]-b[0],m[1]-b[1],m[2]-b[2],m[3]-b[3]];1==s&&(w!=t-1&&addErr(y,g,c+4,7),o!=r-1&&(0!=w&&addErr(y,g,c+4*t-4,3),addErr(y,g,c+4*t,5),w!=t-1&&addErr(y,g,c+4*t+4,1))),a[c>>2]=u,A[c>>2]=i[u];}}function _main(e,r,o,a,s){null==s&&(s={});const{crc:f}=i,l=t.writeUint,c=t.writeUshort,u=t.writeASCII;let h=8;const d=e.frames.length>1;let A,g=false,p=33+(d?20:0);if(null!=s.sRGB&&(p+=13),null!=s.pHYs&&(p+=21),null!=s.iCCP&&(A=pako.deflate(s.iCCP),p+=21+A.length+4),3==e.ctype){for(var m=e.plte.length,w=0;w<m;w++)e.plte[w]>>>24!=255&&(g=true);p+=8+3*m+4+(g?8+1*m+4:0);}for(var v=0;v<e.frames.length;v++){d&&(p+=38),p+=(F=e.frames[v]).cimg.length+12,0!=v&&(p+=4);}p+=12;const b=new Uint8Array(p),y=[137,80,78,71,13,10,26,10];for(w=0;w<8;w++)b[w]=y[w];if(l(b,h,13),h+=4,u(b,h,"IHDR"),h+=4,l(b,h,r),h+=4,l(b,h,o),h+=4,b[h]=e.depth,h++,b[h]=e.ctype,h++,b[h]=0,h++,b[h]=0,h++,b[h]=0,h++,l(b,h,f(b,h-17,17)),h+=4,null!=s.sRGB&&(l(b,h,1),h+=4,u(b,h,"sRGB"),h+=4,b[h]=s.sRGB,h++,l(b,h,f(b,h-5,5)),h+=4),null!=s.iCCP){const e=13+A.length;l(b,h,e),h+=4,u(b,h,"iCCP"),h+=4,u(b,h,"ICC profile"),h+=11,h+=2,b.set(A,h),h+=A.length,l(b,h,f(b,h-(e+4),e+4)),h+=4;}if(null!=s.pHYs&&(l(b,h,9),h+=4,u(b,h,"pHYs"),h+=4,l(b,h,s.pHYs[0]),h+=4,l(b,h,s.pHYs[1]),h+=4,b[h]=s.pHYs[2],h++,l(b,h,f(b,h-13,13)),h+=4),d&&(l(b,h,8),h+=4,u(b,h,"acTL"),h+=4,l(b,h,e.frames.length),h+=4,l(b,h,null!=s.loop?s.loop:0),h+=4,l(b,h,f(b,h-12,12)),h+=4),3==e.ctype){l(b,h,3*(m=e.plte.length)),h+=4,u(b,h,"PLTE"),h+=4;for(w=0;w<m;w++){const t=3*w,r=e.plte[w],i=255&r,o=r>>>8&255,a=r>>>16&255;b[h+t+0]=i,b[h+t+1]=o,b[h+t+2]=a;}if(h+=3*m,l(b,h,f(b,h-3*m-4,3*m+4)),h+=4,g){l(b,h,m),h+=4,u(b,h,"tRNS"),h+=4;for(w=0;w<m;w++)b[h+w]=e.plte[w]>>>24&255;h+=m,l(b,h,f(b,h-m-4,m+4)),h+=4;}}let E=0;for(v=0;v<e.frames.length;v++){var F=e.frames[v];d&&(l(b,h,26),h+=4,u(b,h,"fcTL"),h+=4,l(b,h,E++),h+=4,l(b,h,F.rect.width),h+=4,l(b,h,F.rect.height),h+=4,l(b,h,F.rect.x),h+=4,l(b,h,F.rect.y),h+=4,c(b,h,a[v]),h+=2,c(b,h,1e3),h+=2,b[h]=F.dispose,h++,b[h]=F.blend,h++,l(b,h,f(b,h-30,30)),h+=4);const t=F.cimg;l(b,h,(m=t.length)+(0==v?0:4)),h+=4;const r=h;u(b,h,0==v?"IDAT":"fdAT"),h+=4,0!=v&&(l(b,h,E++),h+=4),b.set(t,h),h+=m,l(b,h,f(b,r,h-r)),h+=4;}return l(b,h,0),h+=4,u(b,h,"IEND"),h+=4,l(b,h,f(b,h-4,4)),h+=4,b.buffer}function compressPNG(e,t,r){for(let i=0;i<e.frames.length;i++){const o=e.frames[i];o.rect.width;const a=o.rect.height,s=new Uint8Array(a*o.bpl+a);o.cimg=_filterZero(o.img,a,o.bpp,o.bpl,s,t,r);}}function compress(t,r,i,o,a){const s=a[0],f=a[1],l=a[2],c=a[3],u=a[4],h=a[5];let d=6,A=8,g=255;for(var p=0;p<t.length;p++){const e=new Uint8Array(t[p]);for(var m=e.length,w=0;w<m;w+=4)g&=e[w+3];}const v=255!=g,b=function framize(t,r,i,o,a,s){const f=[];for(var l=0;l<t.length;l++){const h=new Uint8Array(t[l]),A=new Uint32Array(h.buffer);var c;let g=0,p=0,m=r,w=i,v=o?1:0;if(0!=l){const b=s||o||1==l||0!=f[l-2].dispose?1:2;let y=0,E=1e9;for(let e=0;e<b;e++){var u=new Uint8Array(t[l-1-e]);const o=new Uint32Array(t[l-1-e]);let s=r,f=i,c=-1,h=-1;for(let e=0;e<i;e++)for(let t=0;t<r;t++){A[d=e*r+t]!=o[d]&&(t<s&&(s=t),t>c&&(c=t),e<f&&(f=e),e>h&&(h=e));} -1==c&&(s=f=c=h=0),a&&(1==(1&s)&&s--,1==(1&f)&&f--);const v=(c-s+1)*(h-f+1);v<E&&(E=v,y=e,g=s,p=f,m=c-s+1,w=h-f+1);}u=new Uint8Array(t[l-1-y]);1==y&&(f[l-1].dispose=2),c=new Uint8Array(m*w*4),e(u,r,i,c,m,w,-g,-p,0),v=e(h,r,i,c,m,w,-g,-p,3)?1:0,1==v?_prepareDiff(h,r,i,c,{x:g,y:p,width:m,height:w}):e(h,r,i,c,m,w,-g,-p,0);}else c=h.slice(0);f.push({rect:{x:g,y:p,width:m,height:w},img:c,blend:v,dispose:0});}if(o)for(l=0;l<f.length;l++){if(1==(A=f[l]).blend)continue;const e=A.rect,o=f[l-1].rect,s=Math.min(e.x,o.x),c=Math.min(e.y,o.y),u={x:s,y:c,width:Math.max(e.x+e.width,o.x+o.width)-s,height:Math.max(e.y+e.height,o.y+o.height)-c};f[l-1].dispose=1,l-1!=0&&_updateFrame(t,r,i,f,l-1,u,a),_updateFrame(t,r,i,f,l,u,a);}let h=0;if(1!=t.length)for(var d=0;d<f.length;d++){var A;h+=(A=f[d]).rect.width*A.rect.height;}return f}(t,r,i,s,f,l),y={},E=[],F=[];if(0!=o){const e=[];for(w=0;w<b.length;w++)e.push(b[w].img.buffer);const t=function concatRGBA(e){let t=0;for(var r=0;r<e.length;r++)t+=e[r].byteLength;const i=new Uint8Array(t);let o=0;for(r=0;r<e.length;r++){const t=new Uint8Array(e[r]),a=t.length;for(let e=0;e<a;e+=4){let r=t[e],a=t[e+1],s=t[e+2];const f=t[e+3];0==f&&(r=a=s=0),i[o+e]=r,i[o+e+1]=a,i[o+e+2]=s,i[o+e+3]=f;}o+=a;}return i.buffer}(e),r=quantize(t,o);for(w=0;w<r.plte.length;w++)E.push(r.plte[w].est.rgba);let i=0;for(w=0;w<b.length;w++){const e=(B=b[w]).img.length;var _=new Uint8Array(r.inds.buffer,i>>2,e>>2);F.push(_);const t=new Uint8Array(r.abuf,i,e);h&&dither(B.img,B.rect.width,B.rect.height,E,t,_),B.img.set(t),i+=e;}}else for(p=0;p<b.length;p++){var B=b[p];const e=new Uint32Array(B.img.buffer);var U=B.rect.width;m=e.length,_=new Uint8Array(m);F.push(_);for(w=0;w<m;w++){const t=e[w];if(0!=w&&t==e[w-1])_[w]=_[w-1];else if(w>U&&t==e[w-U])_[w]=_[w-U];else {let e=y[t];if(null==e&&(y[t]=e=E.length,E.push(t),E.length>=300))break;_[w]=e;}}}const C=E.length;C<=256&&0==u&&(A=C<=2?1:C<=4?2:C<=16?4:8,A=Math.max(A,c));for(p=0;p<b.length;p++){(B=b[p]).rect.x,B.rect.y;U=B.rect.width;const e=B.rect.height;let t=B.img;new Uint32Array(t.buffer);let r=4*U,i=4;if(C<=256&&0==u){r=Math.ceil(A*U/8);var I=new Uint8Array(r*e);const o=F[p];for(let t=0;t<e;t++){w=t*r;const e=t*U;if(8==A)for(var Q=0;Q<U;Q++)I[w+Q]=o[e+Q];else if(4==A)for(Q=0;Q<U;Q++)I[w+(Q>>1)]|=o[e+Q]<<4-4*(1&Q);else if(2==A)for(Q=0;Q<U;Q++)I[w+(Q>>2)]|=o[e+Q]<<6-2*(3&Q);else if(1==A)for(Q=0;Q<U;Q++)I[w+(Q>>3)]|=o[e+Q]<<7-1*(7&Q);}t=I,d=3,i=1;}else if(0==v&&1==b.length){I=new Uint8Array(U*e*3);const o=U*e;for(w=0;w<o;w++){const e=3*w,r=4*w;I[e]=t[r],I[e+1]=t[r+1],I[e+2]=t[r+2];}t=I,d=2,i=3,r=3*U;}B.img=t,B.bpl=r,B.bpp=i;}return {ctype:d,depth:A,plte:E,frames:b}}function _updateFrame(t,r,i,o,a,s,f){const l=Uint8Array,c=Uint32Array,u=new l(t[a-1]),h=new c(t[a-1]),d=a+1<t.length?new l(t[a+1]):null,A=new l(t[a]),g=new c(A.buffer);let p=r,m=i,w=-1,v=-1;for(let e=0;e<s.height;e++)for(let t=0;t<s.width;t++){const i=s.x+t,f=s.y+e,l=f*r+i,c=g[l];0==c||0==o[a-1].dispose&&h[l]==c&&(null==d||0!=d[4*l+3])||(i<p&&(p=i),i>w&&(w=i),f<m&&(m=f),f>v&&(v=f));} -1==w&&(p=m=w=v=0),f&&(1==(1&p)&&p--,1==(1&m)&&m--),s={x:p,y:m,width:w-p+1,height:v-m+1};const b=o[a];b.rect=s,b.blend=1,b.img=new Uint8Array(s.width*s.height*4),0==o[a-1].dispose?(e(u,r,i,b.img,s.width,s.height,-s.x,-s.y,0),_prepareDiff(A,r,i,b.img,s)):e(A,r,i,b.img,s.width,s.height,-s.x,-s.y,0);}function _prepareDiff(t,r,i,o,a){e(t,r,i,o,a.width,a.height,-a.x,-a.y,2);}function _filterZero(e,t,r,i,o,a,s){const f=[];let l,c=[0,1,2,3,4];-1!=a?c=[a]:(t*i>5e5||1==r)&&(c=[0]),s&&(l={level:0});const u=UZIP;for(var h=0;h<c.length;h++){for(let a=0;a<t;a++)_filterLine(o,e,a,i,r,c[h]);f.push(u.deflate(o,l));}let d,A=1e9;for(h=0;h<f.length;h++)f[h].length<A&&(d=h,A=f[h].length);return f[d]}function _filterLine(e,t,i,o,a,s){const f=i*o;let l=f+i;if(e[l]=s,l++,0==s)if(o<500)for(var c=0;c<o;c++)e[l+c]=t[f+c];else e.set(new Uint8Array(t.buffer,f,o),l);else if(1==s){for(c=0;c<a;c++)e[l+c]=t[f+c];for(c=a;c<o;c++)e[l+c]=t[f+c]-t[f+c-a]+256&255;}else if(0==i){for(c=0;c<a;c++)e[l+c]=t[f+c];if(2==s)for(c=a;c<o;c++)e[l+c]=t[f+c];if(3==s)for(c=a;c<o;c++)e[l+c]=t[f+c]-(t[f+c-a]>>1)+256&255;if(4==s)for(c=a;c<o;c++)e[l+c]=t[f+c]-r(t[f+c-a],0,0)+256&255;}else {if(2==s)for(c=0;c<o;c++)e[l+c]=t[f+c]+256-t[f+c-o]&255;if(3==s){for(c=0;c<a;c++)e[l+c]=t[f+c]+256-(t[f+c-o]>>1)&255;for(c=a;c<o;c++)e[l+c]=t[f+c]+256-(t[f+c-o]+t[f+c-a]>>1)&255;}if(4==s){for(c=0;c<a;c++)e[l+c]=t[f+c]+256-r(0,t[f+c-o],0)&255;for(c=a;c<o;c++)e[l+c]=t[f+c]+256-r(t[f+c-a],t[f+c-o],t[f+c-a-o])&255;}}}function quantize(e,t){const r=new Uint8Array(e),i=r.slice(0),o=new Uint32Array(i.buffer),a=getKDtree(i,t),s=a[0],f=a[1],l=r.length,c=new Uint8Array(l>>2);let u;if(r.length<2e7)for(var h=0;h<l;h+=4){u=getNearest(s,d=r[h]*(1/255),A=r[h+1]*(1/255),g=r[h+2]*(1/255),p=r[h+3]*(1/255)),c[h>>2]=u.ind,o[h>>2]=u.est.rgba;}else for(h=0;h<l;h+=4){var d=r[h]*(1/255),A=r[h+1]*(1/255),g=r[h+2]*(1/255),p=r[h+3]*(1/255);for(u=s;u.left;)u=planeDst(u.est,d,A,g,p)<=0?u.left:u.right;c[h>>2]=u.ind,o[h>>2]=u.est.rgba;}return {abuf:i.buffer,inds:c,plte:f}}function getKDtree(e,t,r){null==r&&(r=1e-4);const i=new Uint32Array(e.buffer),o={i0:0,i1:e.length,bst:null,est:null,tdst:0,left:null,right:null};o.bst=stats(e,o.i0,o.i1),o.est=estats(o.bst);const a=[o];for(;a.length<t;){let t=0,o=0;for(var s=0;s<a.length;s++)a[s].est.L>t&&(t=a[s].est.L,o=s);if(t<r)break;const f=a[o],l=splitPixels(e,i,f.i0,f.i1,f.est.e,f.est.eMq255);if(f.i0>=l||f.i1<=l){f.est.L=0;continue}const c={i0:f.i0,i1:l,bst:null,est:null,tdst:0,left:null,right:null};c.bst=stats(e,c.i0,c.i1),c.est=estats(c.bst);const u={i0:l,i1:f.i1,bst:null,est:null,tdst:0,left:null,right:null};u.bst={R:[],m:[],N:f.bst.N-c.bst.N};for(s=0;s<16;s++)u.bst.R[s]=f.bst.R[s]-c.bst.R[s];for(s=0;s<4;s++)u.bst.m[s]=f.bst.m[s]-c.bst.m[s];u.est=estats(u.bst),f.left=c,f.right=u,a[o]=c,a.push(u);}a.sort(((e,t)=>t.bst.N-e.bst.N));for(s=0;s<a.length;s++)a[s].ind=s;return [o,a]}function getNearest(e,t,r,i,o){if(null==e.left)return e.tdst=function dist(e,t,r,i,o){const a=t-e[0],s=r-e[1],f=i-e[2],l=o-e[3];return a*a+s*s+f*f+l*l}(e.est.q,t,r,i,o),e;const a=planeDst(e.est,t,r,i,o);let s=e.left,f=e.right;a>0&&(s=e.right,f=e.left);const l=getNearest(s,t,r,i,o);if(l.tdst<=a*a)return l;const c=getNearest(f,t,r,i,o);return c.tdst<l.tdst?c:l}function planeDst(e,t,r,i,o){const{e:a}=e;return a[0]*t+a[1]*r+a[2]*i+a[3]*o-e.eMq}function splitPixels(e,t,r,i,o,a){for(i-=4;r<i;){for(;vecDot(e,r,o)<=a;)r+=4;for(;vecDot(e,i,o)>a;)i-=4;if(r>=i)break;const s=t[r>>2];t[r>>2]=t[i>>2],t[i>>2]=s,r+=4,i-=4;}for(;vecDot(e,r,o)>a;)r-=4;return r+4}function vecDot(e,t,r){return e[t]*r[0]+e[t+1]*r[1]+e[t+2]*r[2]+e[t+3]*r[3]}function stats(e,t,r){const i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],o=[0,0,0,0],a=r-t>>2;for(let a=t;a<r;a+=4){const t=e[a]*(1/255),r=e[a+1]*(1/255),s=e[a+2]*(1/255),f=e[a+3]*(1/255);o[0]+=t,o[1]+=r,o[2]+=s,o[3]+=f,i[0]+=t*t,i[1]+=t*r,i[2]+=t*s,i[3]+=t*f,i[5]+=r*r,i[6]+=r*s,i[7]+=r*f,i[10]+=s*s,i[11]+=s*f,i[15]+=f*f;}return i[4]=i[1],i[8]=i[2],i[9]=i[6],i[12]=i[3],i[13]=i[7],i[14]=i[11],{R:i,m:o,N:a}}function estats(e){const{R:t}=e,{m:r}=e,{N:i}=e,a=r[0],s=r[1],f=r[2],l=r[3],c=0==i?0:1/i,u=[t[0]-a*a*c,t[1]-a*s*c,t[2]-a*f*c,t[3]-a*l*c,t[4]-s*a*c,t[5]-s*s*c,t[6]-s*f*c,t[7]-s*l*c,t[8]-f*a*c,t[9]-f*s*c,t[10]-f*f*c,t[11]-f*l*c,t[12]-l*a*c,t[13]-l*s*c,t[14]-l*f*c,t[15]-l*l*c],h=u,d=o;let A=[Math.random(),Math.random(),Math.random(),Math.random()],g=0,p=0;if(0!=i)for(let e=0;e<16&&(A=d.multVec(h,A),p=Math.sqrt(d.dot(A,A)),A=d.sml(1/p,A),!(0!=e&&Math.abs(p-g)<1e-9));e++)g=p;const m=[a*c,s*c,f*c,l*c];return {Cov:u,q:m,e:A,L:g,eMq255:d.dot(d.sml(255,m),A),eMq:d.dot(A,m),rgba:(Math.round(255*m[3])<<24|Math.round(255*m[2])<<16|Math.round(255*m[1])<<8|Math.round(255*m[0])<<0)>>>0}}var o={multVec:(e,t)=>[e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3],e[4]*t[0]+e[5]*t[1]+e[6]*t[2]+e[7]*t[3],e[8]*t[0]+e[9]*t[1]+e[10]*t[2]+e[11]*t[3],e[12]*t[0]+e[13]*t[1]+e[14]*t[2]+e[15]*t[3]],dot:(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3],sml:(e,t)=>[e*t[0],e*t[1],e*t[2],e*t[3]]};UPNG.encode=function encode(e,t,r,i,o,a,s){null==i&&(i=0),null==s&&(s=false);const f=compress(e,t,r,i,[false,false,false,0,s,false]);return compressPNG(f,-1),_main(f,t,r,o,a)},UPNG.encodeLL=function encodeLL(e,t,r,i,o,a,s,f){const l={ctype:0+(1==i?0:2)+(0==o?0:4),depth:a,frames:[]},c=(i+o)*a,u=c*t;for(let i=0;i<e.length;i++)l.frames.push({rect:{x:0,y:0,width:t,height:r},img:new Uint8Array(e[i]),blend:0,dispose:1,bpp:Math.ceil(c/8),bpl:Math.ceil(u/8)});return compressPNG(l,0,true),_main(l,t,r,s,f)},UPNG.encode.compress=compress,UPNG.encode.dither=dither,UPNG.quantize=quantize,UPNG.quantize.getKDtree=getKDtree,UPNG.quantize.getNearest=getNearest;}();const r={toArrayBuffer(e,t){const i=e.width,o=e.height,a=i<<2,s=e.getContext("2d").getImageData(0,0,i,o),f=new Uint32Array(s.data.buffer),l=(32*i+31)/32<<2,c=l*o,u=122+c,h=new ArrayBuffer(u),d=new DataView(h),A=1<<20;let g,p,m,w,v=A,b=0,y=0,E=0;function set16(e){d.setUint16(y,e,true),y+=2;}function set32(e){d.setUint32(y,e,true),y+=4;}function seek(e){y+=e;}set16(19778),set32(u),seek(4),set32(122),set32(108),set32(i),set32(-o>>>0),set16(1),set16(32),set32(3),set32(c),set32(2835),set32(2835),seek(8),set32(16711680),set32(65280),set32(255),set32(4278190080),set32(1466527264),function convert(){for(;b<o&&v>0;){for(w=122+b*l,g=0;g<a;)v--,p=f[E++],m=p>>>24,d.setUint32(w+g,p<<8|m),g+=4;b++;}E<f.length?(v=A,setTimeout(convert,r._dly)):t(h);}();},toBlob(e,t){this.toArrayBuffer(e,(e=>{t(new Blob([e],{type:"image/bmp"}));}));},_dly:9};var i={CHROME:"CHROME",FIREFOX:"FIREFOX",DESKTOP_SAFARI:"DESKTOP_SAFARI",IE:"IE",IOS:"IOS",ETC:"ETC"},o={[i.CHROME]:16384,[i.FIREFOX]:11180,[i.DESKTOP_SAFARI]:16384,[i.IE]:8192,[i.IOS]:4096,[i.ETC]:8192};const a="undefined"!=typeof window,s="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope,f=a&&window.cordova&&window.cordova.require&&window.cordova.require("cordova/modulemapper"),CustomFile=(a||s)&&(f&&f.getOriginalSymbol(window,"File")||"undefined"!=typeof File&&File),CustomFileReader=(a||s)&&(f&&f.getOriginalSymbol(window,"FileReader")||"undefined"!=typeof FileReader&&FileReader);function getFilefromDataUrl(e,t,r=Date.now()){return new Promise((i=>{const o=e.split(","),a=o[0].match(/:(.*?);/)[1],s=globalThis.atob(o[1]);let f=s.length;const l=new Uint8Array(f);for(;f--;)l[f]=s.charCodeAt(f);const c=new Blob([l],{type:a});c.name=t,c.lastModified=r,i(c);}))}function getDataUrlFromFile(e){return new Promise(((t,r)=>{const i=new CustomFileReader;i.onload=()=>t(i.result),i.onerror=e=>r(e),i.readAsDataURL(e);}))}function loadImage(e){return new Promise(((t,r)=>{const i=new Image;i.onload=()=>t(i),i.onerror=e=>r(e),i.src=e;}))}function getBrowserName(){if(void 0!==getBrowserName.cachedResult)return getBrowserName.cachedResult;let e=i.ETC;const{userAgent:t}=navigator;return /Chrom(e|ium)/i.test(t)?e=i.CHROME:/iP(ad|od|hone)/i.test(t)&&/WebKit/i.test(t)?e=i.IOS:/Safari/i.test(t)?e=i.DESKTOP_SAFARI:/Firefox/i.test(t)?e=i.FIREFOX:(/MSIE/i.test(t)||true==!!document.documentMode)&&(e=i.IE),getBrowserName.cachedResult=e,getBrowserName.cachedResult}function approximateBelowMaximumCanvasSizeOfBrowser(e,t){const r=getBrowserName(),i=o[r];let a=e,s=t,f=a*s;const l=a>s?s/a:a/s;for(;f>i*i;){const e=(i+a)/2,t=(i+s)/2;e<t?(s=t,a=t*l):(s=e*l,a=e),f=a*s;}return {width:a,height:s}}function getNewCanvasAndCtx(e,t){let r,i;try{if(r=new OffscreenCanvas(e,t),i=r.getContext("2d"),null===i)throw new Error("getContext of OffscreenCanvas returns null")}catch(e){r=document.createElement("canvas"),i=r.getContext("2d");}return r.width=e,r.height=t,[r,i]}function drawImageInCanvas(e,t){const{width:r,height:i}=approximateBelowMaximumCanvasSizeOfBrowser(e.width,e.height),[o,a]=getNewCanvasAndCtx(r,i);return t&&/jpe?g/.test(t)&&(a.fillStyle="white",a.fillRect(0,0,o.width,o.height)),a.drawImage(e,0,0,o.width,o.height),o}function isIOS(){return void 0!==isIOS.cachedResult||(isIOS.cachedResult=["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"undefined"!=typeof document&&"ontouchend"in document),isIOS.cachedResult}function drawFileInCanvas(e,t={}){return new Promise((function(r,o){let a,s;var $Try_2_Post=function(){try{return s=drawImageInCanvas(a,t.fileType||e.type),r([a,s])}catch(e){return o(e)}},$Try_2_Catch=function(t){try{0;var $Try_3_Catch=function(e){try{throw e}catch(e){return o(e)}};try{let t;return getDataUrlFromFile(e).then((function(e){try{return t=e,loadImage(t).then((function(e){try{return a=e,function(){try{return $Try_2_Post()}catch(e){return o(e)}}()}catch(e){return $Try_3_Catch(e)}}),$Try_3_Catch)}catch(e){return $Try_3_Catch(e)}}),$Try_3_Catch)}catch(e){$Try_3_Catch(e);}}catch(e){return o(e)}};try{if(isIOS()||[i.DESKTOP_SAFARI,i.MOBILE_SAFARI].includes(getBrowserName()))throw new Error("Skip createImageBitmap on IOS and Safari");return createImageBitmap(e).then((function(e){try{return a=e,$Try_2_Post()}catch(e){return $Try_2_Catch()}}),$Try_2_Catch)}catch(e){$Try_2_Catch();}}))}function canvasToFile(e,t,i,o,a=1){return new Promise((function(s,f){let l;if("image/png"===t){let c,u,h;return c=e.getContext("2d"),({data:u}=c.getImageData(0,0,e.width,e.height)),h=UPNG.encode([u.buffer],e.width,e.height,4096*a),l=new Blob([h],{type:t}),l.name=i,l.lastModified=o,$If_4.call(this)}{if("image/bmp"===t)return new Promise((t=>r.toBlob(e,t))).then(function(e){try{return l=e,l.name=i,l.lastModified=o,$If_5.call(this)}catch(e){return f(e)}}.bind(this),f);{if("function"==typeof OffscreenCanvas&&e instanceof OffscreenCanvas)return e.convertToBlob({type:t,quality:a}).then(function(e){try{return l=e,l.name=i,l.lastModified=o,$If_6.call(this)}catch(e){return f(e)}}.bind(this),f);{let d;return d=e.toDataURL(t,a),getFilefromDataUrl(d,i,o).then(function(e){try{return l=e,$If_6.call(this)}catch(e){return f(e)}}.bind(this),f)}function $If_6(){return $If_5.call(this)}}function $If_5(){return $If_4.call(this)}}function $If_4(){return s(l)}}))}function cleanupCanvasMemory(e){e.width=0,e.height=0;}function isAutoOrientationInBrowser(){return new Promise((function(e,t){let i,o,a,s;return void 0!==isAutoOrientationInBrowser.cachedResult?e(isAutoOrientationInBrowser.cachedResult):(getFilefromDataUrl("data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAAAAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/xABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==","test.jpg",Date.now()).then((function(r){try{return i=r,drawFileInCanvas(i).then((function(r){try{return o=r[1],canvasToFile(o,i.type,i.name,i.lastModified).then((function(r){try{return a=r,cleanupCanvasMemory(o),drawFileInCanvas(a).then((function(r){try{return s=r[0],isAutoOrientationInBrowser.cachedResult=1===s.width&&2===s.height,e(isAutoOrientationInBrowser.cachedResult)}catch(e){return t(e)}}),t)}catch(e){return t(e)}}),t)}catch(e){return t(e)}}),t)}catch(e){return t(e)}}),t))}))}function getExifOrientation(e){return new Promise(((t,r)=>{const i=new CustomFileReader;i.onload=e=>{const r=new DataView(e.target.result);if(65496!=r.getUint16(0,false))return t(-2);const i=r.byteLength;let o=2;for(;o<i;){if(r.getUint16(o+2,false)<=8)return t(-1);const e=r.getUint16(o,false);if(o+=2,65505==e){if(1165519206!=r.getUint32(o+=2,false))return t(-1);const e=18761==r.getUint16(o+=6,false);o+=r.getUint32(o+4,e);const i=r.getUint16(o,e);o+=2;for(let a=0;a<i;a++)if(274==r.getUint16(o+12*a,e))return t(r.getUint16(o+12*a+8,e))}else {if(65280!=(65280&e))break;o+=r.getUint16(o,false);}}return t(-1)},i.onerror=e=>r(e),i.readAsArrayBuffer(e);}))}function handleMaxWidthOrHeight(e,t){const{width:r}=e,{height:i}=e,{maxWidthOrHeight:o}=t;let a,s=e;return isFinite(o)&&(r>o||i>o)&&([s,a]=getNewCanvasAndCtx(r,i),r>i?(s.width=o,s.height=i/r*o):(s.width=r/i*o,s.height=o),a.drawImage(e,0,0,s.width,s.height),cleanupCanvasMemory(e)),s}function followExifOrientation(e,t){const{width:r}=e,{height:i}=e,[o,a]=getNewCanvasAndCtx(r,i);switch(t>4&&t<9?(o.width=i,o.height=r):(o.width=r,o.height=i),t){case 2:a.transform(-1,0,0,1,r,0);break;case 3:a.transform(-1,0,0,-1,r,i);break;case 4:a.transform(1,0,0,-1,0,i);break;case 5:a.transform(0,1,1,0,0,0);break;case 6:a.transform(0,1,-1,0,i,0);break;case 7:a.transform(0,-1,-1,0,i,r);break;case 8:a.transform(0,-1,1,0,0,r);}return a.drawImage(e,0,0,r,i),cleanupCanvasMemory(e),o}function compress(e,t,r=0){return new Promise((function(i,o){let a,s,f,l,c,u,h,d,A,g,p,m,w,v,b,y,E,F,_,B;function incProgress(e=5){if(t.signal&&t.signal.aborted)throw t.signal.reason;a+=e,t.onProgress(Math.min(a,100));}function setProgress(e){if(t.signal&&t.signal.aborted)throw t.signal.reason;a=Math.min(Math.max(e,a),100),t.onProgress(a);}return a=r,s=t.maxIteration||10,f=1024*t.maxSizeMB*1024,incProgress(),drawFileInCanvas(e,t).then(function(r){try{return [,l]=r,incProgress(),c=handleMaxWidthOrHeight(l,t),incProgress(),new Promise((function(r,i){var o;if(!(o=t.exifOrientation))return getExifOrientation(e).then(function(e){try{return o=e,$If_2.call(this)}catch(e){return i(e)}}.bind(this),i);function $If_2(){return r(o)}return $If_2.call(this)})).then(function(r){try{return u=r,incProgress(),isAutoOrientationInBrowser().then(function(r){try{return h=r?c:followExifOrientation(c,u),incProgress(),d=t.initialQuality||1,A=t.fileType||e.type,canvasToFile(h,A,e.name,e.lastModified,d).then(function(r){try{{if(g=r,incProgress(),p=g.size>f,m=g.size>e.size,!p&&!m)return setProgress(100),i(g);var a;function $Loop_3(){if(s--&&(b>f||b>w)){let t,r;return t=B?.95*_.width:_.width,r=B?.95*_.height:_.height,[E,F]=getNewCanvasAndCtx(t,r),F.drawImage(_,0,0,t,r),d*="image/png"===A?.85:.95,canvasToFile(E,A,e.name,e.lastModified,d).then((function(e){try{return y=e,cleanupCanvasMemory(_),_=E,b=y.size,setProgress(Math.min(99,Math.floor((v-b)/(v-f)*100))),$Loop_3}catch(e){return o(e)}}),o)}return [1]}return w=e.size,v=g.size,b=v,_=h,B=!t.alwaysKeepResolution&&p,(a=function(e){for(;e;){if(e.then)return void e.then(a,o);try{if(e.pop){if(e.length)return e.pop()?$Loop_3_exit.call(this):e;e=$Loop_3;}else e=e.call(this);}catch(e){return o(e)}}}.bind(this))($Loop_3);function $Loop_3_exit(){return cleanupCanvasMemory(_),cleanupCanvasMemory(E),cleanupCanvasMemory(c),cleanupCanvasMemory(h),cleanupCanvasMemory(l),setProgress(100),i(y)}}}catch(u){return o(u)}}.bind(this),o)}catch(e){return o(e)}}.bind(this),o)}catch(e){return o(e)}}.bind(this),o)}catch(e){return o(e)}}.bind(this),o)}))}const l="\nlet scriptImported = false\nself.addEventListener('message', async (e) => {\n  const { file, id, imageCompressionLibUrl, options } = e.data\n  options.onProgress = (progress) => self.postMessage({ progress, id })\n  try {\n    if (!scriptImported) {\n      // console.log('[worker] importScripts', imageCompressionLibUrl)\n      self.importScripts(imageCompressionLibUrl)\n      scriptImported = true\n    }\n    // console.log('[worker] self', self)\n    const compressedFile = await imageCompression(file, options)\n    self.postMessage({ file: compressedFile, id })\n  } catch (e) {\n    // console.error('[worker] error', e)\n    self.postMessage({ error: e.message + '\\n' + e.stack, id })\n  }\n})\n";let c;function compressOnWebWorker(e,t){return new Promise(((r,i)=>{c||(c=function createWorkerScriptURL(e){const t=[];return t.push(e),URL.createObjectURL(new Blob(t))}(l));const o=new Worker(c);o.addEventListener("message",(function handler(e){if(t.signal&&t.signal.aborted)o.terminate();else if(void 0===e.data.progress){if(e.data.error)return i(new Error(e.data.error)),void o.terminate();r(e.data.file),o.terminate();}else t.onProgress(e.data.progress);})),o.addEventListener("error",i),t.signal&&t.signal.addEventListener("abort",(()=>{i(t.signal.reason),o.terminate();})),o.postMessage({file:e,imageCompressionLibUrl:t.libURL,options:{...t,onProgress:void 0,signal:void 0}});}))}function imageCompression(e,t){return new Promise((function(r,i){let o,a,s,f,l,c;if(o={...t},s=0,({onProgress:f}=o),o.maxSizeMB=o.maxSizeMB||Number.POSITIVE_INFINITY,l="boolean"!=typeof o.useWebWorker||o.useWebWorker,delete o.useWebWorker,o.onProgress=e=>{s=e,"function"==typeof f&&f(s);},!(e instanceof Blob||e instanceof CustomFile))return i(new Error("The file given is not an instance of Blob or File"));if(!/^image/.test(e.type))return i(new Error("The file given is not an image"));if(c="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope,!l||"function"!=typeof Worker||c)return compress(e,o).then(function(e){try{return a=e,$If_4.call(this)}catch(e){return i(e)}}.bind(this),i);var u=function(){try{return $If_4.call(this)}catch(e){return i(e)}}.bind(this),$Try_1_Catch=function(t){try{return compress(e,o).then((function(e){try{return a=e,u()}catch(e){return i(e)}}),i)}catch(e){return i(e)}};try{return o.libURL=o.libURL||"https://cdn.jsdelivr.net/npm/browser-image-compression@2.0.2/dist/browser-image-compression.js",compressOnWebWorker(e,o).then((function(e){try{return a=e,u()}catch(e){return $Try_1_Catch()}}),$Try_1_Catch)}catch(e){$Try_1_Catch();}function $If_4(){try{a.name=e.name,a.lastModified=e.lastModified;}catch(e){}try{o.preserveExif&&"image/jpeg"===e.type&&(!o.fileType||o.fileType&&o.fileType===e.type)&&(a=copyExifWithoutOrientation(e,a));}catch(e){}return r(a)}}))}imageCompression.getDataUrlFromFile=getDataUrlFromFile,imageCompression.getFilefromDataUrl=getFilefromDataUrl,imageCompression.loadImage=loadImage,imageCompression.drawImageInCanvas=drawImageInCanvas,imageCompression.drawFileInCanvas=drawFileInCanvas,imageCompression.canvasToFile=canvasToFile,imageCompression.getExifOrientation=getExifOrientation,imageCompression.handleMaxWidthOrHeight=handleMaxWidthOrHeight,imageCompression.followExifOrientation=followExifOrientation,imageCompression.cleanupCanvasMemory=cleanupCanvasMemory,imageCompression.isAutoOrientationInBrowser=isAutoOrientationInBrowser,imageCompression.approximateBelowMaximumCanvasSizeOfBrowser=approximateBelowMaximumCanvasSizeOfBrowser,imageCompression.copyExifWithoutOrientation=copyExifWithoutOrientation,imageCompression.getBrowserName=getBrowserName,imageCompression.version="2.0.2";

const uploadImageToGitHub = async (imageFile, productName) => {
  const path = `public/images-product/${productName}/${imageFile.name}`;
  const url = `${GITHUB_API_URL}/${GITREPOSITORY_OWNER}/${GITREPO}/contents/${path}`;
  const token = GITHUB_TOKEN;
  const reader = new FileReader();
  reader.readAsDataURL(imageFile);
  return new Promise((resolve, reject) => {
    reader.onload = async () => {
      const base64data = reader.result?.toString()?.split(",")[1];
      try {
        const response = await fetch(url, {
          method: "PUT",
          headers: {
            "Authorization": `token ${token}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            message: `Загрузка изображения: ${imageFile.name}`,
            content: base64data
          })
        });
        if (!response.ok) {
          throw new Error(`Ошибка загрузки изображения: ${response.statusText}`);
        }
        const data = await response.json();
        resolve(data.content.download_url);
      } catch (error) {
        reject(error);
      }
    };
    reader.onerror = (error) => reject(error);
  });
};

const AddImageUploader = ({ onImageUpload, productName }) => {
  const [imageFile, setImageFile] = reactExports.useState(null);
  const [message, setMessage] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const handleImageChange = async (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      try {
        const compressedFile = await imageCompression(file, {
          maxSizeMB: 1,
          // Максимальный размер файла
          maxWidthOrHeight: 1024,
          // Максимальная ширина или высота
          useWebWorker: true,
          fileType: "image/webp"
          // Формат WebP
        });
        setImageFile(compressedFile);
        setMessage("Изображение подготовлено к загрузке.");
      } catch (error) {
        console.error("Ошибка обработки изображения:", error);
        setMessage("Ошибка обработки изображения. Попробуйте другой файл.");
      }
    }
  };
  const handleUploadImage = async () => {
    if (!productName) {
      setMessage("Ошибка: Укажите название продукта перед загрузкой изображения.");
      return;
    }
    if (!imageFile) {
      setMessage("Пожалуйста, выберите изображение для загрузки.");
      return;
    }
    setLoading(true);
    try {
      const imageSlug = d(productName);
      const fixedFileName = `${imageSlug}.webp`;
      const renamedFile = new File([imageFile], fixedFileName, {
        type: imageFile.type
      });
      await uploadImageToGitHub(renamedFile, imageSlug);
      const relativeImagePath = `/images-product/${imageSlug}/${fixedFileName}`;
      onImageUpload(relativeImagePath);
      setMessage("Изображение успешно загружено!");
    } catch (error) {
      console.error("Ошибка загрузки изображения:", error);
      setMessage("Ошибка загрузки изображения. Попробуйте еще раз.");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block mb-1", children: "Выберите изображение:" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: handleImageChange,
        className: "border border-gray-300 p-2 w-full rounded"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: handleUploadImage,
        className: "mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition",
        disabled: loading,
        children: loading ? "Загрузка..." : "Загрузить изображение"
      }
    ),
    message && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mt-2 text-sm ${message.includes("успешно") ? "text-green-500" : "text-red-500"}`, children: message })
  ] });
};

// @ts-check

const getError = () => new Error("Node APIs are not available in browser context.");
const throwForSync = () => {
  throw getError();
};

const fs = {
  "access": (path, callback) => callback(getError()),
  "accessSync": throwForSync,
  "readFile": (path, options, callback) => callback(getError()),
  "readFileSync": throwForSync
};

var helpers = {};

var shared = {};

var hasRequiredShared;

function requireShared () {
	if (hasRequiredShared) return shared;
	hasRequiredShared = 1;

	// Symbol for identifing the flat tokens array from micromark parse
	shared.flatTokensSymbol = Symbol("flat-tokens");

	// Symbol for identifying the htmlFlow token from micromark parse
	shared.htmlFlowSymbol = Symbol("html-flow");

	// Regular expression for matching common newline characters
	// See NEWLINES_RE in markdown-it/lib/rules_core/normalize.js
	shared.newLineRe = /\r\n?|\n/g;

	// Regular expression for matching next lines
	shared.nextLinesRe = /[\r\n][\s\S]*$/;
	return shared;
}

var micromarkHelpers;
var hasRequiredMicromarkHelpers;

function requireMicromarkHelpers () {
	if (hasRequiredMicromarkHelpers) return micromarkHelpers;
	hasRequiredMicromarkHelpers = 1;

	const { flatTokensSymbol, htmlFlowSymbol } = requireShared();

	// eslint-disable-next-line jsdoc/valid-types
	/** @typedef {import("micromark-util-types", { with: { "resolution-mode": "import" } }).TokenType} TokenType */
	/** @typedef {import("../lib/exports.mjs").MicromarkToken} Token */
	// eslint-disable-next-line jsdoc/valid-types
	/** @typedef {import("../lib/micromark-types.d.mts", { with: { "resolution-mode": "import" } })} */

	/**
	 * Determines if a Micromark token is within an htmlFlow type.
	 *
	 * @param {Token} token Micromark token.
	 * @returns {boolean} True iff the token is within an htmlFlow type.
	 */
	function inHtmlFlow(token) {
	  return Boolean(token[htmlFlowSymbol]);
	}

	/**
	 * Returns whether a token is an htmlFlow type containing an HTML comment.
	 *
	 * @param {Token} token Micromark token.
	 * @returns {boolean} True iff token is htmlFlow containing a comment.
	 */
	function isHtmlFlowComment(token) {
	  const { text, type } = token;
	  if (
	    (type === "htmlFlow") &&
	    text.startsWith("<!--") &&
	    text.endsWith("-->")
	  ) {
	    const comment = text.slice(4, -3);
	    return (
	      !comment.startsWith(">") &&
	      !comment.startsWith("->") &&
	      !comment.endsWith("-")
	      // The following condition from the CommonMark specification is commented
	      // to avoid parsing HTML comments that include "--" because that is NOT a
	      // condition of the HTML specification.
	      // https://spec.commonmark.org/0.30/#raw-html
	      // https://html.spec.whatwg.org/multipage/syntax.html#comments
	      // && !comment.includes("--")
	    );
	  }
	  return false;
	}

	/**
	 * Adds a range of numbers to a set.
	 *
	 * @param {Set<number>} set Set of numbers.
	 * @param {number} start Starting number.
	 * @param {number} end Ending number.
	 * @returns {void}
	 */
	function addRangeToSet(set, start, end) {
	  for (let i = start; i <= end; i++) {
	    set.add(i);
	  }
	}

	/**
	 * @callback AllowedPredicate
	 * @param {Token} token Micromark token.
	 * @returns {boolean} True iff allowed.
	 */

	/**
	 * @callback TransformPredicate
	 * @param {Token} token Micromark token.
	 * @returns {Token[]} Child tokens.
	 */

	/**
	 * Filter a list of Micromark tokens by predicate.
	 *
	 * @param {Token[]} tokens Micromark tokens.
	 * @param {AllowedPredicate} allowed Allowed token predicate.
	 * @param {TransformPredicate} [transformChildren] Transform predicate.
	 * @returns {Token[]} Filtered tokens.
	 */
	function filterByPredicate(tokens, allowed, transformChildren) {
	  const result = [];
	  const queue = [
	    {
	      "array": tokens,
	      "index": 0
	    }
	  ];
	  while (queue.length > 0) {
	    const current = queue[queue.length - 1];
	    const { array, index } = current;
	    if (index < array.length) {
	      const token = array[current.index++];
	      if (allowed(token)) {
	        result.push(token);
	      }
	      const { children } = token;
	      if (children.length > 0) {
	        const transformed =
	          transformChildren ? transformChildren(token) : children;
	        queue.push(
	          {
	            "array": transformed,
	            "index": 0
	          }
	        );
	      }
	    } else {
	      queue.pop();
	    }
	  }
	  return result;
	}

	/**
	 * Filter a list of Micromark tokens by type.
	 *
	 * @param {Token[]} tokens Micromark tokens.
	 * @param {TokenType[]} types Types to allow.
	 * @param {boolean} [htmlFlow] Whether to include htmlFlow content.
	 * @returns {Token[]} Filtered tokens.
	 */
	function filterByTypes(tokens, types, htmlFlow) {
	  const predicate = (token) => types.includes(token.type) && (htmlFlow || !inHtmlFlow(token));
	  const flatTokens = tokens[flatTokensSymbol];
	  if (flatTokens) {
	    return flatTokens.filter(predicate);
	  }
	  return filterByPredicate(tokens, predicate);
	}

	/**
	 * Gets the blockquote prefix text (if any) for the specified line number.
	 *
	 * @param {Token[]} tokens Micromark tokens.
	 * @param {number} lineNumber Line number to examine.
	 * @param {number} [count] Number of times to repeat.
	 * @returns {string} Blockquote prefix text.
	 */
	function getBlockQuotePrefixText(tokens, lineNumber, count = 1) {
	  return filterByTypes(tokens, [ "blockQuotePrefix", "linePrefix" ])
	    .filter((prefix) => prefix.startLine === lineNumber)
	    .map((prefix) => prefix.text)
	    .join("")
	    .trimEnd()
	    // eslint-disable-next-line unicorn/prefer-spread
	    .concat("\n")
	    .repeat(count);
	}
	/**
	 * Gets a list of nested Micromark token descendants by type path.
	 *
	 * @param {Token|Token[]} parent Micromark token parent or parents.
	 * @param {(TokenType|TokenType[])[]} typePath Micromark token type path.
	 * @returns {Token[]} Micromark token descendants.
	 */
	function getDescendantsByType(parent, typePath) {
	  let tokens = Array.isArray(parent) ? parent : [ parent ];
	  for (const type of typePath) {
	    const predicate = (token) => Array.isArray(type) ? type.includes(token.type) : (type === token.type);
	    tokens = tokens.flatMap((t) => t.children.filter(predicate));
	  }
	  return tokens;
	}

	/**
	 * Gets the heading level of a Micromark heading tokan.
	 *
	 * @param {Token} heading Micromark heading token.
	 * @returns {number} Heading level.
	 */
	function getHeadingLevel(heading) {
	  let level = 1;
	  const headingSequence = heading.children.find(
	    (child) => [ "atxHeadingSequence", "setextHeadingLine" ].includes(child.type)
	  );
	  // @ts-ignore
	  const { text } = headingSequence;
	  if (text[0] === "#") {
	    level = Math.min(text.length, 6);
	  } else if (text[0] === "-") {
	    level = 2;
	  }
	  return level;
	}

	/**
	 * Gets the heading style of a Micromark heading tokan.
	 *
	 * @param {Token} heading Micromark heading token.
	 * @returns {"atx" | "atx_closed" | "setext"} Heading style.
	 */
	function getHeadingStyle(heading) {
	  if (heading.type === "setextHeading") {
	    return "setext";
	  }
	  const atxHeadingSequenceLength = heading.children.filter(
	    (child) => child.type === "atxHeadingSequence"
	  ).length;
	  if (atxHeadingSequenceLength === 1) {
	    return "atx";
	  }
	  return "atx_closed";
	}

	/**
	 * Gets the heading text of a Micromark heading token.
	 *
	 * @param {Token} heading Micromark heading token.
	 * @returns {string} Heading text.
	 */
	function getHeadingText(heading) {
	  const headingText = getDescendantsByType(heading, [ [ "atxHeadingText", "setextHeadingText" ] ])
	    .flatMap((descendant) => descendant.children.filter((child) => child.type !== "htmlText"))
	    .map((data) => data.text)
	    .join("")
	    .replace(/[\r\n]+/g, " ");
	  return headingText || "";
	}

	/**
	 * HTML tag information.
	 *
	 * @typedef {Object} HtmlTagInfo
	 * @property {boolean} close True iff close tag.
	 * @property {string} name Tag name.
	 */

	/**
	 * Gets information about the tag in an HTML token.
	 *
	 * @param {Token} token Micromark token.
	 * @returns {HtmlTagInfo | null} HTML tag information.
	 */
	function getHtmlTagInfo(token) {
	  const htmlTagNameRe = /^<([^!>][^/\s>]*)/;
	  if (token.type === "htmlText") {
	    const match = htmlTagNameRe.exec(token.text);
	    if (match) {
	      const name = match[1];
	      const close = name.startsWith("/");
	      return {
	        close,
	        "name": close ? name.slice(1) : name
	      };
	    }
	  }
	  return null;
	}

	/**
	 * Gets the nearest parent of the specified type for a Micromark token.
	 *
	 * @param {Token} token Micromark token.
	 * @param {TokenType[]} types Types to allow.
	 * @returns {Token | null} Parent token.
	 */
	function getParentOfType(token, types) {
	  /** @type {Token | null} */
	  let current = token;
	  while ((current = current.parent) && !types.includes(current.type)) {
	    // Empty
	  }
	  return current;
	}

	const docfxTabSyntaxRe = /^#tab\//;

	/**
	 * Returns whether the specified Micromark token looks like a Docfx tab.
	 *
	 * @param {Token | null} heading Micromark token.
	 * @returns {boolean} True iff the token looks like a Docfx tab.
	 */
	function isDocfxTab(heading) {
	  // See https://dotnet.github.io/docfx/docs/markdown.html?tabs=linux%2Cdotnet#tabs
	  if (heading?.type === "atxHeading") {
	    const headingTexts = getDescendantsByType(heading, [ "atxHeadingText" ]);
	    if ((headingTexts.length === 1) && (headingTexts[0].children.length === 1) && (headingTexts[0].children[0].type === "link")) {
	      const resourceDestinationStrings = filterByTypes(headingTexts[0].children[0].children, [ "resourceDestinationString" ]);
	      return (resourceDestinationStrings.length === 1) && docfxTabSyntaxRe.test(resourceDestinationStrings[0].text);
	    }
	  }
	  return false;
	}

	/**
	 * Set containing token types that do not contain content.
	 *
	 * @type {Set<TokenType>}
	 */
	const nonContentTokens = new Set([
	  "blockQuoteMarker",
	  "blockQuotePrefix",
	  "blockQuotePrefixWhitespace",
	  "lineEnding",
	  "lineEndingBlank",
	  "linePrefix",
	  "listItemIndent",
	  "undefinedReference",
	  "undefinedReferenceCollapsed",
	  "undefinedReferenceFull",
	  "undefinedReferenceShortcut"
	]);

	micromarkHelpers = {
	  addRangeToSet,
	  filterByPredicate,
	  filterByTypes,
	  getBlockQuotePrefixText,
	  getDescendantsByType,
	  getHeadingLevel,
	  getHeadingStyle,
	  getHeadingText,
	  getHtmlTagInfo,
	  getParentOfType,
	  inHtmlFlow,
	  isDocfxTab,
	  isHtmlFlowComment,
	  nonContentTokens
	};
	return micromarkHelpers;
}

var hasRequiredHelpers;

function requireHelpers () {
	if (hasRequiredHelpers) return helpers;
	hasRequiredHelpers = 1;

	const micromark = requireMicromarkHelpers();

	const { newLineRe, nextLinesRe } = requireShared();

	helpers.newLineRe = newLineRe;
	helpers.nextLinesRe = nextLinesRe;

	/** @typedef {import("../lib/exports.mjs").RuleOnError} RuleOnError */
	/** @typedef {import("../lib/exports.mjs").RuleOnErrorFixInfo} RuleOnErrorFixInfo */
	/** @typedef {import("../lib/exports.mjs").MicromarkToken} MicromarkToken */
	// eslint-disable-next-line jsdoc/valid-types
	/** @typedef {import("micromark-extension-gfm-footnote", { with: { "resolution-mode": "import" } })} */
	// eslint-disable-next-line jsdoc/valid-types
	/** @typedef {import("../lib/micromark-types.d.mts", { with: { "resolution-mode": "import" } })} */

	// Regular expression for matching common front matter (YAML and TOML)
	// @ts-ignore
	helpers.frontMatterRe =
	  /((^---[^\S\r\n\u2028\u2029]*$[\s\S]+?^---\s*)|(^\+\+\+[^\S\r\n\u2028\u2029]*$[\s\S]+?^(\+\+\+|\.\.\.)\s*)|(^\{[^\S\r\n\u2028\u2029]*$[\s\S]+?^\}\s*))(\r\n|\r|\n|$)/m;

	// Regular expression for matching the start of inline disable/enable comments
	const inlineCommentStartRe =
	  /(<!--\s*markdownlint-(disable|enable|capture|restore|disable-file|enable-file|disable-line|disable-next-line|configure-file))(?:\s|-->)/gi;
	helpers.inlineCommentStartRe = inlineCommentStartRe;

	// Regular expression for identifying an HTML entity at the end of a line
	helpers.endOfLineHtmlEntityRe =
	  /&(?:#\d+|#[xX][\da-fA-F]+|[a-zA-Z]{2,31}|blk\d{2}|emsp1[34]|frac\d{2}|sup\d|there4);$/;

	// Regular expression for identifying a GitHub emoji code at the end of a line
	helpers.endOfLineGemojiCodeRe =
	  /:(?:[abmovx]|[-+]1|100|1234|(?:1st|2nd|3rd)_place_medal|8ball|clock\d{1,4}|e-mail|non-potable_water|o2|t-rex|u5272|u5408|u55b6|u6307|u6708|u6709|u6e80|u7121|u7533|u7981|u7a7a|[a-z]{2,15}2?|[a-z]{1,14}(?:_[a-z\d]{1,16})+):$/;

	// All punctuation characters (normal and full-width)
	const allPunctuation = ".,;:!?。，；：！？";
	helpers.allPunctuation = allPunctuation;

	// All punctuation characters without question mark (normal and full-width)
	helpers.allPunctuationNoQuestion = allPunctuation.replace(/[?？]/gu, "");

	/**
	 * Returns true iff the input is a Number.
	 *
	 * @param {Object} obj Object of unknown type.
	 * @returns {boolean} True iff obj is a Number.
	 */
	function isNumber(obj) {
	  return typeof obj === "number";
	}
	helpers.isNumber = isNumber;

	/**
	 * Returns true iff the input is a String.
	 *
	 * @param {Object} obj Object of unknown type.
	 * @returns {boolean} True iff obj is a String.
	 */
	function isString(obj) {
	  return typeof obj === "string";
	}
	helpers.isString = isString;

	/**
	 * Returns true iff the input String is empty.
	 *
	 * @param {string} str String of unknown length.
	 * @returns {boolean} True iff the input String is empty.
	 */
	function isEmptyString(str) {
	  return str.length === 0;
	}
	helpers.isEmptyString = isEmptyString;

	/**
	 * Returns true iff the input is an Object.
	 *
	 * @param {Object} obj Object of unknown type.
	 * @returns {boolean} True iff obj is an Object.
	 */
	function isObject(obj) {
	  return !!obj && (typeof obj === "object") && !Array.isArray(obj);
	}
	helpers.isObject = isObject;

	/**
	 * Returns true iff the input is a URL.
	 *
	 * @param {Object} obj Object of unknown type.
	 * @returns {boolean} True iff obj is a URL.
	 */
	function isUrl(obj) {
	  return !!obj && (Object.getPrototypeOf(obj) === URL.prototype);
	}
	helpers.isUrl = isUrl;

	/**
	 * Clones the input if it is an Array.
	 *
	 * @param {Object} arr Object of unknown type.
	 * @returns {Object} Clone of obj iff obj is an Array.
	 */
	function cloneIfArray(arr) {
	  return Array.isArray(arr) ? [ ...arr ] : arr;
	}
	helpers.cloneIfArray = cloneIfArray;

	/**
	 * Clones the input if it is a URL.
	 *
	 * @param {Object} url Object of unknown type.
	 * @returns {Object} Clone of obj iff obj is a URL.
	 */
	function cloneIfUrl(url) {
	  return isUrl(url) ? new URL(url) : url;
	}
	helpers.cloneIfUrl = cloneIfUrl;

	/**
	 * Gets a Regular Expression for matching the specified HTML attribute.
	 *
	 * @param {string} name HTML attribute name.
	 * @returns {RegExp} Regular Expression for matching.
	 */
	helpers.getHtmlAttributeRe = function getHtmlAttributeRe(name) {
	  return new RegExp(`\\s${name}\\s*=\\s*['"]?([^'"\\s>]*)`, "iu");
	};

	/**
	 * Returns true iff the input line is blank (contains nothing, whitespace, or
	 * comments (unclosed start/end comments allowed)).
	 *
	 * @param {string} line Input line.
	 * @returns {boolean} True iff line is blank.
	 */
	function isBlankLine(line) {
	  const startComment = "<!--";
	  const endComment = "-->";
	  const removeComments = (s) => {
	    while (true) {
	      const start = s.indexOf(startComment);
	      const end = s.indexOf(endComment);
	      if ((end !== -1) && ((start === -1) || (end < start))) {
	        // Unmatched end comment is first
	        s = s.slice(end + endComment.length);
	      } else if ((start !== -1) && (end !== -1)) {
	        // Start comment is before end comment
	        s = s.slice(0, start) + s.slice(end + endComment.length);
	      } else if ((start !== -1) && (end === -1)) {
	        // Unmatched start comment is last
	        s = s.slice(0, start);
	      } else {
	        // No more comments to remove
	        return s;
	      }
	    }
	  };
	  return (
	    !line ||
	    !line.trim() ||
	    !removeComments(line).replace(/>/g, "").trim()
	  );
	}
	helpers.isBlankLine = isBlankLine;

	// Replaces the content of properly-formatted CommonMark comments with "."
	// This preserves the line/column information for the rest of the document
	// https://spec.commonmark.org/0.29/#html-blocks
	// https://spec.commonmark.org/0.29/#html-comment
	const htmlCommentBegin = "<!--";
	const htmlCommentEnd = "-->";
	const safeCommentCharacter = ".";
	const startsWithPipeRe = /^ *\|/;
	const notCrLfRe = /[^\r\n]/g;
	const notSpaceCrLfRe = /[^ \r\n]/g;
	const trailingSpaceRe = / +[\r\n]/g;
	const replaceTrailingSpace = (s) => s.replace(notCrLfRe, safeCommentCharacter);
	helpers.clearHtmlCommentText = function clearHtmlCommentText(text) {
	  let i = 0;
	  while ((i = text.indexOf(htmlCommentBegin, i)) !== -1) {
	    const j = text.indexOf(htmlCommentEnd, i + 2);
	    if (j === -1) {
	      // Un-terminated comments are treated as text
	      break;
	    }
	    // If the comment has content...
	    if (j > i + htmlCommentBegin.length) {
	      const content = text.slice(i + htmlCommentBegin.length, j);
	      const lastLf = text.lastIndexOf("\n", i) + 1;
	      const preText = text.slice(lastLf, i);
	      const isBlock = preText.trim().length === 0;
	      const couldBeTable = startsWithPipeRe.test(preText);
	      const spansTableCells = couldBeTable && content.includes("\n");
	      const isValid =
	        isBlock ||
	        !(
	          spansTableCells ||
	          content.startsWith(">") ||
	          content.startsWith("->") ||
	          content.endsWith("-") ||
	          content.includes("--")
	        );
	      // If a valid block/inline comment...
	      if (isValid) {
	        const clearedContent = content
	          .replace(notSpaceCrLfRe, safeCommentCharacter)
	          .replace(trailingSpaceRe, replaceTrailingSpace);
	        text =
	          text.slice(0, i + htmlCommentBegin.length) +
	          clearedContent +
	          text.slice(j);
	      }
	    }
	    i = j + htmlCommentEnd.length;
	  }
	  return text;
	};

	// Escapes a string for use in a RegExp
	helpers.escapeForRegExp = function escapeForRegExp(str) {
	  return str.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
	};

	/**
	 * Adds ellipsis to the left/right/middle of the specified text.
	 *
	 * @param {string} text Text to ellipsify.
	 * @param {boolean} [start] True iff the start of the text is important.
	 * @param {boolean} [end] True iff the end of the text is important.
	 * @returns {string} Ellipsified text.
	 */
	function ellipsify(text, start, end) {
	  if (text.length <= 30) ; else if (start && end) {
	    text = text.slice(0, 15) + "..." + text.slice(-15);
	  } else if (end) {
	    text = "..." + text.slice(-30);
	  } else {
	    text = text.slice(0, 30) + "...";
	  }
	  return text;
	}
	helpers.ellipsify = ellipsify;

	/**
	 * Adds a generic error object via the onError callback.
	 *
	 * @param {RuleOnError} onError RuleOnError instance.
	 * @param {number} lineNumber Line number.
	 * @param {string} [detail] Error details.
	 * @param {string} [context] Error context.
	 * @param {number[]} [range] Column and length of error.
	 * @param {RuleOnErrorFixInfo} [fixInfo] RuleOnErrorFixInfo instance.
	 * @returns {void}
	 */
	function addError(onError, lineNumber, detail, context, range, fixInfo) {
	  onError({
	    lineNumber,
	    detail,
	    context,
	    range,
	    fixInfo
	  });
	}
	helpers.addError = addError;

	/**
	 * Adds an error object with details conditionally via the onError callback.
	 *
	 * @param {RuleOnError} onError RuleOnError instance.
	 * @param {number} lineNumber Line number.
	 * @param {Object} expected Expected value.
	 * @param {Object} actual Actual value.
	 * @param {string} [detail] Error details.
	 * @param {string} [context] Error context.
	 * @param {number[]} [range] Column and length of error.
	 * @param {RuleOnErrorFixInfo} [fixInfo] RuleOnErrorFixInfo instance.
	 * @returns {void}
	 */
	function addErrorDetailIf(
	  onError, lineNumber, expected, actual, detail, context, range, fixInfo) {
	  if (expected !== actual) {
	    addError(
	      onError,
	      lineNumber,
	      "Expected: " + expected + "; Actual: " + actual +
	        (detail ? "; " + detail : ""),
	      context,
	      range,
	      fixInfo);
	  }
	}
	helpers.addErrorDetailIf = addErrorDetailIf;

	/**
	 * Adds an error object with context via the onError callback.
	 *
	 * @param {RuleOnError} onError RuleOnError instance.
	 * @param {number} lineNumber Line number.
	 * @param {string} context Error context.
	 * @param {boolean} [start] True iff the start of the text is important.
	 * @param {boolean} [end] True iff the end of the text is important.
	 * @param {number[]} [range] Column and length of error.
	 * @param {RuleOnErrorFixInfo} [fixInfo] RuleOnErrorFixInfo instance.
	 * @returns {void}
	 */
	function addErrorContext(
	  onError, lineNumber, context, start, end, range, fixInfo) {
	  context = ellipsify(context.replace(newLineRe, "\n"), start, end);
	  addError(onError, lineNumber, undefined, context, range, fixInfo);
	}
	helpers.addErrorContext = addErrorContext;

	/**
	 * Defines a range within a file (start line/column to end line/column, subset of MicromarkToken).
	 *
	 * @typedef {Object} FileRange
	 * @property {number} startLine Start line (1-based).
	 * @property {number} startColumn Start column (1-based).
	 * @property {number} endLine End line (1-based).
	 * @property {number} endColumn End column (1-based).
	 */

	/**
	 * Returns whether line/column A is less than or equal to line/column B.
	 *
	 * @param {number} lineA Line A.
	 * @param {number} columnA Column A.
	 * @param {number} lineB Line B.
	 * @param {number} columnB Column B.
	 * @returns {boolean} True iff A is less than or equal to B.
	 */
	const positionLessThanOrEqual = (lineA, columnA, lineB, columnB) => (
	  (lineA < lineB) ||
	  ((lineA === lineB) && (columnA <= columnB))
	);

	/**
	 * Returns whether two ranges (or MicromarkTokens) overlap anywhere.
	 *
	 * @param {FileRange|MicromarkToken} rangeA Range A.
	 * @param {FileRange|MicromarkToken} rangeB Range B.
	 * @returns {boolean} True iff the two ranges overlap.
	 */
	helpers.hasOverlap = function hasOverlap(rangeA, rangeB) {
	  const lte = positionLessThanOrEqual(rangeA.startLine, rangeA.startColumn, rangeB.startLine, rangeB.startColumn);
	  const first = lte ? rangeA : rangeB;
	  const second = lte ? rangeB : rangeA;
	  return positionLessThanOrEqual(second.startLine, second.startColumn, first.endLine, first.endColumn);
	};

	// Determines if the front matter includes a title
	helpers.frontMatterHasTitle =
	  function frontMatterHasTitle(frontMatterLines, frontMatterTitlePattern) {
	    const ignoreFrontMatter =
	      (frontMatterTitlePattern !== undefined) && !frontMatterTitlePattern;
	    const frontMatterTitleRe =
	      new RegExp(
	        String(frontMatterTitlePattern || "^\\s*\"?title\"?\\s*[:=]"),
	        "i"
	      );
	    return !ignoreFrontMatter &&
	      frontMatterLines.some((line) => frontMatterTitleRe.test(line));
	  };

	/**
	 * Returns an object with information about reference links and images.
	 *
	 * @param {MicromarkToken[]} tokens Micromark tokens.
	 * @returns {Object} Reference link/image data.
	 */
	function getReferenceLinkImageData(tokens) {
	  const normalizeReference = (s) => s.toLowerCase().trim().replace(/\s+/g, " ");
	  const getText = (t) => t?.children.filter((c) => c.type !== "blockQuotePrefix").map((c) => c.text).join("");
	  const references = new Map();
	  const shortcuts = new Map();
	  const addReferenceToDictionary = (token, label, isShortcut) => {
	    const referenceDatum = [
	      token.startLine - 1,
	      token.startColumn - 1,
	      token.text.length
	    ];
	    const reference = normalizeReference(label);
	    const dictionary = isShortcut ? shortcuts : references;
	    const referenceData = dictionary.get(reference) || [];
	    referenceData.push(referenceDatum);
	    dictionary.set(reference, referenceData);
	  };
	  const definitions = new Map();
	  const definitionLineIndices = [];
	  const duplicateDefinitions = [];
	  const filteredTokens =
	    micromark.filterByTypes(
	      tokens,
	      [
	        // definitionLineIndices
	        "definition", "gfmFootnoteDefinition",
	        // definitions and definitionLineIndices
	        "definitionLabelString", "gfmFootnoteDefinitionLabelString",
	        // references and shortcuts
	        "gfmFootnoteCall", "image", "link",
	        // undefined link labels
	        "undefinedReferenceCollapsed", "undefinedReferenceFull", "undefinedReferenceShortcut"
	      ]
	    );
	  for (const token of filteredTokens) {
	    let labelPrefix = "";
	    // eslint-disable-next-line default-case
	    switch (token.type) {
	      case "definition":
	      case "gfmFootnoteDefinition":
	        // definitionLineIndices
	        for (let i = token.startLine; i <= token.endLine; i++) {
	          definitionLineIndices.push(i - 1);
	        }
	        break;
	      case "gfmFootnoteDefinitionLabelString":
	        labelPrefix = "^";
	      case "definitionLabelString": // eslint-disable-line no-fallthrough
	        {
	          // definitions and definitionLineIndices
	          const reference = normalizeReference(`${labelPrefix}${token.text}`);
	          if (definitions.has(reference)) {
	            duplicateDefinitions.push([ reference, token.startLine - 1 ]);
	          } else {
	            const parent =
	              micromark.getParentOfType(token, [ "definition" ]);
	            const destinationString = parent &&
	              micromark.getDescendantsByType(parent, [ "definitionDestination", "definitionDestinationRaw", "definitionDestinationString" ])[0]?.text;
	            definitions.set(
	              reference,
	              [ token.startLine - 1, destinationString ]
	            );
	          }
	        }
	        break;
	      case "gfmFootnoteCall":
	      case "image":
	      case "link":
	        {
	          // Identify if shortcut or full/collapsed
	          let isShortcut = (token.children.length === 1);
	          const isFullOrCollapsed = (token.children.length === 2) && !token.children.some((t) => t.type === "resource");
	          const [ labelText ] = micromark.getDescendantsByType(token, [ "label", "labelText" ]);
	          const [ referenceString ] = micromark.getDescendantsByType(token, [ "reference", "referenceString" ]);
	          let label = getText(labelText);
	          // Identify if footnote
	          if (!isShortcut && !isFullOrCollapsed) {
	            const [ footnoteCallMarker, footnoteCallString ] = token.children.filter(
	              (t) => [ "gfmFootnoteCallMarker", "gfmFootnoteCallString" ].includes(t.type)
	            );
	            if (footnoteCallMarker && footnoteCallString) {
	              label = `${footnoteCallMarker.text}${footnoteCallString.text}`;
	              isShortcut = true;
	            }
	          }
	          // Track link (handle shortcuts separately due to ambiguity in "text [text] text")
	          if (isShortcut || isFullOrCollapsed) {
	            addReferenceToDictionary(token, getText(referenceString) || label, isShortcut);
	          }
	        }
	        break;
	      case "undefinedReferenceCollapsed":
	      case "undefinedReferenceFull":
	      case "undefinedReferenceShortcut":
	        {
	          const undefinedReference = micromark.getDescendantsByType(token, [ "undefinedReference" ])[0];
	          const label = undefinedReference.children.map((t) => t.text).join("");
	          const isShortcut = (token.type === "undefinedReferenceShortcut");
	          addReferenceToDictionary(token, label, isShortcut);
	        }
	        break;
	    }
	  }
	  return {
	    references,
	    shortcuts,
	    definitions,
	    duplicateDefinitions,
	    definitionLineIndices
	  };
	}
	helpers.getReferenceLinkImageData = getReferenceLinkImageData;

	/**
	 * Gets the most common line ending, falling back to the platform default.
	 *
	 * @param {string} input Markdown content to analyze.
	 * @param {Object} [os] Node.js "os" module.
	 * @returns {string} Preferred line ending.
	 */
	function getPreferredLineEnding(input, os) {
	  let cr = 0;
	  let lf = 0;
	  let crlf = 0;
	  const endings = input.match(newLineRe) || [];
	  for (const ending of endings) {
	    // eslint-disable-next-line default-case
	    switch (ending) {
	      case "\r":
	        cr++;
	        break;
	      case "\n":
	        lf++;
	        break;
	      case "\r\n":
	        crlf++;
	        break;
	    }
	  }
	  let preferredLineEnding = null;
	  if (!cr && !lf && !crlf) {
	    preferredLineEnding = (os && os.EOL) || "\n";
	  } else if ((lf >= crlf) && (lf >= cr)) {
	    preferredLineEnding = "\n";
	  } else if (crlf >= cr) {
	    preferredLineEnding = "\r\n";
	  } else {
	    preferredLineEnding = "\r";
	  }
	  return preferredLineEnding;
	}
	helpers.getPreferredLineEnding = getPreferredLineEnding;

	/**
	 * Expands a path with a tilde to an absolute path.
	 *
	 * @param {string} file Path that may begin with a tilde.
	 * @param {Object} os Node.js "os" module.
	 * @returns {string} Absolute path (or original path).
	 */
	function expandTildePath(file, os) {
	  const homedir = os && os.homedir && os.homedir();
	  return homedir ? file.replace(/^~($|\/|\\)/, `${homedir}$1`) : file;
	}
	helpers.expandTildePath = expandTildePath;
	return helpers;
}

var helpersExports = requireHelpers();

var micromarkHelpersExports = requireMicromarkHelpers();

// @ts-check


/** @typedef {import("markdownlint").RuleParams} RuleParams */
/** @typedef {import("markdownlint").MicromarkToken} MicromarkToken */
/** @typedef {import("markdownlint").MicromarkTokenType} MicromarkTokenType */

/** @type {Map<string, object>} */
const map = new Map();
/** @type {RuleParams | undefined} */
let params = undefined;

/**
 * Initializes (resets) the cache.
 *
 * @param {RuleParams} [p] Rule parameters object.
 * @returns {void}
 */
function initialize(p) {
  map.clear();
  params = p;
}

/**
 * Gets the cached Micromark token array (for testing).
 *
 * @returns {MicromarkToken[]} Micromark tokens.
 */
function micromarkTokens() {
  return params?.parsers.micromark.tokens || [];
}

/**
 * Gets a cached object value - computes it and caches it.
 *
 * @param {string} name Cache object name.
 * @param {Function} getValue Getter for object value.
 * @returns {Object} Object value.
 */
function getCached(name, getValue) {
  if (map.has(name)) {
    return map.get(name);
  }
  const value = getValue();
  map.set(name, value);
  return value;
}

/**
 * Filters a list of Micromark tokens by type and caches the result.
 *
 * @param {MicromarkTokenType[]} types Types to allow.
 * @param {boolean} [htmlFlow] Whether to include htmlFlow content.
 * @returns {MicromarkToken[]} Filtered tokens.
 */
function filterByTypesCached(types, htmlFlow) {
  return getCached(
    // eslint-disable-next-line prefer-rest-params
    JSON.stringify(arguments),
    () => micromarkHelpersExports.filterByTypes(micromarkTokens(), types, htmlFlow)
  );
}

/**
 * Gets a reference link and image data object.
 *
 * @returns {Object} Reference link and image data object.
 */
function getReferenceLinkImageData() {
  return getCached(
    getReferenceLinkImageData.name,
    () => helpersExports.getReferenceLinkImageData(micromarkTokens())
  );
}

// @ts-check

const homepage = "https://github.com/DavidAnson/markdownlint";
const version = "0.38.0";

var markdownit;
var hasRequiredMarkdownit;

function requireMarkdownit () {
	if (hasRequiredMarkdownit) return markdownit;
	hasRequiredMarkdownit = 1;

	const { newLineRe } = requireHelpers();

	// @ts-expect-error https://github.com/microsoft/TypeScript/issues/52529
	/** @typedef {import("markdownlint").MarkdownIt} MarkdownIt */
	/** @typedef {import("markdownlint").MarkdownItToken} MarkdownItToken */
	/** @typedef {import("markdownlint").Plugin} Plugin */

	/**
	 * @callback InlineCodeSpanCallback
	 * @param {string} code Code content.
	 * @param {number} lineIndex Line index (0-based).
	 * @param {number} columnIndex Column index (0-based).
	 * @param {number} ticks Count of backticks.
	 * @returns {void}
	 */

	/**
	 * Calls the provided function for each inline code span's content.
	 *
	 * @param {string} input Markdown content.
	 * @param {InlineCodeSpanCallback} handler Callback function taking (code,
	 * lineIndex, columnIndex, ticks).
	 * @returns {void}
	 */
	function forEachInlineCodeSpan(input, handler) {
	  const backtickRe = /`+/g;
	  let match = null;
	  const backticksLengthAndIndex = [];
	  while ((match = backtickRe.exec(input)) !== null) {
	    backticksLengthAndIndex.push([ match[0].length, match.index ]);
	  }
	  const newLinesIndex = [];
	  while ((match = newLineRe.exec(input)) !== null) {
	    newLinesIndex.push(match.index);
	  }
	  let lineIndex = 0;
	  let lineStartIndex = 0;
	  let k = 0;
	  for (let i = 0; i < backticksLengthAndIndex.length - 1; i++) {
	    const [ startLength, startIndex ] = backticksLengthAndIndex[i];
	    if ((startIndex === 0) || (input[startIndex - 1] !== "\\")) {
	      for (let j = i + 1; j < backticksLengthAndIndex.length; j++) {
	        const [ endLength, endIndex ] = backticksLengthAndIndex[j];
	        if (startLength === endLength) {
	          for (; k < newLinesIndex.length; k++) {
	            const newLineIndex = newLinesIndex[k];
	            if (startIndex < newLineIndex) {
	              break;
	            }
	            lineIndex++;
	            lineStartIndex = newLineIndex + 1;
	          }
	          const columnIndex = startIndex - lineStartIndex + startLength;
	          handler(
	            input.slice(startIndex + startLength, endIndex),
	            lineIndex,
	            columnIndex,
	            startLength
	          );
	          i = j;
	          break;
	        }
	      }
	    }
	  }
	}

	/**
	 * Freeze all freeze-able members of a token and its children.
	 *
	 * @param {MarkdownItToken} token A markdown-it token.
	 * @returns {void}
	 */
	function freezeToken(token) {
	  if (token.attrs) {
	    for (const attr of token.attrs) {
	      Object.freeze(attr);
	    }
	    Object.freeze(token.attrs);
	  }
	  if (token.children) {
	    for (const child of token.children) {
	      freezeToken(child);
	    }
	    Object.freeze(token.children);
	  }
	  if (token.map) {
	    Object.freeze(token.map);
	  }
	  Object.freeze(token);
	}

	/**
	 * Annotate tokens with line/lineNumber and freeze them.
	 *
	 * @param {import("markdown-it").Token[]} tokens Array of markdown-it tokens.
	 * @param {string[]} lines Lines of Markdown content.
	 * @returns {void}
	 */
	function annotateAndFreezeTokens(tokens, lines) {
	  let trMap = null;
	  /** @type {MarkdownItToken[]} */
	  // @ts-ignore
	  const markdownItTokens = tokens;
	  for (const token of markdownItTokens) {
	    // Provide missing maps for table content
	    if (token.type === "tr_open") {
	      trMap = token.map;
	    } else if (token.type === "tr_close") {
	      trMap = null;
	    }
	    if (!token.map && trMap) {
	      token.map = [ ...trMap ];
	    }
	    // Update token metadata
	    if (token.map) {
	      token.line = lines[token.map[0]];
	      token.lineNumber = token.map[0] + 1;
	      // Trim bottom of token to exclude whitespace lines
	      while (token.map[1] && !((lines[token.map[1] - 1] || "").trim())) {
	        token.map[1]--;
	      }
	    }
	    // Annotate children with lineNumber
	    if (token.children) {
	      const codeSpanExtraLines = [];
	      if (token.children.some((child) => child.type === "code_inline")) {
	        forEachInlineCodeSpan(token.content, (code) => {
	          codeSpanExtraLines.push(code.split(newLineRe).length - 1);
	        });
	      }
	      let lineNumber = token.lineNumber;
	      for (const child of token.children) {
	        child.lineNumber = lineNumber;
	        child.line = lines[lineNumber - 1];
	        if ((child.type === "softbreak") || (child.type === "hardbreak")) {
	          lineNumber++;
	        } else if (child.type === "code_inline") {
	          lineNumber += codeSpanExtraLines.shift();
	        }
	      }
	    }
	    freezeToken(token);
	  }
	  Object.freeze(tokens);
	}

	/**
	 * Gets an array of markdown-it tokens for the input.
	 *
	 * @param {MarkdownIt} markdownIt Instance of the markdown-it parser.
	 * @param {string} content Markdown content.
	 * @param {string[]} lines Lines of Markdown content.
	 * @returns {MarkdownItToken[]} Array of markdown-it tokens.
	 */
	function getMarkdownItTokens(markdownIt, content, lines) {
	  const tokens = markdownIt.parse(content, {});
	  annotateAndFreezeTokens(tokens, lines);
	  return tokens;
	}
	markdownit = {
	  forEachInlineCodeSpan,
	  getMarkdownItTokens
	};
	return markdownit;
}

var deferRequire;
var hasRequiredDeferRequire;

function requireDeferRequire () {
	if (hasRequiredDeferRequire) return deferRequire;
	hasRequiredDeferRequire = 1;

	/**
	 * Calls require for markdownit.cjs. Used to synchronously defer loading because module.createRequire is buggy under webpack (https://github.com/webpack/webpack/issues/16724).
	 *
	 * @returns {any} Exported module content.
	 */
	function requireMarkdownItCjs() {
	  return requireMarkdownit();
	}

	deferRequire = {
	  requireMarkdownItCjs
	};
	return deferRequire;
}

var deferRequireExports = requireDeferRequire();

function commonjsRequire(path) {
	throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}

var resolveModule_1;
var hasRequiredResolveModule;

function requireResolveModule () {
	if (hasRequiredResolveModule) return resolveModule_1;
	hasRequiredResolveModule = 1;

	// @ts-ignore
	// eslint-disable-next-line camelcase, no-inline-comments, no-undef
	const nativeRequire = (typeof __non_webpack_require__ === "undefined") ? commonjsRequire : /* c8 ignore next */ __non_webpack_require__;
	// Captures the native require implementation (even under webpack).

	/**
	 * @typedef RequireResolveOptions
	 * @property {string[]} [paths] Additional paths to resolve from.
	 */

	/**
	 * @callback RequireResolve
	 * @param {string} id Module name or path.
	 * @param {RequireResolveOptions} options Options to apply.
	 * @returns {string} Resolved module path.
	 */

	/**
	 * Resolves modules according to Node's resolution rules.
	 *
	 * @param {RequireResolve} resolve Node-like require.resolve implementation.
	 * @param {string} id Module name or path.
	 * @param {string[]} [paths] Additional paths to resolve from.
	 * @returns {string} Resolved module path.
	 */
	const resolveModuleCustomResolve = (resolve, id, paths = []) => {
	  // resolve.paths is sometimes not present under webpack or VS Code
	  // @ts-ignore
	  const resolvePaths = resolve.paths?.("") || [];
	  const allPaths = [ ...paths, ...resolvePaths ];
	  return resolve(id, { "paths": allPaths });
	};

	/**
	 * Resolves modules according to Node's resolution rules.
	 *
	 * @param {string} id Module name or path.
	 * @param {string[]} [paths] Additional paths to resolve from.
	 * @returns {string} Resolved module path.
	 */
	const resolveModule = (id, paths) => (
	  resolveModuleCustomResolve(nativeRequire.resolve, id, paths)
	);

	resolveModule_1 = {
	  resolveModule,
	  resolveModuleCustomResolve
	};
	return resolveModule_1;
}

requireResolveModule();

// @ts-check


/** @type {import("markdownlint").Rule} */
const md001 = {
  "names": [ "MD001", "heading-increment" ],
  "description": "Heading levels should only increment by one level at a time",
  "tags": [ "headings" ],
  "parser": "micromark",
  "function": function MD001(params, onError) {
    let prevLevel = Number.MAX_SAFE_INTEGER;
    for (const heading of filterByTypesCached([ "atxHeading", "setextHeading" ])) {
      const level = micromarkHelpersExports.getHeadingLevel(heading);
      if (level > prevLevel) {
        helpersExports.addErrorDetailIf(
          onError,
          heading.startLine,
          `h${prevLevel + 1}`,
          `h${level}`
        );
      }
      prevLevel = level;
    }
  }
};

// @ts-check


/** @type {import("markdownlint").Rule} */
const md003 = {
  "names": [ "MD003", "heading-style" ],
  "description": "Heading style",
  "tags": [ "headings" ],
  "parser": "micromark",
  "function": function MD003(params, onError) {
    let style = String(params.config.style || "consistent");
    for (const heading of filterByTypesCached([ "atxHeading", "setextHeading" ])) {
      const styleForToken = micromarkHelpersExports.getHeadingStyle(heading);
      if (style === "consistent") {
        style = styleForToken;
      }
      if (styleForToken !== style) {
        const h12 = micromarkHelpersExports.getHeadingLevel(heading) <= 2;
        const setextWithAtx =
          (style === "setext_with_atx") &&
            ((h12 && (styleForToken === "setext")) ||
            (!h12 && (styleForToken === "atx")));
        const setextWithAtxClosed =
          (style === "setext_with_atx_closed") &&
            ((h12 && (styleForToken === "setext")) ||
            (!h12 && (styleForToken === "atx_closed")));
        if (!setextWithAtx && !setextWithAtxClosed) {
          let expected = style;
          if (style === "setext_with_atx") {
            expected = h12 ? "setext" : "atx";
          } else if (style === "setext_with_atx_closed") {
            expected = h12 ? "setext" : "atx_closed";
          }
          helpersExports.addErrorDetailIf(
            onError,
            heading.startLine,
            expected,
            styleForToken
          );
        }
      }
    }
  }
};

// @ts-check


const markerToStyle = {
  "-": "dash",
  "+": "plus",
  "*": "asterisk"
};
const styleToMarker = {
  "dash": "-",
  "plus": "+",
  "asterisk": "*"
};
const differentItemStyle = {
  "dash": "plus",
  "plus": "asterisk",
  "asterisk": "dash"
};
const validStyles = new Set([
  "asterisk",
  "consistent",
  "dash",
  "plus",
  "sublist"
]);

/** @type {import("markdownlint").Rule} */
const md004 = {
  "names": [ "MD004", "ul-style" ],
  "description": "Unordered list style",
  "tags": [ "bullet", "ul" ],
  "parser": "micromark",
  "function": function MD004(params, onError) {
    const style = String(params.config.style || "consistent");
    let expectedStyle = validStyles.has(style) ? style : "dash";
    const nestingStyles = [];
    for (const listUnordered of filterByTypesCached([ "listUnordered" ])) {
      let nesting = 0;
      if (style === "sublist") {
        /** @type {import("markdownlint").MicromarkToken | null} */
        let parent = listUnordered;
        // @ts-ignore
        while ((parent = micromarkHelpersExports.getParentOfType(parent, [ "listOrdered", "listUnordered" ]))) {
          nesting++;
        }
      }
      const listItemMarkers = micromarkHelpersExports.getDescendantsByType(listUnordered, [ "listItemPrefix", "listItemMarker" ]);
      for (const listItemMarker of listItemMarkers) {
        const itemStyle = markerToStyle[listItemMarker.text];
        if (style === "sublist") {
          if (!nestingStyles[nesting]) {
            nestingStyles[nesting] =
              (itemStyle === nestingStyles[nesting - 1]) ?
                differentItemStyle[itemStyle] :
                itemStyle;
          }
          expectedStyle = nestingStyles[nesting];
        } else if (expectedStyle === "consistent") {
          expectedStyle = itemStyle;
        }
        const column = listItemMarker.startColumn;
        const length = listItemMarker.endColumn - listItemMarker.startColumn;
        helpersExports.addErrorDetailIf(
          onError,
          listItemMarker.startLine,
          expectedStyle,
          itemStyle,
          undefined,
          undefined,
          [ column, length ],
          {
            "editColumn": column,
            "deleteCount": length,
            "insertText": styleToMarker[expectedStyle]
          }
        );
      }
    }
  }
};

// @ts-check


/** @type {import("markdownlint").Rule} */
const md005 = {
  "names": [ "MD005", "list-indent" ],
  "description": "Inconsistent indentation for list items at the same level",
  "tags": [ "bullet", "ul", "indentation" ],
  "parser": "micromark",
  "function": function MD005(params, onError) {
    for (const list of filterByTypesCached([ "listOrdered", "listUnordered" ])) {
      const expectedIndent = list.startColumn - 1;
      let expectedEnd = 0;
      let endMatching = false;
      const listItemPrefixes =
        list.children.filter((token) => (token.type === "listItemPrefix"));
      for (const listItemPrefix of listItemPrefixes) {
        const lineNumber = listItemPrefix.startLine;
        const actualIndent = listItemPrefix.startColumn - 1;
        const range = [ 1, listItemPrefix.endColumn - 1 ];
        if (list.type === "listUnordered") {
          helpersExports.addErrorDetailIf(
            onError,
            lineNumber,
            expectedIndent,
            actualIndent,
            undefined,
            undefined,
            range
            // No fixInfo; MD007 handles this scenario better
          );
        } else {
          const markerLength = listItemPrefix.text.trim().length;
          const actualEnd = listItemPrefix.startColumn + markerLength - 1;
          expectedEnd = expectedEnd || actualEnd;
          if ((expectedIndent !== actualIndent) || endMatching) {
            if (expectedEnd === actualEnd) {
              endMatching = true;
            } else {
              const detail = endMatching ?
                `Expected: (${expectedEnd}); Actual: (${actualEnd})` :
                `Expected: ${expectedIndent}; Actual: ${actualIndent}`;
              const expected = endMatching ?
                expectedEnd - markerLength :
                expectedIndent;
              const actual = endMatching ?
                actualEnd - markerLength :
                actualIndent;
              helpersExports.addError(
                onError,
                lineNumber,
                detail,
                undefined,
                range,
                {
                  "editColumn": Math.min(actual, expected) + 1,
                  "deleteCount": Math.max(actual - expected, 0),
                  "insertText": "".padEnd(Math.max(expected - actual, 0))
                }
              );
            }
          }
        }
      }
    }
  }
};

// @ts-check


/** @type {import("micromark-util-types").TokenType[]} */
const unorderedListTypes =
  [ "blockQuotePrefix", "listItemPrefix", "listUnordered" ];
/** @type {import("micromark-util-types").TokenType[]} */
const unorderedParentTypes =
  [ "blockQuote", "listOrdered", "listUnordered" ];

/** @type {import("markdownlint").Rule} */
const md007 = {
  "names": [ "MD007", "ul-indent" ],
  "description": "Unordered list indentation",
  "tags": [ "bullet", "ul", "indentation" ],
  "parser": "micromark",
  "function": function MD007(params, onError) {
    const indent = Number(params.config.indent || 2);
    const startIndented = !!params.config.start_indented;
    const startIndent = Number(params.config.start_indent || indent);
    const unorderedListNesting = new Map();
    let lastBlockQuotePrefix = null;
    const tokens = filterByTypesCached(unorderedListTypes);
    for (const token of tokens) {
      const { endColumn, parent, startColumn, startLine, type } = token;
      if (type === "blockQuotePrefix") {
        lastBlockQuotePrefix = token;
      } else if (type === "listUnordered") {
        let nesting = 0;
        /** @type {import("markdownlint").MicromarkToken | null} */
        let current = token;
        while (
          // @ts-ignore
          (current = micromarkHelpersExports.getParentOfType(current, unorderedParentTypes))
        ) {
          if (current.type === "listUnordered") {
            nesting++;
            // eslint-disable-next-line no-continue
            continue;
          } else if (current.type === "listOrdered") {
            nesting = -1;
          }
          break;
        }
        if (nesting >= 0) {
          unorderedListNesting.set(token, nesting);
        }
      } else {
        // listItemPrefix
        const nesting = unorderedListNesting.get(parent);
        if (nesting !== undefined) {
          // listItemPrefix for listUnordered
          const expectedIndent =
            (startIndented ? startIndent : 0) + (nesting * indent);
          const blockQuoteAdjustment =
            (lastBlockQuotePrefix?.endLine === startLine) ?
              (lastBlockQuotePrefix.endColumn - 1) :
              0;
          const actualIndent = startColumn - 1 - blockQuoteAdjustment;
          const range = [ 1, endColumn - 1 ];
          const fixInfo = {
            "editColumn": startColumn - actualIndent,
            "deleteCount": Math.max(actualIndent - expectedIndent, 0),
            "insertText": "".padEnd(Math.max(expectedIndent - actualIndent, 0))
          };
          helpersExports.addErrorDetailIf(
            onError,
            startLine,
            expectedIndent,
            actualIndent,
            undefined,
            undefined,
            range,
            fixInfo
          );
        }
      }
    }
  }
};

// @ts-check


/** @type {import("markdownlint").Rule} */
const md009 = {
  "names": [ "MD009", "no-trailing-spaces" ],
  "description": "Trailing spaces",
  "tags": [ "whitespace" ],
  "parser": "micromark",
  "function": function MD009(params, onError) {
    let brSpaces = params.config.br_spaces;
    brSpaces = Number((brSpaces === undefined) ? 2 : brSpaces);
    const listItemEmptyLines = !!params.config.list_item_empty_lines;
    const strict = !!params.config.strict;
    const codeBlockLineNumbers = new Set();
    for (const codeBlock of filterByTypesCached([ "codeFenced" ])) {
      micromarkHelpersExports.addRangeToSet(codeBlockLineNumbers, codeBlock.startLine + 1, codeBlock.endLine - 1);
    }
    for (const codeBlock of filterByTypesCached([ "codeIndented" ])) {
      micromarkHelpersExports.addRangeToSet(codeBlockLineNumbers, codeBlock.startLine, codeBlock.endLine);
    }
    const listItemLineNumbers = new Set();
    if (listItemEmptyLines) {
      for (const listBlock of filterByTypesCached([ "listOrdered", "listUnordered" ])) {
        micromarkHelpersExports.addRangeToSet(listItemLineNumbers, listBlock.startLine, listBlock.endLine);
        let trailingIndent = true;
        for (let i = listBlock.children.length - 1; i >= 0; i--) {
          const child = listBlock.children[i];
          switch (child.type) {
            case "content":
              trailingIndent = false;
              break;
            case "listItemIndent":
              if (trailingIndent) {
                listItemLineNumbers.delete(child.startLine);
              }
              break;
            case "listItemPrefix":
              trailingIndent = true;
              break;
          }
        }
      }
    }
    const paragraphLineNumbers = new Set();
    const codeInlineLineNumbers = new Set();
    if (strict) {
      for (const paragraph of filterByTypesCached([ "paragraph" ])) {
        micromarkHelpersExports.addRangeToSet(paragraphLineNumbers, paragraph.startLine, paragraph.endLine - 1);
      }
      for (const codeText of filterByTypesCached([ "codeText" ])) {
        micromarkHelpersExports.addRangeToSet(codeInlineLineNumbers, codeText.startLine, codeText.endLine - 1);
      }
    }
    const expected = (brSpaces < 2) ? 0 : brSpaces;
    for (let lineIndex = 0; lineIndex < params.lines.length; lineIndex++) {
      const line = params.lines[lineIndex];
      const lineNumber = lineIndex + 1;
      const trailingSpaces = line.length - line.trimEnd().length;
      if (
        trailingSpaces &&
        !codeBlockLineNumbers.has(lineNumber) &&
        !listItemLineNumbers.has(lineNumber) &&
        (
          (expected !== trailingSpaces) ||
          (strict &&
            (!paragraphLineNumbers.has(lineNumber) ||
             codeInlineLineNumbers.has(lineNumber)))
        )
      ) {
        const column = line.length - trailingSpaces + 1;
        helpersExports.addError(
          onError,
          lineNumber,
          "Expected: " + (expected === 0 ? "" : "0 or ") +
            expected + "; Actual: " + trailingSpaces,
          undefined,
          [ column, trailingSpaces ],
          {
            "editColumn": column,
            "deleteCount": trailingSpaces
          }
        );
      }
    }
  }
};

// @ts-check


const tabRe = /\t+/g;

/** @type {import("markdownlint").Rule} */
const md010 = {
  "names": [ "MD010", "no-hard-tabs" ],
  "description": "Hard tabs",
  "tags": [ "whitespace", "hard_tab" ],
  "parser": "micromark",
  "function": function MD010(params, onError) {
    const codeBlocks = params.config.code_blocks;
    const includeCode = (codeBlocks === undefined) ? true : !!codeBlocks;
    const ignoreCodeLanguages = new Set(
      (params.config.ignore_code_languages || [])
        .map((language) => language.toLowerCase())
    );
    const spacesPerTab = params.config.spaces_per_tab;
    const spaceMultiplier = (spacesPerTab === undefined) ?
      1 :
      Math.max(0, Number(spacesPerTab));
    /** @type {import("markdownlint").MicromarkTokenType[]} */
    const exclusionTypes = [];
    if (includeCode) {
      if (ignoreCodeLanguages.size > 0) {
        exclusionTypes.push("codeFenced");
      }
    } else {
      exclusionTypes.push("codeFenced", "codeIndented", "codeText");
    }
    const codeTokens = filterByTypesCached(exclusionTypes).filter((token) => {
      if ((token.type === "codeFenced") && (ignoreCodeLanguages.size > 0)) {
        const fenceInfos = micromarkHelpersExports.getDescendantsByType(token, [ "codeFencedFence", "codeFencedFenceInfo" ]);
        return fenceInfos.every((fenceInfo) => ignoreCodeLanguages.has(fenceInfo.text.toLowerCase()));
      }
      return true;
    });
    const codeRanges = codeTokens.map((token) => {
      const { type, startLine, startColumn, endLine, endColumn } = token;
      const codeFenced = (type === "codeFenced");
      return {
        "startLine": startLine + (codeFenced ? 1 : 0),
        "startColumn": codeFenced ? 0 : startColumn,
        "endLine": endLine - (codeFenced ? 1 : 0),
        "endColumn": codeFenced ? Number.MAX_SAFE_INTEGER : endColumn
      };
    });
    for (let lineIndex = 0; lineIndex < params.lines.length; lineIndex++) {
      const line = params.lines[lineIndex];
      let match = null;
      while ((match = tabRe.exec(line)) !== null) {
        const lineNumber = lineIndex + 1;
        const column = match.index + 1;
        const length = match[0].length;
        /** @type {import("../helpers/helpers.cjs").FileRange} */
        const range = { "startLine": lineNumber, "startColumn": column, "endLine": lineNumber, "endColumn": column + length - 1 };
        if (!codeRanges.some((codeRange) => helpersExports.hasOverlap(codeRange, range))) {
          helpersExports.addError(
            onError,
            lineNumber,
            "Column: " + column,
            undefined,
            [ column, length ],
            {
              "editColumn": column,
              "deleteCount": length,
              "insertText": "".padEnd(length * spaceMultiplier)
            }
          );
        }
      }
    }
  }
};

// @ts-check


const reversedLinkRe = /(^|[^\\])\(([^()]+)\)\[([^\]^][^\]]*)\](?!\()/g;

/** @type {import("markdownlint").Rule} */
const md011 = {
  "names": [ "MD011", "no-reversed-links" ],
  "description": "Reversed link syntax",
  "tags": [ "links" ],
  "parser": "micromark",
  "function": function MD011(params, onError) {
    const codeBlockLineNumbers = new Set();
    for (const codeBlock of filterByTypesCached([ "codeFenced", "codeIndented" ])) {
      micromarkHelpersExports.addRangeToSet(codeBlockLineNumbers, codeBlock.startLine, codeBlock.endLine);
    }
    const codeTexts = filterByTypesCached([ "codeText" ]);
    for (const [ lineIndex, line ] of params.lines.entries()) {
      const lineNumber = lineIndex + 1;
      if (!codeBlockLineNumbers.has(lineNumber)) {
        let match = null;
        while ((match = reversedLinkRe.exec(line)) !== null) {
          const [ reversedLink, preChar, linkText, linkDestination ] = match;
          if (
            !linkText.endsWith("\\") &&
            !linkDestination.endsWith("\\")
          ) {
            const column = match.index + preChar.length + 1;
            const length = match[0].length - preChar.length;
            /** @type {import("../helpers/helpers.cjs").FileRange} */
            const range = { "startLine": lineNumber, "startColumn": column, "endLine": lineNumber, "endColumn": column + length - 1 };
            if (!codeTexts.some((codeText) => helpersExports.hasOverlap(codeText, range))) {
              helpersExports.addError(
                onError,
                lineNumber,
                reversedLink.slice(preChar.length),
                undefined,
                [ column, length ],
                {
                  "editColumn": column,
                  "deleteCount": length,
                  "insertText": `[${linkText}](${linkDestination})`
                }
              );
            }
          }
        }
      }
    }
  }
};

// @ts-check


/** @type {import("markdownlint").Rule} */
const md012 = {
  "names": [ "MD012", "no-multiple-blanks" ],
  "description": "Multiple consecutive blank lines",
  "tags": [ "whitespace", "blank_lines" ],
  "parser": "micromark",
  "function": function MD012(params, onError) {
    const maximum = Number(params.config.maximum || 1);
    const { lines } = params;
    const codeBlockLineNumbers = new Set();
    for (const codeBlock of filterByTypesCached([ "codeFenced", "codeIndented" ])) {
      micromarkHelpersExports.addRangeToSet(codeBlockLineNumbers, codeBlock.startLine, codeBlock.endLine);
    }
    let count = 0;
    for (const [ lineIndex, line ] of lines.entries()) {
      const inCode = codeBlockLineNumbers.has(lineIndex + 1);
      count = (inCode || (line.trim().length > 0)) ? 0 : count + 1;
      if (maximum < count) {
        helpersExports.addErrorDetailIf(
          onError,
          lineIndex + 1,
          maximum,
          count,
          undefined,
          undefined,
          undefined,
          {
            "deleteCount": -1
          }
        );
      }
    }
  }
};

// @ts-check


const longLineRePrefix = "^.{";
const longLineRePostfixRelaxed = "}.*\\s.*$";
const longLineRePostfixStrict = "}.+$";
const sternModeRe = /^(?:[#>\s]*\s)?\S*$/;

/** @typedef {import("micromark-extension-gfm-autolink-literal")} */
/** @typedef {import("micromark-extension-gfm-table")} */

/** @type {import("markdownlint").Rule} */
const md013 = {
  "names": [ "MD013", "line-length" ],
  "description": "Line length",
  "tags": [ "line_length" ],
  "parser": "micromark",
  "function": function MD013(params, onError) {
    const lineLength = Number(params.config.line_length || 80);
    const headingLineLength =
      Number(params.config.heading_line_length || lineLength);
    const codeLineLength =
      Number(params.config.code_block_line_length || lineLength);
    const strict = !!params.config.strict;
    const stern = !!params.config.stern;
    const longLineRePostfix =
      (strict || stern) ? longLineRePostfixStrict : longLineRePostfixRelaxed;
    const longLineRe =
      new RegExp(longLineRePrefix + lineLength + longLineRePostfix);
    const longHeadingLineRe =
      new RegExp(longLineRePrefix + headingLineLength + longLineRePostfix);
    const longCodeLineRe =
      new RegExp(longLineRePrefix + codeLineLength + longLineRePostfix);
    const codeBlocks = params.config.code_blocks;
    const includeCodeBlocks = (codeBlocks === undefined) ? true : !!codeBlocks;
    const tables = params.config.tables;
    const includeTables = (tables === undefined) ? true : !!tables;
    const headings = params.config.headings;
    const includeHeadings = (headings === undefined) ? true : !!headings;
    const headingLineNumbers = new Set();
    for (const heading of filterByTypesCached([ "atxHeading", "setextHeading" ])) {
      micromarkHelpersExports.addRangeToSet(headingLineNumbers, heading.startLine, heading.endLine);
    }
    const codeBlockLineNumbers = new Set();
    for (const codeBlock of filterByTypesCached([ "codeFenced", "codeIndented" ])) {
      micromarkHelpersExports.addRangeToSet(codeBlockLineNumbers, codeBlock.startLine, codeBlock.endLine);
    }
    const tableLineNumbers = new Set();
    for (const table of filterByTypesCached([ "table" ])) {
      micromarkHelpersExports.addRangeToSet(tableLineNumbers, table.startLine, table.endLine);
    }
    const linkLineNumbers = new Set();
    for (const link of filterByTypesCached([ "autolink", "image", "link", "literalAutolink" ])) {
      micromarkHelpersExports.addRangeToSet(linkLineNumbers, link.startLine, link.endLine);
    }
    const paragraphDataLineNumbers = new Set();
    for (const paragraph of filterByTypesCached([ "paragraph" ])) {
      for (const data of micromarkHelpersExports.getDescendantsByType(paragraph, [ "data" ])) {
        micromarkHelpersExports.addRangeToSet(paragraphDataLineNumbers, data.startLine, data.endLine);
      }
    }
    const linkOnlyLineNumbers = new Set();
    for (const lineNumber of linkLineNumbers) {
      if (!paragraphDataLineNumbers.has(lineNumber)) {
        linkOnlyLineNumbers.add(lineNumber);
      }
    }
    const definitionLineIndices = new Set(getReferenceLinkImageData().definitionLineIndices);
    for (let lineIndex = 0; lineIndex < params.lines.length; lineIndex++) {
      const line = params.lines[lineIndex];
      const lineNumber = lineIndex + 1;
      const isHeading = headingLineNumbers.has(lineNumber);
      const inCode = codeBlockLineNumbers.has(lineNumber);
      const inTable = tableLineNumbers.has(lineNumber);
      const length = inCode ?
        codeLineLength :
        (isHeading ? headingLineLength : lineLength);
      const lengthRe = inCode ?
        longCodeLineRe :
        (isHeading ? longHeadingLineRe : longLineRe);
      if ((includeCodeBlocks || !inCode) &&
          (includeTables || !inTable) &&
          (includeHeadings || !isHeading) &&
          !definitionLineIndices.has(lineIndex) &&
          (strict ||
           (!(stern && sternModeRe.test(line)) &&
            !linkOnlyLineNumbers.has(lineNumber))) &&
          lengthRe.test(line)) {
        helpersExports.addErrorDetailIf(
          onError,
          lineNumber,
          length,
          line.length,
          undefined,
          undefined,
          [ length + 1, line.length - length ]
        );
      }
    }
  }
};

// @ts-check


const dollarCommandRe = /^(\s*)(\$\s+)/;

/** @type {import("markdownlint").Rule} */
const md014 = {
  "names": [ "MD014", "commands-show-output" ],
  "description": "Dollar signs used before commands without showing output",
  "tags": [ "code" ],
  "parser": "micromark",
  "function": function MD014(params, onError) {
    for (const codeBlock of filterByTypesCached([ "codeFenced", "codeIndented" ])) {
      const codeFlowValues = codeBlock.children.filter((child) => child.type === "codeFlowValue");
      const dollarMatches = codeFlowValues
        .map((codeFlowValue) => ({
          "result": codeFlowValue.text.match(dollarCommandRe),
          "startColumn": codeFlowValue.startColumn,
          "startLine": codeFlowValue.startLine,
          "text": codeFlowValue.text
        }))
        .filter((dollarMatch) => dollarMatch.result);
      if (dollarMatches.length === codeFlowValues.length) {
        for (const dollarMatch of dollarMatches) {
          // @ts-ignore
          const column = dollarMatch.startColumn + dollarMatch.result[1].length;
          // @ts-ignore
          const length = dollarMatch.result[2].length;
          helpersExports.addErrorContext(
            onError,
            dollarMatch.startLine,
            dollarMatch.text,
            undefined,
            undefined,
            [ column, length ],
            {
              "editColumn": column,
              "deleteCount": length
            }
          );
        }
      }
    }
  }
};

// @ts-check


/** @type {import("markdownlint").Rule} */
const md018 = {
  "names": [ "MD018", "no-missing-space-atx" ],
  "description": "No space after hash on atx style heading",
  "tags": [ "headings", "atx", "spaces" ],
  "parser": "micromark",
  "function": function MD018(params, onError) {
    const { lines } = params;
    const ignoreBlockLineNumbers = new Set();
    for (const ignoreBlock of filterByTypesCached([ "codeFenced", "codeIndented", "htmlFlow" ])) {
      micromarkHelpersExports.addRangeToSet(ignoreBlockLineNumbers, ignoreBlock.startLine, ignoreBlock.endLine);
    }
    for (const [ lineIndex, line ] of lines.entries()) {
      if (
        !ignoreBlockLineNumbers.has(lineIndex + 1) &&
        /^#+[^# \t]/.test(line) &&
        !/#\s*$/.test(line) &&
        !line.startsWith("#️⃣")
      ) {
        // @ts-ignore
        const hashCount = /^#+/.exec(line)[0].length;
        helpersExports.addErrorContext(
          onError,
          lineIndex + 1,
          line.trim(),
          undefined,
          undefined,
          [ 1, hashCount + 1 ],
          {
            "editColumn": hashCount + 1,
            "insertText": " "
          }
        );
      }
    }
  }
};

// @ts-check


/**
 * Validate heading sequence and whitespace length at start or end.
 *
 * @param {import("markdownlint").RuleOnError} onError Error-reporting callback.
 * @param {import("markdownlint").MicromarkToken} heading ATX heading token.
 * @param {number} delta Direction to scan.
 * @returns {void}
 */
function validateHeadingSpaces(onError, heading, delta) {
  const { children, startLine, text } = heading;
  let index = (delta > 0) ? 0 : (children.length - 1);
  while (
    children[index] &&
    (children[index].type !== "atxHeadingSequence")
  ) {
    index += delta;
  }
  const headingSequence = children[index];
  const whitespace = children[index + delta];
  if (
    (headingSequence?.type === "atxHeadingSequence") &&
    (whitespace?.type === "whitespace") &&
    (whitespace.text.length > 1)
  ) {
    const column = whitespace.startColumn + 1;
    const length = whitespace.endColumn - column;
    helpersExports.addErrorContext(
      onError,
      startLine,
      text.trim(),
      delta > 0,
      delta < 0,
      [ column, length ],
      {
        "editColumn": column,
        "deleteCount": length
      }
    );
  }
}

/** @type {import("markdownlint").Rule[]} */
const md019md021 = [
  {
    "names": [ "MD019", "no-multiple-space-atx" ],
    "description": "Multiple spaces after hash on atx style heading",
    "tags": [ "headings", "atx", "spaces" ],
    "parser": "micromark",
    "function": function MD019(params, onError) {
      const atxHeadings = filterByTypesCached([ "atxHeading" ])
        .filter((heading) => micromarkHelpersExports.getHeadingStyle(heading) === "atx");
      for (const atxHeading of atxHeadings) {
        validateHeadingSpaces(onError, atxHeading, 1);
      }
    }
  },
  {
    "names": [ "MD021", "no-multiple-space-closed-atx" ],
    "description": "Multiple spaces inside hashes on closed atx style heading",
    "tags": [ "headings", "atx_closed", "spaces" ],
    "parser": "micromark",
    "function": function MD021(params, onError) {
      const atxClosedHeadings = filterByTypesCached([ "atxHeading" ])
        .filter((heading) => micromarkHelpersExports.getHeadingStyle(heading) === "atx_closed");
      for (const atxClosedHeading of atxClosedHeadings) {
        validateHeadingSpaces(onError, atxClosedHeading, 1);
        validateHeadingSpaces(onError, atxClosedHeading, -1);
      }
    }
  }
];

// @ts-check


/** @type {import("markdownlint").Rule} */
const md020 = {
  "names": [ "MD020", "no-missing-space-closed-atx" ],
  "description": "No space inside hashes on closed atx style heading",
  "tags": [ "headings", "atx_closed", "spaces" ],
  "parser": "micromark",
  "function": function MD020(params, onError) {
    const { lines } = params;
    const ignoreBlockLineNumbers = new Set();
    for (const ignoreBlock of filterByTypesCached([ "codeFenced", "codeIndented", "htmlFlow" ])) {
      micromarkHelpersExports.addRangeToSet(ignoreBlockLineNumbers, ignoreBlock.startLine, ignoreBlock.endLine);
    }
    for (const [ lineIndex, line ] of lines.entries()) {
      if (!ignoreBlockLineNumbers.has(lineIndex + 1)) {
        const match =
          /^(#+)([ \t]*)([^# \t\\]|[^# \t][^#]*?[^# \t\\])([ \t]*)((?:\\#)?)(#+)(\s*)$/.exec(line);
        if (match) {
          const [
            ,
            leftHash,
            { "length": leftSpaceLength },
            content,
            { "length": rightSpaceLength },
            rightEscape,
            rightHash,
            { "length": trailSpaceLength }
          ] = match;
          const leftHashLength = leftHash.length;
          const rightHashLength = rightHash.length;
          const left = !leftSpaceLength;
          const right = !rightSpaceLength || !!rightEscape;
          const rightEscapeReplacement = rightEscape ? `${rightEscape} ` : "";
          if (left || right) {
            const range = left ?
              [
                1,
                leftHashLength + 1
              ] :
              [
                line.length - trailSpaceLength - rightHashLength,
                rightHashLength + 1
              ];
            helpersExports.addErrorContext(
              onError,
              lineIndex + 1,
              line.trim(),
              left,
              right,
              range,
              {
                "editColumn": 1,
                "deleteCount": line.length,
                "insertText":
                  `${leftHash} ${content} ${rightEscapeReplacement}${rightHash}`
              }
            );
          }
        }
      }
    }
  }
};

// @ts-check


const defaultLines = 1;

const getLinesFunction = (linesParam) => {
  if (Array.isArray(linesParam)) {
    const linesArray = new Array(6).fill(defaultLines);
    for (const [ index, value ] of [ ...linesParam.entries() ].slice(0, 6)) {
      linesArray[index] = value;
    }
    return (heading) => linesArray[micromarkHelpersExports.getHeadingLevel(heading) - 1];
  }
  // Coerce linesParam to a number
  const lines = (linesParam === undefined) ? defaultLines : Number(linesParam);
  return () => lines;
};

/** @type {import("markdownlint").Rule} */
const md022 = {
  "names": [ "MD022", "blanks-around-headings" ],
  "description": "Headings should be surrounded by blank lines",
  "tags": [ "headings", "blank_lines" ],
  "parser": "micromark",
  "function": function MD022(params, onError) {
    const getLinesAbove = getLinesFunction(params.config.lines_above);
    const getLinesBelow = getLinesFunction(params.config.lines_below);
    const { lines } = params;
    const blockQuotePrefixes = filterByTypesCached([ "blockQuotePrefix", "linePrefix" ]);
    for (const heading of filterByTypesCached([ "atxHeading", "setextHeading" ])) {
      const { startLine, endLine } = heading;
      const line = lines[startLine - 1].trim();

      // Check lines above
      const linesAbove = getLinesAbove(heading);
      if (linesAbove >= 0) {
        let actualAbove = 0;
        for (
          let i = 0;
          (i < linesAbove) && helpersExports.isBlankLine(lines[startLine - 2 - i]);
          i++
        ) {
          actualAbove++;
        }
        helpersExports.addErrorDetailIf(
          onError,
          startLine,
          linesAbove,
          actualAbove,
          "Above",
          line,
          undefined,
          {
            "insertText": micromarkHelpersExports.getBlockQuotePrefixText(
              blockQuotePrefixes,
              startLine - 1,
              linesAbove - actualAbove
            )
          }
        );
      }

      // Check lines below
      const linesBelow = getLinesBelow(heading);
      if (linesBelow >= 0) {
        let actualBelow = 0;
        for (
          let i = 0;
          (i < linesBelow) && helpersExports.isBlankLine(lines[endLine + i]);
          i++
        ) {
          actualBelow++;
        }
        helpersExports.addErrorDetailIf(
          onError,
          startLine,
          linesBelow,
          actualBelow,
          "Below",
          line,
          undefined,
          {
            "lineNumber": endLine + 1,
            "insertText": micromarkHelpersExports.getBlockQuotePrefixText(
              blockQuotePrefixes,
              endLine + 1,
              linesBelow - actualBelow
            )
          }
        );
      }
    }
  }
};

// @ts-check


/** @type {import("markdownlint").Rule} */
const md023 = {
  "names": [ "MD023", "heading-start-left" ],
  "description": "Headings must start at the beginning of the line",
  "tags": [ "headings", "spaces" ],
  "parser": "micromark",
  "function": function MD023(params, onError) {
    const headings = filterByTypesCached([ "atxHeading", "linePrefix", "setextHeading" ]);
    for (let i = 0; i < headings.length - 1; i++) {
      if (
        (headings[i].type === "linePrefix") &&
        (headings[i + 1].type !== "linePrefix") &&
        (headings[i].startLine === headings[i + 1].startLine)
      ) {
        const { endColumn, startColumn, startLine } = headings[i];
        const length = endColumn - startColumn;
        helpersExports.addErrorContext(
          onError,
          startLine,
          params.lines[startLine - 1],
          true,
          false,
          [ startColumn, length ],
          {
            "editColumn": startColumn,
            "deleteCount": length
          }
        );
      }
    }
  }
};

// @ts-check


/** @type {import("markdownlint").Rule} */
const md024 = {
  "names": [ "MD024", "no-duplicate-heading" ],
  "description": "Multiple headings with the same content",
  "tags": [ "headings" ],
  "parser": "micromark",
  "function": function MD024(params, onError) {
    const siblingsOnly = !!params.config.siblings_only || false;
    const knownContents = [ null, [] ];
    let lastLevel = 1;
    let knownContent = knownContents[lastLevel];
    for (const heading of filterByTypesCached([ "atxHeading", "setextHeading" ])) {
      const headingText = micromarkHelpersExports.getHeadingText(heading);
      if (siblingsOnly) {
        const newLevel = micromarkHelpersExports.getHeadingLevel(heading);
        while (lastLevel < newLevel) {
          lastLevel++;
          knownContents[lastLevel] = [];
        }
        while (lastLevel > newLevel) {
          knownContents[lastLevel] = [];
          lastLevel--;
        }
        knownContent = knownContents[newLevel];
      }
      // @ts-ignore
      if (knownContent.includes(headingText)) {
        helpersExports.addErrorContext(
          onError,
          heading.startLine,
          headingText.trim()
        );
      } else {
        // @ts-ignore
        knownContent.push(headingText);
      }
    }
  }
};

// @ts-check


/** @type {import("markdownlint").Rule} */
const md025 = {
  "names": [ "MD025", "single-title", "single-h1" ],
  "description": "Multiple top-level headings in the same document",
  "tags": [ "headings" ],
  "parser": "micromark",
  "function": function MD025(params, onError) {
    const level = Number(params.config.level || 1);
    const { tokens } = params.parsers.micromark;
    const matchingHeadings = filterByTypesCached([ "atxHeading", "setextHeading" ])
      .filter((heading) => (level === micromarkHelpersExports.getHeadingLevel(heading)) && !micromarkHelpersExports.isDocfxTab(heading));
    if (matchingHeadings.length > 0) {
      const foundFrontMatterTitle =
        helpersExports.frontMatterHasTitle(
          params.frontMatterLines,
          params.config.front_matter_title
        );
      // Front matter title counts as a top-level heading if present
      let hasTopLevelHeading = foundFrontMatterTitle;
      if (!hasTopLevelHeading) {
        // Check if the first matching heading is a top-level heading
        const previousTokens = tokens.slice(0, tokens.indexOf(matchingHeadings[0]));
        hasTopLevelHeading = previousTokens.every(
          (token) => micromarkHelpersExports.nonContentTokens.has(token.type) || micromarkHelpersExports.isHtmlFlowComment(token)
        );
      }
      if (hasTopLevelHeading) {
        // All other matching headings are violations
        for (const heading of matchingHeadings.slice(foundFrontMatterTitle ? 0 : 1)) {
          helpersExports.addErrorContext(
            onError,
            heading.startLine,
            micromarkHelpersExports.getHeadingText(heading)
          );
        }
      }
    }
  }
};

// @ts-check


/** @type {import("markdownlint").Rule} */
const md026 = {
  "names": [ "MD026", "no-trailing-punctuation" ],
  "description": "Trailing punctuation in heading",
  "tags": [ "headings" ],
  "parser": "micromark",
  "function": function MD026(params, onError) {
    let punctuation = params.config.punctuation;
    punctuation = String(
      (punctuation === undefined) ? helpersExports.allPunctuationNoQuestion : punctuation
    );
    const trailingPunctuationRe =
      new RegExp("\\s*[" + helpersExports.escapeForRegExp(punctuation) + "]+$");
    const headings = filterByTypesCached([ "atxHeadingText", "setextHeadingText" ]);
    for (const heading of headings) {
      const { endColumn, endLine, text } = heading;
      const match = trailingPunctuationRe.exec(text);
      if (
        match &&
        !helpersExports.endOfLineHtmlEntityRe.test(text) &&
        !helpersExports.endOfLineGemojiCodeRe.test(text)
      ) {
        const fullMatch = match[0];
        const length = fullMatch.length;
        const column = endColumn - length;
        helpersExports.addError(
          onError,
          endLine,
          `Punctuation: '${fullMatch}'`,
          undefined,
          [ column, length ],
          {
            "editColumn": column,
            "deleteCount": length
          }
        );
      }
    }
  }
};

// @ts-check


/** @type {import("../helpers/micromark-helpers.cjs").TokenType[]} */
const listTypes = [ "listOrdered", "listUnordered" ];

/** @type {import("markdownlint").Rule} */
const md027 = {
  "names": [ "MD027", "no-multiple-space-blockquote" ],
  "description": "Multiple spaces after blockquote symbol",
  "tags": [ "blockquote", "whitespace", "indentation" ],
  "parser": "micromark",
  "function": function MD027(params, onError) {
    const listItems = params.config.list_items;
    const includeListItems = (listItems === undefined) ? true : !!listItems;
    const { tokens } = params.parsers.micromark;
    for (const token of filterByTypesCached([ "linePrefix" ])) {
      const parent = token.parent;
      const codeIndented = parent?.type === "codeIndented";
      const siblings = parent?.children || tokens;
      if (
        !codeIndented &&
        (siblings[siblings.indexOf(token) - 1]?.type === "blockQuotePrefix") &&
        (includeListItems || (
          !listTypes.includes(siblings[siblings.indexOf(token) + 1]?.type) &&
          !micromarkHelpersExports.getParentOfType(token, listTypes)
        ))
      ) {
        const { startColumn, startLine, text } = token;
        const { length } = text;
        const line = params.lines[startLine - 1];
        helpersExports.addErrorContext(
          onError,
          startLine,
          line,
          undefined,
          undefined,
          [ startColumn, length ],
          {
            "editColumn": startColumn,
            "deleteCount": length
          }
        );
      }
    }
  }
};

// @ts-check


const ignoreTypes = new Set([ "lineEnding", "listItemIndent", "linePrefix" ]);

/** @type {import("markdownlint").Rule} */
const md028 = {
  "names": [ "MD028", "no-blanks-blockquote" ],
  "description": "Blank line inside blockquote",
  "tags": [ "blockquote", "whitespace" ],
  "parser": "micromark",
  "function": function MD028(params, onError) {
    for (const token of filterByTypesCached([ "blockQuote" ])) {
      const errorLineNumbers = [];
      const siblings = token.parent?.children || params.parsers.micromark.tokens;
      for (let i = siblings.indexOf(token) + 1; i < siblings.length; i++) {
        const sibling = siblings[i];
        const { startLine, type } = sibling;
        if (type === "lineEndingBlank") {
          // Possible blank between blockquotes
          errorLineNumbers.push(startLine);
        } else if (ignoreTypes.has(type)) ; else if (type === "blockQuote") {
          // Blockquote followed by blockquote
          for (const lineNumber of errorLineNumbers) {
            helpersExports.addError(onError, lineNumber);
          }
          break;
        } else {
          // Blockquote not followed by blockquote
          break;
        }
      }
    }
  }
};

// @ts-check


const listStyleExamples = {
  "one": "1/1/1",
  "ordered": "1/2/3",
  "zero": "0/0/0"
};

/**
 * Gets the value of an ordered list item prefix token.
 *
 * @param {import("markdownlint").MicromarkToken} listItemPrefix List item prefix token.
 * @returns {number} List item value.
 */
function getOrderedListItemValue(listItemPrefix) {
  return Number(micromarkHelpersExports.getDescendantsByType(listItemPrefix, [ "listItemValue" ])[0].text);
}

/** @type {import("markdownlint").Rule} */
const md029 = {
  "names": [ "MD029", "ol-prefix" ],
  "description": "Ordered list item prefix",
  "tags": [ "ol" ],
  "parser": "micromark",
  "function": function MD029(params, onError) {
    const style = String(params.config.style || "one_or_ordered");
    for (const listOrdered of filterByTypesCached([ "listOrdered" ])) {
      const listItemPrefixes = micromarkHelpersExports.getDescendantsByType(listOrdered, [ "listItemPrefix" ]);
      let expected = 1;
      let incrementing = false;
      // Check for incrementing number pattern 1/2/3 or 0/1/2
      if (listItemPrefixes.length >= 2) {
        const firstValue = getOrderedListItemValue(listItemPrefixes[0]);
        const secondValue = getOrderedListItemValue(listItemPrefixes[1]);
        if ((secondValue !== 1) || (firstValue === 0)) {
          incrementing = true;
          if (firstValue === 0) {
            expected = 0;
          }
        }
      }
      // Determine effective style
      let listStyle = style;
      if (listStyle === "one_or_ordered") {
        listStyle = incrementing ? "ordered" : "one";
      } else if (listStyle === "zero") {
        expected = 0;
      } else if (listStyle === "one") {
        expected = 1;
      }
      // Validate each list item marker
      for (const listItemPrefix of listItemPrefixes) {
        const actual = getOrderedListItemValue(listItemPrefix);
        helpersExports.addErrorDetailIf(
          onError,
          listItemPrefix.startLine,
          expected,
          actual,
          "Style: " + listStyleExamples[listStyle],
          undefined,
          [ listItemPrefix.startColumn, listItemPrefix.endColumn - listItemPrefix.startColumn ]
        );
        if (listStyle === "ordered") {
          expected++;
        }
      }
    }
  }
};

// @ts-check


/** @type {import("markdownlint").Rule} */
const md030 = {
  "names": [ "MD030", "list-marker-space" ],
  "description": "Spaces after list markers",
  "tags": [ "ol", "ul", "whitespace" ],
  "parser": "micromark",
  "function": function MD030(params, onError) {
    const ulSingle = Number(params.config.ul_single || 1);
    const olSingle = Number(params.config.ol_single || 1);
    const ulMulti = Number(params.config.ul_multi || 1);
    const olMulti = Number(params.config.ol_multi || 1);
    for (const list of filterByTypesCached([ "listOrdered", "listUnordered" ])) {
      const ordered = (list.type === "listOrdered");
      const listItemPrefixes =
        list.children.filter((token) => (token.type === "listItemPrefix"));
      const allSingleLine =
        (list.endLine - list.startLine + 1) === listItemPrefixes.length;
      const expectedSpaces = ordered ?
        (allSingleLine ? olSingle : olMulti) :
        (allSingleLine ? ulSingle : ulMulti);
      for (const listItemPrefix of listItemPrefixes) {
        const range = [
          listItemPrefix.startColumn,
          listItemPrefix.endColumn - listItemPrefix.startColumn
        ];
        const listItemPrefixWhitespaces = listItemPrefix.children.filter(
          (token) => (token.type === "listItemPrefixWhitespace")
        );
        for (const listItemPrefixWhitespace of listItemPrefixWhitespaces) {
          const { endColumn, startColumn, startLine } =
            listItemPrefixWhitespace;
          const actualSpaces = endColumn - startColumn;
          const fixInfo = {
            "editColumn": startColumn,
            "deleteCount": actualSpaces,
            "insertText": "".padEnd(expectedSpaces)
          };
          helpersExports.addErrorDetailIf(
            onError,
            startLine,
            expectedSpaces,
            actualSpaces,
            undefined,
            undefined,
            range,
            fixInfo
          );
        }
      }
    }
  }
};

// @ts-check


const codeFencePrefixRe = /^(.*?)[`~]/;

// eslint-disable-next-line jsdoc/valid-types
/** @typedef {readonly string[]} ReadonlyStringArray */

/**
 * Adds an error for the top or bottom of a code fence.
 *
 * @param {import("markdownlint").RuleOnError} onError Error-reporting callback.
 * @param {ReadonlyStringArray} lines Lines of Markdown content.
 * @param {number} lineNumber Line number.
 * @param {boolean} top True iff top fence.
 * @returns {void}
 */
function addError(onError, lines, lineNumber, top) {
  const line = lines[lineNumber - 1];
  const [ , prefix ] = line.match(codeFencePrefixRe) || [];
  const fixInfo = (prefix === undefined) ?
    undefined :
    {
      "lineNumber": lineNumber + (top ? 0 : 1),
      "insertText": `${prefix.replace(/[^>]/g, " ").trim()}\n`
    };
  helpersExports.addErrorContext(
    onError,
    lineNumber,
    line.trim(),
    undefined,
    undefined,
    undefined,
    fixInfo
  );
}

/** @type {import("markdownlint").Rule} */
const md031 = {
  "names": [ "MD031", "blanks-around-fences" ],
  "description": "Fenced code blocks should be surrounded by blank lines",
  "tags": [ "code", "blank_lines" ],
  "parser": "micromark",
  "function": function MD031(params, onError) {
    const listItems = params.config.list_items;
    const includeListItems = (listItems === undefined) ? true : !!listItems;
    const { lines } = params;
    for (const codeBlock of filterByTypesCached([ "codeFenced" ])) {
      if (includeListItems || !(micromarkHelpersExports.getParentOfType(codeBlock, [ "listOrdered", "listUnordered" ]))) {
        if (!helpersExports.isBlankLine(lines[codeBlock.startLine - 2])) {
          addError(onError, lines, codeBlock.startLine, true);
        }
        if (!helpersExports.isBlankLine(lines[codeBlock.endLine]) && !helpersExports.isBlankLine(lines[codeBlock.endLine - 1])) {
          addError(onError, lines, codeBlock.endLine, false);
        }
      }
    }
  }
};

// @ts-check


const isList = (token) => (
  (token.type === "listOrdered") || (token.type === "listUnordered")
);

/** @type {import("markdownlint").Rule} */
const md032 = {
  "names": [ "MD032", "blanks-around-lists" ],
  "description": "Lists should be surrounded by blank lines",
  "tags": [ "bullet", "ul", "ol", "blank_lines" ],
  "parser": "micromark",
  "function": function MD032(params, onError) {
    const { lines, parsers } = params;
    const blockQuotePrefixes = filterByTypesCached([ "blockQuotePrefix", "linePrefix" ]);

    // For every top-level list...
    const topLevelLists = micromarkHelpersExports.filterByPredicate(
      parsers.micromark.tokens,
      isList,
      (token) => (
        (isList(token) || (token.type === "htmlFlow")) ? [] : token.children
      )
    );
    for (const list of topLevelLists) {

      // Look for a blank line above the list
      const firstLineNumber = list.startLine;
      if (!helpersExports.isBlankLine(lines[firstLineNumber - 2])) {
        helpersExports.addErrorContext(
          onError,
          firstLineNumber,
          lines[firstLineNumber - 1].trim(),
          undefined,
          undefined,
          undefined,
          {
            "insertText": micromarkHelpersExports.getBlockQuotePrefixText(blockQuotePrefixes, firstLineNumber)
          }
        );
      }

      // Find the "visual" end of the list
      const flattenedChildren = micromarkHelpersExports.filterByPredicate(
        list.children,
        (token) => !micromarkHelpersExports.nonContentTokens.has(token.type),
        (token) => micromarkHelpersExports.nonContentTokens.has(token.type) ? [] : token.children
      );
      let endLine = list.endLine;
      if (flattenedChildren.length > 0) {
        endLine = flattenedChildren[flattenedChildren.length - 1].endLine;
      }

      // Look for a blank line below the list
      const lastLineNumber = endLine;
      if (!helpersExports.isBlankLine(lines[lastLineNumber])) {
        helpersExports.addErrorContext(
          onError,
          lastLineNumber,
          lines[lastLineNumber - 1].trim(),
          undefined,
          undefined,
          undefined,
          {
            "lineNumber": lastLineNumber + 1,
            "insertText": micromarkHelpersExports.getBlockQuotePrefixText(blockQuotePrefixes, lastLineNumber)
          }
        );
      }
    }
  }
};

// @ts-check


/** @type {import("markdownlint").Rule} */
const md033 = {
  "names": [ "MD033", "no-inline-html" ],
  "description": "Inline HTML",
  "tags": [ "html" ],
  "parser": "micromark",
  "function": function MD033(params, onError) {
    let allowedElements = params.config.allowed_elements;
    allowedElements = Array.isArray(allowedElements) ? allowedElements : [];
    allowedElements = allowedElements.map((element) => element.toLowerCase());
    for (const token of filterByTypesCached([ "htmlText" ], true)) {
      const htmlTagInfo = micromarkHelpersExports.getHtmlTagInfo(token);
      if (
        htmlTagInfo &&
        !htmlTagInfo.close &&
        !allowedElements.includes(htmlTagInfo.name.toLowerCase())
      ) {
        const range = [
          token.startColumn,
          token.text.replace(helpersExports.nextLinesRe, "").length
        ];
        helpersExports.addError(
          onError,
          token.startLine,
          "Element: " + htmlTagInfo.name,
          undefined,
          range
        );
      }
    }
  }
};

// @ts-check


/** @typedef {import("micromark-extension-gfm-autolink-literal")} */

/** @type {import("markdownlint").Rule} */
const md034 = {
  "names": [ "MD034", "no-bare-urls" ],
  "description": "Bare URL used",
  "tags": [ "links", "url" ],
  "parser": "micromark",
  "function": function MD034(params, onError) {
    const literalAutolinks = (tokens) => (
      micromarkHelpersExports.filterByPredicate(
        tokens,
        (token) => {
          if ((token.type === "literalAutolink") && !micromarkHelpersExports.inHtmlFlow(token)) {
            // Detect and ignore https://github.com/micromark/micromark/issues/164
            const siblings = token.parent?.children;
            const index = siblings?.indexOf(token);
            // @ts-ignore
            const prev = siblings?.at(index - 1);
            // @ts-ignore
            const next = siblings?.at(index + 1);
            return !(
              prev &&
              next &&
              (prev.type === "data") &&
              (next.type === "data") &&
              prev.text.endsWith("<") &&
              next.text.startsWith(">")
            );
          }
          return false;
        },
        (token) => {
          // Ignore content of inline HTML tags
          const { children } = token;
          const result = [];
          for (let i = 0; i < children.length; i++) {
            const current = children[i];
            const openTagInfo = micromarkHelpersExports.getHtmlTagInfo(current);
            if (openTagInfo && !openTagInfo.close) {
              let count = 1;
              for (let j = i + 1; j < children.length; j++) {
                const candidate = children[j];
                const closeTagInfo = micromarkHelpersExports.getHtmlTagInfo(candidate);
                if (closeTagInfo && (openTagInfo.name === closeTagInfo.name)) {
                  if (closeTagInfo.close) {
                    count--;
                    if (count === 0) {
                      i = j;
                      break;
                    }
                  } else {
                    count++;
                  }
                }
              }
            } else {
              result.push(current);
            }
          }
          return result;
        }
      )
    );
    for (const token of literalAutolinks(params.parsers.micromark.tokens)) {
      const range = [
        token.startColumn,
        token.endColumn - token.startColumn
      ];
      const fixInfo = {
        "editColumn": range[0],
        "deleteCount": range[1],
        "insertText": `<${token.text}>`
      };
      helpersExports.addErrorContext(
        onError,
        token.startLine,
        token.text,
        undefined,
        undefined,
        range,
        fixInfo
      );
    }
  }
};

// @ts-check


/** @type {import("markdownlint").Rule} */
const md035 = {
  "names": [ "MD035", "hr-style" ],
  "description": "Horizontal rule style",
  "tags": [ "hr" ],
  "parser": "micromark",
  "function": function MD035(params, onError) {
    let style = String(params.config.style || "consistent").trim();
    const thematicBreaks = filterByTypesCached([ "thematicBreak" ]);
    for (const token of thematicBreaks) {
      const { startLine, text } = token;
      if (style === "consistent") {
        style = text;
      }
      helpersExports.addErrorDetailIf(onError, startLine, style, text);
    }
  }
};

// @ts-check


/** @typedef {import("markdownlint").MicromarkTokenType} TokenType */
/** @type {TokenType[][]} */
const emphasisTypes = [
  [ "emphasis", "emphasisText" ],
  [ "strong", "strongText" ]
];

const isParagraphChildMeaningful = (token) => !(
  (token.type === "htmlText") ||
  ((token.type === "data") && (token.text.trim().length === 0))
);

/** @type {import("markdownlint").Rule} */
const md036 = {
  "names": [ "MD036", "no-emphasis-as-heading" ],
  "description": "Emphasis used instead of a heading",
  "tags": [ "headings", "emphasis" ],
  "parser": "micromark",
  "function": function MD036(params, onError) {
    let punctuation = params.config.punctuation;
    punctuation = String((punctuation === undefined) ? helpersExports.allPunctuation : punctuation);
    const punctuationRe = new RegExp("[" + punctuation + "]$");
    const paragraphTokens =
      filterByTypesCached([ "paragraph" ], true)
        .filter((token) =>
          (token.parent?.type === "content") &&
          (
            !token.parent?.parent ||
            ((token.parent?.parent?.type === "htmlFlow") && !token.parent?.parent?.parent)
          ) &&
          (token.children.filter(isParagraphChildMeaningful).length === 1)
        );
    for (const emphasisType of emphasisTypes) {
      const textTokens = micromarkHelpersExports.getDescendantsByType(paragraphTokens, emphasisType);
      for (const textToken of textTokens) {
        if (
          (textToken.children.length === 1) &&
          (textToken.children[0].type === "data") &&
          !punctuationRe.test(textToken.text)
        ) {
          helpersExports.addErrorContext(onError, textToken.startLine, textToken.text);
        }
      }
    }
  }
};

// @ts-check


/** @type {import("markdownlint").Rule} */
const md037 = {
  "names": [ "MD037", "no-space-in-emphasis" ],
  "description": "Spaces inside emphasis markers",
  "tags": [ "whitespace", "emphasis" ],
  "parser": "micromark",
  "function": function MD037(params, onError) {

    // Initialize variables
    const { lines, parsers } = params;
    const emphasisTokensByMarker = new Map();
    for (const marker of [ "_", "__", "___", "*", "**", "***" ]) {
      emphasisTokensByMarker.set(marker, []);
    }
    const tokens = micromarkHelpersExports.filterByPredicate(
      parsers.micromark.tokens,
      (token) => token.children.some((child) => child.type === "data")
    );
    for (const token of tokens) {

      // Build lists of bare tokens for each emphasis marker type
      for (const emphasisTokens of emphasisTokensByMarker.values()) {
        emphasisTokens.length = 0;
      }
      for (const child of token.children) {
        const { text, type } = child;
        if ((type === "data") && (text.length <= 3)) {
          const emphasisTokens = emphasisTokensByMarker.get(text);
          if (emphasisTokens && !micromarkHelpersExports.inHtmlFlow(child)) {
            emphasisTokens.push(child);
          }
        }
      }

      // Process bare tokens for each emphasis marker type
      for (const entry of emphasisTokensByMarker.entries()) {
        const [ marker, emphasisTokens ] = entry;
        for (let i = 0; i + 1 < emphasisTokens.length; i += 2) {

          // Process start token of start/end pair
          const startToken = emphasisTokens[i];
          const startLine = lines[startToken.startLine - 1];
          const startSlice = startLine.slice(startToken.endColumn - 1);
          const startMatch = startSlice.match(/^\s+\S/);
          if (startMatch) {
            const [ startSpaceCharacter ] = startMatch;
            const startContext = `${marker}${startSpaceCharacter}`;
            helpersExports.addError(
              onError,
              startToken.startLine,
              undefined,
              startContext,
              [ startToken.startColumn, startContext.length ],
              {
                "editColumn": startToken.endColumn,
                "deleteCount": startSpaceCharacter.length - 1
              }
            );
          }

          // Process end token of start/end pair
          const endToken = emphasisTokens[i + 1];
          const endLine = lines[endToken.startLine - 1];
          const endSlice = endLine.slice(0, endToken.startColumn - 1);
          const endMatch = endSlice.match(/\S\s+$/);
          if (endMatch) {
            const [ endSpaceCharacter ] = endMatch;
            const endContext = `${endSpaceCharacter}${marker}`;
            helpersExports.addError(
              onError,
              endToken.startLine,
              undefined,
              endContext,
              [ endToken.endColumn - endContext.length, endContext.length ],
              {
                "editColumn":
                  endToken.startColumn - (endSpaceCharacter.length - 1),
                "deleteCount": endSpaceCharacter.length - 1
              }
            );
          }
        }
      }
    }
  }
};

// @ts-check


/** @type {import("markdownlint").Rule} */
const md038 = {
  "names": [ "MD038", "no-space-in-code" ],
  "description": "Spaces inside code span elements",
  "tags": [ "whitespace", "code" ],
  "parser": "micromark",
  "function": function MD038(params, onError) {
    const codeTexts = filterByTypesCached([ "codeText" ]);
    for (const codeText of codeTexts) {
      const datas = micromarkHelpersExports.getDescendantsByType(codeText, [ "codeTextData" ]);
      if (datas.length > 0) {
        const paddings = micromarkHelpersExports.getDescendantsByType(codeText, [ "codeTextPadding" ]);
        // Check for extra space at start of code
        const startPadding = paddings[0];
        const startData = datas[0];
        const startMatch = /^(\s+)(\S)/.exec(startData.text) || [ null, "", "" ];
        const startBacktick = (startMatch[2] === "`");
        const startCount = startMatch[1].length - ((startBacktick && !startPadding) ? 1 : 0);
        const startSpaces = startCount > 0;
        // Check for extra space at end of code
        const endPadding = paddings[paddings.length - 1];
        const endData = datas[datas.length - 1];
        const endMatch = /(\S)(\s+)$/.exec(endData.text) || [ null, "", "" ];
        const endBacktick = (endMatch[1] === "`");
        const endCount = endMatch[2].length - ((endBacktick && !endPadding) ? 1 : 0);
        const endSpaces = endCount > 0;
        // Check if safe to remove 1-space padding
        const removePadding = startSpaces && endSpaces && startPadding && endPadding && !startBacktick && !endBacktick;
        const context = codeText.text;
        // If extra space at start, report violation
        if (startSpaces) {
          const startColumn = (removePadding ? startPadding : startData).startColumn;
          const length = startCount + (removePadding ? startPadding.text.length : 0);
          helpersExports.addErrorContext(
            onError,
            startData.startLine,
            context,
            true,
            false,
            [ startColumn, length ],
            {
              "editColumn": startColumn,
              "deleteCount": length
            }
          );
        }
        // If extra space at end, report violation
        if (endSpaces) {
          const endColumn = (removePadding ? endPadding : endData).endColumn;
          const length = endCount + (removePadding ? endPadding.text.length : 0);
          helpersExports.addErrorContext(
            onError,
            endData.endLine,
            context,
            false,
            true,
            [ endColumn - length, length ],
            {
              "editColumn": endColumn - length,
              "deleteCount": length
            }
          );
        }
      }
    }
  }
};

// @ts-check


/**
 * Adds an error for a label space issue.
 *
 * @param {import("markdownlint").RuleOnError} onError Error-reporting callback.
 * @param {import("markdownlint").MicromarkToken} label Label token.
 * @param {import("markdownlint").MicromarkToken} labelText LabelText token.
 * @param {boolean} isStart True iff error is at the start of the link.
 */
function addLabelSpaceError(onError, label, labelText, isStart) {
  const match = labelText.text.match(isStart ? /^[^\S\r\n]+/ : /[^\S\r\n]+$/);
  const range = match ?
    [
      (isStart ? (labelText.startColumn) : (labelText.endColumn - match[0].length)),
      match[0].length
    ] :
    undefined;
  helpersExports.addErrorContext(
    onError,
    isStart ? (labelText.startLine + (match ? 0 : 1)) : (labelText.endLine - (match ? 0 : 1)),
    label.text.replace(/\s+/g, " "),
    isStart,
    !isStart,
    range,
    range ?
      {
        "editColumn": range[0],
        "deleteCount": range[1]
      } :
      undefined
  );
}

/** @type {import("markdownlint").Rule} */
const md039 = {
  "names": [ "MD039", "no-space-in-links" ],
  "description": "Spaces inside link text",
  "tags": [ "whitespace", "links" ],
  "parser": "micromark",
  "function": function MD039(params, onError) {
    const labels = filterByTypesCached([ "label" ])
      .filter((label) => label.parent?.type === "link");
    for (const label of labels) {
      const labelTexts = label.children.filter((child) => child.type === "labelText");
      for (const labelText of labelTexts) {
        if (labelText.text.trimStart().length !== labelText.text.length) {
          addLabelSpaceError(onError, label, labelText, true);
        }
        if (labelText.text.trimEnd().length !== labelText.text.length) {
          addLabelSpaceError(onError, label, labelText, false);
        }
      }
    }
  }
};

// @ts-check


/** @type {import("markdownlint").Rule} */
const md040 = {
  "names": [ "MD040", "fenced-code-language" ],
  "description": "Fenced code blocks should have a language specified",
  "tags": [ "code", "language" ],
  "parser": "micromark",
  "function": function MD040(params, onError) {
    let allowed = params.config.allowed_languages;
    allowed = Array.isArray(allowed) ? allowed : [];
    const languageOnly = !!params.config.language_only;
    const fencedCodes = filterByTypesCached([ "codeFenced" ]);
    for (const fencedCode of fencedCodes) {
      const openingFence = micromarkHelpersExports.getDescendantsByType(fencedCode, [ "codeFencedFence" ])[0];
      const { startLine, text } = openingFence;
      const info = micromarkHelpersExports.getDescendantsByType(openingFence, [ "codeFencedFenceInfo" ])[0]?.text;
      if (!info) {
        helpersExports.addErrorContext(onError, startLine, text);
      } else if ((allowed.length > 0) && !allowed.includes(info)) {
        helpersExports.addError(onError, startLine, `"${info}" is not allowed`);
      }
      if (languageOnly && micromarkHelpersExports.getDescendantsByType(openingFence, [ "codeFencedFenceMeta" ]).length > 0) {
        helpersExports.addError(onError, startLine, `Info string contains more than language: "${text}"`);
      }
    }
  }
};

// @ts-check


const headingTagNameRe = /^h[1-6]$/;

/**
 * Gets the HTML tag name of an htmlFlow token.
 *
 * @param {import("markdownlint").MicromarkToken} token Micromark Token.
 * @returns {string | null} Tag name.
 */
function getHtmlFlowTagName(token) {
  const { children, type } = token;
  if (type === "htmlFlow") {
    const htmlTexts = micromarkHelpersExports.filterByTypes(children, [ "htmlText" ], true);
    const tagInfo = (htmlTexts.length > 0) && micromarkHelpersExports.getHtmlTagInfo(htmlTexts[0]);
    if (tagInfo) {
      return tagInfo.name.toLowerCase();
    }
  }
  return null;
}

/** @type {import("markdownlint").Rule} */
const md041 = {
  "names": [ "MD041", "first-line-heading", "first-line-h1" ],
  "description": "First line in a file should be a top-level heading",
  "tags": [ "headings" ],
  "parser": "micromark",
  "function": function MD041(params, onError) {
    const allowPreamble = !!params.config.allow_preamble;
    const level = Number(params.config.level || 1);
    const { tokens } = params.parsers.micromark;
    if (
      !helpersExports.frontMatterHasTitle(
        params.frontMatterLines,
        params.config.front_matter_title
      )
    ) {
      let errorLineNumber = 0;
      for (const token of tokens) {
        const { startLine, type } = token;
        if (!micromarkHelpersExports.nonContentTokens.has(type) && !micromarkHelpersExports.isHtmlFlowComment(token)) {
          let tagName = null;
          if ((type === "atxHeading") || (type === "setextHeading")) {
            // First heading needs to have the expected level
            if (micromarkHelpersExports.getHeadingLevel(token) !== level) {
              errorLineNumber = startLine;
            }
            break;
          } else if ((tagName = getHtmlFlowTagName(token)) && headingTagNameRe.test(tagName)) {
            // First HTML element needs to have an <h?> with the expected level
            if (tagName !== `h${level}`) {
              errorLineNumber = startLine;
            }
            break;
          } else if (!allowPreamble) {
            // First non-content needs to be a heading with the expected level
            errorLineNumber = startLine;
            break;
          }
        }
      }
      if (errorLineNumber > 0) {
        helpersExports.addErrorContext(onError, errorLineNumber, params.lines[errorLineNumber - 1]);
      }
    }
  }
};

// @ts-check


/** @type {import("markdownlint").Rule} */
const md042 = {
  "names": [ "MD042", "no-empty-links" ],
  "description": "No empty links",
  "tags": [ "links" ],
  "parser": "micromark",
  "function": function MD042(params, onError) {
    const { definitions } = getReferenceLinkImageData();
    const isReferenceDefinitionHash = (token) => {
      const definition = definitions.get(token.text.trim());
      return (definition && (definition[1] === "#"));
    };
    const links = filterByTypesCached([ "link" ]);
    for (const link of links) {
      const labelText = micromarkHelpersExports.getDescendantsByType(link, [ "label", "labelText" ]);
      const reference = micromarkHelpersExports.getDescendantsByType(link, [ "reference" ]);
      const resource = micromarkHelpersExports.getDescendantsByType(link, [ "resource" ]);
      const referenceString = micromarkHelpersExports.getDescendantsByType(reference, [ "referenceString" ]);
      const resourceDestinationString = micromarkHelpersExports.getDescendantsByType(resource, [ "resourceDestination", [ "resourceDestinationLiteral", "resourceDestinationRaw" ], "resourceDestinationString" ]);
      const hasLabelText = labelText.length > 0;
      const hasReference = reference.length > 0;
      const hasResource = resource.length > 0;
      const hasReferenceString = referenceString.length > 0;
      const hasResourceDestinationString = resourceDestinationString.length > 0;
      let error = false;
      if (
        hasLabelText &&
        ((!hasReference && !hasResource) || (hasReference && !hasReferenceString))
      ) {
        error = isReferenceDefinitionHash(labelText[0]);
      } else if (hasReferenceString && !hasResourceDestinationString) {
        error = isReferenceDefinitionHash(referenceString[0]);
      } else if (!hasReferenceString && hasResourceDestinationString) {
        error = (resourceDestinationString[0].text.trim() === "#");
      } else if (!hasReferenceString && !hasResourceDestinationString) {
        error = true;
      }
      if (error) {
        helpersExports.addErrorContext(
          onError,
          link.startLine,
          link.text,
          undefined,
          undefined,
          [ link.startColumn, link.endColumn - link.startColumn ]
        );
      }
    }
  }
};

// @ts-check


/** @type {import("markdownlint").Rule} */
const md043 = {
  "names": [ "MD043", "required-headings" ],
  "description": "Required heading structure",
  "tags": [ "headings" ],
  "parser": "micromark",
  "function": function MD043(params, onError) {
    const requiredHeadings = params.config.headings;
    if (!Array.isArray(requiredHeadings)) {
      // Nothing to check; avoid doing any work
      return;
    }
    const matchCase = params.config.match_case || false;
    let i = 0;
    let matchAny = false;
    let hasError = false;
    let anyHeadings = false;
    const getExpected = () => requiredHeadings[i++] || "[None]";
    const handleCase = (str) => (matchCase ? str : str.toLowerCase());
    for (const heading of filterByTypesCached([ "atxHeading", "setextHeading" ])) {
      if (!hasError) {
        const headingText = micromarkHelpersExports.getHeadingText(heading);
        const headingLevel = micromarkHelpersExports.getHeadingLevel(heading);
        anyHeadings = true;
        const actual = `${"".padEnd(headingLevel, "#")} ${headingText}`;
        const expected = getExpected();
        if (expected === "*") {
          const nextExpected = getExpected();
          if (handleCase(nextExpected) !== handleCase(actual)) {
            matchAny = true;
            i--;
          }
        } else if (expected === "+") {
          matchAny = true;
        } else if (expected === "?") ; else if (handleCase(expected) === handleCase(actual)) {
          matchAny = false;
        } else if (matchAny) {
          i--;
        } else {
          helpersExports.addErrorDetailIf(
            onError,
            heading.startLine,
            expected,
            actual
          );
          hasError = true;
        }
      }
    }
    const extraHeadings = requiredHeadings.length - i;
    if (
      !hasError &&
      ((extraHeadings > 1) ||
        ((extraHeadings === 1) && (requiredHeadings[i] !== "*"))) &&
      (anyHeadings || !requiredHeadings.every((heading) => heading === "*"))
    ) {
      helpersExports.addErrorContext(
        onError,
        params.lines.length,
        requiredHeadings[i]
      );
    }
  }
};

/**
 * @import {Code, Effects, State, TokenType} from 'micromark-util-types'
 */

/**
 * @param {Effects} effects
 * @param {State} ok
 * @param {State} nok
 * @param {TokenType} attributesType
 * @param {TokenType} attributesMarkerType
 * @param {TokenType} attributeType
 * @param {TokenType} attributeIdType
 * @param {TokenType} attributeClassType
 * @param {TokenType} attributeNameType
 * @param {TokenType} attributeInitializerType
 * @param {TokenType} attributeValueLiteralType
 * @param {TokenType} attributeValueType
 * @param {TokenType} attributeValueMarker
 * @param {TokenType} attributeValueData
 * @param {boolean | undefined} [disallowEol=false]
 */
function factoryAttributes(effects, ok, nok, attributesType, attributesMarkerType, attributeType, attributeIdType, attributeClassType, attributeNameType, attributeInitializerType, attributeValueLiteralType, attributeValueType, attributeValueMarker, attributeValueData, disallowEol) {
  /** @type {TokenType} */
  let type;
  /** @type {Code | undefined} */
  let marker;
  return start;

  /** @type {State} */
  function start(code) {
    effects.enter(attributesType);
    effects.enter(attributesMarkerType);
    effects.consume(code);
    effects.exit(attributesMarkerType);
    return between;
  }

  /** @type {State} */
  function between(code) {
    if (code === 35) {
      type = attributeIdType;
      return shortcutStart(code);
    }
    if (code === 46) {
      type = attributeClassType;
      return shortcutStart(code);
    }
    if (disallowEol && markdownSpace(code)) {
      return factorySpace(effects, between, "whitespace")(code);
    }
    if (!disallowEol && markdownLineEndingOrSpace(code)) {
      return factoryWhitespace(effects, between)(code);
    }
    if (code === null || markdownLineEnding(code) || unicodeWhitespace(code) || unicodePunctuation(code) && code !== 45 && code !== 95) {
      return end(code);
    }
    effects.enter(attributeType);
    effects.enter(attributeNameType);
    effects.consume(code);
    return name;
  }

  /** @type {State} */
  function shortcutStart(code) {
    // Assume it’s registered.
    const markerType = /** @type {TokenType} */type + 'Marker';
    effects.enter(attributeType);
    effects.enter(type);
    effects.enter(markerType);
    effects.consume(code);
    effects.exit(markerType);
    return shortcutStartAfter;
  }

  /** @type {State} */
  function shortcutStartAfter(code) {
    if (code === null || code === 34 || code === 35 || code === 39 || code === 46 || code === 60 || code === 61 || code === 62 || code === 96 || code === 125 || markdownLineEndingOrSpace(code)) {
      return nok(code);
    }

    // Assume it’s registered.
    const valueType = /** @type {TokenType} */type + 'Value';
    effects.enter(valueType);
    effects.consume(code);
    return shortcut;
  }

  /** @type {State} */
  function shortcut(code) {
    if (code === null || code === 34 || code === 39 || code === 60 || code === 61 || code === 62 || code === 96) {
      return nok(code);
    }
    if (code === 35 || code === 46 || code === 125 || markdownLineEndingOrSpace(code)) {
      // Assume it’s registered.
      const valueType = /** @type {TokenType} */type + 'Value';
      effects.exit(valueType);
      effects.exit(type);
      effects.exit(attributeType);
      return between(code);
    }
    effects.consume(code);
    return shortcut;
  }

  /** @type {State} */
  function name(code) {
    if (code === null || markdownLineEnding(code) || unicodeWhitespace(code) || unicodePunctuation(code) && code !== 45 && code !== 46 && code !== 58 && code !== 95) {
      effects.exit(attributeNameType);
      if (disallowEol && markdownSpace(code)) {
        return factorySpace(effects, nameAfter, "whitespace")(code);
      }
      if (!disallowEol && markdownLineEndingOrSpace(code)) {
        return factoryWhitespace(effects, nameAfter)(code);
      }
      return nameAfter(code);
    }
    effects.consume(code);
    return name;
  }

  /** @type {State} */
  function nameAfter(code) {
    if (code === 61) {
      effects.enter(attributeInitializerType);
      effects.consume(code);
      effects.exit(attributeInitializerType);
      return valueBefore;
    }

    // Attribute w/o value.
    effects.exit(attributeType);
    return between(code);
  }

  /** @type {State} */
  function valueBefore(code) {
    if (code === null || code === 60 || code === 61 || code === 62 || code === 96 || code === 125 || disallowEol && markdownLineEnding(code)) {
      return nok(code);
    }
    if (code === 34 || code === 39) {
      effects.enter(attributeValueLiteralType);
      effects.enter(attributeValueMarker);
      effects.consume(code);
      effects.exit(attributeValueMarker);
      marker = code;
      return valueQuotedStart;
    }
    if (disallowEol && markdownSpace(code)) {
      return factorySpace(effects, valueBefore, "whitespace")(code);
    }
    if (!disallowEol && markdownLineEndingOrSpace(code)) {
      return factoryWhitespace(effects, valueBefore)(code);
    }
    effects.enter(attributeValueType);
    effects.enter(attributeValueData);
    effects.consume(code);
    marker = undefined;
    return valueUnquoted;
  }

  /** @type {State} */
  function valueUnquoted(code) {
    if (code === null || code === 34 || code === 39 || code === 60 || code === 61 || code === 62 || code === 96) {
      return nok(code);
    }
    if (code === 125 || markdownLineEndingOrSpace(code)) {
      effects.exit(attributeValueData);
      effects.exit(attributeValueType);
      effects.exit(attributeType);
      return between(code);
    }
    effects.consume(code);
    return valueUnquoted;
  }

  /** @type {State} */
  function valueQuotedStart(code) {
    if (code === marker) {
      effects.enter(attributeValueMarker);
      effects.consume(code);
      effects.exit(attributeValueMarker);
      effects.exit(attributeValueLiteralType);
      effects.exit(attributeType);
      return valueQuotedAfter;
    }
    effects.enter(attributeValueType);
    return valueQuotedBetween(code);
  }

  /** @type {State} */
  function valueQuotedBetween(code) {
    if (code === marker) {
      effects.exit(attributeValueType);
      return valueQuotedStart(code);
    }
    if (code === null) {
      return nok(code);
    }

    // Note: blank lines can’t exist in content.
    if (markdownLineEnding(code)) {
      return disallowEol ? nok(code) : factoryWhitespace(effects, valueQuotedBetween)(code);
    }
    effects.enter(attributeValueData);
    effects.consume(code);
    return valueQuoted;
  }

  /** @type {State} */
  function valueQuoted(code) {
    if (code === marker || code === null || markdownLineEnding(code)) {
      effects.exit(attributeValueData);
      return valueQuotedBetween(code);
    }
    effects.consume(code);
    return valueQuoted;
  }

  /** @type {State} */
  function valueQuotedAfter(code) {
    return code === 125 || markdownLineEndingOrSpace(code) ? between(code) : end(code);
  }

  /** @type {State} */
  function end(code) {
    if (code === 125) {
      effects.enter(attributesMarkerType);
      effects.consume(code);
      effects.exit(attributesMarkerType);
      effects.exit(attributesType);
      return ok;
    }
    return nok(code);
  }
}

/**
 * @import {Code, Effects, State, Token, TokenType} from 'micromark-util-types'
 */

// This is a fork of:
// <https://github.com/micromark/micromark/tree/main/packages/micromark-factory-label>
// to allow empty labels, balanced brackets (such as for nested directives),
// text instead of strings, and optionally disallows EOLs.

/**
 * @param {Effects} effects
 * @param {State} ok
 * @param {State} nok
 * @param {TokenType} type
 * @param {TokenType} markerType
 * @param {TokenType} stringType
 * @param {boolean | undefined} [disallowEol=false]
 */
function factoryLabel(effects, ok, nok, type, markerType, stringType, disallowEol) {
  let size = 0;
  let balance = 0;
  /** @type {Token | undefined} */
  let previous;
  return start;

  /** @type {State} */
  function start(code) {
    effects.enter(type);
    effects.enter(markerType);
    effects.consume(code);
    effects.exit(markerType);
    return afterStart;
  }

  /** @type {State} */
  function afterStart(code) {
    if (code === 93) {
      effects.enter(markerType);
      effects.consume(code);
      effects.exit(markerType);
      effects.exit(type);
      return ok;
    }
    effects.enter(stringType);
    return lineStart(code);
  }

  /** @type {State} */
  function lineStart(code) {
    if (code === 93 && !balance) {
      return atClosingBrace(code);
    }
    const token = effects.enter("chunkText", {
      _contentTypeTextTrailing: true,
      contentType: "text",
      previous
    });
    if (previous) previous.next = token;
    previous = token;
    return data(code);
  }

  /** @type {State} */
  function data(code) {
    if (code === null || size > 999) {
      return nok(code);
    }
    if (code === 91 && ++balance > 32) {
      return nok(code);
    }
    if (code === 93 && !balance--) {
      effects.exit("chunkText");
      return atClosingBrace(code);
    }
    if (markdownLineEnding(code)) {
      if (disallowEol) {
        return nok(code);
      }
      effects.consume(code);
      effects.exit("chunkText");
      return lineStart;
    }
    effects.consume(code);
    return code === 92 ? dataEscape : data;
  }

  /** @type {State} */
  function dataEscape(code) {
    if (code === 91 || code === 92 || code === 93) {
      effects.consume(code);
      size++;
      return data;
    }
    return data(code);
  }

  /** @type {State} */
  function atClosingBrace(code) {
    effects.exit(stringType);
    effects.enter(markerType);
    effects.consume(code);
    effects.exit(markerType);
    effects.exit(type);
    return ok;
  }
}

/**
 * @import {Code, Effects, State, TokenizeContext, TokenType} from 'micromark-util-types'
 */

/**
 * @this {TokenizeContext}
 * @param {Effects} effects
 * @param {State} ok
 * @param {State} nok
 * @param {TokenType} type
 */
function factoryName(effects, ok, nok, type) {
  const self = this;
  return start;

  /** @type {State} */
  function start(code) {
    if (code === null || markdownLineEnding(code) || unicodePunctuation(code) || unicodeWhitespace(code)) {
      return nok(code);
    }
    effects.enter(type);
    effects.consume(code);
    return name;
  }

  /** @type {State} */
  function name(code) {
    if (code === null || markdownLineEnding(code) || unicodeWhitespace(code) || unicodePunctuation(code) && code !== 45 && code !== 95) {
      effects.exit(type);
      return self.previous === 45 || self.previous === 95 ? nok(code) : ok(code);
    }
    effects.consume(code);
    return name;
  }
}

/**
 * @import {Construct, State, Token, TokenizeContext, Tokenizer} from 'micromark-util-types'
 */


/** @type {Construct} */
const directiveContainer = {
  tokenize: tokenizeDirectiveContainer,
  concrete: true
};
const label$2 = {
  tokenize: tokenizeLabel$2,
  partial: true
};
const attributes$2 = {
  tokenize: tokenizeAttributes$2,
  partial: true
};
const nonLazyLine = {
  tokenize: tokenizeNonLazyLine,
  partial: true
};

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeDirectiveContainer(effects, ok, nok) {
  const self = this;
  const tail = self.events[self.events.length - 1];
  const initialSize = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
  let sizeOpen = 0;
  /** @type {Token} */
  let previous;
  return start;

  /** @type {State} */
  function start(code) {
    effects.enter('directiveContainer');
    effects.enter('directiveContainerFence');
    effects.enter('directiveContainerSequence');
    return sequenceOpen(code);
  }

  /** @type {State} */
  function sequenceOpen(code) {
    if (code === 58) {
      effects.consume(code);
      sizeOpen++;
      return sequenceOpen;
    }
    if (sizeOpen < 3) {
      return nok(code);
    }
    effects.exit('directiveContainerSequence');
    return factoryName.call(self, effects, afterName, nok, 'directiveContainerName')(code);
  }

  /** @type {State} */
  function afterName(code) {
    return code === 91 ? effects.attempt(label$2, afterLabel, afterLabel)(code) : afterLabel(code);
  }

  /** @type {State} */
  function afterLabel(code) {
    return code === 123 ? effects.attempt(attributes$2, afterAttributes, afterAttributes)(code) : afterAttributes(code);
  }

  /** @type {State} */
  function afterAttributes(code) {
    return factorySpace(effects, openAfter, "whitespace")(code);
  }

  /** @type {State} */
  function openAfter(code) {
    effects.exit('directiveContainerFence');
    if (code === null) {
      return after(code);
    }
    if (markdownLineEnding(code)) {
      if (self.interrupt) {
        return ok(code);
      }
      return effects.attempt(nonLazyLine, contentStart, after)(code);
    }
    return nok(code);
  }

  /** @type {State} */
  function contentStart(code) {
    if (code === null) {
      return after(code);
    }
    if (markdownLineEnding(code)) {
      return effects.check(nonLazyLine, emptyContentNonLazyLineAfter, after)(code);
    }
    effects.enter('directiveContainerContent');
    return lineStart(code);
  }

  /** @type {State} */
  function lineStart(code) {
    return effects.attempt({
      tokenize: tokenizeClosingFence,
      partial: true
    }, afterContent, initialSize ? factorySpace(effects, chunkStart, "linePrefix", initialSize + 1) : chunkStart)(code);
  }

  /** @type {State} */
  function chunkStart(code) {
    if (code === null) {
      return afterContent(code);
    }
    if (markdownLineEnding(code)) {
      return effects.check(nonLazyLine, chunkNonLazyStart, afterContent)(code);
    }
    return chunkNonLazyStart(code);
  }

  /** @type {State} */
  function contentContinue(code) {
    if (code === null) {
      const t = effects.exit("chunkDocument");
      self.parser.lazy[t.start.line] = false;
      return afterContent(code);
    }
    if (markdownLineEnding(code)) {
      return effects.check(nonLazyLine, nonLazyLineAfter, lineAfter)(code);
    }
    effects.consume(code);
    return contentContinue;
  }

  /** @type {State} */
  function chunkNonLazyStart(code) {
    const token = effects.enter("chunkDocument", {
      contentType: "document",
      previous
    });
    if (previous) previous.next = token;
    previous = token;
    return contentContinue(code);
  }

  /** @type {State} */
  function emptyContentNonLazyLineAfter(code) {
    effects.enter('directiveContainerContent');
    return lineStart(code);
  }

  /** @type {State} */
  function nonLazyLineAfter(code) {
    effects.consume(code);
    const t = effects.exit("chunkDocument");
    self.parser.lazy[t.start.line] = false;
    return lineStart;
  }

  /** @type {State} */
  function lineAfter(code) {
    const t = effects.exit("chunkDocument");
    self.parser.lazy[t.start.line] = false;
    return afterContent(code);
  }

  /** @type {State} */
  function afterContent(code) {
    effects.exit('directiveContainerContent');
    return after(code);
  }

  /** @type {State} */
  function after(code) {
    effects.exit('directiveContainer');
    return ok(code);
  }

  /**
   * @this {TokenizeContext}
   * @type {Tokenizer}
   */
  function tokenizeClosingFence(effects, ok, nok) {
    let size = 0;
    return factorySpace(effects, closingPrefixAfter, "linePrefix", self.parser.constructs.disable.null.includes('codeIndented') ? undefined : 4);

    /** @type {State} */
    function closingPrefixAfter(code) {
      effects.enter('directiveContainerFence');
      effects.enter('directiveContainerSequence');
      return closingSequence(code);
    }

    /** @type {State} */
    function closingSequence(code) {
      if (code === 58) {
        effects.consume(code);
        size++;
        return closingSequence;
      }
      if (size < sizeOpen) return nok(code);
      effects.exit('directiveContainerSequence');
      return factorySpace(effects, closingSequenceEnd, "whitespace")(code);
    }

    /** @type {State} */
    function closingSequenceEnd(code) {
      if (code === null || markdownLineEnding(code)) {
        effects.exit('directiveContainerFence');
        return ok(code);
      }
      return nok(code);
    }
  }
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeLabel$2(effects, ok, nok) {
  // Always a `[`
  return factoryLabel(effects, ok, nok, 'directiveContainerLabel', 'directiveContainerLabelMarker', 'directiveContainerLabelString', true);
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeAttributes$2(effects, ok, nok) {
  // Always a `{`
  return factoryAttributes(effects, ok, nok, 'directiveContainerAttributes', 'directiveContainerAttributesMarker', 'directiveContainerAttribute', 'directiveContainerAttributeId', 'directiveContainerAttributeClass', 'directiveContainerAttributeName', 'directiveContainerAttributeInitializerMarker', 'directiveContainerAttributeValueLiteral', 'directiveContainerAttributeValue', 'directiveContainerAttributeValueMarker', 'directiveContainerAttributeValueData', true);
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeNonLazyLine(effects, ok, nok) {
  const self = this;
  return start;

  /** @type {State} */
  function start(code) {
    effects.enter("lineEnding");
    effects.consume(code);
    effects.exit("lineEnding");
    return lineStart;
  }

  /** @type {State} */
  function lineStart(code) {
    return self.parser.lazy[self.now().line] ? nok(code) : ok(code);
  }
}

/**
 * @import {Construct, State, TokenizeContext, Tokenizer} from 'micromark-util-types'
 */


/** @type {Construct} */
const directiveLeaf = {
  tokenize: tokenizeDirectiveLeaf
};
const label$1 = {
  tokenize: tokenizeLabel$1,
  partial: true
};
const attributes$1 = {
  tokenize: tokenizeAttributes$1,
  partial: true
};

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeDirectiveLeaf(effects, ok, nok) {
  const self = this;
  return start;

  /** @type {State} */
  function start(code) {
    effects.enter('directiveLeaf');
    effects.enter('directiveLeafSequence');
    effects.consume(code);
    return inStart;
  }

  /** @type {State} */
  function inStart(code) {
    if (code === 58) {
      effects.consume(code);
      effects.exit('directiveLeafSequence');
      return factoryName.call(self, effects, afterName, nok, 'directiveLeafName');
    }
    return nok(code);
  }

  /** @type {State} */
  function afterName(code) {
    return code === 91 ? effects.attempt(label$1, afterLabel, afterLabel)(code) : afterLabel(code);
  }

  /** @type {State} */
  function afterLabel(code) {
    return code === 123 ? effects.attempt(attributes$1, afterAttributes, afterAttributes)(code) : afterAttributes(code);
  }

  /** @type {State} */
  function afterAttributes(code) {
    return factorySpace(effects, end, "whitespace")(code);
  }

  /** @type {State} */
  function end(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit('directiveLeaf');
      return ok(code);
    }
    return nok(code);
  }
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeLabel$1(effects, ok, nok) {
  // Always a `[`
  return factoryLabel(effects, ok, nok, 'directiveLeafLabel', 'directiveLeafLabelMarker', 'directiveLeafLabelString', true);
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeAttributes$1(effects, ok, nok) {
  // Always a `{`
  return factoryAttributes(effects, ok, nok, 'directiveLeafAttributes', 'directiveLeafAttributesMarker', 'directiveLeafAttribute', 'directiveLeafAttributeId', 'directiveLeafAttributeClass', 'directiveLeafAttributeName', 'directiveLeafAttributeInitializerMarker', 'directiveLeafAttributeValueLiteral', 'directiveLeafAttributeValue', 'directiveLeafAttributeValueMarker', 'directiveLeafAttributeValueData', true);
}

/**
 * @import {Construct, Previous, State, TokenizeContext, Tokenizer} from 'micromark-util-types'
 */


/** @type {Construct} */
const directiveText = {
  tokenize: tokenizeDirectiveText,
  previous: previous$1
};
const label = {
  tokenize: tokenizeLabel,
  partial: true
};
const attributes = {
  tokenize: tokenizeAttributes,
  partial: true
};

/**
 * @this {TokenizeContext}
 * @type {Previous}
 */
function previous$1(code) {
  // If there is a previous code, there will always be a tail.
  return code !== 58 || this.events[this.events.length - 1][1].type === "characterEscape";
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeDirectiveText(effects, ok, nok) {
  const self = this;
  return start;

  /** @type {State} */
  function start(code) {
    effects.enter('directiveText');
    effects.enter('directiveTextMarker');
    effects.consume(code);
    effects.exit('directiveTextMarker');
    return factoryName.call(self, effects, afterName, nok, 'directiveTextName');
  }

  /** @type {State} */
  function afterName(code) {
    return code === 58 ? nok(code) : code === 91 ? effects.attempt(label, afterLabel, afterLabel)(code) : afterLabel(code);
  }

  /** @type {State} */
  function afterLabel(code) {
    return code === 123 ? effects.attempt(attributes, afterAttributes, afterAttributes)(code) : afterAttributes(code);
  }

  /** @type {State} */
  function afterAttributes(code) {
    effects.exit('directiveText');
    return ok(code);
  }
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeLabel(effects, ok, nok) {
  // Always a `[`
  return factoryLabel(effects, ok, nok, 'directiveTextLabel', 'directiveTextLabelMarker', 'directiveTextLabelString');
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeAttributes(effects, ok, nok) {
  // Always a `{`
  return factoryAttributes(effects, ok, nok, 'directiveTextAttributes', 'directiveTextAttributesMarker', 'directiveTextAttribute', 'directiveTextAttributeId', 'directiveTextAttributeClass', 'directiveTextAttributeName', 'directiveTextAttributeInitializerMarker', 'directiveTextAttributeValueLiteral', 'directiveTextAttributeValue', 'directiveTextAttributeValueMarker', 'directiveTextAttributeValueData');
}

/**
 * @import {Extension} from 'micromark-util-types'
 */


/**
 * Create an extension for `micromark` to enable directive syntax.
 *
 * @returns {Extension}
 *   Extension for `micromark` that can be passed in `extensions`, to
 *   enable directive syntax.
 */
function directive() {
  return {
    text: {
      [58]: directiveText
    },
    flow: {
      [58]: [directiveContainer, directiveLeaf]
    }
  };
}

/**
 * @import {Code, ConstructRecord, Event, Extension, Previous, State, TokenizeContext, Tokenizer} from 'micromark-util-types'
 */

const wwwPrefix = {
  tokenize: tokenizeWwwPrefix,
  partial: true
};
const domain = {
  tokenize: tokenizeDomain,
  partial: true
};
const path = {
  tokenize: tokenizePath,
  partial: true
};
const trail = {
  tokenize: tokenizeTrail,
  partial: true
};
const emailDomainDotTrail = {
  tokenize: tokenizeEmailDomainDotTrail,
  partial: true
};
const wwwAutolink = {
  name: 'wwwAutolink',
  tokenize: tokenizeWwwAutolink,
  previous: previousWww
};
const protocolAutolink = {
  name: 'protocolAutolink',
  tokenize: tokenizeProtocolAutolink,
  previous: previousProtocol
};
const emailAutolink = {
  name: 'emailAutolink',
  tokenize: tokenizeEmailAutolink,
  previous: previousEmail
};

/** @type {ConstructRecord} */
const text = {};

/**
 * Create an extension for `micromark` to support GitHub autolink literal
 * syntax.
 *
 * @returns {Extension}
 *   Extension for `micromark` that can be passed in `extensions` to enable GFM
 *   autolink literal syntax.
 */
function gfmAutolinkLiteral() {
  return {
    text
  };
}

/** @type {Code} */
let code = 48;

// Add alphanumerics.
while (code < 123) {
  text[code] = emailAutolink;
  code++;
  if (code === 58) code = 65;else if (code === 91) code = 97;
}
text[43] = emailAutolink;
text[45] = emailAutolink;
text[46] = emailAutolink;
text[95] = emailAutolink;
text[72] = [emailAutolink, protocolAutolink];
text[104] = [emailAutolink, protocolAutolink];
text[87] = [emailAutolink, wwwAutolink];
text[119] = [emailAutolink, wwwAutolink];

// To do: perform email autolink literals on events, afterwards.
// That’s where `markdown-rs` and `cmark-gfm` perform it.
// It should look for `@`, then for atext backwards, and then for a label
// forwards.
// To do: `mailto:`, `xmpp:` protocol as prefix.

/**
 * Email autolink literal.
 *
 * ```markdown
 * > | a contact@example.org b
 *       ^^^^^^^^^^^^^^^^^^^
 * ```
 *
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeEmailAutolink(effects, ok, nok) {
  const self = this;
  /** @type {boolean | undefined} */
  let dot;
  /** @type {boolean} */
  let data;
  return start;

  /**
   * Start of email autolink literal.
   *
   * ```markdown
   * > | a contact@example.org b
   *       ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    if (!gfmAtext(code) || !previousEmail.call(self, self.previous) || previousUnbalanced(self.events)) {
      return nok(code);
    }
    effects.enter('literalAutolink');
    effects.enter('literalAutolinkEmail');
    return atext(code);
  }

  /**
   * In email atext.
   *
   * ```markdown
   * > | a contact@example.org b
   *       ^
   * ```
   *
   * @type {State}
   */
  function atext(code) {
    if (gfmAtext(code)) {
      effects.consume(code);
      return atext;
    }
    if (code === 64) {
      effects.consume(code);
      return emailDomain;
    }
    return nok(code);
  }

  /**
   * In email domain.
   *
   * The reference code is a bit overly complex as it handles the `@`, of which
   * there may be just one.
   * Source: <https://github.com/github/cmark-gfm/blob/ef1cfcb/extensions/autolink.c#L318>
   *
   * ```markdown
   * > | a contact@example.org b
   *               ^
   * ```
   *
   * @type {State}
   */
  function emailDomain(code) {
    // Dot followed by alphanumerical (not `-` or `_`).
    if (code === 46) {
      return effects.check(emailDomainDotTrail, emailDomainAfter, emailDomainDot)(code);
    }

    // Alphanumerical, `-`, and `_`.
    if (code === 45 || code === 95 || asciiAlphanumeric(code)) {
      data = true;
      effects.consume(code);
      return emailDomain;
    }

    // To do: `/` if xmpp.

    // Note: normally we’d truncate trailing punctuation from the link.
    // However, email autolink literals cannot contain any of those markers,
    // except for `.`, but that can only occur if it isn’t trailing.
    // So we can ignore truncating!
    return emailDomainAfter(code);
  }

  /**
   * In email domain, on dot that is not a trail.
   *
   * ```markdown
   * > | a contact@example.org b
   *                      ^
   * ```
   *
   * @type {State}
   */
  function emailDomainDot(code) {
    effects.consume(code);
    dot = true;
    return emailDomain;
  }

  /**
   * After email domain.
   *
   * ```markdown
   * > | a contact@example.org b
   *                          ^
   * ```
   *
   * @type {State}
   */
  function emailDomainAfter(code) {
    // Domain must not be empty, must include a dot, and must end in alphabetical.
    // Source: <https://github.com/github/cmark-gfm/blob/ef1cfcb/extensions/autolink.c#L332>.
    if (data && dot && asciiAlpha(self.previous)) {
      effects.exit('literalAutolinkEmail');
      effects.exit('literalAutolink');
      return ok(code);
    }
    return nok(code);
  }
}

/**
 * `www` autolink literal.
 *
 * ```markdown
 * > | a www.example.org b
 *       ^^^^^^^^^^^^^^^
 * ```
 *
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeWwwAutolink(effects, ok, nok) {
  const self = this;
  return wwwStart;

  /**
   * Start of www autolink literal.
   *
   * ```markdown
   * > | www.example.com/a?b#c
   *     ^
   * ```
   *
   * @type {State}
   */
  function wwwStart(code) {
    if (code !== 87 && code !== 119 || !previousWww.call(self, self.previous) || previousUnbalanced(self.events)) {
      return nok(code);
    }
    effects.enter('literalAutolink');
    effects.enter('literalAutolinkWww');
    // Note: we *check*, so we can discard the `www.` we parsed.
    // If it worked, we consider it as a part of the domain.
    return effects.check(wwwPrefix, effects.attempt(domain, effects.attempt(path, wwwAfter), nok), nok)(code);
  }

  /**
   * After a www autolink literal.
   *
   * ```markdown
   * > | www.example.com/a?b#c
   *                          ^
   * ```
   *
   * @type {State}
   */
  function wwwAfter(code) {
    effects.exit('literalAutolinkWww');
    effects.exit('literalAutolink');
    return ok(code);
  }
}

/**
 * Protocol autolink literal.
 *
 * ```markdown
 * > | a https://example.org b
 *       ^^^^^^^^^^^^^^^^^^^
 * ```
 *
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeProtocolAutolink(effects, ok, nok) {
  const self = this;
  let buffer = '';
  let seen = false;
  return protocolStart;

  /**
   * Start of protocol autolink literal.
   *
   * ```markdown
   * > | https://example.com/a?b#c
   *     ^
   * ```
   *
   * @type {State}
   */
  function protocolStart(code) {
    if ((code === 72 || code === 104) && previousProtocol.call(self, self.previous) && !previousUnbalanced(self.events)) {
      effects.enter('literalAutolink');
      effects.enter('literalAutolinkHttp');
      buffer += String.fromCodePoint(code);
      effects.consume(code);
      return protocolPrefixInside;
    }
    return nok(code);
  }

  /**
   * In protocol.
   *
   * ```markdown
   * > | https://example.com/a?b#c
   *     ^^^^^
   * ```
   *
   * @type {State}
   */
  function protocolPrefixInside(code) {
    // `5` is size of `https`
    if (asciiAlpha(code) && buffer.length < 5) {
      // @ts-expect-error: definitely number.
      buffer += String.fromCodePoint(code);
      effects.consume(code);
      return protocolPrefixInside;
    }
    if (code === 58) {
      const protocol = buffer.toLowerCase();
      if (protocol === 'http' || protocol === 'https') {
        effects.consume(code);
        return protocolSlashesInside;
      }
    }
    return nok(code);
  }

  /**
   * In slashes.
   *
   * ```markdown
   * > | https://example.com/a?b#c
   *           ^^
   * ```
   *
   * @type {State}
   */
  function protocolSlashesInside(code) {
    if (code === 47) {
      effects.consume(code);
      if (seen) {
        return afterProtocol;
      }
      seen = true;
      return protocolSlashesInside;
    }
    return nok(code);
  }

  /**
   * After protocol, before domain.
   *
   * ```markdown
   * > | https://example.com/a?b#c
   *             ^
   * ```
   *
   * @type {State}
   */
  function afterProtocol(code) {
    // To do: this is different from `markdown-rs`:
    // https://github.com/wooorm/markdown-rs/blob/b3a921c761309ae00a51fe348d8a43adbc54b518/src/construct/gfm_autolink_literal.rs#L172-L182
    return code === null || asciiControl(code) || markdownLineEndingOrSpace(code) || unicodeWhitespace(code) || unicodePunctuation(code) ? nok(code) : effects.attempt(domain, effects.attempt(path, protocolAfter), nok)(code);
  }

  /**
   * After a protocol autolink literal.
   *
   * ```markdown
   * > | https://example.com/a?b#c
   *                              ^
   * ```
   *
   * @type {State}
   */
  function protocolAfter(code) {
    effects.exit('literalAutolinkHttp');
    effects.exit('literalAutolink');
    return ok(code);
  }
}

/**
 * `www` prefix.
 *
 * ```markdown
 * > | a www.example.org b
 *       ^^^^
 * ```
 *
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeWwwPrefix(effects, ok, nok) {
  let size = 0;
  return wwwPrefixInside;

  /**
   * In www prefix.
   *
   * ```markdown
   * > | www.example.com
   *     ^^^^
   * ```
   *
   * @type {State}
   */
  function wwwPrefixInside(code) {
    if ((code === 87 || code === 119) && size < 3) {
      size++;
      effects.consume(code);
      return wwwPrefixInside;
    }
    if (code === 46 && size === 3) {
      effects.consume(code);
      return wwwPrefixAfter;
    }
    return nok(code);
  }

  /**
   * After www prefix.
   *
   * ```markdown
   * > | www.example.com
   *         ^
   * ```
   *
   * @type {State}
   */
  function wwwPrefixAfter(code) {
    // If there is *anything*, we can link.
    return code === null ? nok(code) : ok(code);
  }
}

/**
 * Domain.
 *
 * ```markdown
 * > | a https://example.org b
 *               ^^^^^^^^^^^
 * ```
 *
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeDomain(effects, ok, nok) {
  /** @type {boolean | undefined} */
  let underscoreInLastSegment;
  /** @type {boolean | undefined} */
  let underscoreInLastLastSegment;
  /** @type {boolean | undefined} */
  let seen;
  return domainInside;

  /**
   * In domain.
   *
   * ```markdown
   * > | https://example.com/a
   *             ^^^^^^^^^^^
   * ```
   *
   * @type {State}
   */
  function domainInside(code) {
    // Check whether this marker, which is a trailing punctuation
    // marker, optionally followed by more trailing markers, and then
    // followed by an end.
    if (code === 46 || code === 95) {
      return effects.check(trail, domainAfter, domainAtPunctuation)(code);
    }

    // GH documents that only alphanumerics (other than `-`, `.`, and `_`) can
    // occur, which sounds like ASCII only, but they also support `www.點看.com`,
    // so that’s Unicode.
    // Instead of some new production for Unicode alphanumerics, markdown
    // already has that for Unicode punctuation and whitespace, so use those.
    // Source: <https://github.com/github/cmark-gfm/blob/ef1cfcb/extensions/autolink.c#L12>.
    if (code === null || markdownLineEndingOrSpace(code) || unicodeWhitespace(code) || code !== 45 && unicodePunctuation(code)) {
      return domainAfter(code);
    }
    seen = true;
    effects.consume(code);
    return domainInside;
  }

  /**
   * In domain, at potential trailing punctuation, that was not trailing.
   *
   * ```markdown
   * > | https://example.com
   *                    ^
   * ```
   *
   * @type {State}
   */
  function domainAtPunctuation(code) {
    // There is an underscore in the last segment of the domain
    if (code === 95) {
      underscoreInLastSegment = true;
    }
    // Otherwise, it’s a `.`: save the last segment underscore in the
    // penultimate segment slot.
    else {
      underscoreInLastLastSegment = underscoreInLastSegment;
      underscoreInLastSegment = undefined;
    }
    effects.consume(code);
    return domainInside;
  }

  /**
   * After domain.
   *
   * ```markdown
   * > | https://example.com/a
   *                        ^
   * ```
   *
   * @type {State} */
  function domainAfter(code) {
    // Note: that’s GH says a dot is needed, but it’s not true:
    // <https://github.com/github/cmark-gfm/issues/279>
    if (underscoreInLastLastSegment || underscoreInLastSegment || !seen) {
      return nok(code);
    }
    return ok(code);
  }
}

/**
 * Path.
 *
 * ```markdown
 * > | a https://example.org/stuff b
 *                          ^^^^^^
 * ```
 *
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizePath(effects, ok) {
  let sizeOpen = 0;
  let sizeClose = 0;
  return pathInside;

  /**
   * In path.
   *
   * ```markdown
   * > | https://example.com/a
   *                        ^^
   * ```
   *
   * @type {State}
   */
  function pathInside(code) {
    if (code === 40) {
      sizeOpen++;
      effects.consume(code);
      return pathInside;
    }

    // To do: `markdown-rs` also needs this.
    // If this is a paren, and there are less closings than openings,
    // we don’t check for a trail.
    if (code === 41 && sizeClose < sizeOpen) {
      return pathAtPunctuation(code);
    }

    // Check whether this trailing punctuation marker is optionally
    // followed by more trailing markers, and then followed
    // by an end.
    if (code === 33 || code === 34 || code === 38 || code === 39 || code === 41 || code === 42 || code === 44 || code === 46 || code === 58 || code === 59 || code === 60 || code === 63 || code === 93 || code === 95 || code === 126) {
      return effects.check(trail, ok, pathAtPunctuation)(code);
    }
    if (code === null || markdownLineEndingOrSpace(code) || unicodeWhitespace(code)) {
      return ok(code);
    }
    effects.consume(code);
    return pathInside;
  }

  /**
   * In path, at potential trailing punctuation, that was not trailing.
   *
   * ```markdown
   * > | https://example.com/a"b
   *                          ^
   * ```
   *
   * @type {State}
   */
  function pathAtPunctuation(code) {
    // Count closing parens.
    if (code === 41) {
      sizeClose++;
    }
    effects.consume(code);
    return pathInside;
  }
}

/**
 * Trail.
 *
 * This calls `ok` if this *is* the trail, followed by an end, which means
 * the entire trail is not part of the link.
 * It calls `nok` if this *is* part of the link.
 *
 * ```markdown
 * > | https://example.com").
 *                        ^^^
 * ```
 *
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeTrail(effects, ok, nok) {
  return trail;

  /**
   * In trail of domain or path.
   *
   * ```markdown
   * > | https://example.com").
   *                        ^
   * ```
   *
   * @type {State}
   */
  function trail(code) {
    // Regular trailing punctuation.
    if (code === 33 || code === 34 || code === 39 || code === 41 || code === 42 || code === 44 || code === 46 || code === 58 || code === 59 || code === 63 || code === 95 || code === 126) {
      effects.consume(code);
      return trail;
    }

    // `&` followed by one or more alphabeticals and then a `;`, is
    // as a whole considered as trailing punctuation.
    // In all other cases, it is considered as continuation of the URL.
    if (code === 38) {
      effects.consume(code);
      return trailCharacterReferenceStart;
    }

    // Needed because we allow literals after `[`, as we fix:
    // <https://github.com/github/cmark-gfm/issues/278>.
    // Check that it is not followed by `(` or `[`.
    if (code === 93) {
      effects.consume(code);
      return trailBracketAfter;
    }
    if (
    // `<` is an end.
    code === 60 ||
    // So is whitespace.
    code === null || markdownLineEndingOrSpace(code) || unicodeWhitespace(code)) {
      return ok(code);
    }
    return nok(code);
  }

  /**
   * In trail, after `]`.
   *
   * > 👉 **Note**: this deviates from `cmark-gfm` to fix a bug.
   * > See end of <https://github.com/github/cmark-gfm/issues/278> for more.
   *
   * ```markdown
   * > | https://example.com](
   *                         ^
   * ```
   *
   * @type {State}
   */
  function trailBracketAfter(code) {
    // Whitespace or something that could start a resource or reference is the end.
    // Switch back to trail otherwise.
    if (code === null || code === 40 || code === 91 || markdownLineEndingOrSpace(code) || unicodeWhitespace(code)) {
      return ok(code);
    }
    return trail(code);
  }

  /**
   * In character-reference like trail, after `&`.
   *
   * ```markdown
   * > | https://example.com&amp;).
   *                         ^
   * ```
   *
   * @type {State}
   */
  function trailCharacterReferenceStart(code) {
    // When non-alpha, it’s not a trail.
    return asciiAlpha(code) ? trailCharacterReferenceInside(code) : nok(code);
  }

  /**
   * In character-reference like trail.
   *
   * ```markdown
   * > | https://example.com&amp;).
   *                         ^
   * ```
   *
   * @type {State}
   */
  function trailCharacterReferenceInside(code) {
    // Switch back to trail if this is well-formed.
    if (code === 59) {
      effects.consume(code);
      return trail;
    }
    if (asciiAlpha(code)) {
      effects.consume(code);
      return trailCharacterReferenceInside;
    }

    // It’s not a trail.
    return nok(code);
  }
}

/**
 * Dot in email domain trail.
 *
 * This calls `ok` if this *is* the trail, followed by an end, which means
 * the trail is not part of the link.
 * It calls `nok` if this *is* part of the link.
 *
 * ```markdown
 * > | contact@example.org.
 *                        ^
 * ```
 *
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeEmailDomainDotTrail(effects, ok, nok) {
  return start;

  /**
   * Dot.
   *
   * ```markdown
   * > | contact@example.org.
   *                    ^   ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    // Must be dot.
    effects.consume(code);
    return after;
  }

  /**
   * After dot.
   *
   * ```markdown
   * > | contact@example.org.
   *                     ^   ^
   * ```
   *
   * @type {State}
   */
  function after(code) {
    // Not a trail if alphanumeric.
    return asciiAlphanumeric(code) ? nok(code) : ok(code);
  }
}

/**
 * See:
 * <https://github.com/github/cmark-gfm/blob/ef1cfcb/extensions/autolink.c#L156>.
 *
 * @type {Previous}
 */
function previousWww(code) {
  return code === null || code === 40 || code === 42 || code === 95 || code === 91 || code === 93 || code === 126 || markdownLineEndingOrSpace(code);
}

/**
 * See:
 * <https://github.com/github/cmark-gfm/blob/ef1cfcb/extensions/autolink.c#L214>.
 *
 * @type {Previous}
 */
function previousProtocol(code) {
  return !asciiAlpha(code);
}

/**
 * @this {TokenizeContext}
 * @type {Previous}
 */
function previousEmail(code) {
  // Do not allow a slash “inside” atext.
  // The reference code is a bit weird, but that’s what it results in.
  // Source: <https://github.com/github/cmark-gfm/blob/ef1cfcb/extensions/autolink.c#L307>.
  // Other than slash, every preceding character is allowed.
  return !(code === 47 || gfmAtext(code));
}

/**
 * @param {Code} code
 * @returns {boolean}
 */
function gfmAtext(code) {
  return code === 43 || code === 45 || code === 46 || code === 95 || asciiAlphanumeric(code);
}

/**
 * @param {Array<Event>} events
 * @returns {boolean}
 */
function previousUnbalanced(events) {
  let index = events.length;
  let result = false;
  while (index--) {
    const token = events[index][1];
    if ((token.type === 'labelLink' || token.type === 'labelImage') && !token._balanced) {
      result = true;
      break;
    }

    // If we’ve seen this token, and it was marked as not having any unbalanced
    // bracket before it, we can exit.
    if (token._gfmAutolinkLiteralWalkedInto) {
      result = false;
      break;
    }
  }
  if (events.length > 0 && !result) {
    // Mark the last token as “walked into” w/o finding
    // anything.
    events[events.length - 1][1]._gfmAutolinkLiteralWalkedInto = true;
  }
  return result;
}

/**
 * @import {Event, Exiter, Extension, Resolver, State, Token, TokenizeContext, Tokenizer} from 'micromark-util-types'
 */

const indent = {
  tokenize: tokenizeIndent,
  partial: true
};

// To do: micromark should support a `_hiddenGfmFootnoteSupport`, which only
// affects label start (image).
// That will let us drop `tokenizePotentialGfmFootnote*`.
// It currently has a `_hiddenFootnoteSupport`, which affects that and more.
// That can be removed when `micromark-extension-footnote` is archived.

/**
 * Create an extension for `micromark` to enable GFM footnote syntax.
 *
 * @returns {Extension}
 *   Extension for `micromark` that can be passed in `extensions` to
 *   enable GFM footnote syntax.
 */
function gfmFootnote() {
  /** @type {Extension} */
  return {
    document: {
      [91]: {
        name: 'gfmFootnoteDefinition',
        tokenize: tokenizeDefinitionStart,
        continuation: {
          tokenize: tokenizeDefinitionContinuation
        },
        exit: gfmFootnoteDefinitionEnd
      }
    },
    text: {
      [91]: {
        name: 'gfmFootnoteCall',
        tokenize: tokenizeGfmFootnoteCall
      },
      [93]: {
        name: 'gfmPotentialFootnoteCall',
        add: 'after',
        tokenize: tokenizePotentialGfmFootnoteCall,
        resolveTo: resolveToPotentialGfmFootnoteCall
      }
    }
  };
}

// To do: remove after micromark update.
/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizePotentialGfmFootnoteCall(effects, ok, nok) {
  const self = this;
  let index = self.events.length;
  const defined = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []);
  /** @type {Token} */
  let labelStart;

  // Find an opening.
  while (index--) {
    const token = self.events[index][1];
    if (token.type === "labelImage") {
      labelStart = token;
      break;
    }

    // Exit if we’ve walked far enough.
    if (token.type === 'gfmFootnoteCall' || token.type === "labelLink" || token.type === "label" || token.type === "image" || token.type === "link") {
      break;
    }
  }
  return start;

  /**
   * @type {State}
   */
  function start(code) {
    if (!labelStart || !labelStart._balanced) {
      return nok(code);
    }
    const id = normalizeIdentifier(self.sliceSerialize({
      start: labelStart.end,
      end: self.now()
    }));
    if (id.codePointAt(0) !== 94 || !defined.includes(id.slice(1))) {
      return nok(code);
    }
    effects.enter('gfmFootnoteCallLabelMarker');
    effects.consume(code);
    effects.exit('gfmFootnoteCallLabelMarker');
    return ok(code);
  }
}

// To do: remove after micromark update.
/** @type {Resolver} */
function resolveToPotentialGfmFootnoteCall(events, context) {
  let index = events.length;

  // Find an opening.
  while (index--) {
    if (events[index][1].type === "labelImage" && events[index][0] === 'enter') {
      events[index][1];
      break;
    }
  }
  // Change the `labelImageMarker` to a `data`.
  events[index + 1][1].type = "data";
  events[index + 3][1].type = 'gfmFootnoteCallLabelMarker';

  // The whole (without `!`):
  /** @type {Token} */
  const call = {
    type: 'gfmFootnoteCall',
    start: Object.assign({}, events[index + 3][1].start),
    end: Object.assign({}, events[events.length - 1][1].end)
  };
  // The `^` marker
  /** @type {Token} */
  const marker = {
    type: 'gfmFootnoteCallMarker',
    start: Object.assign({}, events[index + 3][1].end),
    end: Object.assign({}, events[index + 3][1].end)
  };
  // Increment the end 1 character.
  marker.end.column++;
  marker.end.offset++;
  marker.end._bufferIndex++;
  /** @type {Token} */
  const string = {
    type: 'gfmFootnoteCallString',
    start: Object.assign({}, marker.end),
    end: Object.assign({}, events[events.length - 1][1].start)
  };
  /** @type {Token} */
  const chunk = {
    type: "chunkString",
    contentType: 'string',
    start: Object.assign({}, string.start),
    end: Object.assign({}, string.end)
  };

  /** @type {Array<Event>} */
  const replacement = [
  // Take the `labelImageMarker` (now `data`, the `!`)
  events[index + 1], events[index + 2], ['enter', call, context],
  // The `[`
  events[index + 3], events[index + 4],
  // The `^`.
  ['enter', marker, context], ['exit', marker, context],
  // Everything in between.
  ['enter', string, context], ['enter', chunk, context], ['exit', chunk, context], ['exit', string, context],
  // The ending (`]`, properly parsed and labelled).
  events[events.length - 2], events[events.length - 1], ['exit', call, context]];
  events.splice(index, events.length - index + 1, ...replacement);
  return events;
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeGfmFootnoteCall(effects, ok, nok) {
  const self = this;
  const defined = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []);
  let size = 0;
  /** @type {boolean} */
  let data;

  // Note: the implementation of `markdown-rs` is different, because it houses
  // core *and* extensions in one project.
  // Therefore, it can include footnote logic inside `label-end`.
  // We can’t do that, but luckily, we can parse footnotes in a simpler way than
  // needed for labels.
  return start;

  /**
   * Start of footnote label.
   *
   * ```markdown
   * > | a [^b] c
   *       ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    effects.enter('gfmFootnoteCall');
    effects.enter('gfmFootnoteCallLabelMarker');
    effects.consume(code);
    effects.exit('gfmFootnoteCallLabelMarker');
    return callStart;
  }

  /**
   * After `[`, at `^`.
   *
   * ```markdown
   * > | a [^b] c
   *        ^
   * ```
   *
   * @type {State}
   */
  function callStart(code) {
    if (code !== 94) return nok(code);
    effects.enter('gfmFootnoteCallMarker');
    effects.consume(code);
    effects.exit('gfmFootnoteCallMarker');
    effects.enter('gfmFootnoteCallString');
    effects.enter('chunkString').contentType = 'string';
    return callData;
  }

  /**
   * In label.
   *
   * ```markdown
   * > | a [^b] c
   *         ^
   * ```
   *
   * @type {State}
   */
  function callData(code) {
    if (
    // Too long.
    size > 999 ||
    // Closing brace with nothing.
    code === 93 && !data ||
    // Space or tab is not supported by GFM for some reason.
    // `\n` and `[` not being supported makes sense.
    code === null || code === 91 || markdownLineEndingOrSpace(code)) {
      return nok(code);
    }
    if (code === 93) {
      effects.exit('chunkString');
      const token = effects.exit('gfmFootnoteCallString');
      if (!defined.includes(normalizeIdentifier(self.sliceSerialize(token)))) {
        return nok(code);
      }
      effects.enter('gfmFootnoteCallLabelMarker');
      effects.consume(code);
      effects.exit('gfmFootnoteCallLabelMarker');
      effects.exit('gfmFootnoteCall');
      return ok;
    }
    if (!markdownLineEndingOrSpace(code)) {
      data = true;
    }
    size++;
    effects.consume(code);
    return code === 92 ? callEscape : callData;
  }

  /**
   * On character after escape.
   *
   * ```markdown
   * > | a [^b\c] d
   *           ^
   * ```
   *
   * @type {State}
   */
  function callEscape(code) {
    if (code === 91 || code === 92 || code === 93) {
      effects.consume(code);
      size++;
      return callData;
    }
    return callData(code);
  }
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeDefinitionStart(effects, ok, nok) {
  const self = this;
  const defined = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []);
  /** @type {string} */
  let identifier;
  let size = 0;
  /** @type {boolean | undefined} */
  let data;
  return start;

  /**
   * Start of GFM footnote definition.
   *
   * ```markdown
   * > | [^a]: b
   *     ^
   * ```
   *
   * @type {State}
   */
  function start(code) {
    effects.enter('gfmFootnoteDefinition')._container = true;
    effects.enter('gfmFootnoteDefinitionLabel');
    effects.enter('gfmFootnoteDefinitionLabelMarker');
    effects.consume(code);
    effects.exit('gfmFootnoteDefinitionLabelMarker');
    return labelAtMarker;
  }

  /**
   * In label, at caret.
   *
   * ```markdown
   * > | [^a]: b
   *      ^
   * ```
   *
   * @type {State}
   */
  function labelAtMarker(code) {
    if (code === 94) {
      effects.enter('gfmFootnoteDefinitionMarker');
      effects.consume(code);
      effects.exit('gfmFootnoteDefinitionMarker');
      effects.enter('gfmFootnoteDefinitionLabelString');
      effects.enter('chunkString').contentType = 'string';
      return labelInside;
    }
    return nok(code);
  }

  /**
   * In label.
   *
   * > 👉 **Note**: `cmark-gfm` prevents whitespace from occurring in footnote
   * > definition labels.
   *
   * ```markdown
   * > | [^a]: b
   *       ^
   * ```
   *
   * @type {State}
   */
  function labelInside(code) {
    if (
    // Too long.
    size > 999 ||
    // Closing brace with nothing.
    code === 93 && !data ||
    // Space or tab is not supported by GFM for some reason.
    // `\n` and `[` not being supported makes sense.
    code === null || code === 91 || markdownLineEndingOrSpace(code)) {
      return nok(code);
    }
    if (code === 93) {
      effects.exit('chunkString');
      const token = effects.exit('gfmFootnoteDefinitionLabelString');
      identifier = normalizeIdentifier(self.sliceSerialize(token));
      effects.enter('gfmFootnoteDefinitionLabelMarker');
      effects.consume(code);
      effects.exit('gfmFootnoteDefinitionLabelMarker');
      effects.exit('gfmFootnoteDefinitionLabel');
      return labelAfter;
    }
    if (!markdownLineEndingOrSpace(code)) {
      data = true;
    }
    size++;
    effects.consume(code);
    return code === 92 ? labelEscape : labelInside;
  }

  /**
   * After `\`, at a special character.
   *
   * > 👉 **Note**: `cmark-gfm` currently does not support escaped brackets:
   * > <https://github.com/github/cmark-gfm/issues/240>
   *
   * ```markdown
   * > | [^a\*b]: c
   *         ^
   * ```
   *
   * @type {State}
   */
  function labelEscape(code) {
    if (code === 91 || code === 92 || code === 93) {
      effects.consume(code);
      size++;
      return labelInside;
    }
    return labelInside(code);
  }

  /**
   * After definition label.
   *
   * ```markdown
   * > | [^a]: b
   *         ^
   * ```
   *
   * @type {State}
   */
  function labelAfter(code) {
    if (code === 58) {
      effects.enter('definitionMarker');
      effects.consume(code);
      effects.exit('definitionMarker');
      if (!defined.includes(identifier)) {
        defined.push(identifier);
      }

      // Any whitespace after the marker is eaten, forming indented code
      // is not possible.
      // No space is also fine, just like a block quote marker.
      return factorySpace(effects, whitespaceAfter, 'gfmFootnoteDefinitionWhitespace');
    }
    return nok(code);
  }

  /**
   * After definition prefix.
   *
   * ```markdown
   * > | [^a]: b
   *           ^
   * ```
   *
   * @type {State}
   */
  function whitespaceAfter(code) {
    // `markdown-rs` has a wrapping token for the prefix that is closed here.
    return ok(code);
  }
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeDefinitionContinuation(effects, ok, nok) {
  /// Start of footnote definition continuation.
  ///
  /// ```markdown
  ///   | [^a]: b
  /// > |     c
  ///     ^
  /// ```
  //
  // Either a blank line, which is okay, or an indented thing.
  return effects.check(blankLine, ok, effects.attempt(indent, ok, nok));
}

/** @type {Exiter} */
function gfmFootnoteDefinitionEnd(effects) {
  effects.exit('gfmFootnoteDefinition');
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeIndent(effects, ok, nok) {
  const self = this;
  return factorySpace(effects, afterPrefix, 'gfmFootnoteDefinitionIndent', 4 + 1);

  /**
   * @type {State}
   */
  function afterPrefix(code) {
    const tail = self.events[self.events.length - 1];
    return tail && tail[1].type === 'gfmFootnoteDefinitionIndent' && tail[2].sliceSerialize(tail[1], true).length === 4 ? ok(code) : nok(code);
  }
}

/**
 * @import {Event} from 'micromark-util-types'
 */

// Port of `edit_map.rs` from `markdown-rs`.
// This should move to `markdown-js` later.

// Deal with several changes in events, batching them together.
//
// Preferably, changes should be kept to a minimum.
// Sometimes, it’s needed to change the list of events, because parsing can be
// messy, and it helps to expose a cleaner interface of events to the compiler
// and other users.
// It can also help to merge many adjacent similar events.
// And, in other cases, it’s needed to parse subcontent: pass some events
// through another tokenizer and inject the result.

/**
 * @typedef {[number, number, Array<Event>]} Change
 * @typedef {[number, number, number]} Jump
 */

/**
 * Tracks a bunch of edits.
 */
class EditMap {
  /**
   * Create a new edit map.
   */
  constructor() {
    /**
     * Record of changes.
     *
     * @type {Array<Change>}
     */
    this.map = [];
  }

  /**
   * Create an edit: a remove and/or add at a certain place.
   *
   * @param {number} index
   * @param {number} remove
   * @param {Array<Event>} add
   * @returns {undefined}
   */
  add(index, remove, add) {
    addImplementation(this, index, remove, add);
  }

  // To do: add this when moving to `micromark`.
  // /**
  //  * Create an edit: but insert `add` before existing additions.
  //  *
  //  * @param {number} index
  //  * @param {number} remove
  //  * @param {Array<Event>} add
  //  * @returns {undefined}
  //  */
  // addBefore(index, remove, add) {
  //   addImplementation(this, index, remove, add, true)
  // }

  /**
   * Done, change the events.
   *
   * @param {Array<Event>} events
   * @returns {undefined}
   */
  consume(events) {
    this.map.sort(function (a, b) {
      return a[0] - b[0];
    });

    /* c8 ignore next 3 -- `resolve` is never called without tables, so without edits. */
    if (this.map.length === 0) {
      return;
    }

    // To do: if links are added in events, like they are in `markdown-rs`,
    // this is needed.
    // // Calculate jumps: where items in the current list move to.
    // /** @type {Array<Jump>} */
    // const jumps = []
    // let index = 0
    // let addAcc = 0
    // let removeAcc = 0
    // while (index < this.map.length) {
    //   const [at, remove, add] = this.map[index]
    //   removeAcc += remove
    //   addAcc += add.length
    //   jumps.push([at, removeAcc, addAcc])
    //   index += 1
    // }
    //
    // . shiftLinks(events, jumps)

    let index = this.map.length;
    /** @type {Array<Array<Event>>} */
    const vecs = [];
    while (index > 0) {
      index -= 1;
      vecs.push(events.slice(this.map[index][0] + this.map[index][1]), this.map[index][2]);

      // Truncate rest.
      events.length = this.map[index][0];
    }
    vecs.push(events.slice());
    events.length = 0;
    let slice = vecs.pop();
    while (slice) {
      for (const element of slice) {
        events.push(element);
      }
      slice = vecs.pop();
    }

    // Truncate everything.
    this.map.length = 0;
  }
}

/**
 * Create an edit.
 *
 * @param {EditMap} editMap
 * @param {number} at
 * @param {number} remove
 * @param {Array<Event>} add
 * @returns {undefined}
 */
function addImplementation(editMap, at, remove, add) {
  let index = 0;

  /* c8 ignore next 3 -- `resolve` is never called without tables, so without edits. */
  if (remove === 0 && add.length === 0) {
    return;
  }
  while (index < editMap.map.length) {
    if (editMap.map[index][0] === at) {
      editMap.map[index][1] += remove;

      // To do: before not used by tables, use when moving to micromark.
      // if (before) {
      //   add.push(...editMap.map[index][2])
      //   editMap.map[index][2] = add
      // } else {
      editMap.map[index][2].push(...add);
      // }

      return;
    }
    index += 1;
  }
  editMap.map.push([at, remove, add]);
}

// /**
//  * Shift `previous` and `next` links according to `jumps`.
//  *
//  * This fixes links in case there are events removed or added between them.
//  *
//  * @param {Array<Event>} events
//  * @param {Array<Jump>} jumps
//  */
// function shiftLinks(events, jumps) {
//   let jumpIndex = 0
//   let index = 0
//   let add = 0
//   let rm = 0

//   while (index < events.length) {
//     const rmCurr = rm

//     while (jumpIndex < jumps.length && jumps[jumpIndex][0] <= index) {
//       add = jumps[jumpIndex][2]
//       rm = jumps[jumpIndex][1]
//       jumpIndex += 1
//     }

//     // Ignore items that will be removed.
//     if (rm > rmCurr) {
//       index += rm - rmCurr
//     } else {
//       // ?
//       // if let Some(link) = &events[index].link {
//       //     if let Some(next) = link.next {
//       //         events[next].link.as_mut().unwrap().previous = Some(index + add - rm);
//       //         while jumpIndex < jumps.len() && jumps[jumpIndex].0 <= next {
//       //             add = jumps[jumpIndex].2;
//       //             rm = jumps[jumpIndex].1;
//       //             jumpIndex += 1;
//       //         }
//       //         events[index].link.as_mut().unwrap().next = Some(next + add - rm);
//       //         index = next;
//       //         continue;
//       //     }
//       // }
//       index += 1
//     }
//   }
// }

/**
 * @import {Event} from 'micromark-util-types'
 */

/**
 * @typedef {'center' | 'left' | 'none' | 'right'} Align
 */

/**
 * Figure out the alignment of a GFM table.
 *
 * @param {Readonly<Array<Event>>} events
 *   List of events.
 * @param {number} index
 *   Table enter event.
 * @returns {Array<Align>}
 *   List of aligns.
 */
function gfmTableAlign(events, index) {
  let inDelimiterRow = false;
  /** @type {Array<Align>} */
  const align = [];
  while (index < events.length) {
    const event = events[index];
    if (inDelimiterRow) {
      if (event[0] === 'enter') {
        // Start of alignment value: set a new column.
        // To do: `markdown-rs` uses `tableDelimiterCellValue`.
        if (event[1].type === 'tableContent') {
          align.push(events[index + 1][1].type === 'tableDelimiterMarker' ? 'left' : 'none');
        }
      }
      // Exits:
      // End of alignment value: change the column.
      // To do: `markdown-rs` uses `tableDelimiterCellValue`.
      else if (event[1].type === 'tableContent') {
        if (events[index - 1][1].type === 'tableDelimiterMarker') {
          const alignIndex = align.length - 1;
          align[alignIndex] = align[alignIndex] === 'left' ? 'center' : 'right';
        }
      }
      // Done!
      else if (event[1].type === 'tableDelimiterRow') {
        break;
      }
    } else if (event[0] === 'enter' && event[1].type === 'tableDelimiterRow') {
      inDelimiterRow = true;
    }
    index += 1;
  }
  return align;
}

/**
 * @import {Event, Extension, Point, Resolver, State, Token, TokenizeContext, Tokenizer} from 'micromark-util-types'
 */


/**
 * Create an HTML extension for `micromark` to support GitHub tables syntax.
 *
 * @returns {Extension}
 *   Extension for `micromark` that can be passed in `extensions` to enable GFM
 *   table syntax.
 */
function gfmTable() {
  return {
    flow: {
      null: {
        name: 'table',
        tokenize: tokenizeTable,
        resolveAll: resolveTable
      }
    }
  };
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeTable(effects, ok, nok) {
  const self = this;
  let size = 0;
  let sizeB = 0;
  /** @type {boolean | undefined} */
  let seen;
  return start;

  /**
   * Start of a GFM table.
   *
   * If there is a valid table row or table head before, then we try to parse
   * another row.
   * Otherwise, we try to parse a head.
   *
   * ```markdown
   * > | | a |
   *     ^
   *   | | - |
   * > | | b |
   *     ^
   * ```
   * @type {State}
   */
  function start(code) {
    let index = self.events.length - 1;
    while (index > -1) {
      const type = self.events[index][1].type;
      if (type === "lineEnding" ||
      // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      type === "linePrefix") index--;else break;
    }
    const tail = index > -1 ? self.events[index][1].type : null;
    const next = tail === 'tableHead' || tail === 'tableRow' ? bodyRowStart : headRowBefore;

    // Don’t allow lazy body rows.
    if (next === bodyRowStart && self.parser.lazy[self.now().line]) {
      return nok(code);
    }
    return next(code);
  }

  /**
   * Before table head row.
   *
   * ```markdown
   * > | | a |
   *     ^
   *   | | - |
   *   | | b |
   * ```
   *
   * @type {State}
   */
  function headRowBefore(code) {
    effects.enter('tableHead');
    effects.enter('tableRow');
    return headRowStart(code);
  }

  /**
   * Before table head row, after whitespace.
   *
   * ```markdown
   * > | | a |
   *     ^
   *   | | - |
   *   | | b |
   * ```
   *
   * @type {State}
   */
  function headRowStart(code) {
    if (code === 124) {
      return headRowBreak(code);
    }

    // To do: micromark-js should let us parse our own whitespace in extensions,
    // like `markdown-rs`:
    //
    // ```js
    // // 4+ spaces.
    // if (markdownSpace(code)) {
    //   return nok(code)
    // }
    // ```

    seen = true;
    // Count the first character, that isn’t a pipe, double.
    sizeB += 1;
    return headRowBreak(code);
  }

  /**
   * At break in table head row.
   *
   * ```markdown
   * > | | a |
   *     ^
   *       ^
   *         ^
   *   | | - |
   *   | | b |
   * ```
   *
   * @type {State}
   */
  function headRowBreak(code) {
    if (code === null) {
      // Note: in `markdown-rs`, we need to reset, in `micromark-js` we don‘t.
      return nok(code);
    }
    if (markdownLineEnding(code)) {
      // If anything other than one pipe (ignoring whitespace) was used, it’s fine.
      if (sizeB > 1) {
        sizeB = 0;
        // To do: check if this works.
        // Feel free to interrupt:
        self.interrupt = true;
        effects.exit('tableRow');
        effects.enter("lineEnding");
        effects.consume(code);
        effects.exit("lineEnding");
        return headDelimiterStart;
      }

      // Note: in `markdown-rs`, we need to reset, in `micromark-js` we don‘t.
      return nok(code);
    }
    if (markdownSpace(code)) {
      // To do: check if this is fine.
      // effects.attempt(State::Next(StateName::GfmTableHeadRowBreak), State::Nok)
      // State::Retry(space_or_tab(tokenizer))
      return factorySpace(effects, headRowBreak, "whitespace")(code);
    }
    sizeB += 1;
    if (seen) {
      seen = false;
      // Header cell count.
      size += 1;
    }
    if (code === 124) {
      effects.enter('tableCellDivider');
      effects.consume(code);
      effects.exit('tableCellDivider');
      // Whether a delimiter was seen.
      seen = true;
      return headRowBreak;
    }

    // Anything else is cell data.
    effects.enter("data");
    return headRowData(code);
  }

  /**
   * In table head row data.
   *
   * ```markdown
   * > | | a |
   *       ^
   *   | | - |
   *   | | b |
   * ```
   *
   * @type {State}
   */
  function headRowData(code) {
    if (code === null || code === 124 || markdownLineEndingOrSpace(code)) {
      effects.exit("data");
      return headRowBreak(code);
    }
    effects.consume(code);
    return code === 92 ? headRowEscape : headRowData;
  }

  /**
   * In table head row escape.
   *
   * ```markdown
   * > | | a\-b |
   *         ^
   *   | | ---- |
   *   | | c    |
   * ```
   *
   * @type {State}
   */
  function headRowEscape(code) {
    if (code === 92 || code === 124) {
      effects.consume(code);
      return headRowData;
    }
    return headRowData(code);
  }

  /**
   * Before delimiter row.
   *
   * ```markdown
   *   | | a |
   * > | | - |
   *     ^
   *   | | b |
   * ```
   *
   * @type {State}
   */
  function headDelimiterStart(code) {
    // Reset `interrupt`.
    self.interrupt = false;

    // Note: in `markdown-rs`, we need to handle piercing here too.
    if (self.parser.lazy[self.now().line]) {
      return nok(code);
    }
    effects.enter('tableDelimiterRow');
    // Track if we’ve seen a `:` or `|`.
    seen = false;
    if (markdownSpace(code)) {
      return factorySpace(effects, headDelimiterBefore, "linePrefix", self.parser.constructs.disable.null.includes('codeIndented') ? undefined : 4)(code);
    }
    return headDelimiterBefore(code);
  }

  /**
   * Before delimiter row, after optional whitespace.
   *
   * Reused when a `|` is found later, to parse another cell.
   *
   * ```markdown
   *   | | a |
   * > | | - |
   *     ^
   *   | | b |
   * ```
   *
   * @type {State}
   */
  function headDelimiterBefore(code) {
    if (code === 45 || code === 58) {
      return headDelimiterValueBefore(code);
    }
    if (code === 124) {
      seen = true;
      // If we start with a pipe, we open a cell marker.
      effects.enter('tableCellDivider');
      effects.consume(code);
      effects.exit('tableCellDivider');
      return headDelimiterCellBefore;
    }

    // More whitespace / empty row not allowed at start.
    return headDelimiterNok(code);
  }

  /**
   * After `|`, before delimiter cell.
   *
   * ```markdown
   *   | | a |
   * > | | - |
   *      ^
   * ```
   *
   * @type {State}
   */
  function headDelimiterCellBefore(code) {
    if (markdownSpace(code)) {
      return factorySpace(effects, headDelimiterValueBefore, "whitespace")(code);
    }
    return headDelimiterValueBefore(code);
  }

  /**
   * Before delimiter cell value.
   *
   * ```markdown
   *   | | a |
   * > | | - |
   *       ^
   * ```
   *
   * @type {State}
   */
  function headDelimiterValueBefore(code) {
    // Align: left.
    if (code === 58) {
      sizeB += 1;
      seen = true;
      effects.enter('tableDelimiterMarker');
      effects.consume(code);
      effects.exit('tableDelimiterMarker');
      return headDelimiterLeftAlignmentAfter;
    }

    // Align: none.
    if (code === 45) {
      sizeB += 1;
      // To do: seems weird that this *isn’t* left aligned, but that state is used?
      return headDelimiterLeftAlignmentAfter(code);
    }
    if (code === null || markdownLineEnding(code)) {
      return headDelimiterCellAfter(code);
    }
    return headDelimiterNok(code);
  }

  /**
   * After delimiter cell left alignment marker.
   *
   * ```markdown
   *   | | a  |
   * > | | :- |
   *        ^
   * ```
   *
   * @type {State}
   */
  function headDelimiterLeftAlignmentAfter(code) {
    if (code === 45) {
      effects.enter('tableDelimiterFiller');
      return headDelimiterFiller(code);
    }

    // Anything else is not ok after the left-align colon.
    return headDelimiterNok(code);
  }

  /**
   * In delimiter cell filler.
   *
   * ```markdown
   *   | | a |
   * > | | - |
   *       ^
   * ```
   *
   * @type {State}
   */
  function headDelimiterFiller(code) {
    if (code === 45) {
      effects.consume(code);
      return headDelimiterFiller;
    }

    // Align is `center` if it was `left`, `right` otherwise.
    if (code === 58) {
      seen = true;
      effects.exit('tableDelimiterFiller');
      effects.enter('tableDelimiterMarker');
      effects.consume(code);
      effects.exit('tableDelimiterMarker');
      return headDelimiterRightAlignmentAfter;
    }
    effects.exit('tableDelimiterFiller');
    return headDelimiterRightAlignmentAfter(code);
  }

  /**
   * After delimiter cell right alignment marker.
   *
   * ```markdown
   *   | |  a |
   * > | | -: |
   *         ^
   * ```
   *
   * @type {State}
   */
  function headDelimiterRightAlignmentAfter(code) {
    if (markdownSpace(code)) {
      return factorySpace(effects, headDelimiterCellAfter, "whitespace")(code);
    }
    return headDelimiterCellAfter(code);
  }

  /**
   * After delimiter cell.
   *
   * ```markdown
   *   | |  a |
   * > | | -: |
   *          ^
   * ```
   *
   * @type {State}
   */
  function headDelimiterCellAfter(code) {
    if (code === 124) {
      return headDelimiterBefore(code);
    }
    if (code === null || markdownLineEnding(code)) {
      // Exit when:
      // * there was no `:` or `|` at all (it’s a thematic break or setext
      //   underline instead)
      // * the header cell count is not the delimiter cell count
      if (!seen || size !== sizeB) {
        return headDelimiterNok(code);
      }

      // Note: in markdown-rs`, a reset is needed here.
      effects.exit('tableDelimiterRow');
      effects.exit('tableHead');
      // To do: in `markdown-rs`, resolvers need to be registered manually.
      // effects.register_resolver(ResolveName::GfmTable)
      return ok(code);
    }
    return headDelimiterNok(code);
  }

  /**
   * In delimiter row, at a disallowed byte.
   *
   * ```markdown
   *   | | a |
   * > | | x |
   *       ^
   * ```
   *
   * @type {State}
   */
  function headDelimiterNok(code) {
    // Note: in `markdown-rs`, we need to reset, in `micromark-js` we don‘t.
    return nok(code);
  }

  /**
   * Before table body row.
   *
   * ```markdown
   *   | | a |
   *   | | - |
   * > | | b |
   *     ^
   * ```
   *
   * @type {State}
   */
  function bodyRowStart(code) {
    // Note: in `markdown-rs` we need to manually take care of a prefix,
    // but in `micromark-js` that is done for us, so if we’re here, we’re
    // never at whitespace.
    effects.enter('tableRow');
    return bodyRowBreak(code);
  }

  /**
   * At break in table body row.
   *
   * ```markdown
   *   | | a |
   *   | | - |
   * > | | b |
   *     ^
   *       ^
   *         ^
   * ```
   *
   * @type {State}
   */
  function bodyRowBreak(code) {
    if (code === 124) {
      effects.enter('tableCellDivider');
      effects.consume(code);
      effects.exit('tableCellDivider');
      return bodyRowBreak;
    }
    if (code === null || markdownLineEnding(code)) {
      effects.exit('tableRow');
      return ok(code);
    }
    if (markdownSpace(code)) {
      return factorySpace(effects, bodyRowBreak, "whitespace")(code);
    }

    // Anything else is cell content.
    effects.enter("data");
    return bodyRowData(code);
  }

  /**
   * In table body row data.
   *
   * ```markdown
   *   | | a |
   *   | | - |
   * > | | b |
   *       ^
   * ```
   *
   * @type {State}
   */
  function bodyRowData(code) {
    if (code === null || code === 124 || markdownLineEndingOrSpace(code)) {
      effects.exit("data");
      return bodyRowBreak(code);
    }
    effects.consume(code);
    return code === 92 ? bodyRowEscape : bodyRowData;
  }

  /**
   * In table body row escape.
   *
   * ```markdown
   *   | | a    |
   *   | | ---- |
   * > | | b\-c |
   *         ^
   * ```
   *
   * @type {State}
   */
  function bodyRowEscape(code) {
    if (code === 92 || code === 124) {
      effects.consume(code);
      return bodyRowData;
    }
    return bodyRowData(code);
  }
}

/** @type {Resolver} */

function resolveTable(events, context) {
  let index = -1;
  let inFirstCellAwaitingPipe = true;
  /** @type {RowKind} */
  let rowKind = 0;
  /** @type {Range} */
  let lastCell = [0, 0, 0, 0];
  /** @type {Range} */
  let cell = [0, 0, 0, 0];
  let afterHeadAwaitingFirstBodyRow = false;
  let lastTableEnd = 0;
  /** @type {Token | undefined} */
  let currentTable;
  /** @type {Token | undefined} */
  let currentBody;
  /** @type {Token | undefined} */
  let currentCell;
  const map = new EditMap();
  while (++index < events.length) {
    const event = events[index];
    const token = event[1];
    if (event[0] === 'enter') {
      // Start of head.
      if (token.type === 'tableHead') {
        afterHeadAwaitingFirstBodyRow = false;

        // Inject previous (body end and) table end.
        if (lastTableEnd !== 0) {
          flushTableEnd(map, context, lastTableEnd, currentTable, currentBody);
          currentBody = undefined;
          lastTableEnd = 0;
        }

        // Inject table start.
        currentTable = {
          type: 'table',
          start: Object.assign({}, token.start),
          // Note: correct end is set later.
          end: Object.assign({}, token.end)
        };
        map.add(index, 0, [['enter', currentTable, context]]);
      } else if (token.type === 'tableRow' || token.type === 'tableDelimiterRow') {
        inFirstCellAwaitingPipe = true;
        currentCell = undefined;
        lastCell = [0, 0, 0, 0];
        cell = [0, index + 1, 0, 0];

        // Inject table body start.
        if (afterHeadAwaitingFirstBodyRow) {
          afterHeadAwaitingFirstBodyRow = false;
          currentBody = {
            type: 'tableBody',
            start: Object.assign({}, token.start),
            // Note: correct end is set later.
            end: Object.assign({}, token.end)
          };
          map.add(index, 0, [['enter', currentBody, context]]);
        }
        rowKind = token.type === 'tableDelimiterRow' ? 2 : currentBody ? 3 : 1;
      }
      // Cell data.
      else if (rowKind && (token.type === "data" || token.type === 'tableDelimiterMarker' || token.type === 'tableDelimiterFiller')) {
        inFirstCellAwaitingPipe = false;

        // First value in cell.
        if (cell[2] === 0) {
          if (lastCell[1] !== 0) {
            cell[0] = cell[1];
            currentCell = flushCell(map, context, lastCell, rowKind, undefined, currentCell);
            lastCell = [0, 0, 0, 0];
          }
          cell[2] = index;
        }
      } else if (token.type === 'tableCellDivider') {
        if (inFirstCellAwaitingPipe) {
          inFirstCellAwaitingPipe = false;
        } else {
          if (lastCell[1] !== 0) {
            cell[0] = cell[1];
            currentCell = flushCell(map, context, lastCell, rowKind, undefined, currentCell);
          }
          lastCell = cell;
          cell = [lastCell[1], index, 0, 0];
        }
      }
    }
    // Exit events.
    else if (token.type === 'tableHead') {
      afterHeadAwaitingFirstBodyRow = true;
      lastTableEnd = index;
    } else if (token.type === 'tableRow' || token.type === 'tableDelimiterRow') {
      lastTableEnd = index;
      if (lastCell[1] !== 0) {
        cell[0] = cell[1];
        currentCell = flushCell(map, context, lastCell, rowKind, index, currentCell);
      } else if (cell[1] !== 0) {
        currentCell = flushCell(map, context, cell, rowKind, index, currentCell);
      }
      rowKind = 0;
    } else if (rowKind && (token.type === "data" || token.type === 'tableDelimiterMarker' || token.type === 'tableDelimiterFiller')) {
      cell[3] = index;
    }
  }
  if (lastTableEnd !== 0) {
    flushTableEnd(map, context, lastTableEnd, currentTable, currentBody);
  }
  map.consume(context.events);

  // To do: move this into `html`, when events are exposed there.
  // That’s what `markdown-rs` does.
  // That needs updates to `mdast-util-gfm-table`.
  index = -1;
  while (++index < context.events.length) {
    const event = context.events[index];
    if (event[0] === 'enter' && event[1].type === 'table') {
      event[1]._align = gfmTableAlign(context.events, index);
    }
  }
  return events;
}

/**
 * Generate a cell.
 *
 * @param {EditMap} map
 * @param {Readonly<TokenizeContext>} context
 * @param {Readonly<Range>} range
 * @param {RowKind} rowKind
 * @param {number | undefined} rowEnd
 * @param {Token | undefined} previousCell
 * @returns {Token | undefined}
 */
// eslint-disable-next-line max-params
function flushCell(map, context, range, rowKind, rowEnd, previousCell) {
  // `markdown-rs` uses:
  // rowKind === 2 ? 'tableDelimiterCell' : 'tableCell'
  const groupName = rowKind === 1 ? 'tableHeader' : rowKind === 2 ? 'tableDelimiter' : 'tableData';
  // `markdown-rs` uses:
  // rowKind === 2 ? 'tableDelimiterCellValue' : 'tableCellText'
  const valueName = 'tableContent';

  // Insert an exit for the previous cell, if there is one.
  //
  // ```markdown
  // > | | aa | bb | cc |
  //          ^-- exit
  //           ^^^^-- this cell
  // ```
  if (range[0] !== 0) {
    previousCell.end = Object.assign({}, getPoint(context.events, range[0]));
    map.add(range[0], 0, [['exit', previousCell, context]]);
  }

  // Insert enter of this cell.
  //
  // ```markdown
  // > | | aa | bb | cc |
  //           ^-- enter
  //           ^^^^-- this cell
  // ```
  const now = getPoint(context.events, range[1]);
  previousCell = {
    type: groupName,
    start: Object.assign({}, now),
    // Note: correct end is set later.
    end: Object.assign({}, now)
  };
  map.add(range[1], 0, [['enter', previousCell, context]]);

  // Insert text start at first data start and end at last data end, and
  // remove events between.
  //
  // ```markdown
  // > | | aa | bb | cc |
  //            ^-- enter
  //             ^-- exit
  //           ^^^^-- this cell
  // ```
  if (range[2] !== 0) {
    const relatedStart = getPoint(context.events, range[2]);
    const relatedEnd = getPoint(context.events, range[3]);
    /** @type {Token} */
    const valueToken = {
      type: valueName,
      start: Object.assign({}, relatedStart),
      end: Object.assign({}, relatedEnd)
    };
    map.add(range[2], 0, [['enter', valueToken, context]]);
    if (rowKind !== 2) {
      // Fix positional info on remaining events
      const start = context.events[range[2]];
      const end = context.events[range[3]];
      start[1].end = Object.assign({}, end[1].end);
      start[1].type = "chunkText";
      start[1].contentType = "text";

      // Remove if needed.
      if (range[3] > range[2] + 1) {
        const a = range[2] + 1;
        const b = range[3] - range[2] - 1;
        map.add(a, b, []);
      }
    }
    map.add(range[3] + 1, 0, [['exit', valueToken, context]]);
  }

  // Insert an exit for the last cell, if at the row end.
  //
  // ```markdown
  // > | | aa | bb | cc |
  //                    ^-- exit
  //               ^^^^^^-- this cell (the last one contains two “between” parts)
  // ```
  if (rowEnd !== undefined) {
    previousCell.end = Object.assign({}, getPoint(context.events, rowEnd));
    map.add(rowEnd, 0, [['exit', previousCell, context]]);
    previousCell = undefined;
  }
  return previousCell;
}

/**
 * Generate table end (and table body end).
 *
 * @param {Readonly<EditMap>} map
 * @param {Readonly<TokenizeContext>} context
 * @param {number} index
 * @param {Token} table
 * @param {Token | undefined} tableBody
 */
// eslint-disable-next-line max-params
function flushTableEnd(map, context, index, table, tableBody) {
  /** @type {Array<Event>} */
  const exits = [];
  const related = getPoint(context.events, index);
  if (tableBody) {
    tableBody.end = Object.assign({}, related);
    exits.push(['exit', tableBody, context]);
  }
  table.end = Object.assign({}, related);
  exits.push(['exit', table, context]);
  map.add(index + 1, 0, exits);
}

/**
 * @param {Readonly<Array<Event>>} events
 * @param {number} index
 * @returns {Readonly<Point>}
 */
function getPoint(events, index) {
  const event = events[index];
  const side = event[0] === 'enter' ? 'start' : 'end';
  return event[1][side];
}

/**
 * @import {Construct, State, TokenizeContext, Tokenizer} from 'micromark-util-types'
 */

/** @type {Construct} */
const mathFlow = {
  tokenize: tokenizeMathFenced,
  concrete: true,
  name: 'mathFlow'
};

/** @type {Construct} */
const nonLazyContinuation = {
  tokenize: tokenizeNonLazyContinuation,
  partial: true
};

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeMathFenced(effects, ok, nok) {
  const self = this;
  const tail = self.events[self.events.length - 1];
  const initialSize = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
  let sizeOpen = 0;
  return start;

  /**
   * Start of math.
   *
   * ```markdown
   * > | $$
   *     ^
   *   | \frac{1}{2}
   *   | $$
   * ```
   *
   * @type {State}
   */
  function start(code) {
    effects.enter('mathFlow');
    effects.enter('mathFlowFence');
    effects.enter('mathFlowFenceSequence');
    return sequenceOpen(code);
  }

  /**
   * In opening fence sequence.
   *
   * ```markdown
   * > | $$
   *      ^
   *   | \frac{1}{2}
   *   | $$
   * ```
   *
   * @type {State}
   */
  function sequenceOpen(code) {
    if (code === 36) {
      effects.consume(code);
      sizeOpen++;
      return sequenceOpen;
    }
    if (sizeOpen < 2) {
      return nok(code);
    }
    effects.exit('mathFlowFenceSequence');
    return factorySpace(effects, metaBefore, "whitespace")(code);
  }

  /**
   * In opening fence, before meta.
   *
   * ```markdown
   * > | $$asciimath
   *       ^
   *   | x < y
   *   | $$
   * ```
   *
   * @type {State}
   */

  function metaBefore(code) {
    if (code === null || markdownLineEnding(code)) {
      return metaAfter(code);
    }
    effects.enter('mathFlowFenceMeta');
    effects.enter("chunkString", {
      contentType: "string"
    });
    return meta(code);
  }

  /**
   * In meta.
   *
   * ```markdown
   * > | $$asciimath
   *        ^
   *   | x < y
   *   | $$
   * ```
   *
   * @type {State}
   */
  function meta(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit("chunkString");
      effects.exit('mathFlowFenceMeta');
      return metaAfter(code);
    }
    if (code === 36) {
      return nok(code);
    }
    effects.consume(code);
    return meta;
  }

  /**
   * After meta.
   *
   * ```markdown
   * > | $$
   *       ^
   *   | \frac{1}{2}
   *   | $$
   * ```
   *
   * @type {State}
   */
  function metaAfter(code) {
    // Guaranteed to be eol/eof.
    effects.exit('mathFlowFence');
    if (self.interrupt) {
      return ok(code);
    }
    return effects.attempt(nonLazyContinuation, beforeNonLazyContinuation, after)(code);
  }

  /**
   * After eol/eof in math, at a non-lazy closing fence or content.
   *
   * ```markdown
   *   | $$
   * > | \frac{1}{2}
   *     ^
   * > | $$
   *     ^
   * ```
   *
   * @type {State}
   */
  function beforeNonLazyContinuation(code) {
    return effects.attempt({
      tokenize: tokenizeClosingFence,
      partial: true
    }, after, contentStart)(code);
  }

  /**
   * Before math content, definitely not before a closing fence.
   *
   * ```markdown
   *   | $$
   * > | \frac{1}{2}
   *     ^
   *   | $$
   * ```
   *
   * @type {State}
   */
  function contentStart(code) {
    return (initialSize ? factorySpace(effects, beforeContentChunk, "linePrefix", initialSize + 1) : beforeContentChunk)(code);
  }

  /**
   * Before math content, after optional prefix.
   *
   * ```markdown
   *   | $$
   * > | \frac{1}{2}
   *     ^
   *   | $$
   * ```
   *
   * @type {State}
   */
  function beforeContentChunk(code) {
    if (code === null) {
      return after(code);
    }
    if (markdownLineEnding(code)) {
      return effects.attempt(nonLazyContinuation, beforeNonLazyContinuation, after)(code);
    }
    effects.enter('mathFlowValue');
    return contentChunk(code);
  }

  /**
   * In math content.
   *
   * ```markdown
   *   | $$
   * > | \frac{1}{2}
   *      ^
   *   | $$
   * ```
   *
   * @type {State}
   */
  function contentChunk(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit('mathFlowValue');
      return beforeContentChunk(code);
    }
    effects.consume(code);
    return contentChunk;
  }

  /**
   * After math (ha!).
   *
   * ```markdown
   *   | $$
   *   | \frac{1}{2}
   * > | $$
   *       ^
   * ```
   *
   * @type {State}
   */
  function after(code) {
    effects.exit('mathFlow');
    return ok(code);
  }

  /** @type {Tokenizer} */
  function tokenizeClosingFence(effects, ok, nok) {
    let size = 0;
    /**
     * Before closing fence, at optional whitespace.
     *
     * ```markdown
     *   | $$
     *   | \frac{1}{2}
     * > | $$
     *     ^
     * ```
     */
    return factorySpace(effects, beforeSequenceClose, "linePrefix", self.parser.constructs.disable.null.includes('codeIndented') ? undefined : 4);

    /**
     * In closing fence, after optional whitespace, at sequence.
     *
     * ```markdown
     *   | $$
     *   | \frac{1}{2}
     * > | $$
     *     ^
     * ```
     *
     * @type {State}
     */
    function beforeSequenceClose(code) {
      effects.enter('mathFlowFence');
      effects.enter('mathFlowFenceSequence');
      return sequenceClose(code);
    }

    /**
     * In closing fence sequence.
     *
     * ```markdown
     *   | $$
     *   | \frac{1}{2}
     * > | $$
     *      ^
     * ```
     *
     * @type {State}
     */
    function sequenceClose(code) {
      if (code === 36) {
        size++;
        effects.consume(code);
        return sequenceClose;
      }
      if (size < sizeOpen) {
        return nok(code);
      }
      effects.exit('mathFlowFenceSequence');
      return factorySpace(effects, afterSequenceClose, "whitespace")(code);
    }

    /**
     * After closing fence sequence, after optional whitespace.
     *
     * ```markdown
     *   | $$
     *   | \frac{1}{2}
     * > | $$
     *       ^
     * ```
     *
     * @type {State}
     */
    function afterSequenceClose(code) {
      if (code === null || markdownLineEnding(code)) {
        effects.exit('mathFlowFence');
        return ok(code);
      }
      return nok(code);
    }
  }
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeNonLazyContinuation(effects, ok, nok) {
  const self = this;
  return start;

  /** @type {State} */
  function start(code) {
    if (code === null) {
      return ok(code);
    }
    effects.enter("lineEnding");
    effects.consume(code);
    effects.exit("lineEnding");
    return lineStart;
  }

  /** @type {State} */
  function lineStart(code) {
    return self.parser.lazy[self.now().line] ? nok(code) : ok(code);
  }
}

/**
 * @import {Options} from 'micromark-extension-math'
 * @import {Construct, Previous, Resolver, State, Token, TokenizeContext, Tokenizer} from 'micromark-util-types'
 */

/**
 * @param {Options | null | undefined} [options={}]
 *   Configuration (default: `{}`).
 * @returns {Construct}
 *   Construct.
 */
function mathText(options) {
  const options_ = {};
  let single = options_.singleDollarTextMath;
  if (single === null || single === undefined) {
    single = true;
  }
  return {
    tokenize: tokenizeMathText,
    resolve: resolveMathText,
    previous,
    name: 'mathText'
  };

  /**
   * @this {TokenizeContext}
   * @type {Tokenizer}
   */
  function tokenizeMathText(effects, ok, nok) {
    let sizeOpen = 0;
    /** @type {number} */
    let size;
    /** @type {Token} */
    let token;
    return start;

    /**
     * Start of math (text).
     *
     * ```markdown
     * > | $a$
     *     ^
     * > | \$a$
     *      ^
     * ```
     *
     * @type {State}
     */
    function start(code) {
      effects.enter('mathText');
      effects.enter('mathTextSequence');
      return sequenceOpen(code);
    }

    /**
     * In opening sequence.
     *
     * ```markdown
     * > | $a$
     *     ^
     * ```
     *
     * @type {State}
     */

    function sequenceOpen(code) {
      if (code === 36) {
        effects.consume(code);
        sizeOpen++;
        return sequenceOpen;
      }

      // Not enough markers in the sequence.
      if (sizeOpen < 2 && !single) {
        return nok(code);
      }
      effects.exit('mathTextSequence');
      return between(code);
    }

    /**
     * Between something and something else.
     *
     * ```markdown
     * > | $a$
     *      ^^
     * ```
     *
     * @type {State}
     */
    function between(code) {
      if (code === null) {
        return nok(code);
      }
      if (code === 36) {
        token = effects.enter('mathTextSequence');
        size = 0;
        return sequenceClose(code);
      }

      // Tabs don’t work, and virtual spaces don’t make sense.
      if (code === 32) {
        effects.enter('space');
        effects.consume(code);
        effects.exit('space');
        return between;
      }
      if (markdownLineEnding(code)) {
        effects.enter("lineEnding");
        effects.consume(code);
        effects.exit("lineEnding");
        return between;
      }

      // Data.
      effects.enter('mathTextData');
      return data(code);
    }

    /**
     * In data.
     *
     * ```markdown
     * > | $a$
     *      ^
     * ```
     *
     * @type {State}
     */
    function data(code) {
      if (code === null || code === 32 || code === 36 || markdownLineEnding(code)) {
        effects.exit('mathTextData');
        return between(code);
      }
      effects.consume(code);
      return data;
    }

    /**
     * In closing sequence.
     *
     * ```markdown
     * > | `a`
     *       ^
     * ```
     *
     * @type {State}
     */

    function sequenceClose(code) {
      // More.
      if (code === 36) {
        effects.consume(code);
        size++;
        return sequenceClose;
      }

      // Done!
      if (size === sizeOpen) {
        effects.exit('mathTextSequence');
        effects.exit('mathText');
        return ok(code);
      }

      // More or less accents: mark as data.
      token.type = 'mathTextData';
      return data(code);
    }
  }
}

/** @type {Resolver} */
function resolveMathText(events) {
  let tailExitIndex = events.length - 4;
  let headEnterIndex = 3;
  /** @type {number} */
  let index;
  /** @type {number | undefined} */
  let enter;

  // If we start and end with an EOL or a space.
  if ((events[headEnterIndex][1].type === "lineEnding" || events[headEnterIndex][1].type === 'space') && (events[tailExitIndex][1].type === "lineEnding" || events[tailExitIndex][1].type === 'space')) {
    index = headEnterIndex;

    // And we have data.
    while (++index < tailExitIndex) {
      if (events[index][1].type === 'mathTextData') {
        // Then we have padding.
        events[tailExitIndex][1].type = 'mathTextPadding';
        events[headEnterIndex][1].type = 'mathTextPadding';
        headEnterIndex += 2;
        tailExitIndex -= 2;
        break;
      }
    }
  }

  // Merge adjacent spaces and data.
  index = headEnterIndex - 1;
  tailExitIndex++;
  while (++index <= tailExitIndex) {
    if (enter === undefined) {
      if (index !== tailExitIndex && events[index][1].type !== "lineEnding") {
        enter = index;
      }
    } else if (index === tailExitIndex || events[index][1].type === "lineEnding") {
      events[enter][1].type = 'mathTextData';
      if (index !== enter + 2) {
        events[enter][1].end = events[index - 1][1].end;
        events.splice(enter + 2, index - enter - 2);
        tailExitIndex -= index - enter - 2;
        index = enter + 2;
      }
      enter = undefined;
    }
  }
  return events;
}

/**
 * @this {TokenizeContext}
 * @type {Previous}
 */
function previous(code) {
  // If there is a previous code, there will always be a tail.
  return code !== 36 || this.events[this.events.length - 1][1].type === "characterEscape";
}

/**
 * @import {Options} from 'micromark-extension-math'
 * @import {Extension} from 'micromark-util-types'
 */


/**
 * Create an extension for `micromark` to enable math syntax.
 *
 * @param {Options | null | undefined} [options={}]
 *   Configuration (default: `{}`).
 * @returns {Extension}
 *   Extension for `micromark` that can be passed in `extensions`, to
 *   enable math syntax.
 */
function math(options) {
  return {
    flow: {
      [36]: mathFlow
    },
    text: {
      [36]: mathText()
    }
  };
}

var sharedExports = requireShared();

// @ts-check


/** @typedef {import("micromark-util-types").Event} Event */
/** @typedef {import("micromark-util-types").ParseOptions} MicromarkParseOptions */
/** @typedef {import("micromark-util-types").State} State */
/** @typedef {import("micromark-util-types").Token} Token */
/** @typedef {import("micromark-util-types").Tokenizer} Tokenizer */
/** @typedef {import("markdownlint").MicromarkToken} MicromarkToken */
/** @typedef {import("./micromark-types.d.mts")} */

/**
 * Gets the Markdown text for a Micromark token.
 *
 * @param {string} markdown Markdown content.
 * @param {Token} token Micromark token.
 * @returns {string} Token text.
 */
function getText(markdown, token) {
  return markdown.slice(token.start.offset, token.end.offset);
}

/**
 * Parse options.
 *
 * @typedef {Object} ParseOptions
 * @property {boolean} [freezeTokens] Whether to freeze output Tokens.
 */

/**
 * Parses a Markdown document and returns Micromark events.
 *
 * @param {string} markdown Markdown document.
 * @param {MicromarkParseOptions} [micromarkParseOptions] Options for micromark.
 * @returns {Event[]} Micromark events.
 */
function getEvents(
  markdown,
  micromarkParseOptions = {}
) {
  // Customize extensions list to add useful extensions
  const extensions = [
    directive(),
    gfmAutolinkLiteral(),
    gfmFootnote(),
    gfmTable(),
    math(),
    ...(micromarkParseOptions.extensions || [])
  ];

  // // Shim labelEnd to identify undefined link labels
  /** @type {Event[][]} */
  const artificialEventLists = [];
  const tokenizeOriginal = labelEnd.tokenize;

  /** @type {Tokenizer} */
  function tokenizeShim(effects, okOriginal, nokOriginal) {
    // eslint-disable-next-line consistent-this, unicorn/no-this-assignment, no-invalid-this
    const tokenizeContext = this;
    const events = tokenizeContext.events;

    /** @type {State} */
    const nokShim = (code) => {
      // Find start of label (image or link)
      let indexStart = events.length;
      while (--indexStart >= 0) {
        const event = events[indexStart];
        const [ kind, token ] = event;
        if (kind === "enter") {
          const { type } = token;
          if ((type === "labelImage") || (type === "labelLink")) {
            // Found it
            break;
          }
        }
      }

      // If found...
      if (indexStart >= 0) {
        // Create artificial enter/exit events and replicate all data/lineEnding events within
        const eventStart = events[indexStart];
        const [ , eventStartToken ] = eventStart;
        const eventEnd = events[events.length - 1];
        const [ , eventEndToken ] = eventEnd;
        /** @type {Token} */
        const undefinedReferenceType = {
          "type": "undefinedReferenceShortcut",
          "start": eventStartToken.start,
          "end": eventEndToken.end
        };
        /** @type {Token} */
        const undefinedReference = {
          "type": "undefinedReference",
          "start": eventStartToken.start,
          "end": eventEndToken.end
        };
        const eventsToReplicate = events
          .slice(indexStart)
          .filter((event) => {
            const [ , eventToken ] = event;
            const { type } = eventToken;
            return (type === "data") || (type === "lineEnding");
          });

        // Determine the type of the undefined reference
        const previousUndefinedEvent = (artificialEventLists.length > 0) && artificialEventLists[artificialEventLists.length - 1][0];
        const previousUndefinedToken = previousUndefinedEvent && previousUndefinedEvent[1];
        if (
          previousUndefinedToken &&
          (previousUndefinedToken.end.line === undefinedReferenceType.start.line) &&
          (previousUndefinedToken.end.column === undefinedReferenceType.start.column)
        ) {
          // Previous undefined reference event is immediately before this one
          if (eventsToReplicate.length === 0) {
            // The pair represent a collapsed reference (ex: [...][])
            previousUndefinedToken.type = "undefinedReferenceCollapsed";
            previousUndefinedToken.end = eventEndToken.end;
          } else {
            // The pair represent a full reference (ex: [...][...])
            undefinedReferenceType.type = "undefinedReferenceFull";
            undefinedReferenceType.start = previousUndefinedToken.start;
            artificialEventLists.pop();
          }
        }

        // Create artificial event list and replicate content
        const text = eventsToReplicate
          .filter((event) => event[0] === "enter")
          .map((event) => getText(markdown, event[1]))
          .join("")
          .trim();
        if ((text.length > 0) && !text.includes("]")) {
          /** @type {Event[]} */
          const artificialEvents = [];
          artificialEvents.push(
            [ "enter", undefinedReferenceType, tokenizeContext ],
            [ "enter", undefinedReference, tokenizeContext ]
          );
          for (const event of eventsToReplicate) {
            const [ kind, token ] = event;
            // Copy token because the current object will get modified by the parser
            artificialEvents.push([ kind, { ...token }, tokenizeContext ]);
          }
          artificialEvents.push(
            [ "exit", undefinedReference, tokenizeContext ],
            [ "exit", undefinedReferenceType, tokenizeContext ]
          );
          artificialEventLists.push(artificialEvents);
        }
      }

      // Continue with original behavior
      return nokOriginal(code);
    };

    // Shim nok handler of labelEnd's tokenize
    return tokenizeOriginal.call(tokenizeContext, effects, okOriginal, nokShim);
  }

  try {
    // Shim labelEnd behavior to detect undefined references
    labelEnd.tokenize = tokenizeShim;

    // Use micromark to parse document into Events
    const encoding = undefined;
    const eol = true;
    const parseContext = parse$1({ ...micromarkParseOptions, extensions });
    const chunks = preprocess()(markdown, encoding, eol);
    const events = postprocess(parseContext.document().write(chunks));

    // Append artificial events and return all events
    // eslint-disable-next-line unicorn/prefer-spread
    return events.concat(...artificialEventLists);
  } finally {
    // Restore shimmed labelEnd behavior
    labelEnd.tokenize = tokenizeOriginal;
  }
}

/**
 * Parses a Markdown document and returns micromark tokens (internal).
 *
 * @param {string} markdown Markdown document.
 * @param {ParseOptions} [parseOptions] Options.
 * @param {MicromarkParseOptions} [micromarkParseOptions] Options for micromark.
 * @param {number} [lineDelta] Offset for start/end line.
 * @param {MicromarkToken} [ancestor] Parent of top-most tokens.
 * @returns {MicromarkToken[]} Micromark tokens.
 */
function parseInternal(
  markdown,
  parseOptions = {},
  micromarkParseOptions = {},
  lineDelta = 0,
  ancestor = undefined
) {
  // Get options
  const freezeTokens = Boolean(parseOptions.freezeTokens);

  // Use micromark to parse document into Events
  const events = getEvents(markdown, micromarkParseOptions);

  // Create Token objects
  const document = [];
  let flatTokens = [];
  /** @type {MicromarkToken} */
  const root = {
    "type": "data",
    "startLine": -1,
    "startColumn": -1,
    "endLine": -1,
    "endColumn": -1,
    "text": "ROOT",
    "children": document,
    "parent": null
  };
  const history = [ root ];
  let current = root;
  /** @type {MicromarkParseOptions | null} */
  let reparseOptions = null;
  let lines = null;
  let skipHtmlFlowChildren = false;
  for (const event of events) {
    const [ kind, token ] = event;
    const { type, start, end } = token;
    const { "column": startColumn, "line": startLine } = start;
    const { "column": endColumn, "line": endLine } = end;
    const text = getText(markdown, token);
    if ((kind === "enter") && !skipHtmlFlowChildren) {
      const previous = current;
      history.push(previous);
      current = {
        type,
        "startLine": startLine + lineDelta,
        startColumn,
        "endLine": endLine + lineDelta,
        endColumn,
        text,
        "children": [],
        "parent": ((previous === root) ? (ancestor || null) : previous)
      };
      if (ancestor) {
        Object.defineProperty(current, sharedExports.htmlFlowSymbol, { "value": true });
      }
      previous.children.push(current);
      flatTokens.push(current);
      if ((current.type === "htmlFlow") && !micromarkHelpersExports.isHtmlFlowComment(current)) {
        skipHtmlFlowChildren = true;
        if (!reparseOptions || !lines) {
          reparseOptions = {
            ...micromarkParseOptions,
            "extensions": [
              {
                "disable": {
                  "null": [ "codeIndented", "htmlFlow" ]
                }
              }
            ]
          };
          lines = markdown.split(sharedExports.newLineRe);
        }
        const reparseMarkdown = lines
          .slice(current.startLine - 1, current.endLine)
          .join("\n");
        const tokens = parseInternal(
          reparseMarkdown,
          parseOptions,
          reparseOptions,
          current.startLine - 1,
          current
        );
        current.children = tokens;
        // Avoid stack overflow of Array.push(...spread)
        // eslint-disable-next-line unicorn/prefer-spread
        flatTokens = flatTokens.concat(tokens[sharedExports.flatTokensSymbol]);
      }
    } else if (kind === "exit") {
      if (type === "htmlFlow") {
        skipHtmlFlowChildren = false;
      }
      if (!skipHtmlFlowChildren) {
        if (freezeTokens) {
          Object.freeze(current.children);
          Object.freeze(current);
        }
        // @ts-ignore
        current = history.pop();
      }
    }
  }

  // Return document
  Object.defineProperty(document, sharedExports.flatTokensSymbol, { "value": flatTokens });
  if (freezeTokens) {
    Object.freeze(document);
  }
  return document;
}

/**
 * Parses a Markdown document and returns micromark tokens.
 *
 * @param {string} markdown Markdown document.
 * @param {ParseOptions} [parseOptions] Options.
 * @returns {MicromarkToken[]} Micromark tokens.
 */
function parse(markdown, parseOptions) {
  return parseInternal(markdown, parseOptions);
}

// @ts-check


const ignoredChildTypes = new Set(
  [ "codeFencedFence", "definition", "reference", "resource" ]
);

/** @type {import("markdownlint").Rule} */
const md044 = {
  "names": [ "MD044", "proper-names" ],
  "description": "Proper names should have the correct capitalization",
  "tags": [ "spelling" ],
  "parser": "micromark",
  "function": function MD044(params, onError) {
    let names = params.config.names;
    names = Array.isArray(names) ? names : [];
    names.sort((a, b) => (b.length - a.length) || a.localeCompare(b));
    if (names.length === 0) {
      // Nothing to check; avoid doing any work
      return;
    }
    const codeBlocks = params.config.code_blocks;
    const includeCodeBlocks =
      (codeBlocks === undefined) ? true : !!codeBlocks;
    const htmlElements = params.config.html_elements;
    const includeHtmlElements =
      (htmlElements === undefined) ? true : !!htmlElements;
    const scannedTypes = new Set([ "data" ]);
    if (includeCodeBlocks) {
      scannedTypes.add("codeFlowValue");
      scannedTypes.add("codeTextData");
    }
    if (includeHtmlElements) {
      scannedTypes.add("htmlFlowData");
      scannedTypes.add("htmlTextData");
    }
    const contentTokens =
      micromarkHelpersExports.filterByPredicate(
        params.parsers.micromark.tokens,
        (token) => scannedTypes.has(token.type),
        (token) => (
          token.children.filter((t) => !ignoredChildTypes.has(t.type))
        )
      );
    /** @type {import("../helpers/helpers.cjs").FileRange[]} */
    const exclusions = [];
    const scannedTokens = new Set();
    for (const name of names) {
      const escapedName = helpersExports.escapeForRegExp(name);
      const startNamePattern = /^\W/.test(name) ? "" : "\\b_*";
      const endNamePattern = /\W$/.test(name) ? "" : "_*\\b";
      const namePattern = `(${startNamePattern})(${escapedName})${endNamePattern}`;
      const nameRe = new RegExp(namePattern, "gi");
      for (const token of contentTokens) {
        let match = null;
        while ((match = nameRe.exec(token.text)) !== null) {
          const [ , leftMatch, nameMatch ] = match;
          const column = token.startColumn + match.index + leftMatch.length;
          const length = nameMatch.length;
          const lineNumber = token.startLine;
          /** @type {import("../helpers/helpers.cjs").FileRange} */
          const nameRange = {
            "startLine": lineNumber,
            "startColumn": column,
            "endLine": lineNumber,
            "endColumn": column + length - 1
          };
          if (
            !names.includes(nameMatch) &&
            !exclusions.some((exclusion) => helpersExports.hasOverlap(exclusion, nameRange))
          ) {
            /** @type {import("../helpers/helpers.cjs").FileRange[]} */
            let autolinkRanges = [];
            if (!scannedTokens.has(token)) {
              autolinkRanges = micromarkHelpersExports.filterByTypes(parse(token.text), [ "literalAutolink" ])
                .map((tok) => ({
                  "startLine": lineNumber,
                  "startColumn": token.startColumn + tok.startColumn - 1,
                  "endLine": lineNumber,
                  "endColumn": token.endColumn + tok.endColumn - 1
                }));
              exclusions.push(...autolinkRanges);
              scannedTokens.add(token);
            }
            if (!autolinkRanges.some((autolinkRange) => helpersExports.hasOverlap(autolinkRange, nameRange))) {
              helpersExports.addErrorDetailIf(
                onError,
                token.startLine,
                name,
                nameMatch,
                undefined,
                undefined,
                [ column, length ],
                {
                  "editColumn": column,
                  "deleteCount": length,
                  "insertText": name
                }
              );
            }
          }
          exclusions.push(nameRange);
        }
      }
    }
  }
};

// @ts-check


const altRe = helpersExports.getHtmlAttributeRe("alt");
const ariaHiddenRe = helpersExports.getHtmlAttributeRe("aria-hidden");

/** @type {import("markdownlint").Rule} */
const md045 = {
  "names": [ "MD045", "no-alt-text" ],
  "description": "Images should have alternate text (alt text)",
  "tags": [ "accessibility", "images" ],
  "parser": "micromark",
  "function": function MD045(params, onError) {
    // Process Markdown images
    const images = filterByTypesCached([ "image" ]);
    for (const image of images) {
      const labelTexts = micromarkHelpersExports.getDescendantsByType(image, [ "label", "labelText" ]);
      if (labelTexts.some((labelText) => labelText.text.length === 0)) {
        const range = (image.startLine === image.endLine) ?
          [ image.startColumn, image.endColumn - image.startColumn ] :
          undefined;
        helpersExports.addError(
          onError,
          image.startLine,
          undefined,
          undefined,
          range
        );
      }
    }

    // Process HTML images
    const htmlTexts = filterByTypesCached([ "htmlText" ], true);
    for (const htmlText of htmlTexts) {
      const { startColumn, startLine, text } = htmlText;
      const htmlTagInfo = micromarkHelpersExports.getHtmlTagInfo(htmlText);
      if (
        htmlTagInfo &&
        !htmlTagInfo.close &&
        (htmlTagInfo.name.toLowerCase() === "img") &&
        !altRe.test(text) &&
        (ariaHiddenRe.exec(text)?.[1].toLowerCase() !== "true")
      ) {
        const range = [
          startColumn,
          text.replace(helpersExports.nextLinesRe, "").length
        ];
        helpersExports.addError(
          onError,
          startLine,
          undefined,
          undefined,
          range
        );
      }
    }
  }
};

// @ts-check


const tokenTypeToStyle = {
  "codeFenced": "fenced",
  "codeIndented": "indented"
};

/** @type {import("markdownlint").Rule} */
const md046 = {
  "names": [ "MD046", "code-block-style" ],
  "description": "Code block style",
  "tags": [ "code" ],
  "parser": "micromark",
  "function": function MD046(params, onError) {
    let expectedStyle = String(params.config.style || "consistent");
    for (const token of filterByTypesCached([ "codeFenced", "codeIndented" ])) {
      const { startLine, type } = token;
      if (expectedStyle === "consistent") {
        expectedStyle = tokenTypeToStyle[type];
      }
      helpersExports.addErrorDetailIf(
        onError,
        startLine,
        expectedStyle,
        tokenTypeToStyle[type]);
    }
  }
};

// @ts-check


/** @type {import("markdownlint").Rule} */
const md047 = {
  "names": [ "MD047", "single-trailing-newline" ],
  "description": "Files should end with a single newline character",
  "tags": [ "blank_lines" ],
  "parser": "none",
  "function": function MD047(params, onError) {
    const lastLineNumber = params.lines.length;
    const lastLine = params.lines[lastLineNumber - 1];
    if (!helpersExports.isBlankLine(lastLine)) {
      helpersExports.addError(
        onError,
        lastLineNumber,
        undefined,
        undefined,
        [ lastLine.length, 1 ],
        {
          "insertText": "\n",
          "editColumn": lastLine.length + 1
        }
      );
    }
  }
};

// @ts-check


/**
 * Return the string representation of a fence markup character.
 *
 * @param {string} markup Fence string.
 * @returns {"tilde" | "backtick"} String representation.
 */
function fencedCodeBlockStyleFor(markup) {
  switch (markup[0]) {
    case "~":
      return "tilde";
    default:
      return "backtick";
  }
}
/** @type {import("markdownlint").Rule} */
const md048 = {
  "names": [ "MD048", "code-fence-style" ],
  "description": "Code fence style",
  "tags": [ "code" ],
  "parser": "micromark",
  "function": function MD048(params, onError) {
    const style = String(params.config.style || "consistent");
    let expectedStyle = style;
    const codeFenceds = filterByTypesCached([ "codeFenced" ]);
    for (const codeFenced of codeFenceds) {
      const codeFencedFenceSequence =
        micromarkHelpersExports.getDescendantsByType(codeFenced, [ "codeFencedFence", "codeFencedFenceSequence" ])[0];
      const { startLine, text } = codeFencedFenceSequence;
      if (expectedStyle === "consistent") {
        expectedStyle = fencedCodeBlockStyleFor(text);
      }
      helpersExports.addErrorDetailIf(
        onError,
        startLine,
        expectedStyle,
        fencedCodeBlockStyleFor(text)
      );
    }
  }
};

// @ts-check


const intrawordRe = /^\w$/;

/**
 * Return the string representation of a emphasis or strong markup character.
 *
 * @param {string} markup Emphasis or strong string.
 * @returns {"asterisk" | "underscore"} String representation.
 */
function emphasisOrStrongStyleFor(markup) {
  switch (markup[0]) {
    case "*":
      return "asterisk";
    default:
      return "underscore";
  }
}
/**
 * @param {import("markdownlint").RuleParams} params Rule parameters.
 * @param {import("markdownlint").RuleOnError} onError Error-reporting callback.
 * @param {import("micromark-util-types").TokenType} type Token type.
 * @param {import("micromark-util-types").TokenType} typeSequence Token sequence type.
 * @param {"*" | "**"} asterisk Asterisk kind.
 * @param {"_" | "__"} underline Underline kind.
 * @param {"asterisk" | "consistent" | "underscore"} style Style string.
 */
const impl =
  (params, onError, type, typeSequence, asterisk, underline, style = "consistent") => {
    const { lines, parsers } = params;
    const emphasisTokens = micromarkHelpersExports.filterByPredicate(
      parsers.micromark.tokens,
      (token) => token.type === type,
      (token) => ((token.type === "htmlFlow") ? [] : token.children)
    );
    for (const token of emphasisTokens) {
      const sequences = micromarkHelpersExports.getDescendantsByType(token, [ typeSequence ]);
      const startSequence = sequences[0];
      const endSequence = sequences[sequences.length - 1];
      if (startSequence && endSequence) {
        const markupStyle = emphasisOrStrongStyleFor(startSequence.text);
        if (style === "consistent") {
          style = markupStyle;
        }
        if (style !== markupStyle) {
          const underscoreIntraword = (style === "underscore") && (
            intrawordRe.test(
              lines[startSequence.startLine - 1][startSequence.startColumn - 2]
            ) ||
            intrawordRe.test(
              lines[endSequence.endLine - 1][endSequence.endColumn - 1]
            )
          );
          if (!underscoreIntraword) {
            for (const sequence of [ startSequence, endSequence ]) {
              helpersExports.addError(
                onError,
                sequence.startLine,
                `Expected: ${style}; Actual: ${markupStyle}`,
                undefined,
                [ sequence.startColumn, sequence.text.length ],
                {
                  "editColumn": sequence.startColumn,
                  "deleteCount": sequence.text.length,
                  "insertText": (style === "asterisk") ? asterisk : underline
                }
              );
            }
          }
        }
      }
    }
  };

/** @type {import("markdownlint").Rule[]} */
const md049md050 = [
  {
    "names": [ "MD049", "emphasis-style" ],
    "description": "Emphasis style",
    "tags": [ "emphasis" ],
    "parser": "micromark",
    "function": function MD049(params, onError) {
      return impl(
        params,
        onError,
        "emphasis",
        "emphasisSequence",
        "*",
        "_",
        params.config.style || undefined
      );
    }
  },
  {
    "names": [ "MD050", "strong-style" ],
    "description": "Strong style",
    "tags": [ "emphasis" ],
    "parser": "micromark",
    "function": function MD050(params, onError) {
      return impl(
        params,
        onError,
        "strong",
        "strongSequence",
        "**",
        "__",
        params.config.style || undefined
      );
    }
  }
];

// @ts-check


// Regular expression for identifying HTML anchor names
const idRe = helpersExports.getHtmlAttributeRe("id");
const nameRe = helpersExports.getHtmlAttributeRe("name");
const anchorRe = /\{(#[a-z\d]+(?:[-_][a-z\d]+)*)\}/gu;
const lineFragmentRe = /^#(?:L\d+(?:C\d+)?-L\d+(?:C\d+)?|L\d+)$/;

// Sets for filtering heading tokens during conversion
const childrenExclude = new Set([ "image", "reference", "resource" ]);
const tokensInclude = new Set(
  [ "characterEscapeValue", "codeTextData", "data", "mathTextData" ]
);

/**
 * Converts a Markdown heading into an HTML fragment according to the rules
 * used by GitHub.
 *
 * @param {import("markdownlint").MicromarkToken} headingText Heading text token.
 * @returns {string} Fragment string for heading.
 */
function convertHeadingToHTMLFragment(headingText) {
  const inlineText =
    micromarkHelpersExports.filterByPredicate(
      headingText.children,
      (token) => tokensInclude.has(token.type),
      (token) => (childrenExclude.has(token.type) ? [] : token.children)
    )
      .map((token) => token.text)
      .join("");
  return "#" + encodeURIComponent(
    inlineText
      .toLowerCase()
      // RegExp source with Ruby's \p{Word} expanded into its General Categories
      // https://github.com/gjtorikian/html-pipeline/blob/main/lib/html/pipeline/toc_filter.rb
      // https://ruby-doc.org/core-3.0.2/Regexp.html
      .replace(
        /[^\p{Letter}\p{Mark}\p{Number}\p{Connector_Punctuation}\- ]/gu,
        ""
      )
      .replace(/ /gu, "-")
  );
}

/**
 * Unescapes the text of a String-type micromark Token.
 *
 * @param {import("markdownlint").MicromarkToken} token String-type micromark Token.
 * @returns {string} Unescaped token text.
 */
function unescapeStringTokenText(token) {
  return micromarkHelpersExports.filterByTypes(token.children, [ "characterEscapeValue", "data" ])
    .map((child) => child.text)
    .join("");
}

/** @type {import("markdownlint").Rule} */
const md051 = {
  "names": [ "MD051", "link-fragments" ],
  "description": "Link fragments should be valid",
  "tags": [ "links" ],
  "parser": "micromark",
  "function": function MD051(params, onError) {
    const ignoreCase = params.config.ignore_case || false;
    const ignoredPattern = params.config.ignored_pattern || "";
    const ignoredPatternRe = new RegExp(ignoredPattern || "^$");
    /** @type {Map<string, number>} */
    const fragments = new Map([ [ "#top", 0 ] ]);

    // Process headings
    const headingTexts = filterByTypesCached([ "atxHeadingText", "setextHeadingText" ]);
    for (const headingText of headingTexts) {
      const fragment = convertHeadingToHTMLFragment(headingText);
      if (fragment !== "#") {
        const count = fragments.get(fragment) || 0;
        if (count) {
          fragments.set(`${fragment}-${count}`, 0);
        }
        fragments.set(fragment, count + 1);
        let match = null;
        while ((match = anchorRe.exec(headingText.text)) !== null) {
          const [ , anchor ] = match;
          if (!fragments.has(anchor)) {
            fragments.set(anchor, 1);
          }
        }
      }
    }

    // Process HTML anchors
    for (const token of filterByTypesCached([ "htmlText" ], true)) {
      const htmlTagInfo = micromarkHelpersExports.getHtmlTagInfo(token);
      if (htmlTagInfo && !htmlTagInfo.close) {
        const anchorMatch = idRe.exec(token.text) ||
          (htmlTagInfo.name.toLowerCase() === "a" && nameRe.exec(token.text));
        if (anchorMatch && anchorMatch.length > 0) {
          fragments.set(`#${anchorMatch[1]}`, 0);
        }
      }
    }

    // Process link and definition fragments
    /** @type {import("markdownlint").MicromarkTokenType[][]} */
    const parentChilds = [
      [ "link", "resourceDestinationString" ],
      [ "definition", "definitionDestinationString" ]
    ];
    for (const [ parentType, definitionType ] of parentChilds) {
      const links = filterByTypesCached([ parentType ])
        .filter(
          (link) => !((link.parent?.type === "atxHeadingText") && micromarkHelpersExports.isDocfxTab(link.parent.parent))
        );
      for (const link of links) {
        const definitions = micromarkHelpersExports.filterByTypes(link.children, [ definitionType ]);
        for (const definition of definitions) {
          const { endColumn, startColumn } = definition;
          const text = unescapeStringTokenText(definition);
          const textSliceOne = text.slice(1);
          const encodedText = `#${encodeURIComponent(textSliceOne)}`;
          if (
            (text.length > 1) &&
            text.startsWith("#") &&
            !fragments.has(encodedText) &&
            !lineFragmentRe.test(encodedText) &&
            !ignoredPatternRe.test(textSliceOne)
          ) {
            let context = undefined;
            let range = undefined;
            let fixInfo = undefined;
            if (link.startLine === link.endLine) {
              context = link.text;
              range = [ link.startColumn, link.endColumn - link.startColumn ];
              fixInfo = {
                "editColumn": startColumn,
                "deleteCount": endColumn - startColumn
              };
            }
            const textLower = text.toLowerCase();
            const mixedCaseKey = [ ...fragments.keys() ]
              .find((key) => textLower === key.toLowerCase());
            if (mixedCaseKey) {
              // @ts-ignore
              (fixInfo || {}).insertText = mixedCaseKey;
              if (!ignoreCase && (mixedCaseKey !== text)) {
                helpersExports.addError(
                  onError,
                  link.startLine,
                  `Expected: ${mixedCaseKey}; Actual: ${text}`,
                  context,
                  range,
                  fixInfo
                );
              }
            } else {
              helpersExports.addError(
                onError,
                link.startLine,
                undefined,
                context,
                range
              );
            }
          }
        }
      }
    }
  }
};

// @ts-check


/** @type {import("markdownlint").Rule} */
const md052 = {
  "names": [ "MD052", "reference-links-images" ],
  "description":
    "Reference links and images should use a label that is defined",
  "tags": [ "images", "links" ],
  "parser": "none",
  "function": function MD052(params, onError) {
    const { config, lines } = params;
    const shortcutSyntax = config.shortcut_syntax || false;
    const ignoredLabels = new Set(config.ignored_labels || [ "x" ]);
    const { definitions, references, shortcuts } = getReferenceLinkImageData();
    const entries = shortcutSyntax ?
      [ ...references.entries(), ...shortcuts.entries() ] :
      references.entries();
    // Look for links/images that use an undefined link reference
    for (const reference of entries) {
      const [ label, datas ] = reference;
      if (!definitions.has(label) && !ignoredLabels.has(label)) {
        for (const data of datas) {
          const [ lineIndex, index, length ] = data;
          // Context will be incomplete if reporting for a multi-line link
          const context = lines[lineIndex].slice(index, index + length);
          helpersExports.addError(
            onError,
            lineIndex + 1,
            `Missing link or image reference definition: "${label}"`,
            context,
            [ index + 1, context.length ]
          );
        }
      }
    }
  }
};

// @ts-check


const linkReferenceDefinitionRe = /^ {0,3}\[([^\]]*[^\\])\]:/;

/** @type {import("markdownlint").Rule} */
const md053 = {
  "names": [ "MD053", "link-image-reference-definitions" ],
  "description": "Link and image reference definitions should be needed",
  "tags": [ "images", "links" ],
  "parser": "none",
  "function": function MD053(params, onError) {
    const ignored = new Set(params.config.ignored_definitions || [ "//" ]);
    const lines = params.lines;
    const { references, shortcuts, definitions, duplicateDefinitions } =
      getReferenceLinkImageData();
    const singleLineDefinition = (line) => (
      line.replace(linkReferenceDefinitionRe, "").trim().length > 0
    );
    const deleteFixInfo = {
      "deleteCount": -1
    };
    // Look for unused link references (unreferenced by any link/image)
    for (const definition of definitions.entries()) {
      const [ label, [ lineIndex ] ] = definition;
      if (
        !ignored.has(label) &&
        !references.has(label) &&
        !shortcuts.has(label)
      ) {
        const line = lines[lineIndex];
        helpersExports.addError(
          onError,
          lineIndex + 1,
          `Unused link or image reference definition: "${label}"`,
          helpersExports.ellipsify(line),
          [ 1, line.length ],
          singleLineDefinition(line) ? deleteFixInfo : undefined
        );
      }
    }
    // Look for duplicate link references (defined more than once)
    for (const duplicateDefinition of duplicateDefinitions) {
      const [ label, lineIndex ] = duplicateDefinition;
      if (!ignored.has(label)) {
        const line = lines[lineIndex];
        helpersExports.addError(
          onError,
          lineIndex + 1,
          `Duplicate link or image reference definition: "${label}"`,
          helpersExports.ellipsify(line),
          [ 1, line.length ],
          singleLineDefinition(line) ? deleteFixInfo : undefined
        );
      }
    }
  }
};

// @ts-check


const backslashEscapeRe = /\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g;
const removeBackslashEscapes = (text) => text.replace(backslashEscapeRe, "$1");
const autolinkDisallowedRe = /[ <>]/;
const autolinkAble = (destination) => {
  try {
    // eslint-disable-next-line no-new
    new URL(destination);
  } catch {
    // Not an absolute URL
    return false;
  }
  return !autolinkDisallowedRe.test(destination);
};

/** @type {import("markdownlint").Rule} */
const md054 = {
  "names": [ "MD054", "link-image-style" ],
  "description": "Link and image style",
  "tags": [ "images", "links" ],
  "parser": "micromark",
  "function": (params, onError) => {
    const config = params.config;
    const autolink = (config.autolink === undefined) || !!config.autolink;
    const inline = (config.inline === undefined) || !!config.inline;
    const full = (config.full === undefined) || !!config.full;
    const collapsed = (config.collapsed === undefined) || !!config.collapsed;
    const shortcut = (config.shortcut === undefined) || !!config.shortcut;
    const urlInline = (config.url_inline === undefined) || !!config.url_inline;
    if (autolink && inline && full && collapsed && shortcut && urlInline) {
      // Everything allowed, nothing to check
      return;
    }
    const { definitions } = getReferenceLinkImageData();
    const links = filterByTypesCached([ "autolink", "image", "link" ]);
    for (const link of links) {
      let label = null;
      let destination = null;
      const {
        endColumn, endLine, startColumn, startLine, text, type
      } = link;
      const image = (type === "image");
      let isError = false;
      if (type === "autolink") {
        // link kind is an autolink
        destination = micromarkHelpersExports.getDescendantsByType(link, [ [ "autolinkEmail", "autolinkProtocol" ] ])[0]?.text;
        label = destination;
        isError = !autolink && Boolean(destination);
      } else {
        // link type is "image" or "link"
        label = micromarkHelpersExports.getDescendantsByType(link, [ "label", "labelText" ])[0].text;
        destination =
          micromarkHelpersExports.getDescendantsByType(link, [ "resource", "resourceDestination", [ "resourceDestinationLiteral", "resourceDestinationRaw" ], "resourceDestinationString" ])[0]?.text;
        if (destination) {
          // link kind is an inline link
          const title = micromarkHelpersExports.getDescendantsByType(link, [ "resource", "resourceTitle", "resourceTitleString" ])[0]?.text;
          isError = !inline || (
            !urlInline &&
            autolink &&
            !image &&
            !title &&
            (label === destination) &&
            autolinkAble(destination)
          );
        } else {
          // link kind is a full/collapsed/shortcut reference link
          const isShortcut = micromarkHelpersExports.getDescendantsByType(link, [ "reference" ]).length === 0;
          const referenceString = micromarkHelpersExports.getDescendantsByType(link, [ "reference", "referenceString" ])[0]?.text;
          const isCollapsed = (referenceString === undefined);
          const definition = definitions.get(referenceString || label);
          destination = definition && definition[1];
          isError = destination &&
            (isShortcut ? !shortcut : (isCollapsed ? !collapsed : !full));
        }
      }
      if (isError) {
        let range = undefined;
        let fixInfo = undefined;
        if (startLine === endLine) {
          range = [ startColumn, endColumn - startColumn ];
          let insertText = null;
          const canInline = (inline && label);
          const canAutolink = (autolink && !image && autolinkAble(destination));
          if (canInline && (urlInline || !canAutolink)) {
            // Most useful form
            const prefix = (image ? "!" : "");
            // @ts-ignore
            const escapedLabel = label.replace(/[[\]]/g, "\\$&");
            const escapedDestination = destination.replace(/[()]/g, "\\$&");
            insertText = `${prefix}[${escapedLabel}](${escapedDestination})`;
          } else if (canAutolink) {
            // Simplest form
            insertText = `<${removeBackslashEscapes(destination)}>`;
          }
          if (insertText) {
            fixInfo = {
              "editColumn": range[0],
              insertText,
              "deleteCount": range[1]
            };
          }
        }
        helpersExports.addErrorContext(
          onError,
          startLine,
          text.replace(helpersExports.nextLinesRe, ""),
          undefined,
          undefined,
          range,
          fixInfo
        );
      }
    }
  }
};

// @ts-check


const whitespaceTypes = new Set([ "linePrefix", "whitespace" ]);
const ignoreWhitespace = (tokens) => tokens.filter(
  (token) => !whitespaceTypes.has(token.type)
);
const firstOrNothing = (items) => items[0];
const lastOrNothing = (items) => items[items.length - 1];
const makeRange$1 = (start, end) => [ start, end - start + 1 ];

/** @typedef {import("micromark-extension-gfm-table")} */

/** @type {import("markdownlint").Rule} */
const md055 = {
  "names": [ "MD055", "table-pipe-style" ],
  "description": "Table pipe style",
  "tags": [ "table" ],
  "parser": "micromark",
  "function": function MD055(params, onError) {
    const style = String(params.config.style || "consistent");
    let expectedStyle = style;
    let expectedLeadingPipe =
      ((expectedStyle !== "no_leading_or_trailing") && (expectedStyle !== "trailing_only"));
    let expectedTrailingPipe =
      ((expectedStyle !== "no_leading_or_trailing") && (expectedStyle !== "leading_only"));
    const rows = filterByTypesCached([ "tableDelimiterRow", "tableRow" ]);
    for (const row of rows) {
      // The following uses of first/lastOrNothing lack fallback handling
      // because it seems not to be possible (i.e., 0% coverage)
      const firstCell = firstOrNothing(row.children);
      const leadingToken = firstOrNothing(ignoreWhitespace(firstCell.children));
      const actualLeadingPipe = (leadingToken.type === "tableCellDivider");
      const lastCell = lastOrNothing(row.children);
      const trailingToken = lastOrNothing(ignoreWhitespace(lastCell.children));
      const actualTrailingPipe = (trailingToken.type === "tableCellDivider");
      const actualStyle = actualLeadingPipe ?
        (actualTrailingPipe ? "leading_and_trailing" : "leading_only") :
        (actualTrailingPipe ? "trailing_only" : "no_leading_or_trailing");
      if (expectedStyle === "consistent") {
        expectedStyle = actualStyle;
        expectedLeadingPipe = actualLeadingPipe;
        expectedTrailingPipe = actualTrailingPipe;
      }
      if (actualLeadingPipe !== expectedLeadingPipe) {
        helpersExports.addErrorDetailIf(
          onError,
          firstCell.startLine,
          expectedStyle,
          actualStyle,
          `${expectedLeadingPipe ? "Missing" : "Unexpected"} leading pipe`,
          undefined,
          makeRange$1(row.startColumn, firstCell.startColumn)
        );
      }
      if (actualTrailingPipe !== expectedTrailingPipe) {
        helpersExports.addErrorDetailIf(
          onError,
          lastCell.endLine,
          expectedStyle,
          actualStyle,
          `${expectedTrailingPipe ? "Missing" : "Unexpected"} trailing pipe`,
          undefined,
          makeRange$1(lastCell.endColumn - 1, row.endColumn - 1)
        );
      }
    }
  }
};

// @ts-check


const makeRange = (start, end) => [ start, end - start + 1 ];

/** @typedef {import("micromark-extension-gfm-table")} */

/** @type {import("markdownlint").Rule} */
const md056 = {
  "names": [ "MD056", "table-column-count" ],
  "description": "Table column count",
  "tags": [ "table" ],
  "parser": "micromark",
  "function": function MD056(params, onError) {
    const rows = filterByTypesCached([ "tableDelimiterRow", "tableRow" ]);
    let expectedCount = 0;
    let currentTable = null;
    for (const row of rows) {
      const table = micromarkHelpersExports.getParentOfType(row, [ "table" ]);
      if (currentTable !== table) {
        expectedCount = 0;
        currentTable = table;
      }
      const cells = row.children.filter((child) => [ "tableData", "tableDelimiter", "tableHeader" ].includes(child.type));
      const actualCount = cells.length;
      expectedCount ||= actualCount;
      let detail = undefined;
      let range = undefined;
      if (actualCount < expectedCount) {
        detail = "Too few cells, row will be missing data";
        range = [ row.endColumn - 1, 1 ];
      } else if (expectedCount < actualCount) {
        detail = "Too many cells, extra data will be missing";
        range = makeRange(cells[expectedCount].startColumn, row.endColumn - 1);
      }
      helpersExports.addErrorDetailIf(
        onError,
        row.endLine,
        expectedCount,
        actualCount,
        detail,
        undefined,
        range
      );
    }
  }
};

// @ts-check


/** @typedef {import("micromark-extension-gfm-table")} */

/** @type {import("markdownlint").Rule} */
const md058 = {
  "names": [ "MD058", "blanks-around-tables" ],
  "description": "Tables should be surrounded by blank lines",
  "tags": [ "table" ],
  "parser": "micromark",
  "function": function MD058(params, onError) {
    const { lines } = params;
    const blockQuotePrefixes = filterByTypesCached([ "blockQuotePrefix", "linePrefix" ]);

    // For every table...
    const tables = filterByTypesCached([ "table" ]);
    for (const table of tables) {

      // Look for a blank line above the table
      const firstLineNumber = table.startLine;
      if (!helpersExports.isBlankLine(lines[firstLineNumber - 2])) {
        helpersExports.addErrorContext(
          onError,
          firstLineNumber,
          lines[firstLineNumber - 1].trim(),
          undefined,
          undefined,
          undefined,
          {
            "insertText": micromarkHelpersExports.getBlockQuotePrefixText(blockQuotePrefixes, firstLineNumber)
          }
        );
      }

      // Look for a blank line below the table
      const lastLineNumber = table.endLine;
      if (!helpersExports.isBlankLine(lines[lastLineNumber])) {
        helpersExports.addErrorContext(
          onError,
          lastLineNumber,
          lines[lastLineNumber - 1].trim(),
          undefined,
          undefined,
          undefined,
          {
            "lineNumber": lastLineNumber + 1,
            "insertText": micromarkHelpersExports.getBlockQuotePrefixText(blockQuotePrefixes, lastLineNumber)
          }
        );
      }
    }
  }
};

// @ts-check


/** @typedef {import("markdownlint").MicromarkTokenType} MicromarkTokenType */
/** @type {Set<MicromarkTokenType>} */
const allowedChildrenTypes = new Set([
  "codeText",
  "htmlText"
]);
const defaultProhibitedTexts = [
  "click here",
  "here",
  "link",
  "more"
];

/**
 * Normalizes a string by removing extra whitespaces and punctuation.
 *
 * @param {string} str String to normalize.
 * @returns {string} Normalized string.
 */
function normalize(str) {
  return str
    .replace(/[\W_]+/g, " ")
    .replace(/\s+/g, " ")
    .toLowerCase()
    .trim();
}

/** @type {import("markdownlint").Rule} */
const md059 = {
  "names": [ "MD059", "descriptive-link-text" ],
  "description": "Link text should be descriptive",
  "tags": [ "accessibility", "links" ],
  "parser": "micromark",
  "function": function MD059(params, onError) {
    const prohibitedTexts = new Set(
      (params.config.prohibited_texts || defaultProhibitedTexts).map(normalize)
    );
    if (prohibitedTexts.size > 0) {
      const links = filterByTypesCached([ "link" ]);
      for (const link of links) {
        const labelTexts = micromarkHelpersExports.getDescendantsByType(link, [ "label", "labelText" ]);
        for (const labelText of labelTexts) {
          const { children, endColumn, endLine, parent, startColumn, startLine, text } = labelText;
          if (
            !children.some((child) => allowedChildrenTypes.has(child.type)) &&
            prohibitedTexts.has(normalize(text))
          ) {
            const range = (startLine === endLine) ?
              [ startColumn, endColumn - startColumn ] :
              undefined;
            helpersExports.addErrorContext(
              onError,
              startLine,
              // @ts-ignore
              parent.text,
              undefined,
              undefined,
              range
            );
          }
        }
      }
    }
  }
};

// @ts-check

const [ md019, md021 ] = md019md021;
const [ md049, md050 ] = md049md050;

const rules = [
  md001,
  // md002: Deprecated and removed
  md003,
  md004,
  md005,
  // md006: Deprecated and removed
  md007,
  md009,
  md010,
  md011,
  md012,
  md013,
  md014,
  md018,
  md019,
  md020,
  md021,
  md022,
  md023,
  md024,
  md025,
  md026,
  md027,
  md028,
  md029,
  md030,
  md031,
  md032,
  md033,
  md034,
  md035,
  md036,
  md037,
  md038,
  md039,
  md040,
  md041,
  md042,
  md043,
  md044,
  md045,
  md046,
  md047,
  md048,
  md049,
  md050,
  md051,
  md052,
  md053,
  md054,
  md055,
  md056,
  // md057: See https://github.com/markdownlint/markdownlint
  md058,
  md059
];
for (const rule of rules) {
  const name = rule.names[0].toLowerCase();
  // eslint-disable-next-line dot-notation
  rule["information"] = new URL(`${homepage}/blob/v${version}/doc/${name}.md`);
}

// @ts-check

/**
 * Result of a call to parseConfiguration.
 *
 * @typedef {Object} ParseConfigurationResult
 * @property {Object | null} config Configuration object if successful.
 * @property {string | null} message Error message if an error occurred.
 */

/**
 * Parse the content of a configuration file.
 *
 * @param {string} name Name of the configuration file.
 * @param {string} content Configuration content.
 * @param {import("./markdownlint.mjs").ConfigurationParser[]} [parsers] Parsing function(s).
 * @returns {ParseConfigurationResult} Parse configuration result.
 */
function parseConfiguration(name, content, parsers) {
  let config = null;
  let message = null;
  const errors = [];
  let index = 0;
  // Try each parser
  const failed = (parsers || [ JSON.parse ]).every((parser) => {
    try {
      const result = parser(content);
      config = (result && (typeof result === "object") && !Array.isArray(result)) ? result : {};
      // Succeeded
      return false;
    } catch (error) {
      errors.push(`Parser ${index++}: ${error.message}`);
    }
    // Failed, try the next parser
    return true;
  });
  // Message if unable to parse
  if (failed) {
    errors.unshift(`Unable to parse '${name}'`);
    message = errors.join("; ");
  }
  return {
    config,
    message
  };
}

// @ts-check


/**
 * Validate the list of rules for structure and reuse.
 *
 * @param {Rule[]} ruleList List of rules.
 * @param {boolean} synchronous Whether to execute synchronously.
 * @returns {Error | null} Error message if validation fails.
 */
function validateRuleList(ruleList, synchronous) {
  let result = null;
  if (ruleList.length === rules.length) {
    // No need to validate if only using built-in rules
    return result;
  }
  const allIds = {};
  for (const [ index, rule ] of ruleList.entries()) {
    const customIndex = index - rules.length;
    // eslint-disable-next-line jsdoc/require-jsdoc
    function newError(property, value) {
      return new Error(
        `Property '${property}' of custom rule at index ${customIndex} is incorrect: '${value}'.`);
    }
    for (const property of [ "names", "tags" ]) {
      const value = rule[property];
      if (!result &&
        (!value || !Array.isArray(value) || (value.length === 0) ||
         !value.every(helpersExports.isString) || value.some(helpersExports.isEmptyString))) {
        result = newError(property, value);
      }
    }
    for (const propertyInfo of [
      [ "description", "string" ],
      [ "function", "function" ]
    ]) {
      const property = propertyInfo[0];
      const value = rule[property];
      if (!result && (!value || (typeof value !== propertyInfo[1]))) {
        result = newError(property, value);
      }
    }
    if (
      !result &&
      (rule.parser !== undefined) &&
      (rule.parser !== "markdownit") &&
      (rule.parser !== "micromark") &&
      (rule.parser !== "none")
    ) {
      result = newError("parser", rule.parser);
    }
    if (
      !result &&
      rule.information &&
      !helpersExports.isUrl(rule.information)
    ) {
      result = newError("information", rule.information);
    }
    if (
      !result &&
      (rule.asynchronous !== undefined) &&
      (typeof rule.asynchronous !== "boolean")
    ) {
      result = newError("asynchronous", rule.asynchronous);
    }
    if (!result && rule.asynchronous && synchronous) ;
    if (!result) {
      for (const name of rule.names) {
        const nameUpper = name.toUpperCase();
        if (!result && (allIds[nameUpper] !== undefined)) {
          result = new Error("Name '" + name + "' of custom rule at index " +
            customIndex + " is already used as a name or tag.");
        }
        allIds[nameUpper] = true;
      }
      for (const tag of rule.tags) {
        const tagUpper = tag.toUpperCase();
        if (!result && allIds[tagUpper]) {
          result = new Error("Tag '" + tag + "' of custom rule at index " +
            customIndex + " is already used as a name.");
        }
        allIds[tagUpper] = false;
      }
    }
  }
  return result;
}

/**
 * Creates a LintResults instance with toString for pretty display.
 *
 * @param {Rule[]} ruleList List of rules.
 * @returns {LintResults} New LintResults instance.
 */
function newResults(ruleList) {
  const lintResults = {};
  // eslint-disable-next-line jsdoc/require-jsdoc
  function toString(useAlias) {
    let ruleNameToRule = null;
    const results = [];
    const keys = Object.keys(lintResults);
    keys.sort();
    for (const file of keys) {
      const fileResults = lintResults[file];
      if (Array.isArray(fileResults)) {
        for (const result of fileResults) {
          const ruleMoniker = result.ruleNames ?
            result.ruleNames.join("/") :
            (result.ruleName + "/" + result.ruleAlias);
          results.push(
            file + ": " +
            result.lineNumber + ": " +
            ruleMoniker + " " +
            result.ruleDescription +
            (result.errorDetail ?
              " [" + result.errorDetail + "]" :
              "") +
            (result.errorContext ?
              " [Context: \"" + result.errorContext + "\"]" :
              ""));
        }
      } else {
        if (!ruleNameToRule) {
          ruleNameToRule = {};
          for (const rule of ruleList) {
            const ruleName = rule.names[0].toUpperCase();
            ruleNameToRule[ruleName] = rule;
          }
        }
        for (const [ ruleName, ruleResults ] of Object.entries(fileResults)) {
          const rule = ruleNameToRule[ruleName.toUpperCase()];
          for (const lineNumber of ruleResults) {
            // @ts-ignore
            const nameIndex = Math.min(useAlias ? 1 : 0, rule.names.length - 1);
            const result =
              file + ": " +
              lineNumber + ": " +
              // @ts-ignore
              rule.names[nameIndex] + " " +
              // @ts-ignore
              rule.description;
            results.push(result);
          }
        }
      }
    }
    return results.join("\n");
  }
  Object.defineProperty(lintResults, "toString", { "value": toString });
  // @ts-ignore
  return lintResults;
}

/**
 * Remove front matter (if present at beginning of content).
 *
 * @param {string} content Markdown content.
 * @param {RegExp | null} frontMatter Regular expression to match front matter.
 * @returns {Object} Trimmed content and front matter lines.
 */
function removeFrontMatter(content, frontMatter) {
  let frontMatterLines = [];
  if (frontMatter) {
    const frontMatterMatch = content.match(frontMatter);
    if (frontMatterMatch && !frontMatterMatch.index) {
      const contentMatched = frontMatterMatch[0];
      content = content.slice(contentMatched.length);
      frontMatterLines = contentMatched.split(helpersExports.newLineRe);
      if ((frontMatterLines.length > 0) &&
          (frontMatterLines[frontMatterLines.length - 1] === "")) {
        frontMatterLines.length--;
      }
    }
  }
  return {
    "content": content,
    "frontMatterLines": frontMatterLines
  };
}

/**
 * Map rule names/tags to canonical rule name.
 *
 * @param {Rule[]} ruleList List of rules.
 * @returns {Object.<string, string[]>} Map of alias to rule name.
 */
function mapAliasToRuleNames(ruleList) {
  const aliasToRuleNames = {};
  // const tagToRuleNames = {};
  for (const rule of ruleList) {
    const ruleName = rule.names[0].toUpperCase();
    // The following is useful for updating README.md:
    // console.log(
    //   "* **[" + ruleName + "](doc/Rules.md#" + ruleName.toLowerCase() +
    //    ")** *" + rule.names.slice(1).join("/") + "* - " + rule.description);
    for (const name of rule.names) {
      const nameUpper = name.toUpperCase();
      aliasToRuleNames[nameUpper] = [ ruleName ];
    }
    for (const tag of rule.tags) {
      const tagUpper = tag.toUpperCase();
      const ruleNames = aliasToRuleNames[tagUpper] || [];
      ruleNames.push(ruleName);
      aliasToRuleNames[tagUpper] = ruleNames;
      // tagToRuleNames[tag] = ruleName;
    }
  }
  // The following is useful for updating README.md:
  // Object.keys(tagToRuleNames).sort().forEach(function forTag(tag) {
  //   console.log("* **" + tag + "** - " +
  //     aliasToRuleNames[tag.toUpperCase()].join(", "));
  // });
  // @ts-ignore
  return aliasToRuleNames;
}

/**
 * Apply (and normalize) configuration object.
 *
 * @param {Rule[]} ruleList List of rules.
 * @param {Configuration} config Configuration object.
 * @param {Object.<string, string[]>} aliasToRuleNames Map of alias to rule
 * names.
 * @returns {Configuration} Effective configuration.
 */
function getEffectiveConfig(ruleList, config, aliasToRuleNames) {
  const defaultKey = Object.keys(config).filter(
    (key) => key.toUpperCase() === "DEFAULT"
  );
  const ruleDefault = (defaultKey.length === 0) || !!config[defaultKey[0]];
  /** @type {Configuration} */
  const effectiveConfig = {};
  for (const rule of ruleList) {
    const ruleName = rule.names[0].toUpperCase();
    effectiveConfig[ruleName] = ruleDefault;
  }
  // for (const ruleName of deprecatedRuleNames) {
  //   effectiveConfig[ruleName] = false;
  // }
  for (const key of Object.keys(config)) {
    let value = config[key];
    if (value) {
      if (!(value instanceof Object)) {
        value = {};
      }
    } else {
      value = false;
    }
    const keyUpper = key.toUpperCase();
    for (const ruleName of (aliasToRuleNames[keyUpper] || [])) {
      effectiveConfig[ruleName] = value;
    }
  }
  return effectiveConfig;
}

/**
 * Result object for getEnabledRulesPerLineNumber.
 *
 * @typedef {Object} EnabledRulesPerLineNumberResult
 * @property {Configuration} effectiveConfig Effective configuration.
 * @property {any[]} enabledRulesPerLineNumber Enabled rules per line number.
 * @property {Rule[]} enabledRuleList Enabled rule list.
 */

/**
 * Create a mapping of enabled rules per line.
 *
 * @param {Rule[]} ruleList List of rules.
 * @param {string[]} lines List of content lines.
 * @param {string[]} frontMatterLines List of front matter lines.
 * @param {boolean} noInlineConfig Whether to allow inline configuration.
 * @param {Configuration} config Configuration object.
 * @param {ConfigurationParser[] | undefined} configParsers Configuration parsers.
 * @param {Object.<string, string[]>} aliasToRuleNames Map of alias to rule
 * names.
 * @returns {EnabledRulesPerLineNumberResult} Effective configuration and enabled rules per line number.
 */
function getEnabledRulesPerLineNumber(
  ruleList,
  lines,
  frontMatterLines,
  noInlineConfig,
  config,
  configParsers,
  aliasToRuleNames) {
  // Shared variables
  let enabledRules = {};
  let capturedRules = {};
  const allRuleNames = [];
  const enabledRulesPerLineNumber = new Array(1 + frontMatterLines.length);
  // Helper functions
  // eslint-disable-next-line jsdoc/require-jsdoc
  function handleInlineConfig(input, forEachMatch, forEachLine) {
    for (const [ lineIndex, line ] of input.entries()) {
      if (!noInlineConfig) {
        let match = null;
        while ((match = helpersExports.inlineCommentStartRe.exec(line))) {
          const action = match[2].toUpperCase();
          const startIndex = match.index + match[1].length;
          const endIndex = line.indexOf("-->", startIndex);
          if (endIndex === -1) {
            break;
          }
          const parameter = line.slice(startIndex, endIndex);
          forEachMatch(action, parameter, lineIndex + 1);
        }
      }
      if (forEachLine) {
        forEachLine();
      }
    }
  }
  // eslint-disable-next-line jsdoc/require-jsdoc
  function configureFile(action, parameter) {
    if (action === "CONFIGURE-FILE") {
      const { "config": parsed } = parseConfiguration(
        "CONFIGURE-FILE", parameter, configParsers
      );
      if (parsed) {
        config = {
          ...config,
          ...parsed
        };
      }
    }
  }
  // eslint-disable-next-line jsdoc/require-jsdoc
  function applyEnableDisable(action, parameter, state) {
    state = { ...state };
    const enabled = (action.startsWith("ENABLE"));
    const trimmed = parameter && parameter.trim();
    const items = trimmed ? trimmed.toUpperCase().split(/\s+/) : allRuleNames;
    for (const nameUpper of items) {
      for (const ruleName of (aliasToRuleNames[nameUpper] || [])) {
        state[ruleName] = enabled;
      }
    }
    return state;
  }
  // eslint-disable-next-line jsdoc/require-jsdoc
  function enableDisableFile(action, parameter) {
    if ((action === "ENABLE-FILE") || (action === "DISABLE-FILE")) {
      enabledRules = applyEnableDisable(action, parameter, enabledRules);
    }
  }
  // eslint-disable-next-line jsdoc/require-jsdoc
  function captureRestoreEnableDisable(action, parameter) {
    if (action === "CAPTURE") {
      capturedRules = enabledRules;
    } else if (action === "RESTORE") {
      enabledRules = capturedRules;
    } else if ((action === "ENABLE") || (action === "DISABLE")) {
      enabledRules = applyEnableDisable(action, parameter, enabledRules);
    }
  }
  // eslint-disable-next-line jsdoc/require-jsdoc
  function updateLineState() {
    enabledRulesPerLineNumber.push(enabledRules);
  }
  // eslint-disable-next-line jsdoc/require-jsdoc
  function disableLineNextLine(action, parameter, lineNumber) {
    const disableLine = (action === "DISABLE-LINE");
    const disableNextLine = (action === "DISABLE-NEXT-LINE");
    if (disableLine || disableNextLine) {
      const nextLineNumber =
        frontMatterLines.length + lineNumber + (disableNextLine ? 1 : 0);
      enabledRulesPerLineNumber[nextLineNumber] =
        applyEnableDisable(
          action,
          parameter,
          enabledRulesPerLineNumber[nextLineNumber]
        );
    }
  }
  // Handle inline comments
  handleInlineConfig([ lines.join("\n") ], configureFile);
  const effectiveConfig = getEffectiveConfig(
    ruleList, config, aliasToRuleNames);
  for (const rule of ruleList) {
    const ruleName = rule.names[0].toUpperCase();
    allRuleNames.push(ruleName);
    enabledRules[ruleName] = !!effectiveConfig[ruleName];
  }
  capturedRules = enabledRules;
  handleInlineConfig(lines, enableDisableFile);
  handleInlineConfig(lines, captureRestoreEnableDisable, updateLineState);
  handleInlineConfig(lines, disableLineNextLine);
  // Create the list of rules that are used at least once
  const enabledRuleList = [];
  for (const [ index, ruleName ] of allRuleNames.entries()) {
    if (enabledRulesPerLineNumber.some((enabledRulesForLine) => enabledRulesForLine[ruleName])) {
      enabledRuleList.push(ruleList[index]);
    }
  }
  // Return results
  return {
    effectiveConfig,
    enabledRulesPerLineNumber,
    enabledRuleList
  };
}

/**
 * Lints a string containing Markdown content.
 *
 * @param {Rule[]} ruleList List of rules.
 * @param {Object.<string, string[]>} aliasToRuleNames Map of alias to rule names.
 * @param {string} name Identifier for the content.
 * @param {string} content Markdown content.
 * @param {MarkdownItFactory} markdownItFactory Function to create a markdown-it parser.
 * @param {Configuration} config Configuration object.
 * @param {ConfigurationParser[] | undefined} configParsers Configuration parsers.
 * @param {RegExp | null} frontMatter Regular expression for front matter.
 * @param {boolean} handleRuleFailures Whether to handle exceptions in rules.
 * @param {boolean} noInlineConfig Whether to allow inline configuration.
 * @param {number} resultVersion Version of the LintResults object to return.
 * @param {boolean} synchronous Whether to execute synchronously.
 * @param {LintContentCallback} callback Callback (err, result) function.
 * @returns {void}
 */
function lintContent(
  ruleList,
  aliasToRuleNames,
  name,
  content,
  markdownItFactory,
  config,
  configParsers,
  frontMatter,
  handleRuleFailures,
  noInlineConfig,
  resultVersion,
  synchronous,
  callback) {
  // Provide a consistent error-reporting callback
  const callbackError = (error) => callback(error instanceof Error ? error : new Error(error));
  // Remove UTF-8 byte order marker (if present)
  content = content.replace(/^\uFEFF/, "");
  // Remove front matter
  const removeFrontMatterResult = removeFrontMatter(content, frontMatter);
  const { frontMatterLines } = removeFrontMatterResult;
  content = removeFrontMatterResult.content;
  // Get enabled rules per line (with HTML comments present)
  const { effectiveConfig, enabledRulesPerLineNumber, enabledRuleList } =
    getEnabledRulesPerLineNumber(
      ruleList,
      content.split(helpersExports.newLineRe),
      frontMatterLines,
      noInlineConfig,
      config,
      configParsers,
      aliasToRuleNames
    );
  const needMarkdownItTokens = enabledRuleList.some(
    (rule) => (rule.parser === "markdownit") || (rule.parser === undefined)
  );
  const needMicromarkTokens = enabledRuleList.some(
    (rule) => (rule.parser === "micromark")
  );
  const customRulesPresent = (ruleList.length !== rules.length);
  // Parse content into parser tokens
  const micromarkTokens = needMicromarkTokens ?
    parse(content, { "freezeTokens": customRulesPresent }) :
    [];
  // Hide the content of HTML comments from rules
  const preClearedContent = content;
  content = helpersExports.clearHtmlCommentText(content);
  // Parse content into lines and get markdown-it tokens
  const lines = content.split(helpersExports.newLineRe);
  // Function to run after fetching markdown-it tokens (when needed)
  const lintContentInternal = (markdownitTokens) => {
    // Create (frozen) parameters for rules
    /** @type {MarkdownParsers} */
    // @ts-ignore
    const parsersMarkdownIt = Object.freeze({
      "markdownit": Object.freeze({
        "tokens": markdownitTokens
      })
    });
    /** @type {MarkdownParsers} */
    // @ts-ignore
    const parsersMicromark = Object.freeze({
      "micromark": Object.freeze({
        "tokens": micromarkTokens
      })
    });
    /** @type {MarkdownParsers} */
    // @ts-ignore
    const parsersNone = Object.freeze({});
    const paramsBase = {
      name,
      version,
      "lines": Object.freeze(lines),
      "frontMatterLines": Object.freeze(frontMatterLines)
    };
    initialize({
      ...paramsBase,
      "parsers": parsersMicromark,
      "config": null
    });
    // Function to run for each rule
    let results = [];
    /**
     * @param {Rule} rule Rule.
     * @returns {Promise<void> | null} Promise.
     */
    const forRule = (rule) => {
      // Configure rule
      const ruleName = rule.names[0].toUpperCase();
      const tokens = {};
      let parsers = parsersNone;
      if (rule.parser === undefined) {
        tokens.tokens = markdownitTokens;
        parsers = parsersMarkdownIt;
      } else if (rule.parser === "markdownit") {
        parsers = parsersMarkdownIt;
      } else if (rule.parser === "micromark") {
        parsers = parsersMicromark;
      }
      const params = {
        ...paramsBase,
        ...tokens,
        parsers,
        "config": effectiveConfig[ruleName]
      };
      // eslint-disable-next-line jsdoc/require-jsdoc
      function throwError(property) {
        throw new Error(
          `Value of '${property}' passed to onError by '${ruleName}' is incorrect for '${name}'.`);
      }
      // eslint-disable-next-line jsdoc/require-jsdoc
      function onError(errorInfo) {
        if (!errorInfo ||
          !helpersExports.isNumber(errorInfo.lineNumber) ||
          (errorInfo.lineNumber < 1) ||
          (errorInfo.lineNumber > lines.length)) {
          throwError("lineNumber");
        }
        const lineNumber = errorInfo.lineNumber + frontMatterLines.length;
        if (!enabledRulesPerLineNumber[lineNumber][ruleName]) {
          return;
        }
        if (errorInfo.detail &&
          !helpersExports.isString(errorInfo.detail)) {
          throwError("detail");
        }
        if (errorInfo.context &&
          !helpersExports.isString(errorInfo.context)) {
          throwError("context");
        }
        if (errorInfo.information &&
          !helpersExports.isUrl(errorInfo.information)) {
          throwError("information");
        }
        if (errorInfo.range &&
          (!Array.isArray(errorInfo.range) ||
            (errorInfo.range.length !== 2) ||
            !helpersExports.isNumber(errorInfo.range[0]) ||
            (errorInfo.range[0] < 1) ||
            !helpersExports.isNumber(errorInfo.range[1]) ||
            (errorInfo.range[1] < 1) ||
            ((errorInfo.range[0] + errorInfo.range[1] - 1) >
            lines[errorInfo.lineNumber - 1].length))) {
          throwError("range");
        }
        const fixInfo = errorInfo.fixInfo;
        const cleanFixInfo = {};
        if (fixInfo) {
          if (!helpersExports.isObject(fixInfo)) {
            throwError("fixInfo");
          }
          if (fixInfo.lineNumber !== undefined) {
            if ((!helpersExports.isNumber(fixInfo.lineNumber) ||
              (fixInfo.lineNumber < 1) ||
              (fixInfo.lineNumber > lines.length))) {
              throwError("fixInfo.lineNumber");
            }
            cleanFixInfo.lineNumber =
              fixInfo.lineNumber + frontMatterLines.length;
          }
          const effectiveLineNumber = fixInfo.lineNumber || errorInfo.lineNumber;
          if (fixInfo.editColumn !== undefined) {
            if ((!helpersExports.isNumber(fixInfo.editColumn) ||
              (fixInfo.editColumn < 1) ||
              (fixInfo.editColumn >
                lines[effectiveLineNumber - 1].length + 1))) {
              throwError("fixInfo.editColumn");
            }
            cleanFixInfo.editColumn = fixInfo.editColumn;
          }
          if (fixInfo.deleteCount !== undefined) {
            if ((!helpersExports.isNumber(fixInfo.deleteCount) ||
              (fixInfo.deleteCount < -1) ||
              (fixInfo.deleteCount >
                lines[effectiveLineNumber - 1].length))) {
              throwError("fixInfo.deleteCount");
            }
            cleanFixInfo.deleteCount = fixInfo.deleteCount;
          }
          if (fixInfo.insertText !== undefined) {
            if (!helpersExports.isString(fixInfo.insertText)) {
              throwError("fixInfo.insertText");
            }
            cleanFixInfo.insertText = fixInfo.insertText;
          }
        }
        const information = errorInfo.information || rule.information;
        results.push({
          lineNumber,
          "ruleName": rule.names[0],
          "ruleNames": rule.names,
          "ruleDescription": rule.description,
          "ruleInformation": information ? information.href : null,
          "errorDetail": errorInfo.detail || null,
          "errorContext": errorInfo.context || null,
          "errorRange": errorInfo.range ? [ ...errorInfo.range ] : null,
          "fixInfo": fixInfo ? cleanFixInfo : null
        });
      }
      // Call (possibly external) rule function to report errors
      const catchCallsOnError = (error) => onError({
        "lineNumber": 1,
        "detail": `This rule threw an exception: ${error.message || error}`
      });
      const invokeRuleFunction = () => rule.function(params, onError);
      if (rule.asynchronous) {
        // Asynchronous rule, ensure it returns a Promise
        const ruleFunctionPromise =
          Promise.resolve().then(invokeRuleFunction);
        return handleRuleFailures ?
          ruleFunctionPromise.catch(catchCallsOnError) :
          ruleFunctionPromise;
      }
      // Synchronous rule
      try {
        invokeRuleFunction();
      } catch (error) {
        if (handleRuleFailures) {
          catchCallsOnError(error);
        } else {
          throw error;
        }
      }
      return null;
    };
    const formatResults = () => {
      // Sort results by rule name by line number
      results.sort((a, b) => (
        a.ruleName.localeCompare(b.ruleName) ||
        a.lineNumber - b.lineNumber
      ));
      if (resultVersion < 3) {
        // Remove fixInfo and multiple errors for the same rule and line number
        const noPrevious = {
          "ruleName": null,
          "lineNumber": -1
        };
        results = results.filter((error, index, array) => {
          delete error.fixInfo;
          const previous = array[index - 1] || noPrevious;
          return (
            (error.ruleName !== previous.ruleName) ||
            (error.lineNumber !== previous.lineNumber)
          );
        });
      }
      if (resultVersion === 0) {
        // Return a dictionary of rule->[line numbers]
        const dictionary = {};
        for (const error of results) {
          const ruleLines = dictionary[error.ruleName] || [];
          ruleLines.push(error.lineNumber);
          dictionary[error.ruleName] = ruleLines;
        }
        // @ts-ignore
        results = dictionary;
      } else if (resultVersion === 1) {
        // Use ruleAlias instead of ruleNames
        for (const error of results) {
          error.ruleAlias = error.ruleNames[1] || error.ruleName;
          delete error.ruleNames;
        }
      } else {
        // resultVersion 2 or 3: Remove unwanted ruleName
        for (const error of results) {
          delete error.ruleName;
        }
      }
      return results;
    };
    // Run all rules
    const ruleListAsync = enabledRuleList.filter((rule) => rule.asynchronous);
    const ruleListSync = enabledRuleList.filter((rule) => !rule.asynchronous);
    const ruleListAsyncFirst = [
      ...ruleListAsync,
      ...ruleListSync
    ];
    const callbackSuccess = () => callback(null, formatResults());
    try {
      const ruleResults = ruleListAsyncFirst.map(forRule);
      if (ruleListAsync.length > 0) {
        Promise.all(ruleResults.slice(0, ruleListAsync.length))
          .then(callbackSuccess)
          .catch(callbackError);
      } else {
        callbackSuccess();
      }
    } catch (error) {
      callbackError(error);
    } finally {
      initialize();
    }
  };
  if (!needMarkdownItTokens || synchronous) {
    // Need/able to call into markdown-it and lintContentInternal synchronously
    const markdownItTokens = needMarkdownItTokens ?
      deferRequireExports.requireMarkdownItCjs().getMarkdownItTokens(markdownItFactory(), preClearedContent, lines) :
      [];
    lintContentInternal(markdownItTokens);
  } else {
    // Need to call into markdown-it and lintContentInternal asynchronously
    Promise.all([
      // eslint-disable-next-line no-inline-comments
      import(/* webpackMode: "eager" */ './markdownit_BHsBNuWb.mjs').then(n => n.m),
      // eslint-disable-next-line no-promise-executor-return
      new Promise((resolve) => resolve(markdownItFactory()))
    ]).then(([ markdownitCjs, markdownIt ]) => {
      const markdownItTokens = markdownitCjs.getMarkdownItTokens(markdownIt, preClearedContent, lines);
      lintContentInternal(markdownItTokens);
    }).catch(callbackError);
  }
}

/**
 * Lints a file containing Markdown content.
 *
 * @param {Rule[]} ruleList List of rules.
 * @param {Object.<string, string[]>} aliasToRuleNames Map of alias to rule names.
 * @param {string} file Path of file to lint.
 * @param {MarkdownItFactory} markdownItFactory Function to create a markdown-it parser.
 * @param {Configuration} config Configuration object.
 * @param {ConfigurationParser[] | undefined} configParsers Configuration parsers.
 * @param {RegExp | null} frontMatter Regular expression for front matter.
 * @param {boolean} handleRuleFailures Whether to handle exceptions in rules.
 * @param {boolean} noInlineConfig Whether to allow inline configuration.
 * @param {number} resultVersion Version of the LintResults object to return.
 * @param {Object} fs File system implementation.
 * @param {boolean} synchronous Whether to execute synchronously.
 * @param {LintContentCallback} callback Callback (err, result) function.
 * @returns {void}
 */
function lintFile(
  ruleList,
  aliasToRuleNames,
  file,
  markdownItFactory,
  config,
  configParsers,
  frontMatter,
  handleRuleFailures,
  noInlineConfig,
  resultVersion,
  fs,
  synchronous,
  callback) {
  // eslint-disable-next-line jsdoc/require-jsdoc
  function lintContentWrapper(err, content) {
    if (err) {
      return callback(err);
    }
    return lintContent(
      ruleList,
      aliasToRuleNames,
      file,
      content,
      markdownItFactory,
      config,
      configParsers,
      frontMatter,
      handleRuleFailures,
      noInlineConfig,
      resultVersion,
      synchronous,
      callback
    );
  }
  // Make a/synchronous call to read file
  {
    fs.readFile(file, "utf8", lintContentWrapper);
  }
}

/**
 * Lint files and strings specified in the Options object.
 *
 * @param {Options | null} options Options object.
 * @param {boolean} synchronous Whether to execute synchronously.
 * @param {LintCallback} callback Callback (err, result) function.
 * @returns {void}
 */
function lintInput(options, synchronous, callback) {
  // Normalize inputs
  options = options || {};
  callback = callback || function noop() {};
  const customRuleList =
    [ options.customRules || [] ]
      .flat()
      .map((rule) => ({
        "names": helpersExports.cloneIfArray(rule.names),
        "description": rule.description,
        "information": helpersExports.cloneIfUrl(rule.information),
        "tags": helpersExports.cloneIfArray(rule.tags),
        "parser": rule.parser,
        "asynchronous": rule.asynchronous,
        "function": rule.function
      }));
  // eslint-disable-next-line unicorn/prefer-spread
  const ruleList = rules.concat(customRuleList);
  const ruleErr = validateRuleList(ruleList, synchronous);
  if (ruleErr) {
    callback(ruleErr);
    return;
  }
  let files = [];
  if (Array.isArray(options.files)) {
    files = [ ...options.files ];
  } else if (options.files) {
    files = [ String(options.files) ];
  }
  const strings = options.strings || {};
  const stringsKeys = Object.keys(strings);
  const config = options.config || { "default": true };
  const configParsers = options.configParsers || undefined;
  const frontMatter = (options.frontMatter === undefined) ?
    helpersExports.frontMatterRe :
    options.frontMatter;
  const handleRuleFailures = !!options.handleRuleFailures;
  const noInlineConfig = !!options.noInlineConfig;
  const resultVersion = (options.resultVersion === undefined) ?
    3 :
    options.resultVersion;
  const markdownItFactory =
    options.markdownItFactory ||
    (() => { throw new Error("The option 'markdownItFactory' was required (due to the option 'customRules' including a rule requiring the 'markdown-it' parser), but 'markdownItFactory' was not set."); });
  const fs$1 = options.fs || fs;
  const aliasToRuleNames = mapAliasToRuleNames(ruleList);
  const results = newResults(ruleList);
  let done = false;
  let concurrency = 0;
  // eslint-disable-next-line jsdoc/require-jsdoc
  function lintWorker() {
    let currentItem = null;
    // eslint-disable-next-line jsdoc/require-jsdoc
    function lintWorkerCallback(err, result) {
      concurrency--;
      if (err) {
        done = true;
        return callback(err);
      }
      results[currentItem] = result;
      {
        lintWorker();
      }
      return null;
    }
    if (done) ; else if (files.length > 0) {
      // Lint next file
      concurrency++;
      currentItem = files.shift();
      lintFile(
        ruleList,
        aliasToRuleNames,
        currentItem,
        markdownItFactory,
        config,
        configParsers,
        frontMatter,
        handleRuleFailures,
        noInlineConfig,
        resultVersion,
        fs$1,
        synchronous,
        lintWorkerCallback
      );
    } else if ((currentItem = stringsKeys.shift())) {
      // Lint next string
      concurrency++;
      lintContent(
        ruleList,
        aliasToRuleNames,
        currentItem,
        strings[currentItem] || "",
        markdownItFactory,
        config,
        configParsers,
        frontMatter,
        handleRuleFailures,
        noInlineConfig,
        resultVersion,
        synchronous,
        lintWorkerCallback
      );
    } else if (concurrency === 0) {
      // Finish
      done = true;
      return callback(null, results);
    }
    return null;
  }
  {
    // Testing on a Raspberry Pi 4 Model B with an artificial 5ms file access
    // delay suggests that a concurrency factor of 8 can eliminate the impact
    // of that delay (i.e., total time is the same as with no delay).
    lintWorker();
    lintWorker();
    lintWorker();
    lintWorker();
    lintWorker();
    lintWorker();
    lintWorker();
    lintWorker();
  }
}

/**
 * Lint specified Markdown files.
 *
 * @param {Options | null} options Configuration options.
 * @param {LintCallback} callback Callback (err, result) function.
 * @returns {void}
 */
function lintAsync(options, callback) {
  return lintInput(options, false, callback);
}

// Type declarations

/**
 * Function to implement rule logic.
 *
 * @callback RuleFunction
 * @param {RuleParams} params Rule parameters.
 * @param {RuleOnError} onError Error-reporting callback.
 * @returns {void}
 */

/* eslint-disable jsdoc/valid-types */

/**
 * Rule parameters.
 *
 * @typedef {Object} RuleParams
 * @property {string} name File/string name.
 * @property {MarkdownParsers} parsers Markdown parser data.
 * @property {readonly string[]} lines File/string lines.
 * @property {readonly string[]} frontMatterLines Front matter lines.
 * @property {RuleConfiguration} config Rule configuration.
 * @property {string} version Version of the markdownlint library.
 */

/* eslint-enable jsdoc/valid-types */

/**
 * Markdown parser data.
 *
 * @typedef {Object} MarkdownParsers
 * @property {ParserMarkdownIt} markdownit Markdown parser data from markdown-it (only present when Rule.parser is "markdownit").
 * @property {ParserMicromark} micromark Markdown parser data from micromark (only present when Rule.parser is "micromark").
 */

/**
 * Markdown parser data from markdown-it.
 *
 * @typedef {Object} ParserMarkdownIt
 * @property {MarkdownItToken[]} tokens Token objects from markdown-it.
 */

/**
 * Markdown parser data from micromark.
 *
 * @typedef {Object} ParserMicromark
 * @property {MicromarkToken[]} tokens Token objects from micromark.
 */

/**
 * markdown-it token.
 *
 * @typedef {Object} MarkdownItToken
 * @property {string[][]} attrs HTML attributes.
 * @property {boolean} block Block-level token.
 * @property {MarkdownItToken[]} children Child nodes.
 * @property {string} content Tag contents.
 * @property {boolean} hidden Ignore element.
 * @property {string} info Fence info.
 * @property {number} level Nesting level.
 * @property {number[]} map Beginning/ending line numbers.
 * @property {string} markup Markup text.
 * @property {Object} meta Arbitrary data.
 * @property {number} nesting Level change.
 * @property {string} tag HTML tag name.
 * @property {string} type Token type.
 * @property {number} lineNumber Line number (1-based).
 * @property {string} line Line content.
 */

/** @typedef {import("micromark-util-types").TokenType} MicromarkTokenType */

/**
 * micromark token.
 *
 * @typedef {Object} MicromarkToken
 * @property {MicromarkTokenType} type Token type.
 * @property {number} startLine Start line (1-based).
 * @property {number} startColumn Start column (1-based).
 * @property {number} endLine End line (1-based).
 * @property {number} endColumn End column (1-based).
 * @property {string} text Token text.
 * @property {MicromarkToken[]} children Child tokens.
 * @property {MicromarkToken | null} parent Parent token.
 */

/**
 * Error-reporting callback.
 *
 * @callback RuleOnError
 * @param {RuleOnErrorInfo} onErrorInfo Error information.
 * @returns {void}
 */

/**
 * Fix information for RuleOnError callback.
 *
 * @typedef {Object} RuleOnErrorInfo
 * @property {number} lineNumber Line number (1-based).
 * @property {string} [detail] Detail about the error.
 * @property {string} [context] Context for the error.
 * @property {URL} [information] Link to more information.
 * @property {number[]} [range] Column number (1-based) and length.
 * @property {RuleOnErrorFixInfo} [fixInfo] Fix information.
 */

/**
 * Fix information for RuleOnErrorInfo.
 *
 * @typedef {Object} RuleOnErrorFixInfo
 * @property {number} [lineNumber] Line number (1-based).
 * @property {number} [editColumn] Column of the fix (1-based).
 * @property {number} [deleteCount] Count of characters to delete.
 * @property {string} [insertText] Text to insert (after deleting).
 */

/**
 * RuleOnErrorInfo with all optional properties present.
 *
 * @typedef {Object} RuleOnErrorFixInfoNormalized
 * @property {number} lineNumber Line number (1-based).
 * @property {number} editColumn Column of the fix (1-based).
 * @property {number} deleteCount Count of characters to delete.
 * @property {string} insertText Text to insert (after deleting).
 */

/**
 * Rule definition.
 *
 * @typedef {Object} Rule
 * @property {string[]} names Rule name(s).
 * @property {string} description Rule description.
 * @property {URL} [information] Link to more information.
 * @property {string[]} tags Rule tag(s).
 * @property {"markdownit" | "micromark" | "none"} parser Parser used.
 * @property {boolean} [asynchronous] True if asynchronous.
 * @property {RuleFunction} function Rule implementation.
 */

/**
 * Method used by the markdown-it parser to parse input.
 *
 * @callback MarkdownItParse
 * @param {string} src Source string.
 * @param {Object} env Environment sandbox.
 * @returns {import("markdown-it").Token[]} Tokens.
 */

/**
 * Instance of the markdown-it parser.
 *
 * @typedef MarkdownIt
 * @property {MarkdownItParse} parse Method to parse input.
 */

/**
 * Gets an instance of the markdown-it parser. Any plugins should already have been loaded.
 *
 * @callback MarkdownItFactory
 * @returns {MarkdownIt|Promise<MarkdownIt>} Instance of the markdown-it parser.
 */

/**
 * Configuration options.
 *
 * @typedef {Object} Options
 * @property {Configuration} [config] Configuration object.
 * @property {ConfigurationParser[]} [configParsers] Configuration parsers.
 * @property {Rule[] | Rule} [customRules] Custom rules.
 * @property {string[] | string} [files] Files to lint.
 * @property {RegExp | null} [frontMatter] Front matter pattern.
 * @property {Object} [fs] File system implementation.
 * @property {boolean} [handleRuleFailures] True to catch exceptions.
 * @property {MarkdownItFactory} [markdownItFactory] Function to create a markdown-it parser.
 * @property {boolean} [noInlineConfig] True to ignore HTML directives.
 * @property {number} [resultVersion] Results object version.
 * @property {Object.<string, string>} [strings] Strings to lint.
 */

/**
 * A markdown-it plugin.
 *
 * @typedef {Array} Plugin
 */

/**
 * Function to pretty-print lint results.
 *
 * @callback ToStringCallback
 * @param {boolean} [ruleAliases] True to use rule aliases.
 * @returns {string} Pretty-printed results.
 */

/**
 * Lint results (for resultVersion 3).
 *
 * @typedef {Object.<string, LintError[]>} LintResults
 * @property {ToStringCallback} toString String representation.
 */

/**
 * Lint error.
 *
 * @typedef {Object} LintError
 * @property {number} lineNumber Line number (1-based).
 * @property {string[]} ruleNames Rule name(s).
 * @property {string} ruleDescription Rule description.
 * @property {string} ruleInformation Link to more information.
 * @property {string} errorDetail Detail about the error.
 * @property {string} errorContext Context for the error.
 * @property {number[]} errorRange Column number (1-based) and length.
 * @property {FixInfo} [fixInfo] Fix information.
 */

/**
 * Fix information.
 *
 * @typedef {Object} FixInfo
 * @property {number} [lineNumber] Line number (1-based).
 * @property {number} [editColumn] Column of the fix (1-based).
 * @property {number} [deleteCount] Count of characters to delete.
 * @property {string} [insertText] Text to insert (after deleting).
 */

/**
 * Called with the result of linting a string or document.
 *
 * @callback LintContentCallback
 * @param {Error | null} error Error iff failed.
 * @param {LintError[]} [result] Result iff successful.
 * @returns {void}
 */

/**
 * Called with the result of the lint function.
 *
 * @callback LintCallback
 * @param {Error | null} error Error object iff failed.
 * @param {LintResults} [results] Lint results iff succeeded.
 * @returns {void}
 */

/**
 * Configuration object for linting rules. For the JSON schema, see
 * {@link ../schema/markdownlint-config-schema.json}.
 *
 * @typedef {import("./configuration.d.ts").Configuration} Configuration
 */

/**
 * Configuration object for linting rules strictly. For the JSON schema, see
 * {@link ../schema/markdownlint-config-schema-strict.json}.
 *
 * @typedef {import("./configuration-strict.d.ts").ConfigurationStrict} ConfigurationStrict
 */

/**
 * Rule configuration object.
 *
 * @typedef {boolean | Object} RuleConfiguration Rule configuration.
 */

/**
 * Parses a configuration string and returns a configuration object.
 *
 * @callback ConfigurationParser
 * @param {string} text Configuration string.
 * @returns {Configuration}
 */

/**
 * Called with the result of the readConfig function.
 *
 * @callback ReadConfigCallback
 * @param {Error | null} err Error object or null.
 * @param {Configuration} [config] Configuration object.
 * @returns {void}
 */

/**
 * Called with the result of the resolveConfigExtends function.
 *
 * @callback ResolveConfigExtendsCallback
 * @param {Error | null} err Error object or null.
 * @param {string} [path] Resolved path to file.
 * @returns {void}
 */

async function validateMarkdown(content) {
  const options = {
    strings: { file: content },
    config: {
      default: true,
      "line-length": false
      // Отключить правило длины строки
    }
  };
  try {
    const results = await new Promise((resolve, reject) => {
      lintAsync(options, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
    const errors = Object.values(results.files || {}).flatMap(
      (file) => file.map((error) => ({
        rule: error.ruleName,
        message: error.ruleDescription,
        line: error.lineNumber
      }))
    );
    return errors.length > 0 ? { valid: false, errors } : { valid: true };
  } catch (error) {
    console.error("Markdown validation failed with error:", error);
    return {
      valid: false,
      errors: [
        { rule: "internal", message: error.message || "Unexpected error", line: 0 }
      ]
    };
  }
}

const AddFileProductButton = () => {
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const [title, setTitle] = reactExports.useState("");
  const [description, setDescription] = reactExports.useState("");
  const [pubDate, setPubDate] = reactExports.useState("");
  const [updateDate, setUpdateDate] = reactExports.useState("");
  const [serialNumber, setSerialNumber] = reactExports.useState(0);
  const [author, setAuthor] = reactExports.useState("");
  const [category, setCategory] = reactExports.useState("");
  const [tags, setTags] = reactExports.useState("");
  const [price, setPrice] = reactExports.useState(0);
  const [discount, setDiscount] = reactExports.useState(0);
  const [isActive, setIsActive] = reactExports.useState(true);
  const [isDelivery, setIsDelivery] = reactExports.useState(false);
  const [isPaymentButton, setIsPaymentButton] = reactExports.useState(true);
  const [imageSrc, setImageSrc] = reactExports.useState("");
  const [imageAlt, setImageAlt] = reactExports.useState("");
  const [content, setContent] = reactExports.useState("");
  const [message, setMessage] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const handleAddFile = async () => {
    if (!imageSrc) {
      setMessage("Ошибка: Для продукта обязательно нужно загрузить изображение!");
      return;
    }
    setLoading(true);
    const fileContent = `---
serial_number: ${serialNumber}
title: '${title}'
description: '${description}'
pubDate: '${pubDate || (/* @__PURE__ */ new Date()).toISOString().split("T")[0]}'
updateDate: '${updateDate || (/* @__PURE__ */ new Date()).toISOString().split("T")[0]}'
draft: false
snippet: "Введите краткое описание"
image: {
    src: "${imageSrc}",
    alt: "${imageAlt || title}"
}
category: "${category || "Общая"}"
author: "${author}"
tags: [${tags.split(",").map((tag) => tag.trim()).join(", ") || "Витрина"}]
price: ${price}
discount: ${discount}
is_active: ${isActive}
is_delivery: ${isDelivery}
is_payment_button: ${isPaymentButton}
---

${content}
`;
    try {
      const validationResult = await validateMarkdown(fileContent);
      if (validationResult.valid) {
        await addFileToGitHub(`src/content/products/${d(title)}.md`, "Добавление нового файла", fileContent);
        setMessage("Файл успешно добавлен!");
        setLoading(false);
        setIsOpen(false);
        resetFields();
      } else {
        console.error("Ошибки в Markdown:", validationResult.errors);
        alert("Не удалось обновить из-за ошибок в Карточке.");
      }
    } catch (error) {
      console.error("Ошибка добавления файла:", error);
      setLoading(false);
      setMessage("Ошибка добавления файла. Попробуйте еще раз.");
    }
  };
  const resetFields = () => {
    setSerialNumber(0);
    setTitle("");
    setDescription("");
    setPubDate("");
    setUpdateDate("");
    setAuthor("");
    setCategory("");
    setTags("");
    setPrice(0);
    setDiscount(0);
    setIsActive(true);
    setIsDelivery(false);
    setIsPaymentButton(true);
    setImageSrc("");
    setImageAlt("");
    setContent("");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setIsOpen(true),
        className: "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition",
        children: "Добавить продукт/услугу"
      }
    ),
    isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed mt-20 inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg p-6 m-3 w-[700px] h-full max-h-screen overflow-y-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl mb-4", children: "Добавить новый продукт/услугу" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block mb-1", children: "Название продукта/услуги:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: title,
            onChange: (e) => setTitle(e.target.value),
            placeholder: "Укажите название продукта/услуги",
            className: "border border-gray-300 p-2 w-full rounded"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block mb-1", children: "Порядковый номер:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            required: true,
            type: "number",
            min: 0,
            value: serialNumber,
            onChange: (e) => {
              serialNumber >= 0 ? setSerialNumber(Number(e.target.value)) : setSerialNumber(0);
            },
            placeholder: "Введите цену",
            className: "border border-gray-300 p-2 w-full rounded"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block mb-1", children: "Краткое описание продукта:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "textarea",
          {
            value: description,
            onChange: (e) => setDescription(e.target.value),
            placeholder: "Введите описание продукта",
            className: "border border-gray-300 p-2 w-full h-24 rounded"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block mb-1", children: "Дата публикации:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "date",
            value: pubDate,
            onChange: (e) => setPubDate(e.target.value),
            className: "border border-gray-300 p-2 w-full rounded"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block mb-1", children: "Дата обновления публикации:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "date",
            value: updateDate,
            onChange: (e) => setUpdateDate(e.target.value),
            className: "border border-gray-300 p-2 w-full rounded"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block mb-1", children: "Автор:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: author,
            onChange: (e) => setAuthor(e.target.value),
            placeholder: "Укажите автора",
            className: "border border-gray-300 p-2 w-full rounded"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block mb-1", children: "Категория:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: category,
            onChange: (e) => setCategory(e.target.value),
            placeholder: "Введите категорию",
            className: "border border-gray-300 p-2 w-full rounded"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block mb-1", children: "Теги (через запятую):" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: tags,
            onChange: (e) => setTags(e.target.value),
            placeholder: "Введите теги",
            className: "border border-gray-300 p-2 w-full rounded"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block mb-1", children: "Цена:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            required: true,
            type: "number",
            value: price,
            onChange: (e) => {
              Number(price) >= 0 ? setPrice(Number(e.target.value)) : setPrice(0);
            },
            placeholder: "Введите цену",
            className: "border border-gray-300 p-2 w-full rounded"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block mb-1", children: "Скидка (%):" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            required: true,
            type: "number",
            value: discount,
            min: 0,
            max: 100,
            onChange: (e) => {
              discount >= 0 && discount <= 100 ? setDiscount(Number(e.target.value)) : setDiscount(0);
            },
            placeholder: "Введите скидку от 0 до 100%",
            className: "border border-gray-300 p-2 w-full rounded"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "checkbox",
            checked: isActive,
            onChange: (e) => setIsActive(e.target.checked),
            className: "mr-2"
          }
        ),
        "Активный"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "checkbox",
            checked: isDelivery,
            onChange: (e) => setIsDelivery(e.target.checked),
            className: "mr-2"
          }
        ),
        "Доставка"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "checkbox",
            checked: isPaymentButton,
            onChange: (e) => setIsPaymentButton(e.target.checked),
            className: "mr-2"
          }
        ),
        "Кнопка оплаты"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AddImageUploader, { onImageUpload: setImageSrc, productName: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block mb-1", children: "Изображение (alt):" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: imageAlt,
            onChange: (e) => setImageAlt(e.target.value),
            placeholder: "Введите альтернативный текст для изображения",
            className: "border border-gray-300 p-2 w-full rounded"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block mb-1", children: "Полное описание продукта/услуги:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "textarea",
          {
            required: true,
            value: content,
            onChange: (e) => setContent(e.target.value),
            placeholder: "Введите содержимое продукта",
            className: "border border-gray-300 p-2 w-full h-24 rounded"
          }
        )
      ] }),
      message && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mb-4 text-sm ${message.includes("успешно") ? "text-green-500" : "text-red-500"}`, children: message }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setIsOpen(false),
            className: "mr-2 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400",
            children: "Отмена"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: handleAddFile,
            className: "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition",
            children: loading ? "Добавление..." : "Добавить"
          }
        )
      ] })
    ] }) })
  ] });
};

async function fetchFileFromGitHub$1(path) {
  const response = await fetch(`${GITHUB_API_URL}/${GITREPOSITORY_OWNER}/${GITREPO}/contents/${path}`, {
    method: "GET",
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
      "Content-Type": "application/json"
    }
  });
  if (!response.ok) {
    throw new Error(`Ошибка загрузки файла: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
}
const getFileSHA$1 = async (filePath) => {
  try {
    const fileData = await fetchFileFromGitHub$1(filePath);
    return fileData.sha;
  } catch (error) {
    console.error("Ошибка при получении SHA файла:", error);
    throw error;
  }
};
const deleteFile = async (path) => {
  const sha = await getFileSHA$1(path);
  const response = await fetch(`${GITHUB_API_URL}/${GITREPOSITORY_OWNER}/${GITREPO}/contents/${path}`, {
    method: "DELETE",
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: `Удаление файла ${path}`,
      sha
    })
  });
  if (!response.ok) {
    throw new Error(`Ошибка при удалении файла: ${response.statusText}`);
  }
  return `Файл ${path} успешно удален.`;
};
const deleteFolderContents = async (folderPath) => {
  try {
    const files = await fetchFileFromGitHub$1(folderPath);
    if (!Array.isArray(files)) {
      throw new Error(`Папка ${folderPath} пуста или не найдена.`);
    }
    const deletePromises = files.map(async (file) => {
      if (file.type === "file") {
        return await deleteFile(file.path);
      } else if (file.type === "dir") {
        return await deleteFolderContents(file.path);
      }
    });
    const results = await Promise.all(deletePromises);
    return results.join(" ");
  } catch (error) {
    throw new Error(`Ошибка при удалении содержимого папки ${folderPath}: ${error instanceof Error ? error.message : "Неизвестная ошибка"}`);
  }
};
const onConfirmDeleteProductAndImageGitRepo = async (pathProductFileForDelete, pathImageFolderForDelete) => {
  try {
    const productMessage = await deleteFile(pathProductFileForDelete);
    const imageMessage = await deleteFolderContents(pathImageFolderForDelete);
    return { success: true, message: `${productMessage} ${imageMessage}` };
  } catch (error) {
    return { success: false, message: error instanceof Error ? error.message : "Неизвестная ошибка при удалении." };
  }
};

const DeleteConfirmationModal = ({ product, onCancel, onConfirm }) => {
  const [message, setMessage] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(false);
  const handleDelete = async () => {
    setLoading(true);
    const pathProductFileForDelete = `src/content/products/${product.id}`;
    const pathImageFolderForDelete = `public/images-product/${product.slug}`;
    try {
      const result = await onConfirmDeleteProductAndImageGitRepo(pathProductFileForDelete, pathImageFolderForDelete);
      setMessage(result.message);
      if (result.success) {
        setLoading(false);
        onConfirm();
      }
    } catch (error) {
      console.error("Ошибка при удалении продукта:", error);
      setMessage(`Ошибка: ${error instanceof Error ? error.message : "Неизвестная ошибка"}`);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$2.modalOverlay, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$2.modalContent, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Удалить продукт" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      'Вы уверены, что хотите удалить продукт "',
      product.data.title,
      '"?'
    ] }),
    message && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles$2.message, children: message }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleDelete, className: styles$2.confirmButton, children: loading ? "Удаление..." : "Удалить" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onCancel, className: styles$2.cancelButton, children: "Отмена" })
  ] }) });
};

async function fetchFileFromGitHub(path) {
  const response = await fetch(`${GITHUB_API_URL}/${GITREPOSITORY_OWNER}/${GITREPO}/contents/${path}`, {
    method: "GET",
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
      "Content-Type": "application/json"
    }
  });
  if (!response.ok) {
    throw new Error(`Ошибка загрузки файла: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
}
async function updateFileContent(path, message, updatedContent, sha) {
  const encodedContent = btoa(unescape(encodeURIComponent(updatedContent)));
  const body = {
    message,
    content: encodedContent,
    sha
  };
  const response = await fetch(`${GITHUB_API_URL}/${GITREPOSITORY_OWNER}/${GITREPO}/contents/${path}`, {
    method: "PUT",
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
  if (!response.ok) {
    throw new Error(`Ошибка обновления файла: ${response.statusText}`);
  }
  return await response.json();
}

const onConfirmEditProductAndImageGitRepo = async (slug, fileContent) => {
  try {
    const productPath = `src/content/products/${slug}`;
    const productFileData = await fetchFileFromGitHub(productPath);
    const productFileSHA = productFileData.sha;
    await updateFileContent(productPath, `Update product data for ${slug}`, fileContent, productFileSHA);
    console.log(`Product and image for ID ${slug} successfully updated in GitHub.`);
    return `Product and image for ID ${slug} successfully updated in GitHub.`;
  } catch (error) {
    console.error(`Failed to update product and image for ID ${slug}:`, error);
    throw new Error(`Failed to update product and image for ID ${slug}: ${error instanceof Error ? error.message : "Unknown error"}`);
  }
};

const getFileSHA = async (path) => {
  const response = await fetch(`${GITHUB_API_URL}/${GITREPOSITORY_OWNER}/${GITREPO}/contents/public${path}`, {
    method: "GET",
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
      "Content-Type": "application/json"
    }
  });
  if (!response.ok) {
    throw new Error(`Ошибка при получении информации о файле: ${response.statusText}`);
  }
  const data = await response.json();
  return data.sha;
};
const updateImageInGitHub = async (path, message, imageFile) => {
  try {
    const sha = await getFileSHA(path);
    const imageBase64 = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(",")[1]);
      reader.onerror = reject;
      reader.readAsDataURL(imageFile);
    });
    const response = await fetch(`${GITHUB_API_URL}/${GITREPOSITORY_OWNER}/${GITREPO}/contents/public${path}`, {
      method: "PUT",
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message,
        content: imageBase64,
        // Содержимое файла закодировано в Base64
        sha
        // SHA файла, который обновляется
      })
    });
    if (!response.ok) {
      throw new Error(`Ошибка при обновлении изображения: ${response.statusText}`);
    }
    const data = await response.json();
    return data.content.download_url;
  } catch (error) {
    console.error("Ошибка при обновлении изображения:", error);
    throw new Error(`Не удалось обновить изображение ${path}: ${error instanceof Error ? error.message : "Неизвестная ошибка"}`);
  }
};

const ImageUpdate = ({ currentImage, pathImage }) => {
  const [imageFile, setImageFile] = reactExports.useState(null);
  const [previewImage, setPreviewImage] = reactExports.useState(currentImage);
  const [message, setMessage] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const handleImageChange = async (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      try {
        const compressedFile = await imageCompression(file, {
          maxSizeMB: 1,
          // Максимальный размер файла
          maxWidthOrHeight: 1024,
          // Максимальная ширина или высота
          useWebWorker: true,
          fileType: "image/webp"
          // Формат WebP
        });
        setImageFile(compressedFile);
        setPreviewImage(URL.createObjectURL(compressedFile));
        setMessage("Изображение подготовлено для обновления.");
      } catch (error) {
        console.error("Ошибка обработки изображения:", error);
        setMessage("Ошибка обработки изображения. Попробуйте другой файл.");
      }
    }
  };
  const handleUpdateImage = async () => {
    if (!imageFile) {
      setMessage("Пожалуйста, выберите изображение для обновления.");
      return;
    }
    setLoading(true);
    try {
      const updatedImageUrl = await updateImageInGitHub(
        pathImage,
        "Обновление изображения",
        imageFile
      );
      setPreviewImage(updatedImageUrl);
      setMessage("Изображение успешно обновлено!");
    } catch (error) {
      console.error("Ошибка обновления изображения:", error);
      setMessage("Ошибка обновления изображения. Попробуйте еще раз.");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block mb-1", children: "Выберите новое изображение:" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: handleImageChange,
        className: "border border-gray-300 p-2 w-full rounded"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Текущее изображение:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: previewImage,
          alt: "Текущее изображение",
          className: "w-32 h-32 object-cover"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: handleUpdateImage,
        className: "mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition",
        disabled: loading,
        children: loading ? "Обновление..." : "Обновить изображение"
      }
    ),
    message && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mt-2 text-sm ${message.includes("успешно") ? "text-green-500" : "text-red-500"}`, children: message })
  ] });
};

const EditProductConfirmationModal = ({ product, onCancel }) => {
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const [message, setMessage] = reactExports.useState(null);
  const [updatedImage, setUpdatedImage] = reactExports.useState(product?.data.image.src);
  const [title, setTitle] = reactExports.useState(product?.data?.title);
  const [description, setDescription] = reactExports.useState(product?.data?.description);
  const [price, setPrice] = reactExports.useState(product?.data?.price);
  const [discount, setDiscount] = reactExports.useState(product?.data?.discount);
  const [updateDate, setUpdateDate] = reactExports.useState("");
  const [serialNumber, setSerialNumber] = reactExports.useState(product?.data?.serial_number);
  const [category, setCategory] = reactExports.useState(product?.data?.category);
  const [author, setAuthor] = reactExports.useState(product?.data?.author);
  const [tags, setTags] = reactExports.useState(product?.data?.tags ? product.data.tags.join(", ") : "");
  const [isActive, setIsActive] = reactExports.useState(product.data.is_active);
  const [isDelivery, setIsDelivery] = reactExports.useState(false);
  const [isPaymentButton, setIsPaymentButton] = reactExports.useState(false);
  const [fullDescription, setFullDescription] = reactExports.useState(product.body || "");
  const handleUpdateFile = async () => {
    setLoading(true);
    const formattedTags = tags.split(",").map((tag) => tag.trim()).map((tag) => tag.replace("#", "")).map((tag) => `'${tag}'`).join(", ");
    if (!title.trim()) {
      setError("Название продукта не может быть пустым.");
      setLoading(false);
      return;
    }
    if (!description.trim()) {
      setError("Описание продукта не может быть пустым.");
      setLoading(false);
      return;
    }
    if (price < 0) {
      setError("Цена не может быть отрицательной.");
      setLoading(false);
      return;
    }
    if (discount < 0 || discount > 100) {
      setError("Скидка должна быть от 0 до 100%.");
      setLoading(false);
      return;
    }
    if (!tags.trim()) {
      setError("Теги не могут быть пустыми.");
      setLoading(false);
      return;
    }
    if (!fullDescription.trim()) {
      setError("Полное описание не может быть пустым.");
      setLoading(false);
      return;
    }
    const fileContent = `---
serial_number: ${serialNumber}
title: '${title.replace(/['"]/g, "")}'
description: '${description.replace(/"/g, "«").replace(/'/g, "»").replace(/\n/g, " ").trim()}'
pubDate: '${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}'
updateDate: '${updateDate || (/* @__PURE__ */ new Date()).toISOString().split("T")[0]}'
draft: false
snippet: '${title.replace(/['"]/g, "")}'
image:
 src: '${updatedImage}'
 alt: '${title.replace(/['"]/g, "")}'
category: '${category || "Общая"}'
author: '${author?.replace(/['"]/g, "")}'
tags: [${formattedTags || "Витрина"}]
price: ${price}
discount: ${discount}
is_active: ${isActive}
is_delivery: ${isDelivery}
is_payment_button: ${isPaymentButton}
---
${fullDescription}`;
    try {
      const validationResult = await validateMarkdown(fileContent);
      if (validationResult.valid) {
        await onConfirmEditProductAndImageGitRepo(product.id, fileContent);
        setMessage("Файл успешно обновлен и загружен!");
        onCancel();
      } else {
        console.error("Ошибки в Markdown:", validationResult.errors);
        alert("Не удалось обновить из-за ошибок в Карточке.");
      }
    } catch (error2) {
      setError("Произошла ошибка при обновлении файла.");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-6 rounded-lg shadow-lg max-w-lg w-full max-h-[90vh] flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mb-4", children: "Редактировать продукт" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-4", children: [
        "Окно редактирования продукта/услуги ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-red-500 p-1 rounded", children: "(В данном окне заголовок не редактируется, если нужно отредактировать заголовок, удалите карточку и добавьте с новым названием.)" }),
        ' "',
        product?.data.title,
        '"?'
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-grow overflow-y-auto mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "product-details mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: "Информация о продукте:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block mb-1", children: "Название продукта:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              readOnly: true,
              type: "text",
              value: title,
              onChange: (e) => setTitle(e.target.value),
              placeholder: "Название продукта",
              className: "border border-gray-300 p-2 w-full rounded"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block mb-1", children: "Порядковый номер:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "number",
              value: serialNumber,
              onChange: (e) => setSerialNumber(Number(e.target.value)),
              placeholder: "Порядковый номер",
              className: "border border-gray-300 p-2 w-full rounded"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block mb-1", children: "Описание:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              value: description,
              onChange: (e) => setDescription(e.target.value),
              placeholder: "Описание продукта",
              className: "border border-gray-300 p-2 w-full h-24 rounded"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block mb-1", children: "Цена:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "number",
              value: price,
              onChange: (e) => {
                Number(price) >= 0 ? setPrice(Number(e.target.value)) : setPrice(0);
              },
              placeholder: "Цена продукта",
              className: "border border-gray-300 p-2 w-full rounded"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block mb-1", children: "Скидка (%):" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              required: true,
              type: "number",
              value: discount,
              min: 0,
              max: 100,
              onChange: (e) => {
                discount >= 0 && discount <= 100 ? setDiscount(Number(e.target.value)) : setDiscount(0);
              },
              placeholder: "Введите скидку от 0 до 100%",
              className: "border border-gray-300 p-2 w-full rounded"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block mb-1", children: "Категория:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: category,
              onChange: (e) => setCategory(e.target.value),
              placeholder: "Категория продукта",
              className: "border border-gray-300 p-2 w-full rounded"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block mb-1", children: "Автор:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: author,
              onChange: (e) => setAuthor(e.target.value),
              placeholder: "Автор продукта",
              className: "border border-gray-300 p-2 w-full rounded"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block mb-1", children: "Теги:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: tags,
              onChange: (e) => setTags(e.target.value),
              placeholder: "Теги, разделенные запятой",
              className: "border border-gray-300 p-2 w-full rounded"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block mb-1", children: "Дата обновления публикации:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "date",
              value: updateDate,
              onChange: (e) => setUpdateDate(e.target.value),
              className: "border border-gray-300 p-2 w-full rounded"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "checkbox",
              checked: isActive,
              onChange: (e) => setIsActive(e.target.checked),
              className: "mr-2"
            }
          ),
          "Продукт активен"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block mb-1", children: "Полное описание:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              value: fullDescription,
              onChange: (e) => setFullDescription(e.target.value),
              placeholder: "Полное описание продукта",
              className: "border border-gray-300 p-2 w-full h-24 rounded"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ImageUpdate,
        {
          currentImage: updatedImage,
          pathImage: product.data.image.src
        }
      ),
      error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-red-500 mt-4", children: error }),
      message && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-green-500 mt-4", children: message })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-actions mt-4 flex justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: handleUpdateFile,
          disabled: loading,
          className: "bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600",
          children: loading ? "Обновление..." : "Подтвердить обновление"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: onCancel,
          className: "bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400",
          children: "Закрыть"
        }
      )
    ] })
  ] }) });
};

const ProductList = ({ productsColection }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AuthProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductListContent, { productsColection }) });
};
const ProductListContent = ({ productsColection }) => {
  const [selectedProduct, setSelectedProduct] = reactExports.useState(null);
  const { isAuthenticated } = useAuth();
  const [editingProduct, setEditingProduct] = reactExports.useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = reactExports.useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = reactExports.useState(false);
  const [productToDelete, setProductToDelete] = reactExports.useState(null);
  const openEditModal = (product) => {
    setEditingProduct(product);
    setIsEditModalOpen(true);
  };
  const closeEditModal = () => {
    setEditingProduct(null);
    setIsEditModalOpen(false);
  };
  const openDeleteModal = (product) => {
    setProductToDelete(product);
    setIsDeleteModalOpen(true);
  };
  const closeDeleteModal = () => {
    setProductToDelete(null);
    setIsDeleteModalOpen(false);
  };
  const confirmDelete = () => {
    console.log(`Product ${productToDelete?.title} deleted!`);
    closeDeleteModal();
  };
  const formatProducts = productsColection?.map((product) => ({
    ...product,
    price: typeof product.data.price === "string" ? parseFloat(product.data.price) : product.data.price,
    discount: typeof product.data.discount === "string" ? parseFloat(product.data.discount) : product.data.discount
  }));
  const filteredProducts = formatProducts.filter((product) => product).sort((a, b) => {
    const serialA = Number(a.data.serial_number);
    const serialB = Number(b.data.serial_number);
    return serialA - serialB;
  });
  const openModal = (slug, body) => {
    setSelectedProduct({ slug, body });
  };
  const closeModal = () => {
    setSelectedProduct(null);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    isAuthenticated && /* @__PURE__ */ jsxRuntimeExports.jsx(AddFileProductButton, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$3.container, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$3.productList, children: [
      filteredProducts.map((product) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        ProductCardCms,
        {
          productSlug: product.slug,
          productData: product?.data,
          onMoreDetails: () => openModal(product.data.title, product.data.description),
          onEdit: () => openEditModal(product),
          onDelete: () => openDeleteModal(product)
        },
        product.id
      )),
      selectedProduct && /* @__PURE__ */ jsxRuntimeExports.jsx(
        ProductDescriptionModal,
        {
          title: selectedProduct.slug,
          description: selectedProduct.body,
          onClose: closeModal
        }
      ),
      isEditModalOpen && editingProduct && /* @__PURE__ */ jsxRuntimeExports.jsx(
        EditProductConfirmationModal,
        {
          product: editingProduct,
          onCancel: closeEditModal
        }
      ),
      isDeleteModalOpen && productToDelete && /* @__PURE__ */ jsxRuntimeExports.jsx(
        DeleteConfirmationModal,
        {
          product: productToDelete,
          onConfirm: confirmDelete,
          onCancel: closeDeleteModal
        }
      )
    ] }) })
  ] });
};

const $$ListProductSectionCMS = createComponent(async ($$result, $$props, $$slots) => {
  const productsColection = (await getCollection("products")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col"> <div class="mt-10 text-left"> <p class="text-4xl lg:text-5xl font-bold lg:tracking-tight"> ${textProductsPage.title} </p> <p class="text-lg mt-4"> ${textProductsPage.subtitle} </p> </div> <div class="flex justify-center mt-6"> ${renderComponent($$result, "ProductListCMS", ProductList, { "productsColection": productsColection, "client:load": true, "client:component-hydration": "load", "client:component-path": "@ui/admin-cms/cms-admin-react/cms-componente/edit-products/products-react-cms/product-list-cms", "client:component-export": "default" })} </div> </div>`;
}, "/home/john/DevJohn/open-source-storelike-ui-admin/admin-host-app/src/admin-cms/cms/ListProductSectionCMS.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `\u0420\u0435\u0434\u0430\u043A\u0442\u043E\u0440 | ${seoData.SITE_TITLE}`, "description": `\u0420\u0435\u0434\u0430\u043A\u0442\u043E\u0440 ${seoData.SITE_DESCRIPTION}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "AppCMSReact", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "@ui/admin-cms/cms-admin-react/appCMS/AppCMSReact", "client:component-export": "default" })} ${renderComponent($$result3, "Hero", $$Hero, {})} ${renderComponent($$result3, "Features", $$Features, {})} ${renderComponent($$result3, "ListProductSectionCMS", $$ListProductSectionCMS, {})} ${renderComponent($$result3, "Reviews", $$Reviews, {})} ${renderComponent($$result3, "FAQ", $$FAQ, {})} ` })} ` })}`;
}, "/home/john/DevJohn/open-source-storelike-ui-admin/admin-host-app/src/pages/admin-cms/index.astro", void 0);

const $$file = "/home/john/DevJohn/open-source-storelike-ui-admin/admin-host-app/src/pages/admin-cms/index.astro";
const $$url = "/admin-cms";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page as p, requireMarkdownit as r };
