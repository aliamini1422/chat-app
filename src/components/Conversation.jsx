import ChatProfile from "./ChatProfile";

const users = [
  {name: 'مرجان خلیل پور', count: 6, date: "1400/12/02", time: "12:34", img: "https://s3-alpha-sig.figma.com/img/e2ee/da53/740ff13009e75e860810da076ba07d6b?Expires=1690761600&Signature=f3t4ZI~eJiLbYwjTDZ5ytl~PM4KX7V9FDdYlvaFbONG3LrahAadzz00X1CUVL9UajvpgVlFZOLExZqre-hImbaf7Y~td-CxB6XMCjmgTBawIaqsTJcZa83YEKwlEEPdQKmBP6WicxiTkaV3I4Me6n9mYYu90kTfyeBS2f8~ilNnjLCK-xSt5jIuDS5mnY-Zw2uBbNAK9TpHZpGXyZgacC1aUFDWUuSj0KrlZdQujECwQENjMZOCkUwsD1wUE5N8LMFvrouyBsjM5S5~vNlokqU3p9Qma~e9t-WsvEZezECx5rAz~gNXP6vAIJp~jM8MiUQXYMW5w1Uzi8eAZdbPnAQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"},
  {name: 'مرجان خلیل پور', count: 6, date: "1400/12/02", time: "12:34", img: "https://s3-alpha-sig.figma.com/img/ddb4/8f5a/8aab69df694ef50b95624e991829d4b9?Expires=1690761600&Signature=Ik8vgGQeW3TiZzkMVkYCo3da0gCiC3UFUfOMmwyfKNq7MUOvS9wNHgrlrA-wnvKNU4S08k4LeXKvkNC9Cvlf7d6lVV5iW1iPnGE0figZdqOlE8J1dG5FgsLR56fpWzwxNteSZ9AqLTzGVAcF8HRJz5gry~VxnZfLTideO9aE2RLlj~qlxS3-Oqu283m5omjKqYadi~RDhEtMKbbxsfA2ahHKoUHNHXEyDTaezUmZx71mVdEymB0u0W-dnSlZOgXhgfRN47oAdOBwV21jjp~TJN0216gRcba0X4elB-nmkTS4vYTd-EJVuLmlmd-7p22TBnQZkLIZOLTLajiI3n1NVg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"},
  {name: 'مرجان خلیل پور', count: 6, date: "1400/12/02", time: "12:34", img: "https://s3-alpha-sig.figma.com/img/e8a3/5966/4421b8a19b739f392895840c0ec82668?Expires=1690761600&Signature=StCZH1TCcQNDBMGMJbIdhmKkd8IOORtHEFGkvQwnXq-4kb6ww0OQoDgh9PFcURntcA5wv7P7RduUBcMaG2TYerp-nBgk03EvR5VkKrUFPxHAaqUJcPfSZhyL7IXZrCfMSyHcJip570iOVRqLd3tqgTCZz5w~BtRiJemDkjvuKkEY9VJ14hbwev7UepeCMH-YF7NQa3guSYgJG1G7C2VkYQASxY39Cohhq0RpcPokE3B8Mgn4v7LzcS1ySdnWPLGc-3K0JuwN3qPrkSZ6CGrYawZT4GIM5chSLxDcNKdAJJTYhUsvz7UA1Ue8JKJc94oh~PV0d0bfU1zNhtXyeCmC5A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"},
  {name: 'مرجان خلیل پور', count: 6, date: "1400/12/02", time: "12:34", img: "https://s3-alpha-sig.figma.com/img/f1a5/df50/72c6f7b77304e88dd869420eb0fd64b4?Expires=1690761600&Signature=Py9gUog0z69tuQm5TfaTpNqjGEJYNpQBb7wFJmgJKw7n-4o-ROsRcm6864Qm-vBFVj1~~254lOlMtqUFxD6d0d2t7-EXwfGVWZs7QjEncTawO2rF7VpUEJ8UvWWKCf--Btkk0A0lqztv9KsSeAe68dT07LpgSSY6yH4lfHfe9n0HnK3CnwRv8BD3wGxOqTw2Ji3i4KUVzlkU5K0FYN3aLwwPelsKedRobcnzC-u46gBCbofy~VTo-T8IQpuysmZRTQWHS7iijICRFq~jOgEiBvLBIWkZd-zS1gI3nlMpphvJ5sLPBy41BE2h0toPMyaHaAFYhWjQyRLEmuuMqL93PA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"},
  {name: 'مرجان خلیل پور', count: 6, date: "1400/12/02", time: "12:34", img: "https://s3-alpha-sig.figma.com/img/c414/d14d/182d558cd8a9154fe62a283c2e9e5827?Expires=1690761600&Signature=LaxkoFRzzsCe1IOcUHG3J8DQpJEyJMdJsA6Vp~MldX3vvlMeu32wibIJQTCLWhNA4A4E-pKbX1UD1dSgY1b6i4pVbZdliH4-U97wQs1QYYO62kD4g6Wuoa21NiuXqJqF~l1calmwAmta9FpbLs~q8jncTIsddgsHRaXRArOtiqHU2Z0YO28xCk6Mz4gEpHVNyAQKHP7cuJwFlEwZHjYiAWqum6zfKqf6FdpA~vJ93VS93Q1IGEVpXhVtsgZY3im6ZpZzFFhVHfCMHdRJANqLHcVCqthr9EDePTbPtq0erECyE2d3pVCBMFeJkauCktD5hHDkd0Cv0P8kIf4IxuA-og__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"},
  {name: 'مرجان خلیل پور', count: 6, date: "1400/12/02", time: "12:34", img: "https://s3-alpha-sig.figma.com/img/6533/cecc/504632731de671ed219b9259fba71642?Expires=1690761600&Signature=KsuBsDQogvUfFaeDs7cTJfQiRPGAR4g8RECS~OL75xQedWi28vTI4OU2oP5ZmsTUoNfF-4v-tubQ6zv6cgq0eMQ~MbMJHW30EM1xNEr57lsdx-d-J2hPfCf~J~YpAYzDH8xQqP88AOzCxo9rE5PctRc0qmPz5Jm--GM4dBFeKmo72j7x0U7sFeeh9stzO6YdyKL8vSV7JJEokhfNUx0uvlYrSK2tmK6hsfo~HIHrvAbEZNDRSX479VxK0I5vm8NIogNHly5LWPUKQMOx1uH-Ne7D9oRkb5pCOpwv7UvUko7BsBKPuzkVLoOjI6qA-WoP5z-GSWhFBuwOE8kgzdIQ-g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"},
]
export default function Conversation(){
  return(
    <div className="w-full flex flex-col gap-2 items-end">
      <h2 className="text-[#FD2F70] text-[18px] font-bold">گفتگوها</h2>
      {
        users.map((user, index)=>(
          <ChatProfile user={user} key={index} />
        ))
      }
    </div>
  )
}