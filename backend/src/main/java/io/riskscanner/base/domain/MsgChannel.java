package io.riskscanner.base.domain;

import java.io.Serializable;

public class MsgChannel implements Serializable {
    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column msg_channel.msg_channel_id
     *
     * @mbg.generated Thu Aug 26 18:58:34 CST 2021
     */
    private Long msgChannelId;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column msg_channel.channel_name
     *
     * @mbg.generated Thu Aug 26 18:58:34 CST 2021
     */
    private String channelName;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table msg_channel
     *
     * @mbg.generated Thu Aug 26 18:58:34 CST 2021
     */
    private static final long serialVersionUID = 1L;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column msg_channel.msg_channel_id
     *
     * @return the value of msg_channel.msg_channel_id
     *
     * @mbg.generated Thu Aug 26 18:58:34 CST 2021
     */
    public Long getMsgChannelId() {
        return msgChannelId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column msg_channel.msg_channel_id
     *
     * @param msgChannelId the value for msg_channel.msg_channel_id
     *
     * @mbg.generated Thu Aug 26 18:58:34 CST 2021
     */
    public void setMsgChannelId(Long msgChannelId) {
        this.msgChannelId = msgChannelId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column msg_channel.channel_name
     *
     * @return the value of msg_channel.channel_name
     *
     * @mbg.generated Thu Aug 26 18:58:34 CST 2021
     */
    public String getChannelName() {
        return channelName;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column msg_channel.channel_name
     *
     * @param channelName the value for msg_channel.channel_name
     *
     * @mbg.generated Thu Aug 26 18:58:34 CST 2021
     */
    public void setChannelName(String channelName) {
        this.channelName = channelName == null ? null : channelName.trim();
    }
}