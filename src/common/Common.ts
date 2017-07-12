'use strict';

/**
 * 比較可能オブジェクトのインターフェース
 */
export interface IComparable<T> {
    /**
     * オブジェクトと比較するメソッド
     * @param other 比較対象のオブジェクト
     * @returns 比較対象の方が大きい場合は正の値、等しい場合は0、小さい場合は負の値を返す
     */
    compareTo(other: T): number;
}

/**
 * 比較器のインターフェース
 */
export interface IComparator<T> {
    /**
     * 2つのオブジェクトを比較するメソッド
     * @param one 一つ目のオブジェクト
     * @param another もう片方のオブジェクト
     * @returns 一つ目のオブジェクトに対し、もう片方のオブジェクトの方が大きい場合は正の値、等しい場合は0、小さい場合は負の値を返す
     */
    compare(one: T, another: T): number;
}