﻿namespace _01.ReverseStrings
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();

            while (input != "end") 
            {
                //drawer -> reward
                string reversedInput = "";

                for (int i = input.Length - 1; i >= 0; i--) 
                {
                    reversedInput += input[i];
                }
                Console.WriteLine($"{input} = {reversedInput}");


                input = Console.ReadLine();
            }
        }
    }
}
