import React from "react";
import "./Landing.css"

export default function landing() {
    return (
        <div>
        <div className="relative overflow-hidden bg-white">
            <br/><br/><br/><br/>
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-xl">
              <h1 className="font text-5xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:max-w-xl">
                Welcome to Sociopod !
              </h1>
              <p className="mt-4 text-xl text-gray-500 sm:max-w-lg">
                Your own social media platform to talk and interact with strangers and friends.
              </p>
            </div>
            <div>
              <div className="mt-10">
                
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src="https://th.bing.com/th/id/OIP.G_W0DKRanwjns0rSap60MQHaNK?w=187&h=333&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAEOAKwDASIAAhEBAxEB/8QAHAAAAQUBAQEAAAAAAAAAAAAAAgABAwQFBgcI/8QAPhAAAgEDAgQEAwYFAwMEAwAAAQIDAAQREiEFMUFREyJhcQaBkRQjMqGxwRVCUtHwYoKSJDNyQ1PC4bLS8f/EABoBAAMBAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAkEQACAwADAAICAgMAAAAAAAAAAQIRIQMSMSJBBBNhcTJR0f/aAAwDAQACEQMRAD8A8kpqelTAalT0qAFTU9ICgBU2KkC7ZpmFOhAb0t6elSGIHFNmnwe1LFAC+lKlSoAapG8MRIFbLMxLjB8oHLc96mt40VXuJR93HjCn/wBRzyUfvVdmLuzHA1MSQAABnsKABx6UWkYHPPWiSQqc6VPlZeXQjHWnDQnnrX5A0ADoyOdSKU8Jonz+PWhH8uRg0IK777etLIoAjK4J3q5bWizRlze2MGGK6Ll5Q52B1ARxsMfPp9a2Kf6UgAwaapNOeVOEPP1xVUKyMA0QFS+HnFGEGMVVCsg0Zp1TcZqwEAqQRA701EVlZhttyqMrV3wjTGElTtvT6hZSC+lOy4wasCNkpNGTjqO1T1HZVoxGTUhiG3SrMcR5HPLrSopaUzEw51Lb2zTSBAOhPpgDOTWi1sCq433xijitpIy8OwMhIdhzCgZwD+tV1YMoOPGVIwSsUS+UHGzH8R+dUGUqSOxxXRCy+7V0IOE2U96zBCzSFmX8THkNqUosSM/rSq5LbuHQ6RjqPnioXRRyGN8VBSVkOKcfsaN00iI/1KSfkcUlXkem357UCBAJ/Wl5qNQc8uWofnSZWz+E0xFlIuvSi8IfKpVUjHajKg8udapEWV9OKcLUjLsD8jRKm2T0FOgsAKDt/gqYKABigAOKkQb79apCFo5VIE25UWOdHgaRVE2QNGu+2TUGhhnbI6CrLgrv0NSRKDnbORSaHZQ0EEbeoq4sRxuRk42qVo0OkKN9Qz7elTrCoeMODjl60mjSGkttbhsO3fCKOvcknpUyorTsg2wWBxz5UUEbiRI0Hl23PvRywaJGZQSwkLELnOcdcVSQpYE0KCEDThgMg4wMVnraoXPPLP5Tjy5671tGOS6hhCghAmT6HVg86jFskUgjeTYsMeu9OSITOc4pAY4Y3AAHjrHnvkg1nXELDGx2O4rrobeG+sb2TwUlu0vZGRpGcGC3t3wIYVB0AtgliQTv6VQ4pDbM0X2cZDxxvuOZcZwfUda55RvTWD05mVWKxHSdKkxk421HzYz3qwlq7WYnCnSMEnG2A4HOtS+eKGwtrBYvvJeKveyuRgKEtUhWJR/yJPqO292ygjf4avGwdaQXzDt93I7/ALURjeDbo56G1ZpJIyfwS3MZ7ZQqas/YpDyIwNuVbvCrDxbu8GkEJxi+j36h7YyD9K1/4Om/lfmen6VpHjtEOdHHhBj3oSu/oKMONhUqhCy9id6szK7RkdNjRKuVI71YZidG2Ad9ugpwFwc4G+DjrtkGpT0bWFZF2xjvRhBttRnShBP4WO3vTO6KMg4361RISoQR1FSiIc9/agguYsANzq4iPMwEYB1bA1SJZUEQd25+UfLFGkSgbHJNW2tkyQkuVGxYIxTPI5eq85aFhGVww7b+uaBkkURDL5cknJq/Fb6pFDLkfiA5b1TgYsBnOroQK04mVCTzcb5bJ/Kpkb8X2aaWigLhQMAEnbniqyxGG5dQS3iPkE8/w8q3rGNJoo2cAFl3HSq1wbGwmWe4yS0wSNuYUFCfahMUjIjnuU8CARDLQuxJ2XImIx/erQ4Z47RNMcOrggJsc/PpVWLjFrxC+ijgiYBIJyZDhfKs2nlWit54dxkn/uNGq5GSANs027ISaRlWkS8J4xfWVwGEF6xvbJsE6iBmWLbfIxnGKo/YZvs6zSxvHLcyXF3HHMjI8dvJPIYiVO4yNx6EV0/Ebrx/CS3TQ0MqTJMwAkV0OVaM8wfXNVZluZlklmd5Z5SrPJIxZm6bk1lRpH2ziL6Jo57DWcobkDfc5ZMZOa1+GNCvDL23l/CycWjVCcAZMw50HGoH8Hh8hUg/xO3Q7YxqDgYqe2tBFbXkhCsWi4kXDnPmAkAIWmsZbVjfDsrSy3zKzL/1VhOcnfMthIGrpwI5MsJSu5DBgcgj5VyfwmNU3EVUnDWvBXOP9MDI1dsscKqAjOBueY3yc53rSDw55rTyknrRJLgjfkdqBioUZ5k0IKjqKzsdF1ZomyOXyBA9qNRqZFGdOckt1Peq0QJIAAJPt+9XFimOnCMCO2DTS+xNgXEJCHzeq+9UpAzLg+2a1zHM0JLI3tpPSmhs9RAZdjvuKpqyU6MuONdix/DWvbyxK6ZcBXVkJPJdS4zUU9sEZhgYO4I6VVaEjBDk42YdqawLs1/BmM0EwkEUcfho0ZDMSqDBCKoIIbp71DdxSjwWCqHjjPiIx8yq7MyqfUDGaq219eW7BBNMsYGMKxxj0qwmXaTB1K+W668nvmhB4QpdYIBOnuK1bW5UyKuRlsbtvn0rIvrV18J0DFnG643BHWtC2tZCsUqyaXBBUaS2celY8raaOz8eKaZ2doxWPJYLgfLNV7/MjWOuMlTIzO40tsUIAVW8vTeqkP2koocrpP8ASMA/KjaVIZrMOS6Lc88FtCvA506eWNqqEtJ5uN1hzItprbiVuYQF123EXyBhmAu8YdR5cjI5VvQhDJbs27Fk1Z6EHlVWcGXjXChExZWs+JgqI/DVFE6P5Rkn5mtz7CjiMlRqLocexBqrX0SrUdLMtokhBIOM/XG+aNrdFQ9goJ+tX/CVQ+4JGAcH0zg1G+nwZQwO42+RFZWJLTnviK2gPDrGTBwvGeEudwAFaUoR+dXIOE2MaOXBlDzzHTnOA7EfvS+IVVuA3ciADwrjhcuOuY7yIFR9c1oJhZBENBRLguNJzrGxYBh2O1UnordnnXwY7rd8Sj0ltNvbKd8EaLjwwB9a74MFC6tJ1DIzgEDlg1yXDOE3fB+PcQSQoPtNiOIoo8wjg/i8cagnqcbn39K72WwDtltjjGw2504ukDR4gyt5Sw2IyPrihOenKrTfacQYkQ5jB3ZN9z3pwLr/ANuNv9sZ/SpERwEjdhtjlV9GB0lemM1WZJFVdcQQE8wuMnt2olOMeuBWiIemikkgxgkdeZxitG1lfrIfbO351kxhtsb4G9WkIDasEbVojJmnOCVDsY2HM6lU/tWLeTxw4At7dtWCcqQT/wASKlnu5SBGMkZ296kt7NLt8ty2yW559qHvgJ16ZZurVtGu0AxtiOSRf1Jq5bzcPcjH2iLp5XRv/wAlFdLbcHsoojiNGJ3JcZJNR3XBrPwmYoq+UkBQF0npuKXVldkyqkFk2iRr2R8roUGJcADf+U863IrKHwg8cqAgYUsrAHPLvXJ2haGZ4mwrLurPuFHeuujmi8AKrDy4Kn96x5X4dn4ybuiJUmRxGGhlGrzESJlR/wCJ3qB4pV4isQt30Gewc4ORl4bjfAPpTtHqkyh1E75xufU1Se5MHGDGxkLEcIEIjAxqbx1Jkz0xnlWClp2Tg0kyO6vHs+OcMMkWI5rjinDHLIRoV5YirKR1B0/Wuw0xxRoWODqXG/OuCnQ3nFmikdyn8W4iAVYjSddvIGB9Nq6Xhn229ZIZ3lzqGgu2rYHcg1pF4c3JF27OokTJJC4Lnf125mqtxCRDcOAfEERAO/IHPtW99mUKScnlz6YGKimgHhuSAymJgUI5n3FZvwzh/kjjOMpMeAcYkB3ithOMdWiljkyQfarHw3DI3AuCTMcs1qruTuSZGMmfzrU4jZ254Lx6LwcN/Cr8jQzEKVhZxz9q0oIbK2hjiijEcASIxIuAqKY1YKAPemnhrJLtiOY4wipxZZgMlvhDiin3gv4Jv3rp3Vw7jf8AEcbdK574leKOaCQNjX8O/FduuoDLSaLWVEXuTg4FdfG0E0aSxSJJHIupHiIdGB7MpIqkzKtPnaUW33ILyDEKAeRTscnvTolrz8Zh7xkY+hophKGXNqCBFF/6bD+UdjUXiYBzaDkNh4q1aZkSz6I9BSZZMnkAwI9fNToScE8veq2VmIMcZjIJDZcuPzFSAHGGOT6cqaYqLkNwNTLqGkfWrgngwBkEnGfl1rEIdnAG24G1XIrKZidLZPLPb3q1JshxRcWWJ7gAAnOykcgc10fDoly2FIUHnjYkc8Vm2VkIhGAAXYZZj/at+3RUK5YqNIBxywK1X8mLZrQww6QW5kdahvQuFBHlU+bqCKeObUAi4OOZoJIZmLsGwDkYxn51P2UjkOIRobhnGx7Dt2roYbCeSGNg2DoUsG6bcqswcDidwxUyPI2Xd9gqjflW+LMDSgGoKu3Tc9TisObTu/Gn1swEgnhQfg2OktsSc+gqi1rcHiskpQDXDwzT6iKSfUQD711I4a6SCRVDbYwd8H50L2Sm/hkxgJZOrjmPM5AI9edYROrkmqtM5CwsLy44hxsx27MIuL3CFhtpEkcJOCT6V2Nrw0xSQ3GgIU30g7gnY+lHw20MM3G2DHTLfJMvfLQx5raSPUvLf2q0YckrZONbIMpzG/ej0kjToPLmeVTKuwHoKLH6UmZIybu0eW34hCvKayu4gFG+ZIXT96zuFX1jfRCGO4hmljs+HM6I2WB+zIjED0OxPernxNeT8P4Bxy7gJ8dLRorfHSa4ZYEx82rmhwy3+HeI/BEdugD+DxCwumBINzILUzs0h/8AIfp2rN4bxtsgu7ROO/EE9tO838O+HmWNlikaMz31wuoqWTzaVUebBGcge+F8QvxX4f4lLacIv7q1s7iOK9EUMrBRJKNLH38v5V1HAmRLn4nhkz9qPHLi9c7ktFdQxeGR6eVhXD/HHEvG49NHb6mWzt7e0cqpI8RAXYbdtVR74bTj8ez9s5+dT4jFblBhUGCZFxhQO1Qlrsbpdg78kmbl/uqxP9naWUaZee+ll7DuKg8G0yBm6Gf9EbfoRXWecSnxvKJpA5xkEMrjB9VoG2I570bRRKFELuwPPxECEH5E1MkC4j1Hc4+W/KqSsTZLaWoYKx6nPqa2oIowmAOR9N6pwIqaQMkZ3HWtFDCmxznbA671rFUYydkqaVBYbMBtmijunbc5wDjAG3OoXMGCPF0knSQx5e1XbPh8k+mGCSPMsdxKJJQfDjEUZcs+ATgbe9VJ0rYkrdIebi0XD0Mk5EhLJGkMckSzsW/0sdh6mr/BOPcJ4pKsSM8VwfE028w8zCP8RR18h232Py6155x7gx4bc4MyTGQeIRGCSAd8kk9dzjp+uVb3Fzazw3Ns7RTQOJYnQgFGX+YZrk/a5O14dX6uqp+n0NCgxnSoGO1G7ad1IyMbd6w/hni1zxnhFtdTxCObVJBKUwI5HibSZIx2P9630hH4icnb5US0cMekYdm25ZoHg0yRy6mLHTGcnbSWzyq2IwTy5VFc4UQEkj76IYHvyqDVsOFQj4xtIxY4HUKBV3KrjA51k3N9HBecHt9Ls15JdxppA0qYofFJY1oZZgwxg9KpeES9L6nYe1Fio486VyegqQHapEYHxZFJJ8PcW8MEvALa8AxnItbiOcjHyrE4hJFxj4n+Go7abxIbSxvOL3DociL7SnhRKR3OR/g27OTSQysAVYFWDDIIIwQQazLTh/CuGtcGxtIoWuXDTugYmQqCAGZiTgdByGfWoZtx3eGVefDs0lx9ssL9rS78PwZHMbOrR891R1/PP961lwa04RE9qAJpWlee4nuUR5Z5pMFpGOMdsAdvmeqkbRGztsoxqxnlWHPe2skrMdY6DAByB13rCdJYep+Lc5OTVnjrfbfFm+5UjWwH3SGnjNwD5rKMnp9wf/jWdMIDPP8A9WqnxXJzHJgb8sirEKqNOm9i+sy/qtegmfPlqQasaoViPPCqy/PDVbtI4wcHDHmM8h7VSdiGVfEWTYeZSxA9AWAq1HJoXAHmGDqGa0RDNlYkkYsEVRgDb07VDcQzqTpfA+ucVHBxGJRobG3MEjc96KecShSpAAHIHO1XZFFb7JdTckJOvGpgcevKtyKafhHCuK3EkM9wzWM1tCkJ/wC0sjpqlbYnCgEn/DUHD5JnMR2Cx7EY5g7ZrpbZljeFiABkhi66k0sNJynIjfOOtRNXFouEqkmeX8Rmvp5J4XsXR0lbXISzHK7HJPl261jKgM6AgncEADOojfFbPE5Lu0n4vYSG4yb2Rg8qLEZIiSVdkXIBbYnDY3qtZPwaJ7BrsSmQ3MpuJF1MkNv4RSMrGuCWDHWd/wCUDrXAsVHoTqTts9K+BJov4XJbqUE0F3OZ9LEq0jsTqAPIbDb0rukbIGeteQ/DHxR8PcEtpLeYcQlkmuHlkljt4DtkhcjxAxJznme3SvReE/Enw5xTyWl+glUAmK6VraXHcCXY/JjWsXS0yat2jfRQM5ppI43CagDhlYZ7g5FGMinIDA+hqiWVnhheaFmC6omZkPVSylTg1cAXtvjFAFUIeRzufej1DnvQKyZdgPan7YqMHIX2ogcVI0QzEAb5+lZ8zskWR0JO2BsT61fkcjtzqldBGRgeo59M1DOjidNWOfvYcLIWYgZUnUv0BrAuGMMrI8TMw3yqHG/tVlLswNCwPkUsJNPLIbAz6Uck0srF1K4OeeNjk7DNYS09Lhk+J/weFM1m0sha3cku5JE5GfMe60YawJH3U679JkP0ylHq4nkkRFskn/sI3X/xotd8PxWyHvqs0/8A0ruPBDMkXk8IOFxj7wqxz7qAKmWQ5JPbG22aps76wXRVOANKIIwP9oFOZwBjtyz1q06Jos5UFm2z+1WYJgCjZyABv1/Os1SXPMgHt3qeNT+HPLJppiaOps5IRECXAZuhwN85A26Vrw3aeGxdtOgbjt7VxUMmjyqzd9+XyrpeAT2f2lrriJ/6ThsL38q7ZlaMgRR/NiD8qtySVshRbdIXxTb8CtYH+22F1Nxe4S0lvbzM+nhUDBViVQzaC/4dQxjG3PevNZFZXdSQSpIypypx1U9u1dH8Qcfk4yb+W5LNJLIDborEJCGkDNsOewx//KwZXaY+M4QM+7aFCjPL8K7VwKTes73FRxEMe0iepGK7RbHVaQXayATxjVKYgFCZACgY6964vOh437HP0rbt+LlYTFk4Oc77Htmo5E2sNOFxTdnrfwhx234hwhIZGC3vD5orG6j3wVmcrbyLnkrfh57HbkRXRJeWspEcU0bSNI8KoG85mQZaPH9QG5HPAJxgbfP9lxS74dfC/tSG0gCeFs+HcQhg5ikA6HAI6ggEbiug+N+MKnF+JjhsLQW3FrPhN6ZS3lnZ1Fyl3bhcAEg6Sck/i/q20i3VGU0rZ7MdYOknGCMg5B9t6IHNeA8I+NfibhEyE3s17ahh4trfSvNG69QjuSynsQfkeR9t4ZxK14rYWPELQkwXUIlQMQWQ5KtG2nbKkEH2rUyNVWUADPKkXj/qFQaxtnrUcqh18pwd8YOOVIdEVxcLqwc4O3XFZ88zMYyXbR4jKNJ7DsaVwXII56QdxzB55qvbESNGsjDyBnzqAGQCcEH61mzpg0tJAiFZgNO+S2fMDnflU0a2qrjQVIJyBk4NZ06uHmeKeHSSoPiOANRGkac9SartrjOLiYpK2HZUBYDPc/Woo17N/Z48EQ/hu4d+/jD/AONEFlGNF7CPTxpF/VaoAkHapFyWGTXSmefRZk8QN55Vc4BLK+sH5mhOkjOTkVHnORQ6jQImimOSvergcYBzisvJDBuoqbxSRvzppg0aqyHGR/hq3dPJ/CeIaWC7WoYDGXBl/D+WflWHDMRtnmcGr91KU4WNRx9ouAIwebLApDMPTLY+R7Upy+I+OPzK/A7C14lfNb3JlEQgeTMTBW1KygbkHbej41wS74TM/hiSawfzwzhSdIP8kukYDD8+foLfwyoRru4PMmOFc7bDztv9K6LinH4uFogQF7yRAyI34Y1YbO3fPQUVFQtguznSPOW1EAkHG4BxsT70ylhjGfatO94tfX5Y3MpcE6tLfhB9ByrPyelYp36jaUUnjLdvsrE7+nY1ptIOJcIjWUBrr4eI8MndpeE3EuCjekMjDHpMeibYsLSB9hqGPMB2rUtJ4LWeG6ILJomiliAyJ0lQxtA/o4JBPTIPSp8ZVXH+jW4P8PcU44zRWKx64ljkk8VFEKI+dJY46422Neq8L4fDwXhnDbFBCtxFAovRAAqNcHctgbZ3wT6DtWX8KXXA+FfD9vDaT+LPcPcSNKyFHkCSaQrg9VBAYdD6EZ1DkoWY+eQmV/RjvVwVEybfpcacYIBwf0qpNfOqnBG3Lcb1ky3hWRhk8icYzsO2KybziDqhddTBtWMDO49a0EkbT3bOJ3KuGCjlvjPLNYU0vEWnlVCxVU1OFABC88jHaolvmWEMrMNMfiShgxGptxgA1p2cg8GO3ODLLGs0rlh5+bBSDsNyOfasmbx+JBa3CxtCrT+IfEMj+NGWII3BOvbymlFxuIiQ3SSySeI2GgA06enM86z0Y2yrLdzZkSXFsN98qx3KHBB3/wA5cTdXtwtxN52GWycnmSMk7VJeesxwakU5qOiBxWyOEkzimzTc6Y7DnTsKCzj9qIJKRsjY74/vVlbcReGJN5WRZHXrGGGVT3xuffFWoY1lLKX0ALqGMbk7ADNQ5FqBnIGjYeIrL1AYEZHpUvEJWeWKLPktoY4kAOQCRrbHqSTWgY1jzFKqyQM+NW3lIPPY5Hofl1wcyMs88ty2PJIJNxsZCxKj9T8qTd4OqNa0W4sw0AaJXiZnkMiiRPEBGQqN5SeQ32269ci9nuLm5uLi4leWeWRnkkkOWYnqcbVdM5ILE7knJO+S3U1BZWcd/wARtLSa6jtUupRELiVS0UbuCE14PInAJ6Zz0od3TGq62ij2rRsuD396yEIYoWO804Krj/Qv4if8zV/7MvDZp7aSExXMErwTiTBkWSM6WBYevbb61ordqqDfcAEYqnClbFB93RDf8MsOExcKe3V5DKLlLmSck+JIuhl8o2AwTgD6msOKO6up5IraMySLHNcCNMamWFDI+gdSACcdga6DiVyl1w5ldgJIWjmRepKnRj6E1z0FzPYXVhfxH721uY7qPcjzRSBwMjffGKzaVmrtRo3OB8d/h0sZmj8ewkmjmuIQAXR1UoJ7cnk4HPowAB5Ar28/F0+7EciywzIJIpUJKyxuMq49/wAuXMVynxRwiwtrqS+4UwNrdJHfrEmNBt7hfFVowORXcMPTO3I1OEvNc2V1bR4Z7NJL62APnNuTm4QL/Su0nplu+zj8XQn8tN/iPF4LS1luAoeZgyQI3V+ep8b6R1+nXbz264lxC7kd5rmU6jnSGKoB2CLhR9KucWncoqOcuzFTg5wi4Yj64+lY9Xdmcsw0rPjHELU6DK8sBwGikYtgZB8hO4/T0ruhxaF4Ynsm1LHbrI0mNOtCurSxbYEHIavM61uGXhihvIXQyoUBCeIUGGYAnIB9Me9S0OD2ifiXEbiadmWRsAjGk4UY6KAcYzWU0jMxY8zzopW877Abk4GwFQmpNmwBSpU4xWhyhCjUqGXIBAIJB5EDfBqLNHmHQmPE8XJ1kldGM7ADGfzoA0I2eRmd2y0jFnbqS3mJpRyeYYOAMgetRLKsaMxYfhYL3LbCq8c66k1qdCgZUHBYjuedZvw1+zRmdzGwTcFSOgJ+lQywGKw4ZNvi5N1Kx6Fll8HTt20j/l60d3cx5gZbbwVMIBC6cE5OGGjbsO9NJNAvDobWSGXxozNOrq8YTM/hkagMkjCjG45/SIzeOipRWqyqJAcjrypmwwwfyqEMB/Lv71ctpeFCP/qYrx5SzZ8KaNEx0wGQn86vll1VpWRxq8ujb43dpeQfD3FScz3/AAxbe/JOWa94e/2RpG9WXw2NZyXCrg9MVFfFvsnDXhhaOweS9Fr4sqSSmYGLxtWnGP5MDH61S8SXblj0IzTUnKKvBwSjJ/ZpSTq6SgnBaNsD/VkVnzvnSuOQFXPtHBsgmwuDyzm7bJ+YFZ8r63ZtGASdI1Zwudhms4Scnqa/uv8ApryrqsZ0UnEWfhfAAXIaG3uLYYGDphkULn6ms+GSWC4intbmWBkcSK8IAZGGRsT0OT9SOVUtcqpZh1Bhy8iIGwShkw4yN98GrUl7Y6MW9j4L5OW8eSTUCMYIf605SaaSVhBJx0pXcrTSlmx1OwCgaiTgAbAVXp2OTTVqjmfo6hSQCcAnc4JwO9FGxVmxtqVlP61HUiSMnJUJ/wBSg/rTYJ0yRmLamO5OBnFBg96kS6kQg+BanH9cCNnbG+ak+3yAAC1sMAY3tIc887nFRRp3f+ipSpaW9KfSfSrMhqW2KfS3pS0mgA9LyAEkYP4e1SpFHEW1qXOMBhyB5cqjiYIdL/hPI9jU7Z5k88b5qSlolONvlUc7lgx/qIHyFOW7H0z6VE4ZiMchyooGyOiUE5HzFHFbzzuI4Y3kkJA0xqWPbfFSTWk9qSsw0yaQSuVYgMMj8JO9VViRPqaThBTfFnxHxAOwvIQpP1iH1qlnlUtvISDb+QC5eKN2fYABwQ2rpjrTyw6JJIwVbw3eMvHko+liutT2PMUmsKhKmRnehK+UntR6GG5J+lWjaXPhpCYH8dndhGYj4mhRhi2dwB7Y7nslFlykmiK7GhraMbCOztPrJGJz+bGq4NW7mCYOgkRkkWGNHV8c0GkYOeWMYqEwHGcjPbIpUwUlRWPM0qORGQjUOYyP8FR1RixU4501SIueoBPTNA16DSqTwmpeE3Y/SlRfZB6T/Tn2P/1Swf6T9KvLEMZ1EHlgkfWkY/f/AJf2FaGJS0nH4T9DTYfouf8AbV5Y165+bGiEUXt8zQIz9MhyNAx6qaQSUd8dAen1rR8ODcllx65/vT6bbl5D8qRSdGeBJndQfcij903+Qq9pthyA/wCK/vT/AHWOn0jH7UeB6AOJcSMMVqsqJbxrpSOEeGCO7aRgn1NZ8qySHJcnGcbu3XPWtAmHro+qj9BTE25/p+RY/oBQ2BnpaSPgA4zgZIbFaDRuzMSFZj+IqhAJ6kCnDwjkGPtq/vTFgc4Eny/+zQMs2dzJw5zcRWEdxdZAhklGVtxg6mVDsWO2CRtj1q0nxLxw3MEktrbHw5VkRls7YTxspyGjkxkH/Ou+Zql5DxP9xFDmbPMg/wDlT0DQ4iBdXd1NHE8YeeV/vW1SEuQx1BToGN8Bdv0FX7M3+AfuaBVuDuZMf7qJlmx/3B/x/vSACW0Ei6SwB5qfLsfrWXJDNE2GHsVIYH5itBxMc5l/b9KARt1bPzalQWU4ofEPnYIg5liAT6AGrpFsAAHXA5elOIo9spnvnJH50SxR5AEajfmRRQJkJNuP5lPsp/ag+67N8laruhB/KB7AD9KEonY0UVYGonkKWuT+kbcqHUvQ4oS4HU+9WYh65T0ApHWcZPvQF1HfNISIehoAlCqeZ+lPoi6k/Wo/Fj7HNLxB/SaBkoSH1pFYxyX60HibbLQ627GgA8eg9qQ26AfKg1uehpwzdRSAlEjDlgY7ClrcjY1EWI5CkHbtTGTebHvTFeW9AJHpBn70hk4Q42pzG2OdRhnxzosuOZoABoW56hQmOT1xUuWPM0JLd6AI9JHMH60QFLfuaW9Awt6DUe1I59aEmpKFoTtQsi9BUnSmNWYke3YU4A7ClT5oGFpXtRAL6UBalqNABECm2ps01IAs0sjtTU3WgYYxSwPSgzT5NIYWmnxihBNLJNAEg9KfegBp8nagAs+lNtTFjQk0APkUsihpjQMMkUOfShoc0gP/2Q=="
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Gullivers_travels.jpg/375px-Gullivers_travels.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://th.bing.com/th/id/OIP.w1GHvlQqRFMntr-gLdbpAQHaNK?w=115&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRoAYn6250e1bb9lWI8KHcFznwyvIoiarqD5FgAzWGuQ40c03bt"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://th.bing.com/th/id/OIP.qheytk_LFEphNe73GzOasgAAAA?pid=ImgDet&w=190&h=190&c=7&dpr=1.5"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://th.bing.com/th/id/OIP.3x2fbZhDiKSk3aQBcycVXgHaEo?w=193&h=182&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
            
              </div>
            </div>
          </div>
        </div>
      </div>
<br/><br/><br/><br/>
      <section className="bg-teal-100">
  <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
        Used by Most Youngsters worldwide
      </h2>

      <p className="mt-4 text-gray-500 sm:text-xl">
        Sociopod is used by most youngsters worldwide and the number speaks it all !!
      </p>
    </div>

    <div className="mt-8 sm:mt-12">
      <dl
        className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:divide-x sm:divide-gray-100"
      >
        <div className="flex flex-col px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">
            Total Users
          </dt>

          <dd className="text-4xl font-extrabold text-teal-600 md:text-5xl">
            4.8M
          </dd>
        </div>

        <div className="flex flex-col px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">
            Official organizations
          </dt>

          <dd className="text-4xl font-extrabold text-teal-600 md:text-5xl">567</dd>
        </div>

        <div className="flex flex-col px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">
            Popularity among youth
          </dt>

          <dd className="text-4xl font-extrabold text-teal-600 md:text-5xl">#3</dd>
        </div>
      </dl>
    </div>
  </div>
</section>
<br/><br/><br/><br/>
<footer className="bg-white lg:grid lg:grid-cols-5">
  <div className="relative block h-32 lg:col-span-2 lg:h-full">
    <img
      src="https://images.unsplash.com/photo-1642370324100-324b21fab3a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
      alt=""
      className="absolute inset-0 h-full w-full object-cover footimg"
    />
  </div>

  <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="/register" className="text-gray-700 transition hover:opacity-75">
                Sign Up
              </a>
            </li>

            <li>
              <a href="/login" className="text-gray-700 transition hover:opacity-75">
                Login
              </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75">
                Games
              </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75">
                Organizations
              </a>
            </li>

            
          </ul>
        </div>

        <div>
         

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75">
                About
              </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75">
                Meet the Team
              </a>
            </li>

           
          </ul>
        </div>

        
      </div>
      
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
        <div>
          

        🌟 Welcome to Sociopod! 🌍 Connect, share 📸, and inspire 🤝 in our vibrant community. Together, we create moments worth sharing 📣. Join us today and be a part of the 🚀 social revolution! 🌐👥💬 #SociopodLife #ConnectShareInspire 🌈📱
        </div>


        
      </div>
    </div>

    <div className="mt-12 border-t border-gray-100 pt-12">
      <div className="sm:flex sm:items-center sm:justify-between">
        <ul className="flex flex-wrap gap-4 text-xs">
          <li>
            <a href="#" className="text-gray-500 transition hover:opacity-75">
              Terms & Conditions
            </a>
          </li>

          <li>
            <a href="#" className="text-gray-500 transition hover:opacity-75">
              Privacy Policy
            </a>
          </li>

          <li>
            <a href="#" className="text-gray-500 transition hover:opacity-75">
              Cookies
            </a>
          </li>
        </ul>

        <p className="mt-8 text-xs text-gray-500 sm:mt-0">
          &copy; 2023. Sociopod. All rights reserved.
        </p>
      </div>
    </div>
    
  </div>
</footer>
<br/><br/>
      </div>
    );
}