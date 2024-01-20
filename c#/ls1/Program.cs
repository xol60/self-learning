using System;
using System.Text;


namespace LS1
{
    class Program
    {
        public static string[] numbers = new string[] { "không", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín" };
        public static string[] values = new string[] { "", "nghìn", "triệu", "tỷ" };
        public static string[] cals = new string[] { "", "mươi", "trăm" };
        public static void NumberToText(long number)
        {
            char[] val = Convert.ToString(number).ToCharArray();
            int n = val.Length;
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < n; i++)
            {
                int ch = val[i] - '0';
                if (ch != 0) sb.Append(numbers[ch] + ' ');
                sb.Append(cals[(n - i - 1) % 3] + ' ');
                int index = ((n - i) % 9);
                if ((index - 1) % 3 == 0)
                {
                    sb.Append(values[(index - 1) / 3] + ' ');
                }
                if ((n - i - 1) % 9 == 0 && (n - 1 - i) > 0)
                {
                    for (int j = 0; j < (n - i - 1) / 9; j++)
                    {
                        sb.Append(values[3] + ' ');
                    }
                }
            }
            Console.WriteLine(sb.ToString());
        }
        static void Main(string[] args)
        {
            NumberToText(1135235412431234213);
        }
    }
}